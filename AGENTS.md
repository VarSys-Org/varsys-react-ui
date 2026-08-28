# VarSys UI — Project-Specific Layer

This repo's engineering contract inherits the generic standard from
`~/.agents/references/AGENTS-engineering-contract.md` (67 sections).
This file adds ONLY the VarSys UI-specific layer.

## Stack and Tooling

| Item | Value |
|---|---|
| Languages | TypeScript, React |
| Package | `@varsys/ui` (component library) |
| Framework | Vite + Storybook + Tailwind |
| Build | `pnpm build` (or `npm run build`) |
| Dev | `pnpm dev` |
| Storybook | `pnpm storybook`, `pnpm build-storybook` |
| Notable deps | @base-ui/react, @headless-tree, @nivo/* (charts), @formkit/auto-animate, @origin-space/image-cropper |

## Data and Storage

- Component library — NO direct data-store access. Consuming apps own data.

## Domain Rules

- Source of truth: reusable UI components, charts (nivo), and design tokens.
- Reusable across all VarSys apps; do not leak feature/domain logic into
  components (generic rules: no feature logic in shared modules).

## Constraints

- Theme-safe: components must consume CSS variables (light/dark), never
  hardcode theme colors.
- Keep the library dependency-light and framework-agnostic where possible.

## Operational Mandates

- Track work in Leantime project `VarSys UI` (LT id 22).
- Store full details in `.kb/sessions/YYYY/varsys-ui/`; keep `.kb/INDEX.md` and
  `.kb/WORK_HISTORY.md` as concise pointers with the LT reference.

## References

- `docs/`, `.storybook/`
