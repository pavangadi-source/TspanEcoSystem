import { motion } from "framer-motion";
import { Link } from "wouter";
import PageLayout from "@/components/PageLayout";
import { Star, Quote, TrendingUp, Users, Clock, Shield, ArrowRight, Building2, Landmark, Globe, Heart } from "lucide-react";

const successMetrics = [
  { value: "99.99%", label: "Uptime Achieved", icon: TrendingUp },
  { value: "500+", label: "Enterprise Customers", icon: Building2 },
  { value: "40%", label: "Cost Reduction", icon: Clock },
  { value: "24/7", label: "Support Coverage", icon: Shield },
];

const testimonials = [
  {
    quote: "TCPWave transformed our DNS infrastructure. We've eliminated DNS-related outages and reduced our attack surface by 85%.",
    author: "Rajesh Kumar",
    title: "CISO, Leading Indian Bank",
    company: "Fortune 500 Bank",
    industry: "Banking",
    icon: Landmark,
  },
  {
    quote: "The automation capabilities saved our team 30 hours per week. The ROI was evident within the first quarter.",
    author: "Priya Sharma",
    title: "VP of Infrastructure",
    company: "Global Telecom Provider",
    industry: "Telecommunications",
    icon: Globe,
  },
  {
    quote: "Implementation was seamless. TCPWave's team understood government compliance requirements from day one.",
    author: "Dr. Venkat Rao",
    title: "Director of IT",
    company: "State Government Agency",
    industry: "Government",
    icon: Building2,
  },
  {
    quote: "Patient data security is paramount. TCPWave's DNS security features give us confidence in our network integrity.",
    author: "Dr. Anitha Menon",
    title: "CTO",
    company: "Multi-Specialty Hospital Chain",
    industry: "Healthcare",
    icon: Heart,
  },
];

const caseStudyPreviews = [
  {
    title: "National Bank DNS Modernization",
    challenge: "Legacy DNS infrastructure with frequent outages",
    solution: "TCPWave DDI platform with AI-powered threat detection",
    results: ["99.99% uptime achieved", "85% reduction in security incidents", "₹2.5 Cr annual savings"],
    industry: "Banking",
  },
  {
    title: "Telecom Provider Network Automation",
    challenge: "Manual IP management across 10,000+ network devices",
    solution: "Automated IPAM with API-driven provisioning",
    results: ["30 hours/week saved", "Zero IP conflicts", "90% faster provisioning"],
    industry: "Telecommunications",
  },
  {
    title: "Government Cloud Migration",
    challenge: "Secure DNS for hybrid cloud environment",
    solution: "TCPWave cloud-native DDI with government compliance",
    results: ["FedRAMP compliant", "Zero data breaches", "Seamless migration"],
    industry: "Government",
  },
];

