# @varsys/ui

VarSys's reusable UI component library for operational dashboards. It provides
React components, charts, design tokens, and Storybook documentation; it has no
direct data-store or authentication access.

## Stack

| Area | Version or choice |
| --- | --- |
| Package | `@varsys/ui` `0.3.0` |
| Runtime | React 18 or 19 via peer dependencies |
| Build | Vite `^5.4.21` and `vite-plugin-dts` |
| Documentation | Storybook `^10.4.6` with React Vite |
| Styling | Tailwind CSS `^3.4.19`, PostCSS, CSS variables |
| Components | Base UI, Radix, Lucide, Nivo, Tiptap, React Three Fiber and related UI dependencies |
| Package manager | pnpm preferred; npm also works with `package-lock.json` |

## Architecture and boundaries

Library source is under `src/`, with the public entrypoint at `src/index.ts`.
The Vite library build emits ESM, CommonJS, and declaration files into
`dist/`; stories are excluded from declaration generation. `.storybook/`
contains the component documentation environment. `dashboard/` is a separate
consumer/demo area and is intentionally not documented or changed by this
guide.

Consuming applications own API calls, Appwrite/PostgreSQL access, auth,
permissions, and feature/domain behavior. Keep this package generic and
dependency-conscious. React and React DOM are peer dependencies so consumers
do not receive a duplicate React runtime.

## Prerequisites and setup

- Node.js 22
- pnpm 10.33.0 preferred, or npm for the existing lockfile
- A consuming VarSys application when validating integration behavior

Install dependencies from `varsys-ui/`:

```powershell
pnpm install
```

This package has no environment template and no runtime environment variables.
Consuming applications provide their own auth, data, and integration
configuration.

## Development and commands

| Command | Purpose |
| --- | --- |
| `pnpm dev` | Start the Vite development entrypoint |
| `pnpm build` | Build library bundles and declarations |
| `pnpm preview` | Preview the Vite output |
| `pnpm storybook` | Run Storybook on port 6006 |
| `pnpm build-storybook` | Build the static Storybook site |

The equivalent npm commands are `npm run dev`, `npm run build`,
`npm run preview`, `npm run storybook`, and `npm run build-storybook`.

Before review, run the library build and `pnpm build-storybook`. Validate changed
components in Storybook and, when behavior depends on a consumer, run that
consumer's own typecheck and build.

## Component rules

- Consume CSS variables and theme tokens; do not hardcode theme colors.
- Keep feature logic and product data out of reusable components.
- Preserve React peer dependency behavior and do not add React to regular
  dependencies.
- Add or update a story for visual and interaction changes.
- Keep accessibility behavior and keyboard interactions covered in stories or
  consumer tests.

## Security notes

The package should not contain secrets, direct database clients, auth tokens, or
network calls to product services. Treat rich text, file uploads, and any
consumer-provided content as untrusted; validation and authorization belong at
the consuming application's boundary.
