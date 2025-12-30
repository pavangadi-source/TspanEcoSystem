import { motion } from "framer-motion";
import { 
  Server, 
  ShieldCheck, 
  Zap, 
  BrainCircuit, 
  Settings, 
  GraduationCap,
  ChevronRight
} from "lucide-react";

const weeks = [
  {
    week: "Weekend 1-2",
    title: "Infrastructure as Intelligence",
    desc: "DNS/DDI Layer, TCPWave Platform",
    icon: Server,
    color: "primary",
    bgColor: "bg-primary/10",
    borderColor: "border-primary/30",
    iconColor: "text-primary",
  },
  {
    week: "Weekend 3-4",
    title: "Threat Intelligence at Scale",
    desc: "MISP, STIX/TAXII, Real-time IOC correlation",
    icon: ShieldCheck,
    color: "amber",
    bgColor: "bg-amber-500/10",
    borderColor: "border-amber-500/30",
    iconColor: "text-amber-400",
  },
  {
    week: "Weekend 5-6",
    title: "Adversarial Infrastructure",
    desc: "Fast-Flux Networks, Nation-state threats, ML classifiers",
    icon: Zap,
    color: "red",
    bgColor: "bg-red-500/10",
    borderColor: "border-red-500/30",
    iconColor: "text-red-400",
  },
  {
    week: "Weekend 7-8",
    title: "AI Inside Networks",
    desc: "ONNX, Apache Kafka, ML-powered threat detection",
    icon: BrainCircuit,
    color: "purple",
    bgColor: "bg-purple-500/10",
    borderColor: "border-purple-500/30",
    iconColor: "text-purple-400",
  },
  {
    week: "Weekend 9",
    title: "DevSecOps & SOC Ops",
    desc: "CI/CD pipeline security, SIEM/SOAR integration",
    icon: Settings,
    color: "emerald",
    bgColor: "bg-emerald-500/10",
    borderColor: "border-emerald-500/30",
    iconColor: "text-emerald-400",
  },
  {
    week: "Weekend 10",
    title: "Capstone & Certification",
    desc: "Real-world deployment, presentation",
    icon: GraduationCap,
    color: "secondary",
    bgColor: "bg-secondary/10",
    borderColor: "border-secondary/30",
    iconColor: "text-secondary",
  },
];

export default function Curriculum() {
  return (
    <section id="curriculum" className="py-24 bg-gradient-to-b from-slate-950 via-slate-900 to-slate-950 relative overflow-hidden">
      <div className="absolute inset-0 bg-[linear-gradient(rgba(6,182,212,0.02)_1px,transparent_1px),linear-gradient(90deg,rgba(6,182,212,0.02)_1px,transparent_1px)] bg-[size:60px_60px]" />
      
      <div className="container mx-auto px-4 md:px-6 relative z-10">
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <div className="inline-flex items-center gap-2 px-4 py-2 bg-secondary/10 border border-secondary/30 rounded-full mb-6">
            <GraduationCap className="w-4 h-4 text-secondary" />
            <span className="text-secondary font-mono text-sm uppercase tracking-wider">Curriculum</span>
          </div>
          <h2 className="text-3xl md:text-5xl font-display font-bold text-white mb-4">
            10-Weekend Academic Journey
          </h2>
          <p className="text-slate-400 text-lg max-w-2xl mx-auto">
            Intensive, hands-on, and operationally focused training that transforms you into a cyber defender.
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-6xl mx-auto">
          {weeks.map((item, i) => {
            const Icon = item.icon;
            return (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1 }}
                className={`group relative bg-slate-900/60 backdrop-blur-sm rounded-2xl p-6 border ${item.borderColor} hover:border-opacity-60 transition-all duration-500 hover:-translate-y-2 hover:shadow-lg`}
                data-testid={`curriculum-week-${i + 1}`}
              >
                <div className={`absolute inset-0 ${item.bgColor} rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-500`} />
                
                <div className="relative z-10">
                  <div className="flex items-start justify-between mb-4">
                    <div className={`w-12 h-12 ${item.bgColor} rounded-xl flex items-center justify-center group-hover:scale-110 transition-transform duration-300`}>
                      <Icon className={`w-6 h-6 ${item.iconColor}`} />
                    </div>
                    <span className="text-xs font-mono text-slate-500 uppercase tracking-wider bg-slate-800/50 px-3 py-1 rounded-full">
                      {item.week}
                    </span>
                  </div>
                  
                  <h3 className="text-xl font-display font-bold text-white mb-2 group-hover:text-white transition-colors">
                    {item.title}
                  </h3>
                  
                  <p className="text-slate-400 text-sm leading-relaxed mb-4">
                    {item.desc}
                  </p>
                  
                  <div className={`flex items-center gap-1 ${item.iconColor} text-sm font-medium opacity-0 group-hover:opacity-100 transition-opacity duration-300`}>
                    <span>Learn more</span>
                    <ChevronRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                  </div>
                </div>
              </motion.div>
            );
          })}
        </div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.6 }}
          className="mt-12 text-center"
        >
          <div className="inline-flex items-center gap-4 px-6 py-3 bg-slate-900/80 border border-slate-700 rounded-full">
            <div className="flex items-center gap-2">
              <div className="w-2 h-2 bg-primary rounded-full animate-pulse" />
              <span className="text-slate-400 text-sm">Next cohort starts</span>
            </div>
            <span className="text-white font-display font-bold">February 2025</span>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
