import { motion } from "framer-motion";
import { Link } from "wouter";
import PageLayout from "@/components/PageLayout";
import { Award, BookOpen, Target, Users, Clock, CheckCircle, Brain, FileText, TrendingUp } from "lucide-react";

const domains = [
  {
    number: 1,
    title: "Security and Risk Management",
    weight: "15%",
    topics: ["Governance", "Risk Management", "Compliance", "Business Continuity", "Ethics"],
  },
  {
    number: 2,
    title: "Asset Security",
    weight: "10%",
    topics: ["Data Classification", "Ownership", "Privacy Protection", "Retention Policies"],
  },
  {
    number: 3,
    title: "Security Architecture and Engineering",
    weight: "13%",
    topics: ["Security Models", "Cryptography", "Physical Security", "System Design"],
  },
  {
    number: 4,
    title: "Communication and Network Security",
    weight: "13%",
    topics: ["Network Architecture", "Secure Protocols", "Network Attacks", "Wireless Security"],
  },
  {
    number: 5,
    title: "Identity and Access Management",
    weight: "13%",
    topics: ["Authentication", "Authorization", "Identity Management", "Access Control Models"],
  },
  {
    number: 6,
    title: "Security Assessment and Testing",
    weight: "12%",
    topics: ["Vulnerability Assessment", "Penetration Testing", "Security Audits", "Log Analysis"],
  },
  {
    number: 7,
    title: "Security Operations",
    weight: "13%",
    topics: ["Incident Response", "Disaster Recovery", "Forensics", "Secure Operations"],
  },
  {
    number: 8,
    title: "Software Development Security",
    weight: "11%",
    topics: ["SDLC Security", "Application Vulnerabilities", "Secure Coding", "Testing Methods"],
  },
];

const programFeatures = [
  { icon: BookOpen, title: "653+ Practice Questions", description: "Comprehensive question bank with detailed explanations" },
  { icon: Brain, title: "Adaptive Learning", description: "AI-powered study recommendations based on your performance" },
  { icon: Target, title: "Exam Simulation", description: "Full-length practice exams matching CAT format" },
  { icon: FileText, title: "Study Materials", description: "Complete domain coverage with case studies" },
];

const examStats = [
  { value: "3-4 hrs", label: "Exam Duration" },
  { value: "125-175", label: "Questions (CAT)" },
  { value: "700/1000", label: "Passing Score" },
  { value: "5 Years", label: "Experience Required" },
];

const sampleQuestions = [
  {
    question: "Which of the following is MOST important when assigning ownership of an asset?",
    options: ["Report to business owner", "Periodically reviewed", "Individual accountability", "Member training"],
    correct: "Periodically reviewed",
  },
  {
    question: "What principle of defense in depth requires balanced focus on which elements?",
    options: ["Development, testing, deployment", "Prevention, detection, remediation", "People, technology, operations", "Certification, accreditation"],
    correct: "People, technology, operations",
  },
];

