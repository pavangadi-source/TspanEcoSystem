import { motion } from "framer-motion";
import { Link } from "wouter";
import PageLayout from "@/components/PageLayout";
import { Shield, Bug, Target, Code, CheckCircle, Clock, Users, Award, ArrowRight, Zap, Lock, Search, AlertTriangle, FileCode, Globe, Database, Server, Eye, Fingerprint, Key } from "lucide-react";

const courseModules = [
  {
    week: 1,
    title: "Introduction to Web Application Security",
    topics: [
      "Web Application Architecture & Attack Surface",
      "Understanding the Hacker Mindset",
      "Security Testing vs Functional Testing",
      "Legal & Ethical Considerations",
      "Setting Up Your Pentest Lab (Kali, Burp Suite)",
      "Introduction to OWASP Foundation",
    ],
  },
  {
    week: 2,
    title: "OWASP Top 10 - Part 1",
    topics: [
      "A01:2021 – Broken Access Control",
      "A02:2021 – Cryptographic Failures",
      "A03:2021 – Injection Attacks (SQL, NoSQL, OS)",
      "Hands-On: SQL Injection Exploitation",
      "Hands-On: Command Injection",
      "Defense Strategies & Secure Coding",
    ],
  },
  {
    week: 3,
    title: "OWASP Top 10 - Part 2",
    topics: [
      "A04:2021 – Insecure Design",
      "A05:2021 – Security Misconfiguration",
      "A06:2021 – Vulnerable & Outdated Components",
      "Hands-On: Exploiting Misconfigurations",
      "Dependency Scanning & SCA Tools",
      "Secure Architecture Principles",
    ],
  },
  {
    week: 4,
    title: "OWASP Top 10 - Part 3",
    topics: [
      "A07:2021 – Identification & Authentication Failures",
      "A08:2021 – Software & Data Integrity Failures",
      "A09:2021 – Security Logging & Monitoring Failures",
      "A10:2021 – Server-Side Request Forgery (SSRF)",
      "Hands-On: Authentication Bypass Techniques",
      "Hands-On: SSRF Exploitation",
    ],
  },
  {
    week: 5,
    title: "OWASP WSTG Methodology",
    topics: [
      "Web Security Testing Guide (WSTG) v4.2 Overview",
      "Information Gathering & Reconnaissance",
      "Configuration & Deployment Testing",
      "Identity Management Testing",
      "Authentication Testing Techniques",
      "Authorization Testing Methodologies",
    ],
  },
  {
    week: 6,
    title: "Session Management & Input Validation",
    topics: [
      "Session Management Testing (WSTG-SESS)",
      "Cookie Security Analysis",
      "Session Fixation & Hijacking",
      "Input Validation Testing (WSTG-INPV)",
      "Cross-Site Scripting (XSS) Deep Dive",
      "DOM-Based, Reflected & Stored XSS",
    ],
  },
  {
    week: 7,
    title: "Advanced Injection Attacks",
    topics: [
      "Advanced SQL Injection Techniques",
      "Blind SQL Injection & Time-Based Attacks",
      "NoSQL Injection (MongoDB, CouchDB)",
      "LDAP Injection",
      "XML External Entity (XXE) Attacks",
      "Template Injection (SSTI)",
    ],
  },
  {
    week: 8,
    title: "API Security Testing",
    topics: [
      "OWASP API Security Top 10",
      "REST API Vulnerability Assessment",
      "GraphQL Security Testing",
      "JWT Token Analysis & Attacks",
      "API Authentication Bypass",
      "Rate Limiting & Business Logic Flaws",
    ],
  },
  {
    week: 9,
    title: "Business Logic Vulnerabilities",
    topics: [
      "Understanding Business Logic Flaws",
      "WSTG Business Logic Testing",
      "Price Manipulation & Race Conditions",
      "Workflow Bypass Attacks",
      "Multi-Step Process Exploitation",
      "Real-World Case Studies",
    ],
  },
  {
    week: 10,
    title: "Client-Side Security",
    topics: [
      "Browser Security Mechanisms",
      "Content Security Policy (CSP) Analysis",
      "CORS Misconfiguration Exploitation",
      "Clickjacking & UI Redressing",
      "WebSocket Security Testing",
      "HTML5 Security Features",
    ],
  },
  {
    week: 11,
    title: "Tools & Automation",
    topics: [
      "Burp Suite Professional Mastery",
      "OWASP ZAP Advanced Usage",
      "Nuclei Templates & Automation",
      "Custom Script Development (Python)",
      "CI/CD Security Integration (DAST)",
      "Vulnerability Scanners Comparison",
    ],
  },
  {
    week: 12,
    title: "Penetration Testing Methodology",
    topics: [
      "PTES (Penetration Testing Execution Standard)",
      "SANS 25 Most Dangerous Software Errors",
      "Pre-Engagement & Scoping",
      "Reporting & Documentation",
      "Risk Rating (CVSS, OWASP Risk Rating)",
      "Remediation Guidance & Retesting",
    ],
  },
  {
    week: 13,
    title: "Advanced Exploitation Techniques",
    topics: [
      "Chaining Vulnerabilities",
      "Privilege Escalation via Web Apps",
      "File Upload Vulnerabilities",
      "Deserialization Attacks",
      "Memory Corruption in Web Apps",
      "Zero-Day Discovery Methodology",
    ],
  },
  {
    week: 14,
    title: "Capstone: Full Penetration Test",
    topics: [
      "Real-World Web Application Assessment",
      "Black-Box Testing Methodology",
      "Vulnerability Discovery & Exploitation",
      "Professional Report Writing",
      "Executive Summary & Technical Details",
      "Presentation & Defense",
    ],
  },
];

