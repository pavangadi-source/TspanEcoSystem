import { Calendar, Clock, DollarSign, Award, CheckCircle } from "lucide-react";

export default function ProgramDetails() {
  const details = [
    {
      icon: <GlobeIcon className="w-8 h-8 text-primary" />,
      title: "Format",
      value: "Hybrid",
      sub: "On-campus (BITS Pilani Goa) + Global Online"
    },
    {
      icon: <Clock className="w-8 h-8 text-secondary" />,
      title: "Duration",
      value: "10 Weekends",
      sub: "March - May 2025"
    },
    {
      icon: <DollarSign className="w-8 h-8 text-green-400" />,
      title: "Investment",
      value: "$2,500 USD",
      sub: "Per Semester"
    },
    {
      icon: <Award className="w-8 h-8 text-purple-400" />,
      title: "Certification",
      value: "Joint Credential",
      sub: "BITS Pilani + T-SPAN + DSCI"
    }
  ];

  return (
    <section className="py-20 bg-slate-950 relative">
      <div className="container mx-auto px-4 md:px-6">
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 mb-16">
          {details.map((item, i) => (
            <div key={i} className="bg-slate-900/40 backdrop-blur-sm border border-slate-800 p-6 rounded-xl hover:bg-slate-900/60 hover:border-primary/30 hover:shadow-[0_0_30px_rgba(6,182,212,0.2)] transition-all duration-500 group hover:-translate-y-2 relative overflow-hidden">
              {/* Gradient Overlays */}
              <div className="absolute inset-0 bg-gradient-to-br from-primary/10 via-transparent to-secondary/5 opacity-0 group-hover:opacity-100 transition-opacity duration-700" />
              <div className="absolute inset-0 bg-gradient-to-tl from-transparent via-white/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
              
              {/* Sweep Effect */}
              <div className="absolute inset-0 bg-gradient-to-r from-transparent via-primary/20 to-transparent -translate-x-full group-hover:translate-x-full transition-transform duration-1000" />
              
              <div className="mb-4 p-3 bg-slate-950 rounded-full w-fit border border-slate-800 group-hover:border-primary/50 group-hover:scale-110 transition-all duration-300 shadow-lg relative z-10">
                {item.icon}
              </div>
              <h3 className="text-slate-400 font-mono font-bold text-xs uppercase tracking-widest mb-2 group-hover:text-primary transition-colors">{item.title}</h3>
              <div className="text-2xl font-display font-bold text-white mb-1 tracking-tight">{item.value}</div>
              <div className="text-slate-500 text-xs font-medium">{item.sub}</div>
            </div>
          ))}
        </div>

        <div className="bg-gradient-to-br from-slate-900/90 to-slate-950/90 backdrop-blur-md rounded-2xl p-8 md:p-12 border border-slate-700/50 hover:border-primary/20 transition-colors shadow-2xl relative overflow-hidden group">
          <div className="relative z-10">
            <h3 className="text-2xl font-display font-bold text-white mb-8 text-center md:text-left flex items-center gap-3">
              <span className="w-1 h-8 bg-primary rounded-full hidden md:block" />
              What's Included In The Program
            </h3>
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-y-4 gap-x-8">
              {[
                "Access to live TCPWave infrastructure",
                "MISP threat intelligence platform",
                "Hands-on labs with production systems",
                "DevSecOps pipeline projects",
                "SOC operations training",
                "Industry certification preparation",
                "Placement assistance",
                "Lifetime alumni network access"
              ].map((text, i) => (
                <div key={i} className="flex items-center gap-3 group/item">
                  <CheckCircle className="w-5 h-5 text-primary shrink-0 group-hover/item:text-secondary group-hover/item:scale-110 transition-all" />
                  <span className="text-slate-300 text-sm font-medium group-hover/item:text-white transition-colors">{text}</span>
                </div>
              ))}
            </div>
          </div>
          {/* Decor */}
          <div className="absolute top-0 right-0 -mt-20 -mr-20 w-80 h-80 bg-primary/10 rounded-full blur-[80px] group-hover:bg-primary/15 transition-colors duration-700" />
          <div className="absolute bottom-0 left-0 -mb-20 -ml-20 w-64 h-64 bg-secondary/5 rounded-full blur-[60px] group-hover:bg-secondary/10 transition-colors duration-700" />
        </div>
      </div>
    </section>
  );
}

function GlobeIcon(props: any) {
  return (
    <svg
      {...props}
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <circle cx="12" cy="12" r="10" />
      <line x1="2" x2="22" y1="12" y2="12" />
      <path d="M12 2a15.3 15.3 0 0 1 4 10 15.3 15.3 0 0 1-4 10 15.3 15.3 0 0 1-4-10 15.3 15.3 0 0 1 4-10z" />
    </svg>
  );
}
