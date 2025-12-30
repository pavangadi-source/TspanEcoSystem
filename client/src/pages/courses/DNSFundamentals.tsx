import { motion } from "framer-motion";
import { Link } from "wouter";
import PageLayout from "@/components/PageLayout";
import { Globe, Server, Shield, Lock, Database, Zap, CheckCircle, Clock, Users, Award, ArrowRight, Network } from "lucide-react";

const courseModules = [
  {
    week: 1,
    title: "DNS Protocol Foundations",
    topics: [
      "DNS Architecture and Hierarchy (Root, TLD, Authoritative)",
      "Resource Record Types (A, AAAA, CNAME, MX, TXT, SRV, PTR)",
      "Recursive vs Authoritative Resolution",
      "DNS Message Format and Packet Analysis",
      "Zone Files and Zone Transfers (AXFR/IXFR)",
    ],
  },
  {
    week: 2,
    title: "DNS Resolution Deep Dive",
    topics: [
      "Iterative vs Recursive Query Resolution",
      "Caching Mechanisms and TTL Management",
      "Negative Caching (NXDOMAIN, NODATA)",
      "DNS Forwarding and Conditional Forwarding",
      "Split-Horizon DNS Architecture",
    ],
  },
  {
    week: 3,
    title: "DNSSEC Implementation",
    topics: [
      "Public Key Cryptography for DNS",
      "RRSIG, DNSKEY, DS, and NSEC Records",
      "Key Signing Key (KSK) and Zone Signing Key (ZSK)",
      "Chain of Trust from Root to Domain",
      "DNSSEC Validation and Troubleshooting",
    ],
  },
  {
    week: 4,
    title: "DNS Security Threats & Mitigation",
    topics: [
      "Cache Poisoning and Kaminsky Attack",
      "DNS Amplification and DDoS Attacks",
      "DNS Tunneling Detection (Data Exfiltration)",
      "Typosquatting and Domain Hijacking",
      "Response Rate Limiting (RRL)",
    ],
  },
  {
    week: 5,
    title: "Enterprise DNS with TCPWave",
    topics: [
      "TCPWave IPAM DNS Management Console",
      "Primary, Secondary, and Stealth DNS Servers",
      "DNS Views and Access Control Lists",
      "High Availability and Failover Configuration",
      "DNS Firewall and RPZ (Response Policy Zones)",
    ],
  },
  {
    week: 6,
    title: "Modern DNS Protocols",
    topics: [
      "DNS over HTTPS (DoH) and DNS over TLS (DoT)",
      "EDNS Client Subnet (ECS) for CDN Optimization",
      "DNS-Based Service Discovery",
      "Multicast DNS (mDNS) and Link-Local Names",
      "DNS Performance Monitoring and Analytics",
    ],
  },
  {
    week: 7,
    title: "DNS Troubleshooting Lab",
    topics: [
      "dig, nslookup, and delv Command Mastery",
      "Wireshark DNS Packet Analysis",
      "BIND and TCPWave Log Analysis",
      "Common DNS Failures and Resolution",
      "Performance Tuning and Optimization",
    ],
  },
  {
    week: 8,
    title: "Capstone: Enterprise DNS Deployment",
    topics: [
      "Multi-Site DNS Architecture Design",
      "GSLB and Geographic Load Balancing",
      "Disaster Recovery Planning",
      "Compliance and Audit Logging",
      "Final Project Presentation",
    ],
  },
];

const courseStats = [
  { value: "1000+", label: "Billion Queries Served by TCPWave" },
  { value: "102", label: "Countries Trust TCPWave" },
  { value: "99.999%", label: "Uptime SLA" },
  { value: "50ms", label: "Avg Response Time" },
];

const learningOutcomes = [
  "Design and implement enterprise DNS infrastructure from scratch",
  "Configure and troubleshoot DNSSEC for secure name resolution",
  "Detect and mitigate DNS-based attacks including tunneling and amplification",
  "Deploy TCPWave DNS management for high-availability environments",
  "Implement DNS security best practices including RPZ and firewall rules",
  "Master DNS troubleshooting with industry-standard tools",
  "Understand modern DNS protocols (DoH, DoT, ECS)",
];

const prerequisites = [
  "Basic networking knowledge (TCP/IP, OSI model)",
  "Linux command line proficiency",
  "Understanding of client-server architecture",
];

