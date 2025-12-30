import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import NewsTicker from "@/components/NewsTicker";
import ProblemSection from "@/components/ProblemSection";
import DifferenceTable from "@/components/DifferenceTable";
import Curriculum from "@/components/Curriculum";
import Faculty from "@/components/Faculty";
import ProgramDetails from "@/components/ProgramDetails";
import Partners from "@/components/Partners";
import Registration from "@/components/Registration";
import StatsWidget from "@/components/StatsWidget";
import WhySovereignSecurity from "@/components/WhySovereignSecurity";
import LearningMethodology from "@/components/LearningMethodology";
import AccreditationSection from "@/components/AccreditationSection";
import ExecutiveSummary from "@/components/ExecutiveSummary";
import ExecutiveTestimonials from "@/components/ExecutiveTestimonials";
import StrategicPartnerships from "@/components/StrategicPartnerships";
import CareerOutcomes from "@/components/CareerOutcomes";
import TrustedPartners from "@/components/TrustedPartners";
import GovernmentSupport from "@/components/GovernmentSupport";
import SummitBanner from "@/components/SummitBanner";
import ThreatIntelligenceSummit from "@/components/ThreatIntelligenceSummit";
import { Shield } from "lucide-react";

export default function Home() {
  return (
    <div className="min-h-screen bg-slate-950 text-white overflow-x-hidden font-sans">
      <Navbar />
      <div className="pt-[72px]">
        <NewsTicker />
      </div>
      <Hero />
      <SummitBanner />
      <ThreatIntelligenceSummit />
      <GovernmentSupport />
      <TrustedPartners />
      <Partners />
      <ExecutiveSummary />
      <ProblemSection />
      <WhySovereignSecurity />
      <StrategicPartnerships />
      <DifferenceTable />
      
      {/* Global Infrastructure Widget */}
      <section className="py-20 bg-slate-900 border-y border-slate-800 relative overflow-hidden">
        <div className="absolute inset-0 bg-[linear-gradient(rgba(6,182,212,0.02)_1px,transparent_1px),linear-gradient(90deg,rgba(6,182,212,0.02)_1px,transparent_1px)] bg-[size:60px_60px]" />
        
        <div className="container mx-auto px-4 text-center relative z-10">
          <div className="flex items-center justify-center gap-3 mb-2">
            <div className="w-2 h-2 bg-white rounded-full animate-pulse" />
            <p className="text-white font-mono text-xs uppercase tracking-widest">Live Network Status</p>
          </div>
          <h2 className="text-3xl md:text-4xl font-display font-bold text-white mb-12">
            Global Infrastructure Network
          </h2>
          
          <div className="relative w-full aspect-[16/9] max-w-5xl mx-auto rounded-2xl overflow-hidden bg-gradient-to-br from-slate-950 to-slate-900 border border-slate-800 hover:border-primary/30 flex items-center justify-center group shadow-2xl transition-all duration-500 hover:shadow-[0_0_60px_rgba(6,182,212,0.2)]">
             {/* Map Background */}
             <div className="absolute inset-0 bg-[url('https://upload.wikimedia.org/wikipedia/commons/e/ec/World_map_blank_without_borders.svg')] bg-cover bg-center opacity-5 invert sepia hue-rotate-180 saturate-200 group-hover:opacity-10 transition-opacity duration-500" />
             
             {/* Grid Overlay */}
             <div className="absolute inset-0 bg-[linear-gradient(rgba(6,182,212,0.05)_1px,transparent_1px),linear-gradient(90deg,rgba(6,182,212,0.05)_1px,transparent_1px)] bg-[size:40px_40px] group-hover:bg-[size:30px_30px] transition-all duration-700" />
             
             {/* Glow Effects */}
             <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-96 h-96 bg-primary/10 rounded-full blur-[120px] group-hover:bg-primary/20 transition-all duration-1000" />

             <div className="z-10 text-center p-8 backdrop-blur-sm bg-slate-950/30 rounded-xl border border-slate-800/50 group-hover:border-primary/50 group-hover:bg-slate-950/50 transition-all duration-500">
                <Shield className="w-20 h-20 text-primary mx-auto mb-4 animate-pulse drop-shadow-[0_0_20px_rgba(6,182,212,0.5)]" />
                <p className="text-6xl font-mono text-white font-bold mb-2 group-hover:scale-110 transition-transform duration-300">67+</p>
                <p className="text-white text-xl font-display font-bold mb-1">Points of Presence</p>
                <div className="flex items-center justify-center gap-2 mb-4">
                  <div className="w-2 h-2 bg-green-500 rounded-full animate-pulse shadow-[0_0_10px_#22c55e]" />
                  <p className="text-green-400 text-sm font-mono uppercase tracking-wider">All Systems Operational</p>
                </div>
                <div className="flex flex-wrap items-center justify-center gap-3 text-slate-400 text-xs font-mono">
                  <span className="px-3 py-1 bg-slate-900/50 border border-slate-700 rounded-full">🇮🇳 India</span>
                  <span className="px-3 py-1 bg-slate-900/50 border border-slate-700 rounded-full">🇺🇸 USA</span>
                  <span className="px-3 py-1 bg-slate-900/50 border border-slate-700 rounded-full">🇪🇺 Europe</span>
                  <span className="px-3 py-1 bg-slate-900/50 border border-slate-700 rounded-full">🌏 APAC</span>
                </div>
             </div>
             
             {/* Animated PoP Dots */}
             <div className="absolute top-[30%] left-[20%] w-3 h-3 bg-secondary rounded-full animate-ping shadow-[0_0_15px_#fbbf24]" />
             <div className="absolute top-[40%] left-[70%] w-3 h-3 bg-primary rounded-full animate-ping shadow-[0_0_15px_#06b6d4]" style={{ animationDelay: '0.5s' }} />
             <div className="absolute top-[25%] left-[50%] w-3 h-3 bg-red-500 rounded-full animate-ping shadow-[0_0_15px_#ef4444]" style={{ animationDelay: '1s' }} />
             <div className="absolute top-[60%] left-[80%] w-3 h-3 bg-secondary rounded-full animate-ping shadow-[0_0_15px_#fbbf24]" style={{ animationDelay: '1.5s' }} />
             <div className="absolute top-[35%] left-[85%] w-2 h-2 bg-primary rounded-full animate-pulse" style={{ animationDelay: '2s' }} />
             <div className="absolute top-[45%] left-[15%] w-2 h-2 bg-primary rounded-full animate-pulse" style={{ animationDelay: '0.8s' }} />
             <div className="absolute top-[55%] left-[35%] w-2 h-2 bg-green-500 rounded-full animate-pulse" style={{ animationDelay: '1.2s' }} />
             <div className="absolute top-[32%] left-[60%] w-2 h-2 bg-secondary rounded-full animate-pulse" style={{ animationDelay: '1.8s' }} />
          </div>
        </div>
      </section>

      <Curriculum />
      <LearningMethodology />
      <StatsWidget />
      <CareerOutcomes />
      <AccreditationSection />
      <ExecutiveTestimonials />
      <Faculty />
      <ProgramDetails />
      <Registration />

      <footer className="py-12 bg-slate-950 border-t border-slate-900">
        <div className="container mx-auto px-4 text-center">
          <div className="flex items-center justify-center gap-2 mb-6">
            <Shield className="w-8 h-8 text-primary" />
            <span className="font-display font-bold text-xl text-white">T-SPAN UNIVERSITY</span>
          </div>
          <div className="flex justify-center gap-6 mb-8 text-slate-400 text-sm">
            <a href="/about" className="hover:text-primary transition-colors">About</a>
            <a href="/admissions" className="hover:text-primary transition-colors">Admissions</a>
            <a href="/partners" className="hover:text-primary transition-colors">Partners</a>
            <a href="/privacy" className="hover:text-primary transition-colors">Privacy Policy</a>
          </div>
          <p className="text-slate-600 text-sm">
            © 2025 T-SPAN University. All rights reserved. <br />
            Designed for the defenders of tomorrow.
          </p>
        </div>
      </footer>
    </div>
  );
}
