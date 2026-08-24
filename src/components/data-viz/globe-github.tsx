"use client"

import React, { useMemo, useRef } from "react"
import { Canvas, useFrame } from "@react-three/fiber"
import { OrbitControls } from "@react-three/drei"
import * as THREE from "three"

import { cn } from "@/lib/cn"

export interface GlobePoint {
  /** Latitude in degrees. */
  lat: number
  /** Longitude in degrees. */
  lng: number
  /** Color of the point. */
  color?: string
}

export interface GlobeArc {
  /** Starting point. */
  startLat: number
  /** Starting longitude. */
  startLng: number
  /** Ending latitude. */
  endLat: number
  /** Ending longitude. */
  endLng: number
  /** Arc height factor (0-1). */
  arcAlt?: number
  /** Color of the arc. */
  color?: string
}

export interface GithubGlobeConfig {
  /** Radius of the globe in world units. */
  radius?: number
  /** Base color of the globe. */
  globeColor?: string
  /** Show the atmospheric glow layer. */
  showAtmosphere?: boolean
  /** Color of the atmosphere. */
  atmosphereColor?: string
  /** Auto-rotate speed (0 disables). */
  autoRotateSpeed?: number
  /** Enable user zoom. */
  enableZoom?: boolean
  /** Enable user pan. */
  enablePan?: boolean
  /** Size of the glowing points. */
  pointSize?: number
  /** Duration of the arc flight animation in seconds. */
  arcTime?: number
}

export interface GithubGlobeProps {
  /** Points to render on the globe surface. */
  points?: GlobePoint[]
  /** Arcs connecting points across the globe. */
  arcs?: GlobeArc[]
  /** Configuration options. */
  config?: GithubGlobeConfig
  className?: string
}

const DEFAULT_POINTS: GlobePoint[] = [
  { lat: 37.7749, lng: -122.4194 },
  { lat: 40.7128, lng: -74.006 },
  { lat: 51.5074, lng: -0.1278 },
  { lat: 35.6762, lng: 139.6503 },
  { lat: 1.3521, lng: 103.8198 },
  { lat: -33.8688, lng: 151.2093 },
  { lat: 55.7558, lng: 37.6173 },
  { lat: 28.6139, lng: 77.209 },
  { lat: -23.5505, lng: -46.6333 },
  { lat: 48.8566, lng: 2.3522 },
]

const DEFAULT_ARCS: GlobeArc[] = [
  { startLat: 37.7749, startLng: -122.4194, endLat: 51.5074, endLng: -0.1278, arcAlt: 0.4 },
  { startLat: 40.7128, startLng: -74.006, endLat: 35.6762, endLng: 139.6503, arcAlt: 0.5 },
  { startLat: 51.5074, startLng: -0.1278, endLat: 1.3521, endLng: 103.8198, arcAlt: 0.45 },
  { startLat: 35.6762, startLng: 139.6503, endLat: -33.8688, endLng: 151.2093, arcAlt: 0.3 },
  { startLat: 55.7558, startLng: 37.6173, endLat: 28.6139, endLng: 77.209, arcAlt: 0.35 },
  { startLat: -23.5505, startLng: -46.6333, endLat: 48.8566, endLng: 2.3522, arcAlt: 0.4 },
  { startLat: 1.3521, startLng: 103.8198, endLat: -33.8688, endLng: 151.2093, arcAlt: 0.25 },
  { startLat: 48.8566, startLng: 2.3522, endLat: 40.7128, endLng: -74.006, arcAlt: 0.3 },
]

const DEFAULT_CONFIG: Required<GithubGlobeConfig> = {
  radius: 1.5,
  globeColor: "#1b1b2f",
  showAtmosphere: true,
  atmosphereColor: "#4da6ff",
  autoRotateSpeed: 0.4,
  enableZoom: false,
  enablePan: false,
  pointSize: 0.06,
  arcTime: 3,
}

function latLngToVector3(lat: number, lng: number, radius: number): THREE.Vector3 {
  const phi = (90 - lat) * (Math.PI / 180)
  const theta = (lng + 180) * (Math.PI / 180)
  return new THREE.Vector3(
    -(radius * Math.sin(phi) * Math.cos(theta)),
    radius * Math.cos(phi),
    radius * Math.sin(phi) * Math.sin(theta),
  )
}

function GlobePoints({ points, config }: { points: GlobePoint[]; config: Required<GithubGlobeConfig> }) {
  const groupRef = useRef<THREE.Group>(null)

  useFrame(({ clock }) => {
    if (!groupRef.current) return
    const t = clock.getElapsedTime()
    groupRef.current.children.forEach((child, index) => {
      const mesh = child as THREE.Mesh
      const material = mesh.material as THREE.MeshBasicMaterial
      const pulse = 0.6 + 0.4 * Math.sin(t * 2 + index)
      material.opacity = 0.4 + 0.6 * pulse
      const scale = config.pointSize * (0.8 + 0.4 * pulse)
      mesh.scale.setScalar(scale)
    })
  })

  return (
    <group ref={groupRef}>
      {points.map((point, index) => {
        const pos = latLngToVector3(point.lat, point.lng, config.radius * 1.002)
        return (
          <mesh key={index} position={pos}>
            <sphereGeometry args={[config.pointSize, 12, 12]} />
            <meshBasicMaterial
              color={point.color ?? "#7dd3fc"}
              transparent
              opacity={0.9}
              blending={THREE.AdditiveBlending}
              depthWrite={false}
            />
          </mesh>
        )
      })}
    </group>
  )
}

