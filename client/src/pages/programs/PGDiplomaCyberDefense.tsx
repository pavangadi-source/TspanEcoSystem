import { motion } from "framer-motion";
import { Link } from "wouter";
import PageLayout from "@/components/PageLayout";
import { GraduationCap, Clock, BookOpen, Users, CheckCircle, Calendar, Laptop, Building2 } from "lucide-react";

const programHighlights = [
  { label: "Duration", value: "1 Year", icon: Clock },
  { label: "Mode", value: "Hybrid", icon: Laptop },
  { label: "Weekends", value: "Sat-Sun Classes", icon: Calendar },
  { label: "Partner", value: "BITS Pilani", icon: Building2 },
];

const modules = [
  { title: "Cybersecurity Fundamentals", weeks: 4, topics: ["Security Principles", "Threat Landscape", "Risk Management"] },
  { title: "Network Security", weeks: 4, topics: ["Firewall Config", "IDS/IPS", "VPN Technologies"] },
  { title: "System Security", weeks: 4, topics: ["OS Hardening", "Endpoint Protection", "Patch Management"] },
  { title: "Web Application Security", weeks: 4, topics: ["OWASP Top 10", "Secure Coding", "WAF Deployment"] },
  { title: "Cloud Security", weeks: 4, topics: ["AWS/Azure Security", "Cloud IAM", "Container Security"] },
  { title: "Incident Response", weeks: 4, topics: ["IR Planning", "Forensics Basics", "Recovery Procedures"] },
  { title: "SOC Operations", weeks: 4, topics: ["SIEM Operations", "Threat Hunting", "Alert Triage"] },
  { title: "Governance & Compliance", weeks: 4, topics: ["ISO 27001", "GDPR", "Indian IT Act"] },
  { title: "Capstone Project", weeks: 8, topics: ["Real-world Security Implementation"] },
];

const careerOutcomes = [
  { role: "Security Analyst", salary: "₹8-15 LPA" },
  { role: "SOC Analyst", salary: "₹6-12 LPA" },
  { role: "Security Engineer", salary: "₹12-20 LPA" },
  { role: "Compliance Analyst", salary: "₹7-14 LPA" },
];

export default function PGDiplomaCyberDefense() {
  return (
    <PageLayout
      title="PG Diploma in Cyber Defense"
      subtitle="Intensive practitioner-focused program for working professionals"
      badge="Diploma Program"
      breadcrumbs={[
        { label: "Programs", href: "/programs" },
        { label: "PG Diploma Cyber Defense" },
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
                Program <span className="text-primary">Overview</span>
              </h2>
              <p className="text-slate-400 mb-6">
                The PG Diploma in Cyber Defense is designed for working professionals who want to transition into cybersecurity or upgrade their skills. This intensive 1-year program covers all essential domains of cyber defense with a strong focus on hands-on practice.
              </p>
              <p className="text-slate-400 mb-6">
                Classes are held on weekends (Saturday-Sunday) with a hybrid model combining online sessions and in-person labs at our Hyderabad campus. Industry projects ensure real-world application of skills.
              </p>
              <ul className="space-y-3">
                <li className="flex items-start gap-3 text-slate-300">
                  <CheckCircle className="w-5 h-5 text-green-400 mt-0.5 flex-shrink-0" />
                  Weekend-only schedule for working professionals
                </li>
                <li className="flex items-start gap-3 text-slate-300">
                  <CheckCircle className="w-5 h-5 text-green-400 mt-0.5 flex-shrink-0" />
                  40+ hours of hands-on lab practice
                </li>
                <li className="flex items-start gap-3 text-slate-300">
                  <CheckCircle className="w-5 h-5 text-green-400 mt-0.5 flex-shrink-0" />
                  Real industry projects with partner companies
                </li>
                <li className="flex items-start gap-3 text-slate-300">
                  <CheckCircle className="w-5 h-5 text-green-400 mt-0.5 flex-shrink-0" />
                  BITS Pilani credential on completion
                </li>
              </ul>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
            >
              <div className="bg-gradient-to-br from-purple-500/10 to-pink-500/10 border border-purple-500/30 rounded-xl p-8 mb-6">
                <div className="text-slate-400 text-sm mb-2">Program Fee</div>
                <div className="text-3xl font-bold text-white mb-2">₹3,50,000</div>
                <div className="text-slate-400 text-sm mb-4">EMI options from ₹29,166/month</div>
                <div className="text-green-400 text-sm">Early bird discount: ₹50,000 off</div>
              </div>

              <h3 className="text-xl font-display font-bold text-white mb-4">Career Outcomes</h3>
              <div className="grid grid-cols-2 gap-4">
                {careerOutcomes.map((outcome, i) => (
                  <div key={i} className="bg-slate-900/50 border border-slate-800 rounded-lg p-4">
                    <div className="text-white font-medium">{outcome.role}</div>
                    <div className="text-cyan-400 text-sm">{outcome.salary}</div>
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
              Course <span className="text-secondary">Modules</span>
            </h2>
          </motion.div>

          <div className="grid md:grid-cols-3 gap-6">
            {modules.map((module, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.05 }}
                className="bg-slate-900/50 border border-slate-800 rounded-xl p-6"
              >
                <div className="flex items-center justify-between mb-3">
                  <span className="text-xs text-slate-500">Module {i + 1}</span>
                  <span className="px-2 py-1 bg-slate-800 text-slate-400 text-xs rounded">{module.weeks} weeks</span>
                </div>
                <h3 className="text-lg font-display font-bold text-white mb-3">{module.title}</h3>
                <ul className="space-y-1">
                  {module.topics.map((topic, j) => (
                    <li key={j} className="text-slate-400 text-sm flex items-center gap-2">
                      <div className="w-1.5 h-1.5 bg-primary rounded-full" />
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
            <GraduationCap className="w-16 h-16 text-purple-400 mx-auto mb-6" />
            <h2 className="text-3xl md:text-4xl font-display font-bold text-white mb-4">
              Next Cohort Starts January 2025
            </h2>
            <p className="text-slate-300 max-w-2xl mx-auto mb-8">
              Limited to 30 students per cohort for personalized attention. Apply now to secure your seat.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link href="/admissions/apply">
                <button 
                  className="px-8 py-4 bg-purple-500 text-white font-bold rounded-lg hover:bg-purple-600 transition-colors"
                  data-testid="button-apply"
                >
                  Apply Now
                </button>
              </Link>
              <Link href="/schedule-demo">
                <button className="px-8 py-4 bg-slate-800 text-white font-bold rounded-lg hover:bg-slate-700 transition-colors border border-slate-700">
                  Attend Info Session
                </button>
              </Link>
            </div>
          </motion.div>
        </div>
      </section>
    </PageLayout>
  );
}
