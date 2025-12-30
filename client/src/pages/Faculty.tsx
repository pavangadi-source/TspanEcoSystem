import Navbar from "@/components/Navbar";
import { motion } from "framer-motion";
import { 
  Shield, Users, Award, GraduationCap, 
  Network, Cloud, AlertTriangle, Server, 
  Lock, Globe, Cpu, Database
} from "lucide-react";

const facultyMembers = [
  {
    name: "Dr. Ravin Kumar Jhaala",
    title: "Founder & Director",
    expertise: ["DDI/DNS Security", "Network Architecture", "Sovereign Infrastructure"],
    bio: "20+ years building enterprise DDI solutions. Founded TCPWave, serving 67+ countries. Architect of India's first sovereign DNS security framework.",
    image: "https://api.dicebear.com/7.x/initials/svg?seed=RKJ&backgroundColor=0f172a&textColor=06b6d4",
    icon: Network,
    highlight: "primary",
  },
  {
    name: "Col. Vikram Singh (Retd.)",
    title: "Head of Military Cyber Programs",
    expertise: ["Offensive Security", "Incident Response", "Critical Infrastructure"],
    bio: "Former Head of Indian Army Cyber Command. 25 years in military cyber operations. Led response to multiple nation-state attacks on defense networks.",
    image: "https://api.dicebear.com/7.x/initials/svg?seed=VS&backgroundColor=0f172a&textColor=fbbf24",
    icon: Shield,
    highlight: "secondary",
  },
  {
    name: "Dr. Priya Sharma",
    title: "Director of Threat Intelligence",
    expertise: ["Threat Intelligence", "MISP", "APT Analysis"],
    bio: "Former CERT-In Senior Analyst. Built India's first threat intelligence sharing platform. Published researcher on South Asian APT groups.",
    image: "https://api.dicebear.com/7.x/initials/svg?seed=PS&backgroundColor=0f172a&textColor=a855f7",
    icon: AlertTriangle,
    highlight: "purple",
  },
  {
    name: "Rajesh Menon",
    title: "Cloud Security Architect",
    expertise: ["Cloud Security", "Zero Trust", "Container Security"],
    bio: "Former CISO at Fortune 500 fintech. 15 years securing multi-cloud environments. AWS, Azure, and GCP security certified architect.",
    image: "https://api.dicebear.com/7.x/initials/svg?seed=RM&backgroundColor=0f172a&textColor=22c55e",
    icon: Cloud,
    highlight: "green",
  },
  {
    name: "Anita Desai",
    title: "Senior Instructor - SOC Operations",
    expertise: ["Incident Response", "SIEM/SOAR", "Forensics"],
    bio: "Former SOC Director at major Indian bank. Handled 500+ security incidents. Certified SANS instructor and Splunk expert.",
    image: "https://api.dicebear.com/7.x/initials/svg?seed=AD&backgroundColor=0f172a&textColor=f43f5e",
    icon: Lock,
    highlight: "red",
  },
  {
    name: "Ken Huang",
    title: "Global Security Advisor",
    expertise: ["International Standards", "Compliance", "Risk Management"],
    bio: "Visiting faculty from University of San Francisco. Former Director at NIST. Expert in international cybersecurity frameworks and compliance.",
    image: "https://api.dicebear.com/7.x/initials/svg?seed=KH&backgroundColor=0f172a&textColor=3b82f6",
    icon: Globe,
    highlight: "blue",
  },
  {
    name: "Dr. Somitra Sanadhya",
    title: "Cryptography & Protocol Security",
    expertise: ["Cryptography", "Protocol Analysis", "Blockchain Security"],
    bio: "Professor at IIT Kanpur. Leading researcher in applied cryptography. Contributed to multiple national security protocols.",
    image: "https://api.dicebear.com/7.x/initials/svg?seed=SS&backgroundColor=0f172a&textColor=f97316",
    icon: Cpu,
    highlight: "orange",
  },
  {
    name: "Suresh Narayanan",
    title: "Infrastructure Security Lead",
    expertise: ["Network Architecture", "BGP Security", "DNSSEC"],
    bio: "20 years at major ISPs and telecom operators. Designed secure network architectures for 3 of India's top 5 telecom providers.",
    image: "https://api.dicebear.com/7.x/initials/svg?seed=SN&backgroundColor=0f172a&textColor=06b6d4",
    icon: Database,
    highlight: "cyan",
  },
];

