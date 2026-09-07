import * as React from "react"
import { cn } from "@/lib/cn"

/** Which semantic token the stars and the core glow are painted with. */
export type GalaxyTone = "foreground" | "primary" | "muted" | "chart"

/**
 * Ink per tone — semantic tokens only. The value is written onto the canvas as
 * an inline `color`, then the *computed* string is read back and handed to the
 * 2D context verbatim. Any syntax the browser resolves (oklch(), color-mix(),
 * a brand colour the consumer put behind the token) works, and nothing here
 * ever parses or hard-codes a colour.
 */
const TONE_INK: Record<GalaxyTone, string> = {
  foreground: "var(--foreground)",
  primary: "var(--primary)",
  muted: "var(--muted-foreground)",
  chart: "var(--chart-1)",
}

const TAU = Math.PI * 2
const DEG = Math.PI / 180
/** 3x screens would triple fill cost for no visible gain on 1-2px dots. */
const MAX_DPR = 2
/** A backgrounded tab resumes with a huge gap — clamp so the disc never teleports. */
const MAX_DT = 1 / 30

const DEFAULT_COUNT = 420
/** Hard ceiling — the only thing standing between a typo'd `count` and a frozen tab. */
const MAX_STARS = 1400
/** A star needs this much canvas to itself; small containers get proportionally fewer. */
const DEFAULT_DENSITY = 420

const DEFAULT_ARMS = 4
const MAX_ARMS = 8
const DEFAULT_WINDING = 0.9
const MAX_WINDING = 3
const DEFAULT_SCATTER = 0.55
/** Arms thinner than this would leave almost every star unlit. */
const MIN_SCATTER = 0.08
const DEFAULT_SHEAR = 0.5
/** Inclination in degrees; 0 is face-on. */
const DEFAULT_TILT = 58
/** Past this the disc is a one-pixel line and the arms stop reading. */
const MAX_TILT = 82
const DEFAULT_CORE = 0.22
/** More than this in the bulge and the thing is a blob, not a galaxy. */
const MAX_CORE = 0.6
const DEFAULT_SEED = 5

/** Normalised bulge radius. The arms start where the bulge ends. */
const BULGE_R = 0.18
/** ln(rim / bulge) — the denominator of the logarithmic spiral. */
const LOG_SPAN = Math.log(1 / BULGE_R)

/** Angular rate at the very centre, rad/s at `speed` 1 — one turn per ~52s. */
const BASE_OMEGA = 0.12
/**
 * Softening radius of the rotation curve, normalised. A real flat rotation
 * curve is omega = v / r, which spins to infinity at the centre and aliases
 * into noise; the constant term bounds it while keeping inner stars faster
 * than outer ones.
 */
const OMEGA_SOFT = 0.22
/** Normalised radius where the arm pattern corotates with the disc. */
const COROTATION = 0.6

const MIN_DOT = 0.65
const MAX_DOT = 1.9
const MIN_ALPHA = 0.45
const MAX_ALPHA = 1
/** Star brightness at the rim relative to the core. */
const RIM_BRIGHT = 0.45
/** Dot radius at the rim relative to the core. */
const RIM_SIZE = 0.72

/** Disc radius as a fraction of the fitted box — above 0.5 it overflows a little, on purpose. */
const DISC_FILL = 0.55
/** A near edge-on disc must not be allowed to inflate the radius without bound. */
const SQUASH_FIT_MIN = 0.3

/** Halo radius as a multiple of the bulge radius. */
const GLOW_R = 2.6
/** Nucleus radius as a multiple of the bulge radius. */
const NUCLEUS_R = 1.05
/** Halo peak alpha relative to the nucleus. */
const GLOW_SOFT = 0.55
/** Ceiling on the nucleus alpha, so a big bulge never paints a solid disc. */
const GLOW_MAX = 0.22

const clamp = (v: number, lo: number, hi: number) => (v < lo ? lo : v > hi ? hi : v)

