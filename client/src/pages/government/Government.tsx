import { motion } from "framer-motion";
import { Building2, Shield, Lock, Flag, Award, Globe2, ArrowRight, CheckCircle } from "lucide-react";
import { Link } from "wouter";
import PageLayout from "@/components/PageLayout";

const governmentPrograms = [
  {
    icon: Building2,
    title: "Telangana Partnership",
    description: "Strategic collaboration with Telangana State Government for cybersecurity workforce development.",
    href: "/government/telangana-partnership"
  },
  {
    icon: Shield,
    title: "Law Enforcement Training",
    description: "Specialized training for cyber police, forensics teams, and investigation units.",
    href: "/government/law-enforcement-training"
  },
  {
    icon: Lock,
    title: "Defense Sector",
    description: "Classified programs for defense personnel on sovereign infrastructure security.",
    href: "/government/defense-sector"
  },
  {
    icon: Globe2,
    title: "Critical Infrastructure",
    description: "Protecting power grids, water systems, and transportation networks.",
    href: "/government/critical-infrastructure"
  },
  {
    icon: Flag,
    title: "Digital India Alignment",
    description: "Programs aligned with Digital India initiatives for e-governance security.",
    href: "/government/digital-india-alignment"
  },
  {
    icon: Award,
    title: "Atmanirbhar Bharat",
    description: "Building self-reliant cybersecurity capabilities for sovereign defense.",
    href: "/government/atmanirbhar-bharat"
  },
];

const governmentPartners = [
  "Telangana IT Department",
  "CERT-In",
  "NCIIPC",
  "DRDO",
  "Indian Army Cyber Command",
  "Ministry of Electronics & IT",
  "NIC",
  "CDAC",
];

export default function Government() {
  return (
    <PageLayout
      title="Government Solutions"
      subtitle="Sovereign cybersecurity training for national defense and public sector"
      badge="Public Sector"
      breadcrumbs={[{ label: "Government" }]}
    >
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {governmentPrograms.map((program, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1 }}
              >
                <Link href={program.href}>
                  <div className="bg-slate-900/50 border border-slate-800 rounded-2xl p-8 h-full hover:border-primary/50 transition-all cursor-pointer group">
                    <program.icon className="w-12 h-12 text-primary mb-6 group-hover:scale-110 transition-transform" />
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

      <section className="py-20 bg-slate-900/50">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-12"
          >
            <h2 className="text-3xl md:text-4xl font-display font-bold text-white mb-4">
              Government <span className="text-primary">Partners</span>
            </h2>
          </motion.div>

          <div className="flex flex-wrap justify-center gap-4">
            {governmentPartners.map((partner, i) => (
              <motion.span
                key={i}
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.05 }}
                className="px-6 py-3 bg-slate-950/80 border border-slate-800 text-slate-300 rounded-full"
              >
                {partner}
              </motion.span>
            ))}
          </div>
        </div>
      </section>

      <section className="py-20 bg-gradient-to-r from-orange-500/10 to-green-500/10 border-y border-slate-800">
        <div className="container mx-auto px-4 text-center">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            <h2 className="text-3xl font-display font-bold text-white mb-6">
              Partner with T-SPAN
            </h2>
            <p className="text-slate-400 max-w-2xl mx-auto mb-8">
              Government agencies can contact us for customized training programs and strategic partnerships.
            </p>
            <Link href="/contact/government">
              <button className="px-6 py-3 bg-primary text-slate-950 font-bold rounded-lg hover:bg-primary/90 transition-colors">
                Contact Government Relations
              </button>
            </Link>
          </motion.div>
        </div>
      </section>
    </PageLayout>
  );
}
