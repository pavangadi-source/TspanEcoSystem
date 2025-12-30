import { motion } from "framer-motion";
import { Link } from "wouter";
import PageLayout from "@/components/PageLayout";
import { Award, Network, Shield, Settings, Server, Zap, CheckCircle, Clock, Users, ArrowRight, Database, Globe } from "lucide-react";

const courseModules = [
  {
    week: 1,
    title: "TCPWave Platform Fundamentals",
    topics: [
      "TCPWave Architecture and Components",
      "Installation and Initial Configuration",
      "Web Console Navigation and Features",
      "User Interface Best Practices",
      "Licensing and Activation",
    ],
  },
  {
    week: 2,
    title: "DNS Administration",
    topics: [
      "DNS Zone Management (Primary, Secondary, Stub)",
      "Resource Record Administration",
      "Views and Access Control",
      "DNSSEC Configuration",
      "DNS Template Management",
    ],
  },
  {
    week: 3,
    title: "DHCP Administration",
    topics: [
      "DHCP Scope Configuration",
      "Reservations and Options",
      "Failover Setup",
      "Lease Management and Monitoring",
      "DHCP Relay Configuration",
    ],
  },
  {
    week: 4,
    title: "IPAM Administration",
    topics: [
      "Network Container Hierarchy",
      "Block and Subnet Management",
      "IP Address Lifecycle",
      "Discovery and Reconciliation",
      "IPAM Reporting",
    ],
  },
  {
    week: 5,
    title: "System Administration",
    topics: [
      "User and Group Management",
      "Role-Based Access Control (RBAC)",
      "Backup and Restore Procedures",
      "High Availability Configuration",
      "Log Management and Monitoring",
    ],
  },
  {
    week: 6,
    title: "Certification Exam Preparation",
    topics: [
      "Exam Format and Objectives",
      "Practice Exams and Labs",
      "Troubleshooting Scenarios",
      "Best Practices Review",
      "Certification Exam",
    ],
  },
];

const certificationBenefits = [
  "Official TCPWave Certified Administrator credential",
  "Recognition in TCPWave partner directory",
  "Access to certified-only resources and updates",
  "Priority support channel access",
  "Digital badge for LinkedIn and professional profiles",
];

const examDetails = [
  { label: "Format", value: "60 Multiple Choice + Lab" },
  { label: "Duration", value: "3 Hours" },
  { label: "Passing Score", value: "70%" },
  { label: "Validity", value: "2 Years" },
];

