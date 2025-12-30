import { motion } from "framer-motion";
import { GraduationCap, Clock, Award, Users, BookOpen, CheckCircle, Calendar, DollarSign } from "lucide-react";
import { Link } from "wouter";
import PageLayout from "@/components/PageLayout";

const programHighlights = [
  { icon: Clock, label: "Duration", value: "2 Years (4 Semesters)" },
  { icon: Award, label: "Credits", value: "60 Credits" },
  { icon: Users, label: "Class Size", value: "30 Students" },
  { icon: Calendar, label: "Next Intake", value: "August 2025" },
];

const curriculum = [
  {
    semester: "Semester 1",
    courses: [
      "Foundations of Cybersecurity",
      "Network Security Fundamentals",
      "Cryptography & Data Protection",
      "Security Operations Center Basics",
    ]
  },
  {
    semester: "Semester 2",
    courses: [
      "Advanced Network Defense",
      "DDI Infrastructure Security",
      "Threat Intelligence Analysis",
      "Incident Response & Forensics",
    ]
  },
  {
    semester: "Semester 3",
    courses: [
      "Cloud Security Architecture",
      "Application Security",
      "Ethical Hacking & Penetration Testing",
      "Security Governance & Risk",
    ]
  },
  {
    semester: "Semester 4",
    courses: [
      "Capstone Project",
      "Industry Internship",
      "Advanced Topics in Cybersecurity",
      "Leadership & Communication",
    ]
  },
];

const eligibility = [
  "Bachelor's degree in Computer Science, IT, or related field",
  "Minimum 3.0 GPA or equivalent",
  "Valid GRE/GATE scores (waived for professionals with 3+ years experience)",
  "English proficiency (TOEFL/IELTS for international students)",
];

const careerOutcomes = [
  { role: "Security Analyst", salary: "₹12-18 LPA" },
  { role: "Security Engineer", salary: "₹15-25 LPA" },
  { role: "Security Architect", salary: "₹25-40 LPA" },
  { role: "CISO", salary: "₹50+ LPA" },
];

export default function MastersCybersecurity() {
  return (
    <PageLayout
      title="Master's in Cybersecurity"
      subtitle="Comprehensive graduate program preparing next-generation security leaders"
      badge="MS Cybersecurity"
      breadcrumbs={[{ label: "Programs", href: "/programs" }, { label: "Master's in Cybersecurity" }]}
    >
      <section className="py-20 bg-slate-900/50">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-4 gap-6 mb-16">
            {programHighlights.map((item, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1 }}
                className="bg-slate-950/80 border border-slate-800 rounded-xl p-6 text-center"
              >
                <item.icon className="w-10 h-10 text-primary mx-auto mb-4" />
                <div className="text-slate-400 text-sm mb-1">{item.label}</div>
                <div className="text-xl font-display font-bold text-white">{item.value}</div>
              </motion.div>
            ))}
          </div>

          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="bg-gradient-to-r from-blue-500/10 to-indigo-500/10 border border-blue-500/30 rounded-2xl p-8 md:p-12"
          >
            <div className="flex flex-col md:flex-row items-center gap-8">
              <div className="flex-shrink-0">
                <div className="w-24 h-24 rounded-2xl bg-blue-500/20 border border-blue-500/30 flex items-center justify-center">
                  <GraduationCap className="w-12 h-12 text-blue-400" />
                </div>
              </div>
              <div>
                <h3 className="text-2xl font-display font-bold text-white mb-4">
                  Joint Credential with BITS Pilani
                </h3>
                <p className="text-slate-300 leading-relaxed">
                  This program is offered in partnership with BITS Pilani, one of India's premier engineering institutions. 
                  Graduates receive a degree jointly certified by T-SPAN University and BITS Pilani, recognized globally 
                  for academic excellence and industry relevance.
                </p>
              </div>
            </div>
          </motion.div>
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
              <span className="text-primary">Curriculum</span>
            </h2>
          </motion.div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {curriculum.map((sem, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1 }}
                className="bg-slate-900/50 border border-slate-800 rounded-xl p-6"
              >
                <h4 className="text-lg font-display font-bold text-primary mb-4">{sem.semester}</h4>
                <ul className="space-y-3">
                  {sem.courses.map((course, j) => (
                    <li key={j} className="flex items-start gap-2 text-slate-300 text-sm">
                      <BookOpen className="w-4 h-4 text-slate-500 flex-shrink-0 mt-0.5" />
                      {course}
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
          <div className="grid md:grid-cols-2 gap-12">
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
            >
              <h2 className="text-2xl font-display font-bold text-white mb-6">
                Eligibility Requirements
              </h2>
              <ul className="space-y-4">
                {eligibility.map((req, i) => (
                  <li key={i} className="flex items-start gap-3 text-slate-300">
                    <CheckCircle className="w-5 h-5 text-primary flex-shrink-0 mt-0.5" />
                    {req}
                  </li>
                ))}
              </ul>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
            >
              <h2 className="text-2xl font-display font-bold text-white mb-6">
                Career Outcomes
              </h2>
              <div className="space-y-4">
                {careerOutcomes.map((outcome, i) => (
                  <div key={i} className="flex items-center justify-between p-4 bg-slate-950/80 border border-slate-800 rounded-xl">
                    <span className="text-white font-medium">{outcome.role}</span>
                    <span className="text-primary font-mono">{outcome.salary}</span>
                  </div>
                ))}
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      <section className="py-20 bg-gradient-to-r from-primary/10 to-secondary/10 border-y border-slate-800">
        <div className="container mx-auto px-4 text-center">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            <h2 className="text-3xl font-display font-bold text-white mb-4">
              Tuition & Fees
            </h2>
            <div className="flex items-baseline justify-center gap-2 mb-6">
              <span className="text-5xl font-display font-bold text-primary">₹8,00,000</span>
              <span className="text-slate-400">total program cost</span>
            </div>
            <p className="text-slate-400 max-w-2xl mx-auto mb-8">
              Scholarships available for meritorious students. EMI options and education loans facilitated.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link href="/admissions/apply">
                <button className="px-6 py-3 bg-primary text-slate-950 font-bold rounded-lg hover:bg-primary/90 transition-colors">
                  Apply Now
                </button>
              </Link>
              <Link href="/admissions/scholarships">
                <button className="px-6 py-3 bg-slate-800 text-white font-bold rounded-lg hover:bg-slate-700 transition-colors border border-slate-700">
                  View Scholarships
                </button>
              </Link>
            </div>
          </motion.div>
        </div>
      </section>
    </PageLayout>
  );
}
