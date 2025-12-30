import { motion } from "framer-motion";
import { Link } from "wouter";
import { 
  FileText, Shield, Lock, Users, Award, CheckCircle2,
  Clock, Calendar, Target, BookOpen, Scale, ArrowRight
} from "lucide-react";
import { Button } from "@/components/ui/button";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

const modules = [
  {
    title: "Introduction to DPDP Act 2023",
    topics: ["Legislative Background", "Key Definitions", "Scope & Applicability", "Territorial Jurisdiction"],
    icon: FileText
  },
  {
    title: "Data Principal Rights",
    topics: ["Right to Access", "Right to Correction", "Right to Erasure", "Right to Grievance Redressal", "Right to Nominate"],
    icon: Users
  },
  {
    title: "Data Fiduciary Obligations",
    topics: ["Lawful Processing", "Purpose Limitation", "Data Minimization", "Storage Limitation", "Accuracy Requirements"],
    icon: Shield
  },
  {
    title: "Consent Management",
    topics: ["Valid Consent Framework", "Consent Managers", "Withdrawal of Consent", "Children's Data Protection"],
    icon: CheckCircle2
  },
  {
    title: "Significant Data Fiduciaries",
    topics: ["Classification Criteria", "Data Protection Officer", "Data Protection Impact Assessment", "Periodic Audits"],
    icon: Scale
  },
  {
    title: "Cross-Border Data Transfers",
    topics: ["Permitted Transfers", "Restricted Countries", "Contractual Safeguards", "Government Access"],
    icon: Lock
  },
  {
    title: "Penalties & Enforcement",
    topics: ["Penalty Framework", "Data Protection Board", "Appellate Process", "Criminal Liability"],
    icon: Award
  },
  {
    title: "Implementation & Compliance",
    topics: ["Compliance Roadmap", "Privacy by Design", "Documentation Requirements", "Audit Preparation"],
    icon: BookOpen
  },
];

const keyHighlights = [
  "Up to ₹250 Crore penalties for non-compliance",
  "Mandatory Data Protection Officer for significant fiduciaries",
  "Comprehensive consent management requirements",
  "Cross-border data transfer restrictions",
  "Special provisions for children's data",
  "Data Protection Board of India establishment",
];

export default function DPDPCompliance() {
  return (
    <div className="min-h-screen bg-slate-950 text-white font-sans">
      <Navbar />
      
      {/* Hero Section */}
      <section className="relative pt-32 pb-20 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-green-900/20 via-slate-950 to-slate-900" />
        <div className="absolute top-0 right-0 w-1/2 h-full bg-gradient-to-l from-green-500/10 to-transparent" />
        
        <div className="container mx-auto px-4 md:px-6 relative z-10">
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="max-w-4xl"
          >
            <div className="flex items-center gap-3 mb-6">
              <div className="px-3 py-1 bg-green-500/20 border border-green-500/30 rounded-full">
                <span className="text-green-400 font-mono text-sm uppercase tracking-wider">Management Track</span>
              </div>
              <div className="px-3 py-1 bg-red-500/20 border border-red-500/30 rounded-full">
                <span className="text-red-400 font-mono text-sm">Compliance Critical</span>
              </div>
            </div>
            
            <h1 className="text-4xl md:text-6xl font-display font-bold text-white mb-6 leading-tight">
              Digital Personal Data <br />
              Protection Act 2023
            </h1>
            
            <p className="text-slate-400 text-lg md:text-xl max-w-3xl mb-8">
              Master India's landmark data protection law. Learn compliance requirements, 
              implementation strategies, and avoid penalties up to ₹250 Crore. Essential 
              for DPOs, Legal Counsel, and Compliance Officers.
            </p>
            
            <div className="flex flex-wrap gap-6 mb-10">
              <div className="flex items-center gap-2 text-slate-300">
                <Clock className="w-5 h-5 text-green-400" />
                <span>6 Weeks</span>
              </div>
              <div className="flex items-center gap-2 text-slate-300">
                <Calendar className="w-5 h-5 text-green-400" />
                <span>4-5 hours/week</span>
              </div>
              <div className="flex items-center gap-2 text-slate-300">
                <Target className="w-5 h-5 text-green-400" />
                <span>Compliance Focus</span>
              </div>
            </div>
            
            <div className="flex flex-col sm:flex-row gap-4">
              <Button 
                size="lg" 
                className="bg-green-600 hover:bg-green-700 text-white font-bold px-8"
                data-testid="button-enroll-dpdp"
              >
                Enroll Now - ₹65,000
              </Button>
              <Link href="/enterprise">
                <Button 
                  size="lg" 
                  variant="outline" 
                  className="border-slate-700 text-white hover:bg-white/5"
                >
                  Enterprise Training
                </Button>
              </Link>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Key Highlights */}
      <section className="py-16 bg-slate-900/50 border-y border-slate-800">
        <div className="container mx-auto px-4 md:px-6">
          <h2 className="text-2xl font-display font-bold text-white mb-8 text-center">
            Why DPDP Compliance Matters
          </h2>
          <div className="grid md:grid-cols-3 gap-4 max-w-4xl mx-auto">
            {keyHighlights.map((highlight, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, scale: 0.95 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.05 }}
                className="flex items-start gap-3 bg-slate-800/50 rounded-lg p-4"
              >
                <CheckCircle2 className="w-5 h-5 text-green-400 mt-0.5 flex-shrink-0" />
                <span className="text-slate-300 text-sm">{highlight}</span>
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
              Programme Modules
            </h2>
            <p className="text-slate-400 text-lg max-w-2xl mx-auto">
              Comprehensive coverage of DPDP Act requirements and implementation
            </p>
          </motion.div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 max-w-6xl mx-auto">
            {modules.map((module, i) => (
              <motion.div
                key={module.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.05 }}
                className="bg-slate-900 border border-slate-800 rounded-xl p-6 hover:border-green-500/50 transition-colors"
              >
                <div className="w-12 h-12 bg-green-500/20 rounded-xl flex items-center justify-center mb-4">
                  <module.icon className="w-6 h-6 text-green-400" />
                </div>
                <h3 className="text-white font-bold mb-3">{module.title}</h3>
                <ul className="space-y-2">
                  {module.topics.map((topic) => (
                    <li key={topic} className="text-slate-500 text-sm flex items-start gap-2">
                      <span className="text-green-400">•</span>
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
      <section className="py-20 bg-gradient-to-r from-green-900/20 via-slate-900 to-green-900/20 border-t border-slate-800">
        <div className="container mx-auto px-4 md:px-6 text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            <h2 className="text-3xl md:text-4xl font-display font-bold text-white mb-6">
              Ensure Your Organization is DPDP Compliant
            </h2>
            <p className="text-slate-400 text-lg max-w-2xl mx-auto mb-8">
              Avoid hefty penalties and build trust with data principals through proper compliance.
            </p>
            <Button 
              size="lg" 
              className="bg-green-600 hover:bg-green-700 text-white font-bold px-8"
            >
              Get Certified
              <ArrowRight className="w-4 h-4 ml-2" />
            </Button>
          </motion.div>
        </div>
      </section>

      <Footer />
    </div>
  );
}
