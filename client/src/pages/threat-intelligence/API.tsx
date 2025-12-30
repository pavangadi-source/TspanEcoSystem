import { motion } from "framer-motion";
import { Link } from "wouter";
import PageLayout from "@/components/PageLayout";
import { Code, Key, Zap, Shield, Book, Terminal, CheckCircle, Copy } from "lucide-react";

const apiEndpoints = [
  {
    method: "GET",
    endpoint: "/api/v1/ioc/ip/{ip_address}",
    description: "Look up threat intelligence for a specific IP address",
    response: "Threat score, categories, last seen, confidence",
  },
  {
    method: "GET",
    endpoint: "/api/v1/ioc/domain/{domain}",
    description: "Query domain reputation and threat data",
    response: "Risk score, registrar, DNS history, related IOCs",
  },
  {
    method: "POST",
    endpoint: "/api/v1/ioc/bulk",
    description: "Submit multiple IOCs for batch lookup",
    response: "Array of threat intelligence results",
  },
  {
    method: "GET",
    endpoint: "/api/v1/feed/{feed_type}",
    description: "Download threat feed in specified format",
    response: "JSON/CSV/STIX formatted feed data",
  },
  {
    method: "POST",
    endpoint: "/api/v1/submit/sample",
    description: "Submit file hash for malware analysis",
    response: "Analysis report with verdict",
  },
  {
    method: "GET",
    endpoint: "/api/v1/reports/latest",
    description: "Get latest threat reports and advisories",
    response: "Paginated list of threat reports",
  },
];

const codeExamples = {
  python: `import requests

API_KEY = "your_api_key_here"
BASE_URL = "https://api.tspan.in/v1"

headers = {
    "Authorization": f"Bearer {API_KEY}",
    "Content-Type": "application/json"
}

# Look up IP address
response = requests.get(
    f"{BASE_URL}/ioc/ip/1.2.3.4",
    headers=headers
)

if response.status_code == 200:
    data = response.json()
    print(f"Threat Score: {data['threat_score']}")
    print(f"Categories: {data['categories']}")`,
  javascript: `const API_KEY = 'your_api_key_here';
const BASE_URL = 'https://api.tspan.in/v1';

async function lookupIP(ip) {
  const response = await fetch(
    \`\${BASE_URL}/ioc/ip/\${ip}\`,
    {
      headers: {
        'Authorization': \`Bearer \${API_KEY}\`,
        'Content-Type': 'application/json'
      }
    }
  );
  
  if (response.ok) {
    const data = await response.json();
    console.log('Threat Score:', data.threat_score);
    console.log('Categories:', data.categories);
  }
}

lookupIP('1.2.3.4');`,
  curl: `curl -X GET "https://api.tspan.in/v1/ioc/ip/1.2.3.4" \\
  -H "Authorization: Bearer your_api_key_here" \\
  -H "Content-Type: application/json"`,
};

const rateLimits = [
  { tier: "Community", requests: "10,000/day", burst: "100/min" },
  { tier: "Professional", requests: "100,000/day", burst: "1,000/min" },
  { tier: "Enterprise", requests: "Unlimited", burst: "Custom" },
];

