import { motion } from "framer-motion";
import { GraduationCap, Award, Clock, Users, BookOpen, ArrowRight, Shield, Server, Brain } from "lucide-react";
import { Link } from "wouter";
import PageLayout from "@/components/PageLayout";

const degreePrograms = [
  {
    title: "Master's in Cybersecurity",
    duration: "2 Years",
    credits: "60 Credits",
    description: "Comprehensive graduate program covering all aspects of cybersecurity from policy to practice.",
    href: "/programs/masters-cybersecurity",
    color: "from-blue-500 to-indigo-600"
  },
  {
    title: "M.Tech Network Security",
    duration: "2 Years",
    credits: "68 Credits",
    description: "Technical depth in network defense, DDI infrastructure, and enterprise security architecture.",
    href: "/programs/mtech-network-security",
    color: "from-purple-500 to-pink-600"
  },
  {
    title: "PG Diploma Cyber Defense",
    duration: "1 Year",
    credits: "36 Credits",
    description: "Intensive program for working professionals seeking rapid entry into cybersecurity.",
    href: "/programs/pgdiploma-cyber-defense",
    color: "from-cyan-500 to-teal-600"
  },
  {
    title: "Executive MBA Cybersecurity",
    duration: "18 Months",
    credits: "45 Credits",
    description: "Business leadership program for CISOs and security executives.",
    href: "/programs/executive-mba-cybersecurity",
    color: "from-orange-500 to-red-600"
  },
];

const certificationTracks = [
  { name: "DNS Security Specialist", duration: "8 Weeks", href: "/programs/certificates/dns-security-specialist" },
  { name: "Threat Intelligence Analyst", duration: "6 Weeks", href: "/programs/certificates/threat-intelligence-analyst" },
  { name: "SOC Analyst", duration: "10 Weeks", href: "/programs/certificates/soc-analyst" },
  { name: "Incident Responder", duration: "8 Weeks", href: "/programs/certificates/incident-responder" },
  { name: "Ethical Hacking", duration: "12 Weeks", href: "/programs/certificates/ethical-hacking" },
  { name: "Cloud Security", duration: "8 Weeks", href: "/programs/certificates/cloud-security" },
];

const tcpwaveCerts = [
  { name: "TCPWave Certified Administrator", level: "Foundation", href: "/programs/tcpwave-certifications/tcpwave-certified-administrator" },
  { name: "TCPWave Certified Engineer", level: "Professional", href: "/programs/tcpwave-certifications/tcpwave-certified-engineer" },
  { name: "TCPWave Certified Architect", level: "Expert", href: "/programs/tcpwave-certifications/tcpwave-certified-architect" },
  { name: "TCPWave DNS Security Expert", level: "Specialist", href: "/programs/tcpwave-certifications/tcpwave-dns-security-expert" },
];

export default function Programs() {
  return (
    <PageLayout
      title="Academic Programs"
      subtitle="World-class cybersecurity education from foundation to mastery"
      badge="T-SPAN Programs"
      breadcrumbs={[{ label: "Programs" }]}
    >
      <section className="py-20 bg-slate-900/50">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-3xl md:text-4xl font-display font-bold text-white mb-4">
              Degree <span className="text-primary">Programs</span>
            </h2>
            <p className="text-slate-400 max-w-2xl mx-auto">
              Joint credentials with BITS Pilani, recognized globally for cybersecurity excellence
            </p>
          </motion.div>

          <div className="grid md:grid-cols-2 gap-8">
            {degreePrograms.map((program, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1 }}
              >
                <Link href={program.href}>
                  <div 
                    className="relative bg-slate-950/80 border border-slate-800 rounded-2xl p-8 overflow-hidden group hover:border-slate-700 transition-all cursor-pointer h-full"
                    data-testid={`card-program-${i}`}
                  >
                    <div className={`absolute top-0 left-0 w-full h-1 bg-gradient-to-r ${program.color}`} />
                    <div className="flex items-start justify-between mb-4">
                      <GraduationCap className="w-10 h-10 text-primary" />
                      <div className="flex gap-2">
                        <span className="px-3 py-1 bg-slate-800 text-slate-300 text-xs rounded-full">{program.duration}</span>
                        <span className="px-3 py-1 bg-slate-800 text-slate-300 text-xs rounded-full">{program.credits}</span>
                      </div>
                    </div>
                    <h3 className="text-xl font-display font-bold text-white mb-3 group-hover:text-primary transition-colors">{program.title}</h3>
                    <p className="text-slate-400 mb-4">{program.description}</p>
                    <div className="flex items-center gap-2 text-primary text-sm font-medium">
                      Learn More <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                    </div>
                  </div>
                </Link>
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
            className="text-center mb-16"
          >
            <h2 className="text-3xl md:text-4xl font-display font-bold text-white mb-4">
              Professional <span className="text-secondary">Certificates</span>
            </h2>
            <p className="text-slate-400 max-w-2xl mx-auto">
              Fast-track your career with industry-recognized certifications
            </p>
          </motion.div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 mb-12">
            {certificationTracks.map((cert, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.05 }}
              >
                <Link href={cert.href}>
                  <div 
                    className="bg-slate-900/50 border border-slate-800 rounded-xl p-6 hover:border-primary/50 transition-all cursor-pointer group"
                    data-testid={`card-certificate-${i}`}
                  >
                    <div className="flex items-center justify-between mb-4">
                      <Award className="w-8 h-8 text-primary" />
                      <span className="text-slate-500 text-sm">{cert.duration}</span>
                    </div>
                    <h4 className="text-lg font-display font-bold text-white group-hover:text-primary transition-colors">{cert.name}</h4>
                  </div>
                </Link>
              </motion.div>
            ))}
          </div>

          <div className="text-center">
            <Link href="/programs/certificates">
              <button 
                className="px-6 py-3 bg-slate-800 text-white font-bold rounded-lg hover:bg-slate-700 transition-colors border border-slate-700"
                data-testid="button-view-all-certificates"
              >
                View All Certificates
              </button>
            </Link>
          </div>
        </div>
      </section>

      <section className="py-20 bg-gradient-to-r from-cyan-500/10 to-blue-500/10 border-y border-slate-800">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-3xl md:text-4xl font-display font-bold text-white mb-4">
              TCPWave <span className="text-primary">Certifications</span>
            </h2>
            <p className="text-slate-400 max-w-2xl mx-auto">
              Official vendor certifications for DDI infrastructure professionals
            </p>
          </motion.div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {tcpwaveCerts.map((cert, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1 }}
              >
                <Link href={cert.href}>
                  <div className="bg-slate-950/80 border border-cyan-500/30 rounded-xl p-6 hover:border-cyan-500/50 transition-all cursor-pointer group text-center">
                    <Server className="w-10 h-10 text-cyan-500 mx-auto mb-4" />
                    <h4 className="text-lg font-display font-bold text-white mb-2 group-hover:text-cyan-400 transition-colors">{cert.name}</h4>
                    <span className="text-cyan-400 text-sm">{cert.level}</span>
                  </div>
                </Link>
              </motion.div>
            ))}
          </div>
        </div>
      </section>
    </PageLayout>
  );
}
