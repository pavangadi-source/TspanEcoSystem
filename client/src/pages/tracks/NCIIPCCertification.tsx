import { motion } from "framer-motion";
import { Link } from "wouter";
import { 
  Building2, Shield, Server, Lock, Award, CheckCircle2,
  Clock, Calendar, Target, AlertTriangle, Network, ArrowRight
} from "lucide-react";
import { Button } from "@/components/ui/button";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

const sectors = [
  { name: "Power & Energy", icon: "⚡", description: "Grid security, SCADA protection" },
  { name: "Banking & Finance", icon: "🏦", description: "RBI guidelines, transaction security" },
  { name: "Telecom", icon: "📡", description: "Network infrastructure protection" },
  { name: "Transportation", icon: "🚄", description: "Railways, aviation, ports" },
  { name: "Government", icon: "🏛️", description: "e-Governance, citizen services" },
  { name: "Healthcare", icon: "🏥", description: "Medical devices, patient data" },
];

const modules = [
  {
    title: "NCIIPC Framework",
    topics: ["Organizational Structure", "Protected Systems", "Reporting Requirements", "Audit Mechanisms"],
  },
  {
    title: "CERT-In Directives",
    topics: ["6-Hour Incident Reporting", "Log Retention (180 days)", "VPN Provider Obligations", "Crypto Exchange Rules"],
  },
  {
    title: "Critical Infrastructure Protection",
    topics: ["Asset Identification", "Risk Assessment", "Vulnerability Management", "Incident Response"],
  },
  {
    title: "Compliance & Audit",
    topics: ["IS Audit Framework", "Compliance Checklist", "Documentation", "Remediation Planning"],
  },
];

const certInRequirements = [
  { requirement: "Report cyber incidents within 6 hours", penalty: "Up to ₹1 Lakh" },
  { requirement: "Maintain logs for 180 days (rolling)", penalty: "Up to ₹1 Lakh" },
  { requirement: "Synchronize system clocks with NIC/NPL", penalty: "Up to ₹1 Lakh" },
  { requirement: "Register VPN services with CERT-In", penalty: "Up to ₹5 Lakh" },
  { requirement: "KYC for crypto/virtual asset providers", penalty: "Up to ₹5 Lakh" },
];

