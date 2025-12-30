import { motion } from "framer-motion";
import { Terminal, BookOpen, Users, Award, Rocket, Brain } from "lucide-react";

export default function LearningMethodology() {
  const methods = [
    {
      icon: <Terminal className="w-8 h-8" />,
      title: "Live Infrastructure Access",
      description: "Direct SSH/API access to TCPWave production-grade DDI infrastructure. No simulators, no sandboxes—real queries, real traffic, real stakes.",
      keyPoints: ["67+ global PoPs", "Production-grade environment", "2.3B daily queries"]
    },
    {
      icon: <Brain className="w-8 h-8" />,
      title: "Adversarial Learning",
      description: "Learn by attacking and defending simultaneously. Build fast-flux networks, deploy DGAs, then detect and neutralize them using ML classifiers.",
      keyPoints: ["Red & Blue team labs", "Nation-state TTPs", "AI-powered detection"]
    },
    {
      icon: <Users className="w-8 h-8" />,
      title: "Cohort-Based Intensity",
      description: "Limited to 25 students per cohort for quality. Work in teams of 5, simulating real SOC operations with rotations, handoffs, and incident response.",
      keyPoints: ["Small cohort size", "Team-based projects", "Real SOC workflows"]
    },
    {
      icon: <Rocket className="w-8 h-8" />,
      title: "Deployment-Driven Curriculum",
      description: "Every weekend culminates in a deployment. Week 1: DNS resolver. Week 4: MISP instance. Week 10: Full sovereign security stack with monitoring.",
      keyPoints: ["Hands-on deployments", "GitOps workflows", "Production readiness"]
    }
  ];

  return (
    <section className="py-24 bg-slate-950 relative overflow-hidden">
      {/* Background Grid */}
      <div className="absolute inset-0 bg-[linear-gradient(rgba(6,182,212,0.03)_2px,transparent_2px),linear-gradient(90deg,rgba(6,182,212,0.03)_2px,transparent_2px)] bg-[size:80px_80px]" />
      <div className="absolute inset-0 bg-gradient-to-b from-transparent via-slate-950/50 to-transparent" />
      
      <div className="container mx-auto px-4 md:px-6 relative z-10">
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <div className="flex items-center justify-center gap-2 mb-4">
            <BookOpen className="w-6 h-6 text-white animate-pulse" />
            <span className="text-white font-mono text-xs uppercase tracking-[0.3em]">Pedagogical Approach</span>
          </div>
          <h2 className="text-4xl md:text-5xl font-display font-bold text-white mb-6">
            How You Actually Learn
          </h2>
          <p className="text-slate-400 text-lg max-w-3xl mx-auto leading-relaxed">
            Forget passive lectures and multiple-choice exams. Our methodology is rooted in operational 
            realism, adversarial thinking, and deployment-driven mastery.
          </p>
        </motion.div>

        <div className="grid sm:grid-cols-1 md:grid-cols-2 gap-6 md:gap-8 max-w-6xl mx-auto">
          {methods.map((method, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, x: i % 2 === 0 ? -30 : 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1 }}
              className="group relative"
            >
              <div className="h-full p-8 rounded-2xl bg-gradient-to-br from-slate-900/70 to-slate-950/90 border-2 border-slate-800 hover:border-secondary/50 transition-all duration-500 hover:shadow-[0_0_60px_rgba(251,191,36,0.15)] hover:-translate-y-2 relative overflow-hidden backdrop-blur">
                {/* Multi-layer Gradient Effects */}
                <div className="absolute inset-0 bg-gradient-to-br from-secondary/10 via-primary/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-700" />
                <div className="absolute inset-0 bg-gradient-to-tl from-transparent via-white/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                <div className="absolute inset-0 bg-gradient-to-r from-transparent via-secondary/20 to-transparent -translate-x-full group-hover:translate-x-full transition-transform duration-1500" />
                
                {/* Corner Accent */}
                <div className="absolute -top-10 -right-10 w-32 h-32 bg-gradient-to-br from-secondary/20 to-transparent rounded-full blur-2xl group-hover:scale-150 transition-transform duration-700" />
                
                {/* Content */}
                <div className="relative z-10">
                  <div className="mb-6 p-4 bg-slate-950/80 backdrop-blur rounded-xl border border-slate-800 group-hover:border-secondary/50 inline-flex group-hover:scale-110 transition-all duration-300 text-secondary group-hover:text-white shadow-lg">
                    {method.icon}
                  </div>
                  
                  <h3 className="text-2xl font-display font-bold text-white mb-4 group-hover:text-secondary transition-colors">
                    {method.title}
                  </h3>
                  
                  <p className="text-slate-400 leading-relaxed mb-6 group-hover:text-slate-300 transition-colors">
                    {method.description}
                  </p>
                  
                  <div className="space-y-2">
                    {method.keyPoints.map((point, j) => (
                      <div key={j} className="flex items-center gap-2">
                        <div className="w-1.5 h-1.5 rounded-full bg-secondary group-hover:bg-primary transition-colors" />
                        <span className="text-sm text-slate-500 font-mono group-hover:text-slate-400 transition-colors">
                          {point}
                        </span>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Bottom Stat Banner */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mt-16 max-w-5xl mx-auto"
        >
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
            {[
              { value: "10", label: "Intensive Weekends" },
              { value: "40+", label: "Deployments" },
              { value: "25", label: "Max Cohort Size" },
              { value: "100%", label: "Hands-On" }
            ].map((stat, i) => (
              <div key={i} className="p-6 bg-slate-800/80 border border-slate-700 rounded-xl text-center group hover:border-primary/50 hover:bg-slate-700/80 transition-all hover:-translate-y-1">
                <div className="text-4xl font-display font-bold text-white mb-2 group-hover:scale-110 transition-transform">
                  {stat.value}
                </div>
                <div className="text-xs text-white uppercase tracking-wider font-mono">
                  {stat.label}
                </div>
              </div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
}
