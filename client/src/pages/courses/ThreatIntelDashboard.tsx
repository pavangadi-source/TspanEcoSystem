import { motion } from "framer-motion";
import { Link } from "wouter";
import PageLayout from "@/components/PageLayout";
import { Activity, Globe, AlertTriangle, Shield, Server, Database, CheckCircle, Clock, Users, Zap, BarChart3 } from "lucide-react";

const courseModules = [
  {
    week: 1,
    title: "Dashboard Architecture",
    topics: [
      "TCPWave Falcon Integration",
      "CIRCL MISP Connection",
      "Real-time Data Pipelines",
      "Dashboard Components",
    ],
  },
  {
    week: 2,
    title: "Threat Visualization",
    topics: [
      "Live Threat Map Implementation",
      "IOC Statistics Dashboards",
      "Attack Analytics Trends",
      "Geographic Threat Mapping",
    ],
  },
  {
    week: 3,
    title: "DGA Detection & Analysis",
    topics: [
      "Domain Generation Algorithm Families",
      "Confidence Scoring Systems",
      "MITRE ATT&CK Integration",
      "Botnet Detection Patterns",
    ],
  },
  {
    week: 4,
    title: "IOC Management",
    topics: [
      "IOC Types (Domain, IP, Hash, URL)",
      "Threat Tagging Systems",
      "Timeline and History Tracking",
      "Family Classification",
    ],
  },
  {
    week: 5,
    title: "Alerting & Response",
    topics: [
      "Alert Severity Configuration",
      "Notification Integration",
      "Automated Response Actions",
      "IPAM Synchronization",
    ],
  },
  {
    week: 6,
    title: "Enterprise Operations",
    topics: [
      "24/7 Monitoring Workflows",
      "Team Collaboration Features",
      "Report Generation",
      "Performance Optimization",
    ],
  },
];

const dashboardStats = [
  { value: "1.2M", label: "Active Threats Tracked", color: "text-red-400" },
  { value: "50K+", label: "New IOCs Daily", color: "text-orange-400" },
  { value: "136+", label: "DGA Families", color: "text-purple-400" },
  { value: "Real-time", label: "Update Frequency", color: "text-green-400" },
];

const threatTypes = [
  { name: "DGA Domains", count: "45,231", severity: "high" },
  { name: "C2 Servers", count: "12,456", severity: "high" },
  { name: "Ransomware", count: "8,923", severity: "high" },
  { name: "APT Activity", count: "3,567", severity: "medium" },
  { name: "Botnet Nodes", count: "23,891", severity: "medium" },
  { name: "Phishing URLs", count: "67,234", severity: "medium" },
];

const mitreAttacks = [
  { id: "T1071.004", name: "DNS Communication", count: 234 },
  { id: "T1568.002", name: "Domain Generation", count: 189 },
  { id: "T1105", name: "Ingress Tool Transfer", count: 156 },
  { id: "T1090.002", name: "External Proxy", count: 123 },
];

