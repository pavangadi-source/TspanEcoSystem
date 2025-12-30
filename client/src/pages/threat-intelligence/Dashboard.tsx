import { motion } from "framer-motion";
import { Link } from "wouter";
import PageLayout from "@/components/PageLayout";
import { Activity, Globe, AlertTriangle, TrendingUp, Shield, Bell, BarChart3, Map, Clock, Zap } from "lucide-react";

const dashboardFeatures = [
  {
    icon: Map,
    title: "Live Threat Map",
    description: "Real-time visualization of global cyber attacks with India-focused intelligence overlay",
  },
  {
    icon: Activity,
    title: "Attack Analytics",
    description: "Trend analysis of attack types, sources, and targets with historical comparisons",
  },
  {
    icon: AlertTriangle,
    title: "Threat Alerts",
    description: "Customizable alerts for threats targeting your sector, region, or specific assets",
  },
  {
    icon: BarChart3,
    title: "IOC Statistics",
    description: "Real-time counts of active malicious IPs, domains, URLs, and file hashes",
  },
  {
    icon: TrendingUp,
    title: "Trend Reports",
    description: "Weekly and monthly threat trend reports with sector-specific insights",
  },
  {
    icon: Bell,
    title: "Notification Center",
    description: "Centralized notification hub with email, SMS, and webhook integration",
  },
];

const dashboardStats = [
  { value: "1.2M", label: "Active Threats Tracked", color: "text-red-400" },
  { value: "50K+", label: "New IOCs Daily", color: "text-orange-400" },
  { value: "15", label: "Threat Categories", color: "text-yellow-400" },
  { value: "Real-time", label: "Update Frequency", color: "text-green-400" },
];

const alertTypes = [
  { type: "Critical", description: "Active exploitation, immediate action required", color: "bg-red-500" },
  { type: "High", description: "Significant threat, action recommended within 24h", color: "bg-orange-500" },
  { type: "Medium", description: "Potential threat, review and assess", color: "bg-yellow-500" },
  { type: "Low", description: "Informational, no immediate action needed", color: "bg-blue-500" },
];

export default function Dashboard() {
  return (
    <PageLayout
      title="Real-Time Dashboard"
      subtitle="Live threat visibility with actionable intelligence for security operations"
      badge="Threat Intelligence"
      breadcrumbs={[
        { label: "Threat Intelligence", href: "/threat-intelligence" },
        { label: "Real-Time Dashboard" },
      ]}
    >
      <section className="py-12">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-4 gap-6">
            {dashboardStats.map((stat, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1 }}
                className="bg-slate-900/50 border border-slate-800 rounded-xl p-6 text-center"
                data-testid={`dashboard-stat-${i}`}
              >
                <div className={`text-3xl font-display font-bold mb-2 ${stat.color}`}>{stat.value}</div>
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
              Dashboard <span className="text-primary">Features</span>
            </h2>
            <p className="text-slate-400 max-w-2xl mx-auto">
              Comprehensive visibility into the global and India-specific threat landscape
            </p>
          </motion.div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {dashboardFeatures.map((feature, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1 }}
                className="bg-slate-950/80 border border-slate-800 rounded-xl p-6 hover:border-red-500/50 transition-all"
                data-testid={`feature-${i}`}
              >
                <feature.icon className="w-10 h-10 text-red-400 mb-4" />
                <h3 className="text-lg font-display font-bold text-white mb-2">{feature.title}</h3>
                <p className="text-slate-400 text-sm">{feature.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
            >
              <h2 className="text-3xl md:text-4xl font-display font-bold text-white mb-6">
                Customizable <span className="text-secondary">Alerts</span>
              </h2>
              <p className="text-slate-400 mb-8">
                Set up alerts based on threat severity, sector, geography, or specific indicators. Receive notifications via email, SMS, Slack, or webhook.
              </p>
              <div className="space-y-4">
                {alertTypes.map((alert, i) => (
                  <div key={i} className="flex items-center gap-4 bg-slate-900/50 border border-slate-800 rounded-lg p-4">
                    <div className={`w-4 h-4 rounded-full ${alert.color}`} />
                    <div>
                      <div className="text-white font-medium">{alert.type}</div>
                      <div className="text-slate-400 text-sm">{alert.description}</div>
                    </div>
                  </div>
                ))}
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="bg-gradient-to-br from-red-500/10 to-orange-500/10 border border-red-500/30 rounded-2xl p-8"
            >
              <div className="flex items-center gap-3 mb-6">
                <Clock className="w-8 h-8 text-red-400" />
                <div>
                  <div className="text-white font-bold">Live Demo</div>
                  <div className="text-slate-400 text-sm">See the dashboard in action</div>
                </div>
              </div>
              <div className="aspect-video bg-slate-950 rounded-lg border border-slate-700 flex items-center justify-center mb-6">
                <div className="text-center">
                  <Globe className="w-16 h-16 text-red-400/50 mx-auto mb-4 animate-pulse" />
                  <div className="text-slate-500">Interactive Demo Preview</div>
                </div>
              </div>
              <Link href="/threat-intelligence/subscribe">
                <button 
                  className="w-full px-6 py-4 bg-red-500 text-white font-bold rounded-lg hover:bg-red-600 transition-colors"
                  data-testid="button-access-dashboard"
                >
                  Get Dashboard Access
                </button>
              </Link>
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
            className="bg-gradient-to-r from-slate-800 to-slate-900 border border-slate-700 rounded-2xl p-12 text-center"
          >
            <Zap className="w-16 h-16 text-yellow-400 mx-auto mb-6" />
            <h2 className="text-3xl md:text-4xl font-display font-bold text-white mb-4">
              Start Monitoring Threats Today
            </h2>
            <p className="text-slate-300 max-w-2xl mx-auto mb-8">
              Get instant access to the real-time threat dashboard with a free trial. No credit card required.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link href="/threat-intelligence/subscribe">
                <button className="px-8 py-4 bg-red-500 text-white font-bold rounded-lg hover:bg-red-600 transition-colors">
                  Start Free Trial
                </button>
              </Link>
              <Link href="/schedule-demo">
                <button className="px-8 py-4 bg-slate-700 text-white font-bold rounded-lg hover:bg-slate-600 transition-colors border border-slate-600">
                  Schedule Demo
                </button>
              </Link>
            </div>
          </motion.div>
        </div>
      </section>
    </PageLayout>
  );
}
