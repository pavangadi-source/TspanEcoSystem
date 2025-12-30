import { Link } from "wouter";
import { motion } from "framer-motion";
import Navbar from "@/components/Navbar";
import { Button } from "@/components/ui/button";
import {
  Shield,
  TrendingUp,
  DollarSign,
  Briefcase,
  Building,
  Award,
  Users,
  ArrowRight,
  CheckCircle2,
  Star,
  Rocket,
  Target,
} from "lucide-react";

const salaryRanges = [
  {
    role: "Security Analyst",
    range: "$80,000 - $120,000",
    growth: "+15%",
    level: "Entry to Mid",
    color: "from-blue-500 to-cyan-500",
  },
  {
    role: "Cloud Security Architect",
    range: "$150,000 - $200,000",
    growth: "+22%",
    level: "Senior",
    color: "from-purple-500 to-pink-500",
  },
  {
    role: "SOC Manager",
    range: "$120,000 - $160,000",
    growth: "+18%",
    level: "Mid to Senior",
    color: "from-primary to-blue-500",
  },
  {
    role: "Threat Intelligence Lead",
    range: "$130,000 - $180,000",
    growth: "+25%",
    level: "Senior",
    color: "from-red-500 to-orange-500",
  },
  {
    role: "DDI Infrastructure Engineer",
    range: "$110,000 - $150,000",
    growth: "+20%",
    level: "Mid to Senior",
    color: "from-secondary to-yellow-500",
  },
  {
    role: "CISO / Security Director",
    range: "$200,000 - $350,000",
    growth: "+12%",
    level: "Executive",
    color: "from-emerald-500 to-teal-500",
  },
];

const careerPaths = [
  {
    title: "Security Operations",
    description: "SOC Analyst → Senior Analyst → SOC Manager → Director of Security Operations",
    icon: <Shield className="w-6 h-6" />,
  },
  {
    title: "Cloud Security",
    description: "Cloud Security Engineer → Senior Engineer → Cloud Security Architect → VP of Cloud Security",
    icon: <Building className="w-6 h-6" />,
  },
  {
    title: "Threat Intelligence",
    description: "Threat Analyst → Senior Analyst → Threat Intel Lead → Chief Threat Officer",
    icon: <Target className="w-6 h-6" />,
  },
  {
    title: "Infrastructure Security",
    description: "Network Security Engineer → DDI Specialist → Infrastructure Architect → CISO",
    icon: <Rocket className="w-6 h-6" />,
  },
];

const testimonials = [
  {
    name: "Priya Sharma",
    role: "Cloud Security Architect",
    company: "Fortune 500 Tech Company",
    image: "PS",
    quote: "T-SPAN's DDI program transformed my career. Within 6 months of completing the certification, I moved from a network admin role to a senior cloud security position with a 70% salary increase.",
    salary: "$175K",
  },
  {
    name: "Michael Chen",
    role: "Threat Intelligence Lead",
    company: "Global Financial Services",
    image: "MC",
    quote: "The hands-on lab experience with real sovereign infrastructure gave me skills that no other program offers. My employer specifically recruited me for my TCPWave expertise.",
    salary: "$165K",
  },
  {
    name: "Sarah Johnson",
    role: "SOC Manager",
    company: "Government Contractor",
    image: "SJ",
    quote: "The faculty's real-world experience and the focus on critical infrastructure security prepared me perfectly for my role protecting national assets.",
    salary: "$145K",
  },
];

const hiringCompanies = [
  "Amazon Web Services",
  "Microsoft Azure",
  "Google Cloud",
  "Palo Alto Networks",
  "CrowdStrike",
  "Splunk",
  "Cisco Systems",
  "Mandiant",
  "Deloitte Cyber",
  "Booz Allen Hamilton",
  "Lockheed Martin",
  "Northrop Grumman",
];

const placementSupport = [
  {
    title: "Resume & Portfolio Review",
    description: "Expert feedback on your resume and project portfolio from industry professionals",
  },
  {
    title: "Mock Interviews",
    description: "Practice technical and behavioral interviews with our hiring partners",
  },
  {
    title: "Job Placement Network",
    description: "Direct access to 200+ hiring partners actively seeking T-SPAN graduates",
  },
  {
    title: "Career Coaching",
    description: "1-on-1 sessions with career advisors specializing in cybersecurity",
  },
  {
    title: "Networking Events",
    description: "Exclusive events connecting you with industry leaders and recruiters",
  },
  {
    title: "Lifetime Alumni Access",
    description: "Continuous access to job board, resources, and alumni network",
  },
];

