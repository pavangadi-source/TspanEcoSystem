import { motion } from "framer-motion";
import { MapPin, Building2, Users, Rocket, Award, Globe2, Shield, Zap } from "lucide-react";
import PageLayout from "@/components/PageLayout";

const ecosystemStats = [
  { value: "500+", label: "Cybersecurity Startups", icon: Rocket },
  { value: "50,000+", label: "Security Professionals", icon: Users },
  { value: "₹15,000 Cr", label: "Industry Investment", icon: Building2 },
  { value: "200+", label: "Global Tech Companies", icon: Globe2 },
];

const initiatives = [
  {
    title: "Telangana Cyber Security Framework",
    description: "State-mandated security standards developed in partnership with T-SPAN, protecting 40+ government departments.",
    color: "from-cyan-500 to-blue-600"
  },
  {
    title: "We-Hub Cyber Accelerator",
    description: "Women-led cybersecurity startup incubator producing 25+ successful ventures in threat intelligence.",
    color: "from-pink-500 to-rose-600"
  },
  {
    title: "T-Hub Security Innovation Lab",
    description: "Joint research facility with T-SPAN for developing indigenous security solutions and DDI platforms.",
    color: "from-purple-500 to-indigo-600"
  },
  {
    title: "TASK Cyber Skilling Initiative",
    description: "Telangana Academy for Skill and Knowledge partnership training 10,000+ students annually.",
    color: "from-green-500 to-emerald-600"
  },
];

const partners = [
  { name: "IT Department, Telangana", type: "Government" },
  { name: "T-Hub", type: "Innovation Hub" },
  { name: "We-Hub", type: "Women Entrepreneurs" },
  { name: "TASK", type: "Skill Development" },
  { name: "IIIT Hyderabad", type: "Research" },
  { name: "ISB Hyderabad", type: "Executive Education" },
  { name: "TCS Hyderabad", type: "Industry Partner" },
  { name: "Microsoft IDC", type: "Technology Partner" },
];

export default function TelanganaEcosystem() {
  return (
    <PageLayout
      title="Telangana Cybersecurity Ecosystem"
      subtitle="India's most vibrant technology hub powering sovereign security innovation"
      badge="Hyderabad Advantage"
      breadcrumbs={[{ label: "About", href: "/about" }, { label: "Telangana Ecosystem" }]}
    >
      <section className="py-20 bg-slate-900/50">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-4 gap-6 mb-16">
            {ecosystemStats.map((stat, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1 }}
                className="bg-slate-950/80 border border-slate-800 rounded-xl p-6 text-center group hover:border-primary/50 transition-all"
              >
                <stat.icon className="w-10 h-10 text-primary mx-auto mb-4 group-hover:scale-110 transition-transform" />
                <div className="text-3xl font-display font-bold text-white mb-2">{stat.value}</div>
                <div className="text-slate-400 text-sm">{stat.label}</div>
              </motion.div>
            ))}
          </div>

          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="bg-gradient-to-r from-primary/10 to-secondary/10 border border-primary/30 rounded-2xl p-8 md:p-12"
          >
            <div className="flex flex-col md:flex-row items-center gap-8">
              <div className="flex-shrink-0">
                <MapPin className="w-20 h-20 text-primary" />
              </div>
              <div>
                <h3 className="text-2xl font-display font-bold text-white mb-4">
                  Why Hyderabad?
                </h3>
                <p className="text-slate-300 leading-relaxed mb-4">
                  Hyderabad is India's cybersecurity capital, home to the world's largest technology campuses, 
                  government cyber command centers, and a thriving startup ecosystem. T-SPAN's strategic location 
                  provides unparalleled access to industry leaders, government partnerships, and live threat intelligence.
                </p>
                <div className="flex flex-wrap gap-3">
                  <span className="px-3 py-1 bg-slate-800 text-slate-300 text-sm rounded-full">2nd largest IT hub in India</span>
                  <span className="px-3 py-1 bg-slate-800 text-slate-300 text-sm rounded-full">HITEC City ecosystem</span>
                  <span className="px-3 py-1 bg-slate-800 text-slate-300 text-sm rounded-full">State cyber police HQ</span>
                </div>
              </div>
            </div>
          </motion.div>
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
              State <span className="text-primary">Initiatives</span>
            </h2>
            <p className="text-slate-400 max-w-2xl mx-auto">
              T-SPAN collaborates with Telangana government on pioneering cybersecurity programs
            </p>
          </motion.div>

          <div className="grid md:grid-cols-2 gap-8">
            {initiatives.map((initiative, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, x: i % 2 === 0 ? -30 : 30 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1 }}
                className="relative bg-slate-900/50 border border-slate-800 rounded-2xl p-8 overflow-hidden group hover:border-slate-700 transition-all"
              >
                <div className={`absolute top-0 left-0 w-full h-1 bg-gradient-to-r ${initiative.color}`} />
                <h3 className="text-xl font-display font-bold text-white mb-4">{initiative.title}</h3>
                <p className="text-slate-400 leading-relaxed">{initiative.description}</p>
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
              Ecosystem <span className="text-secondary">Partners</span>
            </h2>
          </motion.div>

          <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
            {partners.map((partner, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.05 }}
                className="bg-slate-950/80 border border-slate-800 rounded-xl p-4 text-center hover:border-primary/30 transition-all"
              >
                <h4 className="text-white font-bold text-sm mb-1">{partner.name}</h4>
                <span className="text-slate-500 text-xs">{partner.type}</span>
              </motion.div>
            ))}
          </div>
        </div>
      </section>
    </PageLayout>
  );
}
