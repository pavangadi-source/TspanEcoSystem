import { motion } from "framer-motion";
import { Building2, Shield, AlertTriangle, CreditCard, ArrowRight, CheckCircle } from "lucide-react";
import { Link } from "wouter";
import PageLayout from "@/components/PageLayout";

const bankingServices = [
  {
    icon: Shield,
    title: "RBI Compliance Training",
    description: "Comprehensive training on RBI cybersecurity framework, guidelines, and audit requirements.",
    href: "/banking/rbi-compliance"
  },
  {
    icon: AlertTriangle,
    title: "Fraud Detection",
    description: "Advanced techniques for detecting and preventing digital payment fraud and account takeover.",
    href: "/banking/fraud-detection"
  },
  {
    icon: CreditCard,
    title: "Transaction Security",
    description: "Securing payment gateways, UPI systems, and core banking infrastructure.",
    href: "/banking/transaction-security"
  },
  {
    icon: Building2,
    title: "Bank Training Programs",
    description: "Customized training for bank security teams, IT staff, and branch personnel.",
    href: "/banking/bank-training-programs"
  },
];

const bankingClients = [
  "State Bank of India", "HDFC Bank", "ICICI Bank", "Axis Bank",
  "Kotak Mahindra Bank", "Punjab National Bank", "Bank of Baroda", "Canara Bank"
];

const complianceFrameworks = [
  "RBI Cyber Security Framework",
  "PCI-DSS",
  "SWIFT CSP",
  "NIST Cybersecurity Framework",
  "ISO 27001",
  "SEBI Cybersecurity Guidelines",
];

export default function Banking() {
  return (
    <PageLayout
      title="Banking & Finance"
      subtitle="Specialized cybersecurity training for the financial services sector"
      badge="BFSI Solutions"
      breadcrumbs={[{ label: "Banking" }]}
    >
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-2 gap-8">
            {bankingServices.map((service, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1 }}
              >
                <Link href={service.href}>
                  <div className="bg-slate-900/50 border border-slate-800 rounded-2xl p-8 h-full hover:border-primary/50 transition-all cursor-pointer group">
                    <service.icon className="w-12 h-12 text-primary mb-6 group-hover:scale-110 transition-transform" />
                    <h3 className="text-xl font-display font-bold text-white mb-3 group-hover:text-primary transition-colors">{service.title}</h3>
                    <p className="text-slate-400 mb-4">{service.description}</p>
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
          <div className="flex flex-col lg:flex-row gap-12">
            <div className="lg:w-1/2">
              <motion.div
                initial={{ opacity: 0, x: -30 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
              >
                <h2 className="text-2xl font-display font-bold text-white mb-6">
                  Compliance Frameworks
                </h2>
                <div className="grid grid-cols-2 gap-3">
                  {complianceFrameworks.map((framework, i) => (
                    <div key={i} className="flex items-center gap-2">
                      <CheckCircle className="w-5 h-5 text-primary flex-shrink-0" />
                      <span className="text-slate-300 text-sm">{framework}</span>
                    </div>
                  ))}
                </div>
              </motion.div>
            </div>
            <div className="lg:w-1/2">
              <motion.div
                initial={{ opacity: 0, x: 30 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
              >
                <h2 className="text-2xl font-display font-bold text-white mb-6">
                  Trusted By Leading Banks
                </h2>
                <div className="flex flex-wrap gap-3">
                  {bankingClients.map((client, i) => (
                    <span key={i} className="px-4 py-2 bg-slate-800 text-slate-300 rounded-full text-sm">
                      {client}
                    </span>
                  ))}
                </div>
              </motion.div>
            </div>
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
              Secure Your Financial Institution
            </h2>
            <p className="text-slate-400 max-w-2xl mx-auto mb-8">
              Contact us to discuss customized training programs for your bank or financial institution.
            </p>
            <Link href="/contact/corporate">
              <button className="px-6 py-3 bg-primary text-slate-950 font-bold rounded-lg hover:bg-primary/90 transition-colors">
                Contact Us
              </button>
            </Link>
          </motion.div>
        </div>
      </section>
    </PageLayout>
  );
}