const methodologyStandards = [
  { name: "OWASP Top 10", desc: "Critical web security risks", icon: Shield },
  { name: "OWASP WSTG v4.2", desc: "Testing guide methodology", icon: FileCode },
  { name: "OWASP ASVS 4.0", desc: "Verification standard", icon: CheckCircle },
  { name: "SANS 25", desc: "Dangerous software errors", icon: AlertTriangle },
  { name: "PTES", desc: "Pentest execution standard", icon: Target },
  { name: "CVSS v3.1", desc: "Vulnerability scoring", icon: Zap },
];

const learningOutcomes = [
  "Master OWASP Top 10 vulnerability identification and exploitation",
  "Apply OWASP WSTG methodology for comprehensive security assessments",
  "Perform SQL injection, XSS, SSRF, and advanced attacks",
  "Conduct API security testing for REST and GraphQL endpoints",
  "Identify business logic vulnerabilities and race conditions",
  "Use Burp Suite Professional for manual and automated testing",
  "Write professional penetration test reports",
  "Implement CI/CD security scanning with DAST tools",
  "Understand secure coding practices and remediation strategies",
  "Prepare for CEH, OSCP, and eWPT certifications",
];

const prerequisites = [
  "Basic understanding of web technologies (HTML, CSS, JavaScript)",
  "Familiarity with HTTP protocol and REST APIs",
  "Basic Linux command line skills",
  "Programming basics (Python preferred)",
  "Enthusiasm for ethical hacking",
];

const tools = [
  { name: "Burp Suite Pro", category: "Proxy & Scanner" },
  { name: "OWASP ZAP", category: "Open Source Scanner" },
  { name: "SQLMap", category: "SQL Injection" },
  { name: "Nuclei", category: "Vulnerability Scanner" },
  { name: "Nmap", category: "Network Scanning" },
  { name: "Nikto", category: "Web Server Scanner" },
  { name: "Postman", category: "API Testing" },
  { name: "ffuf", category: "Fuzzing" },
];

const attackCategories = [
  { name: "Injection", count: "15+ techniques", color: "red" },
  { name: "Broken Auth", count: "10+ attacks", color: "orange" },
  { name: "XSS", count: "3 types", color: "yellow" },
  { name: "SSRF", count: "8+ bypasses", color: "purple" },
  { name: "Logic Flaws", count: "12+ patterns", color: "blue" },
  { name: "API Attacks", count: "10+ vectors", color: "cyan" },
];

