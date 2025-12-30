import { motion } from "framer-motion";
import { Link } from "wouter";
import PageLayout from "@/components/PageLayout";
import { Database, Network, Shield, Settings, Server, Zap, CheckCircle, Clock, Users, Award, ArrowRight, Globe, Layers } from "lucide-react";

const courseModules = [
  {
    week: 1,
    title: "IPAM Fundamentals",
    topics: [
      "IP Address Management Concepts and Challenges",
      "IPv4 Exhaustion and IPv6 Adoption",
      "Subnetting and CIDR Notation Mastery",
      "Address Space Planning Principles",
      "IPAM vs Spreadsheet-Based Management",
    ],
  },
  {
    week: 2,
    title: "Address Space Design",
    topics: [
      "Hierarchical IP Address Planning",
      "Subnet Allocation Strategies",
      "Private vs Public Address Management",
      "Reserved Ranges and Special Purpose",
      "Multi-Site Address Plan Coordination",
    ],
  },
  {
    week: 3,
    title: "TCPWave IPAM Platform",
    topics: [
      "TCPWave Architecture and Components",
      "Network Container Hierarchy",
      "Block, Subnet, and Range Management",
      "IP Address Lifecycle States",
      "Discovery and Reconciliation",
    ],
  },
  {
    week: 4,
    title: "IPv6 Address Management",
    topics: [
      "IPv6 Addressing Architecture (/64, /48, /32)",
      "Global Unicast, Link-Local, and ULA",
      "EUI-64 and Privacy Extensions",
      "DHCPv6 Prefix Delegation",
      "IPv6 Transition Mechanisms (Dual-Stack, NAT64)",
    ],
  },
  {
    week: 5,
    title: "IPAM Integration",
    topics: [
      "DNS and DHCP Synchronization",
      "CMDB and Asset Management Integration",
      "Cloud Platform Integration (AWS, Azure, GCP)",
      "Network Device Discovery (SNMP, API)",
      "VMware and Container Network Integration",
    ],
  },
  {
    week: 6,
    title: "Automation & APIs",
    topics: [
      "TCPWave REST API Architecture",
      "Bulk Operations and CSV Import/Export",
      "Ansible and Terraform Integration",
      "Custom Scripting for IPAM Tasks",
      "Webhook-Based Event Handling",
    ],
  },
  {
    week: 7,
    title: "Governance & Compliance",
    topics: [
      "Role-Based Access Control (RBAC)",
      "Approval Workflows for IP Requests",
      "Audit Logging and Change Tracking",
      "Compliance Reporting (SOX, PCI-DSS)",
      "IP Address Reclamation Policies",
    ],
  },
  {
    week: 8,
    title: "Capstone: Enterprise IPAM Deployment",
    topics: [
      "Multi-Cloud IPAM Architecture",
      "IP Address Governance Framework",
      "Migration from Legacy Systems",
      "Capacity Planning and Forecasting",
      "Final Project Presentation",
    ],
  },
];

const courseStats = [
  { value: "500M+", label: "IP Addresses Managed" },
  { value: "1100+", label: "Organizations Worldwide" },
  { value: "IPv4/IPv6", label: "Full Dual-Stack Support" },
  { value: "100%", label: "API Coverage" },
];

const learningOutcomes = [
  "Design and implement enterprise IP address management strategies",
  "Plan and allocate IPv4 and IPv6 address space efficiently",
  "Deploy and configure TCPWave IPAM for centralized management",
  "Integrate IPAM with DNS, DHCP, and cloud platforms",
  "Automate IP management with REST APIs and IaC tools",
  "Implement governance, compliance, and audit controls",
  "Migrate from spreadsheets to enterprise IPAM solutions",
];

const prerequisites = [
  "Strong understanding of IPv4 subnetting",
  "Basic IPv6 addressing knowledge",
  "Familiarity with enterprise network architecture",
];

