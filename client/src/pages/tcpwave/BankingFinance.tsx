import { motion } from "framer-motion";
import { Link } from "wouter";
import PageLayout from "@/components/PageLayout";
import { Landmark, Shield, Lock, AlertTriangle, TrendingUp, Server, CheckCircle, CreditCard, Building2, FileCheck } from "lucide-react";

const bfsiChallenges = [
  {
    icon: AlertTriangle,
    title: "DNS-Based Attacks",
    description: "Financial institutions face 300% more DNS attacks than other sectors, including tunneling, amplification, and cache poisoning attacks.",
  },
  {
    icon: Lock,
    title: "Regulatory Compliance",
    description: "RBI, SEBI, and IRDAI mandate strict cybersecurity controls. Non-compliance can result in penalties up to ₹2 crore.",
  },
  {
    icon: TrendingUp,
    title: "Digital Transformation",
    description: "UPI, mobile banking, and open banking initiatives require robust, scalable network infrastructure.",
  },
  {
    icon: Server,
    title: "Legacy Infrastructure",
    description: "Core banking systems often rely on outdated DNS infrastructure that cannot meet modern security requirements.",
  },
];

const rbiBenefits = [
  {
    requirement: "RBI Cyber Security Framework",
    solution: "Complete DNS security with threat intelligence integration",
    compliance: "Fully Compliant",
  },
  {
    requirement: "RBI IT Outsourcing Guidelines",
    solution: "On-premises deployment with local support",
    compliance: "Fully Compliant",
  },
  {
    requirement: "CERT-In Reporting",
    solution: "Automated incident detection and reporting",
    compliance: "Fully Compliant",
  },
  {
    requirement: "Business Continuity",
    solution: "99.999% uptime with geo-redundancy",
    compliance: "Exceeds Requirements",
  },
];

const useCases = [
  {
    title: "Core Banking DNS",
    description: "High-availability DNS for mission-critical banking applications",
    features: ["Sub-millisecond response", "100% uptime SLA", "Automatic failover", "Real-time monitoring"],
  },
  {
    title: "UPI Transaction Security",
    description: "Secure DNS resolution for high-volume UPI transactions",
    features: ["10M+ queries/second", "DDoS protection", "Geographic load balancing", "Transaction integrity"],
  },
  {
    title: "ATM/Branch Network",
    description: "Reliable IPAM for nationwide ATM and branch networks",
    features: ["Automated provisioning", "Network segmentation", "Compliance reporting", "Remote management"],
  },
  {
    title: "Digital Banking Platforms",
    description: "Scalable DDI for mobile and internet banking",
    features: ["Cloud-native", "API integration", "Elastic scaling", "Security analytics"],
  },
];

const bankingStats = [
  { value: "₹500+ Cr", label: "Daily Transaction Value Protected" },
  { value: "15+", label: "Major Banks Trust TCPWave" },
  { value: "99.999%", label: "Uptime Achieved" },
  { value: "0", label: "DNS-Related Breaches" },
];

