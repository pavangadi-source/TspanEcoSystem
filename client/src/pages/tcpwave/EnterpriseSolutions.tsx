import { motion } from "framer-motion";
import { Link } from "wouter";
import PageLayout from "@/components/PageLayout";
import { Building2, Globe, Shield, Clock, Users, Server, Zap, CheckCircle, ArrowRight, HeadphonesIcon } from "lucide-react";

const enterpriseFeatures = [
  {
    icon: Globe,
    title: "Global Scale Deployment",
    description: "Deploy across multiple regions with automatic failover and geo-redundancy for mission-critical operations",
    features: ["Multi-region architecture", "Automatic failover", "99.999% SLA available", "Edge caching"],
  },
  {
    icon: Shield,
    title: "Enterprise Security",
    description: "Bank-grade security with advanced threat protection and compliance certifications",
    features: ["SOC 2 Type II certified", "GDPR compliant", "End-to-end encryption", "Zero-trust architecture"],
  },
  {
    icon: Users,
    title: "Dedicated Support",
    description: "Premium support with dedicated account managers and 24/7 expert assistance",
    features: ["Dedicated TAM", "24/7/365 support", "4-hour response SLA", "Quarterly business reviews"],
  },
  {
    icon: Zap,
    title: "Advanced Integration",
    description: "Seamless integration with enterprise systems through extensive API and automation capabilities",
    features: ["REST & GraphQL APIs", "Terraform provider", "Ansible modules", "ServiceNow integration"],
  },
];

const deploymentOptions = [
  {
    title: "Cloud-Native",
    description: "Fully managed SaaS deployment in TCPWave's secure cloud infrastructure",
    benefits: ["Zero infrastructure management", "Automatic updates", "Elastic scaling", "Built-in redundancy"],
  },
  {
    title: "Private Cloud",
    description: "Dedicated infrastructure in your preferred cloud provider (AWS, Azure, GCP)",
    benefits: ["Data sovereignty", "Custom security policies", "VPC integration", "Compliance control"],
  },
  {
    title: "On-Premises",
    description: "Full deployment within your data center with complete control",
    benefits: ["Air-gapped option", "Complete data control", "Custom hardware", "Existing infrastructure"],
  },
  {
    title: "Hybrid",
    description: "Combine cloud and on-prem for optimal flexibility and compliance",
    benefits: ["Best of both worlds", "Gradual migration", "DR flexibility", "Workload optimization"],
  },
];

const slaDetails = [
  { metric: "Uptime SLA", standard: "99.9%", enterprise: "99.99%", premium: "99.999%" },
  { metric: "Response Time", standard: "8 hours", enterprise: "4 hours", premium: "15 minutes" },
  { metric: "Resolution Time", standard: "48 hours", enterprise: "24 hours", premium: "4 hours" },
  { metric: "Support Hours", standard: "Business", enterprise: "24/7", premium: "24/7 + TAM" },
];

