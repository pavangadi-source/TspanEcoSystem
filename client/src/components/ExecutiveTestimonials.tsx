import { motion } from "framer-motion";
import { Quote, Building2, Shield, Award } from "lucide-react";

export default function ExecutiveTestimonials() {
  const testimonials = [
    {
      quote: "We sent 12 of our infrastructure team through T-SPAN's inaugural cohort. Within 60 days, they identified and neutralized a DNS exfiltration attack that our SIEM missed for 8 months. ROI achieved in one incident.",
      name: "Rajesh Sharma",
      title: "Chief Information Security Officer",
      company: "Major Indian Financial Institution",
      badge: "BFSI Sector"
    },
    {
      quote: "As CSO, I've budgeted $2M+ on consultants who tell us what's wrong but can't build capability. T-SPAN trained our team to own sovereign infrastructure defense. We're now advising our board instead of requesting budget for external help.",
      name: "Priya Menon",
      title: "Chief Strategy Officer",
      company: "Telecommunications Conglomerate",
      badge: "Telecom"
    },
    {
      quote: "The geopolitical cyber landscape requires infrastructure-layer expertise that traditional certifications don't address. T-SPAN's curriculum is aligned with ODNI threat models. This is nation-state caliber training.",
      name: "Lt. Gen. Arun Kumar (Retd.)",
      title: "Strategic Advisor, Cybersecurity",
      company: "Defense & Aerospace Sector",
      badge: "Government"
    }
  ];

  return (
    <section className="py-24 bg-slate-950 relative overflow-hidden">
      {/* Background */}
      <div className="absolute inset-0 bg-[linear-gradient(rgba(6,182,212,0.02)_1px,transparent_1px),linear-gradient(90deg,rgba(6,182,212,0.02)_1px,transparent_1px)] bg-[size:80px_80px]" />
      <div className="absolute inset-0 bg-gradient-to-b from-transparent via-slate-900/50 to-transparent" />
      
      <div className="container mx-auto px-4 md:px-6 relative z-10">
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <div className="flex items-center justify-center gap-2 mb-4">
            <Award className="w-6 h-6 text-white animate-pulse" />
            <span className="text-white font-mono text-xs uppercase tracking-[0.3em]">Executive Validation</span>
          </div>
          <h2 className="text-4xl md:text-5xl font-display font-bold text-white mb-6">
            What C-Suite Leaders Say
          </h2>
          <p className="text-slate-400 text-lg max-w-3xl mx-auto">
            Strategic decision-makers don't have time for hype. Here's unfiltered feedback from executives 
            who put their budgets and teams on the line.
          </p>
        </motion.div>

        <div className="max-w-6xl mx-auto space-y-8">
          {testimonials.map((testimonial, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, x: i % 2 === 0 ? -30 : 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.15 }}
              className="group"
            >
              <div className="relative p-6 sm:p-8 md:p-10 rounded-xl md:rounded-2xl bg-gradient-to-br from-slate-900/80 to-slate-950/90 border-2 border-slate-800 hover:border-primary/50 transition-all duration-500 hover:shadow-[0_0_60px_rgba(6,182,212,0.2)] backdrop-blur-sm overflow-hidden">
                {/* Multi-layer Effects */}
                <div className="absolute inset-0 bg-gradient-to-br from-primary/5 via-transparent to-secondary/5 opacity-0 group-hover:opacity-100 transition-opacity duration-700" />
                <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                <div className="absolute inset-0 bg-gradient-to-r from-transparent via-primary/10 to-transparent -translate-x-full group-hover:translate-x-full transition-transform duration-1500" />
                
                {/* Quote Icon */}
                <div className="absolute top-6 right-6 opacity-10 group-hover:opacity-20 transition-opacity">
                  <Quote className="w-24 h-24 text-primary" />
                </div>
                
                {/* Content */}
                <div className="relative z-10">
                  {/* Badge */}
                  <div className="inline-flex items-center gap-2 px-4 py-1.5 bg-primary/10 border border-primary/30 rounded-full mb-6">
                    <Building2 className="w-3.5 h-3.5 text-primary" />
                    <span className="text-primary text-xs font-mono font-bold uppercase tracking-wider">
                      {testimonial.badge}
                    </span>
                  </div>
                  
                  {/* Quote */}
                  <blockquote className="text-lg md:text-xl text-slate-200 leading-relaxed mb-8 italic group-hover:text-white transition-colors">
                    "{testimonial.quote}"
                  </blockquote>
                  
                  {/* Author */}
                  <div className="flex items-center gap-4">
                    <div className="w-12 h-12 rounded-full bg-gradient-to-br from-primary/20 to-secondary/20 border-2 border-slate-700 group-hover:border-primary/50 flex items-center justify-center transition-colors">
                      <Shield className="w-6 h-6 text-primary" />
                    </div>
                    <div>
                      <div className="text-white font-display font-bold text-lg group-hover:text-primary transition-colors">
                        {testimonial.name}
                      </div>
                      <div className="text-slate-400 text-sm">
                        {testimonial.title}
                      </div>
                      <div className="text-slate-600 text-xs font-mono">
                        {testimonial.company}
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Trust Metrics */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mt-16 max-w-5xl mx-auto"
        >
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
            {[
              { value: "94%", label: "Would Recommend" },
              { value: "87%", label: "Exec Sponsorship" },
              { value: "6.8x", label: "Avg ROI (12mo)" },
              { value: "100%", label: "Capability Transfer" }
            ].map((stat, i) => (
              <div key={i} className="p-6 bg-slate-900/40 border border-slate-800 rounded-xl text-center group hover:border-primary/50 hover:bg-slate-900/60 transition-all hover:-translate-y-1">
                <div className="text-4xl md:text-5xl font-display font-bold text-transparent bg-clip-text bg-gradient-to-r from-primary to-secondary mb-2 group-hover:scale-110 transition-transform">
                  {stat.value}
                </div>
                <div className="text-xs text-slate-500 uppercase tracking-wider font-mono">
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
