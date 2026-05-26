# SSDLC Readiness — Raiffeisen Real Estate Finance AI Command Center

Strategic AI Concept Demo for Raiffeisenlandesbank Niederösterreich-Wien AG.
No production customer data is used. Synthetic figures only.

## 1. Posture summary

The demo is built to demonstrate the **target trust posture** of a Claude-powered
agentic banking system at concept stage, with an explicit roadmap to a
production-grade pilot inside a bank-controlled cloud perimeter.

Core principles:

- **Evidence-first** — every AI output is traceable to a source document, signal, or policy clause.
- **Human approval gates** — no autonomous credit-relevant action; agents orchestrate, humans decide.
- **Synthetic by default** — no customer PII, no production data, no impersonation.
- **EU AI Act high-risk aligned** — model cards, change management, drift monitoring.
- **Critical-infrastructure-grade resilience** — blast-radius limits, recovery objectives suitable for systemically relevant workflows.

## 2. Threat model (concept stage)

| Threat | Vector | Demo mitigation | Production mitigation |
| --- | --- | --- | --- |
| Prompt injection | External documents, signals | Source isolation, output schema validation | Adversarial test harness, red-team CI gate |
| Data exfiltration | Model outputs leaking PII | Synthetic data only | Bank-controlled VPC; private Claude endpoint; output DLP |
| Hallucinated recommendation | Unsupported AI inference | Evidence-citation requirement | Block unsourced outputs; reviewer queue |
| Privilege escalation | Agent acting beyond scope | Human-only approval gates | RBAC + entitlements; least-privilege defaults |
| Audit deniability | Missing trail | In-memory log of agent calls | WORM audit store + cryptographic hash chain |
| Supply-chain | Dependency tampering | Locked lockfile, no postinstall | SLSA-aligned build, signed artifacts, dependency provenance |
| Model misuse | Out-of-policy prompts | Policy library and intent guardrails | Continuous monitoring + drift detection |

## 3. Controls inventory

- **Data protection** — synthetic-only in demo; production runs in bank-controlled cloud, no customer PII leaves the perimeter.
- **Prompt-injection defense** — source isolation, output schema validation, citation requirement, and adversarial test harness.
- **Audit logs** — every agent invocation, input, output, and human decision logged with cryptographic integrity.
- **Role-based access control** — Account Manager, Risk, ESG, Committee, Audit; least-privilege defaults; SSO + entitlements in production.
- **Human approval workflow** — routing through bank approval matrix; no agent autonomy on credit-relevant actions.
- **Evidence-first controls** — citation enforcement, gap surfacing, unsourced-inference blocking.
- **Model governance** — model cards, change-management, drift monitoring, EU AI Act high-risk alignment.
- **Deployment controls** — Vercel for concept; bank-controlled cloud with private model access for production.
- **Resilience** — defense-in-depth, blast-radius limits, recovery objectives suitable for systemically relevant workflows.

## 4. Evidence requirements

Every recommendation surfaced in the UI must carry:

1. A list of source documents, signals or KPIs.
2. Timestamps and integrity hashes of the cited evidence.
3. Policy clauses applied.
4. The named human approver and current approval status.
5. A re-run identifier so any inference can be reproduced.

## 5. Pilot-to-production roadmap

| Phase | Duration | Scope |
| --- | --- | --- |
| Concept demo | Today | Synthetic data on Vercel; stakeholder review |
| Pilot | 90 days | Bank tenancy, de-identified data, two live workflows (credit memo, ESG eligibility) |
| Production | Continuous | Bank-controlled cloud, private Claude endpoint, full integration to credit-committee workflow |

## 6. Open items before pilot

- Confirm hosting target (bank VPC vs. partner cloud).
- Confirm Claude deployment mode (managed vs. bring-your-own endpoint).
- Confirm SSO/IAM target (Entra ID, Keycloak, other).
- Confirm audit-log destination (existing SIEM, WORM store).
- Confirm data classification and de-identification rules with DPO.
