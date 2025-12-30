import { motion } from "framer-motion";
import { Server, Network, Shield, Zap, Globe2, Lock, BarChart3, Settings, CheckCircle } from "lucide-react";
import { Link } from "wouter";
import PageLayout from "@/components/PageLayout";

const ddiPillars = [
  {
    icon: Globe2,
    title: "DNS",
    subtitle: "Domain Name System",
    description: "Enterprise-grade DNS with DNSSEC, RPZ, and advanced threat protection. Handles billions of queries with sub-millisecond response times.",
    color: "from-blue-500 to-cyan-600"
  },
  {
    icon: Network,
    title: "DHCP",
    subtitle: "Dynamic Host Configuration",
    description: "Scalable DHCP services with failover, load balancing, and seamless integration with identity management systems.",
    color: "from-purple-500 to-pink-600"
  },
  {
    icon: Server,
    title: "IPAM",
    subtitle: "IP Address Management",
    description: "Unified IP address lifecycle management across cloud, on-premise, and hybrid environments with real-time visibility.",
    color: "from-orange-500 to-red-600"
  },
];

const architectureFeatures = [
  { feature: "High Availability", description: "Active-active clustering with automatic failover" },
  { feature: "Scalability", description: "Handles 100M+ DNS queries per second" },
  { feature: "Multi-Cloud", description: "Native AWS, Azure, GCP integration" },
  { feature: "API-First", description: "Complete REST API for automation" },
  { feature: "Role-Based Access", description: "Granular RBAC with AD/LDAP integration" },
  { feature: "Audit Trail", description: "Complete change history and compliance reporting" },
];

const deploymentOptions = [
  { option: "On-Premise", description: "Deploy in your data center with full control" },
  { option: "Private Cloud", description: "Run on your preferred cloud infrastructure" },
  { option: "Managed Service", description: "Let TCPWave experts manage your DDI" },
  { option: "Hybrid", description: "Combine on-premise and cloud deployments" },
];

export default function DDIPlatform() {
  return (
    <PageLayout
      title="DDI Platform"
      subtitle="Unified DNS, DHCP, and IPAM for the modern enterprise"
      badge="TCPWave DDI"
      breadcrumbs={[{ label: "TCPWave", href: "/tcpwave" }, { label: "DDI Platform" }]}
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
              The Three Pillars of <span className="text-primary">DDI</span>
            </h2>
            <p className="text-slate-400 max-w-2xl mx-auto">
              TCPWave unifies DNS, DHCP, and IPAM into a single, powerful platform
            </p>
          </motion.div>

          <div className="grid md:grid-cols-3 gap-8">
            {ddiPillars.map((pillar, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1 }}
                className="relative bg-slate-950/80 border border-slate-800 rounded-2xl p-8 overflow-hidden group hover:border-slate-700 transition-all"
              >
                <div className={`absolute top-0 left-0 w-full h-1 bg-gradient-to-r ${pillar.color}`} />
                <div className="w-16 h-16 rounded-xl bg-slate-900 border border-slate-700 flex items-center justify-center mb-6">
                  <pillar.icon className="w-8 h-8 text-primary" />
                </div>
                <h3 className="text-2xl font-display font-bold text-white mb-1">{pillar.title}</h3>
                <p className="text-primary font-mono text-sm mb-4">{pillar.subtitle}</p>
                <p className="text-slate-400">{pillar.description}</p>
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
              Enterprise <span className="text-secondary">Architecture</span>
            </h2>
          </motion.div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {architectureFeatures.map((item, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.05 }}
                className="bg-slate-900/50 border border-slate-800 rounded-xl p-6 hover:border-primary/30 transition-all"
              >
                <div className="flex items-center gap-3 mb-3">
                  <CheckCircle className="w-5 h-5 text-primary" />
                  <h4 className="text-lg font-display font-bold text-white">{item.feature}</h4>
                </div>
                <p className="text-slate-400 text-sm">{item.description}</p>
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
              Deployment <span className="text-primary">Options</span>
            </h2>
          </motion.div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {deploymentOptions.map((option, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1 }}
                className="bg-slate-950/80 border border-slate-800 rounded-xl p-6 text-center hover:border-primary/50 transition-all"
              >
                <h4 className="text-lg font-display font-bold text-white mb-2">{option.option}</h4>
                <p className="text-slate-400 text-sm">{option.description}</p>
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
              Ready to Transform Your DDI?
            </h2>
            <p className="text-slate-400 max-w-2xl mx-auto mb-8">
              See how TCPWave's unified DDI platform can simplify your network management and enhance security.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link href="/tcpwave/request-demo">
                <button className="px-6 py-3 bg-primary text-slate-950 font-bold rounded-lg hover:bg-primary/90 transition-colors">
                  Request Demo
                </button>
              </Link>
              <Link href="/tcpwave/free-trial">
                <button className="px-6 py-3 bg-slate-800 text-white font-bold rounded-lg hover:bg-slate-700 transition-colors border border-slate-700">
                  Start Free Trial
                </button>
              </Link>
            </div>
          </motion.div>
        </div>
      </section>
    </PageLayout>
  );
}
