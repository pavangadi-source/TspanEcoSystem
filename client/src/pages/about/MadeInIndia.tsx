import { motion } from "framer-motion";
import { Flag, Shield, Rocket, Globe2, Award, Lock, Server, Zap } from "lucide-react";
import PageLayout from "@/components/PageLayout";

const atmanirbharPillars = [
  {
    icon: Shield,
    title: "Sovereign Technology",
    description: "Indigenous cybersecurity solutions developed in India, for India, by Indian experts. No foreign backdoors, no external dependencies.",
    stat: "100%",
    statLabel: "Indian-developed curriculum"
  },
  {
    icon: Server,
    title: "Local Infrastructure",
    description: "All training infrastructure hosted in Indian data centers. Student data never leaves Indian jurisdiction.",
    stat: "Zero",
    statLabel: "Foreign data transfers"
  },
  {
    icon: Lock,
    title: "National Security Aligned",
    description: "Curriculum reviewed by NCIIPC, CERT-In, and DRDO to ensure alignment with national security priorities.",
    stat: "15+",
    statLabel: "Government endorsements"
  },
  {
    icon: Rocket,
    title: "Export-Ready Talent",
    description: "Our graduates are trained to defend not just India, but to become global cybersecurity leaders.",
    stat: "30+",
    statLabel: "Countries hiring our alumni"
  },
];

const digitalIndiaAlignment = [
  { initiative: "Digital India", alignment: "Building digital defenders for India's digital transformation" },
  { initiative: "Atmanirbhar Bharat", alignment: "Self-reliant cybersecurity workforce reducing foreign dependency" },
  { initiative: "Skill India", alignment: "10,000+ professionals skilled annually in critical security domains" },
  { initiative: "Make in India", alignment: "Indigenous threat intelligence platform and DDI solutions" },
  { initiative: "Startup India", alignment: "Incubating 50+ cybersecurity startups through our accelerator" },
];

const madeInIndiaProducts = [
  { name: "T-SPAN Threat Exchange", description: "India's first sovereign threat intelligence sharing platform" },
  { name: "Bharat DDI Framework", description: "Indigenous DNS/DHCP/IPAM solution for government networks" },
  { name: "CERT-In Training Modules", description: "Official incident response curriculum for national CERT" },
  { name: "Sovereign SOC Playbooks", description: "India-specific security operations procedures" },
];

export default function MadeInIndia() {
  return (
    <PageLayout
      title="Made in India"
      subtitle="Sovereign cybersecurity education aligned with Atmanirbhar Bharat and Digital India missions"
      badge="स्वदेशी"
      gradient="from-orange-500 via-white to-green-500"
      breadcrumbs={[{ label: "About", href: "/about" }, { label: "Made in India" }]}
    >
      <section className="py-20 bg-slate-900/50">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <div className="inline-flex items-center gap-3 px-6 py-3 bg-gradient-to-r from-orange-500/20 via-white/20 to-green-500/20 border border-orange-500/30 rounded-full mb-6">
              <Flag className="w-6 h-6 text-orange-500" />
              <span className="text-white font-display font-bold">आत्मनिर्भर भारत</span>
            </div>
            <h2 className="text-3xl md:text-4xl font-display font-bold text-white mb-4">
              Self-Reliant Cybersecurity
            </h2>
            <p className="text-slate-400 max-w-2xl mx-auto">
              T-SPAN embodies the spirit of Atmanirbhar Bharat - building a self-reliant cybersecurity 
              ecosystem that reduces India's dependence on foreign security expertise and technology.
            </p>
          </motion.div>

          <div className="grid md:grid-cols-2 gap-8">
            {atmanirbharPillars.map((pillar, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1 }}
                className="bg-slate-950/80 border border-slate-800 rounded-2xl p-8 hover:border-orange-500/30 transition-all group"
              >
                <div className="flex items-start gap-6">
                  <div className="w-16 h-16 rounded-xl bg-gradient-to-br from-orange-500/20 to-green-500/20 border border-orange-500/30 flex items-center justify-center flex-shrink-0 group-hover:scale-110 transition-transform">
                    <pillar.icon className="w-8 h-8 text-orange-500" />
                  </div>
                  <div className="flex-1">
                    <h3 className="text-xl font-display font-bold text-white mb-3">{pillar.title}</h3>
                    <p className="text-slate-400 mb-4">{pillar.description}</p>
                    <div className="flex items-baseline gap-2">
                      <span className="text-3xl font-display font-bold text-orange-500">{pillar.stat}</span>
                      <span className="text-slate-500 text-sm">{pillar.statLabel}</span>
                    </div>
                  </div>
                </div>
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
              Digital India <span className="text-primary">Alignment</span>
            </h2>
          </motion.div>

          <div className="max-w-4xl mx-auto">
            {digitalIndiaAlignment.map((item, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, x: -30 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1 }}
                className="flex items-center gap-6 py-6 border-b border-slate-800 last:border-0"
              >
                <div className="w-48 flex-shrink-0">
                  <span className="text-primary font-mono text-sm">{item.initiative}</span>
                </div>
                <div className="h-px w-8 bg-slate-700" />
                <p className="text-slate-300">{item.alignment}</p>
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
              Indigenous <span className="text-secondary">Products</span>
            </h2>
            <p className="text-slate-400 max-w-2xl mx-auto">
              Homegrown cybersecurity solutions developed by T-SPAN
            </p>
          </motion.div>

          <div className="grid md:grid-cols-2 gap-6">
            {madeInIndiaProducts.map((product, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1 }}
                className="bg-slate-950/80 border border-slate-800 rounded-xl p-6 hover:border-green-500/30 transition-all"
              >
                <div className="flex items-center gap-3 mb-3">
                  <Award className="w-5 h-5 text-green-500" />
                  <h4 className="text-lg font-display font-bold text-white">{product.name}</h4>
                </div>
                <p className="text-slate-400 text-sm">{product.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>
    </PageLayout>
  );
}
