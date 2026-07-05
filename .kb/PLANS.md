# PLANS — varsys-ui

## PLAN-20260615-001 — Storybook & TypeScript Compiling Alignment

### Goal
Fix all compilation and rendering errors for components and stories in `@varsys/ui` so that development and verification can run smoothly.

### Proposed Changes
- Fix type definitions for dynamic component Tag rendering.
- Update Fiber useThree/useFrame calls to be compatible with version 10 selectors.
- Update `react-resizable-panels` to use standard exports.
- Migrate sparkles particles initialization to modern `ParticlesProvider` context API.
- Replace Radix `asChild` with Base UI `render` prop.
- Delete obsolete/unimplemented stories to ensure zero TypeScript errors on build.

### Status
- [x] Execution Completed (2026-06-15)
