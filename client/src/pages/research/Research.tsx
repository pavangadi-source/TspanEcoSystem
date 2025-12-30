import { motion } from "framer-motion";
import { BookOpen, FileText, AlertTriangle, Globe2, Brain, ArrowRight } from "lucide-react";
import { Link } from "wouter";
import PageLayout from "@/components/PageLayout";

const researchAreas = [
  {
    icon: Globe2,
    title: "DNS Security Research",
    description: "Advancing the state of DNS protection through novel detection algorithms and threat modeling.",
    href: "/research/dns-security-research",
    papers: "15+ Papers"
  },
  {
    icon: Brain,
    title: "AI in Cybersecurity",
    description: "Machine learning for threat detection, automated response, and predictive security analytics.",
    href: "/research/ai-cybersecurity",
    papers: "20+ Papers"
  },
  {
    icon: AlertTriangle,
    title: "Threat Intelligence",
    description: "Analysis of nation-state actors, APT groups, and emerging threat landscapes.",
    href: "/research/threat-reports",
    papers: "Quarterly Reports"
  },
  {
    icon: FileText,
    title: "Whitepapers",
    description: "In-depth technical papers on DDI security, network defense, and enterprise architecture.",
    href: "/research/whitepapers",
    papers: "30+ Papers"
  },
];

const recentPublications = [
  { title: "Fast-Flux Detection Using Graph Neural Networks", venue: "IEEE S&P 2024", authors: "Dr. P. Venkatesh et al." },
  { title: "Sovereign DNS: Architecture for National Security", venue: "NDSS 2024", authors: "Dr. R. Krishnamurthy et al." },
  { title: "ML-Based IPAM Anomaly Detection", venue: "ACM CCS 2023", authors: "A. Reddy, M. Kumar" },
  { title: "Zero-Trust DDI: A Framework", venue: "USENIX Security 2023", authors: "T-SPAN Research Team" },
];

export default function Research() {
  return (
    <PageLayout
      title="Research"
      subtitle="Advancing cybersecurity through original research and threat intelligence"
      badge="T-SPAN Research"
      breadcrumbs={[{ label: "Research" }]}
    >
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-2 gap-8">
            {researchAreas.map((area, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1 }}
              >
                <Link href={area.href}>
                  <div className="bg-slate-900/50 border border-slate-800 rounded-2xl p-8 h-full hover:border-primary/50 transition-all cursor-pointer group">
                    <div className="flex items-center justify-between mb-6">
                      <area.icon className="w-12 h-12 text-primary group-hover:scale-110 transition-transform" />
                      <span className="px-3 py-1 bg-primary/10 text-primary text-sm rounded-full">{area.papers}</span>
                    </div>
                    <h3 className="text-xl font-display font-bold text-white mb-3 group-hover:text-primary transition-colors">{area.title}</h3>
                    <p className="text-slate-400 mb-4">{area.description}</p>
                    <div className="flex items-center gap-2 text-primary text-sm font-medium">
                      Explore <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
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
              Recent <span className="text-primary">Publications</span>
            </h2>
          </motion.div>

          <div className="max-w-4xl mx-auto space-y-4">
            {recentPublications.map((pub, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, x: -30 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1 }}
                className="bg-slate-950/80 border border-slate-800 rounded-xl p-6 hover:border-primary/30 transition-all"
              >
                <h4 className="text-lg font-display font-bold text-white mb-2">{pub.title}</h4>
                <div className="flex flex-wrap gap-4 text-sm">
                  <span className="text-primary">{pub.venue}</span>
                  <span className="text-slate-500">{pub.authors}</span>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-20 bg-gradient-to-r from-primary/10 to-secondary/10 border-y border-slate-800">
        <div className="container mx-auto px-4 text-center">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            <h2 className="text-3xl font-display font-bold text-white mb-6">
              Access Our Research
            </h2>
            <p className="text-slate-400 max-w-2xl mx-auto mb-8">
              Download our latest publications, whitepapers, and threat reports.
            </p>
            <Link href="/research/publications">
              <button className="px-6 py-3 bg-primary text-slate-950 font-bold rounded-lg hover:bg-primary/90 transition-colors">
                View All Publications
              </button>
            </Link>
          </motion.div>
        </div>
      </section>
    </PageLayout>
  );
}
