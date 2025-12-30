import { motion } from "framer-motion";
import { Link } from "wouter";
import PageLayout from "@/components/PageLayout";
import { Award, Network, Shield, Settings, Server, Zap, CheckCircle, Clock, Users, ArrowRight, Database, Globe, Building2, Cpu } from "lucide-react";

const courseModules = [
  {
    week: 1,
    title: "Enterprise Architecture Principles",
    topics: [
      "DDI Architecture Design Patterns",
      "Scalability and Performance Planning",
      "High Availability Design",
      "Disaster Recovery Strategies",
      "Capacity Planning Methodologies",
    ],
  },
  {
    week: 2,
    title: "Multi-Site DDI Design",
    topics: [
      "Global DDI Topology Design",
      "Primary/Secondary/Stealth DNS Patterns",
      "Geographic Load Balancing (GSLB)",
      "Cross-Site DHCP Failover",
      "WAN Optimization for DDI",
    ],
  },
  {
    week: 3,
    title: "Security Architecture",
    topics: [
      "Zero Trust DDI Architecture",
      "DNSSEC Signing Infrastructure",
      "DNS Firewall and RPZ Design",
      "Threat Intelligence Integration",
      "Compliance Frameworks (SOC2, ISO27001)",
    ],
  },
  {
    week: 4,
    title: "Cloud-Native DDI",
    topics: [
      "Kubernetes DNS (CoreDNS, External-DNS)",
      "Service Mesh Integration",
      "Multi-Cloud DDI Governance",
      "Serverless and Container IPAM",
      "Cloud Migration Strategies",
    ],
  },
  {
    week: 5,
    title: "Advanced Automation",
    topics: [
      "Event-Driven Architecture",
      "GitOps for DDI",
      "Machine Learning for DNS Analytics",
      "Self-Healing Infrastructure",
      "Chaos Engineering for DDI",
    ],
  },
  {
    week: 6,
    title: "Performance Engineering",
    topics: [
      "DNS Query Optimization",
      "Caching Strategy Design",
      "Load Testing and Benchmarking",
      "Anycast DNS Architecture",
      "Edge DNS Deployment",
    ],
  },
  {
    week: 7,
    title: "Integration Architecture",
    topics: [
      "Enterprise Service Bus Integration",
      "CMDB and Asset Management",
      "Security Orchestration (SOAR)",
      "Network Automation Platforms",
      "Observability Stack Integration",
    ],
  },
  {
    week: 8,
    title: "Capstone & Certification",
    topics: [
      "Architecture Design Project",
      "Peer Review and Presentation",
      "Best Practices Documentation",
      "Exam Preparation",
      "Certification Exam",
    ],
  },
];

const certificationBenefits = [
  "Official TCPWave Certified Architect credential",
  "Top-tier recognition in TCPWave ecosystem",
  "Exclusive architect-only community access",
  "Early access to new features and betas",
  "Speaking opportunities at TCPWave events",
  "Priority consideration for consulting engagements",
];

const examDetails = [
  { label: "Format", value: "Design Scenario + Lab + Oral" },
  { label: "Duration", value: "5 Hours" },
  { label: "Passing Score", value: "75%" },
  { label: "Validity", value: "3 Years" },
];

