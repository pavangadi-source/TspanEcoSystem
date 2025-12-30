import { motion } from "framer-motion";
import { Link } from "wouter";
import PageLayout from "@/components/PageLayout";
import { Share2, Shield, Users, Globe, Lock, FileCode, CheckCircle, ArrowRight, Network } from "lucide-react";

const exchangeFeatures = [
  {
    icon: Share2,
    title: "STIX/TAXII Support",
    description: "Industry-standard threat intelligence sharing protocols for seamless integration with existing security infrastructure",
    details: ["STIX 2.1 compliant", "TAXII 2.1 server", "Automated collection", "Custom feeds"],
  },
  {
    icon: Users,
    title: "Trusted Circles",
    description: "Share and receive threat intelligence with verified partners in sector-specific trusted circles",
    details: ["BFSI circle", "Government circle", "Critical infrastructure", "Custom private circles"],
  },
  {
    icon: Globe,
    title: "Global Network",
    description: "Connect with the global threat intelligence community while maintaining India-focused context",
    details: ["200+ global partners", "India CERT integration", "Sectoral CERTs", "International feeds"],
  },
  {
    icon: Lock,
    title: "Traffic Light Protocol",
    description: "Control how your shared intelligence can be used and redistributed using TLP marking",
    details: ["TLP:RED - Restricted", "TLP:AMBER - Limited", "TLP:GREEN - Community", "TLP:WHITE - Public"],
  },
];

const sharingStats = [
  { value: "50M+", label: "IOCs Shared Daily" },
  { value: "500+", label: "Organizations Connected" },
  { value: "15min", label: "Average Propagation Time" },
  { value: "99.9%", label: "Platform Uptime" },
];

const participationBenefits = [
  "Early warning on emerging threats targeting your sector",
  "Collective defense through shared threat intelligence",
  "Reduce detection time with community-sourced IOCs",
  "Contribute to national cyber resilience",
  "Access to curated, high-fidelity threat data",
  "Integration with existing SIEM and SOAR platforms",
];

export default function Exchange() {
  return (
    <PageLayout
      title="Threat Intelligence Exchange"
      subtitle="Join India's premier threat intelligence sharing community for collective cyber defense"
      badge="Threat Intelligence"
      breadcrumbs={[
        { label: "Threat Intelligence", href: "/threat-intelligence" },
        { label: "Exchange" },
      ]}
    >
      <section className="py-12">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-4 gap-6">
            {sharingStats.map((stat, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1 }}
                className="bg-gradient-to-br from-red-500/10 to-orange-500/10 border border-red-500/30 rounded-xl p-6 text-center"
                data-testid={`exchange-stat-${i}`}
              >
                <div className="text-3xl font-display font-bold text-white mb-2">{stat.value}</div>
                <div className="text-slate-400 text-sm">{stat.label}</div>
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
            className="text-center mb-16"
          >
            <h2 className="text-3xl md:text-4xl font-display font-bold text-white mb-4">
              Exchange <span className="text-primary">Capabilities</span>
            </h2>
            <p className="text-slate-400 max-w-2xl mx-auto">
              Enterprise-grade threat sharing platform built for Indian organizations
            </p>
          </motion.div>

          <div className="grid md:grid-cols-2 gap-8">
            {exchangeFeatures.map((feature, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1 }}
                className="bg-slate-950/80 border border-slate-800 rounded-2xl p-8"
                data-testid={`exchange-feature-${i}`}
              >
                <feature.icon className="w-12 h-12 text-red-400 mb-6" />
                <h3 className="text-2xl font-display font-bold text-white mb-3">{feature.title}</h3>
                <p className="text-slate-400 mb-6">{feature.description}</p>
                <ul className="grid grid-cols-2 gap-2">
                  {feature.details.map((detail, j) => (
                    <li key={j} className="flex items-center gap-2 text-slate-300 text-sm">
                      <CheckCircle className="w-4 h-4 text-green-400" />
                      {detail}
                    </li>
                  ))}
                </ul>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
            >
              <h2 className="text-3xl md:text-4xl font-display font-bold text-white mb-6">
                Why Join the <span className="text-secondary">Exchange</span>?
              </h2>
              <ul className="space-y-4">
                {participationBenefits.map((benefit, i) => (
                  <li key={i} className="flex items-start gap-3 text-slate-300">
                    <CheckCircle className="w-5 h-5 text-red-400 mt-0.5 flex-shrink-0" />
                    {benefit}
                  </li>
                ))}
              </ul>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="bg-gradient-to-br from-red-500/10 to-orange-500/10 border border-red-500/30 rounded-2xl p-8"
            >
              <Network className="w-16 h-16 text-red-400 mb-6" />
              <h3 className="text-2xl font-display font-bold text-white mb-4">Request Access</h3>
              <p className="text-slate-400 mb-6">
                Membership is available to verified organizations. Complete the application to join our trusted network.
              </p>
              <Link href="/threat-intelligence/subscribe">
                <button 
                  className="w-full px-6 py-4 bg-red-500 text-white font-bold rounded-lg hover:bg-red-600 transition-colors"
                  data-testid="button-request-access"
                >
                  Apply for Membership
                </button>
              </Link>
            </motion.div>
          </div>
        </div>
      </section>
    </PageLayout>
  );
}
