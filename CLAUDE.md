# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## What this is

Royal Blood — Campaign & Social Console: a dashboard for tracking the band's
campaign and social-platform performance. Next.js (App Router) + TypeScript +
Tailwind CSS, deployed to Vercel with zero extra config.

## Commands

```bash
npm install
npm run dev      # dev server, http://localhost:3000
npm run build    # production build (also runs the TS type check)
npm run lint     # eslint (flat config, eslint.config.mjs)
npx tsc --noEmit # type check only
```

There is no test suite yet. `npm run build` is the closest thing to a
correctness gate — it fails on type errors.

## Architecture

- **Routing**: `app/` uses the App Router. Each route (`/`, `/campaigns`,
  `/social`, `/analytics`) is a server component that composes shared pieces
  from `components/` with data from `lib/mock-data.ts`. There is no
  client-side routing state or data-fetching layer yet — everything renders
  from static mock data at build time.
- **Data flow**: `lib/types.ts` defines the shapes (`StatTileData`,
  `PlatformStat`, `Campaign`, `ActivityItem`); `lib/mock-data.ts` is the one
  place mock values live. When wiring real platform/API integrations, replace
  the exports of `mock-data.ts` (or the functions that produce them) rather
  than scattering fetch calls through page components.
- **Layout shell**: `app/layout.tsx` renders `Sidebar` (nav) once, and each
  page renders its own `Topbar` (title/subtitle) inside `<main>`. New routes
  should follow this pattern: `<Topbar .../>` followed by a `px-8 py-6`
  content wrapper.
- **Theming**: dark is the default surface. All color roles are CSS custom
  properties defined in `app/globals.css` under `:root` (dark values) and
  `:root[data-theme="light"]` (light overrides) — component code should only
  ever reference the Tailwind roles wired to these vars (`bg-surface`,
  `text-ink-primary`, `text-ink-secondary`, `text-ink-muted`, `bg-brand`,
  `text-status-good`, etc. — see `tailwind.config.ts`), never raw hex, so
  both themes stay in sync from one source. `components/theme-script.tsx`
  sets `data-theme` on `<html>` before paint (reading `localStorage`) to
  avoid a flash; `components/theme-toggle.tsx` flips it via
  `useSyncExternalStore` reading the DOM attribute directly (deliberately
  not `useState`+`useEffect`, which trips the `react-hooks/set-state-in-effect`
  lint rule).
- **Status/delta color semantics**: `--status-good/warning/serious/critical`
  are reserved for state (campaign status chips, up/down deltas) and must not
  be reused as arbitrary series/brand colors. `--brand` (Royal Blood red) is
  the one identity color for chrome (logo badge, active nav, etc.), separate
  from the status palette. Platform badge colors in `platform-card.tsx` are
  fixed per-platform brand hexes (Instagram pink, Spotify green, etc.) —
  these are icon/identity colors, not a data-encoding categorical scale, so
  they're set directly on `PlatformStat.color` rather than pulled from the
  theme.
- **Lint config**: `eslint.config.mjs` imports the flat configs exported
  directly from `eslint-config-next` (`eslint-config-next/core-web-vitals`,
  `eslint-config-next/typescript`) — do not wrap them in
  `@eslint/eslintrc`'s `FlatCompat`, that combination throws (circular
  structure) with this version of `eslint-plugin-react-hooks`.
- **Deployment**: no `vercel.json` — this is a stock Next.js app and Vercel's
  zero-config Next.js preset is sufficient. `next.config.mjs` is intentionally
  minimal.

## Known constraints

- `npm audit` reports a moderate PostCSS advisory bundled inside Next.js's
  own dependency tree (not a direct/top-level dependency of this project);
  no fix is available without downgrading Next itself, and it isn't
  reachable through this app's static mock data.
