import Navbar from "@/components/Navbar";
import { motion } from "framer-motion";
import { 
  Shield, Building2, GraduationCap, Handshake, 
  Globe, Server, Lock, Award, CheckCircle,
  ArrowRight, Users, Zap
} from "lucide-react";

const governmentPartners = [
  {
    name: "CERT-In",
    fullName: "Indian Computer Emergency Response Team",
    description: "Curriculum aligned with national incident response protocols. Direct pipeline for threat intelligence sharing.",
    logo: "🛡️",
  },
  {
    name: "NCIIPC",
    fullName: "National Critical Information Infrastructure Protection Centre",
    description: "Joint programs for critical infrastructure protection. Access to classified threat briefings for advanced students.",
    logo: "🏛️",
  },
  {
    name: "DRDO",
    fullName: "Defence Research & Development Organisation",
    description: "Collaborative research on defense-grade security solutions. Internship opportunities for top performers.",
    logo: "🎖️",
  },
  {
    name: "NIC",
    fullName: "National Informatics Centre",
    description: "Training modules on government network architecture. Understanding sovereign infrastructure requirements.",
    logo: "🌐",
  },
];

const industryPartners = [
  {
    name: "TCPWave",
    category: "DDI Platform Partner",
    description: "Exclusive access to enterprise DDI platforms. Real-world lab environments with production-grade infrastructure.",
    benefits: ["Live DDI environments", "Certification pathway", "Job placement support"],
    color: "primary",
  },
  {
    name: "Palo Alto Networks",
    category: "Next-Gen Firewall",
    description: "Hands-on training with industry-leading NGFW solutions. Integration with threat prevention ecosystems.",
    benefits: ["PCNSE prep modules", "Virtual lab access", "Threat intel feeds"],
    color: "orange",
  },
  {
    name: "Splunk",
    category: "SIEM/SOAR",
    description: "Advanced log analysis and security orchestration training. Real-time threat detection scenarios.",
    benefits: ["Splunk certifications", "SOC simulation", "SOAR playbooks"],
    color: "green",
  },
  {
    name: "CrowdStrike",
    category: "Endpoint Security",
    description: "EDR/XDR training with real threat samples. Cloud-native security architecture modules.",
    benefits: ["Falcon platform access", "Threat hunting labs", "Incident response"],
    color: "red",
  },
];

const academicPartners = [
  {
    name: "BITS Pilani",
    type: "Premier Engineering Institute",
    collaboration: "Joint certificate programs, faculty exchange, research collaboration on cryptographic protocols.",
    icon: GraduationCap,
  },
  {
    name: "DSCI",
    type: "Data Security Council of India",
    collaboration: "Industry-aligned curriculum development, compliance training modules, NASSCOM partnership.",
    icon: Shield,
  },
  {
    name: "IIT Kanpur",
    type: "Research Partner",
    collaboration: "Advanced cryptography research, protocol security analysis, PhD mentorship programs.",
    icon: Award,
  },
];

const partnershipBenefits = [
  {
    title: "Curriculum Co-Development",
    description: "Partners directly influence course content to ensure industry relevance.",
    icon: Users,
  },
  {
    title: "Placement Pipeline",
    description: "Direct hiring channels for graduates with partner-specific certifications.",
    icon: Handshake,
  },
  {
    title: "Technology Access",
    description: "Students get hands-on experience with enterprise-grade tools and platforms.",
    icon: Server,
  },
  {
    title: "Research Collaboration",
    description: "Joint R&D initiatives on emerging security challenges.",
    icon: Zap,
  },
];

