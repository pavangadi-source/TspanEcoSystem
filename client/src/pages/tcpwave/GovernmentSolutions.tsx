import { motion } from "framer-motion";
import { Link } from "wouter";
import PageLayout from "@/components/PageLayout";
import { Landmark, Shield, Lock, FileCheck, Server, Globe, Users, CheckCircle, Award, Building2 } from "lucide-react";

const governmentFeatures = [
  {
    icon: Shield,
    title: "Security Certifications",
    description: "Comprehensive security certifications meeting government and defense requirements",
    items: ["ISO 27001 Certified", "SOC 2 Type II", "Common Criteria Ready", "STQC Evaluated"],
  },
  {
    icon: Lock,
    title: "Data Sovereignty",
    description: "Complete control over data location and processing to meet sovereignty requirements",
    items: ["India-based data centers", "No cross-border data flow", "Local support teams", "Air-gapped options"],
  },
  {
    icon: FileCheck,
    title: "Compliance Support",
    description: "Pre-built compliance frameworks for Indian government regulations",
    items: ["MeitY Guidelines", "CERT-In compliance", "NIC Standards", "GIGW compliant"],
  },
  {
    icon: Server,
    title: "Secure Deployment",
    description: "Hardened deployment options for sensitive government infrastructure",
    items: ["On-premises deployment", "Private cloud options", "FIPS 140-2 encryption", "Secure boot chain"],
  },
];

const governmentSectors = [
  {
    title: "Central Government",
    description: "Enterprise DDI for central ministries and departments",
    applications: ["e-Governance portals", "Citizen services", "Inter-ministry networks", "Data centers"],
  },
  {
    title: "State Governments",
    description: "Scalable solutions for state-level IT infrastructure",
    applications: ["State data centers", "District networks", "Smart city initiatives", "Public services"],
  },
  {
    title: "Defense & Security",
    description: "High-security DDI for defense and national security agencies",
    applications: ["Classified networks", "Command systems", "Secure communications", "Intelligence networks"],
  },
  {
    title: "PSU & Critical Infrastructure",
    description: "Reliable DDI for public sector enterprises",
    applications: ["Power grid networks", "Banking infrastructure", "Telecom backbone", "Transport systems"],
  },
];

const partnerPrograms = [
  { name: "GeM Registered", description: "Available on Government e-Marketplace" },
  { name: "Make in India", description: "Aligned with Atmanirbhar Bharat initiative" },
  { name: "Startup India", description: "Recognized technology partner" },
  { name: "Digital India", description: "Supporting national digitization goals" },
];

