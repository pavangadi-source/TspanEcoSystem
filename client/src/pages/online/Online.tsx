import { motion } from "framer-motion";
import { Monitor, Play, FlaskConical, Target, Sparkles, ArrowRight } from "lucide-react";
import { Link } from "wouter";
import PageLayout from "@/components/PageLayout";

const onlineOfferings = [
  {
    icon: Monitor,
    title: "Online Courses",
    description: "Self-paced video courses with hands-on labs. Learn at your own speed with lifetime access.",
    href: "/online/courses",
    stats: "50+ Courses"
  },
  {
    icon: Play,
    title: "Live Classes",
    description: "Interactive instructor-led sessions with real-time Q&A and peer collaboration.",
    href: "/online/live-classes",
    stats: "Weekly Sessions"
  },
  {
    icon: FlaskConical,
    title: "Virtual Labs",
    description: "Cloud-based lab environments with TCPWave, SIEM, and security tools.",
    href: "/online/virtual-labs",
    stats: "24/7 Access"
  },
  {
    icon: Target,
    title: "Cyber Range",
    description: "Realistic attack/defense scenarios in isolated environments.",
    href: "/online/cyber-range",
    stats: "Enterprise-grade"
  },
  {
    icon: Sparkles,
    title: "Free Courses",
    description: "Start your cybersecurity journey with free introductory content.",
    href: "/online/free-courses",
    stats: "10+ Free Courses"
  },
];

export default function Online() {
  return (
    <PageLayout
      title="Online Learning"
      subtitle="World-class cybersecurity education accessible anywhere, anytime"
      badge="Learn Online"
      breadcrumbs={[{ label: "Online" }]}
    >
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {onlineOfferings.map((offering, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1 }}
              >
                <Link href={offering.href}>
                  <div className="bg-slate-900/50 border border-slate-800 rounded-2xl p-8 h-full hover:border-primary/50 transition-all cursor-pointer group">
                    <div className="flex items-center justify-between mb-6">
                      <offering.icon className="w-12 h-12 text-primary group-hover:scale-110 transition-transform" />
                      <span className="px-3 py-1 bg-primary/10 text-primary text-sm rounded-full">{offering.stats}</span>
                    </div>
                    <h3 className="text-xl font-display font-bold text-white mb-3 group-hover:text-primary transition-colors">{offering.title}</h3>
                    <p className="text-slate-400 mb-4">{offering.description}</p>
                    <div className="flex items-center gap-2 text-primary text-sm font-medium">
                      Explore <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                    </div>
                  </div>
                </Link>
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
              Start Learning Today
            </h2>
            <p className="text-slate-400 max-w-2xl mx-auto mb-8">
              Join thousands of learners building their cybersecurity careers with T-SPAN online programs.
            </p>
            <Link href="/online/courses">
              <button className="px-6 py-3 bg-primary text-slate-950 font-bold rounded-lg hover:bg-primary/90 transition-colors">
                Browse Courses
              </button>
            </Link>
          </motion.div>
        </div>
      </section>
    </PageLayout>
  );
}
