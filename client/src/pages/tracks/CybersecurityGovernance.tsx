import { motion } from "framer-motion";
import { Link } from "wouter";
import { 
  Users, Shield, Settings, BarChart3, Award, CheckCircle2,
  Clock, Calendar, Target, FileText, TrendingUp, ArrowRight
} from "lucide-react";
import { Button } from "@/components/ui/button";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

const frameworks = [
  { 
    name: "ISO 27001/27002", 
    description: "Information Security Management System",
    color: "text-blue-400",
    bgColor: "bg-blue-500/20"
  },
  { 
    name: "NIST CSF", 
    description: "Cybersecurity Framework",
    color: "text-purple-400",
    bgColor: "bg-purple-500/20"
  },
  { 
    name: "COBIT 2019", 
    description: "IT Governance Framework",
    color: "text-green-400",
    bgColor: "bg-green-500/20"
  },
  { 
    name: "CIS Controls", 
    description: "Critical Security Controls",
    color: "text-amber-400",
    bgColor: "bg-amber-500/20"
  },
];

const modules = [
  {
    week: "1-2",
    title: "Governance Foundations",
    topics: [
      "Cybersecurity Governance Models",
      "Board-Level Reporting",
      "Security Policy Development",
      "Organizational Structure",
      "Roles & Responsibilities"
    ]
  },
  {
    week: "3-4",
    title: "Risk Management",
    topics: [
      "Risk Identification & Assessment",
      "Threat Modeling",
      "Risk Treatment Options",
      "Risk Appetite & Tolerance",
      "Key Risk Indicators (KRIs)"
    ]
  },
  {
    week: "5-6",
    title: "ISMS Implementation",
    topics: [
      "ISO 27001 Requirements",
      "Control Implementation",
      "Documentation & Evidence",
      "Internal Audit",
      "Management Review"
    ]
  },
  {
    week: "7-8",
    title: "Security Strategy",
    topics: [
      "Strategic Planning",
      "Budgeting & Resource Allocation",
      "Vendor Risk Management",
      "Business Continuity",
      "Maturity Assessment"
    ]
  },
];

const outcomes = [
  "Design and implement cybersecurity governance frameworks",
  "Conduct comprehensive risk assessments",
  "Develop security policies aligned with business objectives",
  "Prepare for ISO 27001 certification audits",
  "Present security metrics to board and executives",
  "Build and lead security teams effectively",
];

