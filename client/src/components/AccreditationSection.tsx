import { motion } from "framer-motion";
import { Award, Building, GraduationCap, Verified, Medal, Trophy } from "lucide-react";

export default function AccreditationSection() {
  const accreditations = [
    {
      icon: <GraduationCap className="w-12 h-12" />,
      org: "BITS Pilani, Goa Campus",
      credential: "Joint Academic Credential",
      description: "India's top-ranked private university co-certifies all T-SPAN programs, ensuring academic rigor and institutional backing.",
      badge: "Academic Partner"
    },
    {
      icon: <Building className="w-12 h-12" />,
      org: "Data Security Council of India (DSCI)",
      credential: "Industry Recognition",
      description: "DSCI, NASSCOM's cybersecurity arm, endorses T-SPAN's curriculum as aligned with national security workforce development goals.",
      badge: "Industry Body"
    },
    {
      icon: <Medal className="w-12 h-12" />,
      org: "TCPWave Certified Professional",
      credential: "Vendor Certification",
      description: "Graduates earn official TCPWave certification, recognized globally for DDI infrastructure expertise and operational competence.",
      badge: "Vendor Certified"
    },
    {
      icon: <Trophy className="w-12 h-12" />,
      org: "ODNI Trusted Partner",
      credential: "Government Alignment",
      description: "T-SPAN's sovereign security framework aligns with ODNI (Office of Director of National Intelligence) secure infrastructure standards.",
      badge: "Gov't Aligned"
    }
  ];

  return (
    <section className="py-24 bg-gradient-to-b from-slate-950 via-slate-900 to-slate-950 relative overflow-hidden">
      {/* Sophisticated Background */}
      <div className="absolute inset-0 opacity-30">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_50%,rgba(6,182,212,0.1)_0%,transparent_50%)]" />
        <div className="absolute inset-0 bg-[linear-gradient(rgba(251,191,36,0.02)_1px,transparent_1px),linear-gradient(90deg,rgba(251,191,36,0.02)_1px,transparent_1px)] bg-[size:100px_100px]" />
      </div>
      <div className="absolute top-1/4 left-0 w-96 h-96 bg-secondary/10 rounded-full blur-[140px]" />
      <div className="absolute bottom-1/4 right-0 w-96 h-96 bg-primary/10 rounded-full blur-[140px]" />
      
      <div className="container mx-auto px-4 md:px-6 relative z-10">
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <div className="flex items-center justify-center gap-2 mb-4">
            <Verified className="w-6 h-6 text-white animate-pulse" />
            <span className="text-white font-mono text-xs uppercase tracking-[0.3em]">Credibility & Recognition</span>
          </div>
          <h2 className="text-4xl md:text-5xl font-display font-bold text-white mb-6">
            Accreditation & Institutional Backing
          </h2>
          <p className="text-slate-400 text-lg max-w-3xl mx-auto leading-relaxed">
            T-SPAN isn't a fly-by-night operation. Our credentials are backed by India's top academic institution, 
            national industry bodies, and aligned with global security standards.
          </p>
        </motion.div>

        <div className="grid sm:grid-cols-1 md:grid-cols-2 gap-6 md:gap-8 max-w-6xl mx-auto mb-12 md:mb-16">
          {accreditations.map((item, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1 }}
              className="group relative"
            >
              <div className="h-full p-8 rounded-2xl bg-slate-900/60 border-2 border-slate-800 hover:border-secondary/60 transition-all duration-500 hover:shadow-[0_0_60px_rgba(251,191,36,0.2)] backdrop-blur-sm relative overflow-hidden">
                {/* Multi-layer Effects */}
                <div className="absolute inset-0 bg-gradient-to-br from-secondary/10 via-transparent to-primary/5 opacity-0 group-hover:opacity-100 transition-opacity duration-700" />
                <div className="absolute inset-0 bg-gradient-to-tl from-transparent via-white/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                <div className="absolute inset-0 bg-gradient-to-r from-transparent via-secondary/15 to-transparent -translate-x-full group-hover:translate-x-full transition-transform duration-1300" />
                
                {/* Corner Badge */}
                <div className="absolute top-4 right-4 px-3 py-1 bg-secondary/20 border border-secondary/40 rounded-full text-secondary text-xs font-mono font-bold uppercase tracking-wider backdrop-blur">
                  {item.badge}
                </div>
                
                {/* Glow Effect */}
                <div className="absolute -top-10 -left-10 w-40 h-40 bg-secondary/20 rounded-full blur-3xl group-hover:scale-150 transition-transform duration-700" />
                
                {/* Content */}
                <div className="relative z-10">
                  <div className="mb-6 p-4 bg-slate-950/80 backdrop-blur rounded-xl border border-slate-800 group-hover:border-secondary/50 inline-flex group-hover:scale-110 transition-all duration-300 text-secondary shadow-lg">
                    {item.icon}
                  </div>
                  
                  <h3 className="text-2xl font-display font-bold text-white mb-2 group-hover:text-secondary transition-colors">
                    {item.org}
                  </h3>
                  
                  <div className="text-primary text-sm font-mono font-bold mb-4 uppercase tracking-wider">
                    {item.credential}
                  </div>
                  
                  <p className="text-slate-400 leading-relaxed group-hover:text-slate-300 transition-colors">
                    {item.description}
                  </p>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Credential Preview */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="max-w-4xl mx-auto"
        >
          <div className="p-10 rounded-2xl bg-gradient-to-br from-slate-900/90 via-slate-950/90 to-slate-900/90 border-2 border-secondary/30 shadow-[0_0_100px_rgba(251,191,36,0.15)] relative overflow-hidden backdrop-blur-md">
            {/* Animated Shine */}
            <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/10 to-transparent -skew-x-12 animate-shine" />
            
            <div className="relative z-10 text-center">
              <Award className="w-20 h-20 text-secondary mx-auto mb-6 drop-shadow-[0_0_40px_rgba(251,191,36,0.6)]" />
              <h3 className="text-3xl font-display font-bold text-white mb-4">
                Joint Certification
              </h3>
              <p className="text-slate-300 text-lg mb-6 max-w-2xl mx-auto">
                Upon successful completion, you receive a <span className="text-secondary font-bold">joint credential</span> from 
                BITS Pilani, T-SPAN University, and DSCI—recognized across government, defense, and enterprise sectors.
              </p>
              <div className="flex flex-wrap justify-center gap-4 text-sm text-slate-500">
                <span className="px-4 py-2 bg-slate-950/50 border border-slate-700 rounded-lg font-mono">BITS Pilani Goa</span>
                <span className="px-4 py-2 bg-slate-950/50 border border-slate-700 rounded-lg font-mono">T-SPAN University</span>
                <span className="px-4 py-2 bg-slate-950/50 border border-slate-700 rounded-lg font-mono">DSCI</span>
                <span className="px-4 py-2 bg-slate-950/50 border border-slate-700 rounded-lg font-mono">TCPWave Certified</span>
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
