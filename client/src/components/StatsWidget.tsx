import { motion } from "framer-motion";
import { TrendingUp, Users, Award, Zap } from "lucide-react";

const stats = [
  {
    icon: <Users className="w-8 h-8" />,
    value: "500+",
    label: "Active Students",
    trend: "+25%",
    color: "primary"
  },
  {
    icon: <Award className="w-8 h-8" />,
    value: "95%",
    label: "Job Placement",
    trend: "+5%",
    color: "secondary"
  },
  {
    icon: <Zap className="w-8 h-8" />,
    value: "67+",
    label: "Global PoPs",
    trend: "+12",
    color: "green-500"
  },
  {
    icon: <TrendingUp className="w-8 h-8" />,
    value: "₹18L",
    label: "Avg. Package",
    trend: "+30%",
    color: "primary"
  }
];

export default function StatsWidget() {
  return (
    <section className="py-20 bg-slate-950 relative overflow-hidden">
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(6,182,212,0.05)_0%,transparent_70%)]" />
      
      <div className="container mx-auto px-4 md:px-6 relative z-10">
        <div className="text-center mb-12">
          <div className="flex items-center justify-center gap-2 mb-3">
            <div className="w-2 h-2 bg-primary rounded-full animate-pulse" />
            <p className="text-primary font-mono text-xs uppercase tracking-widest">Real-time Metrics</p>
          </div>
          <h2 className="text-3xl md:text-4xl font-display font-bold text-white">
            Performance Dashboard
          </h2>
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {stats.map((stat, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1 }}
              className="group relative"
            >
              <div className="p-6 rounded-xl bg-gradient-to-br from-slate-900/80 to-slate-950/80 backdrop-blur-sm border border-slate-800 hover:border-primary/50 transition-all duration-500 hover:shadow-[0_0_40px_rgba(6,182,212,0.25)] hover:-translate-y-2 relative overflow-hidden">
                {/* Animated Gradient Overlay */}
                <div className="absolute inset-0 bg-gradient-to-br from-primary/20 via-secondary/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-700" />
                <div className="absolute inset-0 bg-gradient-to-tr from-transparent via-white/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                
                {/* Moving Gradient Glow */}
                <div className="absolute inset-0 bg-gradient-to-r from-transparent via-primary/20 to-transparent -translate-x-full group-hover:translate-x-full transition-transform duration-1000 ease-in-out" />
                
                <div className={`absolute top-0 right-0 w-40 h-40 bg-primary/10 rounded-full -mr-20 -mt-20 blur-3xl group-hover:bg-primary/20 group-hover:scale-150 transition-all duration-700`} />
                
                {/* Icon */}
                <div className={`mb-4 p-3 bg-slate-950 rounded-lg inline-flex border border-slate-800 group-hover:border-${stat.color}/50 transition-colors text-${stat.color} group-hover:scale-110 duration-300 shadow-lg`}>
                  {stat.icon}
                </div>
                
                {/* Value */}
                <div className="relative z-10">
                  <div className="flex items-baseline gap-2 mb-1">
                    <h3 className="text-4xl font-display font-bold text-white group-hover:text-primary transition-colors">
                      {stat.value}
                    </h3>
                    <span className={`text-xs font-mono font-bold px-2 py-1 rounded-full bg-green-500/10 text-green-400 border border-green-500/20`}>
                      {stat.trend}
                    </span>
                  </div>
                  
                  <p className="text-slate-400 text-sm font-medium uppercase tracking-wide group-hover:text-slate-300 transition-colors">
                    {stat.label}
                  </p>
                  
                  {/* Animated Progress Bar */}
                  <div className="mt-4 h-1.5 bg-slate-800/50 rounded-full overflow-hidden relative">
                    <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/20 to-transparent group-hover:translate-x-full transition-transform duration-1000" />
                    <div 
                      className="h-full bg-gradient-to-r from-primary via-secondary to-primary rounded-full transition-all duration-1000 group-hover:w-full shadow-[0_0_10px_rgba(6,182,212,0.5)]"
                      style={{ width: '0%' }}
                    />
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
