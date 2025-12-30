import { motion } from "framer-motion";
import { Link } from "wouter";
import PageLayout from "@/components/PageLayout";
import { Brain, Clock, BookOpen, Users, CheckCircle, Bot, Cpu, Sparkles, Award, Target, Briefcase } from "lucide-react";
import { Button } from "@/components/ui/button";

const programHighlights = [
  { label: "Duration", value: "6 Months", icon: Clock },
  { label: "Format", value: "Weekend Executive", icon: Briefcase },
  { label: "Cohort Size", value: "35 Max", icon: Users },
  { label: "Credential", value: "Executive Certificate", icon: Award },
];

const curriculum = [
  {
    phase: "AI in Cybercrime & Defense",
    duration: "6 Weeks",
    modules: ["AI-Powered Attack Vectors", "Deepfake Detection", "Social Engineering Evolution", "AI Defense Strategies"],
  },
  {
    phase: "Autonomous Security Agents",
    duration: "6 Weeks",
    modules: ["Agentic AI Architectures", "Security Orchestration", "Automated Response Systems", "Human-AI Collaboration"],
  },
  {
    phase: "ML-Driven Threat Detection",
    duration: "6 Weeks",
    modules: ["Anomaly Detection Models", "Behavioral Analytics", "UEBA Implementation", "Model Training & Tuning"],
  },
  {
    phase: "Building Cyber Resilience",
    duration: "6 Weeks",
    modules: ["AI Governance Frameworks", "Model Security", "Adversarial ML Defense", "Capstone Project"],
  },
];

const targetAudience = [
  { role: "CISOs", description: "AI strategy leadership" },
  { role: "Security Directors", description: "ML implementation" },
  { role: "AI/ML Leaders", description: "Security applications" },
  { role: "SOC Managers", description: "AI-driven operations" },
];

const alumniStats = [
  { value: "92%", label: "AI adoption improved" },
  { value: "70%", label: "Detection rates increased" },
  { value: "98%", label: "Would recommend" },
  { value: "85+", label: "AI security alumni" },
];

export default function ExecutiveAIThreatIntel() {
  return (
    <PageLayout
      title="ML, AI & Threat Intelligence"
      subtitle="Lead the AI-powered security revolution"
      badge="Executive Program"
      breadcrumbs={[
        { label: "Programs", href: "/executive-programs" },
        { label: "AI & Threat Intelligence" },
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
                <item.icon className="w-8 h-8 text-violet-400 mx-auto mb-3" />
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
                Harness <span className="text-violet-400">AI for Security</span>
              </h2>
              <p className="text-slate-400 mb-6">
                As AI transforms both cyber attacks and defenses, security leaders must understand how to leverage machine learning for threat detection while defending against AI-powered attacks. This program bridges the gap between AI capabilities and security strategy.
              </p>
              <p className="text-slate-400 mb-6">
                Learn from pioneers in AI security, including researchers from leading AI labs and CISOs who have successfully deployed ML-driven security systems at scale.
              </p>
              <ul className="space-y-3">
                <li className="flex items-start gap-3 text-slate-300">
                  <CheckCircle className="w-5 h-5 text-violet-400 mt-0.5 flex-shrink-0" />
                  Build and evaluate ML models for threat detection
                </li>
                <li className="flex items-start gap-3 text-slate-300">
                  <CheckCircle className="w-5 h-5 text-violet-400 mt-0.5 flex-shrink-0" />
                  Deploy autonomous security agents and SOAR systems
                </li>
                <li className="flex items-start gap-3 text-slate-300">
                  <CheckCircle className="w-5 h-5 text-violet-400 mt-0.5 flex-shrink-0" />
                  Defend against adversarial ML and AI-powered attacks
                </li>
                <li className="flex items-start gap-3 text-slate-300">
                  <CheckCircle className="w-5 h-5 text-violet-400 mt-0.5 flex-shrink-0" />
                  Implement AI governance and ethical frameworks
                </li>
              </ul>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
            >
              <div className="bg-gradient-to-br from-violet-500/10 to-purple-500/10 border border-violet-500/30 rounded-xl p-8 mb-6">
                <div className="text-slate-400 text-sm mb-2">Program Investment</div>
                <div className="text-3xl font-bold text-white mb-2">₹3,25,000</div>
                <div className="text-slate-400 text-sm mb-4">Corporate sponsorship available</div>
                <div className="text-violet-400 text-sm">16 live sessions with AI security pioneers</div>
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
              Program <span className="text-violet-400">Structure</span>
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
                  <span className="text-violet-400 font-bold">Module {i + 1}</span>
                  <span className="px-2 py-1 bg-slate-800 text-slate-400 text-xs rounded">{phase.duration}</span>
                </div>
                <h3 className="text-lg font-display font-bold text-white mb-4">{phase.phase}</h3>
                <ul className="space-y-2">
                  {phase.modules.map((module, j) => (
                    <li key={j} className="flex items-start gap-2 text-slate-400 text-sm">
                      <Target className="w-3 h-3 text-violet-400 mt-1 flex-shrink-0" />
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
                <div className="text-4xl font-bold text-violet-400 mb-2">{stat.value}</div>
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
              Ready to Lead the AI Security Revolution?
            </h2>
            <div className="flex flex-col sm:flex-row justify-center gap-4">
              <Link href="/admissions">
                <Button size="lg" className="bg-violet-500 hover:bg-violet-600 text-white font-bold px-8" data-testid="button-apply-now">
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