export default function GovernmentSolutions() {
  return (
    <PageLayout
      title="Government Solutions"
      subtitle="Secure, sovereign, and compliant DDI infrastructure for government agencies and public sector organizations"
      badge="TCPWave"
      breadcrumbs={[
        { label: "TCPWave", href: "/tcpwave" },
        { label: "Government Solutions" },
      ]}
    >
      <section className="py-12">
        <div className="container mx-auto px-4">
          <div className="flex flex-wrap justify-center gap-6 mb-16">
            {partnerPrograms.map((program, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1 }}
                className="flex items-center gap-3 bg-slate-900/50 border border-slate-800 rounded-full px-6 py-3"
              >
                <Award className="w-5 h-5 text-cyan-400" />
                <div>
                  <div className="text-white font-medium text-sm">{program.name}</div>
                  <div className="text-slate-500 text-xs">{program.description}</div>
                </div>
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
              Government-Grade <span className="text-primary">Capabilities</span>
            </h2>
            <p className="text-slate-400 max-w-2xl mx-auto">
              Purpose-built features for government security and compliance requirements
            </p>
          </motion.div>

          <div className="grid md:grid-cols-2 gap-8">
            {governmentFeatures.map((feature, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1 }}
                className="bg-slate-950/80 border border-slate-800 rounded-2xl p-8"
                data-testid={`gov-feature-${i}`}
              >
                <feature.icon className="w-12 h-12 text-cyan-400 mb-6" />
                <h3 className="text-2xl font-display font-bold text-white mb-3">{feature.title}</h3>
                <p className="text-slate-400 mb-6">{feature.description}</p>
                <ul className="space-y-2">
                  {feature.items.map((item, j) => (
                    <li key={j} className="flex items-center gap-2 text-slate-300">
                      <CheckCircle className="w-4 h-4 text-green-400" />
                      {item}
                    </li>
                  ))}
                </ul>
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
              Sector <span className="text-secondary">Applications</span>
            </h2>
            <p className="text-slate-400 max-w-2xl mx-auto">
              Tailored solutions for different government verticals
            </p>
          </motion.div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {governmentSectors.map((sector, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1 }}
                className="bg-slate-900/50 border border-slate-800 rounded-xl p-6 hover:border-cyan-500/50 transition-all"
                data-testid={`gov-sector-${i}`}
              >
                <Landmark className="w-10 h-10 text-cyan-400 mb-4" />
                <h3 className="text-xl font-display font-bold text-white mb-2">{sector.title}</h3>
                <p className="text-slate-400 text-sm mb-4">{sector.description}</p>
                <ul className="space-y-1">
                  {sector.applications.map((app, j) => (
                    <li key={j} className="text-slate-300 text-sm flex items-center gap-2">
                      <div className="w-1.5 h-1.5 bg-cyan-400 rounded-full" />
                      {app}
                    </li>
                  ))}
                </ul>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-20 bg-gradient-to-r from-slate-900 to-slate-950">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="grid md:grid-cols-2 gap-12 items-center"
          >
            <div>
              <span className="px-4 py-2 bg-green-500/10 text-green-400 rounded-full text-sm font-medium">
                Make in India
              </span>
              <h2 className="text-3xl md:text-4xl font-display font-bold text-white mt-6 mb-4">
                Supporting Digital India & Atmanirbhar Bharat
              </h2>
              <p className="text-slate-400 mb-6">
                TCPWave is committed to India's vision of self-reliance in technology. Our solutions are developed with Indian government requirements in mind, supporting national security and digital sovereignty goals.
              </p>
              <ul className="space-y-3 mb-8">
                <li className="flex items-center gap-3 text-slate-300">
                  <CheckCircle className="w-5 h-5 text-green-400" />
                  Local development and support teams
                </li>
                <li className="flex items-center gap-3 text-slate-300">
                  <CheckCircle className="w-5 h-5 text-green-400" />
                  India-first product roadmap
                </li>
                <li className="flex items-center gap-3 text-slate-300">
                  <CheckCircle className="w-5 h-5 text-green-400" />
                  Technology transfer programs
                </li>
                <li className="flex items-center gap-3 text-slate-300">
                  <CheckCircle className="w-5 h-5 text-green-400" />
                  Skill development partnerships
                </li>
              </ul>
            </div>
            <div className="text-center">
              <div className="inline-block bg-gradient-to-br from-orange-500/20 via-white/10 to-green-500/20 border border-slate-700 rounded-2xl p-12">
                <Landmark className="w-24 h-24 text-white mx-auto mb-4" />
                <div className="text-2xl font-display font-bold text-white">
                  आत्मनिर्भर भारत
                </div>
                <div className="text-slate-400 mt-2">Self-Reliant India</div>
              </div>
            </div>
          </motion.div>
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
            <h2 className="text-3xl md:text-4xl font-display font-bold text-white mb-4">
              Government Procurement
            </h2>
            <p className="text-slate-300 max-w-2xl mx-auto mb-8">
              TCPWave is available through GeM and other government procurement channels. Contact our government sales team for contract vehicles and pricing.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link href="/contact/government">
                <button 
                  className="px-8 py-4 bg-primary text-slate-950 font-bold rounded-lg hover:bg-primary/90 transition-colors"
                  data-testid="button-contact-government"
                >
                  Contact Government Sales
                </button>
              </Link>
              <Link href="/tcpwave/request-demo">
                <button className="px-8 py-4 bg-slate-800 text-white font-bold rounded-lg hover:bg-slate-700 transition-colors border border-slate-700">
                  Request Demo
                </button>
              </Link>
            </div>
          </motion.div>
        </div>
      </section>
    </PageLayout>
  );
}
