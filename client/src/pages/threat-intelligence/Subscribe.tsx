import { motion } from "framer-motion";
import { Link } from "wouter";
import PageLayout from "@/components/PageLayout";
import { Shield, Check, Zap, Users, Building2, ArrowRight } from "lucide-react";

const plans = [
  {
    name: "Community",
    price: "Free",
    period: "",
    description: "For individual researchers and small security teams",
    features: [
      "Basic IOC lookup (10K/day)",
      "Community threat feeds",
      "Daily feed updates",
      "Basic dashboard access",
      "Email support",
    ],
    cta: "Get Started",
    highlight: false,
  },
  {
    name: "Professional",
    price: "₹49,999",
    period: "/month",
    description: "For growing security teams and mid-size enterprises",
    features: [
      "Everything in Community",
      "100K API calls/day",
      "Real-time threat feeds",
      "India-specific intelligence",
      "Malware sandbox (100/day)",
      "STIX/TAXII integration",
      "Priority email support",
      "Threat reports access",
    ],
    cta: "Start Free Trial",
    highlight: true,
  },
  {
    name: "Enterprise",
    price: "Custom",
    period: "",
    description: "For large enterprises with advanced security needs",
    features: [
      "Everything in Professional",
      "Unlimited API access",
      "Dedicated infrastructure",
      "Custom integrations",
      "Threat exchange participation",
      "On-premise deployment option",
      "24/7 dedicated support",
      "Quarterly threat briefings",
      "Custom threat reports",
    ],
    cta: "Contact Sales",
    highlight: false,
  },
];

const faqs = [
  {
    question: "Can I try before subscribing?",
    answer: "Yes! Professional plan comes with a 14-day free trial. No credit card required to start.",
  },
  {
    question: "What payment methods do you accept?",
    answer: "We accept credit/debit cards, UPI, net banking, and wire transfers for enterprise plans.",
  },
  {
    question: "Can I upgrade or downgrade my plan?",
    answer: "Yes, you can change your plan at any time. Changes take effect at the next billing cycle.",
  },
  {
    question: "Is there a discount for annual billing?",
    answer: "Yes, annual plans receive a 20% discount compared to monthly billing.",
  },
];

export default function Subscribe() {
  return (
    <PageLayout
      title="Subscribe to Threat Intelligence"
      subtitle="Choose the plan that fits your security needs"
      badge="Threat Intelligence"
      breadcrumbs={[
        { label: "Threat Intelligence", href: "/threat-intelligence" },
        { label: "Subscribe" },
      ]}
    >
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-3 gap-8">
            {plans.map((plan, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1 }}
                className={`rounded-2xl p-8 ${
                  plan.highlight
                    ? "bg-gradient-to-br from-red-500/20 to-orange-500/20 border-2 border-red-500/50 scale-105"
                    : "bg-slate-900/50 border border-slate-800"
                }`}
                data-testid={`plan-${i}`}
              >
                {plan.highlight && (
                  <span className="px-3 py-1 bg-red-500 text-white text-xs font-bold rounded-full mb-4 inline-block">
                    Most Popular
                  </span>
                )}
                <h3 className="text-2xl font-display font-bold text-white mb-2">{plan.name}</h3>
                <div className="mb-4">
                  <span className="text-4xl font-bold text-primary">{plan.price}</span>
                  <span className="text-slate-400">{plan.period}</span>
                </div>
                <p className="text-slate-400 text-sm mb-6">{plan.description}</p>
                <ul className="space-y-3 mb-8">
                  {plan.features.map((feature, j) => (
                    <li key={j} className="flex items-start gap-2 text-slate-300 text-sm">
                      <Check className="w-4 h-4 text-green-400 mt-0.5 flex-shrink-0" />
                      {feature}
                    </li>
                  ))}
                </ul>
                <button
                  className={`w-full px-6 py-3 font-bold rounded-lg transition-colors ${
                    plan.highlight
                      ? "bg-red-500 text-white hover:bg-red-600"
                      : "bg-slate-800 text-white hover:bg-slate-700 border border-slate-700"
                  }`}
                  data-testid={`button-${plan.name.toLowerCase()}`}
                >
                  {plan.cta}
                </button>
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
              Frequently Asked <span className="text-secondary">Questions</span>
            </h2>
          </motion.div>

          <div className="max-w-3xl mx-auto space-y-4">
            {faqs.map((faq, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1 }}
                className="bg-slate-950/80 border border-slate-800 rounded-xl p-6"
              >
                <h3 className="text-lg font-bold text-white mb-2">{faq.question}</h3>
                <p className="text-slate-400">{faq.answer}</p>
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
            className="bg-gradient-to-r from-red-500/20 to-orange-500/20 border border-red-500/30 rounded-2xl p-12 text-center"
          >
            <Building2 className="w-16 h-16 text-red-400 mx-auto mb-6" />
            <h2 className="text-3xl md:text-4xl font-display font-bold text-white mb-4">
              Need an Enterprise Solution?
            </h2>
            <p className="text-slate-300 max-w-2xl mx-auto mb-8">
              Contact our sales team for custom pricing, dedicated infrastructure, and tailored threat intelligence solutions for your organization.
            </p>
            <Link href="/contact/sales">
              <button 
                className="px-8 py-4 bg-red-500 text-white font-bold rounded-lg hover:bg-red-600 transition-colors"
                data-testid="button-contact-sales"
              >
                Contact Enterprise Sales
              </button>
            </Link>
          </motion.div>
        </div>
      </section>
    </PageLayout>
  );
}
