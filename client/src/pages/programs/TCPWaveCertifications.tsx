import { motion } from "framer-motion";
import { Link } from "wouter";
import PageLayout from "@/components/PageLayout";
import { Award, Server, Shield, Users, CheckCircle, ArrowRight, Building2, TrendingUp } from "lucide-react";

const certifications = [
  {
    slug: "tcpwave-certified-administrator",
    title: "TCPWave Certified Administrator",
    level: "Foundation",
    duration: "3 Days",
    price: "₹45,000",
    color: "from-green-500/20 to-emerald-500/20",
    borderColor: "border-green-500/30",
    description: "Master the fundamentals of TCPWave DDI platform administration",
    topics: [
      "Platform Architecture Overview",
      "DNS Zone Management",
      "DHCP Scope Configuration",
      "Basic IPAM Operations",
      "User & Role Management",
      "Basic Troubleshooting",
    ],
    prerequisites: "Basic networking knowledge",
    examFormat: "60 questions, 90 minutes, 70% passing score",
  },
  {
    slug: "tcpwave-certified-engineer",
    title: "TCPWave Certified Engineer",
    level: "Professional",
    duration: "5 Days",
    price: "₹75,000",
    color: "from-blue-500/20 to-cyan-500/20",
    borderColor: "border-blue-500/30",
    description: "Advanced configuration, automation, and integration capabilities",
    topics: [
      "Advanced DNS Features",
      "DNSSEC Implementation",
      "API Automation",
      "Ansible/Terraform Integration",
      "High Availability Setup",
      "Performance Optimization",
    ],
    prerequisites: "TCA certification or equivalent experience",
    examFormat: "75 questions + lab scenario, 120 minutes, 75% passing score",
  },
  {
    slug: "tcpwave-certified-architect",
    title: "TCPWave Certified Architect",
    level: "Expert",
    duration: "5 Days",
    price: "₹1,00,000",
    color: "from-purple-500/20 to-pink-500/20",
    borderColor: "border-purple-500/30",
    description: "Enterprise architecture, design, and strategic implementation",
    topics: [
      "Enterprise Architecture Design",
      "Multi-Site Deployments",
      "Disaster Recovery Planning",
      "Security Architecture",
      "Migration Strategies",
      "Capacity Planning",
    ],
    prerequisites: "TCE certification + 2 years DDI experience",
    examFormat: "Design scenario + oral examination, 180 minutes",
  },
  {
    slug: "tcpwave-dns-security-expert",
    title: "TCPWave DNS Security Expert",
    level: "Specialist",
    duration: "4 Days",
    price: "₹85,000",
    color: "from-red-500/20 to-orange-500/20",
    borderColor: "border-red-500/30",
    description: "Deep expertise in DNS security threats and TCPWave protections",
    topics: [
      "DNS Attack Vectors",
      "Threat Intelligence Integration",
      "Security Policy Configuration",
      "Incident Response for DNS",
      "Compliance & Auditing",
      "Advanced Threat Detection",
    ],
    prerequisites: "TCE certification or security background",
    examFormat: "60 questions + security scenario, 120 minutes, 80% passing score",
  },
];

const certPath = [
  { level: "Foundation", name: "TCA", description: "Administrator basics" },
  { level: "Professional", name: "TCE", description: "Engineering skills" },
  { level: "Expert", name: "TCA-Arch", description: "Architecture mastery" },
];

const benefits = [
  "Official TCPWave vendor certification",
  "Globally recognized credentials",
  "Access to TCPWave partner network",
  "Priority job matching with TCPWave customers",
  "Certification badge for LinkedIn",
  "Annual certification renewal with updates",
];