export default function TCPWaveArchitect() {
  return (
    <PageLayout
      title="TCPWave Certified Architect"
      subtitle="Elite certification for DDI architecture and enterprise design"
      badge="Expert Certification"
      breadcrumbs={[
        { label: "Courses", href: "/courses" },
        { label: "TCPWave Architect" },
      ]}
    >
      <section className="py-12">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-4 gap-6 mb-12">
            {[
              { label: "Duration", value: "8 Weeks", icon: Clock },
              { label: "Level", value: "Expert", icon: Award },
              { label: "Format", value: "Intensive + Project", icon: Users },
              { label: "Price", value: "₹1,25,000", icon: Zap },
            ].map((item, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1 }}
                className="bg-slate-900/50 border border-slate-800 rounded-xl p-6 text-center"
                data-testid={`course-stat-${i}`}
              >
                <item.icon className="w-8 h-8 text-red-400 mx-auto mb-3" />
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
              <div className="flex items-center gap-4 mb-6">
                <div className="w-16 h-16 bg-gradient-to-br from-red-500 to-orange-400 rounded-xl flex items-center justify-center">
                  <Building2 className="w-8 h-8 text-white" />
                </div>
                <div>
                  <h2 className="text-2xl font-display font-bold text-white">Expert Certification</h2>
                  <p className="text-red-400">TCPWave Certified Architect (TCPA)</p>
                </div>
              </div>
              
              <p className="text-slate-400 mb-6">
                The TCPWave Certified Architect (TCPA) is the highest certification in the TCPWave 
                ecosystem. It validates your ability to design and architect enterprise-grade DDI 
                solutions for complex, multi-site, and multi-cloud environments.
              </p>
              <p className="text-slate-400 mb-6">
                This certification is designed for senior engineers, architects, and technical 
                leaders responsible for DDI strategy and infrastructure decisions at Fortune 500 
                companies, government agencies, and critical infrastructure operators.
              </p>

              <div className="bg-gradient-to-br from-red-500/10 to-orange-500/10 border border-red-500/30 rounded-xl p-6 mb-6">
                <h4 className="text-lg font-bold text-white mb-4">Exam Details</h4>
                <div className="grid grid-cols-2 gap-4">
                  {examDetails.map((detail, i) => (
                    <div key={i}>
                      <div className="text-slate-400 text-sm">{detail.label}</div>
                      <div className="text-white font-bold">{detail.value}</div>
                    </div>
                  ))}
                </div>
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
            >
              <h3 className="text-xl font-display font-bold text-white mb-6">Certification Benefits</h3>
              <ul className="space-y-3 mb-8">
                {certificationBenefits.map((benefit, i) => (
                  <li key={i} className="flex items-start gap-3 text-slate-300">
                    <CheckCircle className="w-5 h-5 text-red-400 mt-0.5 flex-shrink-0" />
                    {benefit}
                  </li>
                ))}
              </ul>

              <div className="bg-gradient-to-br from-primary/10 to-blue-500/10 border border-primary/30 rounded-xl p-6">
                <h4 className="text-lg font-bold text-white mb-3">Prerequisites</h4>
                <ul className="text-slate-400 text-sm space-y-2">
                  <li>• TCPWave Certified Administrator (TCA)</li>
                  <li>• 3+ years of DDI/network engineering experience</li>
                  <li>• Experience with enterprise architecture</li>
                  <li>• Cloud platform experience (AWS, Azure, or GCP)</li>
                </ul>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      <section className="py-16 bg-slate-900/50">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-12"
          >
            <h2 className="text-3xl font-display font-bold text-white mb-4">
              Training <span className="text-red-400">Curriculum</span>
            </h2>
            <p className="text-slate-400 max-w-2xl mx-auto">
              8 weeks of intensive architecture training with real-world design projects
            </p>
          </motion.div>

          <div className="grid md:grid-cols-2 gap-6">
            {courseModules.map((module, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.05 }}
                className="bg-slate-950/80 border border-slate-800 rounded-xl p-6 hover:border-red-500/50 transition-all"
              >
                <div className="flex items-center gap-4 mb-4">
                  <div className="w-12 h-12 bg-gradient-to-br from-red-500 to-orange-400 rounded-lg flex items-center justify-center text-white font-bold">
                    W{module.week}
                  </div>
                  <h3 className="text-lg font-display font-bold text-white">{module.title}</h3>
                </div>
                <ul className="space-y-2">
                  {module.topics.map((topic, j) => (
                    <li key={j} className="flex items-start gap-2 text-slate-400 text-sm">
                      <Building2 className="w-4 h-4 text-red-400 mt-0.5 flex-shrink-0" />
                      {topic}
                    </li>
                  ))}
                </ul>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="bg-gradient-to-r from-red-500/20 to-orange-500/20 border border-red-500/30 rounded-2xl p-8 md:p-12 text-center">
            <div className="flex justify-center mb-6">
              <div className="w-20 h-20 bg-gradient-to-br from-red-500 to-orange-400 rounded-xl flex items-center justify-center">
                <Building2 className="w-10 h-10 text-white" />
              </div>
            </div>
            <h2 className="text-3xl font-display font-bold text-white mb-4">
              Become a TCPWave Architect
            </h2>
            <p className="text-slate-300 max-w-2xl mx-auto mb-8">
              Join the elite group of certified architects designing DDI infrastructure for Fortune 500 companies worldwide.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link href="/admissions">
                <button className="px-8 py-4 bg-red-500 text-white font-bold rounded-lg hover:bg-red-400 transition-all flex items-center gap-2 justify-center">
                  Enroll Now <ArrowRight className="w-5 h-5" />
                </button>
              </Link>
              <Link href="/courses/tcpwave-admin">
                <button className="px-8 py-4 border border-slate-600 text-white font-bold rounded-lg hover:border-red-500/50 transition-all">
                  Start with Administrator
                </button>
              </Link>
            </div>
          </div>
        </div>
      </section>
    </PageLayout>
  );
}
