import { motion } from "framer-motion";
import { Link } from "wouter";
import { 
  Shield, Award, Users, Globe, Clock, 
  GraduationCap, Building2, Brain, Eye,
  ChevronRight, Star, CheckCircle2, Trophy
} from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

const executivePrograms = [
  {
    slug: "executive-cybersecurity-ceo",
    title: "Cybersecurity for C-Suite Executives",
    subtitle: "Transform your leadership. Secure your enterprise.",
    duration: "10 Months",
    price: "₹4,50,000",
    audience: "CEOs, COOs, VPs, Board Members",
    icon: Building2,
    color: "from-amber-500 to-orange-600",
    highlights: [
      "Enterprise cyber risk & governance",
      "Incident response leadership",
      "Vulnerability management frameworks",
      "Board-level decision making"
    ],
    modules: 4,
    liveSessions: 24,
    cohortSize: "25 executives"
  },
  {
    slug: "executive-technical-leaders",
    title: "Cybersecurity for Technical Leaders",
    subtitle: "Strategic security for the modern CTO.",
    duration: "8 Months",
    price: "₹3,75,000",
    audience: "CTOs, VPs of Engineering, Technical Directors",
    icon: Shield,
    color: "from-cyan-500 to-blue-600",
    highlights: [
      "Security architecture design",
      "Cloud & infrastructure security",
      "Data privacy governance",
      "Secure SDLC implementation"
    ],
    modules: 4,
    liveSessions: 20,
    cohortSize: "30 leaders"
  },
  {
    slug: "executive-ai-threat-intelligence",
    title: "ML, AI & Threat Intelligence",
    subtitle: "Lead the AI-powered security revolution.",
    duration: "6 Months",
    price: "₹3,25,000",
    audience: "CISOs, Security Directors, AI/ML Leaders",
    icon: Brain,
    color: "from-violet-500 to-purple-600",
    highlights: [
      "AI in cybercrime & defense",
      "Autonomous security agents",
      "ML-driven threat detection",
      "Building cyber resilience"
    ],
    modules: 4,
    liveSessions: 16,
    cohortSize: "35 professionals"
  },
  {
    slug: "executive-threat-monitoring",
    title: "Threat Intelligence & Monitoring Solutions",
    subtitle: "Design enterprise-grade security operations.",
    duration: "6 Months",
    price: "₹2,95,000",
    audience: "SOC Directors, Security Architects, IT Leaders",
    icon: Eye,
    color: "from-emerald-500 to-teal-600",
    highlights: [
      "Custom monitoring solutions",
      "Threat intelligence platforms",
      "SIEM architecture & design",
      "Actionable intelligence workflows"
    ],
    modules: 4,
    liveSessions: 16,
    cohortSize: "35 professionals"
  }
];

const partners = [
  { name: "IIT Kanpur", role: "Academic Partner" },
  { name: "Texas Tech University", role: "Research Collaboration" },
  { name: "TCPWave", role: "Industry Partner" },
  { name: "DSCI CCOE", role: "Government Partnership" },
];

const features = [
  { icon: Users, title: "Live Faculty Sessions", desc: "Direct interaction with world-class faculty and industry CISOs" },
  { icon: Globe, title: "Global Peer Network", desc: "Connect with executives from Fortune 500 companies" },
  { icon: Trophy, title: "Capstone Project", desc: "Apply learnings to real enterprise security challenges" },
  { icon: Award, title: "Executive Certificate", desc: "Industry-recognized certification upon completion" },
];

