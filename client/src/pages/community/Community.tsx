import { motion } from "framer-motion";
import { Users, MessageSquare, GraduationCap, Linkedin, ArrowRight, MessageCircle } from "lucide-react";
import { Link } from "wouter";
import PageLayout from "@/components/PageLayout";

const communityChannels = [
  {
    icon: MessageSquare,
    title: "Forums",
    description: "Discuss cybersecurity topics, ask questions, and share knowledge with fellow learners.",
    href: "/community/forums",
    members: "5,000+ Members"
  },
  {
    icon: GraduationCap,
    title: "Alumni Network",
    description: "Connect with T-SPAN graduates working across the globe in leading organizations.",
    href: "/community/alumni",
    members: "2,500+ Alumni"
  },
  {
    icon: MessageCircle,
    title: "Discord",
    description: "Real-time chat with students, faculty, and industry professionals.",
    href: "/community/discord",
    members: "3,000+ Members"
  },
  {
    icon: Linkedin,
    title: "LinkedIn Group",
    description: "Professional networking, job postings, and industry updates.",
    href: "/community/linkedin",
    members: "10,000+ Followers"
  },
];

const communityStats = [
  { value: "15,000+", label: "Community Members" },
  { value: "50+", label: "Countries Represented" },
  { value: "200+", label: "Monthly Events" },
  { value: "95%", label: "Placement Rate" },
];

export default function Community() {
  return (
    <PageLayout
      title="Community"
      subtitle="Join thousands of cybersecurity professionals and learners"
      badge="T-SPAN Community"
      breadcrumbs={[{ label: "Community" }]}
    >
      <section className="py-20 bg-slate-900/50">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-4 gap-6 mb-16">
            {communityStats.map((stat, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1 }}
                className="bg-slate-950/80 border border-slate-800 rounded-xl p-6 text-center"
              >
                <div className="text-3xl font-display font-bold text-primary mb-2">{stat.value}</div>
                <div className="text-slate-400 text-sm">{stat.label}</div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-2 gap-8">
            {communityChannels.map((channel, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1 }}
              >
                <Link href={channel.href}>
                  <div className="bg-slate-900/50 border border-slate-800 rounded-2xl p-8 h-full hover:border-primary/50 transition-all cursor-pointer group">
                    <div className="flex items-center justify-between mb-6">
                      <channel.icon className="w-12 h-12 text-primary group-hover:scale-110 transition-transform" />
                      <span className="px-3 py-1 bg-primary/10 text-primary text-sm rounded-full">{channel.members}</span>
                    </div>
                    <h3 className="text-xl font-display font-bold text-white mb-3 group-hover:text-primary transition-colors">{channel.title}</h3>
                    <p className="text-slate-400 mb-4">{channel.description}</p>
                    <div className="flex items-center gap-2 text-primary text-sm font-medium">
                      Join <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                    </div>
                  </div>
                </Link>
              </motion.div>
            ))}
          </div>
        </div>
      </section>
    </PageLayout>
  );
}
