import { motion } from "framer-motion";
import { Link } from "wouter";
import PageLayout from "@/components/PageLayout";
import { Server, Settings, Shield, Globe, CheckCircle, Clock, Users, Award, ArrowRight, Zap, Database, Network, Monitor, Key, HardDrive, Cloud, Layers, Play, Wrench } from "lucide-react";

const courseModules = [
  {
    week: 1,
    title: "Introduction to DDI & TCPWave",
    topics: [
      "What is DDI (DNS, DHCP, IPAM)?",
      "TCPWave Platform Overview",
      "Architecture: Appliances, Controllers, Agents",
      "Deployment Models: On-Prem, Cloud, Hybrid",
      "Licensing Model & Support Options",
      "TCPWave Product Family Tour",
    ],
  },
  {
    week: 2,
    title: "Installation & First Login",
    topics: [
      "Hardware Requirements (TW240-TW760 Appliances)",
      "Virtual Machine Deployment (VMware, Hyper-V)",
      "Cloud Deployment (AWS, Azure, GCP)",
      "First Login: https://<IP>:7443/tims",
      "License Activation & Validation",
      "Initial Password Change & Security Setup",
    ],
  },
  {
    week: 3,
    title: "Dashboard & Navigation",
    topics: [
      "Dashboard Widgets & Counters",
      "DNS, DHCP, IPAM Status Panels",
      "Alert Management Interface",
      "Grid Controls & Search Features",
      "Light/Dark Mode & UI Preferences",
      "Custom Dashboard Configuration",
    ],
  },
  {
    week: 4,
    title: "IPAM Appliance Configuration",
    topics: [
      "Appliance Types & Banner Colors",
      "Login Banners (IPAM & SSH)",
      "NTP Configuration for Time Sync",
      "DNS Resolver Settings",
      "SNMP Setup (v2/v3)",
      "SysLog Forwarding Configuration",
    ],
  },
  {
    week: 5,
    title: "Network Interface Setup",
    topics: [
      "Managing Network Interfaces",
      "Virtual Interface Configuration",
      "IP Routing & Routing Tables",
      "Duplex Settings Optimization",
      "Policy-Based Routing",
      "Troubleshooting Network Connectivity",
    ],
  },
  {
    week: 6,
    title: "DNS Appliance Setup",
    topics: [
      "Adding TCPWave DNS Appliances",
      "Microsoft DNS Integration (Agentless)",
      "DNS Views for Different Communities",
      "Authoritative vs Recursive DNS",
      "Forward & Reverse Zones",
      "DNS Templates & Policies",
    ],
  },
  {
    week: 7,
    title: "DHCP Appliance Setup",
    topics: [
      "IPv4 DHCP Appliance Configuration",
      "IPv6 DHCP Appliance Setup",
      "Microsoft DHCP Integration (SOAP/LDAP)",
      "Scope Configuration & Pools",
      "DHCP Options & Reservations",
      "Failover & Load Balancing",
    ],
  },
  {
    week: 8,
    title: "IP Address Management",
    topics: [
      "Network Hierarchy Design",
      "Subnet Creation & Management",
      "IP Address Allocation Methods",
      "Address Discovery & Scanning",
      "Conflict Detection & Resolution",
      "Utilization Reports & Alerts",
    ],
  },
  {
    week: 9,
    title: "Security & Access Control",
    topics: [
      "Role-Based Access Control (RBAC)",
      "User & Group Management",
      "SSL Certificate Management",
      "LDAP & TACACS+ Authentication",
      "AAA Configuration",
      "Audit Logging & Compliance",
    ],
  },
  {
    week: 10,
    title: "High Availability & DR",
    topics: [
      "Localhost vs DR vs HA Modes",
      "Master-Slave IPAM Configuration",
      "HA Cluster Setup",
      "License Pooling & Portability",
      "Failover Testing & Validation",
      "Backup & Restore Procedures",
    ],
  },
  {
    week: 11,
    title: "Service Operations & Maintenance",
    topics: [
      "Start/Stop/Restart Services",
      "Index Rebuilding Operations",
      "Firmware Update Procedures",
      "Patch Management",
      "Performance Monitoring",
      "Capacity Planning",
    ],
  },
  {
    week: 12,
    title: "Hands-On Lab: Complete Deployment",
    topics: [
      "Lab Environment Setup",
      "Full IPAM Installation",
      "DNS & DHCP Configuration",
      "Network Discovery Execution",
      "User Access Setup",
      "Operational Validation Checklist",
    ],
  },
];

const deploymentOptions = [
  { name: "Physical Appliances", desc: "TW240, TW440, TW740, TW750, TW760", icon: HardDrive },
  { name: "Virtual Machines", desc: "VMware, Hyper-V, KVM", icon: Server },
  { name: "Cloud Platforms", desc: "AWS, Azure, Google Cloud", icon: Cloud },
  { name: "Hybrid Deployment", desc: "Mix of on-prem and cloud", icon: Layers },
];