export default function BankingFinance() {
  return (
    <PageLayout
      title="Banking & Finance"
      subtitle="Enterprise DDI solutions designed for the unique security, compliance, and performance requirements of financial institutions"
      badge="TCPWave"
      breadcrumbs={[
        { label: "TCPWave", href: "/tcpwave" },
        { label: "Banking & Finance" },
      ]}
    >
      <section className="py-12">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-4 gap-6">
            {bankingStats.map((stat, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1 }}
                className="bg-gradient-to-br from-emerald-500/10 to-cyan-500/10 border border-emerald-500/30 rounded-xl p-6 text-center"
                data-testid={`banking-stat-${i}`}
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
              BFSI Security <span className="text-primary">Challenges</span>
            </h2>
            <p className="text-slate-400 max-w-2xl mx-auto">
              Financial institutions face unique threats requiring specialized protection
            </p>
          </motion.div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {bfsiChallenges.map((challenge, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1 }}
                className="bg-slate-950/80 border border-slate-800 rounded-xl p-6"
                data-testid={`challenge-${i}`}
              >
                <challenge.icon className="w-10 h-10 text-red-400 mb-4" />
                <h3 className="text-lg font-display font-bold text-white mb-2">{challenge.title}</h3>
                <p className="text-slate-400 text-sm">{challenge.description}</p>
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
              RBI <span className="text-secondary">Compliance</span>
            </h2>
            <p className="text-slate-400 max-w-2xl mx-auto">
              TCPWave helps banks meet and exceed RBI cybersecurity requirements
            </p>
          </motion.div>

          <div className="overflow-x-auto">
            <table className="w-full border-collapse bg-slate-900/50 rounded-xl overflow-hidden">
              <thead>
                <tr className="bg-slate-800">
                  <th className="text-left py-4 px-6 text-white font-medium">Requirement</th>
                  <th className="text-left py-4 px-6 text-white font-medium">TCPWave Solution</th>
                  <th className="text-center py-4 px-6 text-white font-medium">Status</th>
                </tr>
              </thead>
              <tbody>
                {rbiBenefits.map((row, i) => (
                  <tr key={i} className="border-b border-slate-800">
                    <td className="py-4 px-6 text-slate-300">{row.requirement}</td>
                    <td className="py-4 px-6 text-slate-400">{row.solution}</td>
                    <td className="py-4 px-6 text-center">
                      <span className={`px-3 py-1 rounded-full text-xs font-medium ${
                        row.compliance === "Exceeds Requirements" 
                          ? "bg-green-500/20 text-green-400" 
                          : "bg-cyan-500/20 text-cyan-400"
                      }`}>
                        {row.compliance}
                      </span>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
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
              Banking <span className="text-primary">Use Cases</span>
            </h2>
          </motion.div>

          <div className="grid md:grid-cols-2 gap-8">
            {useCases.map((useCase, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1 }}
                className="bg-slate-950/80 border border-slate-800 rounded-2xl p-8 hover:border-emerald-500/50 transition-all"
                data-testid={`use-case-${i}`}
              >
                <CreditCard className="w-10 h-10 text-emerald-400 mb-4" />
                <h3 className="text-xl font-display font-bold text-white mb-2">{useCase.title}</h3>
                <p className="text-slate-400 mb-4">{useCase.description}</p>
                <ul className="grid grid-cols-2 gap-2">
                  {useCase.features.map((feature, j) => (
                    <li key={j} className="flex items-center gap-2 text-slate-300 text-sm">
                      <CheckCircle className="w-4 h-4 text-green-400" />
                      {feature}
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
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="bg-gradient-to-r from-emerald-500/20 to-cyan-500/20 border border-emerald-500/30 rounded-2xl p-12 text-center"
          >
            <Landmark className="w-16 h-16 text-emerald-400 mx-auto mb-6" />
            <h2 className="text-3xl md:text-4xl font-display font-bold text-white mb-4">
              Trusted by Leading Indian Banks
            </h2>
            <p className="text-slate-300 max-w-2xl mx-auto mb-8">
              Join the growing number of banks, NBFCs, and insurance companies that trust TCPWave for their critical infrastructure. Request a banking-specific demo today.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link href="/tcpwave/request-demo">
                <button 
                  className="px-8 py-4 bg-primary text-slate-950 font-bold rounded-lg hover:bg-primary/90 transition-colors"
                  data-testid="button-request-banking-demo"
                >
                  Request Banking Demo
                </button>
              </Link>
              <Link href="/banking">
                <button className="px-8 py-4 bg-slate-800 text-white font-bold rounded-lg hover:bg-slate-700 transition-colors border border-slate-700">
                  View Bank Training Programs
                </button>
              </Link>
            </div>
          </motion.div>
        </div>
      </section>
    </PageLayout>
  );
}
