<!-- BEGIN:nextjs-agent-rules -->

# This is NOT the Next.js you know

This version has breaking changes — APIs, conventions, and file structure may all differ from your training data. Read the relevant guide in `node_modules/next/dist/docs/` (resolved from this file's directory; in monorepos the `next` package may not be visible from the repo root) before writing any code. Heed deprecation notices.

This block is written and re-added by `next dev` — verify at `node_modules/next/dist/server/lib/generate-agent-files.js`. Removing it from a diff only re-creates the uncommitted change; committing it with your work keeps the tree clean.

<!-- END:nextjs-agent-rules -->

# schipanicom

Personal site. Fresh Next.js 16 App Router scaffold (`create-next-app`), single app — all code lives in `src/app/`. No tests, no CI, no monorepo.

## Commands

- `npm run dev` / `npm run build` / `npm run start`
- `npm run lint` (runs bare `eslint`; flat config in `eslint.config.mjs`)
- Typecheck: `npx tsc --noEmit` (no dedicated script; verified passing)
- Package manager is **npm** (package-lock.json). Don't use yarn/pnpm/bun.

## Conventions

- Tailwind CSS v4: CSS-first config only (`@theme inline` tokens in `src/app/globals.css`, plugin via `postcss.config.mjs`). There is **no** `tailwind.config.*` file — don't create one.
- Path alias `@/*` → `src/*`.
- `CLAUDE.md` is just `@AGENTS.md`; keep guidance here, not there.
- Layout/pages use Next 16 generated types (e.g. `LayoutProps<"/">`) instead of hand-written prop types.

