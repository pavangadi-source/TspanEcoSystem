import { motion } from "framer-motion";
import { Link } from "wouter";
import PageLayout from "@/components/PageLayout";
import { FileText, Download, Calendar, Globe, Shield, TrendingUp, Building2, Landmark, CreditCard } from "lucide-react";

const featuredReports = [
  {
    title: "India Cyber Threat Landscape Q4 2024",
    description: "Comprehensive analysis of cyber threats targeting Indian organizations including APT activity, ransomware trends, and sector-specific threats.",
    date: "December 2024",
    type: "Quarterly Report",
    pages: 45,
    icon: Globe,
  },
  {
    title: "DNS Attack Trends in Financial Sector",
    description: "Deep dive into DNS-based attacks targeting banks and financial institutions in India, with mitigation strategies.",
    date: "November 2024",
    type: "Sector Report",
    pages: 28,
    icon: CreditCard,
  },
  {
    title: "State-Sponsored Threat Actor Analysis",
    description: "Detailed profiles of APT groups targeting Indian government and critical infrastructure.",
    date: "October 2024",
    type: "Special Report",
    pages: 52,
    icon: Landmark,
  },
];

const reportCategories = [
  { name: "Quarterly Landscape", count: 12, description: "Comprehensive quarterly threat overviews" },
  { name: "Sector Reports", count: 24, description: "Industry-specific threat analysis" },
  { name: "APT Analysis", count: 18, description: "Advanced persistent threat profiles" },
  { name: "Malware Reports", count: 35, description: "New malware family analysis" },
  { name: "Vulnerability Briefs", count: 48, description: "Critical vulnerability assessments" },
  { name: "Incident Analysis", count: 22, description: "Major breach investigations" },
];

const recentReports = [
  { title: "Ransomware Campaign Targeting Healthcare", date: "Dec 15, 2024", type: "Alert" },
  { title: "New Banking Trojan Detected in India", date: "Dec 12, 2024", type: "Malware" },
  { title: "Critical Log4j Variant Exploitation", date: "Dec 10, 2024", type: "Vulnerability" },
  { title: "Phishing Campaign Impersonating Income Tax", date: "Dec 8, 2024", type: "Alert" },
  { title: "State-Sponsored Activity Analysis", date: "Dec 5, 2024", type: "APT" },
];

export default function Reports() {
  return (
    <PageLayout
      title="Threat Reports"
      subtitle="Expert analysis and intelligence reports on emerging cyber threats"
      badge="Threat Intelligence"
      breadcrumbs={[
        { label: "Threat Intelligence", href: "/threat-intelligence" },
        { label: "Reports" },
      ]}
    >
      <section className="py-20">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-3xl md:text-4xl font-display font-bold text-white mb-4">
              Featured <span className="text-primary">Reports</span>
            </h2>
            <p className="text-slate-400 max-w-2xl mx-auto">
              In-depth threat intelligence from T-SPAN's research team
            </p>
          </motion.div>

          <div className="grid md:grid-cols-3 gap-8">
            {featuredReports.map((report, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1 }}
                className="bg-slate-900/50 border border-slate-800 rounded-2xl p-8 hover:border-red-500/50 transition-all group"
                data-testid={`featured-report-${i}`}
              >
                <report.icon className="w-12 h-12 text-red-400 mb-6" />
                <div className="flex items-center gap-3 mb-4">
                  <span className="px-2 py-1 bg-red-500/20 text-red-400 text-xs rounded">{report.type}</span>
                  <span className="text-slate-500 text-sm">{report.pages} pages</span>
                </div>
                <h3 className="text-xl font-display font-bold text-white mb-3 group-hover:text-red-400 transition-colors">
                  {report.title}
                </h3>
                <p className="text-slate-400 text-sm mb-4">{report.description}</p>
                <div className="flex items-center justify-between">
                  <span className="text-slate-500 text-sm">{report.date}</span>
                  <button className="flex items-center gap-2 text-cyan-400 text-sm font-medium hover:text-cyan-300">
                    <Download className="w-4 h-4" /> Download
                  </button>
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
              Report <span className="text-secondary">Categories</span>
            </h2>
          </motion.div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {reportCategories.map((category, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.05 }}
                className="bg-slate-950/80 border border-slate-800 rounded-xl p-6 hover:border-red-500/50 transition-all cursor-pointer"
                data-testid={`category-${i}`}
              >
                <div className="flex justify-between items-start mb-3">
                  <h3 className="text-lg font-display font-bold text-white">{category.name}</h3>
                  <span className="px-2 py-1 bg-slate-800 text-slate-400 text-xs rounded">{category.count} reports</span>
                </div>
                <p className="text-slate-400 text-sm">{category.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="grid lg:grid-cols-2 gap-12">
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
            >
              <h2 className="text-3xl font-display font-bold text-white mb-8">
                Recent <span className="text-primary">Publications</span>
              </h2>
              <div className="space-y-4">
                {recentReports.map((report, i) => (
                  <div
                    key={i}
                    className="flex items-center justify-between bg-slate-900/50 border border-slate-800 rounded-lg p-4 hover:border-slate-700 transition-all cursor-pointer"
                  >
                    <div className="flex items-center gap-4">
                      <FileText className="w-8 h-8 text-slate-500" />
                      <div>
                        <div className="text-white font-medium">{report.title}</div>
                        <div className="text-slate-500 text-sm">{report.date}</div>
                      </div>
                    </div>
                    <span className="px-2 py-1 bg-slate-800 text-slate-400 text-xs rounded">{report.type}</span>
                  </div>
                ))}
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="bg-gradient-to-br from-red-500/10 to-orange-500/10 border border-red-500/30 rounded-2xl p-8"
            >
              <Calendar className="w-12 h-12 text-red-400 mb-6" />
              <h3 className="text-2xl font-display font-bold text-white mb-4">
                Subscribe to Reports
              </h3>
              <p className="text-slate-400 mb-6">
                Get the latest threat intelligence reports delivered to your inbox. Professional and Enterprise subscribers receive all reports automatically.
              </p>
              <form className="space-y-4">
                <input
                  type="email"
                  placeholder="Enter your email"
                  className="w-full bg-slate-900/50 border border-slate-700 rounded-lg px-4 py-3 text-white focus:border-red-500 focus:outline-none"
                  data-testid="input-email"
                />
                <button 
                  type="submit"
                  className="w-full px-6 py-4 bg-red-500 text-white font-bold rounded-lg hover:bg-red-600 transition-colors"
                  data-testid="button-subscribe"
                >
                  Subscribe to Reports
                </button>
              </form>
              <p className="text-slate-500 text-xs mt-4">
                Free subscribers receive monthly digest. Upgrade for full access.
              </p>
            </motion.div>
          </div>
        </div>
      </section>
    </PageLayout>
  );
}
