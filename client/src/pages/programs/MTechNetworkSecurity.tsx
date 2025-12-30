import { motion } from "framer-motion";
import { Link } from "wouter";
import PageLayout from "@/components/PageLayout";
import { GraduationCap, Clock, BookOpen, Users, Award, CheckCircle, ArrowRight, Building2 } from "lucide-react";

const programHighlights = [
  { label: "Duration", value: "2 Years", icon: Clock },
  { label: "Credits", value: "72", icon: BookOpen },
  { label: "Mode", value: "Full-time/Part-time", icon: Users },
  { label: "Partner", value: "IIT Kanpur", icon: Building2 },
];

const curriculum = [
  {
    semester: "Semester 1",
    courses: [
      "Advanced Network Security",
      "Cryptography and Network Protocols",
      "Operating System Security",
      "Research Methodology",
    ],
  },
  {
    semester: "Semester 2",
    courses: [
      "Wireless and Mobile Security",
      "Cloud Security Architecture",
      "Penetration Testing",
      "Security Operations",
    ],
  },
  {
    semester: "Semester 3",
    courses: [
      "Advanced Threat Intelligence",
      "Digital Forensics",
      "Elective I",
      "Thesis Work (Part 1)",
    ],
  },
  {
    semester: "Semester 4",
    courses: [
      "Elective II",
      "Industry Project",
      "Thesis Work (Part 2)",
      "Thesis Defense",
    ],
  },
];

const researchAreas = [
  "DNS Security & DDI Infrastructure",
  "AI/ML in Cybersecurity",
  "Zero Trust Architecture",
  "IoT and OT Security",
  "Blockchain Security",
  "Quantum-Safe Cryptography",
];

const eligibility = [
  "B.Tech/B.E. in CS, IT, ECE or equivalent",
  "Minimum 60% aggregate or 6.5 CGPA",
  "Valid GATE score (preferred)",
  "Work experience in IT/Security (bonus)",
];

export default function MTechNetworkSecurity() {
  return (
    <PageLayout
      title="M.Tech Network Security"
      subtitle="Research-focused postgraduate program in collaboration with IIT Kanpur"
      badge="Degree Program"
      breadcrumbs={[
        { label: "Programs", href: "/programs" },
        { label: "M.Tech Network Security" },
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
                The M.Tech in Network Security is a rigorous research-oriented program designed to develop next-generation security researchers and practitioners. In collaboration with IIT Kanpur, this program combines theoretical foundations with hands-on research in cutting-edge security domains.
              </p>
              <p className="text-slate-400 mb-6">
                Students work on real-world security challenges, contribute to published research, and have access to state-of-the-art laboratories including TCPWave's DDI infrastructure and T-SPAN's cyber range.
              </p>
              <div className="bg-slate-950/80 border border-cyan-500/30 rounded-xl p-6">
                <div className="flex items-center gap-4 mb-4">
                  <Award className="w-10 h-10 text-cyan-400" />
                  <div>
                    <div className="text-white font-bold">IIT Kanpur Collaboration</div>
                    <div className="text-slate-400 text-sm">Joint degree with faculty from IIT Kanpur</div>
                  </div>
                </div>
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
            >
              <h3 className="text-xl font-display font-bold text-white mb-6">Eligibility</h3>
              <ul className="space-y-3 mb-8">
                {eligibility.map((item, i) => (
                  <li key={i} className="flex items-start gap-3 text-slate-300">
                    <CheckCircle className="w-5 h-5 text-green-400 mt-0.5 flex-shrink-0" />
                    {item}
                  </li>
                ))}
              </ul>

              <div className="bg-gradient-to-br from-cyan-500/10 to-blue-500/10 border border-cyan-500/30 rounded-xl p-6">
                <div className="text-slate-400 text-sm mb-2">Program Fee</div>
                <div className="text-3xl font-bold text-white mb-2">₹10,00,000</div>
                <div className="text-slate-400 text-sm">Total for 2 years (EMI available)</div>
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
              <span className="text-secondary">Curriculum</span>
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
                <h3 className="text-lg font-display font-bold text-primary mb-4">{sem.semester}</h3>
                <ul className="space-y-2">
                  {sem.courses.map((course, j) => (
                    <li key={j} className="text-slate-300 text-sm flex items-start gap-2">
                      <BookOpen className="w-4 h-4 text-slate-500 mt-0.5 flex-shrink-0" />
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
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-3xl md:text-4xl font-display font-bold text-white mb-4">
              Research <span className="text-primary">Focus Areas</span>
            </h2>
          </motion.div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-4xl mx-auto">
            {researchAreas.map((area, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.05 }}
                className="bg-slate-950/80 border border-slate-800 rounded-lg p-4 text-center"
              >
                <span className="text-slate-300">{area}</span>
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
            className="bg-gradient-to-r from-cyan-500/20 to-purple-500/20 border border-cyan-500/30 rounded-2xl p-12 text-center"
          >
            <GraduationCap className="w-16 h-16 text-cyan-400 mx-auto mb-6" />
            <h2 className="text-3xl md:text-4xl font-display font-bold text-white mb-4">
              Start Your Research Journey
            </h2>
            <p className="text-slate-300 max-w-2xl mx-auto mb-8">
              Applications for the 2025 cohort are now open. Limited seats available.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link href="/admissions/apply">
                <button 
                  className="px-8 py-4 bg-primary text-slate-950 font-bold rounded-lg hover:bg-primary/90 transition-colors"
                  data-testid="button-apply"
                >
                  Apply Now
                </button>
              </Link>
              <Link href="/admissions/requirements">
                <button className="px-8 py-4 bg-slate-800 text-white font-bold rounded-lg hover:bg-slate-700 transition-colors border border-slate-700">
                  View Requirements
                </button>
              </Link>
            </div>
          </motion.div>
        </div>
      </section>
    </PageLayout>
  );
}
