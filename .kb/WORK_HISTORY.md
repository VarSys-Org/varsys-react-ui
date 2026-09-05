# Work History — varsys-ui

### [2026-09-05] — Add new components from Dice UI, Magic UI, Origin UI (LT#22)

#### Change
- Scanned the listed catalogs (ui.shadcn.com, magicui.design, ui.aceternity.com,
  originui.com, 21st.dev, radi-ui.com, tremor.so, hyperui.dev, floatui.com,
  preline.co). shadcn and Aceternity catalogs are already fully covered; added
  9 NEW components not present in the library:
  - Dice UI (diceui.com/radi-ui, radix variant): display/kanban (Kanban family —
    dnd-kit kanban board), display/sortable (Sortable family — dnd-kit sortable
    list, vertical/horizontal), display/compare-slider (CompareSlider family —
    before/after comparison slider)
  - Magic UI: effects/floating-3d-particles (Floating3DParticles — canvas 3D
    particle field with depth/drift, reduced-motion aware)
  - Origin UI: forms/payment-form (PaymentForm — card payment dialog with
    plan picker + coupon), buttons/social-login-buttons (SocialLoginButtons —
    Google/Facebook/X/GitHub, inline brand SVGs), display/settings-accordion
    (SettingsAccordion — accordion settings panel), overlays/rating-dialog
    (RatingDialog — CSAT-style rating dialog), overlays/onboarding-tips
    (OnboardingTips — tooltip tour with prev/next nav)
- Created matching Storybook stories in `src/stories/` (9 stories).
- Exported all from `src/index.ts`.
- Added dependencies: `@dnd-kit/{core,sortable,utilities,modifiers}`
  (kanban/sortable), `react-payment-inputs` + `styled-components` (payment form).
- Adapted Dice UI sources to repo conventions: `@radix-ui/react-slot` namespace
  import, `@/lib/cn`, existing lib hooks (use-as-ref, use-lazy-ref,
  use-isomorphic-layout-effect, compose-refs); Origin UI comps use library
  primitives (Button/Dialog/Accordion/RadioGroup/Popover) with Base UI
  `render` props.
- Added `src/types/react-payment-inputs.d.ts` ambient types (package ships none).

#### Verification
- `npm install --legacy-peer-deps`: PASS (new deps resolved).
- `npm run build`: PASS (exit 0), declaration files generated, 0 dts errors.
- `npm run build-storybook`: PASS — all 9 new stories compile.

#### Files
- `src/components/display/{kanban,sortable,compare-slider,settings-accordion}.tsx`
- `src/components/effects/floating-3d-particles.tsx`
- `src/components/forms/payment-form.tsx`
- `src/components/buttons/social-login-buttons.tsx`
- `src/components/overlays/{rating-dialog,onboarding-tips}.tsx`
- `src/stories/{display,effects,forms,buttons,overlays}/*.stories.tsx` (9 stories)
- `src/types/react-payment-inputs.d.ts`
- `src/index.ts`, `package.json`

#### Commit
- This session

### [2026-09-04] — Add new Dice UI (radi-ui) components: AngleSlider, Editable, KeyValue, SegmentedInput, ActionBar, ResponsiveDialog, Scroller (LT#22)

#### Change
- Scanned the listed catalogs (ui.shadcn.com, magicui.design, ui.aceternity.com,
  originui.com, 21st.dev, radi-ui.com, tremor.so, hyperui.dev, floatui.com,
  preline.co); the newest additions were Dice UI (radi-ui) advanced composables.
