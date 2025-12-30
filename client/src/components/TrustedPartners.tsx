import { motion } from "framer-motion";
import { Building2, GraduationCap, Shield, Network, Database, UserCheck } from "lucide-react";

export default function TrustedPartners() {
  const partners = [
    {
      name: "BITS Pilani",
      type: "Academic Partner",
      icon: <GraduationCap className="w-8 h-8" />,
      color: "from-blue-500 to-indigo-600",
      bgColor: "bg-blue-500/10",
      borderColor: "border-blue-500/30",
      textColor: "text-blue-400"
    },
    {
      name: "TCPWave",
      type: "Technology Partner",
      icon: <Network className="w-8 h-8" />,
      color: "from-cyan-500 to-teal-600",
      bgColor: "bg-cyan-500/10",
      borderColor: "border-cyan-500/30",
      textColor: "text-cyan-400"
    },
    {
      name: "DSCI CCOE",
      type: "Cybersecurity CoE",
      icon: <Shield className="w-8 h-8" />,
      color: "from-red-500 to-orange-600",
      bgColor: "bg-red-500/10",
      borderColor: "border-red-500/30",
      textColor: "text-red-400"
    },
    {
      name: "IIT Kanpur",
      type: "Research Partner",
      icon: <GraduationCap className="w-8 h-8" />,
      color: "from-amber-500 to-yellow-600",
      bgColor: "bg-amber-500/10",
      borderColor: "border-amber-500/30",
      textColor: "text-amber-400"
    },
    {
      name: "Texas Tech University",
      type: "Research Partner",
      icon: <GraduationCap className="w-8 h-8" />,
      color: "from-red-600 to-rose-700",
      bgColor: "bg-red-600/10",
      borderColor: "border-red-600/30",
      textColor: "text-red-500"
    },
    {
      name: <>Ex-FBI/MAPD<br />NHPD</>,
      type: "Law Enforcement",
      icon: <UserCheck className="w-8 h-8" />,
      color: "from-emerald-500 to-green-600",
      bgColor: "bg-emerald-500/10",
      borderColor: "border-emerald-500/30",
      textColor: "text-emerald-400"
    },
    {
      name: "TU Delft",
      type: "Research Partner",
      icon: <GraduationCap className="w-8 h-8" />,
      color: "from-sky-500 to-cyan-600",
      bgColor: "bg-sky-500/10",
      borderColor: "border-sky-500/30",
      textColor: "text-sky-400"
    }
  ];

  return (
    <section className="py-16 bg-gradient-to-b from-slate-950 to-slate-900 relative overflow-hidden">
      <div className="absolute inset-0 bg-[linear-gradient(rgba(6,182,212,0.02)_1px,transparent_1px),linear-gradient(90deg,rgba(6,182,212,0.02)_1px,transparent_1px)] bg-[size:50px_50px]" />
      
      <div className="container mx-auto px-4 md:px-6 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          className="text-center mb-12"
        >
          <span className="text-primary font-mono text-xs uppercase tracking-[0.3em] mb-4 block">Trusted By</span>
          <h2 className="text-3xl md:text-4xl font-display font-bold text-white">
            Our <span className="text-primary">Academic Partners</span>
          </h2>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          className="max-w-6xl mx-auto"
        >
          <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-6 gap-4 md:gap-6">
            {partners.map((partner, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1 }}
                className="group"
              >
                <div className={`h-full p-4 md:p-6 rounded-xl ${partner.bgColor} border ${partner.borderColor} backdrop-blur-sm hover:scale-105 transition-all duration-300 hover:shadow-lg flex flex-col items-center justify-center text-center relative overflow-hidden`}>
                  <div className={`absolute inset-0 bg-gradient-to-br ${partner.color} opacity-0 group-hover:opacity-10 transition-opacity duration-500`} />
                  
                  <div className={`mb-3 ${partner.textColor} group-hover:scale-110 transition-transform duration-300`}>
                    {partner.icon}
                  </div>
                  
                  <h3 className="text-white font-display font-bold text-sm md:text-base mb-1 group-hover:text-primary transition-colors">
                    {partner.name}
                  </h3>
                  
                  <span className="text-slate-500 text-xs font-mono uppercase tracking-wider hidden sm:block">
                    {partner.type}
                  </span>
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          className="mt-10 text-center"
        >
          <p className="text-slate-500 text-sm max-w-2xl mx-auto">
            T-SPAN collaborates with leading academic institutions, technology providers, and cybersecurity organizations 
            to deliver world-class training on sovereign infrastructure.
          </p>
        </motion.div>
      </div>
    </section>
  );
}
