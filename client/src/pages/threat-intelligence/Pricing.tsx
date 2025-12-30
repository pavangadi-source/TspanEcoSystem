import { motion } from "framer-motion";
import { Link } from "wouter";
import PageLayout from "@/components/PageLayout";
import { Check, X, Shield, Zap, Building2 } from "lucide-react";

const pricingTiers = [
  {
    name: "Community",
    monthlyPrice: "Free",
    annualPrice: "Free",
    description: "Essential threat intelligence for individual researchers",
  },
  {
    name: "Professional",
    monthlyPrice: "₹49,999",
    annualPrice: "₹4,79,990",
    savings: "Save ₹1,20,000",
    description: "Comprehensive intelligence for security teams",
  },
  {
    name: "Enterprise",
    monthlyPrice: "Custom",
    annualPrice: "Custom",
    description: "Tailored solutions for large organizations",
  },
];

const featureComparison = [
  { feature: "IOC Lookups", community: "10K/day", professional: "100K/day", enterprise: "Unlimited" },
  { feature: "Threat Feeds", community: "Basic", professional: "All feeds", enterprise: "All + Custom" },
  { feature: "Feed Updates", community: "Daily", professional: "Real-time", enterprise: "Real-time" },
  { feature: "API Access", community: true, professional: true, enterprise: true },
  { feature: "STIX/TAXII", community: false, professional: true, enterprise: true },
  { feature: "Malware Sandbox", community: false, professional: "100/day", enterprise: "Unlimited" },
  { feature: "IOC Database", community: "Limited", professional: "Full access", enterprise: "Full + History" },
  { feature: "Threat Reports", community: false, professional: true, enterprise: true },
  { feature: "Dashboard", community: "Basic", professional: "Advanced", enterprise: "Custom" },
  { feature: "Exchange Access", community: false, professional: "Read-only", enterprise: "Full" },
  { feature: "On-Premise Option", community: false, professional: false, enterprise: true },
  { feature: "Custom Integrations", community: false, professional: false, enterprise: true },
  { feature: "SLA", community: "Best effort", professional: "99.9%", enterprise: "99.99%" },
  { feature: "Support", community: "Email", professional: "Priority", enterprise: "24/7 + TAM" },
];

export default function Pricing() {
  return (
    <PageLayout
      title="Threat Intelligence Pricing"
      subtitle="Transparent pricing for every security need"
      badge="Threat Intelligence"
      breadcrumbs={[
        { label: "Threat Intelligence", href: "/threat-intelligence" },
        { label: "Pricing" },
      ]}
    >
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-3 gap-8 mb-16">
            {pricingTiers.map((tier, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1 }}
                className={`rounded-2xl p-8 text-center ${
                  tier.name === "Professional"
                    ? "bg-gradient-to-br from-red-500/20 to-orange-500/20 border-2 border-red-500/50"
                    : "bg-slate-900/50 border border-slate-800"
                }`}
                data-testid={`tier-${i}`}
              >
                {tier.name === "Professional" && (
                  <span className="px-3 py-1 bg-red-500 text-white text-xs font-bold rounded-full mb-4 inline-block">
                    Recommended
                  </span>
                )}
                <h3 className="text-2xl font-display font-bold text-white mb-2">{tier.name}</h3>
                <p className="text-slate-400 text-sm mb-6">{tier.description}</p>
                <div className="mb-2">
                  <span className="text-4xl font-bold text-primary">{tier.monthlyPrice}</span>
                  {tier.monthlyPrice !== "Free" && tier.monthlyPrice !== "Custom" && (
                    <span className="text-slate-400">/month</span>
                  )}
                </div>
                {tier.savings && (
                  <div className="text-green-400 text-sm mb-6">{tier.savings} annually</div>
                )}
                <Link href="/threat-intelligence/subscribe">
                  <button
                    className={`w-full px-6 py-3 font-bold rounded-lg transition-colors ${
                      tier.name === "Professional"
                        ? "bg-red-500 text-white hover:bg-red-600"
                        : "bg-slate-800 text-white hover:bg-slate-700 border border-slate-700"
                    }`}
                  >
                    {tier.monthlyPrice === "Free" ? "Get Started" : tier.monthlyPrice === "Custom" ? "Contact Sales" : "Start Trial"}
                  </button>
                </Link>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-20 bg-slate-900/50">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-12"
          >
            <h2 className="text-3xl md:text-4xl font-display font-bold text-white mb-4">
              Feature <span className="text-primary">Comparison</span>
            </h2>
          </motion.div>

          <div className="overflow-x-auto">
            <table className="w-full border-collapse">
              <thead>
                <tr className="border-b border-slate-700">
                  <th className="text-left py-4 px-6 text-white font-bold">Feature</th>
                  <th className="text-center py-4 px-6 text-slate-400">Community</th>
                  <th className="text-center py-4 px-6 text-red-400 font-bold">Professional</th>
                  <th className="text-center py-4 px-6 text-slate-400">Enterprise</th>
                </tr>
              </thead>
              <tbody>
                {featureComparison.map((row, i) => (
                  <tr key={i} className="border-b border-slate-800">
                    <td className="py-4 px-6 text-slate-300">{row.feature}</td>
                    <td className="py-4 px-6 text-center">
                      {typeof row.community === "boolean" ? (
                        row.community ? (
                          <Check className="w-5 h-5 text-green-400 mx-auto" />
                        ) : (
                          <X className="w-5 h-5 text-slate-600 mx-auto" />
                        )
                      ) : (
                        <span className="text-slate-400">{row.community}</span>
                      )}
                    </td>
                    <td className="py-4 px-6 text-center bg-red-500/5">
                      {typeof row.professional === "boolean" ? (
                        row.professional ? (
                          <Check className="w-5 h-5 text-green-400 mx-auto" />
                        ) : (
                          <X className="w-5 h-5 text-slate-600 mx-auto" />
                        )
                      ) : (
                        <span className="text-cyan-400">{row.professional}</span>
                      )}
                    </td>
                    <td className="py-4 px-6 text-center">
                      {typeof row.enterprise === "boolean" ? (
                        row.enterprise ? (
                          <Check className="w-5 h-5 text-green-400 mx-auto" />
                        ) : (
                          <X className="w-5 h-5 text-slate-600 mx-auto" />
                        )
                      ) : (
                        <span className="text-slate-400">{row.enterprise}</span>
                      )}
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </section>

      <section className="py-20">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="bg-gradient-to-r from-slate-800 to-slate-900 border border-slate-700 rounded-2xl p-12 text-center"
          >
            <Shield className="w-16 h-16 text-cyan-400 mx-auto mb-6" />
            <h2 className="text-3xl md:text-4xl font-display font-bold text-white mb-4">
              Questions About Pricing?
            </h2>
            <p className="text-slate-300 max-w-2xl mx-auto mb-8">
              Our team is happy to help you find the right plan for your security needs.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link href="/contact/sales">
                <button className="px-8 py-4 bg-primary text-slate-950 font-bold rounded-lg hover:bg-primary/90 transition-colors">
                  Talk to Sales
                </button>
              </Link>
              <Link href="/schedule-demo">
                <button className="px-8 py-4 bg-slate-700 text-white font-bold rounded-lg hover:bg-slate-600 transition-colors border border-slate-600">
                  Schedule Demo
                </button>
              </Link>
            </div>
          </motion.div>
        </div>
      </section>
    </PageLayout>
  );
}
