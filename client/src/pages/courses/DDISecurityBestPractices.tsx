import { motion } from "framer-motion";
import { Link } from "wouter";
import PageLayout from "@/components/PageLayout";
import { Shield, Server, Lock, Key, Network, Database, CheckCircle, Clock, Users, Award, AlertTriangle } from "lucide-react";

const courseModules = [
  {
    week: 1,
    title: "DNS Security Fundamentals",
    topics: [
      "GSS-TSIG for Secure DNS Updates",
      "Kerberos Authentication Integration",
      "Zone Transfer Security (TLS Encryption)",
      "Access Control Lists (ACLs)",
    ],
  },
  {
    week: 2,
    title: "Response Policy Zones (RPZ)",
    topics: [
      "RPZ Architecture and Configuration",
      "Threat Intelligence Feed Integration",
      "Real-time Threat Blocking",
      "Policy Customization and Tuning",
    ],
  },
  {
    week: 3,
    title: "DNS Threat Mitigation",
    topics: [
      "AI-Driven Exfiltration Detection",
      "DNS Tunneling Prevention",
      "Atlantis and XGBoost Algorithms",
      "Anomaly Pattern Recognition",
    ],
  },
  {
    week: 4,
    title: "DHCP & IPAM Security",
    topics: [
      "Secure DHCP Communications",
      "Rogue Server Detection",
      "Data Classification and Access Controls",
      "Encryption and SMT Configuration",
    ],
  },
  {
    week: 5,
    title: "ADC Security",
    topics: [
      "Zero Trust Architecture",
      "DDoS Mitigation Strategies",
      "Application Firewalling (WAF)",
      "TLS/SSL Offloading Best Practices",
    ],
  },
  {
    week: 6,
    title: "Enterprise Implementation",
    topics: [
      "Role-Based Access Controls (RBAC)",
      "Audit and Compliance Logging",
      "Disaster Recovery Planning",
      "Security Awareness Integration",
    ],
  },
];

const securityFeatures = [
  { title: "DNSSEC Support", description: "Full DNSSEC implementation with key rotation" },
  { title: "TSIG Authentication", description: "Transaction signatures for secure updates" },
  { title: "TLS Encryption", description: "Encrypted zone transfers and communications" },
  { title: "AI Threat Detection", description: "Machine learning for anomaly detection" },
  { title: "RPZ Integration", description: "Real-time threat policy enforcement" },
  { title: "RBAC Controls", description: "Granular permission management" },
];

const learningOutcomes = [
  "Configure secure DNS environments with GSS-TSIG and DNSSEC",
  "Implement Response Policy Zones for threat blocking",
  "Deploy AI-powered DNS exfiltration and tunneling detection",
  "Secure DHCP and IPAM infrastructure against common attacks",
  "Configure ADC security features including WAF and DDoS protection",
  "Design and implement Zero Trust network architectures",
];