const highlightColors: Record<string, { text: string; border: string; bg: string }> = {
  primary: { text: "text-primary", border: "border-primary/30", bg: "bg-primary/10" },
  secondary: { text: "text-secondary", border: "border-secondary/30", bg: "bg-secondary/10" },
  purple: { text: "text-purple-400", border: "border-purple-400/30", bg: "bg-purple-400/10" },
  green: { text: "text-green-400", border: "border-green-400/30", bg: "bg-green-400/10" },
  red: { text: "text-red-400", border: "border-red-400/30", bg: "bg-red-400/10" },
  blue: { text: "text-blue-400", border: "border-blue-400/30", bg: "bg-blue-400/10" },
  orange: { text: "text-orange-400", border: "border-orange-400/30", bg: "bg-orange-400/10" },
  cyan: { text: "text-cyan-400", border: "border-cyan-400/30", bg: "bg-cyan-400/10" },
};

export default function Faculty() {
  return (
    <div className="min-h-screen bg-slate-950 text-white overflow-x-hidden font-sans">
      <Navbar />
      
      {/* Hero Section */}
      <section className="pt-32 pb-20 relative overflow-hidden" data-testid="faculty-hero">
        <div className="absolute inset-0 bg-[linear-gradient(rgba(6,182,212,0.03)_1px,transparent_1px),linear-gradient(90deg,rgba(6,182,212,0.03)_1px,transparent_1px)] bg-[size:60px_60px]" />
        <div className="absolute top-1/3 left-1/3 w-96 h-96 bg-primary/10 rounded-full blur-[150px]" />
        <div className="absolute bottom-1/3 right-1/3 w-96 h-96 bg-secondary/10 rounded-full blur-[150px]" />
        
        <div className="container mx-auto px-4 relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center max-w-4xl mx-auto"
          >
            <div className="flex items-center justify-center gap-3 mb-6">
              <div className="w-2 h-2 bg-secondary rounded-full animate-pulse" />
              <p className="text-secondary font-mono text-xs uppercase tracking-widest">Our Faculty</p>
            </div>
            
            <h1 className="text-4xl md:text-6xl font-display font-bold mb-6" data-testid="faculty-title">
              Learn from{" "}
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary via-white to-secondary">
                Practitioners
              </span>
              , Not Just Professors
            </h1>
            
            <p className="text-xl text-slate-300 leading-relaxed" data-testid="faculty-subtitle">
              Our faculty comprises former CERT-In responders, military cyber operators, and Fortune 500 CISOs. 
              They've defended networks under fire—now they'll teach you how.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Faculty Stats */}
      <section className="py-12 bg-slate-900/50 border-y border-slate-800">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
            <div>
              <Users className="w-8 h-8 text-primary mx-auto mb-2" />
              <p className="text-3xl font-display font-bold text-white">8+</p>
              <p className="text-sm text-slate-400 font-mono uppercase">Core Faculty</p>
            </div>
            <div>
              <Award className="w-8 h-8 text-secondary mx-auto mb-2" />
              <p className="text-3xl font-display font-bold text-white">150+</p>
              <p className="text-sm text-slate-400 font-mono uppercase">Years Combined Experience</p>
            </div>
            <div>
              <Shield className="w-8 h-8 text-purple-400 mx-auto mb-2" />
              <p className="text-3xl font-display font-bold text-white">500+</p>
              <p className="text-sm text-slate-400 font-mono uppercase">Incidents Handled</p>
            </div>
            <div>
              <GraduationCap className="w-8 h-8 text-green-400 mx-auto mb-2" />
              <p className="text-3xl font-display font-bold text-white">5</p>
              <p className="text-sm text-slate-400 font-mono uppercase">IIT/IIM Alumni</p>
            </div>
          </div>
        </div>
      </section>

      {/* Faculty Grid */}
      <section className="py-20" data-testid="faculty-grid">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-3xl md:text-4xl font-display font-bold text-white mb-4">
              Meet Your <span className="text-primary">Instructors</span>
            </h2>
            <p className="text-slate-400 max-w-2xl mx-auto">
              Industry veterans who've built and defended the systems you'll learn to protect.
            </p>
          </motion.div>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {facultyMembers.map((member, i) => {
              const colors = highlightColors[member.highlight];
              return (
                <motion.div
                  key={i}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: i * 0.1 }}
                  className="bg-slate-900/80 border border-slate-800 rounded-xl p-6 hover:border-primary/50 transition-all duration-500 group relative overflow-hidden"
                  data-testid={`faculty-card-${i}`}
                >
                  <div className="absolute inset-0 bg-gradient-to-br from-primary/5 via-transparent to-secondary/5 opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                  
                  <div className="relative z-10">
                    {/* Avatar */}
                    <div className="relative mb-4">
                      <div className="absolute inset-0 rounded-full bg-gradient-to-br from-primary/30 to-secondary/30 blur-lg opacity-0 group-hover:opacity-100 transition-opacity duration-500 scale-110" />
                      <img 
                        src={member.image} 
                        alt={member.name}
                        className="w-20 h-20 rounded-full border-2 border-slate-700 group-hover:border-primary transition-colors mx-auto relative z-10"
                      />
                      <div className={`absolute -bottom-1 -right-1 w-8 h-8 rounded-lg ${colors.bg} ${colors.border} border flex items-center justify-center`}>
                        <member.icon className={`w-4 h-4 ${colors.text}`} />
                      </div>
                    </div>
                    
                    {/* Name & Title */}
                    <h3 className="text-lg font-display font-bold text-white text-center group-hover:text-primary transition-colors mb-1">
                      {member.name}
                    </h3>
                    <p className={`text-sm font-mono text-center mb-3 ${colors.text}`}>
                      {member.title}
                    </p>
                    
                    {/* Expertise Tags */}
                    <div className="flex flex-wrap justify-center gap-1 mb-4">
                      {member.expertise.map((skill, j) => (
                        <span 
                          key={j}
                          className="text-xs px-2 py-1 bg-slate-800 text-slate-400 rounded-full"
                        >
                          {skill}
                        </span>
                      ))}
                    </div>
                    
                    {/* Bio */}
                    <p className="text-sm text-slate-400 text-center leading-relaxed">
                      {member.bio}
                    </p>
                  </div>
                </motion.div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Industry Focus Section */}
      <section className="py-20 bg-slate-900" data-testid="faculty-focus">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="max-w-4xl mx-auto text-center"
          >
            <h2 className="text-3xl md:text-4xl font-display font-bold text-white mb-6">
              Why <span className="text-secondary">Practitioners</span> Matter
            </h2>
            
            <div className="bg-slate-950/80 border border-slate-800 rounded-2xl p-8 md:p-12">
              <p className="text-lg text-slate-300 leading-relaxed mb-6">
                Academic credentials are valuable, but cybersecurity is an applied discipline. 
                When a nation-state actor is exfiltrating data through your DNS infrastructure, 
                you need instructors who've <span className="text-white font-semibold">been in that chair at 3 AM</span>.
              </p>
              
              <div className="grid md:grid-cols-3 gap-6 mt-8 pt-8 border-t border-slate-800">
                <div className="text-center">
                  <div className="w-12 h-12 rounded-xl bg-primary/10 border border-primary/30 flex items-center justify-center mx-auto mb-3">
                    <Shield className="w-6 h-6 text-primary" />
                  </div>
                  <p className="text-sm text-slate-400">
                    <span className="text-white font-semibold">CERT-In Responders</span><br/>
                    Front-line incident response experience
                  </p>
                </div>
                <div className="text-center">
                  <div className="w-12 h-12 rounded-xl bg-secondary/10 border border-secondary/30 flex items-center justify-center mx-auto mb-3">
                    <Award className="w-6 h-6 text-secondary" />
                  </div>
                  <p className="text-sm text-slate-400">
                    <span className="text-white font-semibold">Military Cyber Ops</span><br/>
                    Nation-state level threat experience
                  </p>
                </div>
                <div className="text-center">
                  <div className="w-12 h-12 rounded-xl bg-purple-400/10 border border-purple-400/30 flex items-center justify-center mx-auto mb-3">
                    <Server className="w-6 h-6 text-purple-400" />
                  </div>
                  <p className="text-sm text-slate-400">
                    <span className="text-white font-semibold">Fortune 500 CISOs</span><br/>
                    Enterprise security leadership
                  </p>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gradient-to-b from-slate-900 to-slate-950 border-t border-slate-800">
        <div className="container mx-auto px-4 text-center">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            <GraduationCap className="w-16 h-16 text-primary mx-auto mb-6" />
            <h2 className="text-3xl md:text-4xl font-display font-bold text-white mb-4">
              Learn from the Best
            </h2>
            <p className="text-slate-400 max-w-2xl mx-auto mb-8">
              Join a cohort guided by industry veterans who've defended India's most critical networks.
            </p>
            <a 
              href="/#register" 
              className="inline-block bg-primary hover:bg-primary/90 text-white font-bold px-8 py-4 rounded-lg shadow-[0_0_25px_rgba(6,182,212,0.3)] hover:shadow-[0_0_40px_rgba(6,182,212,0.5)] transition-all"
              data-testid="faculty-cta"
            >
              APPLY NOW
            </a>
          </motion.div>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-12 bg-slate-950 border-t border-slate-900">
        <div className="container mx-auto px-4 text-center">
          <div className="flex items-center justify-center gap-2 mb-6">
            <Shield className="w-8 h-8 text-primary" />
            <span className="font-display font-bold text-xl text-white">T-SPAN UNIVERSITY</span>
          </div>
          <p className="text-slate-600 text-sm">
            © 2025 T-SPAN University. All rights reserved.
          </p>
        </div>
      </footer>
    </div>
  );
}