const coreFeatures = [
  { name: "DNS Management", desc: "Authoritative & recursive DNS with views" },
  { name: "DHCP Services", desc: "IPv4/IPv6 with failover support" },
  { name: "IP Address Management", desc: "Subnet planning & utilization tracking" },
  { name: "Microsoft Integration", desc: "Agentless DNS/DHCP management" },
  { name: "Security", desc: "RBAC, SSL, LDAP, TACACS+" },
  { name: "High Availability", desc: "DR and HA cluster configurations" },
];

const learningOutcomes = [
  "Understand DDI architecture and TCPWave platform components",
  "Install TCPWave on physical, virtual, or cloud environments",
  "Configure initial settings and activate licenses",
  "Navigate the dashboard and understand status indicators",
  "Set up IPAM appliance with NTP, SNMP, and SysLog",
  "Configure DNS appliances including Microsoft integration",
  "Set up DHCP services for IPv4 and IPv6 networks",
  "Manage IP address space with discovery and allocation",
  "Implement security controls and access management",
  "Configure high availability and disaster recovery",
  "Perform routine maintenance and service operations",
];

const prerequisites = [
  "Basic understanding of IP networking (TCP/IP, subnetting)",
  "Familiarity with DNS and DHCP concepts",
  "Linux command line basics (helpful but not required)",
  "Access to lab environment or TCPWave trial",
];

const quickStartSteps = [
  { step: 1, title: "Access Web UI", desc: "https://<IP>:7443/tims" },
  { step: 2, title: "Upload License", desc: "Activate your license key" },
  { step: 3, title: "Configure NTP", desc: "Set time synchronization" },
  { step: 4, title: "Add DNS Appliance", desc: "Configure DNS services" },
  { step: 5, title: "Add DHCP Appliance", desc: "Configure DHCP services" },
  { step: 6, title: "Create Networks", desc: "Define IP address space" },
];

