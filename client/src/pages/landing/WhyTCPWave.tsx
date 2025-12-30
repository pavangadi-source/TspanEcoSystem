import { motion } from "framer-motion";
import { Shield, Zap, Globe2, Award, CheckCircle, ArrowRight } from "lucide-react";
import { Link } from "wouter";
import PageLayout from "@/components/PageLayout";

const benefits = [
  {
    icon: Shield,
    title: "Enterprise-Grade Security",
    description: "Built-in DNSSEC, RPZ, and threat intelligence integration protect against the most sophisticated attacks.",
    stats: "99.999% Uptime"
  },
  {
    icon: Zap,
    title: "Unmatched Performance",
    description: "Handle billions of DNS queries with sub-millisecond response times and automatic scaling.",
    stats: "100M+ QPS"
  },
  {
    icon: Globe2,
    title: "Multi-Cloud Ready",
    description: "Native integration with AWS, Azure, GCP, and hybrid environments for unified DDI management.",
    stats: "Any Cloud"
  },
  {
    icon: Award,
    title: "Industry Recognition",
    description: "Trusted by Fortune 500 enterprises, governments, and critical infrastructure operators worldwide.",
    stats: "500+ Enterprises"
  },
];

const comparisons = [
  { feature: "Unified DDI Platform", tcpwave: true, others: "Partial" },
  { feature: "Native Cloud Integration", tcpwave: true, others: "Limited" },
  { feature: "Built-in Threat Intelligence", tcpwave: true, others: "Add-on" },
  { feature: "API-First Design", tcpwave: true, others: "Limited" },
  { feature: "Real-Time Analytics", tcpwave: true, others: "Delayed" },
  { feature: "DNSSEC Automation", tcpwave: true, others: "Manual" },
];

export default function WhyTCPWave() {
  return (
    <PageLayout
      title="Why TCPWave"
      subtitle="The world's most advanced DDI platform for enterprise and government"
      badge="TCPWave Advantage"
      breadcrumbs={[{ label: "Why TCPWave" }]}
    >
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-2 gap-8">
            {benefits.map((benefit, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1 }}
                className="bg-slate-900/50 border border-slate-800 rounded-2xl p-8 hover:border-primary/50 transition-all"
              >
                <div className="flex items-start gap-6">
                  <div className="w-16 h-16 rounded-xl bg-primary/10 border border-primary/30 flex items-center justify-center flex-shrink-0">
                    <benefit.icon className="w-8 h-8 text-primary" />
                  </div>
                  <div>
                    <h3 className="text-xl font-display font-bold text-white mb-2">{benefit.title}</h3>
                    <p className="text-slate-400 mb-4">{benefit.description}</p>
                    <span className="inline-block px-3 py-1 bg-primary/20 text-primary text-sm rounded-full">
                      {benefit.stats}
                    </span>
                  </div>
                </div>
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
              TCPWave vs <span className="text-secondary">The Competition</span>
            </h2>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="max-w-4xl mx-auto bg-slate-950/80 border border-slate-800 rounded-2xl overflow-hidden"
          >
            <div className="grid grid-cols-3 gap-4 p-4 bg-slate-900 border-b border-slate-800">
              <div className="text-slate-400 font-medium">Feature</div>
              <div className="text-center text-primary font-bold">TCPWave</div>
              <div className="text-center text-slate-400">Others</div>
            </div>
            {comparisons.map((row, i) => (
              <div key={i} className="grid grid-cols-3 gap-4 p-4 border-b border-slate-800 last:border-0">
                <div className="text-white">{row.feature}</div>
                <div className="text-center">
                  {row.tcpwave === true ? (
                    <CheckCircle className="w-6 h-6 text-green-500 mx-auto" />
                  ) : (
                    <span className="text-slate-400">{row.tcpwave}</span>
                  )}
                </div>
                <div className="text-center text-slate-500">{row.others}</div>
              </div>
            ))}
          </motion.div>
        </div>
      </section>

      <section className="py-20 bg-gradient-to-r from-primary/10 to-secondary/10 border-y border-slate-800">
        <div className="container mx-auto px-4 text-center">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            <h2 className="text-3xl font-display font-bold text-white mb-6">
              Experience the Difference
            </h2>
            <p className="text-slate-400 max-w-2xl mx-auto mb-8">
              See why leading organizations choose TCPWave for their critical DDI infrastructure.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link href="/tcpwave/request-demo">
                <button className="px-6 py-3 bg-primary text-slate-950 font-bold rounded-lg hover:bg-primary/90 transition-colors">
                  Request Demo
                </button>
              </Link>
              <Link href="/tcpwave/case-studies">
                <button className="px-6 py-3 bg-slate-800 text-white font-bold rounded-lg hover:bg-slate-700 transition-colors border border-slate-700">
                  View Case Studies
                </button>
              </Link>
            </div>
          </motion.div>
        </div>
      </section>
    </PageLayout>
  );
}