export default function Careers() {
  return (
    <div className="min-h-screen bg-slate-950 text-white overflow-x-hidden font-sans">
      <Navbar />
      
      {/* Hero Section */}
      <section className="pt-32 pb-20 relative overflow-hidden">
        <div className="absolute inset-0 bg-[linear-gradient(rgba(251,191,36,0.03)_1px,transparent_1px),linear-gradient(90deg,rgba(251,191,36,0.03)_1px,transparent_1px)] bg-[size:50px_50px]" />
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-secondary/5 rounded-full blur-[150px]" />
        
        <div className="container mx-auto px-4 relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-center max-w-4xl mx-auto"
          >
            <div className="flex items-center justify-center gap-2 mb-4">
              <TrendingUp className="w-5 h-5 text-secondary animate-pulse" />
              <span className="text-secondary font-mono text-xs uppercase tracking-[0.3em]" data-testid="text-careers-badge">
                Career Transformation
              </span>
            </div>
            <h1 className="text-4xl md:text-6xl font-display font-bold mb-6" data-testid="text-careers-title">
              Launch Your <span className="text-transparent bg-clip-text bg-gradient-to-r from-secondary to-primary">Cybersecurity</span> Career
            </h1>
            <p className="text-slate-400 text-lg md:text-xl max-w-2xl mx-auto mb-8" data-testid="text-careers-description">
              T-SPAN graduates are among the highest-paid security professionals in the industry. See where our training can take you.
            </p>
            
            {/* Stats Banner */}
            <div className="grid grid-cols-3 gap-4 max-w-2xl mx-auto" data-testid="section-career-stats">
              <div className="p-4 rounded-xl bg-slate-900/60 border border-slate-800">
                <p className="text-3xl font-bold text-primary">94%</p>
                <p className="text-slate-400 text-sm">Job Placement Rate</p>
              </div>
              <div className="p-4 rounded-xl bg-slate-900/60 border border-slate-800">
                <p className="text-3xl font-bold text-secondary">$135K</p>
                <p className="text-slate-400 text-sm">Average Starting Salary</p>
              </div>
              <div className="p-4 rounded-xl bg-slate-900/60 border border-slate-800">
                <p className="text-3xl font-bold text-purple-400">45%</p>
                <p className="text-slate-400 text-sm">Average Salary Increase</p>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Salary Ranges Section */}
      <section className="py-20 bg-slate-900/50">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-12"
          >
            <div className="flex items-center justify-center gap-2 mb-4">
              <DollarSign className="w-5 h-5 text-secondary" />
              <span className="text-secondary font-mono text-xs uppercase tracking-[0.2em]">Earning Potential</span>
            </div>
            <h2 className="text-3xl md:text-4xl font-display font-bold mb-4" data-testid="text-salary-title">
              Salary <span className="text-transparent bg-clip-text bg-gradient-to-r from-secondary to-primary">Ranges</span>
            </h2>
            <p className="text-slate-400 max-w-2xl mx-auto">
              Our graduates command top-tier salaries across various cybersecurity roles.
            </p>
          </motion.div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6" data-testid="section-salary-ranges">
            {salaryRanges.map((item, index) => (
              <motion.div
                key={item.role}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className="p-6 rounded-xl bg-slate-900 border border-slate-800 hover:border-primary/50 transition-all group"
                data-testid={`card-salary-${index}`}
              >
                <div className={`inline-block px-3 py-1 rounded-full text-xs font-mono mb-4 bg-gradient-to-r ${item.color} text-white`}>
                  {item.level}
                </div>
                <h3 className="text-xl font-display font-bold text-white mb-2">{item.role}</h3>
                <p className="text-2xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-primary to-secondary mb-2">
                  {item.range}
                </p>
                <div className="flex items-center gap-2 text-green-400 text-sm">
                  <TrendingUp className="w-4 h-4" />
                  <span>{item.growth} YoY Growth</span>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Career Paths */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-12"
          >
            <div className="flex items-center justify-center gap-2 mb-4">
              <Briefcase className="w-5 h-5 text-primary" />
              <span className="text-primary font-mono text-xs uppercase tracking-[0.2em]">Your Journey</span>
            </div>
            <h2 className="text-3xl md:text-4xl font-display font-bold mb-4" data-testid="text-paths-title">
              Career <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary to-secondary">Paths</span>
            </h2>
          </motion.div>

          <div className="grid md:grid-cols-2 gap-6 max-w-4xl mx-auto" data-testid="section-career-paths">
            {careerPaths.map((path, index) => (
              <motion.div
                key={path.title}
                initial={{ opacity: 0, x: index % 2 === 0 ? -20 : 20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className="p-6 rounded-xl bg-slate-900/60 border border-slate-800 hover:border-secondary/50 transition-all"
                data-testid={`card-path-${index}`}
              >
                <div className="flex items-start gap-4">
                  <div className="p-3 bg-primary/20 rounded-lg text-primary">
                    {path.icon}
                  </div>
                  <div>
                    <h3 className="text-lg font-display font-bold text-white mb-2">{path.title}</h3>
                    <p className="text-slate-400 text-sm">{path.description}</p>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Success Stories */}
      <section className="py-20 bg-slate-900/50">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-12"
          >
            <div className="flex items-center justify-center gap-2 mb-4">
              <Star className="w-5 h-5 text-secondary" />
              <span className="text-secondary font-mono text-xs uppercase tracking-[0.2em]">Success Stories</span>
            </div>
            <h2 className="text-3xl md:text-4xl font-display font-bold mb-4" data-testid="text-testimonials-title">
              Graduate <span className="text-transparent bg-clip-text bg-gradient-to-r from-secondary to-primary">Testimonials</span>
            </h2>
          </motion.div>

          <div className="grid md:grid-cols-3 gap-6" data-testid="section-testimonials">
            {testimonials.map((testimonial, index) => (
              <motion.div
                key={testimonial.name}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.15 }}
                className="p-6 rounded-xl bg-slate-900 border border-slate-800 hover:border-primary/30 transition-all"
                data-testid={`card-testimonial-${index}`}
              >
                <div className="flex items-center gap-4 mb-4">
                  <div className="w-12 h-12 rounded-full bg-gradient-to-br from-primary to-secondary flex items-center justify-center text-white font-bold">
                    {testimonial.image}
                  </div>
                  <div>
                    <p className="text-white font-semibold">{testimonial.name}</p>
                    <p className="text-slate-400 text-sm">{testimonial.role}</p>
                  </div>
                </div>
                <p className="text-slate-300 text-sm italic mb-4">"{testimonial.quote}"</p>
                <div className="flex items-center justify-between pt-4 border-t border-slate-800">
                  <span className="text-slate-400 text-xs">{testimonial.company}</span>
                  <span className="text-secondary font-bold">{testimonial.salary}</span>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Hiring Companies */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-12"
          >
            <div className="flex items-center justify-center gap-2 mb-4">
              <Building className="w-5 h-5 text-primary" />
              <span className="text-primary font-mono text-xs uppercase tracking-[0.2em]">Our Network</span>
            </div>
            <h2 className="text-3xl md:text-4xl font-display font-bold mb-4" data-testid="text-companies-title">
              Companies Hiring <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary to-secondary">T-SPAN Graduates</span>
            </h2>
          </motion.div>

          <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-6 gap-4" data-testid="section-hiring-companies">
            {hiringCompanies.map((company, index) => (
              <motion.div
                key={company}
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.05 }}
                className="p-4 rounded-lg bg-slate-900/60 border border-slate-800 hover:border-primary/30 transition-all text-center"
                data-testid={`company-${index}`}
              >
                <p className="text-slate-300 text-sm font-medium">{company}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Placement Support */}
      <section className="py-20 bg-slate-900/50">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-12"
          >
            <div className="flex items-center justify-center gap-2 mb-4">
              <Users className="w-5 h-5 text-secondary" />
              <span className="text-secondary font-mono text-xs uppercase tracking-[0.2em]">We've Got You</span>
            </div>
            <h2 className="text-3xl md:text-4xl font-display font-bold mb-4" data-testid="text-support-title">
              Placement <span className="text-transparent bg-clip-text bg-gradient-to-r from-secondary to-primary">Support</span>
            </h2>
            <p className="text-slate-400 max-w-2xl mx-auto">
              Our dedicated career services team works with you from enrollment through job placement and beyond.
            </p>
          </motion.div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-5xl mx-auto" data-testid="section-placement-support">
            {placementSupport.map((support, index) => (
              <motion.div
                key={support.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className="flex items-start gap-4 p-5 rounded-xl bg-slate-900 border border-slate-800"
                data-testid={`card-support-${index}`}
              >
                <CheckCircle2 className="w-6 h-6 text-primary flex-shrink-0 mt-0.5" />
                <div>
                  <h3 className="text-white font-semibold mb-1">{support.title}</h3>
                  <p className="text-slate-400 text-sm">{support.description}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gradient-to-br from-slate-900 to-slate-950 border-t border-slate-800">
        <div className="container mx-auto px-4 text-center">
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
          >
            <Award className="w-16 h-16 text-secondary mx-auto mb-6" />
            <h2 className="text-3xl md:text-4xl font-display font-bold mb-6">
              Ready to Transform Your <span className="text-transparent bg-clip-text bg-gradient-to-r from-secondary to-primary">Career</span>?
            </h2>
            <p className="text-slate-400 max-w-xl mx-auto mb-8">
              Join thousands of security professionals who've accelerated their careers with T-SPAN University.
            </p>
            <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
              <Link href="/admissions">
                <Button size="lg" className="bg-primary hover:bg-primary/90 text-white font-bold shadow-[0_0_20px_rgba(6,182,212,0.4)]" data-testid="button-apply">
                  Apply Now <ArrowRight className="ml-2 w-4 h-4" />
                </Button>
              </Link>
              <Link href="/courses">
                <Button variant="outline" size="lg" className="border-slate-700 hover:bg-slate-800" data-testid="button-explore-programs">
                  Explore Programs
                </Button>
              </Link>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-12 bg-slate-950 border-t border-slate-900">
        <div className="container mx-auto px-4 text-center">
          <div className="flex items-center justify-center gap-2 mb-6">
            <Shield className="w-8 h-8 text-primary" />
            <span className="font-display font-bold text-xl text-white">T-SPAN UNIVERSITY</span>
          </div>
          <p className="text-slate-600 text-sm">
            © 2025 T-SPAN University. All rights reserved.
          </p>
        </div>
      </footer>
    </div>
  );
}