export default function TCPWaveEssentials() {
  return (
    <PageLayout
      title="TCPWave Essentials"
      subtitle="Installation, configuration, and getting started with TCPWave DDI"
      badge="Foundation Course"
      breadcrumbs={[
        { label: "Courses", href: "/courses" },
        { label: "TCPWave Essentials" },
      ]}
    >
      <section className="py-12">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-4 gap-6 mb-12">
            {[
              { label: "Duration", value: "12 Weeks", icon: Clock },
              { label: "Level", value: "Beginner", icon: Award },
              { label: "Format", value: "Live + Hands-On Labs", icon: Users },
              { label: "Price", value: "₹45,000", icon: Zap },
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
                Course <span className="text-cyan-400">Overview</span>
              </h2>
              <p className="text-slate-400 mb-6">
                This foundational course provides a complete introduction to <strong className="text-white">TCPWave DDI</strong> - 
                the industry's leading DNS, DHCP, and IP Address Management platform. Whether you're a network 
                administrator, IT professional, or systems engineer, this course will take you from zero to 
                operational with TCPWave.
              </p>
              <p className="text-slate-400 mb-6">
                You'll learn how to install TCPWave on various platforms (physical appliances, VMs, or cloud), 
                configure all essential services, set up DNS and DHCP, manage IP address space, implement 
                security controls, and establish high availability.
              </p>
              <p className="text-slate-400 mb-6">
                The course culminates in a hands-on lab where you'll complete a full deployment from scratch, 
                giving you the confidence to manage TCPWave in production environments.
              </p>

              <div className="bg-gradient-to-br from-cyan-500/10 to-blue-500/10 border border-cyan-500/30 rounded-xl p-6">
                <h4 className="text-lg font-bold text-white mb-4 flex items-center gap-2">
                  <Play className="w-5 h-5 text-cyan-400" />
                  Quick Start Steps
                </h4>
                <div className="grid grid-cols-2 gap-3">
                  {quickStartSteps.map((item) => (
                    <div key={item.step} className="flex items-start gap-3">
                      <div className="w-6 h-6 bg-cyan-500 rounded-full flex items-center justify-center text-white text-xs font-bold flex-shrink-0">
                        {item.step}
                      </div>
                      <div>
                        <div className="text-white text-sm font-medium">{item.title}</div>
                        <div className="text-slate-500 text-xs">{item.desc}</div>
                      </div>
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
              <h3 className="text-xl font-display font-bold text-white mb-6">Learning Outcomes</h3>
              <ul className="space-y-3 mb-8">
                {learningOutcomes.map((outcome, i) => (
                  <li key={i} className="flex items-start gap-3 text-slate-300 text-sm">
                    <CheckCircle className="w-4 h-4 text-cyan-400 mt-0.5 flex-shrink-0" />
                    {outcome}
                  </li>
                ))}
              </ul>

              <div className="bg-gradient-to-br from-cyan-500/10 to-blue-500/10 border border-cyan-500/30 rounded-xl p-6">
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

      <section className="py-16 bg-gradient-to-br from-slate-900 to-slate-950">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-12"
          >
            <h2 className="text-3xl font-display font-bold text-white mb-4">
              Deployment <span className="text-cyan-400">Options</span>
            </h2>
            <p className="text-slate-400 max-w-2xl mx-auto">
              Learn to deploy TCPWave across multiple platforms
            </p>
          </motion.div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 mb-12">
            {deploymentOptions.map((option, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1 }}
                className="bg-slate-900/80 border border-slate-800 rounded-xl p-6 text-center hover:border-cyan-500/50 transition-all"
              >
                <option.icon className="w-10 h-10 text-cyan-400 mx-auto mb-3" />
                <div className="text-white font-bold mb-1">{option.name}</div>
                <div className="text-slate-500 text-sm">{option.desc}</div>
              </motion.div>
            ))}
          </div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="bg-slate-900/50 border border-slate-700 rounded-2xl p-8"
          >
            <h3 className="text-xl font-bold text-white mb-6 text-center">Core DDI Features</h3>
            <div className="grid md:grid-cols-3 gap-6">
              {coreFeatures.map((feature, i) => (
                <div key={i} className="flex items-start gap-3">
                  <CheckCircle className="w-5 h-5 text-cyan-400 mt-0.5 flex-shrink-0" />
                  <div>
                    <div className="text-white font-medium">{feature.name}</div>
                    <div className="text-slate-500 text-sm">{feature.desc}</div>
                  </div>
                </div>
              ))}
            </div>
          </motion.div>
        </div>
      </section>

      <section className="py-16">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-12"
          >
            <h2 className="text-3xl font-display font-bold text-white mb-4">
              Installation <span className="text-primary">Walkthrough</span>
            </h2>
            <p className="text-slate-400 max-w-2xl mx-auto">
              Step-by-step guidance for your first TCPWave deployment
            </p>
          </motion.div>

          <div className="grid md:grid-cols-2 gap-8">
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="bg-slate-900/50 border border-cyan-500/30 rounded-2xl p-8"
            >
              <div className="flex items-center gap-4 mb-6">
                <div className="w-12 h-12 bg-gradient-to-br from-cyan-500 to-blue-500 rounded-xl flex items-center justify-center">
                  <Settings className="w-6 h-6 text-white" />
                </div>
                <div>
                  <h3 className="text-xl font-display font-bold text-white">Initial Setup</h3>
                  <p className="text-cyan-400">First 30 minutes</p>
                </div>
              </div>
              <div className="bg-slate-950 rounded-lg p-4 font-mono text-sm mb-4">
                <div className="text-slate-500 mb-2"># Access TCPWave Web UI</div>
                <div className="text-cyan-400">https://&lt;IP_ADDRESS&gt;:7443/tims</div>
                <div className="text-slate-500 mt-3 mb-2"># Default port: 7443</div>
                <div className="text-slate-500"># Use default admin credentials</div>
              </div>
              <ul className="space-y-2 text-slate-400 text-sm">
                <li className="flex items-center gap-2">
                  <CheckCircle className="w-4 h-4 text-green-400" />
                  Change default password immediately
                </li>
                <li className="flex items-center gap-2">
                  <CheckCircle className="w-4 h-4 text-green-400" />
                  Upload and activate license key
                </li>
                <li className="flex items-center gap-2">
                  <CheckCircle className="w-4 h-4 text-green-400" />
                  Configure NTP for time synchronization
                </li>
              </ul>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="bg-slate-900/50 border border-green-500/30 rounded-2xl p-8"
            >
              <div className="flex items-center gap-4 mb-6">
                <div className="w-12 h-12 bg-gradient-to-br from-green-500 to-emerald-500 rounded-xl flex items-center justify-center">
                  <Monitor className="w-6 h-6 text-white" />
                </div>
                <div>
                  <h3 className="text-xl font-display font-bold text-white">Dashboard Status</h3>
                  <p className="text-green-400">Understanding indicators</p>
                </div>
              </div>
              <div className="space-y-4">
                <div className="flex items-center gap-4 p-3 bg-slate-950 rounded-lg">
                  <div className="w-4 h-4 bg-green-500 rounded-full"></div>
                  <div>
                    <div className="text-white font-medium">Green Status</div>
                    <div className="text-slate-500 text-sm">Live, functioning IPAM with heartbeat</div>
                  </div>
                </div>
                <div className="flex items-center gap-4 p-3 bg-slate-950 rounded-lg">
                  <div className="w-4 h-4 bg-red-500 rounded-full"></div>
                  <div>
                    <div className="text-white font-medium">Red Status</div>
                    <div className="text-slate-500 text-sm">IPAM without heartbeat (not operational)</div>
                  </div>
                </div>
                <div className="flex items-center gap-4 p-3 bg-slate-950 rounded-lg">
                  <div className="w-4 h-4 bg-yellow-500 rounded-full"></div>
                  <div>
                    <div className="text-white font-medium">Yellow Status</div>
                    <div className="text-slate-500 text-sm">Warning - requires attention</div>
                  </div>
                </div>
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
              12-Week <span className="text-secondary">Curriculum</span>
            </h2>
            <p className="text-slate-400 max-w-2xl mx-auto">
              From installation to operational mastery
            </p>
          </motion.div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-5">
            {courseModules.map((module, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.02 }}
                className="bg-slate-950/80 border border-slate-800 rounded-xl p-5 hover:border-cyan-500/50 transition-all"
              >
                <div className="flex items-center gap-3 mb-3">
                  <div className="w-10 h-10 bg-gradient-to-br from-cyan-500 to-blue-500 rounded-lg flex items-center justify-center text-white font-bold text-sm">
                    W{module.week}
                  </div>
                  <h3 className="text-sm font-display font-bold text-white leading-tight">{module.title}</h3>
                </div>
                <ul className="space-y-1">
                  {module.topics.map((topic, j) => (
                    <li key={j} className="flex items-start gap-2 text-slate-400 text-xs">
                      <Wrench className="w-3 h-3 text-cyan-400 mt-0.5 flex-shrink-0" />
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
          <div className="grid md:grid-cols-2 gap-8 mb-12">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="bg-gradient-to-br from-cyan-500/10 to-blue-500/10 border border-cyan-500/30 rounded-2xl p-8"
            >
              <h3 className="text-xl font-display font-bold text-white mb-4">What You'll Build</h3>
              <ul className="space-y-3">
                {[
                  "Complete TCPWave installation from scratch",
                  "Fully configured DNS with zones and views",
                  "IPv4/IPv6 DHCP with scopes and options",
                  "IP address management with discovery",
                  "Security configuration with RBAC",
                  "High availability cluster setup",
                ].map((item, i) => (
                  <li key={i} className="flex items-start gap-3 text-slate-300">
                    <CheckCircle className="w-5 h-5 text-cyan-400 mt-0.5 flex-shrink-0" />
                    {item}
                  </li>
                ))}
              </ul>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.1 }}
              className="bg-gradient-to-br from-green-500/10 to-emerald-500/10 border border-green-500/30 rounded-2xl p-8"
            >
              <h3 className="text-xl font-display font-bold text-white mb-4">Career Path</h3>
              <ul className="space-y-3">
                {[
                  "Network Administrator",
                  "DDI Engineer",
                  "Systems Administrator",
                  "IT Infrastructure Specialist",
                  "Cloud Network Engineer",
                  "TCPWave Certified Professional",
                ].map((role, i) => (
                  <li key={i} className="flex items-start gap-3 text-slate-300">
                    <ArrowRight className="w-5 h-5 text-green-400 mt-0.5 flex-shrink-0" />
                    {role}
                  </li>
                ))}
              </ul>
            </motion.div>
          </div>
        </div>
      </section>

      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="bg-gradient-to-r from-cyan-500/20 to-blue-500/20 border border-cyan-500/30 rounded-2xl p-8 md:p-12 text-center">
            <div className="flex justify-center mb-6">
              <div className="w-20 h-20 bg-gradient-to-br from-cyan-500 to-blue-500 rounded-xl flex items-center justify-center">
                <Server className="w-10 h-10 text-white" />
              </div>
            </div>
            <h2 className="text-3xl font-display font-bold text-white mb-4">
              Start Your TCPWave Journey
            </h2>
            <p className="text-slate-300 max-w-2xl mx-auto mb-8">
              Master the fundamentals of enterprise DDI management. From installation to daily operations, 
              become proficient with TCPWave's powerful platform.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link 
                href="/admissions"
                className="px-8 py-4 bg-cyan-500 text-slate-950 font-bold rounded-lg hover:bg-cyan-400 transition-all flex items-center gap-2 justify-center"
                data-testid="enroll-now-btn"
              >
                Enroll Now <ArrowRight className="w-5 h-5" />
              </Link>
              <Link 
                href="/courses"
                className="px-8 py-4 border border-slate-600 text-white font-bold rounded-lg hover:border-cyan-500/50 transition-all"
                data-testid="view-courses-btn"
              >
                View All Courses
              </Link>
            </div>
          </div>
        </div>
      </section>
    </PageLayout>
  );
}
