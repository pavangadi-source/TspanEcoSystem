import { motion } from "framer-motion";

const faculty = [
  {
    name: "Dr. Ravin Kumar Jhaala",
    role: "Founder & Academic Lead",
    inst: "TCPWave / T-SPAN",
    img: "https://api.dicebear.com/7.x/initials/svg?seed=Ravin",
  },
  {
    name: "Dr. Arpan Kar",
    role: "Chair Professor",
    inst: "IIT Delhi",
    img: "https://api.dicebear.com/7.x/initials/svg?seed=Arpan",
  },
  {
    name: "Dr. Somitra Sanadhya",
    role: "Professor (CSE)",
    inst: "IIT Kanpur",
    img: "https://api.dicebear.com/7.x/initials/svg?seed=Somitra",
  },
  {
    name: "Dr. Amitava Das",
    role: "Associate Professor",
    inst: "BITS Pilani",
    img: "https://api.dicebear.com/7.x/initials/svg?seed=Amitava",
  },
  {
    name: "Ken Huang",
    role: "Security Expert",
    inst: "University of San Francisco",
    img: "https://api.dicebear.com/7.x/initials/svg?seed=Ken",
  },
];

export default function Faculty() {
  return (
    <section id="faculty" className="py-20 bg-slate-900">
      <div className="container mx-auto px-4 md:px-6">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-display font-bold text-white mb-4">
            Learn from <span className="text-primary">Global Experts</span>
          </h2>
          <p className="text-slate-400">
            A diverse faculty from the world's most prestigious institutions.
          </p>
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8">
          {faculty.map((member, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1 }}
              className="bg-slate-950/80 backdrop-blur-sm p-6 rounded-xl border border-slate-800 flex items-center gap-4 hover:border-primary/50 hover:shadow-[0_0_30px_rgba(6,182,212,0.25)] transition-all duration-500 group hover:-translate-y-2 relative overflow-hidden"
            >
              {/* Gradient Overlay on Hover */}
              <div className="absolute inset-0 bg-gradient-to-r from-primary/10 via-transparent to-secondary/10 opacity-0 group-hover:opacity-100 transition-opacity duration-700" />
              <div className="absolute inset-0 bg-gradient-to-br from-transparent via-white/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
              
              {/* Sliding Gradient */}
              <div className="absolute inset-0 bg-gradient-to-r from-transparent via-primary/15 to-transparent -translate-x-full group-hover:translate-x-full transition-transform duration-1000" />
              
              <div className="relative z-10">
                <div className="absolute inset-0 rounded-full bg-gradient-to-br from-primary/30 to-secondary/30 blur-lg opacity-0 group-hover:opacity-100 group-hover:scale-110 transition-all duration-500" />
                <img 
                  src={member.img} 
                  alt={member.name} 
                  className="w-16 h-16 rounded-full border-2 border-slate-700 group-hover:border-primary relative z-10 transition-colors"
                />
              </div>
              <div>
                <h3 className="text-lg font-bold font-display text-white group-hover:text-primary transition-colors">
                  {member.name}
                </h3>
                <p className="text-sm text-secondary font-medium font-mono">{member.role}</p>
                <p className="text-xs text-slate-500 mt-1 uppercase tracking-wider font-bold">
                  {member.inst}
                </p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
