import Navbar from "@/components/Navbar";
import { motion } from "framer-motion";
import { 
  Shield, Target, Award, Users, BookOpen, Building2, 
  GraduationCap, Globe, Zap, Lock, Server, CheckCircle
} from "lucide-react";

const stats = [
  { value: "2,500+", label: "Students Trained", icon: GraduationCap },
  { value: "12", label: "Specialized Courses", icon: BookOpen },
  { value: "25+", label: "Industry Partners", icon: Building2 },
  { value: "15+", label: "Government Collaborations", icon: Shield },
];

const coreValues = [
  {
    title: "Operational Excellence",
    description: "Every module is designed around real-world operational scenarios. We don't teach theory in isolation—we train defenders who can perform under pressure.",
    icon: Target,
    color: "text-primary",
    bgColor: "from-primary/20 to-primary/5",
  },
  {
    title: "Sovereign Security",
    description: "India's critical infrastructure deserves Indian expertise. We build sovereign capabilities that reduce dependency on foreign security solutions.",
    icon: Shield,
    color: "text-secondary",
    bgColor: "from-secondary/20 to-secondary/5",
  },
  {
    title: "Industry Integration",
    description: "Direct partnerships with technology leaders ensure our curriculum reflects the tools and techniques used in production environments.",
    icon: Building2,
    color: "text-purple-400",
    bgColor: "from-purple-400/20 to-purple-400/5",
  },
];

const differentiators = [
  {
    title: "Live Infrastructure Training",
    description: "Access real DDI platforms, not simulations. Practice on production-grade TCPWave environments with actual traffic patterns.",
    icon: Server,
    traditional: "PowerPoint slides and theoretical exams",
  },
  {
    title: "Government Partnerships",
    description: "Direct collaboration with CERT-In, DRDO, and NCIIPC ensures curriculum alignment with national security priorities.",
    icon: Lock,
    traditional: "Generic international certifications",
  },
  {
    title: "Practitioner Faculty",
    description: "Learn from former CERT-In responders, military cyber operators, and Fortune 500 CISOs—not just academics.",
    icon: Users,
    traditional: "Professors with only theoretical knowledge",
  },
  {
    title: "Mission-Ready Graduates",
    description: "Our alumni don't need 6 months of on-the-job training. They're operational from day one.",
    icon: Zap,
    traditional: "Graduates require extensive workplace training",
  },
];

