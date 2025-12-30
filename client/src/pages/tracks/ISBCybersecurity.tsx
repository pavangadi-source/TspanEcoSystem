import { motion } from "framer-motion";
import { Link } from "wouter";
import { 
  GraduationCap, Shield, BookOpen, Users, Award, CheckCircle2,
  Clock, Calendar, Target, FileText, Video, MessageSquare, ArrowRight
} from "lucide-react";
import { Button } from "@/components/ui/button";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

const modules = [
  {
    week: 1,
    title: "Introduction to Cybersecurity",
    topics: ["Information Assets", "Cybersecurity Risks & Threats", "ISMS Framework", "CIA Triad", "Offensive & Defensive Strategies"],
    hours: "5-6 hours"
  },
  {
    week: 2,
    title: "Cybersecurity Regulations – Part I",
    topics: ["India's Cybersecurity Laws", "IT Act 2000", "CERT-In Directives", "IT Amendment Act 2008", "IT Rules 2011 & 2021"],
    hours: "5-6 hours"
  },
  {
    week: 3,
    title: "Cybersecurity Regulations – Part II",
    topics: ["National Cybersecurity Policy 2013", "Cybersecurity Strategy 2020", "Digital India Act 2023", "NCIIPC & ISO/IEC Standards"],
    hours: "5-6 hours"
  },
  {
    week: 4,
    title: "Security Strategy & IT Infrastructure – Part I",
    topics: ["Risk Identification", "Security Policies & Procedures", "Security Awareness Training", "Incident Response Planning"],
    hours: "5-6 hours"
  },
  {
    week: 5,
    title: "Security Strategy & IT Infrastructure – Part II",
    topics: ["Continuous Monitoring", "Network Security Architecture", "Endpoint Protection", "Security Operations Center"],
    hours: "5-6 hours"
  },
  {
    week: 6,
    title: "Cyber Threats & Attack Vectors",
    topics: ["Malware Analysis", "Phishing & Social Engineering", "APT Groups", "Zero-Day Vulnerabilities", "Supply Chain Attacks"],
    hours: "5-6 hours"
  },
  {
    week: 7,
    title: "Data Protection & Privacy",
    topics: ["GDPR Overview", "DPDP Act 2023", "Data Classification", "Privacy by Design", "Cross-Border Data Transfers"],
    hours: "5-6 hours"
  },
  {
    week: 8,
    title: "Capstone Project & Certification",
    topics: ["Case Study Analysis", "Security Strategy Development", "Presentation & Defense", "Certification Assessment"],
    hours: "8-10 hours"
  },
];

const features = [
  { icon: Video, title: "80+ Video Lectures", description: "Expert-led content from ISB faculty" },
  { icon: FileText, title: "8 Assignments", description: "Required and self-study assignments" },
  { icon: MessageSquare, title: "Discussion Forums", description: "Peer learning and Q&A sessions" },
  { icon: Award, title: "ISB Certificate", description: "Industry-recognized certification" },
];