export default function TCPWaveAdmin() {
  return (
    <PageLayout
      title="TCPWave Certified Administrator"
      subtitle="Official certification for TCPWave DDI platform administration"
      badge="Certification"
      breadcrumbs={[
        { label: "Courses", href: "/courses" },
        { label: "TCPWave Administrator" },
      ]}
    >
      <section className="py-12">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-4 gap-6 mb-12">
            {[
              { label: "Duration", value: "6 Weeks", icon: Clock },
              { label: "Level", value: "Intermediate", icon: Award },
              { label: "Format", value: "Live + Labs + Exam", icon: Users },
              { label: "Price", value: "₹75,000", icon: Zap },
            ].map((item, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1 }}
                className="bg-slate-900/50 border border-slate-800 rounded-xl p-6 text-center"
                data-testid={`course-stat-${i}`}
              >
                <item.icon className="w-8 h-8 text-secondary mx-auto mb-3" />
                <div className="text-slate-400 text-sm">{item.label}</div>
                <div className="text-xl font-bold text-white">{item.value}</div>
              </motion.div>
            ))}
          </div>

          <div className="grid lg:grid-cols-2 gap-12">
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
            >
              <div className="flex items-center gap-4 mb-6">
                <div className="w-16 h-16 bg-gradient-to-br from-secondary to-amber-400 rounded-xl flex items-center justify-center">
                  <Award className="w-8 h-8 text-slate-950" />
                </div>
                <div>
                  <h2 className="text-2xl font-display font-bold text-white">Official Certification</h2>
                  <p className="text-secondary">TCPWave Certified Administrator (TCA)</p>
                </div>
              </div>
              
              <p className="text-slate-400 mb-6">
                The TCPWave Certified Administrator (TCA) certification validates your ability to 
                deploy, configure, and manage TCPWave DDI infrastructure. This is the foundational 
                certification for IT professionals working with TCPWave platforms.
              </p>
              <p className="text-slate-400 mb-6">
                TCPWave's DDI platform powers critical infrastructure in 102 countries, serving 
                over 1000+ billion DNS queries. As a certified administrator, you'll be qualified 
                to manage enterprise-grade DDI deployments.
              </p>

              <div className="bg-gradient-to-br from-secondary/10 to-amber-500/10 border border-secondary/30 rounded-xl p-6 mb-6">
                <h4 className="text-lg font-bold text-white mb-4">Exam Details</h4>
                <div className="grid grid-cols-2 gap-4">
                  {examDetails.map((detail, i) => (
                    <div key={i}>
                      <div className="text-slate-400 text-sm">{detail.label}</div>
                      <div className="text-white font-bold">{detail.value}</div>
                    </div>
                  ))}
                </div>
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
            >
              <h3 className="text-xl font-display font-bold text-white mb-6">Certification Benefits</h3>
              <ul className="space-y-3 mb-8">
                {certificationBenefits.map((benefit, i) => (
                  <li key={i} className="flex items-start gap-3 text-slate-300">
                    <CheckCircle className="w-5 h-5 text-secondary mt-0.5 flex-shrink-0" />
                    {benefit}
                  </li>
                ))}
              </ul>

              <div className="bg-gradient-to-br from-primary/10 to-blue-500/10 border border-primary/30 rounded-xl p-6">
                <h4 className="text-lg font-bold text-white mb-3">Prerequisites</h4>
                <ul className="text-slate-400 text-sm space-y-2">
                  <li>• Basic networking knowledge</li>
                  <li>• Understanding of DNS and DHCP concepts</li>
                  <li>• Linux command line proficiency</li>
                  <li>• Recommended: DNS/DHCP foundation courses</li>
                </ul>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      <section className="py-16 bg-slate-900/50">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-12"
          >
            <h2 className="text-3xl font-display font-bold text-white mb-4">
              Training <span className="text-secondary">Curriculum</span>
            </h2>
            <p className="text-slate-400 max-w-2xl mx-auto">
              6 weeks of intensive training covering all exam objectives
            </p>
          </motion.div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {courseModules.map((module, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.05 }}
                className="bg-slate-950/80 border border-slate-800 rounded-xl p-6 hover:border-secondary/50 transition-all"
              >
                <div className="flex items-center gap-4 mb-4">
                  <div className="w-12 h-12 bg-gradient-to-br from-secondary to-amber-400 rounded-lg flex items-center justify-center text-slate-950 font-bold">
                    W{module.week}
                  </div>
                  <h3 className="text-lg font-display font-bold text-white">{module.title}</h3>
                </div>
                <ul className="space-y-2">
                  {module.topics.map((topic, j) => (
                    <li key={j} className="flex items-start gap-2 text-slate-400 text-sm">
                      <Settings className="w-4 h-4 text-secondary mt-0.5 flex-shrink-0" />
                      {topic}
                    </li>
                  ))}
                </ul>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="bg-gradient-to-r from-secondary/20 to-amber-500/20 border border-secondary/30 rounded-2xl p-8 md:p-12 text-center">
            <div className="flex justify-center mb-6">
              <div className="w-20 h-20 bg-gradient-to-br from-secondary to-amber-400 rounded-xl flex items-center justify-center">
                <Award className="w-10 h-10 text-slate-950" />
              </div>
            </div>
            <h2 className="text-3xl font-display font-bold text-white mb-4">
              Get TCPWave Certified
            </h2>
            <p className="text-slate-300 max-w-2xl mx-auto mb-8">
              Join the elite group of TCPWave Certified Administrators managing critical infrastructure worldwide.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link href="/admissions">
                <button className="px-8 py-4 bg-secondary text-slate-950 font-bold rounded-lg hover:bg-secondary/90 transition-all flex items-center gap-2 justify-center">
                  Enroll Now <ArrowRight className="w-5 h-5" />
                </button>
              </Link>
              <Link href="/courses/tcpwave-architect">
                <button className="px-8 py-4 border border-slate-600 text-white font-bold rounded-lg hover:border-secondary/50 transition-all">
                  View Architect Certification
                </button>
              </Link>
            </div>
          </div>
        </div>
      </section>
    </PageLayout>
  );
}