- Added 7 new copy-paste React components (ported from diceui.com registry, radix
  variant, adapted to the repo's individual `@radix-ui/*` imports):
  - forms/angle-slider (AngleSlider family)
  - forms/editable (Editable family)
  - forms/segmented-input (SegmentedInput family)
  - display/key-value (KeyValue family)
  - overlays/action-bar (ActionBar family)
  - overlays/responsive-dialog (ResponsiveDialog family — dialog on desktop,
    vaul drawer on mobile)
  - scroll/scroller (Scroller with scroll-shadow masks + nav buttons)
- Added shared helpers: `src/lib/use-as-ref.ts`, `src/lib/use-lazy-ref.ts`,
  `src/hooks/use-mobile.ts`, `src/components/forms/visually-hidden-input.tsx`.
- Declared `@radix-ui/react-direction` as a direct dependency (was transitive).
- Created matching Storybook stories in `src/stories/` (7 stories).
- Exported all from `src/index.ts`.

#### Verification
- `npm install --legacy-peer-deps`: PASS.
- `npm run build`: PASS (exit 0), declaration files generated, 0 TS errors.
- `npm run build-storybook`: PASS — all 7 new stories compile and render.

#### Files
- `src/components/{forms,display,overlays,scroll}/{angle-slider,editable,segmented-input,key-value,action-bar,responsive-dialog,scroller}.tsx`
- `src/lib/{use-as-ref,use-lazy-ref}.ts`
- `src/hooks/use-mobile.ts`
- `src/components/forms/visually-hidden-input.tsx`
- `src/stories/{forms,display,overlays,scroll}/*.stories.tsx` (7 stories)
- `src/index.ts`, `package.json`

#### Commit
- This session

### [2026-06-15] — Storybook Compilation & Component Fixes (local)

#### Before
- Storybook development server could not run or render components due to strict TypeScript compilation errors across several components and stories.
- Components using obsolete dependencies (like react-resizable-panels older exports and old tsparticles APIs) caused compile-time type check failure.
- Base UI triggers were incorrectly used with Radix-specific `asChild` props in stories, causing TypeScript to fail.

#### Change
- Resolved TypeScript errors in 9 UI component files (`3d-card.tsx`, `animated-modal.tsx`, `bento-grid.tsx`, `calendar.tsx`, `canvas-reveal-effect.tsx`, `globe.tsx`, `moving-border.tsx`, `resizable.tsx`, `sparkles.tsx`). Added conditional state and clock checks inside `useFrame` to prevent component crashes on early rendering.
- Deleted 7 obsolete Storybook story files that imported unimplemented components.
- Fixed 9 story files to replace `asChild` triggers with Base UI's native `render` triggers.
- Fixed prop mapping in `BentoGrid.stories.tsx` and configured `Globe.stories.tsx` with proper mock configuration.
- Simplified text animation stories to use native children parameters.

#### Why
- Fix typescript errors to compile successfully.
- Ensure that Storybook development server builds and renders all components cleanly for visual verification.
- Re-architect components that rely on deprecated APIs to run properly under React 19/Fiber v10/TS 5.

#### Files Affected

| File Path | Change Summary |
|---|---|
| `src/components/ui/3d-card.tsx` | Changed `as` prop and ref type definitions to `any`. |
| `src/components/ui/animated-modal.tsx` | Specified `modalRef` type as `useRef<HTMLDivElement>(null)`. |
| `src/components/ui/bento-grid.tsx` | Typed BentoCard `Icon` prop as `any`. |
| `src/components/ui/calendar.tsx` | Casted `classNames` config passed to DayPicker as `any`. |
| `src/components/ui/canvas-reveal-effect.tsx` | Set explicit `useThree` selector, typed `useFrame` clock, and added state/clock conditional guards. |
| `src/components/ui/globe.tsx` | Renamed `World` to `Globe` and updated internal hooks/refs/casts. |
| `src/components/ui/moving-border.tsx` | Initialized `pathRef` as `useRef<any>(null)`. |
| `src/components/ui/resizable.tsx` | Rewrote component to use correct `react-resizable-panels` API exports. |
| `src/components/ui/sparkles.tsx` | Refactored using modern `ParticlesProvider` context API. |
| `src/stories/...` | Updated, fixed, or deleted story files to ensure clean compilation. |

#### Outcome
- The UI package passes `pnpm typecheck` successfully with zero TypeScript compilation errors.
- The Storybook development server starts up cleanly on port 6006.

### [2026-07-04] — Extract varsys-ui to separate GitHub repo (OP#623)

#### Before
- varsys-ui was part of the VarSysKB monorepo at `packages/varsys-ui/`

#### Change
- Initialized new git repo, created `.gitignore`
- Created new repository at `VarSys-Org/varsys-react-ui` on GitHub
- Pushed all component source files to the new repo

#### Files Affected
- Created: `.gitignore`
- Created: GitHub repo `VarSys-Org/varsys-react-ui`

#### Outcome
- varsys-ui now lives in its own repo at https://github.com/VarSys-Org/varsys-react-ui

### [2026-07-05] — Reorganize components into categories (OP#624)

#### Before
- All components were in flat `src/components/ui/` directory

#### Change
- Created 12 category directories
- Moved 114 component files to their logical categories
- Updated all import paths in `index.ts`, `App.tsx`, and 61 story files

#### New Structure
| Category | Files | Examples |
|----------|-------|---------|
| buttons/ | 8 | Button, RainbowButton, ShimmerButton, RippleButton |
| cards/ | 7 | 3d-card, BentoGrid, MagicCard, NeonGradientCard |
| overlays/ | 9 | Dialog, Drawer, Sheet, AnimatedModal, Tooltip |
| navigation/ | 8 | Accordion, Breadcrumb, Tabs, DropdownMenu |
| forms/ | 10 | Checkbox, RadioGroup, Select, Switch, Toggle |
| display/ | 10 | Avatar, Badge, Table, Progress, Timeline |
| text-effects/ | 15 | FlipWords, TextAnimate, TypingAnimation |
| effects/ | 31 | Particles, Confetti, Beams, Grids, Sparkles |
| device-mocks/ | 6 | Safari, Iphone, MacbookScroll, TweetCard |
| scroll/ | 3 | ParallaxScroll, StickyScroll, HeroParallax |
| data-viz/ | 4 | Globe, WorldMap, IconCloud, OrbitingCircles |
| layout/ | 3 | Dock, Marquee, FileTree |

#### Outcome
- Components are now easy to find and copy-paste by category

### [2026-07-05] — Deploy varsys-react-ui Storybook to Dokploy (OP#625)

#### Before
- No deployment pipeline existed for varsys-react-ui
- Components could only be viewed locally via `storybook dev`

#### Change
- Created `docker/Dockerfile` (multi-stage: node build + nginx serve)
- Created `docker/nginx.conf` for Storybook static hosting
- Created `.github/workflows/deploy.yml` (GitHub Actions CI/CD)
- Set up Dokploy application with Docker image from ghcr.io
- Added port mapping (80) and domain (ui.varsys.co.in)
- Added DNS A record for ui.varsys.co.in

#### CI/CD Pipeline
1. Push to master -> GitHub Actions triggers
2. Builds Docker image -> pushes to ghcr.io/varsys-org/varsys-react-ui:latest
3. Dokploy pulls new image -> deploys automatically

#### Outcome
- Storybook live at https://ui.varsys.co.in
- Auto-deploys on every push to master

### [2026-07-05/06] — Fix Appwrite Traefik + Dokploy integration (OP#626)

#### Problem
- Appwrite Traefik (ports 80/443) uses `appwrite_web`/`appwrite_websecure` entrypoints
- Dokploy auto-generates domain configs with `web`/`websecure` entrypoints
- Required manual Traefik config files for each new Dokploy domain

#### Fix (in progress)
- Mounted Dokploy Traefik dynamic config directory into Appwrite Traefik
- Adding `web`/`websecure` entrypoints to Appwrite Traefik on same ports

#### Outcome (pending)
- Dokploy domains will work automatically without manual Traefik configs

### [2026-08-16] — Code-standard sweep task L: project-owned renames (LT#2043)

#### Change
- `git mv src/lib/utils.ts` -> `src/lib/cn.ts`; updated all import paths
  (`@/lib/utils` and relative `lib/utils`) to `@/lib/cn` across src (410 files).
  Path change only — no component logic touched.
- Renamed `hasOnlyOneValueForKey` -> `onlyOneValueForKey` in
  `src/components/data-viz/chart-utils.ts` and its 4 importing chart components
  (area-chart, combo-chart, line-chart, scatter-chart).
- SKIPPED `Globe3DConfig`/`GlobeConfig`/`SearchResult` renames — exported as
  public API from src/index.ts but are magicui/searchbox third-party internals
  (no external consumers of the type names found in the workspace).

#### Why
- varsys-code-standard compliance report section 4.7 (project-owned only).
- Third-party shadcn/magicui/motion components deliberately untouched.

#### Verification
- `tsc --noEmit`: 212 errors, identical to baseline (stash-compared) — zero new.
- `vite build`: PASS (exit 0, 4m21s, needed `--max-old-space-size=8192` to avoid
  a pre-existing JS heap OOM at the default ~4GB).
- No dev servers started.

#### Files
- `src/lib/utils.ts` -> `src/lib/cn.ts` (rename, 100% similar)
- `src/index.ts` + 408 component/story files (import path updates)
- `src/components/data-viz/chart-utils.ts`, `area-chart.tsx`, `combo-chart.tsx`,
  `line-chart.tsx`, `scatter-chart.tsx` (hasOnlyOneValueForKey rename)

#### Commit
- `752e3f7` refactor(standard): varsys-ui compliance LT#2043

### [2026-08-29] — Add 8 new components from Spell UI / 21st.dev (LT#22)

#### Change
- Added 8 copy-paste React components sourced from the Spell UI registry
  (github.com/xxtomm/spell-ui, published on 21st.dev):
  - text-effects: BlurReveal, SpecialText, ShimmerText, HighlightedText,
    TextMarquee, WordsStagger, RandomizedText
  - forms: LabelInput (floating label + password visibility toggle)
- Created matching Storybook stories in `src/stories/`.
- Exported all from `src/index.ts`.
- Fixed one TS error in `special-text.tsx` (`startTimeoutRef` typed as `number`).

#### Verification
- `npm run build`: PASS (exit 0), declaration files generated.
- No new dependencies required (motion, lucide-react already present).

#### Files
- `src/components/text-effects/{blur-reveal,special-text,shimmer-text,highlighted-text,text-marquee,words-stagger,randomized-text}.tsx`
- `src/components/forms/label-input.tsx`
- `src/stories/text-effects/{BlurReveal,SpecialText,ShimmerText,HighlightedText,TextMarquee,WordsStagger,RandomizedText}.stories.tsx`
- `src/stories/forms/LabelInput.stories.tsx`
- `src/index.ts`

#### Commit
- Pending (this session)

### [2026-08-30] — Add 8 new components from ReactBits registry (LT#22)

#### Change
- Added 8 copy-paste React components sourced from the ReactBits registry
  (reactbits.dev, shadcn-compatible registry configured in `components.json`):
  - text-effects: SplitFlapText (split-flap character tiles), FuzzyText
    (canvas-based glitch/fuzz text), VariableProximity (font-variation weight
    response to pointer)
  - effects: ClickSpark (particle burst on click)
  - forms: CurvedInput (arc-bent SVG input with caret + submit button),
    ElasticSlider (springy pointer-overflow slider)
  - navigation: GooeyNav (gooey pill + particle nav)
  - buttons: StarBorder (animated star-burst border)
- Created matching Storybook stories in `src/stories/`.
- Exported all from `src/index.ts`.
- Added `star-movement-bottom` / `star-movement-top` keyframes to
  `tailwind.config.js` for StarBorder.
- Fixed TS errors found in the ports: `star-border.tsx` polymorphic `as`
  spread (`rest as any`), `split-flap-text.tsx` timeout ref typed as `number`.

#### Verification
- `npm run build`: PASS (exit 0), declaration files generated.
- No new dependencies required (motion, lucide-react already present).

#### Files
- `src/components/text-effects/{split-flap-text,fuzzy-text,variable-proximity}.tsx`
- `src/components/effects/click-spark.tsx`
- `src/components/forms/{curved-input,elastic-slider}.tsx`
- `src/components/navigation/gooey-nav.tsx`
- `src/components/buttons/star-border.tsx`
- `src/stories/{text-effects,effects,forms,navigation,buttons}/*.stories.tsx` (8 stories)
- `src/index.ts`, `tailwind.config.js`

#### Commit
- Pending (this session)

### [2026-09-03] — Add new chart variants + Dice UI + Origin UI components (LT#22)

#### Change
- Scanned the component catalogs (ui.shadcn.com, magicui.design, ui.aceternity.com,
  originui.com, 21st.dev, radi-ui.com, tremor.so, hyperui.dev, floatui.com, preline.co)
  and added 10 NEW copy-paste components not already present in the library:
  - shadcn charts: data-viz/area-chart-gradient (AreaChartGradient),
    data-viz/bar-chart-mixed (BarChartMixed), data-viz/line-chart-multiple
    (LineChartMultiple), data-viz/radar-chart-grid-circle (RadarChartGridCircle),
    data-viz/radial-chart-grid (RadialChartGrid) — all built on the existing
    `ChartContainer`/`ChartTooltip` primitives + recharts, wrapped in the
    library's Card.
  - Dice UI (radi-ui): display/badge-overflow (BadgeOverflow — measured wrapping
    badges with overflow count), display/swap (Swap family — click/hover swap
    with fade/rotate/flip/scale animations), display/masonry (Masonry/MasonryItem
    — virtualized interval-tree masonry layout), forms/mask-input (MaskInput —
    phone/SSN/date/credit-card/currency/percentage/IPv4/MAC masks + validation).
  - Origin UI: layout/countdown-banner (CountdownBanner — dismissible sale
    countdown banner, parameterized endDate/title/CTA).
- Created matching Storybook stories in `src/stories/`.
- Exported all from `src/index.ts`.
- Added shared helpers: `src/lib/compose-refs.ts` and
  `src/lib/use-isomorphic-layout-effect.ts`; ported Dice UI inline hooks
  (useAsRef/useLazyRef) and switched imports to the repo's `@/lib/cn` convention.

#### Verification
- `npm install --legacy-peer-deps`: PASS.
- `npm run build`: PASS (exit 0), declaration files generated.
- `npm run build-storybook`: PASS — all 10 new stories compile and render.
- No new dependencies required (@base-ui/react, recharts, lucide-react already present).

#### Files
- `src/components/data-viz/{area-chart-gradient,bar-chart-mixed,line-chart-multiple,radar-chart-grid-circle,radial-chart-grid}.tsx`
- `src/components/display/{badge-overflow,swap,masonry}.tsx`
- `src/components/forms/mask-input.tsx`
- `src/components/layout/countdown-banner.tsx`
- `src/lib/{compose-refs,use-isomorphic-layout-effect}.ts`
- `src/stories/{data-viz,display,forms,layout}/*.stories.tsx` (10 stories)
- `src/index.ts`

#### Commit
- Pending (this session)

### [2026-09-02] — Add new components from Dice UI (radi-ui), Tremor, Origin UI (LT#22)

#### Change
- Added 10 new copy-paste React components sourced from the listed component
  catalogs (scanned ui.shadcn.com, magicui.design, ui.aceternity.com, originui.com,
  21st.dev, radi-ui.com, tremor.so, hyperui.dev, floatui.com, preline.co):
  - Dice UI (radi-ui): display/color-swatch (ColorSwatch), display/fps (Fps),
    display/gauge (Gauge family), display/status (Status family),
    display/relative-time-card (RelativeTimeCard), layout/stack (Stack family),
    navigation/speed-dial (SpeedDial family)
  - Tremor: navigation/tab-list (TabList/Tab) + navigation/tab-panels
    (TabPanels/TabPanel) — theme-safe port of Tremor's underline/solid tabs
  - Origin UI: data-viz/pinnable-table (PinnableTable) — TanStack table with
    column pinning/resizing (comp-480 port, local data)
- Created matching Storybook stories in `src/stories/`.
- Exported all from `src/index.ts`.
- Fixed pre-existing TS error in `pie-chart-interactive.tsx` (recharts 2.x no
  longer exports `PieSectorShapeProps`; removed the unused import/re-export).
- Ported Dice UI hooks inline (useComposedRefs, useAsRef, useIsomorphicLayoutEffect,
  useLazyRef); replaced the `radix-ui` unified package import with `@radix-ui/react-slot`
  and Base UI `render`-prop triggers (repo convention); fixed Base UI `BaseUIEvent`
  handler types.

#### Verification
- `npm install --legacy-peer-deps`: PASS.
- `npm run build`: PASS (exit 0), declaration files generated.
- No new dependencies required (@radix-ui/react-slot, cva, lucide-react, tanstack already present).

#### Files
- `src/components/display/{color-swatch,fps,gauge,status,relative-time-card}.tsx`
- `src/components/layout/stack.tsx`
- `src/components/navigation/{speed-dial,tab-list,tab-panels}.tsx`
- `src/components/data-viz/pinnable-table.tsx`
- `src/stories/{display,layout,navigation,data-viz}/*.stories.tsx` (9 stories)
- `src/components/data-viz/pie-chart-interactive.tsx`, `src/index.ts`

#### Commit
- Pending (this session)
