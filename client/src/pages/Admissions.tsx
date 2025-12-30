import { Link } from "wouter";
import { motion } from "framer-motion";
import Navbar from "@/components/Navbar";
import { Button } from "@/components/ui/button";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import {
  Shield,
  ClipboardCheck,
  UserCheck,
  FileSearch,
  GraduationCap,
  Calendar,
  DollarSign,
  Users,
  CheckCircle2,
  ArrowRight,
  Building,
  Network,
  Lock,
  Globe,
} from "lucide-react";

const eligibilityCategories = [
  {
    icon: <Network className="w-6 h-6" />,
    title: "IT Professionals",
    description: "System administrators, network engineers, and DevOps professionals with 2+ years experience",
    color: "text-blue-400",
  },
  {
    icon: <Shield className="w-6 h-6" />,
    title: "Security Analysts",
    description: "SOC analysts, incident responders, and cybersecurity professionals seeking advanced training",
    color: "text-primary",
  },
  {
    icon: <Globe className="w-6 h-6" />,
    title: "Network Engineers",
    description: "BGP/routing specialists, DNS administrators, and infrastructure architects",
    color: "text-purple-400",
  },
  {
    icon: <Building className="w-6 h-6" />,
    title: "Government Officials",
    description: "CERT members, defense personnel, and critical infrastructure protection officers",
    color: "text-secondary",
  },
];

const applicationSteps = [
  {
    step: 1,
    icon: <ClipboardCheck className="w-8 h-8" />,
    title: "Apply Online",
    description: "Submit your application with professional background and career objectives",
    duration: "15 minutes",
  },
  {
    step: 2,
    icon: <UserCheck className="w-8 h-8" />,
    title: "KYC Verification",
    description: "Complete identity verification with government-issued ID documents",
    duration: "24-48 hours",
  },
  {
    step: 3,
    icon: <FileSearch className="w-8 h-8" />,
    title: "Application Review",
    description: "Our admissions committee reviews your profile and credentials",
    duration: "3-5 business days",
  },
  {
    step: 4,
    icon: <GraduationCap className="w-8 h-8" />,
    title: "Enrollment",
    description: "Receive acceptance and complete payment to secure your cohort seat",
    duration: "Upon acceptance",
  },
];

const feeStructure = [
  {
    program: "DDI Defense Certification",
    duration: "12 weeks",
    fee: "$4,999",
    earlyBird: "$4,499",
  },
  {
    program: "Sovereign Infrastructure Track",
    duration: "16 weeks",
    fee: "$6,999",
    earlyBird: "$6,299",
  },
  {
    program: "AI Immunity Specialist",
    duration: "10 weeks",
    fee: "$5,499",
    earlyBird: "$4,949",
  },
  {
    program: "Complete Security Suite",
    duration: "24 weeks",
    fee: "$12,999",
    earlyBird: "$11,699",
  },
];

const faqs = [
  {
    question: "What are the prerequisites for enrollment?",
    answer: "Candidates should have a minimum of 2 years experience in IT, networking, or cybersecurity. A bachelor's degree in a related field is preferred but not mandatory for experienced professionals.",
  },
  {
    question: "Is the program available online?",
    answer: "Yes, all our programs are delivered through a hybrid model with live virtual sessions, hands-on labs on our sovereign cloud infrastructure, and optional in-person workshops at our partner locations.",
  },
  {
    question: "What certifications will I receive?",
    answer: "Upon successful completion, you'll receive T-SPAN University certification, TCPWave Professional certification, and preparation for industry certifications like CISSP, CCNP Security, and AWS Security Specialty.",
  },
  {
    question: "Is there financial assistance available?",
    answer: "Yes, we offer employer sponsorship programs, installment payment plans, and scholarships for government employees and early-career professionals from underrepresented regions.",
  },
  {
    question: "What is the cohort size?",
    answer: "Each cohort is limited to 25 participants to ensure personalized attention, mentorship, and hands-on lab access. This allows for meaningful interaction with faculty and peers.",
  },
  {
    question: "Can I defer my enrollment?",
    answer: "Yes, accepted candidates can defer enrollment to the next available cohort (up to 6 months) without losing their application fee. Contact admissions for deferral requests.",
  },
];