export default function Partners() {
  return (
    <div className="min-h-screen bg-slate-950 text-white overflow-x-hidden font-sans">
      <Navbar />
      
      {/* Hero Section */}
      <section className="pt-32 pb-20 relative overflow-hidden" data-testid="partners-hero">
        <div className="absolute inset-0 bg-[linear-gradient(rgba(6,182,212,0.03)_1px,transparent_1px),linear-gradient(90deg,rgba(6,182,212,0.03)_1px,transparent_1px)] bg-[size:60px_60px]" />
        <div className="absolute top-1/4 right-1/4 w-96 h-96 bg-primary/10 rounded-full blur-[150px]" />
        <div className="absolute bottom-1/4 left-1/4 w-96 h-96 bg-secondary/10 rounded-full blur-[150px]" />
        
        <div className="container mx-auto px-4 relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center max-w-4xl mx-auto"
          >
            <div className="flex items-center justify-center gap-3 mb-6">
              <div className="w-2 h-2 bg-primary rounded-full animate-pulse" />
              <p className="text-primary font-mono text-xs uppercase tracking-widest">Strategic Alliances</p>
            </div>
            
            <h1 className="text-4xl md:text-6xl font-display font-bold mb-6" data-testid="partners-title">
              Powered by{" "}
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary via-white to-secondary">
                Strategic Partnerships
              </span>
            </h1>
            
            <p className="text-xl text-slate-300 leading-relaxed" data-testid="partners-subtitle">
              Our network of government agencies, industry leaders, and academic institutions ensures 
              our training reflects real-world requirements and opens doors for our graduates.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Government Partnerships */}
      <section className="py-20 bg-slate-900" data-testid="government-partners">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <div className="inline-flex items-center gap-2 px-4 py-2 bg-slate-800 rounded-full mb-4">
              <Shield className="w-4 h-4 text-primary" />
              <span className="text-sm font-mono text-slate-400">SOVEREIGN SECURITY</span>
            </div>
            <h2 className="text-3xl md:text-4xl font-display font-bold text-white mb-4">
              Government <span className="text-primary">Partnerships</span>
            </h2>
            <p className="text-slate-400 max-w-2xl mx-auto">
              Direct collaboration with India's premier cybersecurity agencies ensures our curriculum 
              meets national security standards.
            </p>
          </motion.div>
          
          <div className="grid md:grid-cols-2 gap-6">
            {governmentPartners.map((partner, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, x: i % 2 === 0 ? -30 : 30 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1 }}
                className="bg-slate-950/80 border border-slate-800 rounded-xl p-6 hover:border-primary/50 transition-all duration-500 group"
                data-testid={`gov-partner-${i}`}
              >
                <div className="flex items-start gap-4">
                  <div className="text-4xl">{partner.logo}</div>
                  <div className="flex-1">
                    <h3 className="text-xl font-display font-bold text-white group-hover:text-primary transition-colors">
                      {partner.name}
                    </h3>
                    <p className="text-sm text-secondary font-mono mb-2">{partner.fullName}</p>
                    <p className="text-slate-400">{partner.description}</p>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Industry Partnerships */}
      <section className="py-20" data-testid="industry-partners">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <div className="inline-flex items-center gap-2 px-4 py-2 bg-slate-800 rounded-full mb-4">
              <Building2 className="w-4 h-4 text-secondary" />
              <span className="text-sm font-mono text-slate-400">TECHNOLOGY LEADERS</span>
            </div>
            <h2 className="text-3xl md:text-4xl font-display font-bold text-white mb-4">
              Industry <span className="text-secondary">Partners</span>
            </h2>
            <p className="text-slate-400 max-w-2xl mx-auto">
              Hands-on access to enterprise platforms from leading security vendors.
            </p>
          </motion.div>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {industryPartners.map((partner, i) => {
              const colorClasses: Record<string, { border: string; text: string; bg: string }> = {
                primary: { border: "border-primary/30", text: "text-primary", bg: "bg-primary/10" },
                orange: { border: "border-orange-400/30", text: "text-orange-400", bg: "bg-orange-400/10" },
                green: { border: "border-green-400/30", text: "text-green-400", bg: "bg-green-400/10" },
                red: { border: "border-red-400/30", text: "text-red-400", bg: "bg-red-400/10" },
              };
              const colors = colorClasses[partner.color];
              
              return (
                <motion.div
                  key={i}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: i * 0.1 }}
                  className={`bg-slate-900/80 border border-slate-800 rounded-xl p-6 hover:${colors.border} transition-all duration-500 group`}
                  data-testid={`industry-partner-${i}`}
                >
                  <div className={`w-12 h-12 rounded-xl ${colors.bg} ${colors.border} border flex items-center justify-center mb-4`}>
                    <Server className={`w-6 h-6 ${colors.text}`} />
                  </div>
                  
                  <h3 className={`text-lg font-display font-bold text-white mb-1 group-hover:${colors.text} transition-colors`}>
                    {partner.name}
                  </h3>
                  <p className={`text-xs font-mono ${colors.text} mb-3`}>{partner.category}</p>
                  <p className="text-sm text-slate-400 mb-4">{partner.description}</p>
                  
                  <div className="space-y-2">
                    {partner.benefits.map((benefit, j) => (
                      <div key={j} className="flex items-center gap-2 text-sm text-slate-300">
                        <CheckCircle className={`w-4 h-4 ${colors.text}`} />
                        {benefit}
                      </div>
                    ))}
                  </div>
                </motion.div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Academic Partnerships */}
      <section className="py-20 bg-slate-900" data-testid="academic-partners">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <div className="inline-flex items-center gap-2 px-4 py-2 bg-slate-800 rounded-full mb-4">
              <GraduationCap className="w-4 h-4 text-purple-400" />
              <span className="text-sm font-mono text-slate-400">RESEARCH & EDUCATION</span>
            </div>
            <h2 className="text-3xl md:text-4xl font-display font-bold text-white mb-4">
              Academic <span className="text-purple-400">Partners</span>
            </h2>
            <p className="text-slate-400 max-w-2xl mx-auto">
              Collaboration with India's premier research institutions drives innovation in our curriculum.
            </p>
          </motion.div>
          
          <div className="grid md:grid-cols-3 gap-6">
            {academicPartners.map((partner, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1 }}
                className="bg-slate-950/80 border border-slate-800 rounded-xl p-6 hover:border-purple-400/50 transition-all duration-500 group text-center"
                data-testid={`academic-partner-${i}`}
              >
                <div className="w-16 h-16 rounded-xl bg-purple-400/10 border border-purple-400/30 flex items-center justify-center mx-auto mb-4">
                  <partner.icon className="w-8 h-8 text-purple-400" />
                </div>
                
                <h3 className="text-xl font-display font-bold text-white mb-1 group-hover:text-purple-400 transition-colors">
                  {partner.name}
                </h3>
                <p className="text-sm text-secondary font-mono mb-4">{partner.type}</p>
                <p className="text-slate-400">{partner.collaboration}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Partnership Benefits */}
      <section className="py-20" data-testid="partnership-benefits">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-3xl md:text-4xl font-display font-bold text-white mb-4">
              Why Partnerships <span className="text-primary">Matter</span>
            </h2>
            <p className="text-slate-400 max-w-2xl mx-auto">
              Our partnership model delivers tangible benefits to students and the industry alike.
            </p>
          </motion.div>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {partnershipBenefits.map((benefit, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, scale: 0.95 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1 }}
                className="bg-slate-900/50 border border-slate-800 rounded-xl p-6 hover:border-primary/50 transition-all duration-500 group text-center"
                data-testid={`benefit-${i}`}
              >
                <div className="w-14 h-14 rounded-xl bg-gradient-to-br from-primary/20 to-secondary/20 border border-primary/30 flex items-center justify-center mx-auto mb-4 group-hover:scale-110 transition-transform">
                  <benefit.icon className="w-7 h-7 text-primary" />
                </div>
                
                <h3 className="text-lg font-display font-bold text-white mb-2 group-hover:text-primary transition-colors">
                  {benefit.title}
                </h3>
                <p className="text-sm text-slate-400">{benefit.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Become a Partner CTA */}
      <section className="py-20 bg-gradient-to-b from-slate-900 to-slate-950 border-t border-slate-800">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="max-w-4xl mx-auto text-center"
          >
            <Handshake className="w-16 h-16 text-secondary mx-auto mb-6" />
            <h2 className="text-3xl md:text-4xl font-display font-bold text-white mb-4">
              Become a Partner
            </h2>
            <p className="text-slate-400 max-w-2xl mx-auto mb-8">
              Join our ecosystem of government agencies, technology leaders, and academic institutions 
              shaping the future of India's cybersecurity workforce.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a 
                href="mailto:partnerships@tspan.edu"
                className="inline-flex items-center justify-center gap-2 bg-primary hover:bg-primary/90 text-white font-bold px-8 py-4 rounded-lg shadow-[0_0_25px_rgba(6,182,212,0.3)] hover:shadow-[0_0_40px_rgba(6,182,212,0.5)] transition-all"
                data-testid="partner-contact-cta"
              >
                Partner With Us <ArrowRight className="w-5 h-5" />
              </a>
              <a 
                href="/#register"
                className="inline-flex items-center justify-center gap-2 bg-slate-800 hover:bg-slate-700 text-white font-bold px-8 py-4 rounded-lg border border-slate-700 transition-all"
                data-testid="partners-apply-cta"
              >
                Apply as a Student
              </a>
            </div>
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
