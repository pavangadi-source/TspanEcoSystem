import { motion } from "framer-motion";
import { Target, Eye, Rocket, Globe2, Shield, Users, Award, Zap } from "lucide-react";
import PageLayout from "@/components/PageLayout";

const visionPoints = [
  { icon: Globe2, title: "Global Leadership", description: "Position India as a global hub for cybersecurity excellence and sovereign technology development" },
  { icon: Shield, title: "National Security", description: "Protect critical infrastructure through world-class security professionals trained on real systems" },
  { icon: Users, title: "Talent Pipeline", description: "Build a 100,000-strong cybersecurity workforce by 2030 through practical, industry-aligned education" },
  { icon: Rocket, title: "Innovation Hub", description: "Drive cutting-edge research in DNS security, threat intelligence, and autonomous network defense" },
];

const missionPillars = [
  { title: "Practical Excellence", description: "Train on live TCPWave infrastructure, not simulations. Our students graduate with real-world operational experience.", color: "from-cyan-500 to-blue-600" },
  { title: "Sovereign Security", description: "Develop India-first security solutions aligned with Atmanirbhar Bharat and Digital India initiatives.", color: "from-red-500 to-orange-600" },
  { title: "Industry Integration", description: "Deep partnerships with TCPWave, BITS Pilani, and government agencies ensure curriculum relevance.", color: "from-purple-500 to-pink-600" },
  { title: "Research Leadership", description: "Advance the field through original research in DNS security, threat intelligence, and network automation.", color: "from-green-500 to-emerald-600" },
];

export default function VisionMission() {
  return (
    <PageLayout
      title="Vision & Mission"
      subtitle="Building India's sovereign cybersecurity future through excellence in education, research, and innovation"
      badge="Our Purpose"
      breadcrumbs={[{ label: "About", href: "/about" }, { label: "Vision & Mission" }]}
    >
      <section className="py-20 bg-slate-900/50">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <div className="inline-flex items-center gap-3 px-4 py-2 bg-primary/10 border border-primary/30 rounded-full mb-6">
              <Eye className="w-5 h-5 text-primary" />
              <span className="text-primary font-mono text-sm">OUR VISION</span>
            </div>
            <h2 className="text-3xl md:text-4xl font-display font-bold text-white max-w-4xl mx-auto">
              To become the world's premier institution for{" "}
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary to-secondary">
                sovereign cybersecurity education
              </span>
              , producing mission-ready defenders of critical infrastructure
            </h2>
          </motion.div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {visionPoints.map((point, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1 }}
                className="bg-slate-950/80 border border-slate-800 rounded-xl p-6 hover:border-primary/50 transition-all group"
              >
                <div className="w-14 h-14 rounded-xl bg-primary/10 border border-primary/30 flex items-center justify-center mb-4 group-hover:scale-110 transition-transform">
                  <point.icon className="w-7 h-7 text-primary" />
                </div>
                <h3 className="text-lg font-display font-bold text-white mb-2">{point.title}</h3>
                <p className="text-slate-400 text-sm">{point.description}</p>
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
            <div className="inline-flex items-center gap-3 px-4 py-2 bg-secondary/10 border border-secondary/30 rounded-full mb-6">
              <Target className="w-5 h-5 text-secondary" />
              <span className="text-secondary font-mono text-sm">OUR MISSION</span>
            </div>
            <h2 className="text-3xl md:text-4xl font-display font-bold text-white mb-4">
              Four Pillars of Excellence
            </h2>
            <p className="text-slate-400 max-w-2xl mx-auto">
              Our mission is built on four foundational pillars that guide everything we do
            </p>
          </motion.div>

          <div className="grid md:grid-cols-2 gap-8">
            {missionPillars.map((pillar, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, x: i % 2 === 0 ? -30 : 30 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1 }}
                className="relative bg-slate-900/50 border border-slate-800 rounded-2xl p-8 overflow-hidden group hover:border-slate-700 transition-all"
              >
                <div className={`absolute top-0 left-0 w-2 h-full bg-gradient-to-b ${pillar.color}`} />
                <div className="pl-4">
                  <span className="text-slate-600 font-mono text-sm">0{i + 1}</span>
                  <h3 className="text-2xl font-display font-bold text-white mt-2 mb-4">{pillar.title}</h3>
                  <p className="text-slate-400 leading-relaxed">{pillar.description}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-20 bg-gradient-to-b from-slate-900 to-slate-950">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="max-w-4xl mx-auto text-center"
          >
            <Award className="w-16 h-16 text-primary mx-auto mb-6" />
            <h2 className="text-3xl md:text-4xl font-display font-bold text-white mb-6">
              Our Commitment
            </h2>
            <p className="text-xl text-slate-400 leading-relaxed mb-8">
              "We pledge to produce cybersecurity professionals who are not just certified, but{" "}
              <span className="text-primary">mission-ready</span>. Our graduates will defend nations, 
              protect critical infrastructure, and lead the global fight against cyber threats."
            </p>
            <p className="text-slate-500 font-mono text-sm">
              — T-SPAN University Founding Charter, 2023
            </p>
          </motion.div>
        </div>
      </section>
    </PageLayout>
  );
}