export default function ISBCybersecurity() {
  return (
    <div className="min-h-screen bg-slate-950 text-white font-sans">
      <Navbar />
      
      {/* Hero Section */}
      <section className="relative pt-32 pb-20 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-blue-900/20 via-slate-950 to-slate-900" />
        <div className="absolute top-0 right-0 w-1/2 h-full bg-gradient-to-l from-blue-500/10 to-transparent" />
        
        <div className="container mx-auto px-4 md:px-6 relative z-10">
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="max-w-4xl"
          >
            <div className="flex items-center gap-3 mb-6">
              <div className="px-3 py-1 bg-blue-500/20 border border-blue-500/30 rounded-full">
                <span className="text-blue-400 font-mono text-sm uppercase tracking-wider">Management Track</span>
              </div>
              <div className="px-3 py-1 bg-amber-500/20 border border-amber-500/30 rounded-full">
                <span className="text-amber-400 font-mono text-sm">ISB Partnership</span>
              </div>
            </div>
            
            <h1 className="text-4xl md:text-6xl font-display font-bold text-white mb-6 leading-tight">
              ISB Cybersecurity <br />
              Strategy & Compliance
            </h1>
            
            <p className="text-slate-400 text-lg md:text-xl max-w-3xl mb-8">
              A comprehensive 8-week program covering India's cybersecurity regulations, 
              ISMS frameworks, and security strategy development. Designed for managers, 
              compliance officers, and aspiring CISOs.
            </p>
            
            <div className="flex flex-wrap gap-6 mb-10">
              <div className="flex items-center gap-2 text-slate-300">
                <Clock className="w-5 h-5 text-primary" />
                <span>8 Weeks</span>
              </div>
              <div className="flex items-center gap-2 text-slate-300">
                <Calendar className="w-5 h-5 text-primary" />
                <span>5-6 hours/week</span>
              </div>
              <div className="flex items-center gap-2 text-slate-300">
                <Target className="w-5 h-5 text-primary" />
                <span>Management Level</span>
              </div>
            </div>
            
            <div className="flex flex-col sm:flex-row gap-4">
              <Button 
                size="lg" 
                className="bg-blue-600 hover:bg-blue-700 text-white font-bold px-8"
                data-testid="button-enroll-isb"
              >
                Enroll Now - ₹85,000
              </Button>
              <Link href="/courses">
                <Button 
                  size="lg" 
                  variant="outline" 
                  className="border-slate-700 text-white hover:bg-white/5"
                >
                  View All Courses
                </Button>
              </Link>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Features */}
      <section className="py-16 bg-slate-900/50 border-y border-slate-800">
        <div className="container mx-auto px-4 md:px-6">
          <div className="grid md:grid-cols-4 gap-6">
            {features.map((feature, i) => (
              <motion.div
                key={feature.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1 }}
                className="text-center p-6"
              >
                <div className="w-14 h-14 mx-auto mb-4 bg-blue-500/20 rounded-xl flex items-center justify-center">
                  <feature.icon className="w-7 h-7 text-blue-400" />
                </div>
                <h3 className="text-white font-bold mb-2">{feature.title}</h3>
                <p className="text-slate-500 text-sm">{feature.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Curriculum */}
      <section className="py-20">
        <div className="container mx-auto px-4 md:px-6">
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-12"
          >
            <h2 className="text-3xl md:text-4xl font-display font-bold text-white mb-4">
              Programme Curriculum
            </h2>
            <p className="text-slate-400 text-lg max-w-2xl mx-auto">
              8 comprehensive modules covering cybersecurity strategy, regulations, and governance
            </p>
          </motion.div>

          <div className="grid md:grid-cols-2 gap-6 max-w-5xl mx-auto">
            {modules.map((module, i) => (
              <motion.div
                key={module.week}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.05 }}
                className="bg-slate-900 border border-slate-800 rounded-xl p-6 hover:border-blue-500/50 transition-colors"
              >
                <div className="flex items-center gap-3 mb-4">
                  <div className="w-10 h-10 bg-blue-500/20 rounded-lg flex items-center justify-center">
                    <span className="text-blue-400 font-bold">W{module.week}</span>
                  </div>
                  <div>
                    <h3 className="text-white font-bold">{module.title}</h3>
                    <span className="text-slate-500 text-sm">{module.hours}</span>
                  </div>
                </div>
                <ul className="space-y-2">
                  {module.topics.map((topic) => (
                    <li key={topic} className="flex items-start gap-2 text-slate-400 text-sm">
                      <CheckCircle2 className="w-4 h-4 text-blue-400 mt-0.5 flex-shrink-0" />
                      {topic}
                    </li>
                  ))}
                </ul>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-20 bg-gradient-to-r from-blue-900/20 via-slate-900 to-blue-900/20 border-t border-slate-800">
        <div className="container mx-auto px-4 md:px-6 text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            <h2 className="text-3xl md:text-4xl font-display font-bold text-white mb-6">
              Ready to Master Cybersecurity Governance?
            </h2>
            <p className="text-slate-400 text-lg max-w-2xl mx-auto mb-8">
              Join India's premier cybersecurity management program and earn an ISB-certified credential.
            </p>
            <Button 
              size="lg" 
              className="bg-blue-600 hover:bg-blue-700 text-white font-bold px-8"
            >
              Start Your Journey
              <ArrowRight className="w-4 h-4 ml-2" />
            </Button>
          </motion.div>
        </div>
      </section>

      <Footer />
    </div>
  );
}
