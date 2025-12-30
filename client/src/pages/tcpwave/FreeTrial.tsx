import { motion } from "framer-motion";
import { Link } from "wouter";
import PageLayout from "@/components/PageLayout";
import { Check, Clock, Shield, Headphones, Server, Globe, Zap, ArrowRight } from "lucide-react";

const trialFeatures = [
  { feature: "Full DDI Platform Access", included: true },
  { feature: "DNS Security Module", included: true },
  { feature: "IPAM Automation", included: true },
  { feature: "Network Discovery", included: true },
  { feature: "API Access", included: true },
  { feature: "Reporting Dashboard", included: true },
  { feature: "Email Support", included: true },
  { feature: "Documentation Access", included: true },
];

const trialBenefits = [
  {
    icon: Clock,
    title: "30-Day Full Access",
    description: "Experience the complete TCPWave platform with no feature limitations for a full month",
  },
  {
    icon: Server,
    title: "Cloud Sandbox Environment",
    description: "Pre-configured environment ready to use - no infrastructure setup required",
  },
  {
    icon: Headphones,
    title: "Guided Onboarding",
    description: "Dedicated onboarding specialist to help you get started and maximize value",
  },
  {
    icon: Shield,
    title: "No Credit Card Required",
    description: "Start your trial immediately with just your business email - no payment info needed",
  },
];

const gettingStartedSteps = [
  { step: 1, title: "Sign Up", description: "Complete the form with your business details" },
  { step: 2, title: "Access Granted", description: "Receive your sandbox credentials within 24 hours" },
  { step: 3, title: "Onboarding Call", description: "Schedule a 30-minute guided tour with our team" },
  { step: 4, title: "Explore & Evaluate", description: "Full access to all features for 30 days" },
];