/**
 * Deterministic integer hash -> [0, 1). Every star property is addressed by
 * (id, salt) instead of drawn from a stream, so star #5 is the same star no
 * matter how many exist around it: growing the pool after a resize never
 * reshuffles what is already on screen, and the same `seed` always paints the
 * same galaxy. Math.random() is never called — not in render (that would break
 * purity and SSR) and not in the loop (screenshots must be reproducible).
 */
function hash(a: number, b: number) {
  let x = Math.imul(a ^ 0x9e3779b9, 0x85ebca6b) ^ Math.imul(b + 0x165667b1, 0xc2b2ae35)
  x = Math.imul(x ^ (x >>> 15), 0x2545f491)
  return ((x ^ (x >>> 13)) >>> 0) / 4294967296
}

interface Star {
  /** Distance from the core, normalised to the disc radius. Scale-free, so a resize touches nothing. */
  rn: number
  /** Angle at elapsed 0, radians. */
  theta0: number
  /** Angular velocity at this radius, rad/s before `speed`. */
  omega: number
  /** Angle of this star's arm centreline at its own radius. Unused by bulge stars. */
  arm: number
  /** Dot radius at the core, CSS px. */
  size: number
  /** Own brightness, before the radial and arm profiles. */
  alpha: number
  /** Bulge stars belong to no arm: they are lit all the way round. */
  bulge: boolean
}

function subscribeReducedMotion(callback: () => void) {
  const mq = window.matchMedia("(prefers-reduced-motion: reduce)")
  mq.addEventListener("change", callback)
  return () => mq.removeEventListener("change", callback)
}

function useReducedMotion() {
  return React.useSyncExternalStore(
    subscribeReducedMotion,
    () => window.matchMedia("(prefers-reduced-motion: reduce)").matches,
    () => false,
  )
}

export interface GalaxyProps extends React.ComponentProps<"div"> {
  /** Requested star count. The effective count is additionally capped by container area (`density`) and by a 1400-star ceiling. */
  count?: number
  /** CSS px² of canvas required per star — the area cap on `count`. Lower = denser. */
  density?: number
  /** Multiplier on the rotation. Negative spins the disc the other way; `0` freezes it to the still frame. */
  speed?: number
  /** Number of spiral arms, 1–8. */
  arms?: number
  /** Turns an arm makes between the bulge and the rim. Negative flips the chirality. */
  winding?: number
  /** Width of the lit band around an arm, as a fraction of the gap between arms. `1` is an even disc. */
  scatter?: number
  /** How much faster the inner disc turns than the rim. `0` rotates rigidly. */
  shear?: number
  /** Inclination in degrees: `0` is face-on, `82` is nearly edge-on. */
  tilt?: number
  /** Share of stars in the central bulge, and the strength of the core glow. `0` removes both. */
  core?: number
  /** Which semantic token the field is painted with. */
  tone?: GalaxyTone
  /** Integer seed for the star map. Same seed, same galaxy. */
  seed?: number
}

/**
 * Galaxy — a spiral galaxy on one canvas, for hero, auth, launch and 404
 * backdrops. Children render above the canvas; the canvas is inert
 * (`aria-hidden`, `pointer-events-none`) and never intercepts a click.
 *
 * Stars are threaded onto logarithmic spiral arms and orbit differentially, so
 * the inner disc leads the rim. The arms themselves are a *pattern* that
 * rotates at its own rate: stars stream through it, brightening as they cross
 * an arm and fading in the gaps. Because a star's offset from its arm is
 * wrapped by exactly one arm spacing — at which point the arm profile has
 * already faded it to zero — the pattern never winds up, however long the page
 * stays open.
 *
 * The loop is suspended whenever the container scrolls off screen or the tab
 * is hidden, and under `prefers-reduced-motion: reduce` it paints exactly one
 * static frame — a complete galaxy, just a still one.
 */
