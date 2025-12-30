import { motion } from "framer-motion";
import { Building2, Users, Shield, Briefcase, Calendar, ArrowRight, CheckCircle } from "lucide-react";
import { Link } from "wouter";
import PageLayout from "@/components/PageLayout";

const corporateServices = [
  {
    icon: Building2,
    title: "Enterprise Training",
    description: "Customized training programs for your security teams. On-site or remote delivery.",
    href: "/corporate/enterprise-training"
  },
  {
    icon: Users,
    title: "Custom Programs",
    description: "Bespoke curriculum designed around your organization's specific technology stack and security challenges.",
    href: "/corporate/custom-programs"
  },
  {
    icon: Shield,
    title: "SOC Team Training",
    description: "Level up your SOC analysts with hands-on threat hunting, incident response, and SIEM training.",
    href: "/corporate/soc-team-training"
  },
  {
    icon: Briefcase,
    title: "Executive Briefings",
    description: "Board-level cybersecurity awareness and risk management sessions for C-suite executives.",
    href: "/corporate/executive-briefings"
  },
  {
    icon: Calendar,
    title: "CISO Roundtables",
    description: "Peer networking and knowledge sharing sessions for security leaders.",
    href: "/corporate/ciso-roundtables"
  },
];

const clients = [
  "Infosys", "TCS", "Wipro", "HCL", "Tech Mahindra",
  "State Bank of India", "HDFC Bank", "ICICI Bank",
  "Reliance Industries", "Tata Steel", "L&T"
];

const benefits = [
  "Tailored to your technology stack",
  "Flexible delivery: on-site, remote, or hybrid",
  "Progress tracking and certification",
  "Post-training support and resources",
  "Volume discounts for large teams",
];

export default function Corporate() {
  return (
    <PageLayout
      title="Corporate Training"
      subtitle="Upskill your security teams with enterprise-grade cybersecurity training"
      badge="Enterprise Solutions"
      breadcrumbs={[{ label: "Corporate" }]}
    >
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {corporateServices.map((service, i) => (
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
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="lg:w-1/2"
            >
              <h2 className="text-3xl font-display font-bold text-white mb-6">
                Why Choose T-SPAN for Corporate Training?
              </h2>
              <ul className="space-y-4">
                {benefits.map((benefit, i) => (
                  <li key={i} className="flex items-center gap-3 text-slate-300">
                    <CheckCircle className="w-5 h-5 text-primary flex-shrink-0" />
                    {benefit}
                  </li>
                ))}
              </ul>
            </motion.div>
            <motion.div
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="lg:w-1/2"
            >
              <h2 className="text-3xl font-display font-bold text-white mb-6">
                Trusted By
              </h2>
              <div className="flex flex-wrap gap-3">
                {clients.map((client, i) => (
                  <span key={i} className="px-4 py-2 bg-slate-800 text-slate-300 rounded-full text-sm">
                    {client}
                  </span>
                ))}
              </div>
            </motion.div>
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
              Request a Proposal
            </h2>
            <p className="text-slate-400 max-w-2xl mx-auto mb-8">
              Tell us about your training needs and we'll create a customized proposal for your organization.
            </p>
            <Link href="/corporate/request-proposal">
              <button className="px-6 py-3 bg-primary text-slate-950 font-bold rounded-lg hover:bg-primary/90 transition-colors">
                Get Started
              </button>
            </Link>
          </motion.div>
        </div>
      </section>
    </PageLayout>
  );
}
