import { motion } from "framer-motion";
import { Link } from "wouter";
import PageLayout from "@/components/PageLayout";
import { Award, Clock, Users, TrendingUp, CheckCircle, ArrowRight, Shield, Server, Bug, Search, Cloud, Network, FileSearch, UserCog } from "lucide-react";

const certificates = [
  {
    slug: "dns-security-specialist",
    title: "DNS Security Specialist",
    duration: "8 Weeks",
    price: "₹75,000",
    icon: Server,
    description: "Master DNS attack vectors and defense strategies with hands-on TCPWave training",
    skills: ["DNS Security", "DNSSEC", "Threat Detection", "TCPWave Platform"],
  },
  {
    slug: "threat-intelligence-analyst",
    title: "Threat Intelligence Analyst",
    duration: "6 Weeks",
    price: "₹65,000",
    icon: Search,
    description: "Learn OSINT, threat hunting, and intelligence analysis for proactive defense",
    skills: ["OSINT", "Threat Hunting", "IOC Analysis", "MITRE ATT&CK"],
  },
  {
    slug: "soc-analyst",
    title: "SOC Analyst",
    duration: "10 Weeks",
    price: "₹85,000",
    icon: Shield,
    description: "Comprehensive SOC training with SIEM, incident response, and threat triage",
    skills: ["SIEM Operations", "Incident Triage", "Log Analysis", "Threat Detection"],
  },
  {
    slug: "incident-responder",
    title: "Incident Responder",
    duration: "8 Weeks",
    price: "₹80,000",
    icon: Bug,
    description: "IR methodology, containment strategies, and post-incident analysis",
    skills: ["IR Lifecycle", "Forensics", "Containment", "Root Cause Analysis"],
  },
  {
    slug: "ethical-hacking",
    title: "Ethical Hacking",
    duration: "12 Weeks",
    price: "₹95,000",
    icon: Network,
    description: "Penetration testing, vulnerability assessment, and bug bounty hunting",
    skills: ["Penetration Testing", "Web App Security", "Network Exploitation", "Bug Bounty"],
  },
  {
    slug: "cloud-security",
    title: "Cloud Security",
    duration: "8 Weeks",
    price: "₹80,000",
    icon: Cloud,
    description: "Secure cloud architectures on AWS, Azure, and GCP",
    skills: ["AWS Security", "Azure Security", "Cloud IAM", "Container Security"],
  },
  {
    slug: "network-defense",
    title: "Network Defense",
    duration: "8 Weeks",
    price: "₹70,000",
    icon: Shield,
    description: "Firewalls, IDS/IPS, network segmentation, and defense-in-depth",
    skills: ["Firewall Config", "IDS/IPS", "Network Segmentation", "Traffic Analysis"],
  },
  {
    slug: "malware-analysis",
    title: "Malware Analysis",
    duration: "10 Weeks",
    price: "₹90,000",
    icon: Bug,
    description: "Static and dynamic malware analysis with reverse engineering",
    skills: ["Static Analysis", "Dynamic Analysis", "Reverse Engineering", "Sandbox Analysis"],
  },
  {
    slug: "digital-forensics",
    title: "Digital Forensics",
    duration: "10 Weeks",
    price: "₹85,000",
    icon: FileSearch,
    description: "Evidence collection, chain of custody, and forensic investigation",
    skills: ["Disk Forensics", "Memory Forensics", "Evidence Handling", "Legal Procedures"],
  },
  {
    slug: "ciso-leadership",
    title: "CISO Leadership",
    duration: "6 Weeks",
    price: "₹1,20,000",
    icon: UserCog,
    description: "Executive program for security leaders on strategy and governance",
    skills: ["Security Strategy", "Risk Management", "Governance", "Board Communication"],
  },
];

const certStats = [
  { value: "10+", label: "Certificate Programs" },
  { value: "2,500+", label: "Certified Professionals" },
  { value: "95%", label: "Completion Rate" },
  { value: "85%", label: "Career Advancement" },
];