export default function CybersecurityGovernance() {
  return (
    <div className="min-h-screen bg-slate-950 text-white font-sans">
      <Navbar />
      
      {/* Hero Section */}
      <section className="relative pt-32 pb-20 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-purple-900/20 via-slate-950 to-slate-900" />
        <div className="absolute top-0 right-0 w-1/2 h-full bg-gradient-to-l from-purple-500/10 to-transparent" />
        
        <div className="container mx-auto px-4 md:px-6 relative z-10">
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="max-w-4xl"
          >
            <div className="flex items-center gap-3 mb-6">
              <div className="px-3 py-1 bg-purple-500/20 border border-purple-500/30 rounded-full">
                <span className="text-purple-400 font-mono text-sm uppercase tracking-wider">Management Track</span>
              </div>
              <div className="px-3 py-1 bg-blue-500/20 border border-blue-500/30 rounded-full">
                <span className="text-blue-400 font-mono text-sm">CISO Essential</span>
              </div>
            </div>
            
            <h1 className="text-4xl md:text-6xl font-display font-bold text-white mb-6 leading-tight">
              Cybersecurity Governance <br />
              & Risk Management
            </h1>
            
            <p className="text-slate-400 text-lg md:text-xl max-w-3xl mb-8">
              Master governance frameworks, risk assessment methodologies, and ISMS 
              implementation. Build the skills to lead security programs at the 
              organizational level and communicate with executive leadership.
            </p>
            
            <div className="flex flex-wrap gap-6 mb-10">
              <div className="flex items-center gap-2 text-slate-300">
                <Clock className="w-5 h-5 text-purple-400" />
                <span>8 Weeks</span>
              </div>
              <div className="flex items-center gap-2 text-slate-300">
                <Calendar className="w-5 h-5 text-purple-400" />
                <span>6-8 hours/week</span>
              </div>
              <div className="flex items-center gap-2 text-slate-300">
                <Target className="w-5 h-5 text-purple-400" />
                <span>Senior Management</span>
              </div>
            </div>
            
            <div className="flex flex-col sm:flex-row gap-4">
              <Button 
                size="lg" 
                className="bg-purple-600 hover:bg-purple-700 text-white font-bold px-8"
                data-testid="button-enroll-governance"
              >
                Enroll Now - ₹95,000
              </Button>
              <Link href="/executive-programs">
                <Button 
                  size="lg" 
                  variant="outline" 
                  className="border-slate-700 text-white hover:bg-white/5"
                >
                  Executive Programs
                </Button>
              </Link>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Frameworks */}
      <section className="py-16 bg-slate-900/50 border-y border-slate-800">
        <div className="container mx-auto px-4 md:px-6">
          <h2 className="text-2xl font-display font-bold text-white mb-8 text-center">
            Frameworks Covered
          </h2>
          <div className="grid md:grid-cols-4 gap-4 max-w-4xl mx-auto">
            {frameworks.map((framework, i) => (
              <motion.div
                key={framework.name}
                initial={{ opacity: 0, scale: 0.95 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1 }}
                className={`${framework.bgColor} border border-slate-700 rounded-xl p-4 text-center`}
              >
                <h3 className={`${framework.color} font-bold mb-1`}>{framework.name}</h3>
                <p className="text-slate-400 text-sm">{framework.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Curriculum */}
      <section className="py-20">
        <div className="container mx-auto px-4 md:px-6">
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-12"
          >
            <h2 className="text-3xl md:text-4xl font-display font-bold text-white mb-4">
              Programme Curriculum
            </h2>
            <p className="text-slate-400 text-lg max-w-2xl mx-auto">
              8-week comprehensive program covering governance, risk, and compliance
            </p>
          </motion.div>

          <div className="grid md:grid-cols-2 gap-6 max-w-5xl mx-auto">
            {modules.map((module, i) => (
              <motion.div
                key={module.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1 }}
                className="bg-slate-900 border border-slate-800 rounded-xl p-6 hover:border-purple-500/50 transition-colors"
              >
                <div className="flex items-center gap-3 mb-4">
                  <div className="px-3 py-1 bg-purple-500/20 rounded-lg">
                    <span className="text-purple-400 font-mono text-sm">Week {module.week}</span>
                  </div>
                  <h3 className="text-white font-bold">{module.title}</h3>
                </div>
                <ul className="space-y-2">
                  {module.topics.map((topic) => (
                    <li key={topic} className="flex items-start gap-2 text-slate-400 text-sm">
                      <CheckCircle2 className="w-4 h-4 text-purple-400 mt-0.5 flex-shrink-0" />
                      {topic}
                    </li>
                  ))}
                </ul>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Learning Outcomes */}
      <section className="py-20 bg-slate-900/30">
        <div className="container mx-auto px-4 md:px-6">
          <div className="max-w-4xl mx-auto">
            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="text-center mb-12"
            >
              <h2 className="text-3xl md:text-4xl font-display font-bold text-white mb-4">
                Learning Outcomes
              </h2>
              <p className="text-slate-400 text-lg">
                What you'll be able to do after completing this program
              </p>
            </motion.div>

            <div className="grid md:grid-cols-2 gap-4">
              {outcomes.map((outcome, i) => (
                <motion.div
                  key={i}
                  initial={{ opacity: 0, x: i % 2 === 0 ? -20 : 20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: i * 0.1 }}
                  className="flex items-start gap-3 bg-slate-800/50 rounded-lg p-4"
                >
                  <TrendingUp className="w-5 h-5 text-purple-400 mt-0.5 flex-shrink-0" />
                  <span className="text-slate-300">{outcome}</span>
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-20 bg-gradient-to-r from-purple-900/20 via-slate-900 to-purple-900/20 border-t border-slate-800">
        <div className="container mx-auto px-4 md:px-6 text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            <h2 className="text-3xl md:text-4xl font-display font-bold text-white mb-6">
              Lead Your Organization's Security Journey
            </h2>
            <p className="text-slate-400 text-lg max-w-2xl mx-auto mb-8">
              Develop the governance expertise to build and lead enterprise security programs.
            </p>
            <Button 
              size="lg" 
              className="bg-purple-600 hover:bg-purple-700 text-white font-bold px-8"
            >
              Start Learning
              <ArrowRight className="w-4 h-4 ml-2" />
            </Button>
          </motion.div>
        </div>
      </section>

      <Footer />
    </div>
  );
}