export default function NCIIPCCertification() {
  return (
    <div className="min-h-screen bg-slate-950 text-white font-sans">
      <Navbar />
      
      {/* Hero Section */}
      <section className="relative pt-32 pb-20 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-red-900/20 via-slate-950 to-slate-900" />
        <div className="absolute top-0 right-0 w-1/2 h-full bg-gradient-to-l from-red-500/10 to-transparent" />
        
        <div className="container mx-auto px-4 md:px-6 relative z-10">
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="max-w-4xl"
          >
            <div className="flex items-center gap-3 mb-6">
              <div className="px-3 py-1 bg-red-500/20 border border-red-500/30 rounded-full">
                <span className="text-red-400 font-mono text-sm uppercase tracking-wider">Management Track</span>
              </div>
              <div className="px-3 py-1 bg-amber-500/20 border border-amber-500/30 rounded-full">
                <span className="text-amber-400 font-mono text-sm">Government Mandate</span>
              </div>
            </div>
            
            <h1 className="text-4xl md:text-6xl font-display font-bold text-white mb-6 leading-tight">
              NCIIPC & CERT-In <br />
              Compliance Certification
            </h1>
            
            <p className="text-slate-400 text-lg md:text-xl max-w-3xl mb-8">
              Master critical infrastructure protection under NCIIPC guidelines and 
              CERT-In mandatory directives. Essential for CISOs, IT Heads, and 
              compliance officers in regulated sectors.
            </p>
            
            <div className="flex flex-wrap gap-6 mb-10">
              <div className="flex items-center gap-2 text-slate-300">
                <Clock className="w-5 h-5 text-red-400" />
                <span>6 Weeks</span>
              </div>
              <div className="flex items-center gap-2 text-slate-300">
                <Calendar className="w-5 h-5 text-red-400" />
                <span>5-6 hours/week</span>
              </div>
              <div className="flex items-center gap-2 text-slate-300">
                <Target className="w-5 h-5 text-red-400" />
                <span>CII Sectors</span>
              </div>
            </div>
            
            <div className="flex flex-col sm:flex-row gap-4">
              <Button 
                size="lg" 
                className="bg-red-600 hover:bg-red-700 text-white font-bold px-8"
                data-testid="button-enroll-nciipc"
              >
                Enroll Now - ₹75,000
              </Button>
              <Link href="/government">
                <Button 
                  size="lg" 
                  variant="outline" 
                  className="border-slate-700 text-white hover:bg-white/5"
                >
                  Government Programs
                </Button>
              </Link>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Protected Sectors */}
      <section className="py-16 bg-slate-900/50 border-y border-slate-800">
        <div className="container mx-auto px-4 md:px-6">
          <h2 className="text-2xl font-display font-bold text-white mb-8 text-center">
            Critical Information Infrastructure Sectors
          </h2>
          <div className="grid md:grid-cols-6 gap-4 max-w-5xl mx-auto">
            {sectors.map((sector, i) => (
              <motion.div
                key={sector.name}
                initial={{ opacity: 0, scale: 0.95 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.05 }}
                className="text-center bg-slate-800/50 rounded-xl p-4 hover:bg-slate-800 transition-colors"
              >
                <div className="text-3xl mb-2">{sector.icon}</div>
                <h3 className="text-white font-bold text-sm mb-1">{sector.name}</h3>
                <p className="text-slate-500 text-xs">{sector.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CERT-In Requirements */}
      <section className="py-20">
        <div className="container mx-auto px-4 md:px-6">
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-12"
          >
            <div className="inline-flex items-center gap-2 bg-red-500/20 border border-red-500/30 rounded-full px-4 py-2 mb-4">
              <AlertTriangle className="w-4 h-4 text-red-400" />
              <span className="text-red-400 font-mono text-sm">Mandatory Compliance</span>
            </div>
            <h2 className="text-3xl md:text-4xl font-display font-bold text-white mb-4">
              CERT-In Directive Requirements
            </h2>
            <p className="text-slate-400 text-lg max-w-2xl mx-auto">
              Key compliance requirements effective from 2022
            </p>
          </motion.div>

          <div className="max-w-3xl mx-auto space-y-4">
            {certInRequirements.map((item, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1 }}
                className="bg-slate-900 border border-slate-800 rounded-xl p-4 flex items-center justify-between"
              >
                <div className="flex items-center gap-3">
                  <CheckCircle2 className="w-5 h-5 text-red-400 flex-shrink-0" />
                  <span className="text-white">{item.requirement}</span>
                </div>
                <span className="text-red-400 font-mono text-sm whitespace-nowrap">{item.penalty}</span>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Curriculum */}
      <section className="py-20 bg-slate-900/30">
        <div className="container mx-auto px-4 md:px-6">
          <h2 className="text-3xl font-display font-bold text-white mb-12 text-center">
            Programme Modules
          </h2>
          <div className="grid md:grid-cols-4 gap-6 max-w-5xl mx-auto">
            {modules.map((module, i) => (
              <motion.div
                key={module.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1 }}
                className="bg-slate-900 border border-slate-800 rounded-xl p-6"
              >
                <h3 className="text-white font-bold mb-4">{module.title}</h3>
                <ul className="space-y-2">
                  {module.topics.map((topic) => (
                    <li key={topic} className="text-slate-400 text-sm flex items-start gap-2">
                      <span className="text-red-400">•</span>
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
      <section className="py-20 bg-gradient-to-r from-red-900/20 via-slate-900 to-red-900/20 border-t border-slate-800">
        <div className="container mx-auto px-4 md:px-6 text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            <h2 className="text-3xl md:text-4xl font-display font-bold text-white mb-6">
              Protect Critical Infrastructure
            </h2>
            <p className="text-slate-400 text-lg max-w-2xl mx-auto mb-8">
              Ensure your organization meets NCIIPC and CERT-In compliance requirements.
            </p>
            <Button 
              size="lg" 
              className="bg-red-600 hover:bg-red-700 text-white font-bold px-8"
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
