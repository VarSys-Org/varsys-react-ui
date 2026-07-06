# Work History — varsys-ui

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