export default function Admissions() {
  return (
    <div className="min-h-screen bg-slate-950 text-white overflow-x-hidden font-sans">
      <Navbar />
      
      {/* Hero Section */}
      <section className="pt-32 pb-20 relative overflow-hidden">
        <div className="absolute inset-0 bg-[linear-gradient(rgba(6,182,212,0.03)_1px,transparent_1px),linear-gradient(90deg,rgba(6,182,212,0.03)_1px,transparent_1px)] bg-[size:50px_50px]" />
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-primary/5 rounded-full blur-[150px]" />
        
        <div className="container mx-auto px-4 relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-center max-w-4xl mx-auto"
          >
            <div className="flex items-center justify-center gap-2 mb-4">
              <Shield className="w-5 h-5 text-primary animate-pulse" />
              <span className="text-primary font-mono text-xs uppercase tracking-[0.3em]" data-testid="text-admissions-badge">
                Join the Elite
              </span>
            </div>
            <h1 className="text-4xl md:text-6xl font-display font-bold text-white mb-6" data-testid="text-admissions-title">
              Begin Your Cyber Defense Journey
            </h1>
            <p className="text-slate-400 text-lg md:text-xl max-w-2xl mx-auto mb-8" data-testid="text-admissions-description">
              T-SPAN University welcomes exceptional IT professionals ready to master sovereign infrastructure security and become defenders of critical systems.
            </p>
            <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
              <Button
                size="lg"
                className="bg-primary hover:bg-primary/90 text-white font-bold shadow-[0_0_20px_rgba(6,182,212,0.4)] hover:shadow-[0_0_30px_rgba(6,182,212,0.6)] transition-all"
                onClick={() => document.getElementById("apply")?.scrollIntoView({ behavior: "smooth" })}
                data-testid="button-apply-now"
              >
                Apply Now <ArrowRight className="ml-2 w-4 h-4" />
              </Button>
              <Link href="/kyc">
                <Button variant="outline" size="lg" className="border-slate-700 hover:bg-slate-800" data-testid="button-kyc-link">
                  <UserCheck className="mr-2 w-4 h-4" /> Complete KYC
                </Button>
              </Link>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Cohort Info Banner */}
      <section className="py-6 bg-gradient-to-r from-primary/20 via-secondary/10 to-primary/20 border-y border-primary/30">
        <div className="container mx-auto px-4">
          <div className="flex flex-col md:flex-row items-center justify-center gap-6 md:gap-12 text-center" data-testid="section-cohort-info">
            <div className="flex items-center gap-2">
              <Calendar className="w-5 h-5 text-secondary" />
              <span className="text-white font-semibold">March 2025 Cohort</span>
            </div>
            <div className="flex items-center gap-2">
              <Users className="w-5 h-5 text-primary" />
              <span className="text-slate-300">Limited to 25 Seats</span>
            </div>
            <div className="flex items-center gap-2">
              <Lock className="w-5 h-5 text-secondary" />
              <span className="text-slate-300">Early Bird Ends: Feb 15, 2025</span>
            </div>
          </div>
        </div>
      </section>

      {/* Eligibility Section */}
      <section className="py-20 bg-slate-900/50">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-12"
          >
            <h2 className="text-3xl md:text-4xl font-display font-bold mb-4" data-testid="text-eligibility-title">
              Who Should <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary to-secondary">Apply</span>
            </h2>
            <p className="text-slate-400 max-w-2xl mx-auto">
              Our programs are designed for experienced professionals committed to mastering sovereign security infrastructure.
            </p>
          </motion.div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6" data-testid="section-eligibility">
            {eligibilityCategories.map((category, index) => (
              <motion.div
                key={category.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className="p-6 rounded-xl bg-slate-900 border border-slate-800 hover:border-primary/50 transition-all group"
                data-testid={`card-eligibility-${index}`}
              >
                <div className={`${category.color} mb-4 group-hover:scale-110 transition-transform`}>
                  {category.icon}
                </div>
                <h3 className="text-lg font-display font-bold text-white mb-2">{category.title}</h3>
                <p className="text-slate-400 text-sm">{category.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Application Process */}
      <section className="py-20 relative overflow-hidden" id="apply">
        <div className="absolute inset-0 bg-[linear-gradient(rgba(251,191,36,0.02)_1px,transparent_1px),linear-gradient(90deg,rgba(251,191,36,0.02)_1px,transparent_1px)] bg-[size:60px_60px]" />
        
        <div className="container mx-auto px-4 relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-3xl md:text-4xl font-display font-bold mb-4" data-testid="text-process-title">
              Application <span className="text-transparent bg-clip-text bg-gradient-to-r from-secondary to-primary">Process</span>
            </h2>
            <p className="text-slate-400 max-w-2xl mx-auto">
              Our streamlined admission process ensures qualified candidates can begin their journey efficiently.
            </p>
          </motion.div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8" data-testid="section-application-steps">
            {applicationSteps.map((step, index) => (
              <motion.div
                key={step.step}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.15 }}
                className="relative"
                data-testid={`step-${step.step}`}
              >
                {index < applicationSteps.length - 1 && (
                  <div className="hidden lg:block absolute top-12 left-[60%] w-full h-0.5 bg-gradient-to-r from-primary/50 to-transparent" />
                )}
                <div className="p-6 rounded-xl bg-slate-900/80 border border-slate-800 hover:border-secondary/50 transition-all text-center">
                  <div className="w-16 h-16 mx-auto mb-4 rounded-full bg-gradient-to-br from-primary/20 to-secondary/20 flex items-center justify-center text-primary">
                    {step.icon}
                  </div>
                  <div className="inline-block px-3 py-1 bg-secondary/20 rounded-full text-secondary text-xs font-mono mb-3">
                    Step {step.step}
                  </div>
                  <h3 className="text-xl font-display font-bold text-white mb-2">{step.title}</h3>
                  <p className="text-slate-400 text-sm mb-3">{step.description}</p>
                  <p className="text-primary text-xs font-mono">{step.duration}</p>
                </div>
              </motion.div>
            ))}
          </div>

          <div className="text-center mt-12">
            <Link href="/kyc">
              <Button size="lg" className="bg-secondary hover:bg-secondary/90 text-slate-900 font-bold" data-testid="button-start-kyc">
                <UserCheck className="mr-2 w-5 h-5" /> Start KYC Verification
              </Button>
            </Link>
          </div>
        </div>
      </section>

      {/* Fee Structure */}
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
              <span className="text-secondary font-mono text-xs uppercase tracking-[0.2em]">Investment</span>
            </div>
            <h2 className="text-3xl md:text-4xl font-display font-bold mb-4" data-testid="text-fees-title">
              Program <span className="text-transparent bg-clip-text bg-gradient-to-r from-secondary to-primary">Fees</span>
            </h2>
            <p className="text-slate-400 max-w-2xl mx-auto">
              Invest in your future with world-class training. Early bird discounts available for early applicants.
            </p>
          </motion.div>

          <div className="max-w-4xl mx-auto" data-testid="section-fee-structure">
            <div className="rounded-xl overflow-hidden border border-slate-800">
              <div className="grid grid-cols-4 gap-4 p-4 bg-slate-900 text-slate-400 text-sm font-mono uppercase tracking-wider">
                <div>Program</div>
                <div>Duration</div>
                <div>Standard Fee</div>
                <div>Early Bird</div>
              </div>
              {feeStructure.map((item, index) => (
                <motion.div
                  key={item.program}
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.1 }}
                  className="grid grid-cols-4 gap-4 p-4 border-t border-slate-800 hover:bg-slate-900/50 transition-colors"
                  data-testid={`fee-row-${index}`}
                >
                  <div className="text-white font-semibold">{item.program}</div>
                  <div className="text-slate-400">{item.duration}</div>
                  <div className="text-slate-400">{item.fee}</div>
                  <div className="text-secondary font-bold">{item.earlyBird}</div>
                </motion.div>
              ))}
            </div>

            <div className="mt-8 p-6 rounded-xl bg-gradient-to-br from-primary/10 to-secondary/5 border border-primary/30">
              <h3 className="text-lg font-display font-bold text-white mb-4">Payment Options</h3>
              <div className="grid sm:grid-cols-3 gap-4">
                <div className="flex items-start gap-3">
                  <CheckCircle2 className="w-5 h-5 text-primary mt-0.5" />
                  <div>
                    <p className="text-white font-medium">Full Payment</p>
                    <p className="text-slate-400 text-sm">5% additional discount</p>
                  </div>
                </div>
                <div className="flex items-start gap-3">
                  <CheckCircle2 className="w-5 h-5 text-primary mt-0.5" />
                  <div>
                    <p className="text-white font-medium">3-Part Installment</p>
                    <p className="text-slate-400 text-sm">Split over 3 months</p>
                  </div>
                </div>
                <div className="flex items-start gap-3">
                  <CheckCircle2 className="w-5 h-5 text-primary mt-0.5" />
                  <div>
                    <p className="text-white font-medium">Employer Sponsorship</p>
                    <p className="text-slate-400 text-sm">Invoice to organization</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* FAQs Section */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-12"
          >
            <h2 className="text-3xl md:text-4xl font-display font-bold mb-4" data-testid="text-faq-title">
              Frequently Asked <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary to-secondary">Questions</span>
            </h2>
          </motion.div>

          <div className="max-w-3xl mx-auto" data-testid="section-faqs">
            <Accordion type="single" collapsible className="space-y-4">
              {faqs.map((faq, index) => (
                <AccordionItem
                  key={index}
                  value={`item-${index}`}
                  className="bg-slate-900/60 border border-slate-800 rounded-xl px-6 data-[state=open]:border-primary/50"
                  data-testid={`faq-item-${index}`}
                >
                  <AccordionTrigger className="text-white hover:text-primary text-left py-5">
                    {faq.question}
                  </AccordionTrigger>
                  <AccordionContent className="text-slate-400 pb-5">
                    {faq.answer}
                  </AccordionContent>
                </AccordionItem>
              ))}
            </Accordion>
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
            <h2 className="text-3xl md:text-4xl font-display font-bold mb-6">
              Ready to Become a <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary to-secondary">Cyber Defender</span>?
            </h2>
            <p className="text-slate-400 max-w-xl mx-auto mb-8">
              Join the March 2025 cohort and start your transformation into an elite security professional.
            </p>
            <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
              <Link href="/kyc">
                <Button size="lg" className="bg-primary hover:bg-primary/90 text-white font-bold shadow-[0_0_20px_rgba(6,182,212,0.4)]" data-testid="button-cta-kyc">
                  Apply Now
                </Button>
              </Link>
              <Link href="/contact">
                <Button variant="outline" size="lg" className="border-slate-700 hover:bg-slate-800" data-testid="button-contact-admissions">
                  Contact Admissions
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
