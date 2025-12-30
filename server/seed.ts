import { db } from "./db";
import { courses } from "@shared/schema";

const seedCourses = [
  {
    title: "DNS Security & TCPWave DDI",
    description: "Master DNS security fundamentals and TCPWave's DDI platform. Learn DNS tunneling detection, fast-flux network identification, and enterprise-grade DNS security operations.",
    category: "DNS Security",
    duration: "10 Weekends",
    price: 2500,
    level: "advanced" as const,
    imageUrl: "/attached_assets/generated_images/dns-security-visualization_af5e47c0.png",
    tags: ["DNS", "TCPWave", "DDI", "Cybersecurity"],
    curriculum: {
      weeks: [
        { title: "Week 1-2: DNS Architecture & TCPWave Fundamentals", topics: ["DNS protocol deep-dive", "TCPWave DDI setup", "Zone management"] },
        { title: "Week 3-4: DNS Threat Landscape", topics: ["DNS tunneling", "Fast-flux networks", "DDoS via DNS"] },
        { title: "Week 5-6: TCPWave Security Features", topics: ["DNSSEC implementation", "Response policy zones", "Threat intelligence feeds"] },
        { title: "Week 7-8: SOC Operations", topics: ["Real-time monitoring", "Incident response", "Forensics"] },
        { title: "Week 9-10: Capstone Project", topics: ["Live threat hunting", "Infrastructure hardening", "Final certification"] },
      ]
    },
    startDate: "March 2025",
    endDate: "May 2025",
  },
  {
    title: "AI-Powered Threat Hunting",
    description: "Leverage machine learning and AI to detect advanced persistent threats. Build ML models for anomaly detection, analyze network traffic patterns, and automate threat intelligence.",
    category: "AI & ML Security",
    duration: "10 Weekends",
    price: 2500,
    level: "advanced" as const,
    imageUrl: "/attached_assets/generated_images/ai-neural-network-cybersecurity_7c3d2f91.png",
    tags: ["AI", "Machine Learning", "Threat Hunting", "APT"],
    curriculum: {
      weeks: [
        { title: "Week 1-2: ML Fundamentals for Security", topics: ["Supervised/unsupervised learning", "Feature engineering", "Model evaluation"] },
        { title: "Week 3-4: Network Traffic Analysis", topics: ["Packet analysis", "Behavioral analytics", "Pattern recognition"] },
        { title: "Week 5-6: Anomaly Detection Systems", topics: ["IDS/IPS integration", "Real-time detection", "False positive reduction"] },
        { title: "Week 7-8: APT Detection", topics: ["Nation-state TTPs", "Command & control detection", "Lateral movement tracking"] },
        { title: "Week 9-10: Production Deployment", topics: ["MLOps pipelines", "Model monitoring", "Live SOC integration"] },
      ]
    },
    startDate: "March 2025",
    endDate: "May 2025",
  },
  {
    title: "Cloud Security & DevSecOps",
    description: "Secure cloud infrastructure across AWS, Azure, and GCP. Master container security, Kubernetes hardening, CI/CD pipeline protection, and infrastructure-as-code security.",
    category: "Cloud Security",
    duration: "10 Weekends",
    price: 2200,
    level: "intermediate" as const,
    imageUrl: "/attached_assets/generated_images/cyber-threat-hunting-dashboard_1a8b9e3f.png",
    tags: ["Cloud", "DevSecOps", "Kubernetes", "AWS", "Azure"],
    curriculum: {
      weeks: [
        { title: "Week 1-2: Cloud Architecture Security", topics: ["IAM best practices", "Network segmentation", "Encryption at rest/transit"] },
        { title: "Week 3-4: Container Security", topics: ["Docker hardening", "Image scanning", "Runtime protection"] },
        { title: "Week 5-6: Kubernetes Security", topics: ["Pod security policies", "RBAC", "Network policies", "Service mesh"] },
        { title: "Week 7-8: CI/CD Pipeline Security", topics: ["Supply chain security", "Secret management", "Code signing"] },
        { title: "Week 9-10: Infrastructure as Code", topics: ["Terraform security", "Policy as code", "Compliance automation"] },
      ]
    },
    startDate: "March 2025",
    endDate: "May 2025",
  },
  {
    title: "Penetration Testing & Red Teaming",
    description: "Learn offensive security techniques from reconnaissance to exploitation. Master web app testing, network penetration, privilege escalation, and report real vulnerabilities.",
    category: "Offensive Security",
    duration: "10 Weekends",
    price: 2200,
    level: "intermediate" as const,
    tags: ["Penetration Testing", "Red Team", "OSCP", "Exploitation"],
    curriculum: {
      weeks: [
        { title: "Week 1-2: Reconnaissance & Enumeration", topics: ["OSINT", "Subdomain enumeration", "Port scanning", "Service fingerprinting"] },
        { title: "Week 3-4: Web Application Testing", topics: ["OWASP Top 10", "SQLi", "XSS", "CSRF", "Authentication bypass"] },
        { title: "Week 5-6: Network Penetration", topics: ["Buffer overflows", "Exploit development", "Password attacks"] },
        { title: "Week 7-8: Post-Exploitation", topics: ["Privilege escalation", "Lateral movement", "Persistence", "Pivoting"] },
        { title: "Week 9-10: Red Team Operations", topics: ["C2 frameworks", "Evasion techniques", "Professional reporting"] },
      ]
    },
    startDate: "March 2025",
    endDate: "May 2025",
  },
  {
    title: "Incident Response & Forensics",
    description: "Become a cyber first responder. Learn malware analysis, memory forensics, disk forensics, and lead incident response operations in enterprise environments.",
    category: "Incident Response",
    duration: "10 Weekends",
    price: 1800,
    level: "intermediate" as const,
    tags: ["Incident Response", "Forensics", "Malware Analysis", "DFIR"],
    curriculum: {
      weeks: [
        { title: "Week 1-2: IR Fundamentals", topics: ["NIST framework", "Triage", "Evidence preservation", "Chain of custody"] },
        { title: "Week 3-4: Disk Forensics", topics: ["File system analysis", "Deleted file recovery", "Timeline analysis"] },
        { title: "Week 5-6: Memory Forensics", topics: ["Volatility framework", "Process analysis", "Rootkit detection"] },
        { title: "Week 7-8: Malware Analysis", topics: ["Static analysis", "Dynamic analysis", "Reverse engineering basics"] },
        { title: "Week 9-10: Live Incident Response", topics: ["Real breach scenarios", "Containment strategies", "Recovery operations"] },
      ]
    },
    startDate: "March 2025",
    endDate: "May 2025",
  },
  {
    title: "Zero Trust Architecture",
    description: "Design and implement zero trust security models. Learn identity-centric security, micro-segmentation, continuous verification, and modern perimeter-less architecture.",
    category: "Enterprise Security",
    duration: "10 Weekends",
    price: 1800,
    level: "advanced" as const,
    tags: ["Zero Trust", "Identity", "Architecture", "Enterprise"],
    curriculum: {
      weeks: [
        { title: "Week 1-2: Zero Trust Principles", topics: ["Never trust, always verify", "Least privilege access", "Assume breach"] },
        { title: "Week 3-4: Identity & Access Management", topics: ["MFA", "Conditional access", "Privileged access management"] },
        { title: "Week 5-6: Network Segmentation", topics: ["Micro-segmentation", "Software-defined perimeter", "SASE"] },
        { title: "Week 7-8: Data Protection", topics: ["DLP", "Encryption", "Data classification", "Rights management"] },
        { title: "Week 9-10: Implementation", topics: ["Migration strategies", "ROI analysis", "Vendor selection"] },
      ]
    },
    startDate: "March 2025",
    endDate: "May 2025",
  },
];

export async function seedDatabase() {
  try {
    console.log("Seeding database with courses...");
    
    for (const course of seedCourses) {
      await db.insert(courses).values(course).onConflictDoNothing();
    }
    
    console.log(`✅ Seeded ${seedCourses.length} courses`);
  } catch (error) {
    console.error("Error seeding database:", error);
    throw error;
  }
}

// Run seed function
seedDatabase()
  .then(() => {
    console.log("Database seeding completed!");
    process.exit(0);
  })
  .catch((error) => {
    console.error("Database seeding failed:", error);
    process.exit(1);
  });