export default function ThreatIntelDashboard() {
  return (
    <PageLayout
      title="Threat Intelligence Dashboard Operations"
      subtitle="Master TCPWave Falcon × CIRCL MISP threat monitoring and analysis"
      badge="Operations Course"
      breadcrumbs={[
        { label: "Courses", href: "/courses" },
        { label: "Threat Intel Dashboard" },
      ]}
    >
      <section className="py-12">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-4 gap-6 mb-12">
            {dashboardStats.map((stat, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1 }}
                className="bg-slate-900/50 border border-slate-800 rounded-xl p-6 text-center"
                data-testid={`stat-${i}`}
              >
                <div className={`text-3xl font-display font-bold mb-2 ${stat.color}`}>{stat.value}</div>
                <div className="text-slate-400 text-sm">{stat.label}</div>
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
                Learn to operate the TCPWave Falcon × CIRCL MISP threat intelligence dashboard for enterprise security monitoring. This hands-on course covers real-time threat visualization, DGA detection analysis, and IOC management using live threat feeds.
              </p>
              <p className="text-slate-400 mb-6">
                You'll work with actual threat data from CIRCL.lu and other intelligence sources, learning to identify and respond to DGA domains, C2 servers, ransomware, and APT activity in real-time.
              </p>

              <div className="grid grid-cols-2 gap-4">
                {[
                  { label: "Duration", value: "6 Weeks", icon: Clock },
                  { label: "Labs", value: "30+ Hours", icon: Server },
                  { label: "Level", value: "Intermediate", icon: BarChart3 },
                  { label: "Price", value: "₹70,000", icon: Zap },
                ].map((item, i) => (
                  <div key={i} className="bg-slate-900/50 border border-slate-800 rounded-lg p-4 flex items-center gap-3">
                    <item.icon className="w-6 h-6 text-cyan-400" />
                    <div>
                      <div className="text-slate-400 text-xs">{item.label}</div>
                      <div className="text-white font-bold">{item.value}</div>
                    </div>
                  </div>
                ))}
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
            >
              <h3 className="text-xl font-display font-bold text-white mb-6">Live Threat Categories</h3>
              <div className="space-y-3 mb-8">
                {threatTypes.map((threat, i) => (
                  <div key={i} className="flex items-center justify-between bg-slate-900/50 border border-slate-800 rounded-lg p-4">
                    <div className="flex items-center gap-3">
                      <div className={`w-3 h-3 rounded-full ${threat.severity === 'high' ? 'bg-red-500' : 'bg-orange-500'}`} />
                      <span className="text-white">{threat.name}</span>
                    </div>
                    <span className="text-cyan-400 font-mono">{threat.count}</span>
                  </div>
                ))}
              </div>

              <h3 className="text-xl font-display font-bold text-white mb-4">MITRE ATT&CK Coverage</h3>
              <div className="grid grid-cols-2 gap-3">
                {mitreAttacks.map((attack, i) => (
                  <div key={i} className="bg-gradient-to-br from-slate-800 to-slate-900 rounded-lg p-3">
                    <div className="text-red-400 font-mono text-sm font-bold">{attack.id}</div>
                    <div className="text-slate-300 text-xs mt-1">{attack.name}</div>
                    <div className="text-slate-500 text-xs mt-1">{attack.count} detections</div>
                  </div>
                ))}
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
                  <span className="px-3 py-1 bg-red-500/20 text-red-400 text-xs font-bold rounded-full">
                    Week {module.week}
                  </span>
                </div>
                <h3 className="text-lg font-display font-bold text-white mb-4">{module.title}</h3>
                <ul className="space-y-2">
                  {module.topics.map((topic, j) => (
                    <li key={j} className="text-slate-400 text-sm flex items-start gap-2">
                      <Activity className="w-3 h-3 text-red-400 mt-1.5 flex-shrink-0" />
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
            className="bg-gradient-to-r from-red-500/20 to-orange-500/20 border border-red-500/30 rounded-2xl p-12 text-center"
          >
            <Globe className="w-16 h-16 text-red-400 mx-auto mb-6" />
            <h2 className="text-3xl md:text-4xl font-display font-bold text-white mb-4">
              Monitor Global Threats in Real-Time
            </h2>
            <p className="text-slate-300 max-w-2xl mx-auto mb-8">
              Get hands-on experience with live threat intelligence from CIRCL MISP and TCPWave Falcon.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link href="/admissions/apply">
                <button 
                  className="px-8 py-4 bg-red-500 text-white font-bold rounded-lg hover:bg-red-600 transition-colors"
                  data-testid="button-enroll"
                >
                  Enroll Now - ₹70,000
                </button>
              </Link>
              <Link href="/threat-intelligence/real-time-dashboard">
                <button className="px-8 py-4 bg-slate-800 text-white font-bold rounded-lg hover:bg-slate-700 transition-colors border border-slate-700">
                  View Live Dashboard
                </button>
              </Link>
            </div>
          </motion.div>
        </div>
      </section>
    </PageLayout>
  );
}
