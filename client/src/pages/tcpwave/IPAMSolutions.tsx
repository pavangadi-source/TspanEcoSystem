import { motion } from "framer-motion";
import { Network, Server, Shield, BarChart3, Settings, Globe2, CheckCircle, ArrowRight } from "lucide-react";
import { Link } from "wouter";
import PageLayout from "@/components/PageLayout";

const challenges = [
  { problem: "IP Address Exhaustion", solution: "Automated subnet planning and IPv4/IPv6 optimization" },
  { problem: "Manual Tracking Errors", solution: "Real-time IP discovery and automatic conflict detection" },
  { problem: "Audit Compliance Gaps", solution: "Complete address history and change tracking" },
  { problem: "Network Sprawl", solution: "Unified view across hybrid cloud and on-premise environments" },
];

const capabilities = [
  {
    icon: Network,
    title: "Automated Discovery",
    description: "Continuous scanning of your network to discover and catalog all IP addresses, subnets, and VLANs in real-time.",
    features: ["SNMP/WMI discovery", "Cloud API integration", "Container network scanning"]
  },
  {
    icon: BarChart3,
    title: "Capacity Planning",
    description: "Predictive analytics for IP address utilization, helping you plan for growth and avoid exhaustion.",
    features: ["Utilization trending", "Growth forecasting", "Automated alerts"]
  },
  {
    icon: Shield,
    title: "Security Integration",
    description: "Tight integration with security tools for IP-based threat detection and access control.",
    features: ["NAC integration", "Firewall sync", "Threat correlation"]
  },
  {
    icon: Settings,
    title: "API-First Automation",
    description: "RESTful APIs for seamless integration with your existing infrastructure automation tools.",
    features: ["Ansible modules", "Terraform provider", "Custom scripting"]
  },
];

const useCases = [
  { title: "Data Center Migration", description: "Plan and execute complex IP readdressing with zero conflicts" },
  { title: "Cloud Adoption", description: "Unified IPAM across AWS, Azure, GCP, and on-premise" },
  { title: "M&A Integration", description: "Merge IP spaces from acquired companies without disruption" },
  { title: "IPv6 Transition", description: "Dual-stack management for seamless IPv4 to IPv6 migration" },
];

export default function IPAMSolutions() {
  return (
    <PageLayout
      title="IPAM Solutions"
      subtitle="Enterprise IP Address Management for the hybrid cloud era"
      badge="TCPWave IPAM"
      breadcrumbs={[{ label: "TCPWave", href: "/tcpwave" }, { label: "IPAM Solutions" }]}
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
              From Chaos to <span className="text-primary">Control</span>
            </h2>
            <p className="text-slate-400 max-w-2xl mx-auto">
              TCPWave IPAM transforms IP address management from spreadsheet chaos to automated excellence
            </p>
          </motion.div>

          <div className="max-w-4xl mx-auto">
            {challenges.map((item, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, x: -30 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1 }}
                className="flex items-center gap-6 py-6 border-b border-slate-800 last:border-0"
              >
                <div className="flex-1 text-right">
                  <span className="text-red-400 line-through">{item.problem}</span>
                </div>
                <ArrowRight className="w-6 h-6 text-primary flex-shrink-0" />
                <div className="flex-1">
                  <span className="text-green-400">{item.solution}</span>
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
              Core <span className="text-secondary">Capabilities</span>
            </h2>
          </motion.div>

          <div className="grid md:grid-cols-2 gap-8">
            {capabilities.map((cap, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1 }}
                className="bg-slate-900/50 border border-slate-800 rounded-2xl p-8 hover:border-primary/50 transition-all"
              >
                <cap.icon className="w-12 h-12 text-primary mb-6" />
                <h3 className="text-xl font-display font-bold text-white mb-3">{cap.title}</h3>
                <p className="text-slate-400 mb-6">{cap.description}</p>
                <div className="flex flex-wrap gap-2">
                  {cap.features.map((feature, j) => (
                    <span key={j} className="px-3 py-1 bg-slate-800 text-slate-300 text-sm rounded-full">
                      {feature}
                    </span>
                  ))}
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
              Enterprise <span className="text-primary">Use Cases</span>
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

      <section className="py-20 bg-gradient-to-r from-primary/10 to-secondary/10 border-y border-slate-800">
        <div className="container mx-auto px-4 text-center">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            <h2 className="text-3xl font-display font-bold text-white mb-6">
              Master IPAM at T-SPAN
            </h2>
            <p className="text-slate-400 max-w-2xl mx-auto mb-8">
              Learn enterprise IPAM deployment, automation, and best practices with hands-on training 
              on production-grade TCPWave infrastructure.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link href="/tcpwave/request-demo">
                <button className="px-6 py-3 bg-primary text-slate-950 font-bold rounded-lg hover:bg-primary/90 transition-colors">
                  Request Demo
                </button>
              </Link>
              <Link href="/ipam-training">
                <button className="px-6 py-3 bg-slate-800 text-white font-bold rounded-lg hover:bg-slate-700 transition-colors border border-slate-700">
                  View Training Program
                </button>
              </Link>
            </div>
          </motion.div>
        </div>
      </section>
    </PageLayout>
  );
}
