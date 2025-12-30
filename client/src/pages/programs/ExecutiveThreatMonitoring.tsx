import { motion } from "framer-motion";
import { Link } from "wouter";
import PageLayout from "@/components/PageLayout";
import { Eye, Clock, BookOpen, Users, CheckCircle, Activity, Monitor, AlertTriangle, Award, Target, Briefcase } from "lucide-react";
import { Button } from "@/components/ui/button";

const programHighlights = [
  { label: "Duration", value: "6 Months", icon: Clock },
  { label: "Format", value: "Weekend Executive", icon: Briefcase },
  { label: "Cohort Size", value: "35 Max", icon: Users },
  { label: "Credential", value: "Executive Certificate", icon: Award },
];

const curriculum = [
  {
    phase: "Custom Monitoring Solutions",
    duration: "6 Weeks",
    modules: ["Monitoring Architecture Design", "Custom Alerting Systems", "Dashboard Development", "Real-time Analytics"],
  },
  {
    phase: "Threat Intelligence Platforms",
    duration: "6 Weeks",
    modules: ["TIP Selection & Implementation", "Intelligence Feeds Integration", "IOC Management", "Threat Sharing Frameworks"],
  },
  {
    phase: "SIEM Architecture & Design",
    duration: "6 Weeks",
    modules: ["SIEM Platform Selection", "Log Management at Scale", "Correlation Rules Development", "Performance Optimization"],
  },
  {
    phase: "Actionable Intelligence Workflows",
    duration: "6 Weeks",
    modules: ["Playbook Development", "Incident Response Integration", "Metrics & Reporting", "Capstone Project"],
  },
];

const targetAudience = [
  { role: "SOC Directors", description: "Operations leadership" },
  { role: "Security Architects", description: "Monitoring design" },
  { role: "IT Leaders", description: "Security operations" },
  { role: "Threat Analysts", description: "Intelligence management" },
];

const alumniStats = [
  { value: "85%", label: "Detection time reduced" },
  { value: "60%", label: "Alert fatigue decreased" },
  { value: "96%", label: "Would recommend" },
  { value: "110+", label: "SOC leader alumni" },
];

export default function ExecutiveThreatMonitoring() {
  return (
    <PageLayout
      title="Threat Intelligence & Monitoring Solutions"
      subtitle="Design enterprise-grade security operations"
      badge="Executive Program"
      breadcrumbs={[
        { label: "Programs", href: "/executive-programs" },
        { label: "Threat Monitoring" },
      ]}
    >
      <section className="py-12">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-4 gap-6">
            {programHighlights.map((item, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1 }}
                className="bg-slate-900/50 border border-slate-800 rounded-xl p-6 text-center"
                data-testid={`highlight-${i}`}
              >
                <item.icon className="w-8 h-8 text-emerald-400 mx-auto mb-3" />
                <div className="text-slate-400 text-sm">{item.label}</div>
                <div className="text-xl font-bold text-white">{item.value}</div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-20 bg-slate-900/50">
        <div className="container mx-auto px-4">
          <div className="grid lg:grid-cols-2 gap-12">
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
            >
              <h2 className="text-3xl font-display font-bold text-white mb-6">
                Build <span className="text-emerald-400">World-Class SOC</span> Capabilities
              </h2>
              <p className="text-slate-400 mb-6">
                This program teaches you to design and implement enterprise-grade threat monitoring and intelligence solutions. Learn from SOC directors who have built monitoring capabilities at Fortune 500 companies and government agencies.
              </p>
              <p className="text-slate-400 mb-6">
                Through hands-on labs with leading SIEM platforms and threat intelligence tools, develop the skills to transform raw security data into actionable intelligence.
              </p>
              <ul className="space-y-3">
                <li className="flex items-start gap-3 text-slate-300">
                  <CheckCircle className="w-5 h-5 text-emerald-400 mt-0.5 flex-shrink-0" />
                  Design scalable SIEM architectures for enterprise environments
                </li>
                <li className="flex items-start gap-3 text-slate-300">
                  <CheckCircle className="w-5 h-5 text-emerald-400 mt-0.5 flex-shrink-0" />
                  Build custom dashboards and monitoring solutions
                </li>
                <li className="flex items-start gap-3 text-slate-300">
                  <CheckCircle className="w-5 h-5 text-emerald-400 mt-0.5 flex-shrink-0" />
                  Implement threat intelligence platforms and feeds
                </li>
                <li className="flex items-start gap-3 text-slate-300">
                  <CheckCircle className="w-5 h-5 text-emerald-400 mt-0.5 flex-shrink-0" />
                  Develop effective playbooks and response workflows
                </li>
              </ul>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
            >
              <div className="bg-gradient-to-br from-emerald-500/10 to-teal-500/10 border border-emerald-500/30 rounded-xl p-8 mb-6">
                <div className="text-slate-400 text-sm mb-2">Program Investment</div>
                <div className="text-3xl font-bold text-white mb-2">₹2,95,000</div>
                <div className="text-slate-400 text-sm mb-4">Corporate sponsorship available</div>
                <div className="text-emerald-400 text-sm">16 live sessions with SOC experts</div>
              </div>

              <h3 className="text-xl font-display font-bold text-white mb-4">Designed For</h3>
              <div className="space-y-3">
                {targetAudience.map((target, i) => (
                  <div key={i} className="bg-slate-900/50 border border-slate-800 rounded-lg p-4 flex justify-between items-center">
                    <div className="text-white font-medium">{target.role}</div>
                    <div className="text-slate-400 text-sm">{target.description}</div>
                  </div>
                ))}
              </div>
            </motion.div>
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
              Program <span className="text-emerald-400">Structure</span>
            </h2>
          </motion.div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {curriculum.map((phase, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1 }}
                className="bg-slate-900/50 border border-slate-800 rounded-xl p-6"
              >
                <div className="flex justify-between items-start mb-4">
                  <span className="text-emerald-400 font-bold">Module {i + 1}</span>
                  <span className="px-2 py-1 bg-slate-800 text-slate-400 text-xs rounded">{phase.duration}</span>
                </div>
                <h3 className="text-lg font-display font-bold text-white mb-4">{phase.phase}</h3>
                <ul className="space-y-2">
                  {phase.modules.map((module, j) => (
                    <li key={j} className="flex items-start gap-2 text-slate-400 text-sm">
                      <Target className="w-3 h-3 text-emerald-400 mt-1 flex-shrink-0" />
                      {module}
                    </li>
                  ))}
                </ul>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-20 bg-slate-900/50">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-4 gap-6 mb-12">
            {alumniStats.map((stat, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1 }}
                className="text-center"
              >
                <div className="text-4xl font-bold text-emerald-400 mb-2">{stat.value}</div>
                <div className="text-slate-400 text-sm">{stat.label}</div>
              </motion.div>
            ))}
          </div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center"
          >
            <h2 className="text-2xl md:text-3xl font-display font-bold text-white mb-6">
              Ready to Build Elite SOC Capabilities?
            </h2>
            <div className="flex flex-col sm:flex-row justify-center gap-4">
              <Link href="/admissions">
                <Button size="lg" className="bg-emerald-500 hover:bg-emerald-600 text-black font-bold px-8" data-testid="button-apply-now">
                  Apply Now
                </Button>
              </Link>
              <Link href="/contact">
                <Button size="lg" variant="outline" className="border-slate-600 text-white hover:bg-slate-800" data-testid="button-speak-advisor">
                  Speak to an Advisor
                </Button>
              </Link>
            </div>
          </motion.div>
        </div>
      </section>
    </PageLayout>
  );
}
