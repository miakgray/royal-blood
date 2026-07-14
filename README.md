# Royal Blood — Campaign & Social Console

Campaign and social performance tracking console for Royal Blood. Next.js
(App Router) + TypeScript + Tailwind CSS, built to deploy on Vercel with zero
config.

## Structure

- `app/` — routes: `/` (home dashboard), `/campaigns`, `/social`, `/analytics`
- `components/` — sidebar, topbar, stat tiles, platform cards, campaign
  table, activity feed, theme toggle
- `lib/mock-data.ts` — placeholder data for the console; swap for live
  platform/API integrations
- `lib/types.ts` — shared data shapes

## Getting started

```bash
npm install
npm run dev
```

Open http://localhost:3000.

```bash
npm run build   # production build
npm run lint    # eslint
```

## Deploying to Vercel

1. Push this repo to GitHub.
2. Import it in Vercel (New Project → select the repo). Framework preset
   `Next.js` is auto-detected — no extra configuration needed.
3. Deploy. Every push to the default branch redeploys automatically.

## Theming

Dark is the default surface (`app/globals.css`), with a light override via
the theme toggle in the top bar (persisted to `localStorage`). Color roles
are CSS custom properties (`--surface`, `--text-primary`, `--brand`,
`--status-*`) — update them in one place to retheme.

## Known items

- `npm audit` reports a moderate advisory in a PostCSS version bundled
  inside Next.js itself (not our direct dependency); no fix is available
  without downgrading Next, and it isn't reachable through this app's static
  mock data.
