import { motion } from "framer-motion";
import { Shield, Lock, AlertTriangle, CheckCircle, Zap, Globe2, Server, Eye } from "lucide-react";
import { Link } from "wouter";
import PageLayout from "@/components/PageLayout";

const threats = [
  { name: "DNS Tunneling", description: "Detect and block covert data exfiltration through DNS queries" },
  { name: "Cache Poisoning", description: "Prevent attackers from redirecting traffic to malicious servers" },
  { name: "DDoS Amplification", description: "Protect against DNS-based distributed denial of service attacks" },
  { name: "Fast-Flux Detection", description: "Identify rapidly changing DNS records used by botnets" },
  { name: "Domain Generation", description: "Detect algorithmically generated domains (DGA) used by malware" },
  { name: "Typosquatting", description: "Identify and block lookalike domains targeting your organization" },
];

const features = [
  {
    icon: Shield,
    title: "DNSSEC Implementation",
    description: "Full DNSSEC signing and validation to ensure DNS response integrity and authenticity across your infrastructure.",
    stats: "100% validation coverage"
  },
  {
    icon: Eye,
    title: "Response Policy Zones",
    description: "Advanced RPZ implementation for threat intelligence integration and real-time malicious domain blocking.",
    stats: "10M+ threat indicators"
  },
  {
    icon: AlertTriangle,
    title: "Anomaly Detection",
    description: "ML-powered detection of unusual DNS patterns indicating compromise, tunneling, or data exfiltration.",
    stats: "< 100ms detection time"
  },
  {
    icon: Lock,
    title: "DNS over HTTPS/TLS",
    description: "Encrypted DNS protocols to prevent eavesdropping and man-in-the-middle attacks on DNS traffic.",
    stats: "Full DoH/DoT support"
  },
];

const courseHighlights = [
  "DNSSEC deployment and key management",
  "Response Policy Zone (RPZ) configuration",
  "Threat intelligence feed integration",
  "DNS tunneling detection and prevention",
  "Fast-flux and DGA domain analysis",
  "DNS forensics and incident response",
];

export default function DNSSecurity() {
  return (
    <PageLayout
      title="DNS Security Solutions"
      subtitle="Enterprise-grade DNS security powered by TCPWave's industry-leading threat detection and response platform"
      badge="TCPWave Security"
      breadcrumbs={[{ label: "TCPWave", href: "/tcpwave" }, { label: "DNS Security" }]}
    >
      <section className="py-20 bg-slate-900/50">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-3xl md:text-4xl font-display font-bold text-white mb-4">
              Threats We <span className="text-red-500">Neutralize</span>
            </h2>
            <p className="text-slate-400 max-w-2xl mx-auto">
              DNS is the most attacked protocol on the internet. TCPWave provides comprehensive protection.
            </p>
          </motion.div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {threats.map((threat, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.05 }}
                className="bg-slate-950/80 border border-red-900/30 rounded-xl p-6 hover:border-red-500/50 transition-all group"
              >
                <div className="flex items-center gap-3 mb-3">
                  <AlertTriangle className="w-5 h-5 text-red-500" />
                  <h4 className="text-lg font-display font-bold text-white">{threat.name}</h4>
                </div>
                <p className="text-slate-400 text-sm">{threat.description}</p>
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
              Security <span className="text-primary">Capabilities</span>
            </h2>
          </motion.div>

          <div className="grid md:grid-cols-2 gap-8">
            {features.map((feature, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1 }}
                className="bg-slate-900/50 border border-slate-800 rounded-2xl p-8 hover:border-primary/50 transition-all group"
              >
                <div className="flex items-start gap-6">
                  <div className="w-16 h-16 rounded-xl bg-primary/10 border border-primary/30 flex items-center justify-center flex-shrink-0 group-hover:scale-110 transition-transform">
                    <feature.icon className="w-8 h-8 text-primary" />
                  </div>
                  <div>
                    <h3 className="text-xl font-display font-bold text-white mb-2">{feature.title}</h3>
                    <p className="text-slate-400 mb-3">{feature.description}</p>
                    <span className="inline-block px-3 py-1 bg-primary/20 text-primary text-sm rounded-full">
                      {feature.stats}
                    </span>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-20 bg-gradient-to-r from-primary/10 to-secondary/10 border-y border-slate-800">
        <div className="container mx-auto px-4">
          <div className="flex flex-col lg:flex-row items-center gap-12">
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="flex-1"
            >
              <h2 className="text-3xl md:text-4xl font-display font-bold text-white mb-6">
                Learn DNS Security at T-SPAN
              </h2>
              <p className="text-slate-400 mb-8">
                Master enterprise DNS security with hands-on training on live TCPWave infrastructure. 
                Our DNS Security Specialist certification prepares you for real-world threat defense.
              </p>
              <ul className="space-y-3 mb-8">
                {courseHighlights.map((item, i) => (
                  <li key={i} className="flex items-center gap-3 text-slate-300">
                    <CheckCircle className="w-5 h-5 text-primary flex-shrink-0" />
                    {item}
                  </li>
                ))}
              </ul>
              <Link href="/programs/certificates/dns-security-specialist">
                <button 
                  className="px-6 py-3 bg-primary text-slate-950 font-bold rounded-lg hover:bg-primary/90 transition-colors"
                  data-testid="button-view-certification"
                >
                  View Certification Program
                </button>
              </Link>
            </motion.div>
            <motion.div
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="flex-1"
            >
              <div className="bg-slate-950/80 border border-slate-800 rounded-2xl p-8">
                <Globe2 className="w-16 h-16 text-primary mb-6" />
                <h4 className="text-2xl font-display font-bold text-white mb-4">DNS Security Specialist</h4>
                <p className="text-slate-400 mb-6">8-week intensive program with hands-on labs</p>
                <div className="flex items-baseline gap-2">
                  <span className="text-3xl font-display font-bold text-primary">$2,800</span>
                  <span className="text-slate-500">USD</span>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>
    </PageLayout>
  );
}