export default function FreeTrial() {
  return (
    <PageLayout
      title="Free Trial"
      subtitle="Experience the full power of TCPWave DDI platform with a 30-day free trial"
      badge="TCPWave"
      breadcrumbs={[
        { label: "TCPWave", href: "/tcpwave" },
        { label: "Free Trial" },
      ]}
    >
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="grid lg:grid-cols-2 gap-16 items-start">
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
            >
              <h2 className="text-3xl font-display font-bold text-white mb-6">
                Start Your <span className="text-primary">Free Trial</span>
              </h2>
              
              <form className="space-y-6">
                <div className="grid md:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-slate-400 text-sm mb-2">First Name *</label>
                    <input
                      type="text"
                      className="w-full bg-slate-900/50 border border-slate-700 rounded-lg px-4 py-3 text-white focus:border-cyan-500 focus:outline-none"
                      placeholder="Enter first name"
                      data-testid="input-first-name"
                    />
                  </div>
                  <div>
                    <label className="block text-slate-400 text-sm mb-2">Last Name *</label>
                    <input
                      type="text"
                      className="w-full bg-slate-900/50 border border-slate-700 rounded-lg px-4 py-3 text-white focus:border-cyan-500 focus:outline-none"
                      placeholder="Enter last name"
                      data-testid="input-last-name"
                    />
                  </div>
                </div>
                
                <div>
                  <label className="block text-slate-400 text-sm mb-2">Business Email *</label>
                  <input
                    type="email"
                    className="w-full bg-slate-900/50 border border-slate-700 rounded-lg px-4 py-3 text-white focus:border-cyan-500 focus:outline-none"
                    placeholder="you@company.com"
                    data-testid="input-email"
                  />
                </div>
                
                <div>
                  <label className="block text-slate-400 text-sm mb-2">Company *</label>
                  <input
                    type="text"
                    className="w-full bg-slate-900/50 border border-slate-700 rounded-lg px-4 py-3 text-white focus:border-cyan-500 focus:outline-none"
                    placeholder="Company name"
                    data-testid="input-company"
                  />
                </div>
                
                <div>
                  <label className="block text-slate-400 text-sm mb-2">Job Title</label>
                  <input
                    type="text"
                    className="w-full bg-slate-900/50 border border-slate-700 rounded-lg px-4 py-3 text-white focus:border-cyan-500 focus:outline-none"
                    placeholder="Your role"
                    data-testid="input-job-title"
                  />
                </div>
                
                <div>
                  <label className="block text-slate-400 text-sm mb-2">Phone Number</label>
                  <input
                    type="tel"
                    className="w-full bg-slate-900/50 border border-slate-700 rounded-lg px-4 py-3 text-white focus:border-cyan-500 focus:outline-none"
                    placeholder="+91 XXXXX XXXXX"
                    data-testid="input-phone"
                  />
                </div>
                
                <div>
                  <label className="block text-slate-400 text-sm mb-2">Primary Interest</label>
                  <select
                    className="w-full bg-slate-900/50 border border-slate-700 rounded-lg px-4 py-3 text-white focus:border-cyan-500 focus:outline-none"
                    data-testid="select-interest"
                  >
                    <option value="">Select primary interest</option>
                    <option value="dns-security">DNS Security</option>
                    <option value="ipam">IP Address Management</option>
                    <option value="ddi">Complete DDI Platform</option>
                    <option value="automation">Network Automation</option>
                    <option value="adc">ADC & Load Balancing</option>
                  </select>
                </div>
                
                <div className="flex items-start gap-3">
                  <input type="checkbox" id="consent" className="mt-1" data-testid="checkbox-consent" />
                  <label htmlFor="consent" className="text-slate-400 text-sm">
                    I agree to receive communications from TCPWave and T-SPAN University about products, services, and events. You can unsubscribe at any time.
                  </label>
                </div>
                
                <button
                  type="submit"
                  className="w-full px-8 py-4 bg-primary text-slate-950 font-bold rounded-lg hover:bg-primary/90 transition-colors"
                  data-testid="button-start-trial"
                >
                  Start Free Trial
                </button>
              </form>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="space-y-8"
            >
              <div className="bg-slate-900/50 border border-slate-800 rounded-2xl p-8">
                <h3 className="text-xl font-display font-bold text-white mb-6">Trial Includes</h3>
                <ul className="space-y-4">
                  {trialFeatures.map((item, i) => (
                    <li key={i} className="flex items-center gap-3">
                      <Check className="w-5 h-5 text-green-400" />
                      <span className="text-slate-300">{item.feature}</span>
                    </li>
                  ))}
                </ul>
              </div>

              <div className="bg-gradient-to-br from-cyan-500/10 to-blue-500/10 border border-cyan-500/30 rounded-2xl p-8">
                <div className="flex items-center gap-3 mb-4">
                  <Zap className="w-8 h-8 text-cyan-400" />
                  <h3 className="text-xl font-display font-bold text-white">Quick Start</h3>
                </div>
                <p className="text-slate-400 mb-4">
                  Get started in under 5 minutes with our pre-configured cloud sandbox environment.
                </p>
                <ul className="text-slate-300 space-y-2 text-sm">
                  <li>• No installation required</li>
                  <li>• Sample data pre-loaded</li>
                  <li>• Video tutorials included</li>
                </ul>
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
              Why Start a <span className="text-secondary">Free Trial</span>?
            </h2>
          </motion.div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {trialBenefits.map((benefit, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1 }}
                className="bg-slate-950/80 border border-slate-800 rounded-xl p-6 text-center"
                data-testid={`benefit-${i}`}
              >
                <benefit.icon className="w-12 h-12 text-cyan-400 mx-auto mb-4" />
                <h3 className="text-lg font-display font-bold text-white mb-2">{benefit.title}</h3>
                <p className="text-slate-400 text-sm">{benefit.description}</p>
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
              Getting <span className="text-primary">Started</span>
            </h2>
            <p className="text-slate-400 max-w-2xl mx-auto">
              From signup to hands-on experience in four simple steps
            </p>
          </motion.div>

          <div className="grid md:grid-cols-4 gap-8">
            {gettingStartedSteps.map((step, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1 }}
                className="relative"
              >
                <div className="bg-slate-900/50 border border-slate-800 rounded-xl p-6">
                  <div className="w-12 h-12 bg-gradient-to-br from-cyan-500 to-blue-500 rounded-full flex items-center justify-center text-white font-bold text-xl mb-4">
                    {step.step}
                  </div>
                  <h3 className="text-lg font-display font-bold text-white mb-2">{step.title}</h3>
                  <p className="text-slate-400 text-sm">{step.description}</p>
                </div>
                {i < gettingStartedSteps.length - 1 && (
                  <ArrowRight className="hidden md:block w-6 h-6 text-slate-600 absolute top-1/2 -right-7 transform -translate-y-1/2" />
                )}
              </motion.div>
            ))}
          </div>
        </div>
      </section>
    </PageLayout>
  );
}
