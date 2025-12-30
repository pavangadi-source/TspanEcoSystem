import { motion } from "framer-motion";
import { ArrowRight, GraduationCap, Award, Briefcase, CheckCircle } from "lucide-react";
import { Link } from "wouter";
import PageLayout from "@/components/PageLayout";

const pathways = [
  {
    icon: GraduationCap,
    title: "I'm a Student",
    description: "Starting your cybersecurity journey? Explore our degree programs and certifications.",
    cta: "View Programs",
    href: "/programs",
    color: "from-blue-500 to-indigo-600"
  },
  {
    icon: Briefcase,
    title: "I'm a Professional",
    description: "Level up your skills with advanced certifications and hands-on training.",
    cta: "Browse Courses",
    href: "/courses",
    color: "from-purple-500 to-pink-600"
  },
  {
    icon: Award,
    title: "I'm an Employer",
    description: "Train your security teams with customized enterprise programs.",
    cta: "Corporate Training",
    href: "/corporate",
    color: "from-cyan-500 to-teal-600"
  },
];

const steps = [
  { step: "1", title: "Create Account", description: "Sign up with your email or Replit account" },
  { step: "2", title: "Explore Programs", description: "Browse courses and find your learning path" },
  { step: "3", title: "Enroll & Learn", description: "Start learning with hands-on labs and expert instruction" },
  { step: "4", title: "Get Certified", description: "Earn industry-recognized certifications" },
];

export default function GetStarted() {
  return (
    <PageLayout
      title="Get Started"
      subtitle="Begin your cybersecurity journey with T-SPAN University"
      badge="Start Here"
      breadcrumbs={[{ label: "Get Started" }]}
    >
      <section className="py-20">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-3xl md:text-4xl font-display font-bold text-white mb-4">
              Choose Your <span className="text-primary">Path</span>
            </h2>
          </motion.div>

          <div className="grid md:grid-cols-3 gap-8 mb-20">
            {pathways.map((path, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1 }}
              >
                <Link href={path.href}>
                  <div 
                    className="relative bg-slate-900/50 border border-slate-800 rounded-2xl p-8 h-full hover:border-primary/50 transition-all cursor-pointer group overflow-hidden"
                    data-testid={`card-pathway-${i}`}
                  >
                    <div className={`absolute top-0 left-0 w-full h-1 bg-gradient-to-r ${path.color}`} />
                    <path.icon className="w-16 h-16 text-primary mb-6 group-hover:scale-110 transition-transform" />
                    <h3 className="text-2xl font-display font-bold text-white mb-3">{path.title}</h3>
                    <p className="text-slate-400 mb-6">{path.description}</p>
                    <div className="flex items-center gap-2 text-primary font-medium">
                      {path.cta} <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
                    </div>
                  </div>
                </Link>
              </motion.div>
            ))}
          </div>

          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-12"
          >
            <h2 className="text-3xl md:text-4xl font-display font-bold text-white mb-4">
              How It <span className="text-secondary">Works</span>
            </h2>
          </motion.div>

          <div className="grid md:grid-cols-4 gap-6">
            {steps.map((step, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1 }}
                className="text-center"
              >
                <div className="w-16 h-16 rounded-full bg-primary/10 border-2 border-primary flex items-center justify-center mx-auto mb-4">
                  <span className="text-2xl font-display font-bold text-primary">{step.step}</span>
                </div>
                <h4 className="text-lg font-display font-bold text-white mb-2">{step.title}</h4>
                <p className="text-slate-400 text-sm">{step.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-20 bg-gradient-to-r from-primary/10 to-secondary/10 border-y border-slate-800">
        <div className="container mx-auto px-4 text-center">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            <h2 className="text-3xl font-display font-bold text-white mb-6">
              Ready to Begin?
            </h2>
            <p className="text-slate-400 max-w-2xl mx-auto mb-8">
              Create your free account and explore our courses. No credit card required.
            </p>
            <Link href="/login">
              <button 
                className="px-8 py-4 bg-primary text-slate-950 font-bold rounded-lg hover:bg-primary/90 transition-colors text-lg"
                data-testid="button-create-account"
              >
                Create Free Account
              </button>
            </Link>
          </motion.div>
        </div>
      </section>
    </PageLayout>
  );
}