export default function DDISecurityBestPractices() {
  return (
    <PageLayout
      title="DDI Security Best Practices"
      subtitle="Enterprise DNS, DHCP, and IPAM security with TCPWave"
      badge="Security Course"
      breadcrumbs={[
        { label: "Courses", href: "/courses" },
        { label: "DDI Security Best Practices" },
      ]}
    >
      <section className="py-12">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-4 gap-6 mb-12">
            {[
              { label: "Duration", value: "6 Weeks", icon: Clock },
              { label: "Level", value: "Intermediate", icon: Award },
              { label: "Labs", value: "40+ Hours", icon: Server },
              { label: "Price", value: "₹75,000", icon: Shield },
            ].map((item, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1 }}
                className="bg-slate-900/50 border border-slate-800 rounded-xl p-6 text-center"
                data-testid={`stat-${i}`}
              >
                <item.icon className="w-8 h-8 text-cyan-400 mx-auto mb-3" />
                <div className="text-slate-400 text-sm">{item.label}</div>
                <div className="text-xl font-bold text-white">{item.value}</div>
              </motion.div>
            ))}
          </div>

          <div className="grid lg:grid-cols-2 gap-12">
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
            >
              <h2 className="text-3xl font-display font-bold text-white mb-6">
                Course <span className="text-primary">Overview</span>
              </h2>
              <p className="text-slate-400 mb-6">
                This course provides comprehensive training on securing DNS, DHCP, IPAM, and ADC services within the TCPWave ecosystem. Aligned with NIST cybersecurity standards, you'll learn advanced security measures including encryption, certificate management, and secure communication protocols.
              </p>
              <p className="text-slate-400 mb-6">
                Based on TCPWave's enterprise best practices documentation and real-world deployments at Fortune 500 organizations, this course prepares you to defend against modern cyber threats targeting network infrastructure.
              </p>

              <div className="bg-gradient-to-br from-red-500/10 to-orange-500/10 border border-red-500/30 rounded-xl p-6 mb-6">
                <div className="flex items-center gap-3 mb-3">
                  <AlertTriangle className="w-6 h-6 text-red-400" />
                  <h4 className="text-lg font-bold text-white">Why This Matters</h4>
                </div>
                <p className="text-slate-400 text-sm">
                  DNS-based attacks have increased 300% in the past year. Organizations without proper DDI security are vulnerable to exfiltration, tunneling, and DDoS attacks.
                </p>
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
            >
              <h3 className="text-xl font-display font-bold text-white mb-6">Security Features Covered</h3>
              <div className="grid grid-cols-2 gap-4 mb-8">
                {securityFeatures.map((feature, i) => (
                  <div key={i} className="bg-slate-900/50 border border-slate-800 rounded-lg p-4">
                    <div className="text-white font-medium text-sm">{feature.title}</div>
                    <div className="text-slate-500 text-xs mt-1">{feature.description}</div>
                  </div>
                ))}
              </div>

              <h3 className="text-xl font-display font-bold text-white mb-4">Learning Outcomes</h3>
              <ul className="space-y-2">
                {learningOutcomes.slice(0, 4).map((outcome, i) => (
                  <li key={i} className="flex items-start gap-2 text-slate-300 text-sm">
                    <CheckCircle className="w-4 h-4 text-green-400 mt-0.5 flex-shrink-0" />
                    {outcome}
                  </li>
                ))}
              </ul>
            </motion.div>
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
              Weekly <span className="text-secondary">Curriculum</span>
            </h2>
          </motion.div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {courseModules.map((module, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1 }}
                className="bg-slate-950/80 border border-slate-800 rounded-xl p-6"
              >
                <div className="flex items-center justify-between mb-4">
                  <span className="px-3 py-1 bg-cyan-500/20 text-cyan-400 text-xs font-bold rounded-full">
                    Week {module.week}
                  </span>
                </div>
                <h3 className="text-lg font-display font-bold text-white mb-4">{module.title}</h3>
                <ul className="space-y-2">
                  {module.topics.map((topic, j) => (
                    <li key={j} className="text-slate-400 text-sm flex items-start gap-2">
                      <Lock className="w-3 h-3 text-cyan-400 mt-1.5 flex-shrink-0" />
                      {topic}
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
            className="bg-gradient-to-r from-cyan-500/20 to-blue-500/20 border border-cyan-500/30 rounded-2xl p-12 text-center"
          >
            <Shield className="w-16 h-16 text-cyan-400 mx-auto mb-6" />
            <h2 className="text-3xl md:text-4xl font-display font-bold text-white mb-4">
              Secure Your Network Infrastructure
            </h2>
            <p className="text-slate-300 max-w-2xl mx-auto mb-8">
              Join security professionals from leading enterprises who have mastered DDI security with TCPWave.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link href="/admissions/apply">
                <button 
                  className="px-8 py-4 bg-primary text-slate-950 font-bold rounded-lg hover:bg-primary/90 transition-colors"
                  data-testid="button-enroll"
                >
                  Enroll Now - ₹75,000
                </button>
              </Link>
              <Link href="/tcpwave/request-demo">
                <button className="px-8 py-4 bg-slate-800 text-white font-bold rounded-lg hover:bg-slate-700 transition-colors border border-slate-700">
                  See TCPWave Demo
                </button>
              </Link>
            </div>
          </motion.div>
        </div>
      </section>
    </PageLayout>
  );
}