export default function API() {
  return (
    <PageLayout
      title="Threat Intelligence API"
      subtitle="Programmatic access to T-SPAN's comprehensive threat intelligence database"
      badge="Threat Intelligence"
      breadcrumbs={[
        { label: "Threat Intelligence", href: "/threat-intelligence" },
        { label: "API" },
      ]}
    >
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="grid lg:grid-cols-3 gap-8 mb-16">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="bg-slate-900/50 border border-slate-800 rounded-xl p-6"
            >
              <Key className="w-10 h-10 text-cyan-400 mb-4" />
              <h3 className="text-xl font-display font-bold text-white mb-2">API Key Authentication</h3>
              <p className="text-slate-400">Secure Bearer token authentication for all API requests</p>
            </motion.div>
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.1 }}
              className="bg-slate-900/50 border border-slate-800 rounded-xl p-6"
            >
              <Zap className="w-10 h-10 text-yellow-400 mb-4" />
              <h3 className="text-xl font-display font-bold text-white mb-2">Low Latency</h3>
              <p className="text-slate-400">Average response time under 100ms from India endpoints</p>
            </motion.div>
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.2 }}
              className="bg-slate-900/50 border border-slate-800 rounded-xl p-6"
            >
              <Shield className="w-10 h-10 text-green-400 mb-4" />
              <h3 className="text-xl font-display font-bold text-white mb-2">TLS Encrypted</h3>
              <p className="text-slate-400">All API traffic encrypted with TLS 1.3</p>
            </motion.div>
          </div>

          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-12"
          >
            <h2 className="text-3xl md:text-4xl font-display font-bold text-white mb-4">
              API <span className="text-primary">Endpoints</span>
            </h2>
          </motion.div>

          <div className="space-y-4">
            {apiEndpoints.map((endpoint, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.05 }}
                className="bg-slate-900/50 border border-slate-800 rounded-xl p-6"
                data-testid={`endpoint-${i}`}
              >
                <div className="flex flex-wrap items-center gap-4 mb-3">
                  <span className={`px-3 py-1 rounded font-mono text-sm font-bold ${
                    endpoint.method === "GET" ? "bg-green-500/20 text-green-400" : "bg-blue-500/20 text-blue-400"
                  }`}>
                    {endpoint.method}
                  </span>
                  <code className="text-cyan-400 font-mono text-sm">{endpoint.endpoint}</code>
                </div>
                <p className="text-slate-400 mb-2">{endpoint.description}</p>
                <p className="text-slate-500 text-sm">
                  <span className="text-slate-600">Returns:</span> {endpoint.response}
                </p>
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
              Code <span className="text-secondary">Examples</span>
            </h2>
          </motion.div>

          <div className="space-y-8">
            {Object.entries(codeExamples).map(([lang, code], i) => (
              <motion.div
                key={lang}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1 }}
                className="bg-slate-950 border border-slate-800 rounded-xl overflow-hidden"
              >
                <div className="flex items-center justify-between px-4 py-2 bg-slate-800/50 border-b border-slate-700">
                  <span className="text-white font-medium capitalize">{lang}</span>
                  <button className="text-slate-400 hover:text-white transition-colors">
                    <Copy className="w-4 h-4" />
                  </button>
                </div>
                <pre className="p-4 overflow-x-auto">
                  <code className="text-slate-300 text-sm font-mono">{code}</code>
                </pre>
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
            className="text-center mb-12"
          >
            <h2 className="text-3xl md:text-4xl font-display font-bold text-white mb-4">
              Rate <span className="text-primary">Limits</span>
            </h2>
          </motion.div>

          <div className="max-w-2xl mx-auto">
            <div className="bg-slate-900/50 border border-slate-800 rounded-xl overflow-hidden">
              <table className="w-full">
                <thead>
                  <tr className="border-b border-slate-700">
                    <th className="text-left py-4 px-6 text-slate-400">Tier</th>
                    <th className="text-center py-4 px-6 text-slate-400">Daily Requests</th>
                    <th className="text-center py-4 px-6 text-slate-400">Burst Limit</th>
                  </tr>
                </thead>
                <tbody>
                  {rateLimits.map((limit, i) => (
                    <tr key={i} className="border-b border-slate-800">
                      <td className="py-4 px-6 text-white font-medium">{limit.tier}</td>
                      <td className="py-4 px-6 text-center text-cyan-400">{limit.requests}</td>
                      <td className="py-4 px-6 text-center text-slate-400">{limit.burst}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>

          <div className="text-center mt-12">
            <Link href="/threat-intelligence/subscribe">
              <button 
                className="px-8 py-4 bg-red-500 text-white font-bold rounded-lg hover:bg-red-600 transition-colors"
                data-testid="button-get-api-key"
              >
                Get Your API Key
              </button>
            </Link>
          </div>
        </div>
      </section>
    </PageLayout>
  );
}
