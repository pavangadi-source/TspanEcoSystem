import { motion } from "framer-motion";
import { Shield, Globe, Lock, Zap, AlertTriangle, Database } from "lucide-react";

export default function WhySovereignSecurity() {
  const reasons = [
    {
      icon: <Globe className="w-10 h-10" />,
      title: "National Infrastructure at Risk",
      description: "Over 83% of critical infrastructure cyberattacks target DNS and DDI layers. Traditional security training focuses on application-layer threats while nation-states exploit infrastructure blind spots.",
      stat: "83%",
      statLabel: "Infrastructure Attacks"
    },
    {
      icon: <Lock className="w-10 h-10" />,
      title: "Data Sovereignty Crisis",
      description: "With data localization laws in 109 countries, organizations need professionals who understand sovereign architecture—not just cloud security. Training must reflect operational reality.",
      stat: "109",
      statLabel: "Countries with Data Laws"
    },
    {
      icon: <Zap className="w-10 h-10" />,
      title: "Real-Time Defense Systems",
      description: "Modern threats move at machine speed. TCPWave's infrastructure processes 2.3 billion DNS queries daily across 67 global points of presence. Your training environment must match this scale.",
      stat: "2.3B",
      statLabel: "Daily DNS Queries"
    },
    {
      icon: <AlertTriangle className="w-10 h-10" />,
      title: "Nation-State Attribution",
      description: "Fast-flux networks, domain generation algorithms, and infrastructure-layer attacks require specialized detection. Traditional courses teach theory—we train you on live threat feeds.",
      stat: "24/7",
      statLabel: "Live Threat Intelligence"
    }
  ];

  return (
    <section className="py-24 bg-gradient-to-b from-slate-900 via-slate-950 to-slate-900 relative overflow-hidden">
      {/* Layered Background Effects */}
      <div className="absolute inset-0 bg-[url('https://www.transparenttextures.com/patterns/diagmonds-light.png')] opacity-5" />
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top,rgba(6,182,212,0.1)_0%,transparent_50%)]" />
      <div className="absolute top-0 left-1/4 w-96 h-96 bg-primary/10 rounded-full blur-[150px] animate-pulse-slow" />
      <div className="absolute bottom-0 right-1/4 w-96 h-96 bg-secondary/10 rounded-full blur-[150px] animate-pulse-slow" style={{ animationDelay: '2s' }} />
      
      <div className="container mx-auto px-4 md:px-6 relative z-10">
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <div className="flex items-center justify-center gap-2 mb-4">
            <Shield className="w-6 h-6 text-primary animate-pulse" />
            <span className="text-primary font-mono text-xs uppercase tracking-[0.3em]">Strategic Context</span>
          </div>
          <h2 className="text-4xl md:text-5xl font-display font-bold text-white mb-6">
            Why Sovereign Security Matters
          </h2>
          <p className="text-slate-400 text-lg max-w-3xl mx-auto leading-relaxed">
            The cybersecurity landscape has fundamentally changed. Nations are building sovereign infrastructure, 
            and the talent gap in infrastructure-layer defense is widening. Here's why traditional training fails.
          </p>
        </motion.div>

        <div className="grid sm:grid-cols-1 md:grid-cols-2 gap-6 md:gap-8 mb-12 md:mb-16">
          {reasons.map((reason, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.15 }}
              className="group relative"
            >
              <div className="h-full p-8 rounded-2xl bg-gradient-to-br from-slate-900/90 to-slate-950/90 border border-slate-800 hover:border-primary/50 transition-all duration-500 hover:shadow-[0_0_50px_rgba(6,182,212,0.2)] hover:-translate-y-2 relative overflow-hidden backdrop-blur-sm">
                {/* Layered Gradient Overlays */}
                <div className="absolute inset-0 bg-gradient-to-br from-primary/10 via-transparent to-secondary/5 opacity-0 group-hover:opacity-100 transition-opacity duration-700" />
                <div className="absolute inset-0 bg-gradient-to-tl from-transparent via-white/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                <div className="absolute inset-0 bg-gradient-to-r from-transparent via-primary/15 to-transparent -translate-x-full group-hover:translate-x-full transition-transform duration-1200" />
                
                {/* Glow Circle */}
                <div className="absolute top-0 right-0 w-40 h-40 bg-primary/10 rounded-full blur-3xl -mr-20 -mt-20 group-hover:bg-primary/20 group-hover:scale-150 transition-all duration-700" />
                
                {/* Content */}
                <div className="relative z-10">
                  <div className="flex items-start justify-between mb-6">
                    <div className="p-4 bg-slate-950/80 backdrop-blur rounded-xl border border-slate-800 group-hover:border-primary/50 group-hover:scale-110 transition-all duration-300 text-primary group-hover:text-white shadow-lg">
                      {reason.icon}
                    </div>
                    <div className="text-right">
                      <div className="text-3xl font-display font-bold text-white group-hover:text-primary transition-colors">
                        {reason.stat}
                      </div>
                      <div className="text-xs text-slate-500 font-mono uppercase tracking-wider">
                        {reason.statLabel}
                      </div>
                    </div>
                  </div>
                  
                  <h3 className="text-xl font-display font-bold text-white mb-4 group-hover:text-primary transition-colors">
                    {reason.title}
                  </h3>
                  <p className="text-slate-400 leading-relaxed group-hover:text-slate-300 transition-colors">
                    {reason.description}
                  </p>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Bottom Call-out Box */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="relative max-w-4xl mx-auto"
        >
          <div className="p-8 md:p-12 rounded-2xl bg-gradient-to-r from-slate-900/50 via-primary/5 to-slate-900/50 border border-primary/30 backdrop-blur-md shadow-[0_0_80px_rgba(6,182,212,0.15)] relative overflow-hidden">
            {/* Animated Background */}
            <div className="absolute inset-0 bg-gradient-to-r from-transparent via-primary/10 to-transparent animate-gradient-x" />
            
            <div className="relative z-10 text-center">
              <Database className="w-16 h-16 text-primary mx-auto mb-6 drop-shadow-[0_0_30px_rgba(6,182,212,0.5)]" />
              <h3 className="text-2xl md:text-3xl font-display font-bold text-white mb-4">
                The Bottom Line
              </h3>
              <p className="text-slate-300 text-lg leading-relaxed max-w-3xl mx-auto">
                If your training environment doesn't process real DNS traffic, analyze live threat feeds, 
                or deploy on sovereign infrastructure, you're learning yesterday's security. T-SPAN trains you 
                for the infrastructure wars happening <span className="text-primary font-bold">right now</span>.
              </p>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