export default function TCPWaveCertifications() {
  return (
    <PageLayout
      title="TCPWave Certifications"
      subtitle="Official vendor certifications for DDI infrastructure professionals"
      badge="TCPWave"
      breadcrumbs={[
        { label: "Programs", href: "/programs" },
        { label: "TCPWave Certifications" },
      ]}
    >
      <section className="py-12">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="bg-gradient-to-r from-cyan-500/10 to-blue-500/10 border border-cyan-500/30 rounded-2xl p-8 mb-12"
          >
            <div className="flex flex-col md:flex-row items-center justify-between gap-8">
              <div className="flex items-center gap-6">
                <Server className="w-16 h-16 text-cyan-400" />
                <div>
                  <h2 className="text-2xl font-display font-bold text-white">Official TCPWave Training Partner</h2>
                  <p className="text-slate-400">T-SPAN is the exclusive training partner for TCPWave certifications in India</p>
                </div>
              </div>
              <div className="flex items-center gap-4">
                <div className="text-center">
                  <div className="text-3xl font-bold text-cyan-400">1,200+</div>
                  <div className="text-slate-400 text-sm">Certified Professionals</div>
                </div>
              </div>
            </div>
          </motion.div>
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
              Certification <span className="text-primary">Programs</span>
            </h2>
          </motion.div>

          <div className="grid md:grid-cols-2 gap-8">
            {certifications.map((cert, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1 }}
              >
                <Link href={`/programs/tcpwave-certifications/${cert.slug}`}>
                  <div 
                    className={`bg-gradient-to-br ${cert.color} border ${cert.borderColor} rounded-2xl p-8 hover:scale-105 transition-all cursor-pointer h-full`}
                    data-testid={`cert-${i}`}
                  >
                    <div className="flex items-start justify-between mb-4">
                      <span className="px-3 py-1 bg-slate-950/50 text-white text-xs font-bold rounded-full">
                        {cert.level}
                      </span>
                      <div className="text-right">
                        <div className="text-xs text-slate-400">{cert.duration}</div>
                        <div className="text-lg font-bold text-cyan-400">{cert.price}</div>
                      </div>
                    </div>
                    <h3 className="text-xl font-display font-bold text-white mb-3">{cert.title}</h3>
                    <p className="text-slate-300 text-sm mb-4">{cert.description}</p>
                    <div className="space-y-4">
                      <div>
                        <div className="text-slate-400 text-xs mb-2">Key Topics:</div>
                        <div className="grid grid-cols-2 gap-1">
                          {cert.topics.slice(0, 4).map((topic, j) => (
                            <div key={j} className="text-slate-300 text-xs flex items-center gap-1">
                              <CheckCircle className="w-3 h-3 text-green-400" />
                              {topic}
                            </div>
                          ))}
                        </div>
                      </div>
                      <div className="flex items-center gap-2 text-cyan-400 text-sm font-medium pt-2 border-t border-slate-700">
                        View Details <ArrowRight className="w-4 h-4" />
                      </div>
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
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
            >
              <h2 className="text-3xl font-display font-bold text-white mb-6">
                Certification <span className="text-secondary">Benefits</span>
              </h2>
              <ul className="space-y-4">
                {benefits.map((benefit, i) => (
                  <li key={i} className="flex items-start gap-3 text-slate-300">
                    <CheckCircle className="w-5 h-5 text-cyan-400 mt-0.5 flex-shrink-0" />
                    {benefit}
                  </li>
                ))}
              </ul>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
            >
              <h3 className="text-xl font-display font-bold text-white mb-6">Certification Path</h3>
              <div className="space-y-4">
                {certPath.map((step, i) => (
                  <div key={i} className="flex items-center gap-4">
                    <div className="w-12 h-12 bg-gradient-to-br from-cyan-500 to-blue-500 rounded-full flex items-center justify-center text-white font-bold">
                      {i + 1}
                    </div>
                    <div className="flex-1 bg-slate-900/50 border border-slate-800 rounded-lg p-4">
                      <div className="flex justify-between items-center">
                        <div>
                          <div className="text-white font-bold">{step.name}</div>
                          <div className="text-slate-400 text-sm">{step.description}</div>
                        </div>
                        <span className="px-2 py-1 bg-slate-800 text-slate-300 text-xs rounded">{step.level}</span>
                      </div>
                    </div>
                    {i < certPath.length - 1 && <ArrowRight className="w-5 h-5 text-slate-600" />}
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
            className="bg-gradient-to-r from-cyan-500/20 to-blue-500/20 border border-cyan-500/30 rounded-2xl p-12 text-center"
          >
            <Award className="w-16 h-16 text-cyan-400 mx-auto mb-6" />
            <h2 className="text-3xl md:text-4xl font-display font-bold text-white mb-4">
              Ready to Get Certified?
            </h2>
            <p className="text-slate-300 max-w-2xl mx-auto mb-8">
              Join thousands of DDI professionals who have advanced their careers with TCPWave certification.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link href="/schedule-demo">
                <button 
                  className="px-8 py-4 bg-primary text-slate-950 font-bold rounded-lg hover:bg-primary/90 transition-colors"
                  data-testid="button-schedule-training"
                >
                  Schedule Training
                </button>
              </Link>
              <Link href="/corporate/request-proposal">
                <button className="px-8 py-4 bg-slate-800 text-white font-bold rounded-lg hover:bg-slate-700 transition-colors border border-slate-700">
                  Corporate Training
                </button>
              </Link>
            </div>
          </motion.div>
        </div>
      </section>
    </PageLayout>
  );
}