export default function IPAMEnterprise() {
  return (
    <PageLayout
      title="IPAM Enterprise Solutions"
      subtitle="Master IP Address Management for multi-cloud enterprise environments"
      badge="Intermediate Course"
      breadcrumbs={[
        { label: "Courses", href: "/courses" },
        { label: "IPAM Enterprise" },
      ]}
    >
      <section className="py-12">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-4 gap-6 mb-12">
            {[
              { label: "Duration", value: "8 Weeks", icon: Clock },
              { label: "Level", value: "Intermediate", icon: Award },
              { label: "Format", value: "Live + Labs", icon: Users },
              { label: "Price", value: "₹65,000", icon: Zap },
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
                <item.icon className="w-8 h-8 text-purple-400 mx-auto mb-3" />
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
                Course <span className="text-purple-400">Overview</span>
              </h2>
              <p className="text-slate-400 mb-6">
                IP Address Management (IPAM) is the discipline of planning, tracking, and managing 
                the IP address space in a network. With cloud adoption, IPv6 migration, and 
                increasing network complexity, enterprise IPAM has become critical for operational 
                efficiency and security.
              </p>
              <p className="text-slate-400 mb-6">
                This course teaches you to design and deploy enterprise IPAM using TCPWave's 
                platform, which manages over 500 million IP addresses across 1100+ organizations. 
                You'll learn address planning, automation, integration, and governance best practices.
              </p>

              <div className="grid grid-cols-2 gap-4 mb-8">
                {courseStats.map((stat, i) => (
                  <div key={i} className="bg-gradient-to-br from-purple-500/10 to-pink-500/10 border border-purple-500/30 rounded-lg p-4 text-center">
                    <div className="text-2xl font-bold text-white">{stat.value}</div>
                    <div className="text-slate-400 text-sm">{stat.label}</div>
                  </div>
                ))}
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
            >
              <h3 className="text-xl font-display font-bold text-white mb-6">Learning Outcomes</h3>
              <ul className="space-y-3 mb-8">
                {learningOutcomes.map((outcome, i) => (
                  <li key={i} className="flex items-start gap-3 text-slate-300">
                    <CheckCircle className="w-5 h-5 text-purple-400 mt-0.5 flex-shrink-0" />
                    {outcome}
                  </li>
                ))}
              </ul>

              <div className="bg-gradient-to-br from-purple-500/10 to-pink-500/10 border border-purple-500/30 rounded-xl p-6">
                <h4 className="text-lg font-bold text-white mb-3">Prerequisites</h4>
                <ul className="text-slate-400 text-sm space-y-2">
                  {prerequisites.map((req, i) => (
                    <li key={i}>• {req}</li>
                  ))}
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
              Course <span className="text-secondary">Curriculum</span>
            </h2>
            <p className="text-slate-400 max-w-2xl mx-auto">
              8 weeks covering address planning, TCPWave platform, integration, and governance
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
                className="bg-slate-950/80 border border-slate-800 rounded-xl p-6 hover:border-purple-500/50 transition-all"
              >
                <div className="flex items-center gap-4 mb-4">
                  <div className="w-12 h-12 bg-gradient-to-br from-purple-500 to-pink-500 rounded-lg flex items-center justify-center text-white font-bold">
                    W{module.week}
                  </div>
                  <h3 className="text-lg font-display font-bold text-white">{module.title}</h3>
                </div>
                <ul className="space-y-2">
                  {module.topics.map((topic, j) => (
                    <li key={j} className="flex items-start gap-2 text-slate-400 text-sm">
                      <Database className="w-4 h-4 text-purple-400 mt-0.5 flex-shrink-0" />
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
          <div className="bg-gradient-to-r from-purple-500/20 to-pink-500/20 border border-purple-500/30 rounded-2xl p-8 md:p-12 text-center">
            <h2 className="text-3xl font-display font-bold text-white mb-4">
              Take Control of Your IP Address Space
            </h2>
            <p className="text-slate-300 max-w-2xl mx-auto mb-8">
              Learn enterprise IPAM from practitioners managing 500M+ IP addresses worldwide.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link href="/admissions">
                <button className="px-8 py-4 bg-purple-500 text-white font-bold rounded-lg hover:bg-purple-400 transition-all flex items-center gap-2 justify-center">
                  Enroll Now <ArrowRight className="w-5 h-5" />
                </button>
              </Link>
              <Link href="/courses">
                <button className="px-8 py-4 border border-slate-600 text-white font-bold rounded-lg hover:border-purple-500/50 transition-all">
                  View All Courses
                </button>
              </Link>
            </div>
          </div>
        </div>
      </section>
    </PageLayout>
  );
}
