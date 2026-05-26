import { ReactNode } from "react";
import { Link, useLocation } from "wouter";
import { Shield, Network, LayoutDashboard, GitBranch, Sparkles, FileText, Lock, Home } from "lucide-react";
import { cn } from "@/lib/utils";
import { demoDisclaimer } from "@/lib/raiffeisen-mock-data";

const NAV = [
  { href: "/raiffeisen", label: "Overview", icon: Home },
  { href: "/raiffeisen/command-center", label: "Command Center", icon: LayoutDashboard },
  { href: "/raiffeisen/knowledge-graph", label: "Knowledge Graph", icon: Network },
  { href: "/raiffeisen/deal-digital-twin", label: "Deal Digital Twin", icon: GitBranch },
  { href: "/raiffeisen/before-after", label: "Before / After", icon: Sparkles },
  { href: "/raiffeisen/executive-brief", label: "Executive Brief", icon: FileText },
  { href: "/raiffeisen/ssdlc", label: "SSDLC", icon: Lock },
];

export function PremiumHeader() {
  const [location] = useLocation();
  return (
    <header className="sticky top-0 z-40 border-b border-neutral-200/70 bg-white/85 backdrop-blur-xl">
      <div className="mx-auto flex max-w-7xl items-center justify-between px-6 py-3">
        <Link href="/raiffeisen">
          <a className="flex items-center gap-3" data-testid="brand-link">
            <div className="grid h-10 w-10 place-items-center rounded-xl bg-gradient-to-br from-amber-300 via-yellow-400 to-amber-500 text-black shadow-md ring-1 ring-black/5">
              <Shield className="h-5 w-5" strokeWidth={2.5} />
            </div>
            <div className="flex flex-col leading-tight">
              <span className="text-[11px] font-semibold uppercase tracking-[0.18em] text-neutral-500">
                Raiffeisen NÖ-Wien
              </span>
              <span className="text-sm font-semibold text-neutral-900">
                Real Estate Finance AI Command Center
              </span>
            </div>
          </a>
        </Link>
        <nav className="hidden items-center gap-1 lg:flex">
          {NAV.map((n) => {
            const Icon = n.icon;
            const active = location === n.href;
            return (
              <Link key={n.href} href={n.href}>
                <a
                  data-testid={`nav-${n.label.toLowerCase().replace(/\s+/g, "-")}`}
                  className={cn(
                    "inline-flex items-center gap-1.5 rounded-lg px-3 py-1.5 text-xs font-medium transition",
                    active
                      ? "bg-neutral-900 text-white shadow-sm"
                      : "text-neutral-700 hover:bg-neutral-100"
                  )}
                >
                  <Icon className="h-3.5 w-3.5" />
                  {n.label}
                </a>
              </Link>
            );
          })}
        </nav>
        <div className="hidden items-center gap-2 md:flex">
          <div className="flex flex-col items-end leading-tight">
            <span className="text-[11px] font-semibold text-neutral-900">Max V. Zechmann</span>
            <span className="text-[10px] text-neutral-500">Key Account Manager — Real Estate Finance</span>
          </div>
          <div className="grid h-9 w-9 place-items-center rounded-full bg-neutral-900 text-xs font-semibold text-white ring-2 ring-amber-300">
            MZ
          </div>
        </div>
      </div>
    </header>
  );
}

export function RaiffeisenFooter() {
  return (
    <footer className="border-t border-neutral-200 bg-gradient-to-b from-white to-neutral-50">
      <div className="mx-auto max-w-7xl px-6 py-10">
        <div className="grid gap-8 md:grid-cols-4">
          <div>
            <div className="mb-3 flex items-center gap-2">
              <div className="grid h-8 w-8 place-items-center rounded-lg bg-amber-400 text-black">
                <Shield className="h-4 w-4" strokeWidth={2.5} />
              </div>
              <span className="text-sm font-semibold">Raiffeisen NÖ-Wien</span>
            </div>
            <p className="text-xs text-neutral-600">
              Raiffeisenlandesbank Niederösterreich-Wien AG — strategic concept demonstration of
              Claude-powered agentic banking workflows for Real Estate Finance.
            </p>
          </div>
          <div>
            <h4 className="mb-3 text-xs font-semibold uppercase tracking-wider text-neutral-500">
              Demo routes
            </h4>
            <ul className="space-y-1.5 text-xs text-neutral-700">
              {NAV.map((n) => (
                <li key={n.href}>
                  <Link href={n.href}>
                    <a className="hover:text-neutral-900">{n.label}</a>
                  </Link>
                </li>
              ))}
            </ul>
          </div>
          <div>
            <h4 className="mb-3 text-xs font-semibold uppercase tracking-wider text-neutral-500">
              Governance posture
            </h4>
            <ul className="space-y-1.5 text-xs text-neutral-700">
              <li>Evidence-first AI controls</li>
              <li>Human approval gates</li>
              <li>EU AI Act high-risk alignment</li>
              <li>Synthetic data only in demo</li>
              <li>Critical-infrastructure-grade resilience</li>
            </ul>
          </div>
          <div>
            <h4 className="mb-3 text-xs font-semibold uppercase tracking-wider text-neutral-500">
              Contact persona
            </h4>
            <p className="text-xs text-neutral-700">
              <span className="block font-semibold text-neutral-900">Max V. Zechmann</span>
              Key Account Manager — Real Estate Finance
              <br />
              Raiffeisenlandesbank Niederösterreich-Wien AG
              <br />
              Public site: raiffeisen.at
            </p>
          </div>
        </div>
        <div className="mt-8 flex flex-col gap-2 border-t border-neutral-200 pt-6 text-[11px] text-neutral-500 md:flex-row md:items-center md:justify-between">
          <span>{demoDisclaimer}</span>
          <span>© Raiffeisenlandesbank Niederösterreich-Wien AG · Concept demo prepared for strategic discussion.</span>
        </div>
      </div>
    </footer>
  );
}

export function PageShell({ children }: { children: ReactNode }) {
  return (
    <div className="min-h-screen bg-white text-neutral-900">
      <DemoBanner />
      <PremiumHeader />
      <main className="mx-auto max-w-7xl px-6 py-8">{children}</main>
      <RaiffeisenFooter />
    </div>
  );
}

export function DemoBanner() {
  return (
    <div className="bg-gradient-to-r from-neutral-900 via-neutral-800 to-neutral-900 text-[11px] text-amber-200">
      <div className="mx-auto flex max-w-7xl items-center justify-between px-6 py-1.5">
        <span className="tracking-wide">{demoDisclaimer}</span>
        <span className="hidden md:inline">claude-opus · evidence-first · human approval gates</span>
      </div>
    </div>
  );
}
