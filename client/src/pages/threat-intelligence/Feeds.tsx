import { motion } from "framer-motion";
import { Link } from "wouter";
import PageLayout from "@/components/PageLayout";
import { Rss, Globe, Shield, Clock, Server, FileCode, CheckCircle, Download, Zap } from "lucide-react";

const feedTypes = [
  {
    name: "Malicious IP Addresses",
    description: "Real-time feed of known malicious IP addresses including C2 servers, botnet nodes, and attack sources",
    format: "JSON, CSV, STIX",
    frequency: "Every 5 minutes",
    count: "500K+ active",
  },
  {
    name: "Domain Intelligence",
    description: "Malicious domains including phishing, malware distribution, and command & control domains",
    format: "JSON, CSV, STIX",
    frequency: "Every 15 minutes",
    count: "2M+ domains",
  },
  {
    name: "URL Blacklist",
    description: "Curated list of malicious URLs for web filtering and threat prevention",
    format: "JSON, CSV, Plain text",
    frequency: "Hourly",
    count: "10M+ URLs",
  },
  {
    name: "File Hash Database",
    description: "MD5, SHA1, and SHA256 hashes of known malware samples",
    format: "JSON, CSV, STIX",
    frequency: "Every 30 minutes",
    count: "100M+ hashes",
  },
  {
    name: "SSL Certificate Intelligence",
    description: "Suspicious SSL certificates used in phishing and man-in-the-middle attacks",
    format: "JSON, STIX",
    frequency: "Daily",
    count: "1M+ certificates",
  },
  {
    name: "India Threat Feed",
    description: "India-specific threat intelligence including local threat actors and targeted campaigns",
    format: "JSON, STIX",
    frequency: "Every 15 minutes",
    count: "Exclusive",
  },
];

const integrationMethods = [
  { method: "REST API", description: "Pull feeds via secure REST endpoints" },
  { method: "TAXII 2.1", description: "Standard threat intelligence sharing" },
  { method: "Syslog/CEF", description: "Direct SIEM integration" },
  { method: "Webhook", description: "Push notifications for new threats" },
];

const feedTiers = [
  {
    name: "Community",
    price: "Free",
    features: ["Basic IP & Domain feeds", "Daily updates", "REST API access", "10K queries/day"],
    highlight: false,
  },
  {
    name: "Professional",
    price: "₹49,999/month",
    features: ["All feed types", "Real-time updates", "STIX/TAXII support", "100K queries/day", "India-specific feeds", "Email support"],
    highlight: true,
  },
  {
    name: "Enterprise",
    price: "Custom",
    features: ["Unlimited access", "Dedicated infrastructure", "Custom integrations", "SLA guarantees", "Dedicated support", "On-premise option"],
    highlight: false,
  },
];

export default function Feeds() {
  return (
    <PageLayout
      title="Threat Intelligence Feeds"
      subtitle="High-fidelity, actionable threat data to power your security operations"
      badge="Threat Intelligence"
      breadcrumbs={[
        { label: "Threat Intelligence", href: "/threat-intelligence" },
        { label: "Feeds" },
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
              Available <span className="text-primary">Feeds</span>
            </h2>
            <p className="text-slate-400 max-w-2xl mx-auto">
              Curated threat intelligence from global and India-focused sources
            </p>
          </motion.div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {feedTypes.map((feed, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.05 }}
                className="bg-slate-900/50 border border-slate-800 rounded-xl p-6 hover:border-red-500/50 transition-all"
                data-testid={`feed-${i}`}
              >
                <Rss className="w-8 h-8 text-red-400 mb-4" />
                <h3 className="text-lg font-display font-bold text-white mb-2">{feed.name}</h3>
                <p className="text-slate-400 text-sm mb-4">{feed.description}</p>
                <div className="space-y-2 text-sm">
                  <div className="flex justify-between">
                    <span className="text-slate-500">Format:</span>
                    <span className="text-slate-300">{feed.format}</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-slate-500">Updates:</span>
                    <span className="text-cyan-400">{feed.frequency}</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-slate-500">Coverage:</span>
                    <span className="text-green-400">{feed.count}</span>
                  </div>
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
              Integration <span className="text-secondary">Methods</span>
            </h2>
          </motion.div>

          <div className="grid md:grid-cols-4 gap-6">
            {integrationMethods.map((method, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1 }}
                className="bg-slate-950/80 border border-slate-800 rounded-xl p-6 text-center"
              >
                <FileCode className="w-10 h-10 text-cyan-400 mx-auto mb-4" />
                <h3 className="text-lg font-display font-bold text-white mb-2">{method.method}</h3>
                <p className="text-slate-400 text-sm">{method.description}</p>
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
              Subscription <span className="text-primary">Tiers</span>
            </h2>
          </motion.div>

          <div className="grid md:grid-cols-3 gap-8">
            {feedTiers.map((tier, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1 }}
                className={`rounded-2xl p-8 ${
                  tier.highlight
                    ? "bg-gradient-to-br from-red-500/20 to-orange-500/20 border-2 border-red-500/50"
                    : "bg-slate-900/50 border border-slate-800"
                }`}
                data-testid={`tier-${i}`}
              >
                {tier.highlight && (
                  <span className="px-3 py-1 bg-red-500 text-white text-xs font-bold rounded-full mb-4 inline-block">
                    Most Popular
                  </span>
                )}
                <h3 className="text-2xl font-display font-bold text-white mb-2">{tier.name}</h3>
                <div className="text-3xl font-bold text-primary mb-6">{tier.price}</div>
                <ul className="space-y-3 mb-8">
                  {tier.features.map((feature, j) => (
                    <li key={j} className="flex items-center gap-2 text-slate-300">
                      <CheckCircle className="w-4 h-4 text-green-400" />
                      {feature}
                    </li>
                  ))}
                </ul>
                <Link href="/threat-intelligence/subscribe">
                  <button 
                    className={`w-full px-6 py-3 font-bold rounded-lg transition-colors ${
                      tier.highlight
                        ? "bg-red-500 text-white hover:bg-red-600"
                        : "bg-slate-800 text-white hover:bg-slate-700 border border-slate-700"
                    }`}
                  >
                    {tier.price === "Free" ? "Get Started" : tier.price === "Custom" ? "Contact Sales" : "Subscribe"}
                  </button>
                </Link>
              </motion.div>
            ))}
          </div>
        </div>
      </section>
    </PageLayout>
  );
}
