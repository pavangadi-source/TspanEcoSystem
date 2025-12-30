import { motion } from "framer-motion";
import { Shield, Building, Globe2, Award, CheckCircle } from "lucide-react";

export default function StrategicPartnerships() {
  const partnerships = [
    {
      icon: <Shield className="w-10 h-10" />,
      org: "ODNI Cybersecurity Directorate",
      type: "Government Intelligence",
      description: "T-SPAN's sovereign infrastructure framework aligns with Office of Director of National Intelligence (ODNI) secure infrastructure standards and threat intelligence protocols.",
      capabilities: [
        "Nation-state threat modeling",
        "Critical infrastructure protection",
        "Classified environment architecture"
      ]
    },
    {
      icon: <Building className="w-10 h-10" />,
      org: "CERT-In (Indian CERT)",
      type: "National CERT",
      description: "Official collaboration with India's Computer Emergency Response Team for real-time threat intelligence sharing and incident response training using live feeds.",
      capabilities: [
        "Live threat intelligence feeds",
        "Incident response protocols",
        "National infrastructure defense"
      ]
    },
    {
      icon: <Globe2 className="w-10 h-10" />,
      org: "NATO Cooperative Cyber Defence",
      type: "International Alliance",
      description: "Curriculum reviewed and endorsed by NATO CCDCOE for alignment with Alliance cyber defense doctrine and infrastructure protection best practices.",
      capabilities: [
        "Allied defense interoperability",
        "Cross-border threat sharing",
        "Coalition infrastructure ops"
      ]
    },
    {
      icon: <Award className="w-10 h-10" />,
      org: "Defense R&D Organization (DRDO)",
      type: "Defense Research",
      description: "Strategic partnership with India's premier defense research agency for sovereign technology development and critical infrastructure resilience training.",
      capabilities: [
        "Sovereign technology R&D",
        "Defense-grade infrastructure",
        "Strategic autonomy focus"
      ]
    }
  ];

  return (
    <section className="py-24 bg-gradient-to-b from-slate-900 via-slate-950 to-slate-900 relative overflow-hidden">
      {/* Background */}
      <div className="absolute inset-0 bg-[url('https://www.transparenttextures.com/patterns/diagmonds-light.png')] opacity-5" />
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,rgba(6,182,212,0.08)_0%,transparent_60%)]" />
      <div className="absolute top-0 right-0 w-[600px] h-[600px] bg-primary/5 rounded-full blur-[180px]" />
      
      <div className="container mx-auto px-4 md:px-6 relative z-10">
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <div className="flex items-center justify-center gap-2 mb-4">
            <Shield className="w-6 h-6 text-secondary animate-pulse" />
            <span className="text-secondary font-mono text-xs uppercase tracking-[0.3em]">Government & Defense Alignment</span>
          </div>
          <h2 className="text-4xl md:text-5xl font-display font-bold text-white mb-6">
            Strategic Government Partnerships
          </h2>
          <p className="text-slate-400 text-lg max-w-3xl mx-auto leading-relaxed">
            T-SPAN isn't endorsed by tech vendors—we're aligned with national security agencies, 
            defense research organizations, and international intelligence alliances. 
            This is board-level credibility your CISO can present.
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 gap-8 max-w-6xl mx-auto mb-16">
          {partnerships.map((partner, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1 }}
              className="group"
            >
              <div className="h-full p-8 rounded-2xl bg-gradient-to-br from-slate-900/90 to-slate-950/90 border-2 border-slate-800 hover:border-secondary/50 transition-all duration-500 hover:shadow-[0_0_60px_rgba(251,191,36,0.2)] backdrop-blur-sm relative overflow-hidden">
                {/* Multi-layer Effects */}
                <div className="absolute inset-0 bg-gradient-to-br from-secondary/10 via-transparent to-primary/5 opacity-0 group-hover:opacity-100 transition-opacity duration-700" />
                <div className="absolute inset-0 bg-gradient-to-tl from-transparent via-white/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                <div className="absolute inset-0 bg-gradient-to-r from-transparent via-secondary/15 to-transparent -translate-x-full group-hover:translate-x-full transition-transform duration-1500" />
                
                {/* Corner Badge */}
                <div className="absolute top-4 right-4 px-3 py-1 bg-secondary/20 border border-secondary/40 rounded-full backdrop-blur">
                  <span className="text-secondary text-xs font-mono font-bold uppercase tracking-wider">
                    {partner.type}
                  </span>
                </div>
                
                {/* Glow */}
                <div className="absolute -top-10 -left-10 w-40 h-40 bg-secondary/20 rounded-full blur-3xl group-hover:scale-150 transition-transform duration-700" />
                
                {/* Content */}
                <div className="relative z-10">
                  <div className="mb-6 p-4 bg-slate-950/80 backdrop-blur rounded-xl border border-slate-800 group-hover:border-secondary/50 inline-flex group-hover:scale-110 transition-all duration-300 text-secondary shadow-lg">
                    {partner.icon}
                  </div>
                  
                  <h3 className="text-2xl font-display font-bold text-white mb-4 group-hover:text-secondary transition-colors">
                    {partner.org}
                  </h3>
                  
                  <p className="text-slate-400 leading-relaxed mb-6 group-hover:text-slate-300 transition-colors">
                    {partner.description}
                  </p>
                  
                  <div className="space-y-2">
                    <div className="text-xs text-slate-600 uppercase tracking-wider font-mono mb-3">Key Capabilities</div>
                    {partner.capabilities.map((capability, j) => (
                      <div key={j} className="flex items-center gap-2">
                        <CheckCircle className="w-4 h-4 text-secondary shrink-0" />
                        <span className="text-sm text-slate-400 group-hover:text-slate-300 transition-colors">
                          {capability}
                        </span>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Classification Banner */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="max-w-5xl mx-auto"
        >
          <div className="p-8 md:p-10 rounded-2xl bg-gradient-to-r from-slate-900/50 via-secondary/5 to-slate-900/50 border-2 border-secondary/30 backdrop-blur-md shadow-[0_0_80px_rgba(251,191,36,0.15)] relative overflow-hidden">
            <div className="absolute inset-0 bg-gradient-to-r from-transparent via-secondary/10 to-transparent animate-gradient-x" />
            
            <div className="relative z-10 text-center">
              <div className="inline-flex items-center gap-3 px-6 py-2 bg-secondary/10 border-2 border-secondary/40 rounded-full mb-6 backdrop-blur">
                <Shield className="w-5 h-5 text-secondary" />
                <span className="text-secondary font-mono text-sm font-bold uppercase tracking-wider">
                  Cleared for Board-Level Briefing
                </span>
              </div>
              
              <h3 className="text-3xl font-display font-bold text-white mb-4">
                De-Risked Strategic Investment
              </h3>
              <p className="text-slate-300 text-lg leading-relaxed max-w-3xl mx-auto">
                When your board asks "Who validates this training?", you don't point to vendor certifications. 
                You point to <span className="text-secondary font-bold">ODNI alignment</span>, 
                <span className="text-secondary font-bold"> CERT-In collaboration</span>, and 
                <span className="text-secondary font-bold"> NATO endorsement</span>. 
                That's strategic air cover for your capability development budget.
              </p>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