export default function ExecutivePrograms() {
  return (
    <div className="min-h-screen bg-slate-950 text-white">
      <Navbar />

      <section className="pt-32 pb-20 relative overflow-hidden">
        <div className="absolute inset-0 bg-[linear-gradient(rgba(6,182,212,0.02)_1px,transparent_1px),linear-gradient(90deg,rgba(6,182,212,0.02)_1px,transparent_1px)] bg-[size:60px_60px]" />
        <div className="absolute top-1/4 right-0 w-[600px] h-[600px] bg-gradient-to-br from-amber-500/10 to-orange-500/5 rounded-full blur-[150px]" />
        <div className="absolute bottom-0 left-0 w-[500px] h-[500px] bg-gradient-to-tr from-cyan-500/10 to-blue-500/5 rounded-full blur-[150px]" />

        <div className="container mx-auto px-4 relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-center max-w-4xl mx-auto mb-16"
          >
            <div className="inline-flex items-center gap-2 px-4 py-2 bg-amber-500/10 border border-amber-500/20 rounded-full mb-6">
              <Star className="w-4 h-4 text-amber-400" />
              <span className="text-amber-400 text-sm font-medium">Chief Strategy Officer Programs</span>
            </div>

            <h1 className="text-4xl md:text-5xl lg:text-6xl font-display font-bold mb-6">
              <span className="text-white">Executive Cybersecurity</span>
              <br />
              <span className="text-amber-400">Leadership Programs</span>
            </h1>

            <p className="text-xl text-slate-400 leading-relaxed mb-8">
              Transform your strategic impact. Designed for C-suite executives and senior leaders 
              who shape the cybersecurity posture of global enterprises.
            </p>

            <div className="flex flex-wrap justify-center gap-4">
              <Button size="lg" className="bg-amber-500 hover:bg-amber-600 text-black font-bold px-8" data-testid="button-download-brochure">
                <GraduationCap className="w-5 h-5 mr-2" />
                Download Brochure
              </Button>
              <Button size="lg" variant="outline" className="border-slate-600 text-white hover:bg-slate-800" data-testid="button-speak-advisor">
                Speak to an Advisor
              </Button>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
            className="grid grid-cols-2 md:grid-cols-4 gap-4 max-w-3xl mx-auto"
          >
            {partners.map((partner, i) => (
              <div key={i} className="bg-slate-900/50 border border-slate-800 rounded-lg p-4 text-center">
                <p className="text-white font-semibold text-sm">{partner.name}</p>
                <p className="text-slate-500 text-xs">{partner.role}</p>
              </div>
            ))}
          </motion.div>
        </div>
      </section>

      <section className="py-20 bg-slate-900/50">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-12"
          >
            <h2 className="text-3xl md:text-4xl font-display font-bold text-white mb-4">
              Program Highlights
            </h2>
            <p className="text-slate-400 max-w-2xl mx-auto">
              World-class executive education tailored for cybersecurity leaders
            </p>
          </motion.div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {features.map((feature, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1 }}
              >
                <Card className="bg-slate-900 border-slate-800 h-full hover:border-amber-500/30 transition-colors">
                  <CardContent className="p-6 text-center">
                    <div className="w-14 h-14 bg-amber-500/10 rounded-xl flex items-center justify-center mx-auto mb-4">
                      <feature.icon className="w-7 h-7 text-amber-400" />
                    </div>
                    <h3 className="text-lg font-bold text-white mb-2">{feature.title}</h3>
                    <p className="text-slate-400 text-sm">{feature.desc}</p>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-20">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-12"
          >
            <h2 className="text-3xl md:text-4xl font-display font-bold text-white mb-4">
              Executive Programs
            </h2>
            <p className="text-slate-400 max-w-2xl mx-auto">
              Comprehensive programs designed for different leadership roles and career objectives
            </p>
          </motion.div>

          <div className="grid lg:grid-cols-2 gap-8">
            {executivePrograms.map((program, i) => (
              <motion.div
                key={program.slug}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1 }}
              >
                <Card className="bg-slate-900 border-slate-800 overflow-hidden hover:border-slate-700 transition-all group h-full">
                  <div className={`h-2 bg-gradient-to-r ${program.color}`} />
                  <CardContent className="p-8">
                    <div className="flex items-start gap-4 mb-6">
                      <div className={`w-14 h-14 rounded-xl bg-gradient-to-br ${program.color} flex items-center justify-center shrink-0`}>
                        <program.icon className="w-7 h-7 text-white" />
                      </div>
                      <div>
                        <h3 className="text-xl font-bold text-white mb-1">{program.title}</h3>
                        <p className="text-slate-400 text-sm">{program.subtitle}</p>
                      </div>
                    </div>

                    <div className="grid grid-cols-3 gap-4 mb-6 p-4 bg-slate-800/50 rounded-lg">
                      <div className="text-center">
                        <Clock className="w-5 h-5 text-slate-400 mx-auto mb-1" />
                        <p className="text-white font-semibold text-sm">{program.duration}</p>
                        <p className="text-slate-500 text-xs">Duration</p>
                      </div>
                      <div className="text-center border-x border-slate-700">
                        <Users className="w-5 h-5 text-slate-400 mx-auto mb-1" />
                        <p className="text-white font-semibold text-sm">{program.liveSessions}</p>
                        <p className="text-slate-500 text-xs">Live Sessions</p>
                      </div>
                      <div className="text-center">
                        <GraduationCap className="w-5 h-5 text-slate-400 mx-auto mb-1" />
                        <p className="text-white font-semibold text-sm">{program.modules}</p>
                        <p className="text-slate-500 text-xs">Core Modules</p>
                      </div>
                    </div>

                    <div className="mb-6">
                      <p className="text-slate-400 text-sm mb-3">
                        <span className="text-white font-medium">Designed for:</span> {program.audience}
                      </p>
                      <div className="space-y-2">
                        {program.highlights.map((highlight, j) => (
                          <div key={j} className="flex items-center gap-2">
                            <CheckCircle2 className="w-4 h-4 text-emerald-400 shrink-0" />
                            <span className="text-slate-300 text-sm">{highlight}</span>
                          </div>
                        ))}
                      </div>
                    </div>

                    <div className="flex items-center justify-between pt-4 border-t border-slate-800">
                      <div>
                        <p className="text-2xl font-bold text-white">{program.price}</p>
                        <p className="text-slate-500 text-xs">Program fee</p>
                      </div>
                      <Link href={`/programs/${program.slug}`}>
                        <Button className={`bg-gradient-to-r ${program.color} text-white font-bold hover:opacity-90`} data-testid={`button-explore-${program.slug}`}>
                          Explore Program
                          <ChevronRight className="w-4 h-4 ml-1" />
                        </Button>
                      </Link>
                    </div>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-20 bg-gradient-to-br from-amber-500/10 via-slate-900 to-slate-950">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="max-w-4xl mx-auto text-center"
          >
            <h2 className="text-3xl md:text-4xl font-display font-bold text-white mb-6">
              Ready to Transform Your Strategic Impact?
            </h2>
            <p className="text-xl text-slate-400 mb-8">
              Join an elite cohort of cybersecurity leaders shaping the future of enterprise security.
            </p>
            <div className="flex flex-col sm:flex-row justify-center gap-4">
              <Button size="lg" className="bg-amber-500 hover:bg-amber-600 text-black font-bold px-8" data-testid="button-apply-now">
                Apply Now
                <ChevronRight className="w-5 h-5 ml-1" />
              </Button>
              <Button size="lg" variant="outline" className="border-amber-500/30 text-amber-400 hover:bg-amber-500/10" data-testid="button-schedule-call">
                Schedule a Call
              </Button>
            </div>
            <p className="text-slate-500 text-sm mt-6">
              Application deadline: March 15, 2025 | Classes begin: April 2025
            </p>
          </motion.div>
        </div>
      </section>

      <Footer />
    </div>
  );
}
