import { motion } from "framer-motion";
import { Link } from "wouter";
import { 
  Building2, Users, TrendingUp, Award, Shield, Target,
  GraduationCap, BookOpen, BarChart3, CheckCircle2, ArrowRight,
  Briefcase, Globe, Zap, Lock, Brain, Network
} from "lucide-react";
import { Button } from "@/components/ui/button";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

const impactStats = [
  { value: "94%", label: "believe the program positively impacted their professional development" },
  { value: "77%", label: "say the learnings could be immediately applied to their work" },
  { value: "61%", label: "found new inspiration in their lives and careers" },
  { value: "55%", label: "saw advances in their current job" },
];

const businessResults = [
  { value: "90%", label: "of learners saw a positive impact within their organization" },
  { value: "61%", label: "saw technical improvements in their organization" },
  { value: "43%", label: "saw advances in team management" },
  { value: "29%", label: "saw a better response to security incidents" },
];

const academyAreas = [
  { 
    title: "Cybersecurity Leadership", 
    icon: Shield, 
    color: "text-cyan-400",
    description: "Executive-level security strategy and governance"
  },
  { 
    title: "Threat Intelligence", 
    icon: Target, 
    color: "text-red-400",
    description: "Real-time threat detection and response"
  },
  { 
    title: "Network Security", 
    icon: Network, 
    color: "text-blue-400",
    description: "Infrastructure protection and DDI mastery"
  },
  { 
    title: "AI-Native Defense", 
    icon: Brain, 
    color: "text-purple-400",
    description: "Machine learning for security operations"
  },
  { 
    title: "Digital Transformation", 
    icon: Zap, 
    color: "text-amber-400",
    description: "Secure cloud migration and DevSecOps"
  },
];

const partners = [
  "BITS Pilani",
  "IIT Kanpur", 
  "Texas Tech University",
  "TU Delft",
  "DSCI CCOE",
  "TCPWave",
];

