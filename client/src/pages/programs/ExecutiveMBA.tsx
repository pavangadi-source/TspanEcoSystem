import { motion } from "framer-motion";
import { Link } from "wouter";
import PageLayout from "@/components/PageLayout";
import { Briefcase, Clock, BookOpen, Users, CheckCircle, TrendingUp, Shield, Globe, Award } from "lucide-react";

const programHighlights = [
  { label: "Duration", value: "18 Months", icon: Clock },
  { label: "Format", value: "Weekend Executive", icon: Briefcase },
  { label: "Cohort Size", value: "25 Max", icon: Users },
  { label: "Credential", value: "Executive MBA", icon: Award },
];

const curriculum = [
  {
    phase: "Phase 1: Business Foundations",
    duration: "3 Months",
    modules: ["Financial Management", "Strategic Management", "Operations & Technology", "Leadership Development"],
  },
  {
    phase: "Phase 2: Cybersecurity Core",
    duration: "6 Months",
    modules: ["Security Governance", "Risk Management Frameworks", "Compliance & Regulations", "Security Architecture"],
  },
  {
    phase: "Phase 3: Executive Skills",
    duration: "6 Months",
    modules: ["Board Communication", "Security Program Building", "Vendor Management", "Crisis Leadership"],
  },
  {
    phase: "Phase 4: Capstone",
    duration: "3 Months",
    modules: ["Strategic Security Project", "Executive Presentation", "Peer Review"],
  },
];

const targetAudience = [
  { role: "Security Managers", description: "Ready for CISO roles" },
  { role: "IT Directors", description: "Expanding to security leadership" },
  { role: "CISOs", description: "Formalizing executive education" },
  { role: "Consultants", description: "Building advisory practices" },
];

const alumniStats = [
  { value: "85%", label: "Promoted within 1 year" },
  { value: "45%", label: "Average salary increase" },
  { value: "92%", label: "Program satisfaction" },
  { value: "200+", label: "CISO alumni network" },
];

export default function ExecutiveMBA() {
  return (
    <PageLayout
      title="Executive MBA in Cybersecurity Management"
      subtitle="Transform your security career with executive business education"
      badge="Executive Program"
      breadcrumbs={[
        { label: "Programs", href: "/programs" },
        { label: "Executive MBA Cybersecurity" },
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
                <item.icon className="w-8 h-8 text-primary mx-auto mb-3" />
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
                Lead Security at the <span className="text-primary">Executive Level</span>
              </h2>
              <p className="text-slate-400 mb-6">
                The Executive MBA in Cybersecurity Management is designed for experienced security professionals ready to move into C-suite roles. This program combines rigorous business education with deep cybersecurity strategy expertise.
              </p>
              <p className="text-slate-400 mb-6">
                Classes meet two weekends per month in an intensive immersion format, allowing senior professionals to continue their careers while advancing their education.
              </p>
              <ul className="space-y-3">
                <li className="flex items-start gap-3 text-slate-300">
                  <CheckCircle className="w-5 h-5 text-green-400 mt-0.5 flex-shrink-0" />
                  World-class faculty from business and security domains
                </li>
                <li className="flex items-start gap-3 text-slate-300">
                  <CheckCircle className="w-5 h-5 text-green-400 mt-0.5 flex-shrink-0" />
                  CISO roundtables with Fortune 500 security leaders
                </li>
                <li className="flex items-start gap-3 text-slate-300">
                  <CheckCircle className="w-5 h-5 text-green-400 mt-0.5 flex-shrink-0" />
                  Board presentation simulation and coaching
                </li>
                <li className="flex items-start gap-3 text-slate-300">
                  <CheckCircle className="w-5 h-5 text-green-400 mt-0.5 flex-shrink-0" />
                  Executive coaching throughout the program
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
                <div className="text-3xl font-bold text-white mb-2">₹15,00,000</div>
                <div className="text-slate-400 text-sm mb-4">Corporate sponsorship available</div>
                <div className="text-amber-400 text-sm">ROI: Average 45% salary increase post-completion</div>
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
              Program <span className="text-secondary">Structure</span>
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
                  <span className="text-primary font-bold">Phase {i + 1}</span>
                  <span className="px-2 py-1 bg-slate-800 text-slate-400 text-xs rounded">{phase.duration}</span>
                </div>
                <h3 className="text-lg font-display font-bold text-white mb-4">{phase.phase.replace(`Phase ${i + 1}: `, '')}</h3>
                <ul className="space-y-2">
                  {phase.modules.map((module, j) => (
                    <li key={j} className="text-slate-400 text-sm flex items-center gap-2">
                      <BookOpen className="w-3 h-3 text-slate-500" />
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
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-3xl md:text-4xl font-display font-bold text-white mb-4">
              Alumni <span className="text-primary">Outcomes</span>
            </h2>
          </motion.div>

          <div className="grid md:grid-cols-4 gap-6">
            {alumniStats.map((stat, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1 }}
                className="bg-gradient-to-br from-amber-500/10 to-orange-500/10 border border-amber-500/30 rounded-xl p-6 text-center"
                data-testid={`alumni-stat-${i}`}
              >
                <div className="text-3xl font-display font-bold text-white mb-2">{stat.value}</div>
                <div className="text-slate-400 text-sm">{stat.label}</div>
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
            className="bg-gradient-to-r from-amber-500/20 to-orange-500/20 border border-amber-500/30 rounded-2xl p-12 text-center"
          >
            <Briefcase className="w-16 h-16 text-amber-400 mx-auto mb-6" />
            <h2 className="text-3xl md:text-4xl font-display font-bold text-white mb-4">
              Next Cohort: April 2025
            </h2>
            <p className="text-slate-300 max-w-2xl mx-auto mb-8">
              Highly selective admission. 10+ years experience required. Apply now for early consideration.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link href="/admissions/apply">
                <button 
                  className="px-8 py-4 bg-amber-500 text-slate-950 font-bold rounded-lg hover:bg-amber-400 transition-colors"
                  data-testid="button-apply"
                >
                  Apply Now
                </button>
              </Link>
              <Link href="/talk-to-expert">
                <button className="px-8 py-4 bg-slate-800 text-white font-bold rounded-lg hover:bg-slate-700 transition-colors border border-slate-700">
                  Talk to Admissions
                </button>
              </Link>
            </div>
          </motion.div>
        </div>
      </section>
    </PageLayout>
  );
}
