import { motion } from "framer-motion";
import { Check, X, Zap, Building2, Shield, HelpCircle } from "lucide-react";
import { Link } from "wouter";
import PageLayout from "@/components/PageLayout";

const plans = [
  {
    name: "Essential",
    description: "For small organizations starting their DDI journey",
    price: "Custom",
    period: "per month",
    color: "from-slate-500 to-slate-600",
    features: [
      { feature: "Up to 1,000 IP addresses", included: true },
      { feature: "Basic DNS management", included: true },
      { feature: "DHCP services", included: true },
      { feature: "Web-based console", included: true },
      { feature: "Email support", included: true },
      { feature: "DNSSEC", included: false },
      { feature: "API access", included: false },
      { feature: "Multi-cloud integration", included: false },
      { feature: "24/7 support", included: false },
    ],
    cta: "Contact Sales",
    href: "/contact/sales"
  },
  {
    name: "Professional",
    description: "For growing enterprises with advanced DDI needs",
    price: "Custom",
    period: "per month",
    color: "from-primary to-cyan-600",
    popular: true,
    features: [
      { feature: "Up to 50,000 IP addresses", included: true },
      { feature: "Advanced DNS with DNSSEC", included: true },
      { feature: "High-availability DHCP", included: true },
      { feature: "Full IPAM suite", included: true },
      { feature: "REST API access", included: true },
      { feature: "SSO integration", included: true },
      { feature: "Multi-cloud support", included: true },
      { feature: "Business hours support", included: true },
      { feature: "Dedicated CSM", included: false },
    ],
    cta: "Request Demo",
    href: "/tcpwave/request-demo"
  },
  {
    name: "Enterprise",
    description: "For large organizations with mission-critical DDI",
    price: "Custom",
    period: "per month",
    color: "from-secondary to-purple-600",
    features: [
      { feature: "Unlimited IP addresses", included: true },
      { feature: "Full DDI platform", included: true },
      { feature: "ADC & load balancing", included: true },
      { feature: "Threat intelligence feeds", included: true },
      { feature: "Custom integrations", included: true },
      { feature: "On-premise deployment", included: true },
      { feature: "24/7/365 support", included: true },
      { feature: "Dedicated CSM", included: true },
      { feature: "SLA guarantees", included: true },
    ],
    cta: "Contact Enterprise Sales",
    href: "/contact/sales"
  },
];

const faqs = [
  { q: "Do you offer a free trial?", a: "Yes, we offer a 30-day free trial of our Professional plan for qualified organizations." },
  { q: "How is pricing calculated?", a: "Pricing is based on the number of managed IP addresses, features required, and support level." },
  { q: "Can I upgrade my plan later?", a: "Yes, you can upgrade at any time. Our team will help migrate your configuration seamlessly." },
  { q: "Is training included?", a: "T-SPAN University training is available separately. Enterprise customers receive complimentary training credits." },
];

export default function Pricing() {
  return (
    <PageLayout
      title="Pricing"
      subtitle="Flexible plans for organizations of all sizes"
      badge="TCPWave Pricing"
      breadcrumbs={[{ label: "TCPWave", href: "/tcpwave" }, { label: "Pricing" }]}
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
                className={`relative bg-slate-900/50 border rounded-2xl overflow-hidden ${plan.popular ? 'border-primary' : 'border-slate-800'}`}
              >
                {plan.popular && (
                  <div className="absolute top-0 left-0 right-0 bg-primary text-slate-950 text-center py-2 text-sm font-bold">
                    Most Popular
                  </div>
                )}
                <div className={`p-8 ${plan.popular ? 'pt-14' : ''}`}>
                  <div className={`w-12 h-12 rounded-xl bg-gradient-to-br ${plan.color} flex items-center justify-center mb-6`}>
                    {plan.name === "Essential" && <Building2 className="w-6 h-6 text-white" />}
                    {plan.name === "Professional" && <Zap className="w-6 h-6 text-white" />}
                    {plan.name === "Enterprise" && <Shield className="w-6 h-6 text-white" />}
                  </div>
                  
                  <h3 className="text-2xl font-display font-bold text-white mb-2">{plan.name}</h3>
                  <p className="text-slate-400 text-sm mb-6">{plan.description}</p>
                  
                  <div className="mb-6">
                    <span className="text-3xl font-display font-bold text-white">{plan.price}</span>
                    <span className="text-slate-500 ml-2">{plan.period}</span>
                  </div>
                  
                  <ul className="space-y-3 mb-8">
                    {plan.features.map((feature, j) => (
                      <li key={j} className="flex items-center gap-3">
                        {feature.included ? (
                          <Check className="w-5 h-5 text-green-500 flex-shrink-0" />
                        ) : (
                          <X className="w-5 h-5 text-slate-600 flex-shrink-0" />
                        )}
                        <span className={feature.included ? "text-slate-300" : "text-slate-600"}>
                          {feature.feature}
                        </span>
                      </li>
                    ))}
                  </ul>
                  
                  <Link href={plan.href}>
                    <button className={`w-full py-3 rounded-lg font-bold transition-colors ${
                      plan.popular 
                        ? 'bg-primary text-slate-950 hover:bg-primary/90' 
                        : 'bg-slate-800 text-white hover:bg-slate-700 border border-slate-700'
                    }`}>
                      {plan.cta}
                    </button>
                  </Link>
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
              Frequently Asked <span className="text-primary">Questions</span>
            </h2>
          </motion.div>

          <div className="max-w-3xl mx-auto space-y-6">
            {faqs.map((faq, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1 }}
                className="bg-slate-950/80 border border-slate-800 rounded-xl p-6"
              >
                <div className="flex items-start gap-4">
                  <HelpCircle className="w-6 h-6 text-primary flex-shrink-0" />
                  <div>
                    <h4 className="text-lg font-display font-bold text-white mb-2">{faq.q}</h4>
                    <p className="text-slate-400">{faq.a}</p>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>
    </PageLayout>
  );
}
