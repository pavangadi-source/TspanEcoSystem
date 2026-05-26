# Vercel Deployment — Raiffeisen Real Estate Finance AI Command Center

Strategic AI Concept Demo. Synthetic data only. No customer PII.

## Prerequisites

- Node.js 20+
- A Vercel account (free tier is sufficient)
- The `vercel` CLI installed globally: `npm i -g vercel`

## One-shot deployment

```bash
# from the repository root
npm install
npx vite build          # produces dist/public (static client bundle)

vercel login            # follow the browser prompt
vercel --prod           # deploy to production
```

The static client bundle in `dist/public` is what Vercel serves. The demo
has no backend dependency.

## Configure as a static project on Vercel

If creating the project via the Vercel UI:

- **Framework preset:** Other
- **Build command:** `npx vite build`
- **Output directory:** `dist/public`
- **Install command:** `npm install`

## After deployment

1. Open the Vercel-provided URL.
2. Navigate to `/raiffeisen` to land on Max V. Zechmann's hero.
3. Walk through the seven demo routes.
4. Send the URL to Max as a strategic concept demo.

## Custom domain (optional)

Attach a domain like `raiffeisen-demo.<your-domain>.eu` to the Vercel
project. Cloudflare or any DNS provider works; Vercel auto-issues TLS
certificates.

## Notes on the existing repository

This concept demo lives **alongside** the existing TspanEcoSystem
application under `/raiffeisen/*` routes. Deploying the static client
bundle (`dist/public`) preserves the existing site and adds the demo.
For a Vercel-only deployment limited to the demo, the same build
output works as-is; the demo is reachable at `/raiffeisen` regardless.

## Production hardening (post-pilot)

- Move the project into a Raiffeisen-controlled cloud tenancy.
- Add SSO + entitlements; replace synthetic data with curated, role-scoped
  views from the production data warehouse.
- Configure private Claude endpoint with EU data residency.
- Enable WORM audit log destination and red-team test harness.
- Add CI gates: SAST, dependency provenance, prompt-injection regression.
