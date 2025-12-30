import { motion } from "framer-motion";
import { AlertTriangle, Zap, Skull, ShieldAlert, Activity } from "lucide-react";

const newsItems = [
  { type: "CRITICAL", text: "APT-29 targeting financial swift gateways in SE Asia", color: "text-red-500" },
  { type: "ALERT", text: "New ransomware variant 'DarkVault' active - Indicators: 0x4F...2A", color: "text-orange-500" },
  { type: "BREACH", text: "50M records leaked from major telecom provider", color: "text-red-400" },
  { type: "ZERO-DAY", text: "RCE found in popular cloud hypervisor (CVE-2025-9921)", color: "text-yellow-400" },
  { type: "MITIGATED", text: "2.5 Tbps DDoS attack stopped by T-SPAN scrubbing centers", color: "text-green-400" },
  { type: "INTEL", text: "Fast-flux botnet 'Hydra' command nodes seized", color: "text-blue-400" },
  { type: "VULNERABILITY", text: "Critical patch issued for TCP/IP stack in industrial IoT", color: "text-orange-400" },
  { type: "LIVE", text: "Active brute-force campaign detected on port 445 global", color: "text-red-500" },
];

export default function NewsTicker() {
  return (
    <div className="bg-slate-950 border-y border-red-900/30 overflow-hidden relative h-12 flex items-center shadow-[0_0_20px_rgba(220,38,38,0.1)] z-40">
      {/* Background Grid/Noise */}
      <div className="absolute inset-0 bg-[url('https://www.transparenttextures.com/patterns/dark-matter.png')] opacity-20" />
      <div className="absolute inset-0 bg-gradient-to-r from-slate-950 via-transparent to-slate-950 z-10" />

      {/* Ticker Label */}
      <div className="absolute left-0 top-0 bottom-0 bg-red-900/20 backdrop-blur-sm border-r border-red-900/50 px-4 flex items-center gap-2 z-20 shadow-xl">
        <div className="relative">
          <div className="w-2 h-2 bg-red-500 rounded-full animate-ping absolute inset-0" />
          <div className="w-2 h-2 bg-red-500 rounded-full relative" />
        </div>
        <span className="text-red-500 font-bold font-mono tracking-widest text-xs uppercase hidden md:inline">
          THREAT STREAM
        </span>
        <span className="text-red-500 font-bold font-mono tracking-widest text-xs uppercase md:hidden">
          LIVE
        </span>
      </div>

      {/* Marquee Content */}
      <div className="flex overflow-hidden select-none mask-linear-fade">
        <motion.div
          initial={{ x: 0 }}
          animate={{ x: "-50%" }}
          transition={{
            duration: 30,
            repeat: Infinity,
            ease: "linear",
          }}
          className="flex gap-12 whitespace-nowrap pl-32 pr-12 items-center"
        >
          {[...newsItems, ...newsItems].map((item, i) => (
            <div key={i} className="flex items-center gap-3 group cursor-default">
              <span className={`font-mono font-bold text-xs px-2 py-0.5 rounded bg-slate-900 border border-slate-800 ${item.color} group-hover:brightness-125 transition-all`}>
                {item.type}
              </span>
              <span className="text-slate-300 font-medium text-sm font-mono uppercase tracking-tight group-hover:text-white transition-colors">
                {item.text}
              </span>
              <Activity className="w-3 h-3 text-slate-700 group-hover:text-primary transition-colors" />
            </div>
          ))}
        </motion.div>
      </div>
    </div>
  );
}