export default function CustomerSuccess() {
  return (
    <PageLayout
      title="Customer Success"
      subtitle="Real results from enterprises worldwide trusting TCPWave for their critical infrastructure"
      badge="TCPWave"
      breadcrumbs={[
        { label: "TCPWave", href: "/tcpwave" },
        { label: "Customer Success" },
      ]}
    >
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-4 gap-8 mb-20">
            {successMetrics.map((metric, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1 }}
                className="bg-gradient-to-br from-cyan-500/10 to-blue-500/10 border border-cyan-500/30 rounded-2xl p-8 text-center"
                data-testid={`metric-${i}`}
              >
                <metric.icon className="w-10 h-10 text-cyan-400 mx-auto mb-4" />
                <div className="text-4xl font-display font-bold text-white mb-2">{metric.value}</div>
                <div className="text-slate-400">{metric.label}</div>
              </motion.div>
            ))}
          </div>

          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-3xl md:text-4xl font-display font-bold text-white mb-4">
              What Our <span className="text-primary">Customers Say</span>
            </h2>
            <p className="text-slate-400 max-w-2xl mx-auto">
              Industry leaders trust TCPWave for mission-critical infrastructure
            </p>
          </motion.div>

          <div className="grid md:grid-cols-2 gap-8 mb-20">
            {testimonials.map((testimonial, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1 }}
                className="bg-slate-900/50 border border-slate-800 rounded-2xl p-8 relative"
                data-testid={`testimonial-${i}`}
              >
                <Quote className="w-10 h-10 text-cyan-500/30 absolute top-6 right-6" />
                <div className="flex items-center gap-3 mb-6">
                  <div className="w-12 h-12 bg-gradient-to-br from-cyan-500 to-blue-500 rounded-full flex items-center justify-center">
                    <testimonial.icon className="w-6 h-6 text-white" />
                  </div>
                  <div>
                    <span className="px-3 py-1 bg-cyan-500/10 text-cyan-400 text-xs rounded-full">
                      {testimonial.industry}
                    </span>
                  </div>
                </div>
                <p className="text-slate-300 text-lg mb-6 italic">"{testimonial.quote}"</p>
                <div className="border-t border-slate-800 pt-4">
                  <div className="font-bold text-white">{testimonial.author}</div>
                  <div className="text-slate-400 text-sm">{testimonial.title}</div>
                  <div className="text-cyan-400 text-sm">{testimonial.company}</div>
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
              Featured <span className="text-secondary">Case Studies</span>
            </h2>
            <p className="text-slate-400 max-w-2xl mx-auto">
              Detailed success stories demonstrating measurable business impact
            </p>
          </motion.div>

          <div className="grid md:grid-cols-3 gap-8">
            {caseStudyPreviews.map((study, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1 }}
                className="bg-slate-950/80 border border-slate-800 rounded-2xl p-8 hover:border-cyan-500/50 transition-all group"
                data-testid={`case-study-${i}`}
              >
                <span className="px-3 py-1 bg-purple-500/10 text-purple-400 text-xs rounded-full">
                  {study.industry}
                </span>
                <h3 className="text-xl font-display font-bold text-white mt-4 mb-3 group-hover:text-cyan-400 transition-colors">
                  {study.title}
                </h3>
                <div className="space-y-4 text-sm">
                  <div>
                    <div className="text-slate-500 font-medium mb-1">Challenge</div>
                    <div className="text-slate-400">{study.challenge}</div>
                  </div>
                  <div>
                    <div className="text-slate-500 font-medium mb-1">Solution</div>
                    <div className="text-slate-400">{study.solution}</div>
                  </div>
                  <div>
                    <div className="text-slate-500 font-medium mb-1">Results</div>
                    <ul className="text-cyan-400 space-y-1">
                      {study.results.map((result, j) => (
                        <li key={j} className="flex items-center gap-2">
                          <Star className="w-3 h-3" /> {result}
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>

          <div className="text-center mt-12">
            <Link href="/tcpwave/case-studies">
              <button 
                className="px-6 py-3 bg-slate-800 text-white font-bold rounded-lg hover:bg-slate-700 transition-colors border border-slate-700"
                data-testid="button-view-case-studies"
              >
                View All Case Studies
              </button>
            </Link>
          </div>
        </div>
      </section>

      <section className="py-20">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="bg-gradient-to-r from-cyan-500/20 to-purple-500/20 border border-cyan-500/30 rounded-2xl p-12 text-center"
          >
            <h2 className="text-3xl md:text-4xl font-display font-bold text-white mb-4">
              Join Our Success Stories
            </h2>
            <p className="text-slate-300 max-w-2xl mx-auto mb-8">
              See how TCPWave can transform your network infrastructure with a personalized demo
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link href="/tcpwave/request-demo">
                <button 
                  className="px-8 py-4 bg-primary text-slate-950 font-bold rounded-lg hover:bg-primary/90 transition-colors"
                  data-testid="button-request-demo"
                >
                  Request Demo
                </button>
              </Link>
              <Link href="/contact/sales">
                <button className="px-8 py-4 bg-slate-800 text-white font-bold rounded-lg hover:bg-slate-700 transition-colors border border-slate-700">
                  Contact Sales
                </button>
              </Link>
            </div>
          </motion.div>
        </div>
      </section>
    </PageLayout>
  );
}
