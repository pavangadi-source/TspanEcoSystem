import { motion } from "framer-motion";
import { Cog, Code, Zap, GitBranch, Terminal, Play, RefreshCw, Shield, CheckCircle } from "lucide-react";
import { Link } from "wouter";
import PageLayout from "@/components/PageLayout";

const automationCapabilities = [
  {
    icon: Code,
    title: "Infrastructure as Code",
    description: "Define your entire DDI infrastructure in version-controlled code with Terraform, Ansible, and native APIs.",
    tools: ["Terraform", "Ansible", "REST API", "Python SDK"]
  },
  {
    icon: GitBranch,
    title: "CI/CD Integration",
    description: "Integrate DDI changes into your deployment pipelines with automated validation and rollback.",
    tools: ["Jenkins", "GitHub Actions", "GitLab CI", "Azure DevOps"]
  },
  {
    icon: RefreshCw,
    title: "Self-Healing Networks",
    description: "Automatic detection and remediation of configuration drift, conflicts, and anomalies.",
    tools: ["Drift detection", "Auto-remediation", "Alerting", "Audit logs"]
  },
  {
    icon: Zap,
    title: "Event-Driven Automation",
    description: "Trigger automated workflows based on DNS queries, IP changes, or security events.",
    tools: ["Webhooks", "Event streaming", "Kafka integration", "Custom triggers"]
  },
];

const useCases = [
  { title: "Zero-Touch Provisioning", description: "Automatically provision DNS and DHCP for new servers, VMs, and containers" },
  { title: "Cloud Migration", description: "Automate IP readdressing and DNS updates during cloud migrations" },
  { title: "Security Response", description: "Instantly block malicious domains or IPs across your infrastructure" },
  { title: "Compliance Automation", description: "Automated compliance checks and reporting for audit requirements" },
];

const codeExample = `# Terraform example for TCPWave DDI
resource "tcpwave_dns_zone" "example" {
  name        = "example.com"
  zone_type   = "master"
  dnssec      = true
  rpz_enabled = true
}

resource "tcpwave_dns_record" "web" {
  zone_name = tcpwave_dns_zone.example.name
  name      = "www"
  type      = "A"
  ttl       = 300
  records   = ["10.0.1.100"]
}`;

export default function NetworkAutomation() {
  return (
    <PageLayout
      title="Network Automation"
      subtitle="Transform manual DDI operations into automated, self-healing infrastructure"
      badge="TCPWave Automation"
      breadcrumbs={[{ label: "TCPWave", href: "/tcpwave" }, { label: "Network Automation" }]}
    >
      <section className="py-20 bg-slate-900/50">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-3xl md:text-4xl font-display font-bold text-white mb-4">
              Automation <span className="text-primary">Capabilities</span>
            </h2>
            <p className="text-slate-400 max-w-2xl mx-auto">
              TCPWave provides comprehensive automation for every aspect of DDI management
            </p>
          </motion.div>

          <div className="grid md:grid-cols-2 gap-8">
            {automationCapabilities.map((cap, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1 }}
                className="bg-slate-950/80 border border-slate-800 rounded-2xl p-8 hover:border-primary/50 transition-all"
              >
                <cap.icon className="w-12 h-12 text-primary mb-6" />
                <h3 className="text-xl font-display font-bold text-white mb-3">{cap.title}</h3>
                <p className="text-slate-400 mb-6">{cap.description}</p>
                <div className="flex flex-wrap gap-2">
                  {cap.tools.map((tool, j) => (
                    <span key={j} className="px-3 py-1 bg-primary/10 text-primary text-sm rounded-full border border-primary/30">
                      {tool}
                    </span>
                  ))}
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="flex flex-col lg:flex-row items-center gap-12">
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="flex-1"
            >
              <h2 className="text-3xl md:text-4xl font-display font-bold text-white mb-6">
                Infrastructure as <span className="text-primary">Code</span>
              </h2>
              <p className="text-slate-400 mb-8">
                Define, version, and deploy your DDI infrastructure using familiar DevOps tools. 
                TCPWave's Terraform provider and Ansible modules integrate seamlessly with your existing workflows.
              </p>
              <div className="space-y-4">
                {["Version-controlled configuration", "Automated testing and validation", "Rollback and disaster recovery", "Multi-environment support"].map((item, i) => (
                  <div key={i} className="flex items-center gap-3">
                    <CheckCircle className="w-5 h-5 text-primary" />
                    <span className="text-slate-300">{item}</span>
                  </div>
                ))}
              </div>
            </motion.div>
            <motion.div
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="flex-1"
            >
              <div className="bg-slate-900 border border-slate-800 rounded-xl overflow-hidden">
                <div className="flex items-center gap-2 px-4 py-3 bg-slate-800 border-b border-slate-700">
                  <div className="w-3 h-3 rounded-full bg-red-500" />
                  <div className="w-3 h-3 rounded-full bg-yellow-500" />
                  <div className="w-3 h-3 rounded-full bg-green-500" />
                  <span className="text-slate-400 text-sm ml-2 font-mono">main.tf</span>
                </div>
                <pre className="p-4 text-sm overflow-x-auto">
                  <code className="text-slate-300 font-mono">{codeExample}</code>
                </pre>
              </div>
            </motion.div>
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
              Automation <span className="text-secondary">Use Cases</span>
            </h2>
          </motion.div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {useCases.map((useCase, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1 }}
                className="bg-slate-950/80 border border-slate-800 rounded-xl p-6 hover:border-primary/30 transition-all"
              >
                <h4 className="text-lg font-display font-bold text-white mb-3">{useCase.title}</h4>
                <p className="text-slate-400 text-sm">{useCase.description}</p>
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
              Learn DDI Automation at T-SPAN
            </h2>
            <p className="text-slate-400 max-w-2xl mx-auto mb-8">
              Master network automation with hands-on training using TCPWave's API, Terraform provider, and Ansible modules.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link href="/courses">
                <button className="px-6 py-3 bg-primary text-slate-950 font-bold rounded-lg hover:bg-primary/90 transition-colors">
                  View Courses
                </button>
              </Link>
              <Link href="/tcpwave/request-demo">
                <button className="px-6 py-3 bg-slate-800 text-white font-bold rounded-lg hover:bg-slate-700 transition-colors border border-slate-700">
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
