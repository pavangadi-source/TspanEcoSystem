import { motion } from "framer-motion";
import { HelpCircle, MessageSquare, Mail, Phone, Book, Video } from "lucide-react";
import { Link } from "wouter";
import PageLayout from "@/components/PageLayout";

const supportOptions = [
  {
    icon: MessageSquare,
    title: "Live Chat",
    description: "Chat with our support team in real-time. Available 9 AM - 9 PM IST.",
    action: "Start Chat",
    available: true
  },
  {
    icon: Mail,
    title: "Email Support",
    description: "Send us an email and we'll respond within 24 hours.",
    action: "support@tspan.edu",
    available: true
  },
  {
    icon: Phone,
    title: "Phone Support",
    description: "Call us for urgent issues. Available for enrolled students.",
    action: "+91 40 2345 6789",
    available: true
  },
  {
    icon: Book,
    title: "Knowledge Base",
    description: "Browse our comprehensive help articles and tutorials.",
    action: "View Articles",
    href: "/faq",
    available: true
  },
];

const commonTopics = [
  "How to access course materials",
  "Payment and billing questions",
  "Technical issues with labs",
  "Certificate downloads",
  "Account and password reset",
  "Enrollment and refund policies",
];

export default function Support() {
  return (
    <PageLayout
      title="Support"
      subtitle="We're here to help you succeed in your cybersecurity journey"
      badge="Help Center"
      breadcrumbs={[{ label: "Support" }]}
    >
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-2 gap-8 mb-16">
            {supportOptions.map((option, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1 }}
                className="bg-slate-900/50 border border-slate-800 rounded-2xl p-8 hover:border-primary/50 transition-all"
              >
                <option.icon className="w-12 h-12 text-primary mb-6" />
                <h3 className="text-xl font-display font-bold text-white mb-3">{option.title}</h3>
                <p className="text-slate-400 mb-4">{option.description}</p>
                {option.href ? (
                  <Link href={option.href}>
                    <button className="px-4 py-2 bg-primary/10 text-primary rounded-lg hover:bg-primary/20 transition-colors">
                      {option.action}
                    </button>
                  </Link>
                ) : (
                  <span className="text-primary font-medium">{option.action}</span>
                )}
              </motion.div>
            ))}
          </div>

          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="bg-slate-900/50 border border-slate-800 rounded-2xl p-8"
          >
            <h2 className="text-2xl font-display font-bold text-white mb-6">Common Topics</h2>
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-4">
              {commonTopics.map((topic, i) => (
                <Link key={i} href="/faq">
                  <div className="p-4 bg-slate-950/80 border border-slate-800 rounded-xl hover:border-primary/30 transition-all cursor-pointer">
                    <div className="flex items-center gap-3">
                      <HelpCircle className="w-5 h-5 text-primary flex-shrink-0" />
                      <span className="text-slate-300 text-sm">{topic}</span>
                    </div>
                  </div>
                </Link>
              ))}
            </div>
          </motion.div>
        </div>
      </section>
    </PageLayout>
  );
}
