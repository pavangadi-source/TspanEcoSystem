import { motion } from "framer-motion";
import { Link } from "wouter";
import PageLayout from "@/components/PageLayout";
import { Shield, Server, Brain, Code, Database, Zap, CheckCircle, Clock, Users, Award, ArrowRight } from "lucide-react";

const courseModules = [
  {
    week: 1,
    title: "MISP Platform Fundamentals",
    topics: [
      "Introduction to MISP (Malware Information Sharing Platform)",
      "MISP Architecture and Components",
      "Event and Attribute Management",
      "Taxonomies and Galaxies",
    ],
  },
  {
    week: 2,
    title: "TCPWave MISP Module Architecture",
    topics: [
      "Module Types: Expansion, Export, Import, Action",
      "FastAPI Integration Framework",
      "ATLANTIS Deep Learning System Overview",
      "API Specification and Endpoints",
    ],
  },
  {
    week: 3,
    title: "AI-Powered Threat Detection",
    topics: [
      "DGA Detection with CNN+LSTM Neural Networks",
      "136+ DGA Family Recognition",
      "Shannon Entropy Analysis",
      "N-gram Pattern Analysis",
    ],
  },
  {
    week: 4,
    title: "Threat Intelligence Enrichment",
    topics: [
      "Multi-Source Integration (VirusTotal, AbuseIPDB, Shodan)",
      "STIX 2.1 Import/Export",
      "IOC Correlation and Analysis",
      "Threat Feed Management",
    ],
  },
  {
    week: 5,
    title: "FastMCP and Automation",
    topics: [
      "Model Context Protocol Integration",
      "Exposing Modules as AI Tools",
      "REST API Development",
      "Webhook and Notification Systems",
    ],
  },
  {
    week: 6,
    title: "Capstone: Enterprise Deployment",
    topics: [
      "Production Architecture Design",
      "TCPWave IPAM Synchronization",
      "Real-time Action Modules",
      "Performance Optimization",
    ],
  },
];

const moduleStats = [
  { value: "16", label: "Total Modules" },
  { value: "5", label: "Expansion Modules" },
  { value: "4", label: "Export Modules" },
  { value: "3", label: "Import Modules" },
];

const learningOutcomes = [
  "Deploy and configure TCPWave MISP modules in enterprise environments",
  "Implement AI-powered DGA detection using ATLANTIS deep learning",
  "Integrate multiple threat intelligence feeds for comprehensive enrichment",
  "Build custom automation workflows with FastMCP",
  "Export threat data in STIX 2.1 format for intelligence sharing",
  "Configure real-time alerting via Slack, email, and webhooks",
];

export default function MISPIntegration() {
  return (
    <PageLayout
      title="MISP Integration & AI Threat Intelligence"
      subtitle="Master TCPWave's AI-powered threat intelligence modules for MISP"
      badge="Advanced Course"
      breadcrumbs={[
        { label: "Courses", href: "/courses" },
        { label: "MISP Integration" },
      ]}
    >
      <section className="py-12">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-4 gap-6 mb-12">
            {[
              { label: "Duration", value: "6 Weeks", icon: Clock },
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
                <item.icon className="w-8 h-8 text-primary mx-auto mb-3" />
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
                TCPWave MISP Modules is a comprehensive suite of Python modules that extend MISP with advanced AI-powered threat intelligence capabilities. Built on FastAPI and integrated with TCPWave's ATLANTIS deep learning system, these modules provide real-time DGA detection, threat enrichment, and seamless integration with enterprise security workflows.
              </p>
              <p className="text-slate-400 mb-6">
                This course teaches you to deploy, configure, and extend these modules for enterprise threat intelligence operations. You'll work with live MISP instances and TCPWave infrastructure throughout the program.
              </p>

              <div className="grid grid-cols-2 gap-4 mb-8">
                {moduleStats.map((stat, i) => (
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
                    <CheckCircle className="w-5 h-5 text-green-400 mt-0.5 flex-shrink-0" />
                    {outcome}
                  </li>
                ))}
              </ul>

              <div className="bg-gradient-to-br from-cyan-500/10 to-blue-500/10 border border-cyan-500/30 rounded-xl p-6">
                <h4 className="text-lg font-bold text-white mb-3">Prerequisites</h4>
                <ul className="text-slate-400 text-sm space-y-2">
                  <li>• Python programming experience</li>
                  <li>• Basic understanding of threat intelligence concepts</li>
                  <li>• Familiarity with REST APIs</li>
                  <li>• Linux command line proficiency</li>
                </ul>
              </div>
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
              Course <span className="text-secondary">Curriculum</span>
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
                  <span className="px-3 py-1 bg-purple-500/20 text-purple-400 text-xs font-bold rounded-full">
                    Week {module.week}
                  </span>
                </div>
                <h3 className="text-lg font-display font-bold text-white mb-4">{module.title}</h3>
                <ul className="space-y-2">
                  {module.topics.map((topic, j) => (
                    <li key={j} className="text-slate-400 text-sm flex items-start gap-2">
                      <div className="w-1.5 h-1.5 bg-cyan-400 rounded-full mt-2 flex-shrink-0" />
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
            className="bg-gradient-to-r from-purple-500/20 to-pink-500/20 border border-purple-500/30 rounded-2xl p-12 text-center"
          >
            <Brain className="w-16 h-16 text-purple-400 mx-auto mb-6" />
            <h2 className="text-3xl md:text-4xl font-display font-bold text-white mb-4">
              Enroll in MISP Integration Course
            </h2>
            <p className="text-slate-300 max-w-2xl mx-auto mb-8">
              Next cohort starts January 15, 2025. Limited to 20 students for personalized instruction.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link href="/admissions/apply">
                <button 
                  className="px-8 py-4 bg-purple-500 text-white font-bold rounded-lg hover:bg-purple-600 transition-colors"
                  data-testid="button-enroll"
                >
                  Enroll Now - ₹85,000
                </button>
              </Link>
              <Link href="/schedule-demo">
                <button className="px-8 py-4 bg-slate-800 text-white font-bold rounded-lg hover:bg-slate-700 transition-colors border border-slate-700">
                  Request Syllabus
                </button>
              </Link>
            </div>
          </motion.div>
        </div>
      </section>
    </PageLayout>
  );
}