export default function EnterpriseSolutions() {
  return (
    <PageLayout
      title="Enterprise Solutions"
      subtitle="Mission-critical DDI infrastructure for global enterprises requiring the highest levels of performance, security, and support"
      badge="TCPWave"
      breadcrumbs={[
        { label: "TCPWave", href: "/tcpwave" },
        { label: "Enterprise Solutions" },
      ]}
    >
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-2 gap-8">
            {enterpriseFeatures.map((feature, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1 }}
                className="bg-slate-900/50 border border-slate-800 rounded-2xl p-8 hover:border-cyan-500/50 transition-all"
                data-testid={`enterprise-feature-${i}`}
              >
                <feature.icon className="w-12 h-12 text-cyan-400 mb-6" />
                <h3 className="text-2xl font-display font-bold text-white mb-3">{feature.title}</h3>
                <p className="text-slate-400 mb-6">{feature.description}</p>
                <ul className="space-y-2">
                  {feature.features.map((item, j) => (
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

      <section className="py-20 bg-slate-900/50">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-3xl md:text-4xl font-display font-bold text-white mb-4">
              Flexible <span className="text-secondary">Deployment Options</span>
            </h2>
            <p className="text-slate-400 max-w-2xl mx-auto">
              Choose the deployment model that best fits your security, compliance, and operational requirements
            </p>
          </motion.div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {deploymentOptions.map((option, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1 }}
                className="bg-slate-950/80 border border-slate-800 rounded-xl p-6"
                data-testid={`deployment-${i}`}
              >
                <h3 className="text-xl font-display font-bold text-white mb-3">{option.title}</h3>
                <p className="text-slate-400 text-sm mb-4">{option.description}</p>
                <ul className="space-y-2">
                  {option.benefits.map((benefit, j) => (
                    <li key={j} className="flex items-center gap-2 text-slate-300 text-sm">
                      <CheckCircle className="w-3 h-3 text-cyan-400" />
                      {benefit}
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
              Service Level <span className="text-primary">Agreements</span>
            </h2>
            <p className="text-slate-400 max-w-2xl mx-auto">
              Enterprise-grade SLAs backed by contractual guarantees
            </p>
          </motion.div>

          <div className="overflow-x-auto">
            <table className="w-full border-collapse">
              <thead>
                <tr className="border-b border-slate-700">
                  <th className="text-left py-4 px-6 text-slate-400 font-medium">Metric</th>
                  <th className="text-center py-4 px-6 text-slate-400 font-medium">Standard</th>
                  <th className="text-center py-4 px-6 text-cyan-400 font-medium">Enterprise</th>
                  <th className="text-center py-4 px-6 text-purple-400 font-medium">Premium</th>
                </tr>
              </thead>
              <tbody>
                {slaDetails.map((row, i) => (
                  <tr key={i} className="border-b border-slate-800">
                    <td className="py-4 px-6 text-white font-medium">{row.metric}</td>
                    <td className="py-4 px-6 text-center text-slate-400">{row.standard}</td>
                    <td className="py-4 px-6 text-center text-cyan-400">{row.enterprise}</td>
                    <td className="py-4 px-6 text-center text-purple-400">{row.premium}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </section>

      <section className="py-20">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="bg-gradient-to-r from-cyan-500/20 to-purple-500/20 border border-cyan-500/30 rounded-2xl p-12"
          >
            <div className="grid md:grid-cols-2 gap-12 items-center">
              <div>
                <h2 className="text-3xl md:text-4xl font-display font-bold text-white mb-4">
                  Ready for Enterprise-Grade Infrastructure?
                </h2>
                <p className="text-slate-300 mb-6">
                  Connect with our enterprise team to discuss your requirements and receive a customized solution proposal.
                </p>
                <ul className="space-y-3 mb-8">
                  <li className="flex items-center gap-3 text-slate-300">
                    <CheckCircle className="w-5 h-5 text-green-400" />
                    Dedicated solution architect consultation
                  </li>
                  <li className="flex items-center gap-3 text-slate-300">
                    <CheckCircle className="w-5 h-5 text-green-400" />
                    Custom proof-of-concept deployment
                  </li>
                  <li className="flex items-center gap-3 text-slate-300">
                    <CheckCircle className="w-5 h-5 text-green-400" />
                    ROI analysis and business case support
                  </li>
                </ul>
                <div className="flex flex-col sm:flex-row gap-4">
                  <Link href="/contact/sales">
                    <button 
                      className="px-8 py-4 bg-primary text-slate-950 font-bold rounded-lg hover:bg-primary/90 transition-colors"
                      data-testid="button-contact-sales"
                    >
                      Contact Enterprise Sales
                    </button>
                  </Link>
                  <Link href="/tcpwave/request-demo">
                    <button className="px-8 py-4 bg-slate-800 text-white font-bold rounded-lg hover:bg-slate-700 transition-colors border border-slate-700">
                      Schedule Demo
                    </button>
                  </Link>
                </div>
              </div>
              <div className="hidden md:flex justify-center">
                <div className="relative">
                  <Building2 className="w-48 h-48 text-cyan-500/20" />
                  <HeadphonesIcon className="w-20 h-20 text-cyan-400 absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2" />
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </section>
    </PageLayout>
  );
}