export default function Certificates() {
  return (
    <PageLayout
      title="Professional Certificates"
      subtitle="Industry-recognized certifications for cybersecurity career advancement"
      badge="T-SPAN Programs"
      breadcrumbs={[
        { label: "Programs", href: "/programs" },
        { label: "Certificates" },
      ]}
    >
      <section className="py-12">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-4 gap-6">
            {certStats.map((stat, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1 }}
                className="bg-slate-900/50 border border-slate-800 rounded-xl p-6 text-center"
                data-testid={`cert-stat-${i}`}
              >
                <div className="text-3xl font-display font-bold text-primary mb-2">{stat.value}</div>
                <div className="text-slate-400 text-sm">{stat.label}</div>
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
              Choose Your <span className="text-secondary">Specialization</span>
            </h2>
            <p className="text-slate-400 max-w-2xl mx-auto">
              Each certificate includes hands-on labs, real-world projects, and industry certification exam preparation
            </p>
          </motion.div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {certificates.map((cert, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.05 }}
              >
                <Link href={`/programs/certificates/${cert.slug}`}>
                  <div 
                    className="bg-slate-950/80 border border-slate-800 rounded-xl p-6 hover:border-primary/50 transition-all cursor-pointer group h-full"
                    data-testid={`cert-card-${i}`}
                  >
                    <div className="flex items-start justify-between mb-4">
                      <cert.icon className="w-10 h-10 text-primary" />
                      <div className="text-right">
                        <div className="text-xs text-slate-500">{cert.duration}</div>
                        <div className="text-lg font-bold text-cyan-400">{cert.price}</div>
                      </div>
                    </div>
                    <h3 className="text-xl font-display font-bold text-white mb-2 group-hover:text-primary transition-colors">
                      {cert.title}
                    </h3>
                    <p className="text-slate-400 text-sm mb-4">{cert.description}</p>
                    <div className="flex flex-wrap gap-2">
                      {cert.skills.slice(0, 3).map((skill, j) => (
                        <span key={j} className="px-2 py-1 bg-slate-800 text-slate-300 text-xs rounded">
                          {skill}
                        </span>
                      ))}
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
                Why T-SPAN <span className="text-primary">Certificates</span>?
              </h2>
              <ul className="space-y-4">
                <li className="flex items-start gap-3 text-slate-300">
                  <CheckCircle className="w-5 h-5 text-green-400 mt-0.5 flex-shrink-0" />
                  <div>
                    <strong>Hands-on Labs:</strong> 60%+ lab time on real infrastructure, not simulations
                  </div>
                </li>
                <li className="flex items-start gap-3 text-slate-300">
                  <CheckCircle className="w-5 h-5 text-green-400 mt-0.5 flex-shrink-0" />
                  <div>
                    <strong>Industry Instructors:</strong> Learn from practitioners with 10+ years experience
                  </div>
                </li>
                <li className="flex items-start gap-3 text-slate-300">
                  <CheckCircle className="w-5 h-5 text-green-400 mt-0.5 flex-shrink-0" />
                  <div>
                    <strong>Career Support:</strong> Resume review, interview prep, and job placement assistance
                  </div>
                </li>
                <li className="flex items-start gap-3 text-slate-300">
                  <CheckCircle className="w-5 h-5 text-green-400 mt-0.5 flex-shrink-0" />
                  <div>
                    <strong>TCPWave Integration:</strong> Exclusive access to enterprise DDI training
                  </div>
                </li>
                <li className="flex items-start gap-3 text-slate-300">
                  <CheckCircle className="w-5 h-5 text-green-400 mt-0.5 flex-shrink-0" />
                  <div>
                    <strong>Lifetime Access:</strong> Course materials and community access never expires
                  </div>
                </li>
              </ul>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="bg-gradient-to-br from-purple-500/10 to-pink-500/10 border border-purple-500/30 rounded-2xl p-8"
            >
              <Award className="w-16 h-16 text-purple-400 mb-6" />
              <h3 className="text-2xl font-display font-bold text-white mb-4">Not Sure Which to Choose?</h3>
              <p className="text-slate-400 mb-6">
                Take our free career assessment to find the certificate that matches your goals and experience level.
              </p>
              <Link href="/get-started">
                <button 
                  className="w-full px-6 py-4 bg-purple-500 text-white font-bold rounded-lg hover:bg-purple-600 transition-colors"
                  data-testid="button-assessment"
                >
                  Take Career Assessment
                </button>
              </Link>
            </motion.div>
          </div>
        </div>
      </section>
    </PageLayout>
  );
}
