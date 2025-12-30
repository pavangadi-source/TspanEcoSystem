import { motion } from "framer-motion";
import { Link } from "wouter";
import PageLayout from "@/components/PageLayout";
import { Database, Search, Filter, Download, Globe, Shield, Clock, TrendingUp } from "lucide-react";

const iocStats = [
  { value: "500M+", label: "Total IOCs", icon: Database },
  { value: "5M+", label: "Added This Month", icon: TrendingUp },
  { value: "2 Years", label: "Historical Data", icon: Clock },
  { value: "150+", label: "Countries Covered", icon: Globe },
];

const iocTypes = [
  { type: "IP Addresses", count: "180M+", description: "Malicious IPs including C2, scanners, and attack sources" },
  { type: "Domains", count: "85M+", description: "Malicious and suspicious domains" },
  { type: "URLs", count: "150M+", description: "Phishing, malware distribution, and exploit URLs" },
  { type: "File Hashes", count: "80M+", description: "MD5, SHA1, SHA256 of known malware" },
  { type: "Email Addresses", count: "5M+", description: "Phishing and spam sender addresses" },
  { type: "SSL Certificates", count: "2M+", description: "Suspicious SSL certificate fingerprints" },
];

const searchFilters = [
  "IOC Type", "Threat Category", "Confidence Score", "Date Range", 
  "Source", "Country", "Malware Family", "MITRE ATT&CK"
];

export default function IOCDatabase() {
  return (
    <PageLayout
      title="IOC Database"
      subtitle="Search over 500 million indicators of compromise with historical context"
      badge="Threat Intelligence"
      breadcrumbs={[
        { label: "Threat Intelligence", href: "/threat-intelligence" },
        { label: "IOC Database" },
      ]}
    >
      <section className="py-12">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-4 gap-6">
            {iocStats.map((stat, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1 }}
                className="bg-slate-900/50 border border-slate-800 rounded-xl p-6 text-center"
                data-testid={`ioc-stat-${i}`}
              >
                <stat.icon className="w-8 h-8 text-red-400 mx-auto mb-3" />
                <div className="text-3xl font-display font-bold text-white mb-2">{stat.value}</div>
                <div className="text-slate-400 text-sm">{stat.label}</div>
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
            className="max-w-4xl mx-auto"
          >
            <h2 className="text-3xl font-display font-bold text-white text-center mb-8">
              Search <span className="text-primary">IOC Database</span>
            </h2>
            
            <div className="bg-slate-950 border border-slate-700 rounded-2xl p-8">
              <div className="flex gap-4 mb-6">
                <div className="flex-1 relative">
                  <Search className="absolute left-4 top-1/2 transform -translate-y-1/2 text-slate-500 w-5 h-5" />
                  <input
                    type="text"
                    placeholder="Search by IP, domain, hash, URL..."
                    className="w-full bg-slate-900 border border-slate-700 rounded-lg pl-12 pr-4 py-4 text-white focus:border-red-500 focus:outline-none"
                    data-testid="input-ioc-search"
                  />
                </div>
                <button 
                  className="px-8 py-4 bg-red-500 text-white font-bold rounded-lg hover:bg-red-600 transition-colors"
                  data-testid="button-search"
                >
                  Search
                </button>
              </div>
              
              <div className="flex flex-wrap gap-2">
                {searchFilters.map((filter, i) => (
                  <button
                    key={i}
                    className="px-3 py-1.5 bg-slate-800 text-slate-300 text-sm rounded-lg hover:bg-slate-700 transition-colors border border-slate-700"
                  >
                    <Filter className="w-3 h-3 inline mr-1" />
                    {filter}
                  </button>
                ))}
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
            className="text-center mb-16"
          >
            <h2 className="text-3xl md:text-4xl font-display font-bold text-white mb-4">
              IOC <span className="text-secondary">Categories</span>
            </h2>
          </motion.div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {iocTypes.map((ioc, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.05 }}
                className="bg-slate-900/50 border border-slate-800 rounded-xl p-6 hover:border-red-500/50 transition-all"
                data-testid={`ioc-type-${i}`}
              >
                <div className="flex justify-between items-start mb-3">
                  <h3 className="text-lg font-display font-bold text-white">{ioc.type}</h3>
                  <span className="px-2 py-1 bg-red-500/20 text-red-400 text-xs font-bold rounded">{ioc.count}</span>
                </div>
                <p className="text-slate-400 text-sm">{ioc.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-20 bg-slate-900/50">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
            >
              <h2 className="text-3xl font-display font-bold text-white mb-6">
                Export & <span className="text-primary">Integration</span>
              </h2>
              <p className="text-slate-400 mb-6">
                Export IOCs in multiple formats for integration with your security tools. Support for STIX, CSV, JSON, and plain text formats.
              </p>
              <ul className="space-y-3 mb-8">
                <li className="flex items-center gap-3 text-slate-300">
                  <Download className="w-5 h-5 text-cyan-400" />
                  One-click export in STIX 2.1 format
                </li>
                <li className="flex items-center gap-3 text-slate-300">
                  <Download className="w-5 h-5 text-cyan-400" />
                  CSV export for spreadsheet analysis
                </li>
                <li className="flex items-center gap-3 text-slate-300">
                  <Download className="w-5 h-5 text-cyan-400" />
                  JSON for programmatic integration
                </li>
                <li className="flex items-center gap-3 text-slate-300">
                  <Download className="w-5 h-5 text-cyan-400" />
                  Plain text for firewall rules
                </li>
              </ul>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="bg-gradient-to-br from-red-500/10 to-orange-500/10 border border-red-500/30 rounded-2xl p-8 text-center"
            >
              <Database className="w-16 h-16 text-red-400 mx-auto mb-6" />
              <h3 className="text-2xl font-display font-bold text-white mb-4">Get Full Access</h3>
              <p className="text-slate-400 mb-6">
                Unlock unlimited searches, bulk exports, and API access with a subscription.
              </p>
              <Link href="/threat-intelligence/subscribe">
                <button 
                  className="w-full px-6 py-4 bg-red-500 text-white font-bold rounded-lg hover:bg-red-600 transition-colors"
                  data-testid="button-get-access"
                >
                  Subscribe Now
                </button>
              </Link>
            </motion.div>
          </div>
        </div>
      </section>
    </PageLayout>
  );
}
