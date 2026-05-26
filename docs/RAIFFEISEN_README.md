# Raiffeisen Real Estate Finance AI Command Center

> Claude-powered relationship intelligence, project-finance digital twins, and
> knowledge-graph decision support for Real Estate Finance.
>
> Strategic concept demonstration prepared for **Max V. Zechmann — Key Account
> Manager, Real Estate Finance, Raiffeisenlandesbank Niederösterreich-Wien AG**
> (short: **Raiffeisen NÖ-Wien**). Public site: raiffeisen.at.

**Strategic AI Concept Demo — No production customer data. Synthetic figures only.**

---

## What this is

A premium, leadership-grade web demo that shows how Claude-powered Agentic AI,
knowledge graphs, deal digital twins, and evidence-first banking workflows can
transform Real Estate Finance at a regional Austrian universal bank:

- Real estate financing — origination, underwriting, monitoring
- Mortgage-backed portfolio intelligence
- Sustainable real estate transformation (Going Green Credit Real Estate, EU taxonomy, klimaaktiv)
- Regional relationship banking across Vienna and Lower Austria
- AI-assisted account-manager productivity, with human approval gates on every credit-relevant action

## Demo routes

| Route | Purpose |
| --- | --- |
| `/raiffeisen` | Landing page for Max V. Zechmann |
| `/raiffeisen/command-center` | AI Command Center — pipeline, portfolio, ESG, risk, recommendations |
| `/raiffeisen/knowledge-graph` | Interactive knowledge-graph view (SVG) with three Claude-surfaced insights |
| `/raiffeisen/deal-digital-twin` | Live digital twin of "Vienna Green Living Quarter" project finance deal |
| `/raiffeisen/before-after` | Before Claude / After Claude transformation |
| `/raiffeisen/executive-brief` | One-page printable executive brief |
| `/raiffeisen/ssdlc` | SSDLC readiness and trust posture |

## Run locally

```bash
npm install
npm run dev:client   # Vite dev server on http://localhost:5000
# open http://localhost:5000/raiffeisen
```

To build the static client bundle:

```bash
npm install
npx vite build      # outputs to dist/public
```

## Deploy to Vercel

```bash
npm install
npx vite build
vercel login         # if not already authenticated
vercel --prod        # deploy
```

After deployment, send the Vercel URL to Max V. Zechmann as a strategic concept demo.

## Tech stack

- Vite + React 19 + TypeScript (strict)
- Tailwind CSS 4 with shadcn/ui (new-york style) primitives
- `lucide-react` icons
- `framer-motion` for tasteful animation
- `recharts` for dashboards
- `wouter` for routing
- Mock data only — no backend, no secrets, no customer PII

## Security disclaimer

This is a strategic AI concept demonstration. It uses synthetic data only.
No customer data, no production credentials, and no operational systems are
involved. It is intended for executive discussion with Raiffeisen NÖ-Wien
about a future pilot.

## Production hardening roadmap

- Move into a Raiffeisen-controlled VPC with private Claude endpoint
- Replace synthetic data with curated, role-scoped views of production data
- Add SSO, RBAC, WORM audit logging, prompt-injection defenses, red-team harness
- Integrate to existing credit-committee and document-management workflow
- EU AI Act high-risk alignment with full model governance lifecycle

See `docs/SSDLc_READINESS.md` for the full SSDLC plan and
`docs/VERCEL_DEPLOYMENT.md` for the deployment runbook.

## Demo script

A 5-minute meeting script for Max is in `docs/MAX_ZECHMANN_DEMO_SCRIPT.md`.
