# Bug Fixes — varsys-ui

| Bug | Severity | Root Cause | Fix | Date | Issue # |
|---|---|---|---|---|---|
| Dynamic CardItem TSX Signature Error | Medium | `as` prop generic typing `React.ElementType` caused ref type conflict. | Changed type to `any` and ref to `useRef<any>`. | 2026-06-15 | — |
| modalRef type mismatch in Animated Modal | Low | `useRef(null)` initialized as `RefObject<null>` instead of `HTMLDivElement`. | Typed `modalRef` as `useRef<HTMLDivElement>(null)`. | 2026-06-15 | — |
| BentoCard Icon call signature failure | Medium | React 19 / TS 5 strictness on dynamic element `React.ElementType` with classNames. | Typed `Icon` prop as `any`. | 2026-06-15 | — |
| react-day-picker v10 table className error | Low | HTML structure revised in v10; `table` class no longer matches default typings. | Cast `classNames` config to `any`. | 2026-06-15 | — |
| Fiber useThree/useFrame Clock property errors | High | react-three-fiber v10 alpha does not expose clock on `FrameNextState` or allow default useThree. | Passed selector `(state) => state` and typed callback param as `any`. | 2026-06-15 | — |
| Globe Canvas wrapper render crash | High | `Globe` component rendered outside canvas; `World` was the Canvas wrapper. | Renamed `World` to `Globe` and inner to `GlobeInner`. | 2026-06-15 | — |
| react-resizable-panels export mismatch | High | Obsolete group/separator names used instead of `PanelGroup` and `PanelResizeHandle`. | Renamed component and prop references to use PanelGroup and PanelResizeHandle. | 2026-06-15 | — |
| Particles engine initialization error | High | `initParticlesEngine` is removed in modern `@tsparticles/react`. | Refactored component using `ParticlesProvider` context and `useParticlesProvider` hook. | 2026-06-15 | — |
| Base UI Triggers asChild errors | Medium | Base UI triggers do not support `asChild` and instead use the `render` prop. | Replaced `<Trigger asChild><Button>...</Button></Trigger>` with `<Trigger render={<Button />}>...</Trigger>`. | 2026-06-15 | — |
| CanvasRevealEffect Clock Undefined Crash | High | `useFrame` callback executes before canvas initialization completes or runs in docs mode with missing state properties. | Added conditional guards to check if `state` and `state.clock` are defined before accessing them. | 2026-06-15 | — |

