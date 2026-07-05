# Changelog — varsys-ui

All notable changes to this project will be documented in this file.

## [Unreleased] — 2026-06-15

### Changed
- Refactored `Globe` component exports: the Canvas wrapper `World` is renamed to `Globe` to serve as the main importable component, and the R3F group is renamed to `GlobeInner`.
- Replaced `asChild` prop with Base UI's native `render` prop across all Radix-to-Base UI Storybook story files (`AlertDialog`, `Collapsible`, `Dialog`, `Drawer`, `DropdownMenu`, `HoverCard`, `Popover`, `Sheet`, `Tooltip`).
- Updated `BentoGrid.stories.tsx` props structure to align with `BentoCard` interface.

### Fixed
- Fixed typescript dynamic tag rendering signature in `3d-card.tsx` by setting type to `any`.
- Fixed `modalRef` type in `animated-modal.tsx` by specifying `useRef<HTMLDivElement>(null)`.
- Fixed `Icon` type in `bento-grid.tsx` to prevent JSX rendering type issues.
- Bypassed `react-day-picker` v10 strict typing for `table` in `calendar.tsx` by casting `classNames` as `any`.
- Resolved react-three-fiber v10 selector requirements and `clock` parameter errors in `canvas-reveal-effect.tsx` and `globe.tsx`.
- Added safety guards for `clock` parameter access in `CanvasRevealEffect`'s `useFrame` callback to prevent connection/Docs initialization page crashes.
- Updated `resizable.tsx` to import and call correct `react-resizable-panels` members (`PanelGroup`, `Panel`, `PanelResizeHandle`).
- Resolved `@tsparticles/react` engine initialization error in `sparkles.tsx` by implementing `ParticlesProvider` context and `useParticlesProvider` hook.

### Removed
- Cleaned up story files (`Effects.stories.tsx`, `Misc.stories.tsx`, `TextAnimation.stories.tsx`) by removing stories for unimplemented components.
- Deleted obsolete story files for unimplemented components (`EverlivingCard.stories.tsx`, `Navbar.stories.tsx`, `Pin3D.stories.tsx`, `Visual.stories.tsx`, `WobbleCard.stories.tsx`, `Beam.stories.tsx`, `Card.stories.tsx`).
