import { motion } from "framer-motion";
import { Server, FlaskConical, Shield, Target, Trophy, ArrowRight } from "lucide-react";
import { Link } from "wouter";
import PageLayout from "@/components/PageLayout";

const labEnvironments = [
  {
    icon: Server,
    title: "Live Infrastructure",
    description: "Access production-grade TCPWave DDI infrastructure. Configure DNS zones, manage IP addresses, and implement security policies on real systems.",
    href: "/labs/live-infrastructure",
    highlight: "Enterprise DDI"
  },
  {
    icon: FlaskConical,
    title: "TCPWave Sandbox",
    description: "Personal TCPWave instance for experimentation. Practice configurations without risk to production systems.",
    href: "/labs/tcpwave-sandbox",
    highlight: "Personal Environment"
  },
  {
    icon: Shield,
    title: "SOC Simulation",
    description: "Fully functional Security Operations Center with SIEM, threat feeds, and incident response tools.",
    href: "/labs/soc-simulation",
    highlight: "Real-time Alerts"
  },
  {
    icon: Target,
    title: "Attack & Defense",
    description: "Red team vs blue team exercises in isolated environments. Launch attacks and practice defense.",
    href: "/labs/attack-defense",
    highlight: "Competitive Mode"
  },
  {
    icon: Trophy,
    title: "CTF Challenges",
    description: "Capture the flag competitions testing your skills across web, network, crypto, and forensics.",
    href: "/labs/ctf-challenges",
    highlight: "Leaderboard"
  },
];

export default function Labs() {
  return (
    <PageLayout
      title="Hands-On Labs"
      subtitle="Learn by doing on real infrastructure, not simulations"
      badge="T-SPAN Labs"
      breadcrumbs={[{ label: "Labs" }]}
    >
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="space-y-8">
            {labEnvironments.map((lab, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, x: i % 2 === 0 ? -30 : 30 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
              >
                <Link href={lab.href}>
                  <div className="bg-slate-900/50 border border-slate-800 rounded-2xl p-8 hover:border-primary/50 transition-all cursor-pointer group">
                    <div className="flex flex-col md:flex-row items-start gap-6">
                      <div className="w-16 h-16 rounded-xl bg-primary/10 border border-primary/30 flex items-center justify-center flex-shrink-0 group-hover:scale-110 transition-transform">
                        <lab.icon className="w-8 h-8 text-primary" />
                      </div>
                      <div className="flex-1">
                        <div className="flex items-center gap-3 mb-2">
                          <h3 className="text-xl font-display font-bold text-white group-hover:text-primary transition-colors">{lab.title}</h3>
                          <span className="px-3 py-1 bg-primary/10 text-primary text-xs rounded-full">{lab.highlight}</span>
                        </div>
                        <p className="text-slate-400 mb-4">{lab.description}</p>
                        <div className="flex items-center gap-2 text-primary text-sm font-medium">
                          Access Lab <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                        </div>
                      </div>
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
