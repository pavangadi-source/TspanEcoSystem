import { motion } from "framer-motion";
import { AlertTriangle, Server, Lock, Globe } from "lucide-react";

const problems = [
  {
    icon: <AlertTriangle className="w-10 h-10 text-red-500" />,
    title: "Slideware vs Reality",
    description: "Universities teach theoretical frameworks. Attackers operate in milliseconds using exploit kits you've never seen.",
  },
  {
    icon: <Lock className="w-10 h-10 text-orange-500" />,
    title: "Vendor Silos",
    description: "CISSP and CEH teach compliance. They don't teach you how to hunt active threats in a live, hostile network.",
  },
  {
    icon: <Server className="w-10 h-10 text-red-500" />,
    title: "No Live Infrastructure",
    description: "99% of students never touch a production system until their first day of employment. That is a security risk.",
  },
  {
    icon: <Globe className="w-10 h-10 text-orange-500" />,
    title: "Nation-State Ignorance",
    description: "Fast-flux networks and DNS tunneling are absent from curricula, yet they are the primary tools of APT groups.",
  },
];

export default function ProblemSection() {
  return (
    <section className="py-20 bg-slate-950 relative overflow-hidden">
      <div className="absolute top-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-red-500/50 to-transparent" />
      
      <div className="container mx-auto px-4 md:px-6 relative z-10">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="text-3xl md:text-4xl font-display font-bold text-white mb-4">
            Why Traditional <span className="text-red-500">Cybersecurity Education</span> Fails
          </h2>
          <p className="text-slate-400 text-lg">
            The gap between academic theory and the brutal reality of cyber warfare is widening every day.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
          {problems.map((item, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: i * 0.1, duration: 0.5 }}
              viewport={{ once: true }}
              className="group p-6 rounded-xl bg-slate-900/50 backdrop-blur-sm border border-slate-800 hover:border-red-500/50 transition-all hover:bg-slate-900/80 hover:shadow-[0_0_40px_rgba(220,38,38,0.3)] hover:-translate-y-1 relative overflow-hidden"
            >
              {/* Gradient Overlays */}
              <div className="absolute inset-0 bg-gradient-to-br from-red-500/10 via-orange-500/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-700" />
              <div className="absolute inset-0 bg-gradient-to-tl from-transparent via-white/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
              
              {/* Moving Shine Effect */}
              <div className="absolute inset-0 bg-gradient-to-r from-transparent via-red-500/20 to-transparent -translate-x-full group-hover:translate-x-full transition-transform duration-1000 ease-out" />
              
              <div className="absolute top-0 right-0 w-40 h-40 bg-red-500/10 rounded-bl-full -mr-20 -mt-20 group-hover:bg-red-500/20 group-hover:scale-125 transition-all duration-700 blur-2xl" />
              
              <div className="mb-4 p-3 bg-slate-950/80 backdrop-blur rounded-lg inline-block border border-slate-800 group-hover:border-red-500/30 transition-colors shadow-lg">
                {item.icon}
              </div>
              <h3 className="text-xl font-bold font-display text-white mb-2 group-hover:text-red-400 transition-colors">
                {item.title}
              </h3>
              <p className="text-slate-400 text-sm leading-relaxed font-light group-hover:text-slate-300 transition-colors">
                {item.description}
              </p>
            </motion.div>
          ))}
        </div>

        <div className="mt-16 p-8 rounded-2xl bg-gradient-to-br from-slate-900/80 via-slate-900/60 to-slate-950/80 backdrop-blur-sm border border-slate-800 hover:border-red-500/30 transition-all duration-500 flex flex-col md:flex-row items-center justify-between gap-8 shadow-2xl relative overflow-hidden group">
          {/* Animated background glow */}
          <div className="absolute inset-0 bg-gradient-to-r from-red-500/5 via-transparent to-red-500/5 opacity-0 group-hover:opacity-100 transition-opacity duration-700" />
          <div className="absolute top-0 left-1/2 -translate-x-1/2 w-96 h-96 bg-red-500/10 rounded-full blur-[100px] -mt-48 opacity-50" />
          
          <motion.div 
            className="text-center md:text-left relative z-10 group/stat hover:scale-105 transition-transform duration-300"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
          >
            <div className="flex items-baseline gap-2 justify-center md:justify-start">
              <h4 className="text-5xl font-display font-bold bg-clip-text text-transparent bg-gradient-to-r from-white via-red-200 to-white group-hover/stat:from-red-400 group-hover/stat:to-white transition-all duration-500">3.5</h4>
              <span className="text-2xl font-display font-bold text-white/80">Million</span>
            </div>
            <p className="text-red-400 font-mono text-xs uppercase tracking-[0.2em] mt-2 group-hover/stat:text-red-300 transition-colors">Global Unfilled Positions</p>
            <div className="w-12 h-0.5 bg-gradient-to-r from-red-500 to-transparent mt-2 mx-auto md:mx-0" />
          </motion.div>
          
          <div className="h-16 w-px bg-gradient-to-b from-transparent via-slate-700 to-transparent hidden md:block relative z-10" />
          
          <motion.div 
            className="text-center md:text-left relative z-10 group/stat hover:scale-105 transition-transform duration-300"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.4 }}
          >
            <div className="flex items-baseline gap-2 justify-center md:justify-start">
              <h4 className="text-5xl font-display font-bold bg-clip-text text-transparent bg-gradient-to-r from-white via-red-200 to-white group-hover/stat:from-red-400 group-hover/stat:to-white transition-all duration-500">1.5</h4>
              <span className="text-2xl font-display font-bold text-white/80">Million</span>
            </div>
            <p className="text-red-400 font-mono text-xs uppercase tracking-[0.2em] mt-2 group-hover/stat:text-red-300 transition-colors">Gap in India</p>
            <div className="w-12 h-0.5 bg-gradient-to-r from-red-500 to-transparent mt-2 mx-auto md:mx-0" />
          </motion.div>
          
          <div className="h-16 w-px bg-gradient-to-b from-transparent via-slate-700 to-transparent hidden md:block relative z-10" />
          
          <motion.div 
            className="text-center md:text-left relative z-10 group/stat hover:scale-105 transition-transform duration-300"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.6 }}
          >
            <div className="flex items-baseline gap-2 justify-center md:justify-start">
              <h4 className="text-5xl font-display font-bold bg-clip-text text-transparent bg-gradient-to-r from-white via-red-200 to-white group-hover/stat:from-red-400 group-hover/stat:to-white transition-all duration-500">30%</h4>
              <span className="text-xl font-display font-bold text-white/80">YoY</span>
            </div>
            <p className="text-red-400 font-mono text-xs uppercase tracking-[0.2em] mt-2 group-hover/stat:text-red-300 transition-colors">Growth Rate</p>
            <div className="w-12 h-0.5 bg-gradient-to-r from-red-500 to-transparent mt-2 mx-auto md:mx-0" />
          </motion.div>
        </div>
      </div>
    </section>
  );
}