export function Galaxy({
  count = DEFAULT_COUNT,
  density = DEFAULT_DENSITY,
  speed = 1,
  arms = DEFAULT_ARMS,
  winding = DEFAULT_WINDING,
  scatter = DEFAULT_SCATTER,
  shear = DEFAULT_SHEAR,
  tilt = DEFAULT_TILT,
  core = DEFAULT_CORE,
  tone = "foreground",
  seed = DEFAULT_SEED,
  className,
  children,
  ...props
}: GalaxyProps) {
  const canvasRef = React.useRef<HTMLCanvasElement>(null)
  const reduced = useReducedMotion()

  // Clamp every numeric prop up front and treat non-finite values as the
  // default: NaN arms would divide the circle into nothing, count 1e6 would
  // freeze the tab, tilt 140 would mirror the disc, and a scatter of 0 would
  // leave a black box.
  const safeCount = Number.isFinite(count) ? Math.max(0, Math.floor(count)) : DEFAULT_COUNT
  const safeDensity = Number.isFinite(density) ? Math.max(120, density) : DEFAULT_DENSITY
  const safeSpeed = Number.isFinite(speed) ? clamp(speed, -4, 4) : 1
  const safeArms = Number.isFinite(arms) ? clamp(Math.round(arms), 1, MAX_ARMS) : DEFAULT_ARMS
  const safeWinding = Number.isFinite(winding)
    ? clamp(winding, -MAX_WINDING, MAX_WINDING)
    : DEFAULT_WINDING
  const safeScatter = Number.isFinite(scatter) ? clamp(scatter, MIN_SCATTER, 1) : DEFAULT_SCATTER
  const safeShear = Number.isFinite(shear) ? clamp(shear, 0, 1) : DEFAULT_SHEAR
  const safeTilt = Number.isFinite(tilt) ? clamp(tilt, 0, MAX_TILT) : DEFAULT_TILT
  const safeCore = Number.isFinite(core) ? clamp(core, 0, MAX_CORE) : DEFAULT_CORE
  const safeSeed = Number.isFinite(seed) ? Math.trunc(seed) | 0 : 0

  // Simulated seconds live outside the effect so that changing a prop at
  // runtime (speed, tone, count) re-seeds the pool without rewinding the disc
  // to its starting angle: every star's angle is theta0 + omega * elapsed, so
  // preserving `elapsed` preserves the whole frame.
  const elapsedRef = React.useRef(0)

  React.useEffect(() => {
    const canvas = canvasRef.current
    if (!canvas) return
    const ctx = canvas.getContext("2d")
    if (!ctx) return

    /** Pool — created on retarget, recycled in place, never allocated per frame. */
    const stars: Star[] = []

    /** CSS px of the canvas box. */
    let width = 0
    let height = 0
    /** Semi-major axis of the disc, CSS px. */
    let maxR = 1
    /** Resolved paint colour, handed straight to the canvas — never parsed by hand. */
    let ink = ""
    /** Cached gradients; rebuilt on resize and on a theme flip, never per frame. */
    let nucleus: CanvasGradient | null = null
    let halo: CanvasGradient | null = null
    let rafId: number | null = null
    let lastFrame = 0
    let elapsed = elapsedRef.current
    let onScreen = true
    let pageVisible = document.visibilityState === "visible"

    /** Foreshortening of the disc: 1 is face-on, 0 would be a line. */
    const squash = Math.cos(safeTilt * DEG)
    const spacing = TAU / safeArms
    const half = spacing / 2
    /** Half-width of the lit band around an arm, radians. */
    const band = half * safeScatter
    const glowAlpha = Math.min(GLOW_MAX, safeCore)

    /** Softened rotation curve: fast in the middle, slower at the rim. */
    const omegaAt = (rn: number) =>
      BASE_OMEGA * (1 - safeShear + (safeShear * OMEGA_SOFT) / (rn + OMEGA_SOFT))
    /**
     * The arm pattern is not glued to the stars: it turns at the disc's own
     * rate at the corotation radius. Inside it stars overtake the arms, outside
     * they fall behind — which is what makes the crossings visible instead of
     * every star sitting at a fixed brightness forever.
     */
    const patternOmega = omegaAt(COROTATION)

    const createStar = (index: number): Star => {
      const id = (safeSeed ^ Math.imul(index + 1, 0x9e3779b1)) | 0
      const bulge = hash(id, 1) < safeCore
      const u = hash(id, 2)
      let rn: number
      let arm = 0
      let theta0: number

      if (bulge) {
        // Slightly concentrated toward the middle; angle uniform, so the bulge
        // reads as a round nucleus rather than part of the spiral.
        rn = BULGE_R * Math.pow(u, 0.85)
        theta0 = hash(id, 3) * TAU
      } else {
        // Exponent above 0.5 tilts the surface density toward the centre —
        // 0.5 would be a flat, evenly covered disc.
        rn = BULGE_R + (1 - BULGE_R) * Math.pow(u, 1.15)
        const armIndex = Math.floor(hash(id, 4) * safeArms) % safeArms
        // Logarithmic spiral: theta grows with ln(r), i.e. r = r0 * e^(b*theta),
        // which is the shape real arms have — a constant pitch angle
        // atan(LOG_SPAN / (winding * TAU)) all the way out.
        arm = armIndex * spacing + safeWinding * TAU * (Math.log(rn / BULGE_R) / LOG_SPAN)
        // Offset from the arm is seeded uniformly across one whole spacing.
        // Concentrating stars into the arm instead would look right for one
        // frame and then drift off the pattern: every star at a given radius
        // shears at the same rate, so a density clump travels while the lit
        // band does not. Here the arms are made of brightness only, and they
        // stay put forever.
        theta0 = arm + (hash(id, 5) - 0.5) * spacing
      }

      return {
        rn,
        theta0,
        omega: omegaAt(rn),
        arm,
        size: MIN_DOT + hash(id, 6) * (MAX_DOT - MIN_DOT),
        alpha: MIN_ALPHA + hash(id, 7) * (MAX_ALPHA - MIN_ALPHA),
        bulge,
      }
    }

    /** Grow/shrink the pool to the capped target without disturbing existing stars. */
    const retarget = () => {
      const areaCap = Math.max(1, Math.floor((width * height) / safeDensity))
      const target = Math.max(0, Math.min(safeCount, areaCap, MAX_STARS))
      if (stars.length > target) stars.length = target
      while (stars.length < target) stars.push(createStar(stars.length))
    }

    const buildGlow = () => {
      nucleus = null
      halo = null
      if (!ink || glowAlpha <= 0 || maxR <= 0) return
      // Gradient coordinates are resolved against the transform in force when
      // the gradient is *used*, so these live in the translated, squashed space
      // set up by drawGlow(). Built once per resize / theme flip, not per frame.
      const inner = maxR * BULGE_R * NUCLEUS_R
      const outer = maxR * BULGE_R * GLOW_R
      try {
        nucleus = ctx.createRadialGradient(0, 0, 0, 0, 0, inner)
        nucleus.addColorStop(0, ink)
        // Canvas interpolates gradient stops in premultiplied space, so fading
        // to `transparent` never drags a grey or black cast through the midpoint.
        nucleus.addColorStop(1, "transparent")
        halo = ctx.createRadialGradient(0, 0, 0, 0, 0, outer)
        halo.addColorStop(0, ink)
        halo.addColorStop(1, "transparent")
      } catch {
        // Unlike fillStyle, which ignores a colour it cannot parse, addColorStop
        // throws. An environment that hands back an unresolved var() (a test DOM,
        // say) must lose the glow, not the whole field.
        nucleus = null
        halo = null
      }
    }

    const readInk = () => {
      const next = getComputedStyle(canvas).color
      if (next === ink) return
      ink = next
      buildGlow()
    }

    const drawGlow = () => {
      if (!nucleus || !halo) return
      ctx.save()
      ctx.translate(width / 2, height / 2)
      // The bulge is projected exactly like the disc, so a tilted galaxy gets
      // an elliptical core instead of a circle pasted onto an ellipse.
      ctx.scale(1, squash)
      ctx.globalAlpha = glowAlpha * GLOW_SOFT
      ctx.fillStyle = halo
      ctx.beginPath()
      ctx.arc(0, 0, maxR * BULGE_R * GLOW_R, 0, TAU)
      ctx.fill()
      ctx.globalAlpha = glowAlpha
      ctx.fillStyle = nucleus
      ctx.beginPath()
      ctx.arc(0, 0, maxR * BULGE_R * NUCLEUS_R, 0, TAU)
      ctx.fill()
      ctx.restore()
      ctx.globalAlpha = 1
    }

    const draw = () => {
      ctx.clearRect(0, 0, width, height)
      if (!ink) return
      drawGlow()
      ctx.fillStyle = ink

      const cx = width / 2
      const cy = height / 2
      /** Where the arm pattern has turned to by now. */
      const patternA = patternOmega * elapsed

      for (const s of stars) {
        // Angle is recomputed from elapsed rather than integrated, so no
        // rounding error accumulates and a paused loop resumes exactly.
        const theta = s.theta0 + s.omega * elapsed
        let alpha = s.alpha * (1 - (1 - RIM_BRIGHT) * s.rn)

        if (!s.bulge) {
          // Offset from this star's arm, wrapped into one spacing. The wrap is
          // free of artefacts because the pattern is arms-fold symmetric AND
          // the profile below is already zero at the wrap point: a star always
          // crosses the boundary invisible.
          let d = theta - s.arm - patternA
          d -= Math.floor(d / spacing + 0.5) * spacing
          const u = Math.abs(d) / band
          if (u >= 1) continue
          // Smooth arm profile: brightest on the centreline, zero at the edge
          // of the lit band. This is the whole spiral — density is uniform in
          // angle, only brightness is not.
          const f = 1 - u * u
          alpha *= f * f
        }

        if (alpha <= 0.004) continue

        const r = s.rn * maxR
        const x = cx + Math.cos(theta) * r
        const y = cy + Math.sin(theta) * r * squash
        if (x < -4 || x > width + 4 || y < -4 || y > height + 4) continue

        ctx.globalAlpha = alpha
        ctx.beginPath()
        ctx.arc(x, y, s.size * (1 - (1 - RIM_SIZE) * s.rn), 0, TAU)
        ctx.fill()
      }

      ctx.globalAlpha = 1
    }

    const frame = (now: number) => {
      rafId = requestAnimationFrame(frame)
      const dt = lastFrame === 0 ? 1 / 60 : Math.min((now - lastFrame) / 1000, MAX_DT)
      lastFrame = now
      elapsed += dt * safeSpeed
      elapsedRef.current = elapsed
      draw()
    }

    const stop = () => {
      if (rafId === null) return
      cancelAnimationFrame(rafId)
      rafId = null
    }

    /** Nothing to animate when the disc is frozen or motion is off. */
    const animated = safeSpeed !== 0 && !reduced

    /** No-ops unless the field is on screen, the tab is visible and motion is allowed. */
    const start = () => {
      if (rafId !== null || !animated || !onScreen || !pageVisible || width <= 0) return
      lastFrame = 0
      rafId = requestAnimationFrame(frame)
    }

    /**
     * @param deviceW exact backing-store width in device px, when the browser
     *        reports it. `devicePixelRatio` stays the authority on scale, and
     *        the device box is trusted only when it agrees with it: emulated
     *        and remoted surfaces exist that report a 1:1 box while the page
     *        renders at 2x, and following them there ships a blurry canvas.
     *        When the two do agree, the box's exact integers absorb the
     *        sub-pixel rounding of fractional ratios such as 1.25x and 1.5x.
     */
    const resize = (cssW: number, cssH: number, deviceW?: number, deviceH?: number) => {
      if (cssW <= 0 || cssH <= 0) return

      const reported = window.devicePixelRatio || 1
      const fromBox = deviceW && deviceH ? deviceW / cssW : 0
      const dpr = Math.min(Math.max(reported, fromBox), MAX_DPR)
      let backingW: number
      let backingH: number
      if (deviceW && deviceH && Math.abs(fromBox - dpr) < 0.01) {
        backingW = deviceW
        backingH = deviceH
      } else {
        backingW = Math.round(cssW * dpr)
        backingH = Math.round(cssH * dpr)
      }
      canvas.width = backingW
      canvas.height = backingH
      // Writing canvas.width resets the context, so the transform is
      // (re)applied here — everything below draws in CSS px. Deriving the scale
      // from the actual backing size instead of the nominal ratio keeps the
      // mapping exact after the rounding above.
      ctx.setTransform(backingW / cssW, 0, 0, backingH / cssH, 0, 0)

      width = cssW
      height = cssH
      // Fit the projected ellipse to the box: a tilted disc is shorter, so it
      // may be wider. The floor on the squash keeps a near edge-on disc from
      // demanding an unbounded radius.
      maxR = DISC_FILL * Math.min(width, height / Math.max(squash, SQUASH_FIT_MIN))

      // Star radii are normalised, so a resize needs no pass over the pool:
      // nothing reshuffles, nothing has to be rescaled.
      retarget()
      readInk()
      buildGlow()
      // Repaints the still frame, and keeps a frozen disc from showing an
      // empty canvas after a resize.
      if (rafId === null) draw()
      start()
    }

    let resizeObserver: ResizeObserver | null = null
    if (typeof ResizeObserver === "undefined") {
      resize(canvas.clientWidth, canvas.clientHeight)
    } else {
      // observe() fires once immediately — that callback is the initial sizing.
      resizeObserver = new ResizeObserver(entries => {
        const entry = entries[entries.length - 1]
        if (!entry) return
        const device = entry.devicePixelContentBoxSize?.[0]
        resize(
          entry.contentRect.width,
          entry.contentRect.height,
          device?.inlineSize,
          device?.blockSize,
        )
      })
      try {
        // Exact device pixels where available; browsers that do not know this
        // box throw a WebIDL TypeError from observe() rather than ignoring it.
        resizeObserver.observe(canvas, { box: "device-pixel-content-box" })
      } catch {
        resizeObserver.observe(canvas)
      }
    }

    let intersectionObserver: IntersectionObserver | null = null
    if (typeof IntersectionObserver !== "undefined") {
      intersectionObserver = new IntersectionObserver(entries => {
        const entry = entries[entries.length - 1]
        if (!entry) return
        onScreen = entry.isIntersecting
        if (onScreen) {
          readInk()
          start()
        } else {
          stop()
        }
      })
      intersectionObserver.observe(canvas)
    }

    const handleVisibility = () => {
      pageVisible = document.visibilityState === "visible"
      if (pageVisible) {
        readInk()
        start()
      } else {
        stop()
      }
    }
    document.addEventListener("visibilitychange", handleVisibility)

    // Theme flips land as a class/style change on <html>: re-read the ink,
    // rebuild the glow gradients from it, and when the loop is paused repaint
    // the still frame so it never keeps the old theme's colour.
    const themeObserver = new MutationObserver(() => {
      readInk()
      if (rafId === null) draw()
    })
    themeObserver.observe(document.documentElement, {
      attributes: true,
      attributeFilter: ["class", "style", "data-theme"],
    })

    return () => {
      stop()
      resizeObserver?.disconnect()
      intersectionObserver?.disconnect()
      themeObserver.disconnect()
      document.removeEventListener("visibilitychange", handleVisibility)
    }
  }, [
    safeCount,
    safeDensity,
    safeSpeed,
    safeArms,
    safeWinding,
    safeScatter,
    safeShear,
    safeTilt,
    safeCore,
    safeSeed,
    tone,
    reduced,
  ])

  return (
    <div className={cn("relative isolate overflow-hidden", className)} {...props}>
      <canvas
        aria-hidden="true"
        className="pointer-events-none absolute inset-0 block size-full"
        ref={canvasRef}
        style={{ color: TONE_INK[tone] }}
      />

      <div className="relative z-10">{children}</div>
    </div>
  )
}

export default Galaxy