export default function Enterprise() {
  return (
    <div className="min-h-screen bg-slate-950 text-white font-sans">
      <Navbar />
      
      {/* Hero Section */}
      <section className="relative pt-32 pb-24 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-slate-900 via-slate-950 to-slate-900" />
        <div className="absolute top-0 right-0 w-1/2 h-full bg-gradient-to-l from-primary/10 to-transparent" />
        <div className="absolute bottom-0 left-0 w-1/3 h-1/2 bg-gradient-to-tr from-secondary/10 to-transparent" />
        
        <div className="container mx-auto px-4 md:px-6 relative z-10">
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="max-w-4xl mx-auto text-center"
          >
            <div className="inline-flex items-center gap-2 bg-primary/10 border border-primary/30 rounded-full px-4 py-2 mb-6">
              <Building2 className="w-4 h-4 text-primary" />
              <span className="text-primary font-mono text-sm uppercase tracking-wider">Enterprise Solutions</span>
            </div>
            
            <h1 className="text-4xl md:text-6xl font-display font-bold text-white mb-6 leading-tight">
              Global Skill-Building Solutions <br />
              For Results-Driven Organizations
            </h1>
            
            <p className="text-slate-400 text-lg md:text-xl max-w-3xl mx-auto mb-10">
              We guide teams through cohort-based learning pathways built in partnership with the world's 
              top academic institutions — all to help businesses navigate cyber threats from the inside out.
            </p>
            
            <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
              <Button 
                size="lg" 
                className="bg-primary hover:bg-primary/90 text-white font-bold px-8 shadow-[0_0_20px_rgba(6,182,212,0.3)]"
                data-testid="button-enterprise-contact"
              >
                Let's Talk
              </Button>
              <Link href="/courses">
                <Button 
                  size="lg" 
                  variant="outline" 
                  className="border-slate-700 text-white hover:bg-white/5"
                  data-testid="button-view-programs"
                >
                  View Programs
                </Button>
              </Link>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Value Proposition */}
      <section className="py-20 bg-slate-900/50 border-y border-slate-800">
        <div className="container mx-auto px-4 md:px-6">
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-3xl md:text-4xl font-display font-bold text-white mb-4">
              Recruit. Retain. Develop.
            </h2>
            <p className="text-slate-400 text-lg max-w-2xl mx-auto">
              We harness learning's power to create cyber-resilient companies.
            </p>
          </motion.div>

          <div className="grid md:grid-cols-2 gap-12">
            {/* Accelerate */}
            <motion.div 
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="bg-slate-900 border border-slate-800 rounded-2xl p-8 hover:border-primary/50 transition-colors"
            >
              <div className="flex items-center gap-3 mb-6">
                <div className="w-12 h-12 bg-primary/20 rounded-xl flex items-center justify-center">
                  <TrendingUp className="w-6 h-6 text-primary" />
                </div>
                <h3 className="text-2xl font-display font-bold text-white">Accelerate</h3>
              </div>
              <p className="text-slate-400 mb-6">
                Accessible online employee training programs to retain and develop cybersecurity talent, 
                to be offered as an employee benefit.
              </p>
              <ul className="space-y-4">
                <li className="flex items-start gap-3">
                  <CheckCircle2 className="w-5 h-5 text-primary mt-0.5 flex-shrink-0" />
                  <div>
                    <span className="text-white font-medium">Provide Quality Learning Experiences</span>
                    <p className="text-slate-500 text-sm">Select from 30+ top university programs curated specifically for your team.</p>
                  </div>
                </li>
                <li className="flex items-start gap-3">
                  <CheckCircle2 className="w-5 h-5 text-primary mt-0.5 flex-shrink-0" />
                  <div>
                    <span className="text-white font-medium">Retain and Build Talent</span>
                    <p className="text-slate-500 text-sm">Offer education as a benefit to activate and drive engagement.</p>
                  </div>
                </li>
                <li className="flex items-start gap-3">
                  <CheckCircle2 className="w-5 h-5 text-primary mt-0.5 flex-shrink-0" />
                  <div>
                    <span className="text-white font-medium">Manage Enrollment & Analytics</span>
                    <p className="text-slate-500 text-sm">Flexible investment options with enrollment workflows aligned to your policies.</p>
                  </div>
                </li>
                <li className="flex items-start gap-3">
                  <CheckCircle2 className="w-5 h-5 text-primary mt-0.5 flex-shrink-0" />
                  <div>
                    <span className="text-white font-medium">Grow Employee Skill Sets</span>
                    <p className="text-slate-500 text-sm">Allow employees to choose programs that fit their schedule.</p>
                  </div>
                </li>
              </ul>
            </motion.div>

            {/* Academies */}
            <motion.div 
              initial={{ opacity: 0, x: 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="bg-slate-900 border border-slate-800 rounded-2xl p-8 hover:border-secondary/50 transition-colors"
            >
              <div className="flex items-center gap-3 mb-6">
                <div className="w-12 h-12 bg-secondary/20 rounded-xl flex items-center justify-center">
                  <GraduationCap className="w-6 h-6 text-secondary" />
                </div>
                <h3 className="text-2xl font-display font-bold text-white">Academies</h3>
              </div>
              <p className="text-slate-400 mb-6">
                A branded destination for your entire workforce to build the skills needed 
                for strategic security transformation initiatives.
              </p>
              <ul className="space-y-4">
                <li className="flex items-start gap-3">
                  <CheckCircle2 className="w-5 h-5 text-secondary mt-0.5 flex-shrink-0" />
                  <div>
                    <span className="text-white font-medium">Accelerate Transformation</span>
                    <p className="text-slate-500 text-sm">Develop security skills at all levels to understand, deliver, and lead.</p>
                  </div>
                </li>
                <li className="flex items-start gap-3">
                  <CheckCircle2 className="w-5 h-5 text-secondary mt-0.5 flex-shrink-0" />
                  <div>
                    <span className="text-white font-medium">Customize Employee Learning</span>
                    <p className="text-slate-500 text-sm">Tailor programs to align with company needs and career pathways.</p>
                  </div>
                </li>
                <li className="flex items-start gap-3">
                  <CheckCircle2 className="w-5 h-5 text-secondary mt-0.5 flex-shrink-0" />
                  <div>
                    <span className="text-white font-medium">Reach Your Strategic Goals</span>
                    <p className="text-slate-500 text-sm">We offer Academies in five core cybersecurity areas.</p>
                  </div>
                </li>
                <li className="flex items-start gap-3">
                  <CheckCircle2 className="w-5 h-5 text-secondary mt-0.5 flex-shrink-0" />
                  <div>
                    <span className="text-white font-medium">Build Technical and Human Skills</span>
                    <p className="text-slate-500 text-sm">Leadership and culture at the center of successful transformation.</p>
                  </div>
                </li>
              </ul>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Academy Areas */}
      <section className="py-20">
        <div className="container mx-auto px-4 md:px-6">
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-12"
          >
            <h2 className="text-3xl md:text-4xl font-display font-bold text-white mb-4">
              T-SPAN Academies
            </h2>
            <p className="text-slate-400 text-lg max-w-2xl mx-auto">
              Five core areas for comprehensive cybersecurity transformation
            </p>
          </motion.div>

          <div className="grid md:grid-cols-5 gap-4">
            {academyAreas.map((area, i) => (
              <motion.div
                key={area.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1 }}
                className="bg-slate-900/50 border border-slate-800 rounded-xl p-6 text-center hover:border-primary/50 transition-colors group"
              >
                <div className={`w-14 h-14 mx-auto mb-4 rounded-xl bg-slate-800 flex items-center justify-center group-hover:scale-110 transition-transform`}>
                  <area.icon className={`w-7 h-7 ${area.color}`} />
                </div>
                <h3 className="text-white font-bold mb-2">{area.title}</h3>
                <p className="text-slate-500 text-sm">{area.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Impact Stats */}
      <section className="py-20 bg-gradient-to-b from-slate-900/50 to-slate-950">
        <div className="container mx-auto px-4 md:px-6">
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <div className="inline-flex items-center gap-2 bg-primary/10 border border-primary/30 rounded-full px-4 py-2 mb-6">
              <BarChart3 className="w-4 h-4 text-primary" />
              <span className="text-primary font-mono text-sm uppercase tracking-wider">Our Impact</span>
            </div>
            <h2 className="text-3xl md:text-4xl font-display font-bold text-white mb-4">
              Building Blocks for Successful Learning Outcomes
            </h2>
          </motion.div>

          <div className="grid md:grid-cols-2 gap-12">
            {/* Learner Feedback */}
            <div>
              <h3 className="text-xl font-display font-bold text-white mb-6 flex items-center gap-2">
                <Users className="w-5 h-5 text-primary" />
                Learner Feedback
              </h3>
              <div className="grid grid-cols-2 gap-4">
                {impactStats.map((stat, i) => (
                  <motion.div
                    key={i}
                    initial={{ opacity: 0, scale: 0.9 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    viewport={{ once: true }}
                    transition={{ delay: i * 0.1 }}
                    className="bg-slate-900 border border-slate-800 rounded-xl p-6"
                  >
                    <div className="text-4xl font-display font-bold text-primary mb-2">{stat.value}</div>
                    <p className="text-slate-400 text-sm">{stat.label}</p>
                  </motion.div>
                ))}
              </div>
            </div>

            {/* Business Results */}
            <div>
              <h3 className="text-xl font-display font-bold text-white mb-6 flex items-center gap-2">
                <Briefcase className="w-5 h-5 text-secondary" />
                Business Results
              </h3>
              <div className="grid grid-cols-2 gap-4">
                {businessResults.map((stat, i) => (
                  <motion.div
                    key={i}
                    initial={{ opacity: 0, scale: 0.9 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    viewport={{ once: true }}
                    transition={{ delay: i * 0.1 }}
                    className="bg-slate-900 border border-slate-800 rounded-xl p-6"
                  >
                    <div className="text-4xl font-display font-bold text-secondary mb-2">{stat.value}</div>
                    <p className="text-slate-400 text-sm">{stat.label}</p>
                  </motion.div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Team-Based Learning */}
      <section className="py-20 border-t border-slate-800">
        <div className="container mx-auto px-4 md:px-6">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <motion.div 
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
            >
              <h2 className="text-3xl md:text-4xl font-display font-bold text-white mb-6">
                Team-Based Learning Options
              </h2>
              <ul className="space-y-4 mb-8">
                <li className="flex items-center gap-3 text-slate-300">
                  <CheckCircle2 className="w-5 h-5 text-primary flex-shrink-0" />
                  Enroll as a team or group and learn with your peers
                </li>
                <li className="flex items-center gap-3 text-slate-300">
                  <CheckCircle2 className="w-5 h-5 text-primary flex-shrink-0" />
                  Schedule a private instance of programs for your team
                </li>
                <li className="flex items-center gap-3 text-slate-300">
                  <CheckCircle2 className="w-5 h-5 text-primary flex-shrink-0" />
                  Inquire about special team/group pricing
                </li>
                <li className="flex items-center gap-3 text-slate-300">
                  <CheckCircle2 className="w-5 h-5 text-primary flex-shrink-0" />
                  Access live infrastructure labs for hands-on training
                </li>
              </ul>
              <Button 
                size="lg" 
                className="bg-primary hover:bg-primary/90 text-white font-bold"
                data-testid="button-team-inquiry"
              >
                Inquire About Team Training
                <ArrowRight className="w-4 h-4 ml-2" />
              </Button>
            </motion.div>

            <motion.div 
              initial={{ opacity: 0, x: 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="bg-gradient-to-br from-slate-900 to-slate-800 border border-slate-700 rounded-2xl p-8"
            >
              <h3 className="text-xl font-display font-bold text-white mb-6">
                We work with leading organizations to close critical security skills gaps
              </h3>
              <p className="text-slate-400 mb-6">Our academic partners include:</p>
              <div className="grid grid-cols-3 gap-4">
                {partners.map((partner) => (
                  <div 
                    key={partner}
                    className="bg-slate-800/50 border border-slate-700 rounded-lg p-4 text-center"
                  >
                    <span className="text-white font-medium text-sm">{partner}</span>
                  </div>
                ))}
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gradient-to-r from-primary/20 via-slate-900 to-secondary/20 border-t border-slate-800">
        <div className="container mx-auto px-4 md:px-6 text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            <h2 className="text-3xl md:text-4xl font-display font-bold text-white mb-6">
              Ready to Transform Your Organization's Security Posture?
            </h2>
            <p className="text-slate-400 text-lg max-w-2xl mx-auto mb-8">
              Contact us to discuss custom training solutions for your team.
            </p>
            <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
              <Link href="/contact">
                <Button 
                  size="lg" 
                  className="bg-primary hover:bg-primary/90 text-white font-bold px-8"
                  data-testid="button-contact-enterprise"
                >
                  Contact Enterprise Sales
                </Button>
              </Link>
              <Link href="/executive-programs">
                <Button 
                  size="lg" 
                  variant="outline" 
                  className="border-slate-700 text-white hover:bg-white/5"
                >
                  View Executive Programs
                </Button>
              </Link>
            </div>
          </motion.div>
        </div>
      </section>

      <Footer />
    </div>
  );
}
