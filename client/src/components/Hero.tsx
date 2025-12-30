import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { ArrowRight, Download, ShieldCheck, Globe, Users } from "lucide-react";

export default function Hero() {
  return (
    <section className="relative min-h-[calc(100vh-120px)] flex items-center pt-10 overflow-hidden">
      {/* Video Background with Dark Overlay */}
      <div className="absolute inset-0 z-0">
        <video
          autoPlay
          muted
          loop
          playsInline
          data-testid="hero-video"
          className="absolute inset-0 w-full h-full object-cover"
          poster="https://www.proactivanet.com/wp-content/uploads/2022/09/PROACTIVA_cabecera_v01.jpg"
        >
          <source
            src="https://www.proactivanet.com/wp-content/uploads/2022/09/PROACTIVA_cabecera_v01.mp4"
            type="video/mp4"
          />
        </video>
        {/* Dark lens filter overlay for text visibility */}
        <div className="absolute inset-0 bg-slate-950/70" />
        <div className="absolute inset-0 bg-gradient-to-b from-slate-950/60 via-transparent to-slate-950" />
        <div className="absolute inset-0 cyber-grid opacity-20 mask-linear-fade" />
        
        {/* Animated Glow Orbs */}
        <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-primary/15 rounded-full blur-[120px] animate-pulse-slow mix-blend-screen pointer-events-none" />
        <div className="absolute bottom-1/4 right-1/4 w-[500px] h-[500px] bg-secondary/10 rounded-full blur-[150px] animate-pulse-slow delay-1000 mix-blend-screen pointer-events-none" />
      </div>

      <div className="container mx-auto px-4 md:px-6 relative z-10">
        <div className="max-w-5xl mx-auto text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-slate-900/50 border border-primary/30 text-primary mb-8 backdrop-blur-md shadow-[0_0_15px_rgba(6,182,212,0.2)]"
          >
            <span className="relative flex h-2.5 w-2.5">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-primary opacity-75"></span>
              <span className="relative inline-flex rounded-full h-2.5 w-2.5 bg-primary shadow-[0_0_10px_#06b6d4]"></span>
            </span>
            <span className="text-xs font-mono font-bold tracking-widest uppercase text-shadow-glow">
              Cohort 1 Launches March 15, 2025
            </span>
          </motion.div>

          <motion.h1
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
            className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl xl:text-8xl font-display font-bold text-white leading-tight mb-6 md:mb-8 tracking-tight"
          >
            The World's First <br />
            <span className="relative inline-block">
              <span className="absolute -inset-1 blur-xl bg-gradient-to-r from-cyan-500/30 via-blue-600/30 to-purple-600/30 opacity-70"></span>
              <span className="relative text-transparent bg-clip-text bg-gradient-to-r from-cyan-300 via-blue-400 to-indigo-400 drop-shadow-[0_0_15px_rgba(6,182,212,0.5)]">
                Live-Infrastructure
              </span>
            </span>{" "}
            <br />
            Cybersecurity University
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.4 }}
            className="text-lg sm:text-xl md:text-2xl text-slate-300 max-w-3xl mx-auto mb-8 md:mb-12 font-light leading-relaxed tracking-wide px-4"
          >
            Train on <span className="text-white font-medium border-b border-primary/50">production-grade sovereign cyber infrastructure</span>. 
            Learn how nations defend themselves in real time from global experts.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.6 }}
            className="flex flex-col sm:flex-row items-center justify-center gap-6"
          >
            <Button
              size="lg"
              className="group relative overflow-hidden bg-primary hover:bg-primary/90 text-white font-tech font-bold tracking-wider h-14 sm:h-16 px-6 sm:px-10 text-base sm:text-xl rounded-none skew-x-[-10deg] shadow-[0_0_30px_rgba(6,182,212,0.4)] hover:shadow-[0_0_50px_rgba(6,182,212,0.6)] transition-all duration-300 w-full sm:w-auto"
              onClick={() => document.getElementById("register")?.scrollIntoView({ behavior: "smooth" })}
            >
              <div className="absolute inset-0 bg-white/20 translate-y-full group-hover:translate-y-0 transition-transform duration-300 skew-x-[10deg]" />
              <span className="relative flex items-center gap-2 skew-x-[10deg] text-white">
                <span className="hidden sm:inline text-white">REGISTER BY FEB 15</span>
                <span className="sm:hidden text-white">REGISTER NOW</span>
                <ArrowRight className="w-5 h-5 sm:w-6 sm:h-6 group-hover:translate-x-1 transition-transform text-white" />
              </span>
            </Button>
            
            <Button
              size="lg"
              variant="outline"
              className="group relative overflow-hidden border-white/20 hover:border-white/40 hover:bg-white/5 text-white font-tech tracking-wider h-14 sm:h-16 px-6 sm:px-10 text-base sm:text-xl rounded-none skew-x-[-10deg] backdrop-blur-sm transition-all duration-300 w-full sm:w-auto"
              onClick={() => window.open("/prospectus.pdf", "_blank")}
            >
              <span className="relative flex items-center gap-2 skew-x-[10deg]">
                <span className="hidden sm:inline">DOWNLOAD PROSPECTUS</span>
                <span className="sm:hidden">PROSPECTUS</span>
                <Download className="w-5 h-5 sm:w-6 sm:h-6 group-hover:translate-y-1 transition-transform" />
              </span>
            </Button>
          </motion.div>

          {/* Key Metrics */}
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.8 }}
            className="grid grid-cols-2 md:grid-cols-4 gap-6 mt-20 border-t border-white/10 pt-10 bg-slate-950/30 backdrop-blur-sm rounded-xl p-6 border border-white/5"
          >
            {[
              { label: "Duration", value: "10 Weekends", icon: <ShieldCheck className="w-6 h-6 text-secondary drop-shadow-[0_0_8px_rgba(251,191,36,0.5)]" /> },
              { label: "Global Reach", value: "67+ PoPs", icon: <Globe className="w-6 h-6 text-primary drop-shadow-[0_0_8px_rgba(6,182,212,0.5)]" /> },
              { label: "Faculty", value: "Elite Experts", icon: <Users className="w-6 h-6 text-secondary drop-shadow-[0_0_8px_rgba(251,191,36,0.5)]" /> },
              { label: "Target", value: "5,000 Students", icon: <ShieldCheck className="w-6 h-6 text-primary drop-shadow-[0_0_8px_rgba(6,182,212,0.5)]" /> },
            ].map((metric, i) => (
              <div key={i} className="flex flex-col items-center group cursor-default">
                <div className="flex items-center gap-2 mb-2 text-slate-400 text-xs font-mono uppercase tracking-[0.2em] group-hover:text-white transition-colors">
                  {metric.icon} {metric.label}
                </div>
                <div className="text-2xl md:text-4xl font-bold font-display text-white group-hover:scale-105 transition-transform duration-300">{metric.value}</div>
              </div>
            ))}
          </motion.div>
        </div>
      </div>
    </section>
  );
}
