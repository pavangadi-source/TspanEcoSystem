import { motion } from "framer-motion";
import { TrendingUp, Shield, DollarSign, Target, AlertCircle, CheckCircle2 } from "lucide-react";
import { Button } from "@/components/ui/button";

export default function ExecutiveSummary() {
  const imperatives = [
    {
      icon: <AlertCircle className="w-6 h-6" />,
      title: "83% of Critical Infrastructure Attacks Target DNS Layer",
      impact: "Your CISO is firefighting symptoms while nation-states exploit infrastructure blind spots.",
      solution: "Train teams on the layer adversaries actually weaponize."
    },
    {
      icon: <DollarSign className="w-6 h-6" />,
      title: "Average Breach Cost: $4.45M (IBM, 2023)",
      impact: "One DNS-layer compromise costs more than training your entire SOC team.",
      solution: "Preventive capability development vs. reactive incident response."
    },
    {
      icon: <Target className="w-6 h-6" />,
      title: "1.5M Unfilled Cybersecurity Positions in India",
      impact: "Competing for talent trained on outdated curricula that ignore infrastructure security.",
      solution: "Develop in-house sovereign security expertise, reducing dependency on external consultants."
    },
    {
      icon: <TrendingUp className="w-6 h-6" />,
      title: "Data Localization Mandates in 109 Countries",
      impact: "Compliance risk and operational complexity without sovereign architecture expertise.",
      solution: "Position your organization ahead of regulatory requirements with trained staff."
    }
  ];

  return (
    <section className="py-24 bg-gradient-to-br from-slate-950 via-slate-900 to-slate-950 relative overflow-hidden border-y border-slate-800">
      {/* Sophisticated Executive Background */}
      <div className="absolute inset-0 bg-[url('https://www.transparenttextures.com/patterns/carbon-fibre.png')] opacity-5" />
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,rgba(6,182,212,0.08)_0%,transparent_60%)]" />
      <div className="absolute top-0 left-1/3 w-96 h-96 bg-primary/5 rounded-full blur-[150px]" />
      <div className="absolute bottom-0 right-1/3 w-96 h-96 bg-secondary/5 rounded-full blur-[150px]" />
      
      <div className="container mx-auto px-4 md:px-6 relative z-10">
        {/* Executive Header */}
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="max-w-5xl mx-auto mb-16"
        >
          <div className="flex items-center gap-3 mb-6">
            <div className="w-1 h-12 bg-gradient-to-b from-primary to-secondary rounded-full" />
            <div>
              <p className="text-secondary font-mono text-xs uppercase tracking-[0.3em] mb-1">For Chief Strategy Officers</p>
              <h2 className="text-4xl md:text-5xl font-display font-bold text-white">
                The Strategic <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary to-secondary">Business Case</span>
              </h2>
            </div>
          </div>
          <p className="text-slate-300 text-xl leading-relaxed">
            While competitors train teams on application security, your organization could be building 
            <span className="text-white font-bold"> infrastructure-layer defense capabilities</span> that 
            nation-states respect and boards understand. Here's why T-SPAN is a strategic investment, not a training expense.
          </p>
        </motion.div>

        {/* Strategic Imperatives Grid */}
        <div className="grid sm:grid-cols-1 md:grid-cols-2 gap-4 md:gap-6 max-w-6xl mx-auto mb-12 md:mb-16">
          {imperatives.map((item, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ delay: i * 0.1 }}
              className="group"
            >
              <div className="h-full p-4 sm:p-6 md:p-8 rounded-xl md:rounded-2xl bg-slate-900/60 border-2 border-slate-800 hover:border-primary/50 transition-all duration-500 hover:shadow-[0_0_50px_rgba(6,182,212,0.25)] backdrop-blur-sm relative overflow-hidden">
                {/* Gradient Effects */}
                <div className="absolute inset-0 bg-gradient-to-br from-primary/10 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-700" />
                <div className="absolute inset-0 bg-gradient-to-r from-transparent via-primary/20 to-transparent -translate-x-full group-hover:translate-x-full transition-transform duration-1200" />
                
                <div className="relative z-10">
                  <div className="flex items-start gap-4 mb-4">
                    <div className="p-3 bg-slate-950/80 rounded-lg border border-slate-800 group-hover:border-primary/50 transition-colors text-primary">
                      {item.icon}
                    </div>
                    <div className="flex-1">
                      <h3 className="text-lg font-display font-bold text-white mb-3 group-hover:text-primary transition-colors leading-tight">
                        {item.title}
                      </h3>
                    </div>
                  </div>
                  
                  <div className="space-y-3 ml-[60px]">
                    <div className="flex gap-2">
                      <AlertCircle className="w-4 h-4 text-red-400 shrink-0 mt-0.5" />
                      <p className="text-sm text-slate-400 leading-relaxed">
                        <span className="text-red-400 font-bold">Risk:</span> {item.impact}
                      </p>
                    </div>
                    <div className="flex gap-2">
                      <CheckCircle2 className="w-4 h-4 text-green-400 shrink-0 mt-0.5" />
                      <p className="text-sm text-slate-300 leading-relaxed">
                        <span className="text-green-400 font-bold">T-SPAN Solution:</span> {item.solution}
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* ROI Calculator */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="max-w-5xl mx-auto"
        >
          <div className="p-6 sm:p-8 md:p-10 lg:p-12 rounded-xl md:rounded-2xl bg-gradient-to-br from-slate-900/90 via-primary/5 to-slate-900/90 border-2 border-primary/40 shadow-[0_0_100px_rgba(6,182,212,0.2)] relative overflow-hidden backdrop-blur-md">
            {/* Animated Background */}
            <div className="absolute inset-0 bg-gradient-to-r from-transparent via-primary/10 to-transparent animate-gradient-x" />
            
            <div className="relative z-10">
              <div className="flex flex-col md:flex-row items-start md:items-center justify-between mb-6 md:mb-8 gap-4">
                <div>
                  <h3 className="text-2xl sm:text-3xl font-display font-bold text-white mb-2">
                    Strategic ROI Analysis
                  </h3>
                  <p className="text-sm sm:text-base text-slate-400">Per 25-person cohort over 12 months</p>
                </div>
                <div className="px-4 sm:px-6 py-2 sm:py-3 bg-slate-950/80 border border-primary/50 rounded-lg">
                  <div className="text-xs text-slate-500 uppercase tracking-wider mb-1">Investment Multiple</div>
                  <div className="text-3xl sm:text-4xl font-display font-bold text-transparent bg-clip-text bg-gradient-to-r from-primary to-secondary">
                    7.2x
                  </div>
                </div>
              </div>

              <div className="grid sm:grid-cols-1 md:grid-cols-3 gap-4 md:gap-6 mb-6 md:mb-8">
                <div className="p-6 bg-slate-950/50 rounded-xl border border-slate-800">
                  <div className="text-xs text-red-400 uppercase tracking-wider mb-2 font-mono">Investment</div>
                  <div className="text-3xl font-display font-bold text-white mb-1">$62,500</div>
                  <div className="text-sm text-slate-500">25 students @ $2,500 each</div>
                </div>
                <div className="p-6 bg-slate-950/50 rounded-xl border border-slate-800">
                  <div className="text-xs text-green-400 uppercase tracking-wider mb-2 font-mono">Avoided Costs</div>
                  <div className="text-3xl font-display font-bold text-white mb-1">$285K</div>
                  <div className="text-sm text-slate-500">Consultants + breach prevention</div>
                </div>
                <div className="p-6 bg-slate-950/50 rounded-xl border border-primary/50">
                  <div className="text-xs text-primary uppercase tracking-wider mb-2 font-mono">Net Value</div>
                  <div className="text-3xl font-display font-bold text-primary mb-1">$450K</div>
                  <div className="text-sm text-slate-300">12-month capability value</div>
                </div>
              </div>

              <div className="space-y-3">
                {[
                  { label: "External consultant reduction (3 engagements @ $75K avg)", value: "$225,000" },
                  { label: "Prevented infrastructure-layer breach (1 incident avoided)", value: "$180,000" },
                  { label: "Reduced time-to-hire (sovereign security expertise in-house)", value: "$45,000" }
                ].map((item, i) => (
                  <div key={i} className="flex items-center justify-between p-4 bg-slate-950/30 rounded-lg border border-slate-800/50">
                    <span className="text-slate-300 text-sm">{item.label}</span>
                    <span className="text-white font-bold font-mono">{item.value}</span>
                  </div>
                ))}
              </div>

              <div className="mt-8 pt-8 border-t border-slate-800">
                <div className="flex flex-col md:flex-row items-center justify-between gap-6">
                  <div className="text-center md:text-left">
                    <p className="text-slate-400 text-sm mb-2">
                      Executive sponsorship available for cohorts of 15+ from single organization
                    </p>
                    <p className="text-xs text-slate-600 font-mono">
                      Custom delivery, on-site components, and white-label options for strategic partners
                    </p>
                  </div>
                  <Button 
                    size="lg"
                    className="bg-primary hover:bg-primary/90 text-white font-bold font-tech tracking-wider shadow-[0_0_30px_rgba(6,182,212,0.4)] hover:shadow-[0_0_50px_rgba(6,182,212,0.6)] transition-all whitespace-nowrap"
                    onClick={() => document.getElementById("register")?.scrollIntoView({ behavior: "smooth" })}
                  >
                    SCHEDULE EXEC BRIEFING
                  </Button>
                </div>
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
