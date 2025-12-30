import { motion } from "framer-motion";
import { Shield, AlertTriangle, Globe2, Database, Activity, Zap, Eye, Lock } from "lucide-react";
import { Link } from "wouter";
import PageLayout from "@/components/PageLayout";

const threatStats = [
  { value: "10M+", label: "Indicators Tracked", icon: Database },
  { value: "500+", label: "Threat Feeds Integrated", icon: Activity },
  { value: "Real-Time", label: "Global Coverage", icon: Globe2 },
  { value: "< 5 min", label: "Indicator Freshness", icon: Zap },
];

const capabilities = [
  {
    icon: Eye,
    title: "Threat Intelligence Exchange",
    description: "Participate in India's first sovereign threat intelligence sharing community. Share and receive IOCs with trusted peers.",
    href: "/threat-intelligence/exchange"
  },
  {
    icon: Database,
    title: "IOC Database",
    description: "Access our comprehensive database of indicators of compromise including IPs, domains, URLs, and file hashes.",
    href: "/threat-intelligence/ioc-database"
  },
  {
    icon: Activity,
    title: "Real-Time Dashboard",
    description: "Live visualization of global threats, attack trends, and sector-specific threat landscape analysis.",
    href: "/threat-intelligence/real-time-dashboard"
  },
  {
    icon: AlertTriangle,
    title: "Malware Analysis",
    description: "Submit suspicious files for sandboxed analysis. Get detailed behavioral reports and YARA signatures.",
    href: "/threat-intelligence/malware-analysis"
  },
];

const useCases = [
  { title: "SOC Operations", description: "Enrich alerts with threat context for faster triage and response" },
  { title: "Threat Hunting", description: "Proactively search for indicators of compromise in your environment" },
  { title: "DNS Security", description: "Block malicious domains before users can reach them" },
  { title: "Incident Response", description: "Correlate incidents with known threat actor TTPs" },
];

export default function ThreatIntelligence() {
  return (
    <PageLayout
      title="Threat Intelligence"
      subtitle="India's sovereign threat intelligence platform for enterprise and government defenders"
      badge="T-SPAN Intel"
      breadcrumbs={[{ label: "Threat Intelligence" }]}
    >
      <section className="py-20 bg-slate-900/50">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-4 gap-6">
            {threatStats.map((stat, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1 }}
                className="bg-slate-950/80 border border-red-900/30 rounded-xl p-6 text-center group hover:border-red-500/50 transition-all"
              >
                <stat.icon className="w-10 h-10 text-red-500 mx-auto mb-4 group-hover:scale-110 transition-transform" />
                <div className="text-3xl font-display font-bold text-white mb-2">{stat.value}</div>
                <div className="text-slate-400 text-sm">{stat.label}</div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-20">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-3xl md:text-4xl font-display font-bold text-white mb-4">
              Intelligence <span className="text-primary">Capabilities</span>
            </h2>
            <p className="text-slate-400 max-w-2xl mx-auto">
              Comprehensive threat intelligence services powered by T-SPAN's sovereign intelligence network
            </p>
          </motion.div>

          <div className="grid md:grid-cols-2 gap-8">
            {capabilities.map((cap, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1 }}
              >
                <Link href={cap.href}>
                  <div className="bg-slate-900/50 border border-slate-800 rounded-2xl p-8 hover:border-primary/50 transition-all h-full group cursor-pointer">
                    <cap.icon className="w-12 h-12 text-primary mb-6 group-hover:scale-110 transition-transform" />
                    <h3 className="text-xl font-display font-bold text-white mb-3 group-hover:text-primary transition-colors">{cap.title}</h3>
                    <p className="text-slate-400">{cap.description}</p>
                  </div>
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
            className="text-center mb-16"
          >
            <h2 className="text-3xl md:text-4xl font-display font-bold text-white mb-4">
              Use <span className="text-secondary">Cases</span>
            </h2>
          </motion.div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {useCases.map((useCase, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1 }}
                className="bg-slate-950/80 border border-slate-800 rounded-xl p-6 hover:border-primary/30 transition-all"
              >
                <h4 className="text-lg font-display font-bold text-white mb-3">{useCase.title}</h4>
                <p className="text-slate-400 text-sm">{useCase.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-20 bg-gradient-to-r from-red-500/10 to-orange-500/10 border-y border-slate-800">
        <div className="container mx-auto px-4 text-center">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            <h2 className="text-3xl font-display font-bold text-white mb-6">
              Join the Intelligence Community
            </h2>
            <p className="text-slate-400 max-w-2xl mx-auto mb-8">
              Subscribe to T-SPAN's threat intelligence feeds and become part of India's sovereign security network.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link href="/threat-intelligence/subscribe">
                <button 
                  className="px-6 py-3 bg-red-500 text-white font-bold rounded-lg hover:bg-red-600 transition-colors"
                  data-testid="button-subscribe"
                >
                  Subscribe Now
                </button>
              </Link>
              <Link href="/threat-intelligence/pricing">
                <button className="px-6 py-3 bg-slate-800 text-white font-bold rounded-lg hover:bg-slate-700 transition-colors border border-slate-700">
                  View Pricing
                </button>
              </Link>
            </div>
          </motion.div>
        </div>
      </section>
    </PageLayout>
  );
}
