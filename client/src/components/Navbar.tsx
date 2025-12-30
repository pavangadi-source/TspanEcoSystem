import { useState, useEffect } from "react";
import { Link } from "wouter";
import { 
  Shield, Menu, X, ChevronRight, 
  Server, Cpu, Globe, Lock, 
  UserCheck, LogIn, GraduationCap, 
  Network, Zap, Database, Search,
  Settings, Users, Building2, Briefcase, 
  Phone, Info, FileText, TrendingUp,
  Eye, Brain, FileSearch, Award
} from "lucide-react";
import { Button } from "@/components/ui/button";
import { motion, AnimatePresence } from "framer-motion";
import {
  NavigationMenu,
  NavigationMenuContent,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
  NavigationMenuTrigger,
  navigationMenuTriggerStyle,
} from "@/components/ui/navigation-menu";
import { cn } from "@/lib/utils";
import React from "react";
import LanguageSelector from "./LanguageSelector";

export default function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <nav
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled
          ? "bg-slate-950/80 backdrop-blur-md border-b border-white/10 py-3"
          : "bg-transparent py-5"
      }`}
    >
      <div className="container mx-auto px-4 md:px-6 flex items-center justify-between">
        <Link href="/">
          <div className="flex items-center gap-2 group z-50 relative cursor-pointer">
            <div className="relative">
              <Shield className="w-8 h-8 text-primary fill-primary/20 group-hover:text-secondary transition-colors duration-300" />
              <div className="absolute inset-0 bg-primary/20 blur-md rounded-full group-hover:bg-secondary/20 transition-colors duration-300" />
            </div>
            <div className="flex flex-col">
              <span className="font-display font-bold text-lg tracking-wider text-white leading-none">
                T-SPAN
              </span>
              <span className="font-tech text-xs text-slate-400 tracking-[0.2em] leading-none group-hover:text-primary transition-colors">
                UNIVERSITY
              </span>
            </div>
          </div>
        </Link>

        {/* Desktop Mega Menu */}
        <div className="hidden lg:flex items-center gap-2">
          <NavigationMenu>
            <NavigationMenuList>
              
              {/* ACADEMICS */}
              <NavigationMenuItem>
                <NavigationMenuTrigger className="bg-transparent text-slate-300 hover:text-white hover:bg-white/5 data-[state=open]:bg-white/10 font-medium">
                  Academics
                </NavigationMenuTrigger>
                <NavigationMenuContent>
                  <div className="grid gap-3 p-6 md:w-[400px] lg:w-[600px] lg:grid-cols-[.75fr_1fr] bg-slate-950 border border-slate-800">
                    <div className="row-span-3">
                      <Link href="/executive-programs">
                        <div className="flex h-full w-full select-none flex-col justify-end rounded-md bg-gradient-to-b from-amber-900/30 to-slate-950 p-6 no-underline outline-none focus:shadow-md border border-amber-500/30 hover:border-primary/50 transition-colors group cursor-pointer">
                          <Award className="h-6 w-6 text-amber-400 mb-4 group-hover:scale-110 transition-transform" />
                          <div className="mb-2 mt-4 text-lg font-bold text-white font-display">
                            Executive Programs
                          </div>
                          <p className="text-sm leading-tight text-slate-400">
                            C-Suite cybersecurity leadership programs.
                          </p>
                        </div>
                      </Link>
                    </div>
                    <div className="grid gap-1">
                      <ListItem href="/courses" title="Course Catalog" icon={<Search className="w-4 h-4 text-secondary" />}>
                        Explore all courses and tracks.
                      </ListItem>
                      <ListItem href="/programs" title="Degree Programs" icon={<GraduationCap className="w-4 h-4 text-blue-400" />}>
                        Masters, PG Diploma & Certificates.
                      </ListItem>
                      <ListItem href="/online" title="Online Learning" icon={<Globe className="w-4 h-4 text-purple-400" />}>
                        Live classes & virtual labs.
                      </ListItem>
                    </div>
                  </div>
                </NavigationMenuContent>
              </NavigationMenuItem>

              {/* TRACKS */}
              <NavigationMenuItem>
                <NavigationMenuTrigger className="bg-transparent text-slate-300 hover:text-white hover:bg-white/5 data-[state=open]:bg-white/10 font-medium">
                  Tracks
                </NavigationMenuTrigger>
                <NavigationMenuContent>
                  <div className="grid gap-6 p-6 md:w-[600px] lg:w-[800px] lg:grid-cols-2 bg-slate-950 border border-slate-800">
                    {/* Tech Track */}
                    <div className="space-y-4">
                      <div className="flex items-center gap-2 pb-2 border-b border-primary/30">
                        <Cpu className="w-5 h-5 text-primary" />
                        <h4 className="text-sm font-bold text-primary uppercase tracking-wider">Tech Track</h4>
                      </div>
                      <div className="space-y-1">
                        <ListItem href="/courses/tcpwave-essentials" title="TCPWave DDI Platform" icon={<Network className="w-4 h-4 text-blue-500" />}>
                          DNS, DHCP, IPAM mastery
                        </ListItem>
                        <ListItem href="/courses/agentic-ai-networking" title="Agentic AI Networking" icon={<Settings className="w-4 h-4 text-orange-500" />}>
                          AI-powered network engineering
                        </ListItem>
                        <ListItem href="/courses/web-app-security-testing" title="Penetration Testing" icon={<Lock className="w-4 h-4 text-red-500" />}>
                          OWASP & Burp Suite mastery
                        </ListItem>
                        <ListItem href="/courses/custom-dashboards" title="Observability & DevSecOps" icon={<Zap className="w-4 h-4 text-yellow-500" />}>
                          Grafana, Prometheus, ELK
                        </ListItem>
                        <ListItem href="/courses/ai-agent-protocols" title="AI Agent Protocols" icon={<Brain className="w-4 h-4 text-purple-500" />}>
                          MCP, A2A & beyond
                        </ListItem>
                        <ListItem href="/tools" title="AI Arsenal (115+ Tools)" icon={<Zap className="w-4 h-4 text-amber-500" />}>
                          Master productivity AI tools
                        </ListItem>
                      </div>
                    </div>
                    
                    {/* Management Track */}
                    <div className="space-y-4">
                      <div className="flex items-center gap-2 pb-2 border-b border-amber-500/30">
                        <Award className="w-5 h-5 text-amber-400" />
                        <h4 className="text-sm font-bold text-amber-400 uppercase tracking-wider">Management Track</h4>
                      </div>
                      <div className="space-y-1">
                        <ListItem href="/executive-programs" title="Executive CSO Programs" icon={<Shield className="w-4 h-4 text-amber-400" />}>
                          C-Suite security leadership
                        </ListItem>
                        <ListItem href="/tracks/isb-cybersecurity" title="ISB Cybersecurity" icon={<GraduationCap className="w-4 h-4 text-blue-400" />}>
                          Strategy, compliance & governance
                        </ListItem>
                        <ListItem href="/tracks/dpdp-compliance" title="DPDP Act Compliance" icon={<FileText className="w-4 h-4 text-green-400" />}>
                          Digital Personal Data Protection
                        </ListItem>
                        <ListItem href="/tracks/nciipc-certification" title="NCIIPC & CERT-In" icon={<Building2 className="w-4 h-4 text-red-400" />}>
                          Critical infrastructure protection
                        </ListItem>
                        <ListItem href="/tracks/cybersecurity-governance" title="Cybersecurity Governance" icon={<Users className="w-4 h-4 text-purple-400" />}>
                          Risk assessment & ISMS frameworks
                        </ListItem>
                        <ListItem href="/enterprise" title="Enterprise Solutions" icon={<Building2 className="w-4 h-4 text-cyan-400" />}>
                          Team-based corporate training
                        </ListItem>
                      </div>
                    </div>
                  </div>
                </NavigationMenuContent>
              </NavigationMenuItem>

              {/* TCPWAVE */}
              <NavigationMenuItem>
                <NavigationMenuTrigger className="bg-transparent text-slate-300 hover:text-white hover:bg-white/5 data-[state=open]:bg-white/10 font-medium">
                  TCPWave
                </NavigationMenuTrigger>
                <NavigationMenuContent>
                  <div className="grid gap-3 p-6 md:w-[400px] lg:w-[600px] lg:grid-cols-[.75fr_1fr] bg-slate-950 border border-slate-800">
                    <div className="row-span-3">
                      <Link href="/tcpwave">
                        <div className="flex h-full w-full select-none flex-col justify-end rounded-md bg-gradient-to-b from-blue-900/30 to-slate-950 p-6 no-underline outline-none focus:shadow-md border border-blue-500/30 hover:border-primary/50 transition-colors group cursor-pointer">
                          <Network className="h-6 w-6 text-blue-400 mb-4 group-hover:scale-110 transition-transform" />
                          <div className="mb-2 mt-4 text-lg font-bold text-white font-display">
                            TCPWave DDI
                          </div>
                          <p className="text-sm leading-tight text-slate-400">
                            Made in India. Serving 102 countries worldwide.
                          </p>
                        </div>
                      </Link>
                    </div>
                    <div className="grid gap-1">
                      <ListItem href="/tcpwave/dns-security" title="DNS Security" icon={<Lock className="w-4 h-4 text-blue-400" />}>
                        Enterprise DNS protection & DNSSEC
                      </ListItem>
                      <ListItem href="/tcpwave/ipam-solutions" title="IPAM Solutions" icon={<Database className="w-4 h-4 text-purple-400" />}>
                        IP Address Management at scale
                      </ListItem>
                      <ListItem href="/tcpwave/network-automation" title="Network Automation" icon={<Settings className="w-4 h-4 text-green-400" />}>
                        Infrastructure as code
                      </ListItem>
                      <ListItem href="/tcpwave/adc-load-balancing" title="ADC & Load Balancing" icon={<Server className="w-4 h-4 text-orange-400" />}>
                        Application delivery controllers
                      </ListItem>
                      <ListItem href="/tcpwave/case-studies" title="Case Studies" icon={<Award className="w-4 h-4 text-amber-400" />}>
                        Global success stories
                      </ListItem>
                    </div>
                  </div>
                </NavigationMenuContent>
              </NavigationMenuItem>

              {/* ADMISSIONS */}
              <NavigationMenuItem>
                <NavigationMenuTrigger className="bg-transparent text-slate-300 hover:text-white hover:bg-white/5 data-[state=open]:bg-white/10 font-medium">
                  Admissions
                </NavigationMenuTrigger>
                <NavigationMenuContent>
                  <ul className="grid gap-3 p-6 md:w-[400px] lg:w-[500px] lg:grid-cols-[1fr_1fr] bg-slate-950 border border-slate-800">
                    <ListItem href="/admissions" title="How to Apply" icon={<FileText className="w-4 h-4 text-primary" />}>
                      Application process, eligibility & fees.
                    </ListItem>
                    <ListItem href="/kyc" title="KYC Verification" icon={<UserCheck className="w-4 h-4 text-secondary" />}>
                      Mandatory identity check for applicants.
                    </ListItem>
                    <ListItem href="/dashboard" title="Student Dashboard" icon={<GraduationCap className="w-4 h-4 text-purple-400" />}>
                      View enrollments and track progress.
                    </ListItem>
                    <ListItem href="/admissions/scholarships" title="Scholarships" icon={<Award className="w-4 h-4 text-amber-400" />}>
                      Financial aid & scholarship programs.
                    </ListItem>
                  </ul>
                </NavigationMenuContent>
              </NavigationMenuItem>

              {/* Threat Intelligence */}
              <NavigationMenuItem>
                <NavigationMenuTrigger className="bg-transparent text-slate-300 hover:text-white hover:bg-white/5 data-[state=open]:bg-white/10 font-medium">
                  Threat Intelligence
                </NavigationMenuTrigger>
                <NavigationMenuContent>
                  <div className="grid gap-3 p-6 md:w-[400px] lg:w-[600px] lg:grid-cols-[.75fr_1fr] bg-slate-950 border border-slate-800">
                    <div className="row-span-3">
                      <Link href="/tiaas">
                        <div className="flex h-full w-full select-none flex-col justify-end rounded-md bg-gradient-to-b from-red-900/30 to-slate-950 p-6 no-underline outline-none focus:shadow-md border border-red-500/30 hover:border-primary/50 transition-colors group cursor-pointer">
                          <Eye className="h-6 w-6 text-red-400 mb-4 group-hover:scale-110 transition-transform" />
                          <div className="mb-2 mt-4 text-lg font-bold text-white font-display">
                            Threat Intelligence
                          </div>
                          <p className="text-sm leading-tight text-slate-400">
                            Enterprise TIaaS powered by DSCI CCoE & TCPWave.
                          </p>
                        </div>
                      </Link>
                    </div>
                    <div className="grid gap-1">
                      <ListItem href="/tiaas/partner-network" title="Partner Network" icon={<Award className="w-4 h-4 text-amber-400" />}>
                        75+ cybersecurity companies
                      </ListItem>
                      <ListItem href="/tiaas/ai-defense" title="AI-Native Defense" icon={<Brain className="w-4 h-4 text-purple-400" />}>
                        GenAI and autonomous protection
                      </ListItem>
                      <ListItem href="/tiaas/intelligence-center" title="BITS Pilani Center" icon={<Building2 className="w-4 h-4 text-blue-400" />}>
                        APPCAIR research partnership
                      </ListItem>
                      <ListItem href="/tiaas/threat-reports" title="Threat Reports" icon={<FileSearch className="w-4 h-4 text-red-400" />}>
                        Latest research & analysis
                      </ListItem>
                      <ListItem href="/tiaas/research-funding" title="Research Funding" icon={<TrendingUp className="w-4 h-4 text-green-400" />}>
                        MeitY, DST & ANRF grants
                      </ListItem>
                    </div>
                  </div>
                </NavigationMenuContent>
              </NavigationMenuItem>

              {/* ABOUT */}
              <NavigationMenuItem>
                <NavigationMenuTrigger className="bg-transparent text-slate-300 hover:text-white hover:bg-white/5 data-[state=open]:bg-white/10 font-medium">
                  About
                </NavigationMenuTrigger>
                <NavigationMenuContent>
                  <ul className="grid gap-3 p-6 md:w-[400px] lg:w-[500px] lg:grid-cols-[1fr_1fr] bg-slate-950 border border-slate-800">
                    <ListItem href="/about" title="About T-SPAN" icon={<Info className="w-4 h-4 text-primary" />}>
                      Our mission, values & differentiators.
                    </ListItem>
                    <ListItem href="/faculty" title="Faculty" icon={<Users className="w-4 h-4 text-secondary" />}>
                      Industry practitioners & experts.
                    </ListItem>
                    <ListItem href="/partners" title="Partners" icon={<Building2 className="w-4 h-4 text-purple-400" />}>
                      Government & industry partnerships.
                    </ListItem>
                    <ListItem href="/careers" title="Career Outcomes" icon={<TrendingUp className="w-4 h-4 text-green-400" />}>
                      Salary data & placement support.
                    </ListItem>
                    <ListItem href="/contact" title="Contact Us" icon={<Phone className="w-4 h-4 text-blue-400" />}>
                      Get in touch with our team.
                    </ListItem>
                  </ul>
                </NavigationMenuContent>
              </NavigationMenuItem>

            </NavigationMenuList>
          </NavigationMenu>

          <div className="h-6 w-px bg-slate-800 mx-2" />

          <LanguageSelector />

          <div className="h-6 w-px bg-slate-800 mx-2" />

          <Link href="/login">
            <Button variant="ghost" className="text-slate-300 hover:text-white hover:bg-white/5">
              Login
            </Button>
          </Link>

          <Button
            className="bg-primary hover:bg-primary/90 text-white font-bold font-tech tracking-wider ml-2 shadow-[0_0_15px_rgba(6,182,212,0.3)] hover:shadow-[0_0_25px_rgba(6,182,212,0.5)] transition-all"
            onClick={() => document.getElementById("register")?.scrollIntoView({ behavior: "smooth" })}
          >
            APPLY NOW
          </Button>
        </div>

        {/* Mobile Menu Toggle */}
        <button
          className="lg:hidden text-white"
          onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
        >
          {mobileMenuOpen ? <X /> : <Menu />}
        </button>
      </div>

      {/* Mobile Menu */}
      <AnimatePresence>
        {mobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            className="lg:hidden bg-slate-950 border-b border-white/10 overflow-hidden"
          >
            <div className="container mx-auto px-4 py-6 flex flex-col gap-2">
              <div className="text-xs font-mono text-primary uppercase tracking-wider mb-1">Academics</div>
              <Link href="/executive-programs" onClick={() => setMobileMenuOpen(false)}>
                <span className="text-base font-medium text-slate-300 hover:text-primary py-2 border-b border-white/5 flex items-center gap-2 cursor-pointer">
                  <Award className="w-4 h-4" /> Executive Programs
                </span>
              </Link>
              <Link href="/courses" onClick={() => setMobileMenuOpen(false)}>
                <span className="text-base font-medium text-slate-300 hover:text-primary py-2 border-b border-white/5 flex items-center gap-2 cursor-pointer">
                  <GraduationCap className="w-4 h-4" /> All Courses
                </span>
              </Link>
              <Link href="/programs" onClick={() => setMobileMenuOpen(false)}>
                <span className="text-base font-medium text-slate-300 hover:text-primary py-2 border-b border-white/5 flex items-center gap-2 cursor-pointer">
                  <Search className="w-4 h-4" /> Degree Programs
                </span>
              </Link>
              
              <div className="text-xs font-mono text-blue-400 uppercase tracking-wider mt-4 mb-1">TCPWave</div>
              <Link href="/tcpwave" onClick={() => setMobileMenuOpen(false)}>
                <span className="text-base font-medium text-slate-300 hover:text-primary py-2 border-b border-white/5 flex items-center gap-2 cursor-pointer">
                  <Network className="w-4 h-4" /> DDI Platform
                </span>
              </Link>
              <Link href="/tcpwave/dns-security" onClick={() => setMobileMenuOpen(false)}>
                <span className="text-base font-medium text-slate-300 hover:text-primary py-2 border-b border-white/5 flex items-center gap-2 cursor-pointer">
                  <Lock className="w-4 h-4" /> DNS Security
                </span>
              </Link>
              <Link href="/tcpwave/case-studies" onClick={() => setMobileMenuOpen(false)}>
                <span className="text-base font-medium text-slate-300 hover:text-primary py-2 border-b border-white/5 flex items-center gap-2 cursor-pointer">
                  <Award className="w-4 h-4" /> Case Studies
                </span>
              </Link>
              
              <div className="text-xs font-mono text-secondary uppercase tracking-wider mt-4 mb-1">Admissions</div>
              <Link href="/admissions" onClick={() => setMobileMenuOpen(false)}>
                <span className="text-base font-medium text-slate-300 hover:text-primary py-2 border-b border-white/5 flex items-center gap-2 cursor-pointer">
                  <FileText className="w-4 h-4" /> How to Apply
                </span>
              </Link>
              <Link href="/kyc" onClick={() => setMobileMenuOpen(false)}>
                <span className="text-base font-medium text-slate-300 hover:text-primary py-2 border-b border-white/5 flex items-center gap-2 cursor-pointer">
                  <UserCheck className="w-4 h-4" /> KYC Verification
                </span>
              </Link>
              <Link href="/dashboard" onClick={() => setMobileMenuOpen(false)}>
                <span className="text-base font-medium text-slate-300 hover:text-primary py-2 border-b border-white/5 flex items-center gap-2 cursor-pointer">
                  <GraduationCap className="w-4 h-4" /> Dashboard
                </span>
              </Link>
              
              <div className="text-xs font-mono text-red-400 uppercase tracking-wider mt-4 mb-1">Threat Intelligence</div>
              <Link href="/tiaas" onClick={() => setMobileMenuOpen(false)}>
                <span className="text-base font-medium text-slate-300 hover:text-primary py-2 border-b border-white/5 flex items-center gap-2 cursor-pointer">
                  <Eye className="w-4 h-4" /> Threat Intel Platform
                </span>
              </Link>
              <Link href="/tiaas/partner-network" onClick={() => setMobileMenuOpen(false)}>
                <span className="text-base font-medium text-slate-300 hover:text-primary py-2 border-b border-white/5 flex items-center gap-2 cursor-pointer">
                  <Award className="w-4 h-4" /> Partner Network
                </span>
              </Link>
              <Link href="/tiaas/ai-defense" onClick={() => setMobileMenuOpen(false)}>
                <span className="text-base font-medium text-slate-300 hover:text-primary py-2 border-b border-white/5 flex items-center gap-2 cursor-pointer">
                  <Brain className="w-4 h-4" /> AI-Native Defense
                </span>
              </Link>
              
              <div className="text-xs font-mono text-primary uppercase tracking-wider mt-4 mb-1">About</div>
              <Link href="/about" onClick={() => setMobileMenuOpen(false)}>
                <span className="text-base font-medium text-slate-300 hover:text-primary py-2 border-b border-white/5 flex items-center gap-2 cursor-pointer">
                  <Info className="w-4 h-4" /> About T-SPAN
                </span>
              </Link>
              <Link href="/faculty" onClick={() => setMobileMenuOpen(false)}>
                <span className="text-base font-medium text-slate-300 hover:text-primary py-2 border-b border-white/5 flex items-center gap-2 cursor-pointer">
                  <Users className="w-4 h-4" /> Faculty
                </span>
              </Link>
              <Link href="/partners" onClick={() => setMobileMenuOpen(false)}>
                <span className="text-base font-medium text-slate-300 hover:text-primary py-2 border-b border-white/5 flex items-center gap-2 cursor-pointer">
                  <Building2 className="w-4 h-4" /> Partners
                </span>
              </Link>
              <Link href="/careers" onClick={() => setMobileMenuOpen(false)}>
                <span className="text-base font-medium text-slate-300 hover:text-primary py-2 border-b border-white/5 flex items-center gap-2 cursor-pointer">
                  <TrendingUp className="w-4 h-4" /> Career Outcomes
                </span>
              </Link>
              <Link href="/contact" onClick={() => setMobileMenuOpen(false)}>
                <span className="text-base font-medium text-slate-300 hover:text-primary py-2 border-b border-white/5 flex items-center gap-2 cursor-pointer">
                  <Phone className="w-4 h-4" /> Contact Us
                </span>
              </Link>
              
              <div className="flex gap-2 mt-4">
                <Link href="/login" onClick={() => setMobileMenuOpen(false)} className="flex-1">
                  <Button variant="outline" className="w-full border-slate-700 text-slate-300">
                    <LogIn className="w-4 h-4 mr-2" /> Login
                  </Button>
                </Link>
                <Button
                  className="flex-1 bg-primary hover:bg-primary/90 text-white font-bold"
                  onClick={() => {
                    setMobileMenuOpen(false);
                    document.getElementById("register")?.scrollIntoView({ behavior: "smooth" });
                  }}
                >
                  APPLY NOW
                </Button>
              </div>

              <div className="mt-4 pt-4 border-t border-slate-800">
                <LanguageSelector />
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
}

const ListItem = React.forwardRef<
  HTMLAnchorElement,
  { className?: string; title: string; children?: React.ReactNode; icon?: React.ReactNode; href: string }
>(({ className, title, children, icon, href }, ref) => {
  return (
    <NavigationMenuLink asChild>
      <Link
        href={href}
        ref={ref}
        className={cn(
          "block select-none space-y-1 rounded-md p-3 leading-none no-underline outline-none transition-colors hover:bg-slate-900 hover:text-primary focus:bg-slate-900 focus:text-primary group cursor-pointer",
          className
        )}
      >
        <div className="flex items-center gap-2 text-sm font-bold leading-none text-white group-hover:text-primary">
          {icon && <span className="text-primary group-hover:text-secondary transition-colors">{icon}</span>}
          {title}
        </div>
        <p className="line-clamp-2 text-sm leading-snug text-slate-400 group-hover:text-slate-300">
          {children}
        </p>
      </Link>
    </NavigationMenuLink>
  );
});
ListItem.displayName = "ListItem";
