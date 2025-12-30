import { motion } from "framer-motion";
import { Link } from "wouter";
import PageLayout from "@/components/PageLayout";
import { Shield, Clock, BookOpen, Users, CheckCircle, Code, Cloud, Lock, Award, Target, Briefcase } from "lucide-react";
import { Button } from "@/components/ui/button";

const programHighlights = [
  { label: "Duration", value: "8 Months", icon: Clock },
  { label: "Format", value: "Weekend Executive", icon: Briefcase },
  { label: "Cohort Size", value: "30 Max", icon: Users },
  { label: "Credential", value: "Executive Certificate", icon: Award },
];

const curriculum = [
  {
    phase: "Security Architecture Design",
    duration: "2 Months",
    modules: ["Zero Trust Architecture", "Defense in Depth", "Identity & Access Management", "Network Security Design"],
  },
  {
    phase: "Cloud & Infrastructure Security",
    duration: "2 Months",
    modules: ["Multi-Cloud Security", "Container Security", "Kubernetes Hardening", "Infrastructure as Code Security"],
  },
  {
    phase: "Data Privacy Governance",
    duration: "2 Months",
    modules: ["GDPR & Data Protection", "Privacy by Design", "Data Classification", "Cross-Border Data Flows"],
  },
  {
    phase: "Secure SDLC Implementation",
    duration: "2 Months",
    modules: ["DevSecOps Practices", "Security Testing", "Threat Modeling", "Secure Code Review"],
  },
];

const targetAudience = [
  { role: "CTOs", description: "Technical security strategy" },
  { role: "VPs of Engineering", description: "Secure development practices" },
  { role: "Technical Directors", description: "Architecture leadership" },
  { role: "Principal Engineers", description: "Security design patterns" },
];

const alumniStats = [
  { value: "89%", label: "Security posture improved" },
  { value: "65%", label: "Reduced vulnerabilities" },
  { value: "100%", label: "Would recommend" },
  { value: "120+", label: "Technical leader alumni" },
];

export default function ExecutiveTechnicalLeaders() {
  return (
    <PageLayout
      title="Cybersecurity for Technical Leaders"
      subtitle="Strategic security for the modern CTO"
      badge="Executive Program"
      breadcrumbs={[
        { label: "Programs", href: "/executive-programs" },
        { label: "Technical Leaders" },
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
                <item.icon className="w-8 h-8 text-cyan-400 mx-auto mb-3" />
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
                Build <span className="text-cyan-400">Secure Systems</span> at Scale
              </h2>
              <p className="text-slate-400 mb-6">
                This program equips technical leaders with the strategic knowledge and practical skills to design, implement, and govern secure systems. Learn to balance security with innovation and lead technical teams in building resilient architectures.
              </p>
              <p className="text-slate-400 mb-6">
                Through hands-on labs, architecture reviews, and case studies from leading tech companies, develop the expertise to secure modern cloud-native environments.
              </p>
              <ul className="space-y-3">
                <li className="flex items-start gap-3 text-slate-300">
                  <CheckCircle className="w-5 h-5 text-cyan-400 mt-0.5 flex-shrink-0" />
                  Cloud security architecture for AWS, Azure, and GCP
                </li>
                <li className="flex items-start gap-3 text-slate-300">
                  <CheckCircle className="w-5 h-5 text-cyan-400 mt-0.5 flex-shrink-0" />
                  Secure SDLC implementation and DevSecOps pipelines
                </li>
                <li className="flex items-start gap-3 text-slate-300">
                  <CheckCircle className="w-5 h-5 text-cyan-400 mt-0.5 flex-shrink-0" />
                  Threat modeling workshops with industry experts
                </li>
                <li className="flex items-start gap-3 text-slate-300">
                  <CheckCircle className="w-5 h-5 text-cyan-400 mt-0.5 flex-shrink-0" />
                  Privacy engineering and compliance frameworks
                </li>
              </ul>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
            >
              <div className="bg-gradient-to-br from-cyan-500/10 to-blue-500/10 border border-cyan-500/30 rounded-xl p-8 mb-6">
                <div className="text-slate-400 text-sm mb-2">Program Investment</div>
                <div className="text-3xl font-bold text-white mb-2">₹3,75,000</div>
                <div className="text-slate-400 text-sm mb-4">Corporate sponsorship available</div>
                <div className="text-cyan-400 text-sm">20 live sessions with cloud security experts</div>
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
              Program <span className="text-cyan-400">Structure</span>
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
                  <span className="text-cyan-400 font-bold">Module {i + 1}</span>
                  <span className="px-2 py-1 bg-slate-800 text-slate-400 text-xs rounded">{phase.duration}</span>
                </div>
                <h3 className="text-lg font-display font-bold text-white mb-4">{phase.phase}</h3>
                <ul className="space-y-2">
                  {phase.modules.map((module, j) => (
                    <li key={j} className="flex items-start gap-2 text-slate-400 text-sm">
                      <Target className="w-3 h-3 text-cyan-400 mt-1 flex-shrink-0" />
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
                <div className="text-4xl font-bold text-cyan-400 mb-2">{stat.value}</div>
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
              Ready to Architect Secure Systems?
            </h2>
            <div className="flex flex-col sm:flex-row justify-center gap-4">
              <Link href="/admissions">
                <Button size="lg" className="bg-cyan-500 hover:bg-cyan-600 text-black font-bold px-8" data-testid="button-apply-now">
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