export default function WebAppSecurityTesting() {
  return (
    <PageLayout
      title="Web Application Security Testing"
      subtitle="Master penetration testing with OWASP methodology and real-world exploitation techniques"
      badge="Professional Course"
      breadcrumbs={[
        { label: "Courses", href: "/courses" },
        { label: "Web App Security Testing" },
      ]}
    >
      <section className="py-12">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-4 gap-6 mb-12">
            {[
              { label: "Duration", value: "14 Weeks", icon: Clock },
              { label: "Level", value: "Intermediate", icon: Award },
              { label: "Format", value: "Live + Labs + CTF", icon: Users },
              { label: "Price", value: "₹85,000", icon: Zap },
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
                <item.icon className="w-8 h-8 text-red-400 mx-auto mb-3" />
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
                Course <span className="text-red-400">Overview</span>
              </h2>
              <p className="text-slate-400 mb-6">
                Security testing in web applications is the process of <strong className="text-white">emulating 
                hacker-style attacks</strong> on your web app to detect and analyze security vulnerabilities 
                that attackers could exploit. These applications are critical to business success and an 
                appealing target for hackers.
              </p>
              <p className="text-slate-400 mb-6">
                Web application security testing is the <strong className="text-white">proactive identification 
                of vulnerabilities</strong> that could result in the loss of sensitive user and financial 
                information. This comprehensive 14-week course teaches you to think like an attacker while 
                building defender skills.
              </p>
              <p className="text-slate-400 mb-6">
                Our methodology combines industry standards including <strong className="text-white">OWASP Top 10</strong>, 
                <strong className="text-white"> OWASP WSTG v4.2</strong>, <strong className="text-white">OWASP ASVS 4.0</strong>, 
                and <strong className="text-white">SANS 25</strong> to ensure comprehensive coverage of both 
                security vulnerabilities and business logic flaws.
              </p>

              <div className="bg-gradient-to-br from-red-500/10 to-orange-500/10 border border-red-500/30 rounded-xl p-6">
                <h4 className="text-lg font-bold text-white mb-4 flex items-center gap-2">
                  <Bug className="w-5 h-5 text-red-400" />
                  Attack Categories Covered
                </h4>
                <div className="grid grid-cols-2 gap-3">
                  {attackCategories.map((cat, i) => (
                    <div key={i} className="flex items-center gap-2">
                      <div className={`w-2 h-2 rounded-full bg-${cat.color}-500`} />
                      <span className="text-white text-sm font-medium">{cat.name}</span>
                      <span className="text-slate-500 text-xs">({cat.count})</span>
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
              <h3 className="text-xl font-display font-bold text-white mb-6">Learning Outcomes</h3>
              <ul className="space-y-3 mb-8">
                {learningOutcomes.map((outcome, i) => (
                  <li key={i} className="flex items-start gap-3 text-slate-300 text-sm">
                    <CheckCircle className="w-4 h-4 text-red-400 mt-0.5 flex-shrink-0" />
                    {outcome}
                  </li>
                ))}
              </ul>

              <div className="bg-gradient-to-br from-red-500/10 to-orange-500/10 border border-red-500/30 rounded-xl p-6">
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

      <section className="py-16 bg-gradient-to-br from-slate-900 to-slate-950">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-12"
          >
            <h2 className="text-3xl font-display font-bold text-white mb-4">
              Testing <span className="text-red-400">Methodology Standards</span>
            </h2>
            <p className="text-slate-400 max-w-2xl mx-auto">
              Comprehensive approach based on industry-recognized frameworks
            </p>
          </motion.div>

          <div className="grid md:grid-cols-3 lg:grid-cols-6 gap-4 mb-12">
            {methodologyStandards.map((standard, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.05 }}
                className="bg-slate-900/80 border border-slate-800 rounded-xl p-4 text-center hover:border-red-500/50 transition-all"
              >
                <standard.icon className="w-8 h-8 text-red-400 mx-auto mb-2" />
                <div className="text-white font-bold text-sm">{standard.name}</div>
                <div className="text-slate-500 text-xs">{standard.desc}</div>
              </motion.div>
            ))}
          </div>

          <div className="grid md:grid-cols-2 gap-8">
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="bg-slate-900/80 border border-red-500/30 rounded-2xl p-8"
            >
              <div className="flex items-center gap-4 mb-6">
                <div className="w-14 h-14 bg-gradient-to-br from-red-500 to-orange-500 rounded-xl flex items-center justify-center">
                  <Shield className="w-7 h-7 text-white" />
                </div>
                <div>
                  <h3 className="text-xl font-display font-bold text-white">OWASP Top 10 2021</h3>
                  <p className="text-red-400">Critical Security Risks</p>
                </div>
              </div>
              <ul className="space-y-2 text-slate-400 text-sm">
                <li className="flex items-center gap-2"><span className="text-red-400 font-mono">A01</span> Broken Access Control</li>
                <li className="flex items-center gap-2"><span className="text-red-400 font-mono">A02</span> Cryptographic Failures</li>
                <li className="flex items-center gap-2"><span className="text-red-400 font-mono">A03</span> Injection</li>
                <li className="flex items-center gap-2"><span className="text-red-400 font-mono">A04</span> Insecure Design</li>
                <li className="flex items-center gap-2"><span className="text-red-400 font-mono">A05</span> Security Misconfiguration</li>
                <li className="flex items-center gap-2"><span className="text-red-400 font-mono">A06-A10</span> + 5 more categories</li>
              </ul>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="bg-slate-900/80 border border-orange-500/30 rounded-2xl p-8"
            >
              <div className="flex items-center gap-4 mb-6">
                <div className="w-14 h-14 bg-gradient-to-br from-orange-500 to-yellow-500 rounded-xl flex items-center justify-center">
                  <Target className="w-7 h-7 text-white" />
                </div>
                <div>
                  <h3 className="text-xl font-display font-bold text-white">Tools Mastery</h3>
                  <p className="text-orange-400">Professional Toolkit</p>
                </div>
              </div>
              <div className="grid grid-cols-2 gap-3">
                {tools.map((tool, i) => (
                  <div key={i} className="bg-slate-950/50 rounded-lg p-3">
                    <div className="text-white font-medium text-sm">{tool.name}</div>
                    <div className="text-slate-500 text-xs">{tool.category}</div>
                  </div>
                ))}
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      <section className="py-16">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-12"
          >
            <h2 className="text-3xl font-display font-bold text-white mb-4">
              Penetration Testing <span className="text-primary">Methodology</span>
            </h2>
            <p className="text-slate-400 max-w-2xl mx-auto">
              On-premises and off-premises web application security testing services
            </p>
          </motion.div>

          <div className="grid md:grid-cols-5 gap-4 mb-12">
            {[
              { phase: "1", title: "Reconnaissance", desc: "Information gathering", icon: Search },
              { phase: "2", title: "Scanning", desc: "Vulnerability discovery", icon: Eye },
              { phase: "3", title: "Exploitation", desc: "Attack execution", icon: Bug },
              { phase: "4", title: "Post-Exploitation", desc: "Privilege escalation", icon: Key },
              { phase: "5", title: "Reporting", desc: "Documentation & fixes", icon: FileCode },
            ].map((step, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1 }}
                className="relative"
              >
                <div className="bg-slate-900/80 border border-slate-800 rounded-xl p-6 text-center hover:border-red-500/50 transition-all h-full">
                  <div className="w-12 h-12 bg-gradient-to-br from-red-500 to-orange-500 rounded-full flex items-center justify-center mx-auto mb-4 text-white font-bold">
                    {step.phase}
                  </div>
                  <step.icon className="w-6 h-6 text-red-400 mx-auto mb-2" />
                  <h4 className="text-white font-bold mb-1">{step.title}</h4>
                  <p className="text-slate-500 text-sm">{step.desc}</p>
                </div>
                {i < 4 && (
                  <div className="hidden md:block absolute top-1/2 -right-2 transform -translate-y-1/2 z-10">
                    <ArrowRight className="w-4 h-4 text-red-500/50" />
                  </div>
                )}
              </motion.div>
            ))}
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
              14-Week <span className="text-secondary">Curriculum</span>
            </h2>
            <p className="text-slate-400 max-w-2xl mx-auto">
              From OWASP fundamentals to advanced exploitation and professional reporting
            </p>
          </motion.div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-5">
            {courseModules.map((module, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.02 }}
                className="bg-slate-950/80 border border-slate-800 rounded-xl p-5 hover:border-red-500/50 transition-all"
              >
                <div className="flex items-center gap-3 mb-3">
                  <div className="w-10 h-10 bg-gradient-to-br from-red-500 to-orange-500 rounded-lg flex items-center justify-center text-white font-bold text-sm">
                    W{module.week}
                  </div>
                  <h3 className="text-sm font-display font-bold text-white leading-tight">{module.title}</h3>
                </div>
                <ul className="space-y-1">
                  {module.topics.map((topic, j) => (
                    <li key={j} className="flex items-start gap-2 text-slate-400 text-xs">
                      <Bug className="w-3 h-3 text-red-400 mt-0.5 flex-shrink-0" />
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
          <div className="grid md:grid-cols-2 gap-8 mb-12">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="bg-gradient-to-br from-red-500/10 to-orange-500/10 border border-red-500/30 rounded-2xl p-8"
            >
              <h3 className="text-xl font-display font-bold text-white mb-4">Hands-On Labs</h3>
              <ul className="space-y-3">
                {[
                  "OWASP WebGoat & Juice Shop exploitation",
                  "Custom vulnerable applications",
                  "Bug bounty simulation environments",
                  "CTF challenges after each module",
                  "Real-world application assessments",
                  "API security testing labs",
                ].map((item, i) => (
                  <li key={i} className="flex items-start gap-3 text-slate-300">
                    <CheckCircle className="w-5 h-5 text-red-400 mt-0.5 flex-shrink-0" />
                    {item}
                  </li>
                ))}
              </ul>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.1 }}
              className="bg-gradient-to-br from-orange-500/10 to-yellow-500/10 border border-orange-500/30 rounded-2xl p-8"
            >
              <h3 className="text-xl font-display font-bold text-white mb-4">Career Paths</h3>
              <ul className="space-y-3">
                {[
                  "Web Application Penetration Tester",
                  "Security Consultant",
                  "Bug Bounty Hunter",
                  "Application Security Engineer",
                  "Security Analyst (SOC)",
                  "DevSecOps Engineer",
                ].map((role, i) => (
                  <li key={i} className="flex items-start gap-3 text-slate-300">
                    <ArrowRight className="w-5 h-5 text-orange-400 mt-0.5 flex-shrink-0" />
                    {role}
                  </li>
                ))}
              </ul>
            </motion.div>
          </div>
        </div>
      </section>

      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="bg-gradient-to-r from-red-500/20 to-orange-500/20 border border-red-500/30 rounded-2xl p-8 md:p-12 text-center">
            <div className="flex justify-center mb-6">
              <div className="w-20 h-20 bg-gradient-to-br from-red-500 to-orange-500 rounded-xl flex items-center justify-center">
                <Shield className="w-10 h-10 text-white" />
              </div>
            </div>
            <h2 className="text-3xl font-display font-bold text-white mb-4">
              Become a Web Security Expert
            </h2>
            <p className="text-slate-300 max-w-2xl mx-auto mb-8">
              Master the art of ethical hacking with OWASP methodology. Find vulnerabilities 
              before attackers do and protect critical web applications.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link 
                href="/admissions"
                className="px-8 py-4 bg-red-500 text-white font-bold rounded-lg hover:bg-red-400 transition-all flex items-center gap-2 justify-center"
                data-testid="enroll-now-btn"
              >
                Enroll Now <ArrowRight className="w-5 h-5" />
              </Link>
              <Link 
                href="/courses"
                className="px-8 py-4 border border-slate-600 text-white font-bold rounded-lg hover:border-red-500/50 transition-all"
                data-testid="view-courses-btn"
              >
                View All Courses
              </Link>
            </div>
          </div>
        </div>
      </section>
    </PageLayout>
  );
}
