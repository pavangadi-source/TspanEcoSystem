import { motion } from "framer-motion";
import { Briefcase, TrendingUp, Target, Award, ArrowRight, Building2 } from "lucide-react";
import { Button } from "@/components/ui/button";

export default function CareerOutcomes() {
  const careerPaths = [
    {
      role: "DDI Infrastructure Architect",
      salary: "₹18-32 LPA",
      companies: "Tier-1 Banks, Telecom, Government",
      skills: ["DNS/DHCP/IPAM", "TCPWave Platform", "Dual-Stack IPv4/IPv6", "DNSSEC Implementation"],
      demand: "Critical"
    },
    {
      role: "ADC & Load Balancing Engineer",
      salary: "₹15-28 LPA",
      companies: "Cloud Providers, CDNs, Enterprise IT",
      skills: ["Application Delivery", "F5/HAProxy/Nginx", "SSL/TLS Offloading", "Traffic Management"],
      demand: "High"
    },
    {
      role: "Infrastructure Automation Specialist",
      salary: "₹16-30 LPA",
      companies: "DevOps Teams, SRE Organizations",
      skills: ["Ansible", "Terraform", "ServiceNow Integration", "GitOps Workflows"],
      demand: "Explosive"
    },
    {
      role: "Deep Network Security Engineer",
      salary: "₹20-35 LPA",
      companies: "Defense, Critical Infrastructure, SOCs",
      skills: ["BGP Security", "Layer 2/3 Threats", "Network Forensics", "Packet Analysis"],
      demand: "Critical"
    },
    {
      role: "Threat Intelligence Analyst",
      salary: "₹18-33 LPA",
      companies: "Security Vendors, Managed SOCs, Gov't",
      skills: ["MISP Platform", "STIX/TAXII", "IOC Correlation", "Adversary Attribution"],
      demand: "High"
    },
    {
      role: "Sovereign Infrastructure Consultant",
      salary: "₹25-45 LPA",
      companies: "Big 4, Boutique Security Firms",
      skills: ["Data Localization", "Sovereign Cloud", "Compliance Architecture", "Risk Assessment"],
      demand: "Emerging"
    }
  ];

  const placementProcess = [
    {
      week: "Week 8",
      title: "Resume & Portfolio Building",
      description: "Technical writing workshop, GitHub portfolio review, and LinkedIn optimization for infrastructure roles."
    },
    {
      week: "Week 9",
      title: "Industry Connections",
      description: "Direct introductions to hiring managers at partner organizations. 67% of placements come through network."
    },
    {
      week: "Week 10",
      title: "Live Interview Prep",
      description: "Mock technical interviews with CTOs and senior architects. Whiteboard sessions on DDI design problems."
    },
    {
      week: "Post-Graduation",
      title: "Placement Guarantee",
      description: "Active job matching for 12 months. Average 3.2 interviews to offer. 95% placement rate within 90 days."
    }
  ];

  return (
    <section className="py-24 bg-gradient-to-b from-slate-950 via-slate-900 to-slate-950 relative overflow-hidden">
      {/* Background */}
      <div className="absolute inset-0 bg-[linear-gradient(rgba(6,182,212,0.03)_2px,transparent_2px),linear-gradient(90deg,rgba(6,182,212,0.03)_2px,transparent_2px)] bg-[size:100px_100px]" />
      <div className="absolute inset-0 bg-gradient-to-b from-transparent via-slate-950/50 to-transparent" />
      <div className="absolute top-1/4 right-0 w-96 h-96 bg-primary/10 rounded-full blur-[150px]" />
      
      <div className="container mx-auto px-4 md:px-6 relative z-10">
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <div className="flex items-center justify-center gap-2 mb-4">
            <Briefcase className="w-6 h-6 text-white animate-pulse" />
            <span className="text-white font-mono text-xs uppercase tracking-[0.3em]">Career Acceleration</span>
          </div>
          <h2 className="text-4xl md:text-5xl font-display font-bold text-white mb-6">
            Your Path to Elite Infrastructure Roles
          </h2>
          <p className="text-slate-400 text-lg max-w-3xl mx-auto leading-relaxed">
            DDI infrastructure, ADC engineering, and infrastructure automation aren't just buzzwords—they're 
            <span className="text-white font-bold"> the highest-paid specializations</span> in cybersecurity and network engineering. 
            Here's why organizations pay premium salaries for T-SPAN graduates.
          </p>
        </motion.div>

        {/* Why These Skills Command Premium */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="max-w-5xl mx-auto mb-16"
        >
          <div className="p-8 md:p-10 rounded-2xl bg-gradient-to-br from-slate-900/80 to-slate-950/90 border-2 border-primary/30 shadow-[0_0_60px_rgba(6,182,212,0.2)] backdrop-blur-sm relative overflow-hidden">
            <div className="absolute inset-0 bg-gradient-to-r from-transparent via-primary/10 to-transparent animate-gradient-x" />
            
            <div className="relative z-10">
              <h3 className="text-2xl md:text-3xl font-display font-bold text-white mb-6 flex items-center gap-3">
                <Target className="w-8 h-8 text-primary" />
                Why DDI + Automation Experts Earn 40-60% Above Market
              </h3>
              
              <div className="grid md:grid-cols-2 gap-6">
                <div className="space-y-4">
                  <div className="flex gap-3">
                    <div className="w-8 h-8 rounded-full bg-primary/20 flex items-center justify-center shrink-0 mt-1">
                      <span className="text-primary font-bold text-sm">1</span>
                    </div>
                    <div>
                      <h4 className="text-white font-bold mb-1">Scarcity Premium</h4>
                      <p className="text-slate-400 text-sm">Only 2,300 certified DDI engineers in India vs. 45,000 open positions. Supply-demand gap = salary leverage.</p>
                    </div>
                  </div>
                  <div className="flex gap-3">
                    <div className="w-8 h-8 rounded-full bg-primary/20 flex items-center justify-center shrink-0 mt-1">
                      <span className="text-primary font-bold text-sm">2</span>
                    </div>
                    <div>
                      <h4 className="text-white font-bold mb-1">Cross-Stack Mastery</h4>
                      <p className="text-slate-400 text-sm">You're not just a DNS admin or Terraform operator—you're the architect who bridges networking, security, and automation.</p>
                    </div>
                  </div>
                </div>
                
                <div className="space-y-4">
                  <div className="flex gap-3">
                    <div className="w-8 h-8 rounded-full bg-primary/20 flex items-center justify-center shrink-0 mt-1">
                      <span className="text-primary font-bold text-sm">3</span>
                    </div>
                    <div>
                      <h4 className="text-white font-bold mb-1">Mission-Critical Impact</h4>
                      <p className="text-slate-400 text-sm">DNS/DHCP/IPAM failures = revenue loss. Organizations pay top dollar for professionals who prevent infrastructure collapse.</p>
                    </div>
                  </div>
                  <div className="flex gap-3">
                    <div className="w-8 h-8 rounded-full bg-primary/20 flex items-center justify-center shrink-0 mt-1">
                      <span className="text-primary font-bold text-sm">4</span>
                    </div>
                    <div>
                      <h4 className="text-white font-bold mb-1">Sovereign Demand</h4>
                      <p className="text-slate-400 text-sm">Data localization laws require in-house DDI expertise. Foreign consultants can't access sovereign infrastructure.</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </motion.div>

        {/* Career Paths */}
        <div className="mb-16">
          <h3 className="text-3xl font-display font-bold text-white mb-8 text-center">
            Six High-Value Career Tracks
          </h3>
          <div className="grid sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 md:gap-6 max-w-7xl mx-auto">
            {careerPaths.map((path, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1 }}
                className="group"
              >
                <div className="h-full p-6 rounded-xl bg-slate-900/60 border-2 border-slate-800 hover:border-primary/50 transition-all duration-500 hover:shadow-[0_0_40px_rgba(6,182,212,0.2)] backdrop-blur-sm relative overflow-hidden hover:-translate-y-1">
                  {/* Gradient Effects */}
                  <div className="absolute inset-0 bg-gradient-to-br from-primary/10 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-700" />
                  <div className="absolute inset-0 bg-gradient-to-r from-transparent via-primary/15 to-transparent -translate-x-full group-hover:translate-x-full transition-transform duration-1200" />
                  
                  <div className="relative z-10">
                    {/* Demand Badge */}
                    <div className={`inline-flex items-center gap-2 px-3 py-1 rounded-full mb-4 text-xs font-bold uppercase tracking-wider ${
                      path.demand === 'Critical' ? 'bg-red-500/20 border border-red-500/40 text-red-400' :
                      path.demand === 'Explosive' ? 'bg-orange-500/20 border border-orange-500/40 text-orange-400' :
                      'bg-primary/20 border border-primary/40 text-primary'
                    }`}>
                      <TrendingUp className="w-3 h-3" />
                      {path.demand} Demand
                    </div>
                    
                    <h4 className="text-xl font-display font-bold text-white mb-2 group-hover:text-primary transition-colors">
                      {path.role}
                    </h4>
                    
                    <div className="flex items-center gap-2 mb-3">
                      <div className="text-2xl font-bold text-primary">
                        {path.salary}
                      </div>
                      <div className="text-xs text-slate-400 font-mono">MEDIAN</div>
                    </div>
                    
                    <p className="text-slate-400 text-sm mb-4">
                      <Building2 className="w-3 h-3 inline mr-1" />
                      {path.companies}
                    </p>
                    
                    <div className="space-y-1.5">
                      {path.skills.map((skill, j) => (
                        <div key={j} className="flex items-center gap-2">
                          <div className="w-1 h-1 rounded-full bg-primary" />
                          <span className="text-xs text-slate-500 font-mono">{skill}</span>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>

        {/* Placement Process */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="max-w-5xl mx-auto mb-12"
        >
          <h3 className="text-3xl font-display font-bold text-white mb-8 text-center">
            How Placement Actually Works
          </h3>
          
          <div className="grid md:grid-cols-2 gap-6">
            {placementProcess.map((step, i) => (
              <div key={i} className="p-6 rounded-xl bg-slate-900/40 border border-slate-800 hover:border-primary/30 transition-all backdrop-blur-sm">
                <div className="flex items-start gap-4">
                  <div className="px-3 py-1 bg-primary/20 border border-primary/40 rounded-lg">
                    <span className="text-primary font-mono text-sm font-bold">{step.week}</span>
                  </div>
                  <div className="flex-1">
                    <h4 className="text-white font-display font-bold mb-2">{step.title}</h4>
                    <p className="text-slate-400 text-sm leading-relaxed">{step.description}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </motion.div>

        {/* Placement Stats */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="max-w-5xl mx-auto"
        >
          <div className="p-10 rounded-2xl bg-gradient-to-br from-slate-900/90 to-slate-950/90 border-2 border-secondary/30 shadow-[0_0_80px_rgba(251,191,36,0.15)] relative overflow-hidden backdrop-blur-md">
            <div className="absolute inset-0 bg-gradient-to-r from-transparent via-secondary/10 to-transparent animate-gradient-x" />
            
            <div className="relative z-10">
              <div className="text-center mb-8">
                <Award className="w-16 h-16 text-secondary mx-auto mb-4 drop-shadow-[0_0_30px_rgba(251,191,36,0.5)]" />
                <h3 className="text-3xl font-display font-bold text-white mb-2">
                  T-SPAN Placement Guarantee
                </h3>
                <p className="text-slate-400">Backed by hiring partners and alumni network</p>
              </div>
              
              <div className="grid grid-cols-2 md:grid-cols-4 gap-6 mb-8">
                {[
                  { value: "95%", label: "Placed in 90 Days" },
                  { value: "₹18L", label: "Median Package" },
                  { value: "3.2", label: "Avg Interviews to Offer" },
                  { value: "180+", label: "Hiring Partners" }
                ].map((stat, i) => (
                  <div key={i} className="text-center">
                    <div className="text-4xl font-display font-bold text-secondary mb-2">
                      {stat.value}
                    </div>
                    <div className="text-xs text-slate-300 uppercase tracking-wider font-mono">
                      {stat.label}
                    </div>
                  </div>
                ))}
              </div>
              
              <div className="text-center">
                <Button 
                  size="lg"
                  className="bg-secondary hover:bg-secondary/90 text-white font-bold font-tech tracking-wider shadow-[0_0_30px_rgba(251,191,36,0.4)] hover:shadow-[0_0_50px_rgba(251,191,36,0.6)] transition-all"
                  onClick={() => document.getElementById("register")?.scrollIntoView({ behavior: "smooth" })}
                >
                  START YOUR CAREER TRANSFORMATION
                  <ArrowRight className="w-5 h-5 ml-2" />
                </Button>
                <p className="text-slate-500 text-xs mt-4 font-mono">
                  Limited to 25 students per cohort • Next batch starts March 15, 2025
                </p>
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
