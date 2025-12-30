import { motion } from "framer-motion";
import { Link } from "wouter";
import PageLayout from "@/components/PageLayout";
import { Settings, Network, Shield, Code, Database, Zap, CheckCircle, Clock, Users, Award, ArrowRight, Server, Cpu } from "lucide-react";

const courseModules = [
  {
    week: 1,
    title: "DDI Architecture Overview",
    topics: [
      "Understanding DDI (DNS, DHCP, IPAM) Integration",
      "Unified vs Siloed Management Approaches",
      "TCPWave Unified DDI Architecture",
      "Data Flow Between DNS, DHCP, and IPAM",
      "High-Level Design Patterns",
    ],
  },
  {
    week: 2,
    title: "DNS-DHCP Integration",
    topics: [
      "Dynamic DNS Updates (DDNS)",
      "Forward and Reverse Zone Automation",
      "Lease-Based DNS Record Management",
      "Conflict Resolution Strategies",
      "Security for DDNS (TSIG, GSS-TSIG)",
    ],
  },
  {
    week: 3,
    title: "IPAM as Single Source of Truth",
    topics: [
      "Centralized IP Inventory Management",
      "DNS and DHCP Provisioning from IPAM",
      "Network Discovery and Reconciliation",
      "Conflict Detection and Resolution",
      "Historical Tracking and Audit",
    ],
  },
  {
    week: 4,
    title: "Automation with APIs",
    topics: [
      "TCPWave REST API Deep Dive",
      "Authentication and Authorization",
      "CRUD Operations for DDI Objects",
      "Bulk Operations and Transactions",
      "Error Handling and Idempotency",
    ],
  },
  {
    week: 5,
    title: "Infrastructure as Code",
    topics: [
      "Ansible Modules for TCPWave",
      "Terraform Provider Development",
      "GitOps Workflows for DDI",
      "CI/CD Integration Patterns",
      "Testing and Validation",
    ],
  },
  {
    week: 6,
    title: "Cloud & Hybrid Integration",
    topics: [
      "AWS Route 53 and VPC DHCP Integration",
      "Azure DNS and IPAM Synchronization",
      "GCP Cloud DNS Integration",
      "Multi-Cloud DDI Governance",
      "Hybrid On-Prem + Cloud Architecture",
    ],
  },
  {
    week: 7,
    title: "ServiceNow & ITSM Integration",
    topics: [
      "ServiceNow CMDB Synchronization",
      "IP Request Workflow Automation",
      "Incident and Change Management",
      "Self-Service Portal Integration",
      "Reporting and Dashboards",
    ],
  },
  {
    week: 8,
    title: "Capstone: Full-Stack DDI Automation",
    topics: [
      "End-to-End Automation Design",
      "Event-Driven Architecture (Webhooks, Kafka)",
      "Observability and Monitoring",
      "Performance Optimization",
      "Final Project Presentation",
    ],
  },
];

const courseStats = [
  { value: "100%", label: "API-First Architecture" },
  { value: "50+", label: "Integration Endpoints" },
  { value: "3", label: "Major Cloud Platforms" },
  { value: "24/7", label: "Real-Time Sync" },
];

const learningOutcomes = [
  "Design integrated DDI architectures for enterprise environments",
  "Implement Dynamic DNS updates with DHCP lease events",
  "Automate DDI operations with REST APIs and webhooks",
  "Build Infrastructure as Code pipelines for DDI",
  "Integrate TCPWave with AWS, Azure, and GCP",
  "Connect DDI with ServiceNow and ITSM platforms",
  "Implement event-driven automation patterns",
];

const prerequisites = [
  "Completion of DNS or DHCP foundation courses",
  "Basic programming knowledge (Python/JavaScript)",
  "Understanding of REST APIs",
  "Familiarity with cloud platforms (any one)",
];

export default function DDIIntegration() {
  return (
    <PageLayout
      title="DDI Integration & Automation"
      subtitle="Build unified DNS, DHCP, and IPAM solutions with API-first automation"
      badge="Advanced Course"
      breadcrumbs={[
        { label: "Courses", href: "/courses" },
        { label: "DDI Integration" },
      ]}
    >
      <section className="py-12">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-4 gap-6 mb-12">
            {[
              { label: "Duration", value: "8 Weeks", icon: Clock },
              { label: "Level", value: "Advanced", icon: Award },
              { label: "Format", value: "Live + Labs", icon: Users },
              { label: "Price", value: "₹85,000", icon: Zap },
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
                <item.icon className="w-8 h-8 text-orange-400 mx-auto mb-3" />
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
                Course <span className="text-orange-400">Overview</span>
              </h2>
              <p className="text-slate-400 mb-6">
                DDI integration is the practice of unifying DNS, DHCP, and IPAM into a cohesive 
                system where changes in one component automatically propagate to others. This 
                eliminates manual work, reduces errors, and enables self-service operations.
              </p>
              <p className="text-slate-400 mb-6">
                This advanced course teaches you to build fully automated DDI workflows using 
                TCPWave's API-first platform. You'll integrate with cloud providers, ITSM 
                platforms, and build Infrastructure as Code pipelines for DDI operations.
              </p>

              <div className="grid grid-cols-2 gap-4 mb-8">
                {courseStats.map((stat, i) => (
                  <div key={i} className="bg-gradient-to-br from-orange-500/10 to-amber-500/10 border border-orange-500/30 rounded-lg p-4 text-center">
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
                    <CheckCircle className="w-5 h-5 text-orange-400 mt-0.5 flex-shrink-0" />
                    {outcome}
                  </li>
                ))}
              </ul>

              <div className="bg-gradient-to-br from-orange-500/10 to-amber-500/10 border border-orange-500/30 rounded-xl p-6">
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
              8 weeks of advanced automation, integration, and Infrastructure as Code
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
                className="bg-slate-950/80 border border-slate-800 rounded-xl p-6 hover:border-orange-500/50 transition-all"
              >
                <div className="flex items-center gap-4 mb-4">
                  <div className="w-12 h-12 bg-gradient-to-br from-orange-500 to-amber-500 rounded-lg flex items-center justify-center text-white font-bold">
                    W{module.week}
                  </div>
                  <h3 className="text-lg font-display font-bold text-white">{module.title}</h3>
                </div>
                <ul className="space-y-2">
                  {module.topics.map((topic, j) => (
                    <li key={j} className="flex items-start gap-2 text-slate-400 text-sm">
                      <Settings className="w-4 h-4 text-orange-400 mt-0.5 flex-shrink-0" />
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
          <div className="bg-gradient-to-r from-orange-500/20 to-amber-500/20 border border-orange-500/30 rounded-2xl p-8 md:p-12 text-center">
            <h2 className="text-3xl font-display font-bold text-white mb-4">
              Automate Your Entire DDI Stack
            </h2>
            <p className="text-slate-300 max-w-2xl mx-auto mb-8">
              Master the art of unified DDI automation with API-first architecture and cloud integration.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link href="/admissions">
                <button className="px-8 py-4 bg-orange-500 text-white font-bold rounded-lg hover:bg-orange-400 transition-all flex items-center gap-2 justify-center">
                  Enroll Now <ArrowRight className="w-5 h-5" />
                </button>
              </Link>
              <Link href="/courses">
                <button className="px-8 py-4 border border-slate-600 text-white font-bold rounded-lg hover:border-orange-500/50 transition-all">
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
