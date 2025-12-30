import { motion } from "framer-motion";
import { Building2, TrendingUp, Shield, Clock, Award, ArrowRight, Quote } from "lucide-react";
import { Link } from "wouter";
import PageLayout from "@/components/PageLayout";

const caseStudies = [
  {
    company: "State Bank of India",
    industry: "Banking & Financial Services",
    logo: "🏦",
    challenge: "Managing 50,000+ IP addresses across 22,000 branches with legacy spreadsheet-based IPAM",
    solution: "Deployed TCPWave DDI with automated discovery and real-time IP tracking",
    results: [
      { metric: "99.99%", label: "DNS Uptime" },
      { metric: "80%", label: "Reduction in IP conflicts" },
      { metric: "60%", label: "Faster provisioning" },
    ],
    quote: "TCPWave transformed our IP management from chaos to complete visibility.",
    author: "VP Technology, SBI"
  },
  {
    company: "Telangana State Government",
    industry: "Government",
    logo: "🏛️",
    challenge: "Securing DNS infrastructure for 40+ departments against nation-state threats",
    solution: "Implemented TCPWave with DNSSEC, RPZ threat feeds, and 24/7 SOC integration",
    results: [
      { metric: "10M+", label: "Threats blocked monthly" },
      { metric: "Zero", label: "DNS-based breaches" },
      { metric: "100%", label: "DNSSEC adoption" },
    ],
    quote: "T-SPAN's training ensured our team could operate enterprise-grade DNS security.",
    author: "CISO, IT Department"
  },
  {
    company: "Infosys",
    industry: "IT Services",
    logo: "💻",
    challenge: "Unifying DDI management across 50+ global data centers and cloud environments",
    solution: "Centralized DDI with multi-cloud integration (AWS, Azure, GCP) and API-driven automation",
    results: [
      { metric: "75%", label: "Reduction in manual tasks" },
      { metric: "Single", label: "Pane of glass visibility" },
      { metric: "5 min", label: "New zone deployment" },
    ],
    quote: "TCPWave's API-first approach aligned perfectly with our DevOps culture.",
    author: "Director Infrastructure, Infosys"
  },
  {
    company: "Apollo Hospitals",
    industry: "Healthcare",
    logo: "🏥",
    challenge: "Ensuring 100% DNS availability for critical healthcare applications and IoMT devices",
    solution: "High-availability DDI deployment with automatic failover and compliance reporting",
    results: [
      { metric: "100%", label: "Uptime achieved" },
      { metric: "HIPAA", label: "Compliance certified" },
      { metric: "50K+", label: "IoMT devices managed" },
    ],
    quote: "Patient care depends on network reliability. TCPWave delivers.",
    author: "CTO, Apollo Hospitals"
  },
];

export default function CaseStudies() {
  return (
    <PageLayout
      title="Case Studies"
      subtitle="Real-world success stories from enterprises transforming their DDI infrastructure"
      badge="Customer Success"
      breadcrumbs={[{ label: "TCPWave", href: "/tcpwave" }, { label: "Case Studies" }]}
    >
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="space-y-16">
            {caseStudies.map((study, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                className="bg-slate-900/50 border border-slate-800 rounded-2xl overflow-hidden"
              >
                <div className="p-8 md:p-12">
                  <div className="flex flex-col lg:flex-row gap-8">
                    <div className="lg:w-2/3">
                      <div className="flex items-center gap-4 mb-6">
                        <span className="text-4xl">{study.logo}</span>
                        <div>
                          <h3 className="text-2xl font-display font-bold text-white">{study.company}</h3>
                          <span className="text-primary font-mono text-sm">{study.industry}</span>
                        </div>
                      </div>
                      
                      <div className="space-y-6">
                        <div>
                          <h4 className="text-sm font-mono text-red-400 uppercase mb-2">Challenge</h4>
                          <p className="text-slate-300">{study.challenge}</p>
                        </div>
                        <div>
                          <h4 className="text-sm font-mono text-green-400 uppercase mb-2">Solution</h4>
                          <p className="text-slate-300">{study.solution}</p>
                        </div>
                      </div>
                      
                      <div className="mt-8 p-6 bg-slate-950/80 rounded-xl border border-slate-800">
                        <Quote className="w-8 h-8 text-primary mb-4" />
                        <p className="text-slate-300 italic mb-4">"{study.quote}"</p>
                        <p className="text-slate-500 text-sm">— {study.author}</p>
                      </div>
                    </div>
                    
                    <div className="lg:w-1/3">
                      <h4 className="text-sm font-mono text-primary uppercase mb-6">Results</h4>
                      <div className="space-y-6">
                        {study.results.map((result, j) => (
                          <div key={j} className="text-center p-4 bg-slate-950/80 rounded-xl border border-slate-800">
                            <div className="text-3xl font-display font-bold text-primary mb-1">{result.metric}</div>
                            <div className="text-slate-400 text-sm">{result.label}</div>
                          </div>
                        ))}
                      </div>
                    </div>
                  </div>
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
              Ready to Write Your Success Story?
            </h2>
            <p className="text-slate-400 max-w-2xl mx-auto mb-8">
              See how TCPWave can transform your DDI infrastructure with a personalized demo.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link href="/tcpwave/request-demo">
                <button className="px-6 py-3 bg-primary text-slate-950 font-bold rounded-lg hover:bg-primary/90 transition-colors">
                  Request Demo
                </button>
              </Link>
              <Link href="/contact/sales">
                <button className="px-6 py-3 bg-slate-800 text-white font-bold rounded-lg hover:bg-slate-700 transition-colors border border-slate-700">
                  Contact Sales
                </button>
              </Link>
            </div>
          </motion.div>
        </div>
      </section>
    </PageLayout>
  );
}
