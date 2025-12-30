import { useEffect, useRef } from "react";
import { motion } from "framer-motion";
import { Link } from "wouter";
import { Globe, Award, Users, ArrowRight, Sparkles, GraduationCap } from "lucide-react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

export default function ThreatIntelligenceSummit() {
  const sectionRef = useRef<HTMLElement>(null);
  const cardsRef = useRef<HTMLDivElement>(null);
  const partnersRef = useRef<HTMLDivElement>(null);
  const flagLeftRef = useRef<HTMLDivElement>(null);
  const flagRightRef = useRef<HTMLDivElement>(null);
  const globeRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      if (globeRef.current) {
        gsap.to(globeRef.current, {
          rotation: 360,
          duration: 60,
          repeat: -1,
          ease: "none"
        });
      }

      if (flagLeftRef.current) {
        gsap.fromTo(flagLeftRef.current,
          { x: -100, opacity: 0, rotation: -10 },
          {
            x: 0,
            opacity: 1,
            rotation: 0,
            duration: 1,
            ease: "power3.out",
            scrollTrigger: {
              trigger: sectionRef.current,
              start: "top 70%",
              toggleActions: "play none none reverse"
            }
          }
        );
      }

      if (flagRightRef.current) {
        gsap.fromTo(flagRightRef.current,
          { x: 100, opacity: 0, rotation: 10 },
          {
            x: 0,
            opacity: 1,
            rotation: 0,
            duration: 1,
            ease: "power3.out",
            scrollTrigger: {
              trigger: sectionRef.current,
              start: "top 70%",
              toggleActions: "play none none reverse"
            }
          }
        );
      }

      if (cardsRef.current) {
        const cards = cardsRef.current.querySelectorAll('.summit-card');
        gsap.fromTo(cards,
          { 
            opacity: 0, 
            y: 80, 
            scale: 0.9
          },
          {
            opacity: 1,
            y: 0,
            scale: 1,
            duration: 0.8,
            stagger: 0.15,
            ease: "power3.out",
            scrollTrigger: {
              trigger: cardsRef.current,
              start: "top 75%",
              toggleActions: "play none none reverse"
            }
          }
        );
      }

      if (partnersRef.current) {
        const partners = partnersRef.current.querySelectorAll('.partner-item');
        gsap.fromTo(partners,
          { opacity: 0, scale: 0.5, y: 20 },
          {
            opacity: 1,
            scale: 1,
            y: 0,
            duration: 0.6,
            stagger: 0.1,
            ease: "back.out(1.7)",
            scrollTrigger: {
              trigger: partnersRef.current,
              start: "top 85%",
              toggleActions: "play none none reverse"
            }
          }
        );
      }

    }, sectionRef);

    return () => {
      ctx.revert();
      ScrollTrigger.getAll().forEach(trigger => trigger.kill());
    };
  }, []);

  return (
    <section ref={sectionRef} className="relative py-24 bg-gradient-to-b from-slate-950 via-slate-900 to-slate-950 overflow-hidden">
      <div className="absolute inset-0 bg-[linear-gradient(rgba(6,182,212,0.03)_1px,transparent_1px),linear-gradient(90deg,rgba(6,182,212,0.03)_1px,transparent_1px)] bg-[size:50px_50px]" />
      
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[800px] h-[400px] bg-primary/5 rounded-full blur-[150px] animate-pulse" />
      <div className="absolute bottom-0 right-0 w-[400px] h-[400px] bg-amber-500/5 rounded-full blur-[120px]" />
      
      <div ref={globeRef} className="absolute top-20 right-10 w-32 h-32 border border-primary/20 rounded-full opacity-20 hidden lg:block">
        <div className="absolute inset-2 border border-primary/10 rounded-full" />
        <div className="absolute inset-4 border border-primary/5 rounded-full" />
        <div className="absolute top-1/2 left-0 right-0 h-px bg-primary/20" />
        <div className="absolute left-1/2 top-0 bottom-0 w-px bg-primary/20" />
      </div>

      <div className="container mx-auto px-4 relative z-10">
        <div className="flex items-center justify-center gap-8 mb-8">
          <div ref={flagLeftRef} className="hidden md:flex flex-col w-16 h-12 rounded overflow-hidden shadow-lg opacity-0">
            <div className="flex-1 bg-red-600" />
            <div className="flex-1 bg-white" />
            <div className="flex-1 bg-blue-800" />
          </div>
          
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="text-center"
          >
            <div className="inline-flex items-center gap-2 px-4 py-2 bg-primary/10 border border-primary/30 rounded-full mb-6">
              <Globe className="w-4 h-4 text-primary animate-spin" style={{ animationDuration: '10s' }} />
              <span className="text-primary font-mono text-sm uppercase tracking-wider">Feb 15 | BITS Pilani, Goa</span>
            </div>
          </motion.div>
          
          <div ref={flagRightRef} className="hidden md:flex flex-col w-16 h-12 rounded overflow-hidden shadow-lg opacity-0">
            <div className="flex-1 bg-orange-500" />
            <div className="flex-1 bg-white relative">
              <div className="absolute inset-0 flex items-center justify-center">
                <div className="w-3 h-3 rounded-full border-2 border-blue-900" />
              </div>
            </div>
            <div className="flex-1 bg-green-600" />
          </div>
        </div>
        
        <motion.div 
          className="text-center mb-16"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
        >
          <h2 className="font-display text-4xl md:text-6xl font-bold text-white mb-4 tracking-tight">
            Threat Intelligence
          </h2>
          <h3 className="font-display text-3xl md:text-5xl font-bold text-primary mb-6">
            Without Borders Summit
          </h3>
          <p className="text-lg text-slate-400 max-w-2xl mx-auto">
            Where NATO-scale research, policy, industry, and diplomacy converge
          </p>
          
          <div className="flex flex-wrap items-center justify-center gap-3 mt-6">
            {["AI Cyber Resilience", "Threat Intelligence", "Supply Chain Security", "Hybrid Operations"].map((topic, i) => (
              <motion.span
                key={topic}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.3 + i * 0.1 }}
                viewport={{ once: true }}
                className="px-4 py-2 bg-slate-800/50 border border-slate-700 rounded-full text-sm text-slate-300 font-mono"
              >
                {topic}
              </motion.span>
            ))}
          </div>
        </motion.div>

        <div ref={cardsRef} className="grid md:grid-cols-3 gap-8 mb-16">
          <Link href="/courses" className="summit-card group relative bg-gradient-to-br from-slate-900/80 to-slate-800/40 backdrop-blur-sm border border-slate-700/50 rounded-2xl p-8 hover:border-primary/50 transition-all duration-500 hover-lift cursor-pointer block" data-testid="card-subscription">
            <div className="absolute inset-0 bg-gradient-to-br from-primary/5 to-transparent rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
            <div className="relative z-10">
              <div className="w-14 h-14 bg-primary/10 rounded-xl flex items-center justify-center mb-6 group-hover:bg-primary/20 transition-colors group-hover:scale-110 transform duration-300">
                <Sparkles className="w-7 h-7 text-primary" />
              </div>
              <h4 className="font-display text-2xl font-bold text-white mb-3">Premium Subscription</h4>
              <p className="text-slate-400 leading-relaxed mb-4">
                Exclusive access to weekend intensives led by global threat intelligence experts. 
                Live labs, classified case studies, and direct mentorship.
              </p>
              <div className="flex items-center gap-2 text-primary font-mono text-sm">
                <span>Limited Seats Available</span>
                <ArrowRight className="w-4 h-4 group-hover:translate-x-2 transition-transform duration-300" />
              </div>
            </div>
          </Link>

          <Link href="/contact" className="summit-card group relative bg-gradient-to-br from-slate-900/80 to-slate-800/40 backdrop-blur-sm border border-slate-700/50 rounded-2xl p-8 hover:border-amber-500/50 transition-all duration-500 hover-lift cursor-pointer block" data-testid="card-awards">
            <div className="absolute inset-0 bg-gradient-to-br from-amber-500/5 to-transparent rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
            <div className="relative z-10">
              <div className="w-14 h-14 bg-amber-500/10 rounded-xl flex items-center justify-center mb-6 group-hover:bg-amber-500/20 transition-colors group-hover:scale-110 transform duration-300">
                <Award className="w-7 h-7 text-amber-400" />
              </div>
              <h4 className="font-display text-2xl font-bold text-white mb-3">Call for Papers</h4>
              <p className="text-slate-400 leading-relaxed mb-4">
                Submit your research for the Best Research Award. 
                European and Indian cyber researchers shaping NATO's digital defense.
              </p>
              <div className="flex items-center gap-2 text-amber-400 font-mono text-sm">
                <span>Submissions Open</span>
                <ArrowRight className="w-4 h-4 group-hover:translate-x-2 transition-transform duration-300" />
              </div>
            </div>
          </Link>

          <Link href="/partners" className="summit-card group relative bg-gradient-to-br from-slate-900/80 to-slate-800/40 backdrop-blur-sm border border-slate-700/50 rounded-2xl p-8 hover:border-emerald-500/50 transition-all duration-500 hover-lift cursor-pointer block" data-testid="card-faculty">
            <div className="absolute inset-0 bg-gradient-to-br from-emerald-500/5 to-transparent rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
            <div className="relative z-10">
              <div className="w-14 h-14 bg-emerald-500/10 rounded-xl flex items-center justify-center mb-6 group-hover:bg-emerald-500/20 transition-colors group-hover:scale-110 transform duration-300">
                <GraduationCap className="w-7 h-7 text-emerald-400" />
              </div>
              <h4 className="font-display text-2xl font-bold text-white mb-3">Weekend Faculty</h4>
              <p className="text-slate-400 leading-relaxed mb-4">
                Join as faculty partner from globally recognized institutions 
                to mentor the next generation of threat intelligence professionals.
              </p>
              <div className="flex items-center gap-2 text-emerald-400 font-mono text-sm">
                <span>Partner With Us</span>
                <ArrowRight className="w-4 h-4 group-hover:translate-x-2 transition-transform duration-300" />
              </div>
            </div>
          </Link>
        </div>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.4 }}
          viewport={{ once: true }}
          className="flex flex-col sm:flex-row items-center justify-center gap-6 mb-16"
        >
          <a
            href="/courses"
            className="group relative px-10 py-5 bg-transparent border-2 border-primary text-primary font-display font-bold text-lg uppercase tracking-widest rounded-lg overflow-hidden transition-all duration-500 hover:text-white hover:border-primary hover:shadow-[0_0_40px_rgba(6,182,212,0.6),0_0_80px_rgba(6,182,212,0.3),inset_0_0_60px_rgba(6,182,212,0.2)]"
            data-testid="button-subscribe"
          >
            <span className="absolute inset-0 bg-primary opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
            <span className="relative z-10 flex items-center gap-3">
              <Sparkles className="w-5 h-5" />
              Subscribe Now
            </span>
          </a>

          <a
            href="/contact"
            className="group relative px-10 py-5 bg-transparent border-2 border-amber-500 text-amber-400 font-display font-bold text-lg uppercase tracking-widest rounded-lg overflow-hidden transition-all duration-500 hover:text-slate-900 hover:border-amber-400 hover:shadow-[0_0_40px_rgba(251,191,36,0.6),0_0_80px_rgba(251,191,36,0.3),inset_0_0_60px_rgba(251,191,36,0.2)]"
            data-testid="button-submit-research"
          >
            <span className="absolute inset-0 bg-amber-400 opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
            <span className="relative z-10 flex items-center gap-3">
              <Award className="w-5 h-5" />
              Submit Research
            </span>
          </a>
        </motion.div>

        <div ref={partnersRef} className="text-center">
          <p className="text-slate-500 font-mono text-sm mb-6">In collaboration with</p>
          <div className="flex flex-wrap items-center justify-center gap-6">
            {["BITS Pilani", "TCPWave", "IIT Kanpur", "TU Delft"].map((partner) => (
              <div 
                key={partner}
                className="partner-item group px-6 py-3 bg-slate-900/50 border border-slate-800 rounded-lg hover:border-primary/50 hover:bg-slate-800/50 transition-all duration-300"
              >
                <span className="font-display font-semibold text-slate-400 group-hover:text-white transition-colors">{partner}</span>
              </div>
            ))}
          </div>
          
          <motion.p
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ delay: 0.5 }}
            viewport={{ once: true }}
            className="mt-10 text-slate-500 text-sm max-w-2xl mx-auto"
          >
            Bringing European policy thinkers and Indian cyber researchers together to 
            shape durable answers to NATO's most pressing digital threats.
          </motion.p>
        </div>
      </div>
    </section>
  );
}
