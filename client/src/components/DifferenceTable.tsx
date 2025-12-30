import { motion } from "framer-motion";
import { Check, X } from "lucide-react";

export default function DifferenceTable() {
  return (
    <section id="difference" className="py-20 bg-slate-950 relative">
      <div className="container mx-auto px-4 md:px-6">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="text-3xl md:text-4xl font-display font-bold text-white mb-4">
            The <span className="text-primary">T-SPAN</span> Difference
          </h2>
          <p className="text-slate-400 text-lg">
            We don't just teach security. We immerse you in the battlefield.
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-8 max-w-5xl mx-auto">
          {/* Traditional Card */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="p-8 rounded-2xl bg-slate-900/40 backdrop-blur-sm border border-slate-800/50 hover:border-slate-700 transition-colors"
          >
            <h3 className="text-2xl font-display font-bold text-slate-500 mb-6 border-b border-slate-800 pb-4">
              Traditional Education
            </h3>
            <ul className="space-y-4">
              {[
                "Simulated, outdated labs",
                "Post-incident analysis only",
                "Paper certifications (CISSP/CEH)",
                "Single campus limitations",
                "Theoretical frameworks",
              ].map((item, i) => (
                <li key={i} className="flex items-start gap-3 text-slate-500 group">
                  <X className="w-5 h-5 text-red-900/50 group-hover:text-red-700 transition-colors mt-0.5 shrink-0" />
                  <span className="group-hover:text-slate-400 transition-colors">{item}</span>
                </li>
              ))}
            </ul>
          </motion.div>

          {/* T-SPAN Card */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="relative p-8 rounded-2xl bg-gradient-to-br from-slate-900/80 to-slate-950/90 backdrop-blur-md border border-primary/30 hover:border-primary/60 shadow-[0_0_30px_rgba(6,182,212,0.15)] hover:shadow-[0_0_60px_rgba(6,182,212,0.35)] transition-all duration-500 overflow-hidden group hover:-translate-y-1"
          >
            {/* Multi-layer Animated Gradients */}
            <div className="absolute inset-0 bg-gradient-to-br from-primary/15 via-secondary/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-700" />
            <div className="absolute inset-0 bg-gradient-to-tl from-transparent via-white/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
            
            {/* Sweeping Gradient Animation */}
            <div className="absolute inset-0 bg-gradient-to-r from-transparent via-primary/25 to-transparent -translate-x-full group-hover:translate-x-full transition-transform duration-1500 ease-in-out" />
            
            <h3 className="text-2xl font-display font-bold text-white mb-6 border-b border-primary/20 pb-4 relative z-10">
              T-SPAN University
              <span className="block h-0.5 w-0 group-hover:w-full bg-primary transition-all duration-700 absolute bottom-0 left-0" />
            </h3>
            <ul className="space-y-4 relative z-10">
              {[
                "Live production infrastructure (TCPWave DDI)",
                "Real-time attack observation",
                "Operational competency + placement",
                "67+ Global PoPs, hybrid delivery",
                "DevSecOps/MLOps pipelines, live SOC",
              ].map((item, i) => (
                <li key={i} className="flex items-start gap-3 text-white group/item">
                  <Check className="w-5 h-5 text-primary mt-0.5 shrink-0 group-hover/item:text-secondary transition-colors group-hover/item:scale-110 duration-300" />
                  <span className="font-medium group-hover/item:text-primary-foreground transition-colors">{item}</span>
                </li>
              ))}
            </ul>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