export default function CISSPPrep() {
  return (
    <PageLayout
      title="CISSP Certification Prep"
      subtitle="Comprehensive preparation for ISC2 Certified Information Systems Security Professional"
      badge="Certification Prep"
      breadcrumbs={[
        { label: "Courses", href: "/courses" },
        { label: "CISSP Prep" },
      ]}
    >
      <section className="py-12">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-4 gap-6 mb-12">
            {[
              { label: "Duration", value: "12 Weeks", icon: Clock },
              { label: "Practice Tests", value: "15+", icon: Target },
              { label: "Pass Rate", value: "92%", icon: TrendingUp },
              { label: "Price", value: "₹95,000", icon: Award },
            ].map((item, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1 }}
                className="bg-slate-900/50 border border-slate-800 rounded-xl p-6 text-center"
                data-testid={`stat-${i}`}
              >
                <item.icon className="w-8 h-8 text-amber-400 mx-auto mb-3" />
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
                About <span className="text-primary">CISSP</span>
              </h2>
              <p className="text-slate-400 mb-6">
                The CISSP (Certified Information Systems Security Professional) is the world's premier cybersecurity certification. Recognized globally, it validates your expertise across eight domains of information security and opens doors to senior security roles.
              </p>
              <p className="text-slate-400 mb-6">
                Our comprehensive 12-week program covers all eight CISSP domains with 653+ practice questions, exam simulations, and expert instruction from certified professionals.
              </p>

              <div className="grid grid-cols-2 gap-4 mb-8">
                {examStats.map((stat, i) => (
                  <div key={i} className="bg-slate-900/50 border border-slate-800 rounded-lg p-4 text-center">
                    <div className="text-xl font-bold text-amber-400">{stat.value}</div>
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
              <h3 className="text-xl font-display font-bold text-white mb-6">Program Features</h3>
              <div className="space-y-4">
                {programFeatures.map((feature, i) => (
                  <div key={i} className="flex items-start gap-4 bg-slate-900/50 border border-slate-800 rounded-lg p-4">
                    <feature.icon className="w-8 h-8 text-amber-400 flex-shrink-0" />
                    <div>
                      <div className="text-white font-medium">{feature.title}</div>
                      <div className="text-slate-400 text-sm">{feature.description}</div>
                    </div>
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
              8 CISSP <span className="text-secondary">Domains</span>
            </h2>
            <p className="text-slate-400 max-w-2xl mx-auto">
              Master all eight domains with our structured curriculum
            </p>
          </motion.div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {domains.map((domain, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.05 }}
                className="bg-slate-950/80 border border-slate-800 rounded-xl p-6"
              >
                <div className="flex items-center justify-between mb-3">
                  <span className="w-8 h-8 bg-amber-500 text-slate-950 rounded-full flex items-center justify-center font-bold text-sm">
                    {domain.number}
                  </span>
                  <span className="text-amber-400 text-sm font-bold">{domain.weight}</span>
                </div>
                <h3 className="text-white font-bold text-sm mb-3">{domain.title}</h3>
                <div className="flex flex-wrap gap-1">
                  {domain.topics.slice(0, 3).map((topic, j) => (
                    <span key={j} className="px-2 py-1 bg-slate-800 text-slate-400 text-xs rounded">
                      {topic}
                    </span>
                  ))}
                </div>
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
            className="text-center mb-12"
          >
            <h2 className="text-3xl md:text-4xl font-display font-bold text-white mb-4">
              Sample <span className="text-primary">Questions</span>
            </h2>
          </motion.div>

          <div className="max-w-3xl mx-auto space-y-6">
            {sampleQuestions.map((q, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1 }}
                className="bg-slate-900/50 border border-slate-800 rounded-xl p-6"
              >
                <p className="text-white font-medium mb-4">{q.question}</p>
                <div className="grid grid-cols-2 gap-3">
                  {q.options.map((option, j) => (
                    <div
                      key={j}
                      className={`px-4 py-2 rounded-lg text-sm ${
                        option === q.correct
                          ? "bg-green-500/20 text-green-400 border border-green-500/30"
                          : "bg-slate-800 text-slate-400"
                      }`}
                    >
                      {String.fromCharCode(65 + j)}. {option}
                    </div>
                  ))}
                </div>
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
            <Award className="w-16 h-16 text-amber-400 mx-auto mb-6" />
            <h2 className="text-3xl md:text-4xl font-display font-bold text-white mb-4">
              Pass CISSP on Your First Attempt
            </h2>
            <p className="text-slate-300 max-w-2xl mx-auto mb-8">
              Join our 92% first-attempt pass rate. Includes exam voucher and pass guarantee.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link href="/admissions/apply">
                <button 
                  className="px-8 py-4 bg-amber-500 text-slate-950 font-bold rounded-lg hover:bg-amber-400 transition-colors"
                  data-testid="button-enroll"
                >
                  Enroll Now - ₹95,000
                </button>
              </Link>
              <Link href="/schedule-demo">
                <button className="px-8 py-4 bg-slate-800 text-white font-bold rounded-lg hover:bg-slate-700 transition-colors border border-slate-700">
                  Free Practice Test
                </button>
              </Link>
            </div>
          </motion.div>
        </div>
      </section>
    </PageLayout>
  );
}