export default function DNSFundamentals() {
  return (
    <PageLayout
      title="DNS Fundamentals & Enterprise Security"
      subtitle="Master the backbone of the internet with TCPWave's world-class DNS infrastructure"
      badge="Foundation Course"
      breadcrumbs={[
        { label: "Courses", href: "/courses" },
        { label: "DNS Fundamentals" },
      ]}
    >
      <section className="py-12">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-4 gap-6 mb-12">
            {[
              { label: "Duration", value: "8 Weeks", icon: Clock },
              { label: "Level", value: "Beginner", icon: Award },
              { label: "Format", value: "Live + Labs", icon: Users },
              { label: "Price", value: "₹55,000", icon: Zap },
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
                <item.icon className="w-8 h-8 text-primary mx-auto mb-3" />
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
              <h2 className="text-3xl font-display font-bold text-white mb-6">
                Course <span className="text-primary">Overview</span>
              </h2>
              <p className="text-slate-400 mb-6">
                DNS is the backbone of the internet, translating human-readable domain names into IP addresses 
                billions of times per second globally. This comprehensive course takes you from DNS fundamentals 
                to enterprise-grade security implementations using TCPWave's industry-leading DDI platform.
              </p>
              <p className="text-slate-400 mb-6">
                You'll gain hands-on experience with TCPWave infrastructure that serves over 1000+ billion DNS 
                queries across 102 countries. Learn to design, deploy, secure, and troubleshoot DNS systems 
                that power critical infrastructure worldwide.
              </p>

              <div className="grid grid-cols-2 gap-4 mb-8">
                {courseStats.map((stat, i) => (
                  <div key={i} className="bg-gradient-to-br from-blue-500/10 to-cyan-500/10 border border-blue-500/30 rounded-lg p-4 text-center">
                    <div className="text-2xl font-bold text-white">{stat.value}</div>
                    <div className="text-slate-400 text-sm">{stat.label}</div>
                  </div>
                ))}
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
            >
              <h3 className="text-xl font-display font-bold text-white mb-6">Learning Outcomes</h3>
              <ul className="space-y-3 mb-8">
                {learningOutcomes.map((outcome, i) => (
                  <li key={i} className="flex items-start gap-3 text-slate-300">
                    <CheckCircle className="w-5 h-5 text-green-400 mt-0.5 flex-shrink-0" />
                    {outcome}
                  </li>
                ))}
              </ul>

              <div className="bg-gradient-to-br from-cyan-500/10 to-blue-500/10 border border-cyan-500/30 rounded-xl p-6">
                <h4 className="text-lg font-bold text-white mb-3">Prerequisites</h4>
                <ul className="text-slate-400 text-sm space-y-2">
                  {prerequisites.map((req, i) => (
                    <li key={i}>• {req}</li>
                  ))}
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
              Course <span className="text-secondary">Curriculum</span>
            </h2>
            <p className="text-slate-400 max-w-2xl mx-auto">
              8 weeks of intensive training with hands-on labs on live TCPWave infrastructure
            </p>
          </motion.div>

          <div className="grid md:grid-cols-2 gap-6">
            {courseModules.map((module, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.05 }}
                className="bg-slate-950/80 border border-slate-800 rounded-xl p-6 hover:border-primary/50 transition-all"
              >
                <div className="flex items-center gap-4 mb-4">
                  <div className="w-12 h-12 bg-gradient-to-br from-blue-500 to-cyan-500 rounded-lg flex items-center justify-center text-white font-bold">
                    W{module.week}
                  </div>
                  <h3 className="text-lg font-display font-bold text-white">{module.title}</h3>
                </div>
                <ul className="space-y-2">
                  {module.topics.map((topic, j) => (
                    <li key={j} className="flex items-start gap-2 text-slate-400 text-sm">
                      <Globe className="w-4 h-4 text-primary mt-0.5 flex-shrink-0" />
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
          <div className="bg-gradient-to-r from-blue-500/20 to-cyan-500/20 border border-blue-500/30 rounded-2xl p-8 md:p-12 text-center">
            <h2 className="text-3xl font-display font-bold text-white mb-4">
              Ready to Master DNS?
            </h2>
            <p className="text-slate-300 max-w-2xl mx-auto mb-8">
              Join the next cohort and learn from practitioners who manage DNS infrastructure 
              serving billions of queries across 102 countries.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link href="/admissions">
                <button className="px-8 py-4 bg-primary text-slate-950 font-bold rounded-lg hover:bg-primary/90 transition-all flex items-center gap-2 justify-center">
                  Enroll Now <ArrowRight className="w-5 h-5" />
                </button>
              </Link>
              <Link href="/courses">
                <button className="px-8 py-4 border border-slate-600 text-white font-bold rounded-lg hover:border-primary/50 transition-all">
                  View All Courses
                </button>
              </Link>
            </div>
          </div>
        </div>
      </section>
    </PageLayout>
  );
}
