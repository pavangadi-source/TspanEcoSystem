import { motion } from "framer-motion";
import { Link } from "wouter";
import PageLayout from "@/components/PageLayout";
import { Server, Network, Shield, Settings, Database, Zap, CheckCircle, Clock, Users, Award, ArrowRight, Cpu } from "lucide-react";

const courseModules = [
  {
    week: 1,
    title: "DHCP Protocol Fundamentals",
    topics: [
      "DHCP Architecture and DORA Process",
      "Lease Lifecycle Management",
      "DHCP Message Types and Options",
      "Broadcast vs Unicast Communication",
      "BOOTP Compatibility and Evolution",
    ],
  },
  {
    week: 2,
    title: "IPv4 DHCP Configuration",
    topics: [
      "Scope and Pool Configuration",
      "Reservations and Static Mappings",
      "DHCP Options (Router, DNS, NTP, TFTP)",
      "Lease Duration Optimization",
      "Conflict Detection Mechanisms",
    ],
  },
  {
    week: 3,
    title: "DHCPv6 and Dual-Stack Networks",
    topics: [
      "Stateful vs Stateless DHCPv6 (SLAAC)",
      "DHCPv6 Prefix Delegation (PD)",
      "DUID and IAID Concepts",
      "Router Advertisement Integration",
      "Dual-Stack Deployment Strategies",
    ],
  },
  {
    week: 4,
    title: "DHCP Relay and Multi-VLAN",
    topics: [
      "DHCP Relay Agent (Option 82)",
      "GIADDR and Relay Chain",
      "Multi-VLAN DHCP Architecture",
      "Agent Information Option (Circuit ID, Remote ID)",
      "VRF-Aware DHCP Configuration",
    ],
  },
  {
    week: 5,
    title: "High Availability & Failover",
    topics: [
      "DHCP Failover Protocol (RFC 3074)",
      "Primary-Secondary Configuration",
      "Load Balancing vs Hot Standby",
      "State Synchronization",
      "Split-Scope vs Failover Trade-offs",
    ],
  },
  {
    week: 6,
    title: "DHCP Security",
    topics: [
      "Rogue DHCP Server Detection",
      "DHCP Snooping and Dynamic ARP Inspection",
      "IP Source Guard Configuration",
      "802.1X Integration for Device Authentication",
      "MAC Address Filtering and Blocking",
    ],
  },
  {
    week: 7,
    title: "TCPWave DHCP Management",
    topics: [
      "TCPWave IPAM DHCP Console",
      "Template-Based Scope Deployment",
      "Real-Time Lease Monitoring",
      "Utilization Alerts and Thresholds",
      "Integration with DNS (DDNS)",
    ],
  },
  {
    week: 8,
    title: "Capstone: Enterprise DHCP Deployment",
    topics: [
      "Multi-Site DHCP Architecture Design",
      "Cloud and On-Premises Hybrid Design",
      "Automation with REST APIs",
      "Troubleshooting and Diagnostics",
      "Final Project Presentation",
    ],
  },
];

const courseStats = [
  { value: "50M+", label: "IP Leases Managed by TCPWave" },
  { value: "<10ms", label: "Lease Assignment Time" },
  { value: "100%", label: "IPv4/IPv6 Coverage" },
  { value: "24/7", label: "Monitoring & Alerts" },
];

const learningOutcomes = [
  "Design and deploy enterprise DHCP infrastructure for IPv4 and IPv6",
  "Configure DHCP relay agents for multi-VLAN environments",
  "Implement DHCP failover for high availability",
  "Secure DHCP with snooping, DAI, and IP Source Guard",
  "Integrate DHCP with TCPWave IPAM for centralized management",
  "Configure Dynamic DNS updates (DDNS)",
  "Troubleshoot DHCP issues using packet analysis",
];

const prerequisites = [
  "Basic networking knowledge (subnetting, VLANs)",
  "Understanding of IPv4 and IPv6 addressing",
  "Familiarity with network switches and routers",
];

export default function DHCPManagement() {
  return (
    <PageLayout
      title="DHCP Architecture & Enterprise Management"
      subtitle="Master dynamic IP address management at scale with TCPWave"
      badge="Foundation Course"
      breadcrumbs={[
        { label: "Courses", href: "/courses" },
        { label: "DHCP Management" },
      ]}
    >
      <section className="py-12">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-4 gap-6 mb-12">
            {[
              { label: "Duration", value: "8 Weeks", icon: Clock },
              { label: "Level", value: "Beginner", icon: Award },
              { label: "Format", value: "Live + Labs", icon: Users },
              { label: "Price", value: "₹50,000", icon: Zap },
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
                <item.icon className="w-8 h-8 text-green-400 mx-auto mb-3" />
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
                Course <span className="text-green-400">Overview</span>
              </h2>
              <p className="text-slate-400 mb-6">
                DHCP (Dynamic Host Configuration Protocol) is essential for automating IP address management 
                in modern networks. This course covers everything from basic DORA process to enterprise-grade 
                failover configurations using TCPWave's centralized management platform.
              </p>
              <p className="text-slate-400 mb-6">
                You'll learn to design and deploy DHCP for organizations managing millions of devices, 
                implement security controls to prevent rogue servers, and integrate with DNS for 
                seamless name resolution.
              </p>

              <div className="grid grid-cols-2 gap-4 mb-8">
                {courseStats.map((stat, i) => (
                  <div key={i} className="bg-gradient-to-br from-green-500/10 to-emerald-500/10 border border-green-500/30 rounded-lg p-4 text-center">
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
                    <CheckCircle className="w-5 h-5 text-green-400 mt-0.5 flex-shrink-0" />
                    {outcome}
                  </li>
                ))}
              </ul>

              <div className="bg-gradient-to-br from-green-500/10 to-emerald-500/10 border border-green-500/30 rounded-xl p-6">
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
              8 weeks of intensive training covering IPv4, IPv6, security, and enterprise management
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
                className="bg-slate-950/80 border border-slate-800 rounded-xl p-6 hover:border-green-500/50 transition-all"
              >
                <div className="flex items-center gap-4 mb-4">
                  <div className="w-12 h-12 bg-gradient-to-br from-green-500 to-emerald-500 rounded-lg flex items-center justify-center text-white font-bold">
                    W{module.week}
                  </div>
                  <h3 className="text-lg font-display font-bold text-white">{module.title}</h3>
                </div>
                <ul className="space-y-2">
                  {module.topics.map((topic, j) => (
                    <li key={j} className="flex items-start gap-2 text-slate-400 text-sm">
                      <Server className="w-4 h-4 text-green-400 mt-0.5 flex-shrink-0" />
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
          <div className="bg-gradient-to-r from-green-500/20 to-emerald-500/20 border border-green-500/30 rounded-2xl p-8 md:p-12 text-center">
            <h2 className="text-3xl font-display font-bold text-white mb-4">
              Automate IP Management at Scale
            </h2>
            <p className="text-slate-300 max-w-2xl mx-auto mb-8">
              Join the next cohort and learn to manage millions of IP addresses with 
              enterprise-grade DHCP infrastructure.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link href="/admissions">
                <button className="px-8 py-4 bg-green-500 text-slate-950 font-bold rounded-lg hover:bg-green-400 transition-all flex items-center gap-2 justify-center">
                  Enroll Now <ArrowRight className="w-5 h-5" />
                </button>
              </Link>
              <Link href="/courses">
                <button className="px-8 py-4 border border-slate-600 text-white font-bold rounded-lg hover:border-green-500/50 transition-all">
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