export default function About() {
  return (
    <div className="min-h-screen bg-slate-950 text-white overflow-x-hidden font-sans">
      <Navbar />
      
      {/* Hero Section */}
      <section className="pt-32 pb-20 relative overflow-hidden" data-testid="about-hero">
        <div className="absolute inset-0 bg-[linear-gradient(rgba(6,182,212,0.03)_1px,transparent_1px),linear-gradient(90deg,rgba(6,182,212,0.03)_1px,transparent_1px)] bg-[size:60px_60px]" />
        <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-primary/10 rounded-full blur-[150px]" />
        <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-secondary/10 rounded-full blur-[150px]" />
        
        <div className="container mx-auto px-4 relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center max-w-4xl mx-auto"
          >
            <div className="flex items-center justify-center gap-3 mb-6">
              <div className="w-2 h-2 bg-primary rounded-full animate-pulse" />
              <p className="text-primary font-mono text-xs uppercase tracking-widest">About T-SPAN University</p>
            </div>
            
            <h1 className="text-4xl md:text-6xl font-display font-bold mb-6" data-testid="about-title">
              Forging India's{" "}
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary via-white to-secondary">
                Cyber Defense
              </span>{" "}
              Elite
            </h1>
            
            <p className="text-xl text-slate-300 leading-relaxed mb-8" data-testid="about-mission">
              T-SPAN University bridges the critical gap between theoretical cybersecurity training and real-world cyber operations. 
              We produce mission-ready defenders who protect India's sovereign digital infrastructure.
            </p>
            
            <div className="flex flex-wrap justify-center gap-4">
              <div className="px-6 py-3 bg-slate-900/50 border border-slate-800 rounded-full text-sm font-mono text-slate-400">
                <span className="text-primary">Est.</span> 2023
              </div>
              <div className="px-6 py-3 bg-slate-900/50 border border-slate-800 rounded-full text-sm font-mono text-slate-400">
                <span className="text-secondary">HQ:</span> Hyderabad, India
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-16 bg-slate-900/50 border-y border-slate-800" data-testid="about-stats">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {stats.map((stat, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1 }}
                className="text-center"
                data-testid={`stat-${i}`}
              >
                <stat.icon className="w-8 h-8 text-primary mx-auto mb-3" />
                <p className="text-3xl md:text-4xl font-display font-bold text-white mb-1">{stat.value}</p>
                <p className="text-sm text-slate-400 font-mono uppercase tracking-wider">{stat.label}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* History Section */}
      <section className="py-20 relative" data-testid="about-history">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="text-center mb-12"
            >
              <h2 className="text-3xl md:text-4xl font-display font-bold text-white mb-4">
                Our <span className="text-primary">Origin Story</span>
              </h2>
            </motion.div>
            
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="bg-slate-900/50 border border-slate-800 rounded-2xl p-8 md:p-12 relative overflow-hidden"
            >
              <div className="absolute top-0 right-0 w-64 h-64 bg-primary/5 rounded-full blur-3xl" />
              
              <div className="relative z-10 space-y-6 text-slate-300 leading-relaxed">
                <p className="text-lg">
                  T-SPAN University was founded in 2023 by cybersecurity veterans who recognized a critical gap in India's 
                  cyber defense capabilities. While academic institutions produced graduates with theoretical knowledge, 
                  and certification bodies offered standardized tests, <span className="text-white font-semibold">neither prepared 
                  defenders for the reality of protecting critical infrastructure</span>.
                </p>
                
                <p className="text-lg">
                  The founding team—comprising former CERT-In responders, military cyber operators, and enterprise security 
                  architects—set out to create something different: <span className="text-primary font-semibold">a training 
                  institution built around live infrastructure</span>, real attack scenarios, and the specific tools used 
                  in India's most critical networks.
                </p>
                
                <p className="text-lg">
                  In partnership with TCPWave, the global leader in DDI solutions, T-SPAN developed curricula that give 
                  students hands-on experience with the same platforms protecting government networks, financial institutions, 
                  and critical infrastructure across 67+ countries.
                </p>
                
                <div className="pt-6 border-t border-slate-800 flex items-center gap-4">
                  <Globe className="w-10 h-10 text-secondary" />
                  <p className="text-secondary font-semibold">
                    "We don't teach cybersecurity. We forge cyber defenders."
                  </p>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Core Values */}
      <section className="py-20 bg-slate-900" data-testid="about-values">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-3xl md:text-4xl font-display font-bold text-white mb-4">
              Our <span className="text-secondary">Core Values</span>
            </h2>
            <p className="text-slate-400 max-w-2xl mx-auto">
              These principles guide everything we do—from curriculum design to graduate outcomes.
            </p>
          </motion.div>
          
          <div className="grid md:grid-cols-3 gap-8">
            {coreValues.map((value, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.15 }}
                className="bg-slate-950/80 border border-slate-800 rounded-xl p-8 hover:border-primary/50 transition-all duration-500 group relative overflow-hidden"
                data-testid={`value-${i}`}
              >
                <div className={`absolute inset-0 bg-gradient-to-br ${value.bgColor} opacity-0 group-hover:opacity-100 transition-opacity duration-500`} />
                
                <div className="relative z-10">
                  <div className={`w-14 h-14 rounded-xl bg-slate-900 border border-slate-700 flex items-center justify-center mb-6 group-hover:border-${value.color} transition-colors`}>
                    <value.icon className={`w-7 h-7 ${value.color}`} />
                  </div>
                  
                  <h3 className="text-xl font-display font-bold text-white mb-3 group-hover:text-primary transition-colors">
                    {value.title}
                  </h3>
                  
                  <p className="text-slate-400 leading-relaxed">
                    {value.description}
                  </p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Key Differentiators */}
      <section className="py-20" data-testid="about-differentiators">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-3xl md:text-4xl font-display font-bold text-white mb-4">
              What Makes Us <span className="text-primary">Different</span>
            </h2>
            <p className="text-slate-400 max-w-2xl mx-auto">
              Traditional cybersecurity education vs. the T-SPAN approach
            </p>
          </motion.div>
          
          <div className="grid md:grid-cols-2 gap-6">
            {differentiators.map((diff, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, x: i % 2 === 0 ? -30 : 30 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1 }}
                className="bg-slate-900/50 border border-slate-800 rounded-xl p-6 hover:border-primary/50 transition-all duration-500 group"
                data-testid={`differentiator-${i}`}
              >
                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 rounded-lg bg-primary/10 border border-primary/30 flex items-center justify-center flex-shrink-0">
                    <diff.icon className="w-6 h-6 text-primary" />
                  </div>
                  
                  <div className="flex-1">
                    <h3 className="text-lg font-display font-bold text-white mb-2 group-hover:text-primary transition-colors">
                      {diff.title}
                    </h3>
                    <p className="text-slate-300 mb-4">
                      {diff.description}
                    </p>
                    
                    <div className="flex items-center gap-2 text-sm">
                      <span className="text-red-400 font-mono">Traditional:</span>
                      <span className="text-slate-500 line-through">{diff.traditional}</span>
                    </div>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
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
            <Award className="w-16 h-16 text-secondary mx-auto mb-6" />
            <h2 className="text-3xl md:text-4xl font-display font-bold text-white mb-4">
              Ready to Join the Elite?
            </h2>
            <p className="text-slate-400 max-w-2xl mx-auto mb-8">
              Applications are now open for our next cohort. Transform your career and become 
              part of India's cyber defense force.
            </p>
            <a 
              href="/#register" 
              className="inline-block bg-primary hover:bg-primary/90 text-white font-bold px-8 py-4 rounded-lg shadow-[0_0_25px_rgba(6,182,212,0.3)] hover:shadow-[0_0_40px_rgba(6,182,212,0.5)] transition-all"
              data-testid="about-cta"
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
