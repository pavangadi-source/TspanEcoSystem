import { motion } from "framer-motion";
import { Link } from "wouter";
import PageLayout from "@/components/PageLayout";
import { Building2, Clock, BookOpen, Users, CheckCircle, TrendingUp, Shield, Globe, Award, Target, Briefcase } from "lucide-react";
import { Button } from "@/components/ui/button";

const programHighlights = [
  { label: "Duration", value: "10 Months", icon: Clock },
  { label: "Format", value: "Weekend Executive", icon: Briefcase },
  { label: "Cohort Size", value: "25 Max", icon: Users },
  { label: "Credential", value: "Executive Certificate", icon: Award },
];

const curriculum = [
  {
    phase: "Enterprise Cyber Risk & Governance",
    duration: "2.5 Months",
    modules: ["Cyber Risk Assessment Frameworks", "Governance Structures", "Regulatory Landscape", "Risk Appetite & Tolerance"],
  },
  {
    phase: "Incident Response Leadership",
    duration: "2.5 Months",
    modules: ["Crisis Management", "Communication Strategies", "Legal & Compliance Response", "Business Continuity"],
  },
  {
    phase: "Vulnerability Management",
    duration: "2.5 Months",
    modules: ["Threat Landscape Analysis", "Vulnerability Prioritization", "Patch Management Strategy", "Third-Party Risk"],
  },
  {
    phase: "Board-Level Decision Making",
    duration: "2.5 Months",
    modules: ["Cyber Metrics for Boards", "Investment Justification", "Executive Reporting", "Capstone Project"],
  },
];

const targetAudience = [
  { role: "CEOs", description: "Leading organizational security posture" },
  { role: "COOs", description: "Operationalizing security initiatives" },
  { role: "VPs", description: "Strategic security planning" },
  { role: "Board Members", description: "Governance and oversight" },
];

const alumniStats = [
  { value: "94%", label: "Board-level confidence" },
  { value: "78%", label: "Improved risk decisions" },
  { value: "100%", label: "Would recommend" },
  { value: "50+", label: "C-suite alumni" },
];

export default function ExecutiveCEO() {
  return (
    <PageLayout
      title="Cybersecurity for C-Suite Executives"
      subtitle="Transform your leadership. Secure your enterprise."
      badge="Executive Program"
      breadcrumbs={[
        { label: "Programs", href: "/executive-programs" },
        { label: "C-Suite Cybersecurity" },
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
                <item.icon className="w-8 h-8 text-amber-400 mx-auto mb-3" />
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
                Lead Security at the <span className="text-amber-400">Executive Level</span>
              </h2>
              <p className="text-slate-400 mb-6">
                This program is designed for C-suite executives who need to understand and lead organizational cybersecurity initiatives. Learn to make informed decisions, communicate effectively with technical teams, and protect enterprise value.
              </p>
              <p className="text-slate-400 mb-6">
                Through case studies, simulations, and peer discussions, gain the strategic perspective needed to navigate today's complex threat landscape.
              </p>
              <ul className="space-y-3">
                <li className="flex items-start gap-3 text-slate-300">
                  <CheckCircle className="w-5 h-5 text-amber-400 mt-0.5 flex-shrink-0" />
                  Enterprise risk quantification and board reporting
                </li>
                <li className="flex items-start gap-3 text-slate-300">
                  <CheckCircle className="w-5 h-5 text-amber-400 mt-0.5 flex-shrink-0" />
                  Crisis simulation exercises with real-world scenarios
                </li>
                <li className="flex items-start gap-3 text-slate-300">
                  <CheckCircle className="w-5 h-5 text-amber-400 mt-0.5 flex-shrink-0" />
                  CISO advisory sessions and peer networking
                </li>
                <li className="flex items-start gap-3 text-slate-300">
                  <CheckCircle className="w-5 h-5 text-amber-400 mt-0.5 flex-shrink-0" />
                  Regulatory compliance deep-dives
                </li>
              </ul>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
            >
              <div className="bg-gradient-to-br from-amber-500/10 to-orange-500/10 border border-amber-500/30 rounded-xl p-8 mb-6">
                <div className="text-slate-400 text-sm mb-2">Program Investment</div>
                <div className="text-3xl font-bold text-white mb-2">₹4,50,000</div>
                <div className="text-slate-400 text-sm mb-4">Corporate sponsorship available</div>
                <div className="text-amber-400 text-sm">24 live sessions with industry experts</div>
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
              Program <span className="text-amber-400">Structure</span>
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
                  <span className="text-amber-400 font-bold">Module {i + 1}</span>
                  <span className="px-2 py-1 bg-slate-800 text-slate-400 text-xs rounded">{phase.duration}</span>
                </div>
                <h3 className="text-lg font-display font-bold text-white mb-4">{phase.phase}</h3>
                <ul className="space-y-2">
                  {phase.modules.map((module, j) => (
                    <li key={j} className="flex items-start gap-2 text-slate-400 text-sm">
                      <Target className="w-3 h-3 text-amber-400 mt-1 flex-shrink-0" />
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
                <div className="text-4xl font-bold text-amber-400 mb-2">{stat.value}</div>
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
              Ready to Lead with Confidence?
            </h2>
            <div className="flex flex-col sm:flex-row justify-center gap-4">
              <Link href="/admissions">
                <Button size="lg" className="bg-amber-500 hover:bg-amber-600 text-black font-bold px-8" data-testid="button-apply-now">
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