function ArcCurve({
  start,
  end,
  arcAlt,
  color,
  time,
  duration,
}: {
  start: THREE.Vector3
  end: THREE.Vector3
  arcAlt: number
  color: string
  time: number
  duration: number
}) {
  const dotRef = useRef<THREE.Mesh>(null)

  const { curve, midpoint, lineObject } = useMemo(() => {
    const mid = start.clone().add(end).multiplyScalar(0.5).normalize().multiplyScalar(
      start.length() * (1 + arcAlt),
    )
    const quad = new THREE.QuadraticBezierCurve3(start, mid, end)
    const points = quad.getPoints(48)
    const geometry = new THREE.BufferGeometry().setFromPoints(points)
    const material = new THREE.LineBasicMaterial({ color, transparent: true, opacity: 0.4, depthWrite: false })
    const line = new THREE.Line(geometry, material)
    return { curve: quad, midpoint: mid, lineObject: line }
  }, [start, end, arcAlt, color])

  useFrame(({ clock }) => {
    if (!dotRef.current) return
    const t = (clock.getElapsedTime() % duration) / duration
    const pos = curve.getPoint(t)
    dotRef.current.position.copy(pos)
    const mat = lineObject.material as THREE.LineBasicMaterial
    mat.opacity = 0.15 + 0.35 * Math.abs(Math.sin(t * Math.PI * 2 + time))
  })

  return (
    <group>
      <primitive object={lineObject} />
      <mesh ref={dotRef} position={midpoint}>
        <sphereGeometry args={[0.04, 8, 8]} />
        <meshBasicMaterial color={color} transparent opacity={0.9} blending={THREE.AdditiveBlending} depthWrite={false} />
      </mesh>
    </group>
  )
}

function GlobeArcs({ arcs, config }: { arcs: GlobeArc[]; config: Required<GithubGlobeConfig> }) {
  return (
    <group>
      {arcs.map((arc, index) => {
        const start = latLngToVector3(arc.startLat, arc.startLng, config.radius)
        const end = latLngToVector3(arc.endLat, arc.endLng, config.radius)
        return (
          <ArcCurve
            key={index}
            start={start}
            end={end}
            arcAlt={arc.arcAlt ?? 0.3}
            color={arc.color ?? "#38bdf8"}
            time={index * 0.5}
            duration={config.arcTime}
          />
        )
      })}
    </group>
  )
}

function GlobeSphere({ config }: { config: Required<GithubGlobeConfig> }) {
  const geometry = useMemo(() => new THREE.SphereGeometry(config.radius, 48, 48), [config.radius])
  return (
    <mesh geometry={geometry}>
      <meshPhongMaterial color={config.globeColor} emissive="#101022" emissiveIntensity={0.4} shininess={0.2} />
    </mesh>
  )
}

function Atmosphere({ config }: { config: Required<GithubGlobeConfig> }) {
  const material = useMemo(
    () =>
      new THREE.ShaderMaterial({
        uniforms: {
          atmosphereColor: { value: new THREE.Color(config.atmosphereColor) },
        },
        vertexShader: `
          varying vec3 vNormal;
          void main() {
            vNormal = normalize(normalMatrix * normal);
            gl_Position = projectionMatrix * modelViewMatrix * vec4(position, 1.0);
          }
        `,
        fragmentShader: `
          uniform vec3 atmosphereColor;
          varying vec3 vNormal;
          void main() {
            float intensity = pow(0.62 - dot(vNormal, vec3(0.0, 0.0, 1.0)), 4.0);
            gl_FragColor = vec4(atmosphereColor, 1.0) * intensity;
          }
        `,
        blending: THREE.AdditiveBlending,
        side: THREE.BackSide,
        transparent: true,
        depthWrite: false,
      }),
    [config.atmosphereColor],
  )
  return (
    <mesh scale={[1.25, 1.25, 1.25]}>
      <sphereGeometry args={[config.radius, 64, 64]} />
      <primitive object={material} attach="material" />
    </mesh>
  )
}

function Scene({ points, arcs, config }: { points: GlobePoint[]; arcs: GlobeArc[]; config: Required<GithubGlobeConfig> }) {
  return (
    <>
      <ambientLight intensity={0.6} />
      <directionalLight position={[5, 3, 5]} intensity={1.2} color="#ffffff" />
      <GlobeSphere config={config} />
      {config.showAtmosphere && <Atmosphere config={config} />}
      <GlobeArcs arcs={arcs} config={config} />
      <GlobePoints points={points} config={config} />
      <OrbitControls
        makeDefault
        enablePan={config.enablePan}
        enableZoom={config.enableZoom}
        rotateSpeed={0.4}
        autoRotate={config.autoRotateSpeed > 0}
        autoRotateSpeed={config.autoRotateSpeed}
        enableDamping
        dampingFactor={0.1}
      />
    </>
  )
}

export function GithubGlobe({
  points = DEFAULT_POINTS,
  arcs = DEFAULT_ARCS,
  config = {},
  className,
}: GithubGlobeProps) {
  const mergedConfig = useMemo(() => ({ ...DEFAULT_CONFIG, ...config }), [config])

  return (
    <div className={cn("relative h-[500px] w-full", className)}>
      <Canvas
        gl={{ antialias: true, alpha: true, powerPreference: "high-performance" }}
        dpr={[1, 2]}
        camera={{ fov: 45, near: 0.1, far: 1000, position: [0, 0, mergedConfig.radius * 4] }}
        style={{ background: "transparent" }}
      >
        <Scene points={points} arcs={arcs} config={mergedConfig} />
      </Canvas>
    </div>
  )
}

export default GithubGlobe
