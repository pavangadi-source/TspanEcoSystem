import { db } from "./db";
import { courses } from "@shared/schema";

const extendedCourses = [
  // DDI & Infrastructure Courses
  {
    title: "TCPWave DDI Mastery: DNS, DHCP, IPAM",
    description: "Deep dive into TCPWave's industry-leading DDI platform. Master DNS resolution, DHCP management, and IP address lifecycle at enterprise scale. Learn to deploy, configure, and secure DDI infrastructure for Fortune 500 environments.",
    category: "Infrastructure",
    duration: "8 Weekends",
    price: 2800,
    level: "advanced" as const,
    imageUrl: "/attached_assets/generated_images/dns-security-visualization_af5e47c0.png",
    tags: ["TCPWave", "DDI", "DNS", "DHCP", "IPAM", "Infrastructure"],
    curriculum: {
      weeks: [
        { title: "Week 1: TCPWave Architecture & Installation", topics: ["Platform overview", "Deployment models", "High availability setup"] },
        { title: "Week 2: DNS Fundamentals & Security", topics: ["Zone management", "DNSSEC", "Response policy zones (RPZ)"] },
        { title: "Week 3: DHCP & Address Management", topics: ["DHCP pools", "Reservations", "Failover configurations"] },
        { title: "Week 4: IPAM Deep Dive", topics: ["IP lifecycle", "Subnet planning", "Address space optimization"] },
        { title: "Week 5-6: Advanced Security Features", topics: ["Threat intelligence feeds", "Fast-flux detection", "DNS tunneling prevention"] },
        { title: "Week 7-8: Production Deployment & Operations", topics: ["Monitoring", "Troubleshooting", "Performance tuning", "Disaster recovery"] },
      ]
    },
    startDate: "March 2025",
    endDate: "May 2025",
  },
  {
    title: "ADC Engineering: F5, HAProxy, Nginx Plus",
    description: "Master Application Delivery Controllers for modern infrastructure. Learn load balancing algorithms, SSL/TLS offloading, traffic management, and high-availability architectures using F5 BIG-IP, HAProxy, and Nginx Plus.",
    category: "Infrastructure",
    duration: "8 Weekends",
    price: 2600,
    level: "intermediate" as const,
    tags: ["ADC", "Load Balancing", "F5", "HAProxy", "Nginx", "High Availability"],
    curriculum: {
      weeks: [
        { title: "Week 1: ADC Fundamentals & Architecture", topics: ["Layer 4 vs Layer 7 load balancing", "Health checks", "Session persistence"] },
        { title: "Week 2: F5 BIG-IP Configuration", topics: ["Virtual servers", "Pools", "iRules scripting"] },
        { title: "Week 3: HAProxy Advanced Features", topics: ["ACLs", "Stick tables", "Backend switching"] },
        { title: "Week 4: Nginx Plus & Reverse Proxy", topics: ["Upstream groups", "Rate limiting", "Caching strategies"] },
        { title: "Week 5: SSL/TLS Offloading & Security", topics: ["Certificate management", "Cipher suites", "Perfect forward secrecy"] },
        { title: "Week 6-7: High Availability & Scaling", topics: ["Active-passive vs active-active", "Geographic load balancing", "Auto-scaling"] },
        { title: "Week 8: Production Operations", topics: ["Monitoring", "Troubleshooting", "Performance optimization"] },
      ]
    },
    startDate: "March 2025",
    endDate: "May 2025",
  },
  
  // Automation & Orchestration
  {
    title: "Infrastructure Automation: Ansible & Terraform",
    description: "Automate infrastructure deployment and configuration management at scale. Master Ansible for configuration management and Terraform for infrastructure as code. Build CI/CD pipelines for infrastructure changes.",
    category: "Operations",
    duration: "8 Weekends",
    price: 2400,
    level: "intermediate" as const,
    tags: ["Ansible", "Terraform", "IaC", "Automation", "DevOps"],
    curriculum: {
      weeks: [
        { title: "Week 1: Ansible Fundamentals", topics: ["Playbooks", "Inventory", "Modules", "Roles"] },
        { title: "Week 2: Ansible Advanced Patterns", topics: ["Dynamic inventory", "Vault secrets", "Custom modules"] },
        { title: "Week 3: Terraform Basics", topics: ["HCL syntax", "Providers", "Resources", "State management"] },
        { title: "Week 4: Terraform Advanced", topics: ["Modules", "Workspaces", "Remote state", "Sentinel policies"] },
        { title: "Week 5: Multi-Cloud Automation", topics: ["AWS", "Azure", "GCP", "Hybrid cloud patterns"] },
        { title: "Week 6: GitOps & CI/CD Integration", topics: ["Pipeline automation", "Testing infrastructure code", "Atlantis"] },
        { title: "Week 7-8: Real-World Projects", topics: ["DDI automation", "Network device configuration", "Compliance as code"] },
      ]
    },
    startDate: "March 2025",
    endDate: "May 2025",
  },
  {
    title: "ServiceNow IT Operations & Integration",
    description: "Leverage ServiceNow for IT operations management, incident response automation, and CMDB integration. Build custom workflows, integrate with security tools, and automate SOC operations using ServiceNow platform.",
    category: "Operations",
    duration: "6 Weekends",
    price: 2200,
    level: "intermediate" as const,
    tags: ["ServiceNow", "ITSM", "Automation", "CMDB", "Integration"],
    curriculum: {
      weeks: [
        { title: "Week 1: ServiceNow Platform Fundamentals", topics: ["Platform overview", "CMDB", "Service catalog"] },
        { title: "Week 2: Incident & Problem Management", topics: ["Workflow automation", "SLA management", "Escalations"] },
        { title: "Week 3: Integration Hub & REST APIs", topics: ["External integrations", "API development", "Authentication"] },
        { title: "Week 4: Security Operations Integration", topics: ["Vulnerability management", "Threat intelligence feeds", "SIEM integration"] },
        { title: "Week 5-6: Custom Applications & Automation", topics: ["Flow Designer", "Custom workflows", "Orchestration", "Real-world SOC automation"] },
      ]
    },
    startDate: "March 2025",
    endDate: "May 2025",
  },

  // Network Engineering
  {
    title: "Dual-Stack Network Engineering: IPv4/IPv6",
    description: "Master dual-stack network architecture for modern infrastructure. Learn IPv6 fundamentals, migration strategies, security implications, and operational considerations for running IPv4 and IPv6 simultaneously.",
    category: "Architecture",
    duration: "6 Weekends",
    price: 2000,
    level: "advanced" as const,
    tags: ["IPv6", "IPv4", "Dual Stack", "Network Architecture", "Migration"],
    curriculum: {
      weeks: [
        { title: "Week 1: IPv6 Fundamentals", topics: ["Addressing", "ICMPv6", "Neighbor discovery", "SLAAC vs DHCPv6"] },
        { title: "Week 2: Dual-Stack Architecture", topics: ["Transition mechanisms", "6to4", "NAT64", "DS-Lite"] },
        { title: "Week 3: Routing & BGP for IPv6", topics: ["OSPFv3", "BGP4+", "Route aggregation"] },
        { title: "Week 4: Security Considerations", topics: ["IPv6 threats", "Extension headers", "Firewall policies"] },
        { title: "Week 5-6: Migration & Operations", topics: ["Migration planning", "Dual-stack deployment", "Monitoring", "Troubleshooting"] },
      ]
    },
    startDate: "March 2025",
    endDate: "May 2025",
  },
  {
    title: "Advanced BGP & Routing Security",
    description: "Deep dive into Border Gateway Protocol security, route hijacking prevention, and sovereign internet infrastructure. Learn RPKI, BGP FlowSpec, and techniques used by nation-states to secure routing infrastructure.",
    category: "Architecture",
    duration: "8 Weekends",
    price: 2600,
    level: "advanced" as const,
    tags: ["BGP", "Routing", "RPKI", "Network Security", "Sovereign Infrastructure"],
    curriculum: {
      weeks: [
        { title: "Week 1-2: BGP Fundamentals & Operations", topics: ["BGP path selection", "Attributes", "Communities", "AS-PATH manipulation"] },
        { title: "Week 3: BGP Security Threats", topics: ["Route hijacking", "Prefix hijacking", "AS spoofing", "Real-world incidents"] },
        { title: "Week 4: RPKI Implementation", topics: ["ROA creation", "Origin validation", "RPKI deployment"] },
        { title: "Week 5: BGP FlowSpec", topics: ["DDoS mitigation", "Traffic filtering", "FlowSpec rules"] },
        { title: "Week 6-7: Sovereign Routing Architecture", topics: ["National routing policies", "IXP design", "Peering strategies"] },
        { title: "Week 8: Operations & Monitoring", topics: ["BGP monitoring tools", "Route leak detection", "Incident response"] },
      ]
    },
    startDate: "March 2025",
    endDate: "May 2025",
  },
  {
    title: "Deep Packet Analysis & Network Forensics",
    description: "Master packet-level network analysis using Wireshark, tcpdump, and Zeek. Learn to identify malicious traffic patterns, perform protocol analysis, and conduct network forensics investigations.",
    category: "AI Security",
    duration: "6 Weekends",
    price: 2000,
    level: "intermediate" as const,
    tags: ["Packet Analysis", "Wireshark", "Zeek", "Network Forensics", "Traffic Analysis"],
    curriculum: {
      weeks: [
        { title: "Week 1: Packet Analysis Fundamentals", topics: ["TCP/IP deep dive", "Wireshark basics", "Capture filters"] },
        { title: "Week 2: Protocol Analysis", topics: ["HTTP/HTTPS", "DNS", "TLS/SSL", "Application protocols"] },
        { title: "Week 3: Zeek (Bro) Network Security Monitor", topics: ["Zeek scripting", "Log analysis", "Custom detections"] },
        { title: "Week 4: Malicious Traffic Detection", topics: ["C2 communications", "Data exfiltration", "Lateral movement"] },
        { title: "Week 5-6: Network Forensics", topics: ["PCAP analysis", "Timeline reconstruction", "Evidence collection", "Reporting"] },
      ]
    },
    startDate: "March 2025",
    endDate: "May 2025",
  },

  // Threat Intelligence
  {
    title: "MISP Threat Intelligence Platform Mastery",
    description: "Deploy and operate MISP (Malware Information Sharing Platform) for threat intelligence sharing. Learn to correlate IOCs, build automated feeds, integrate with SIEM/SOAR, and participate in sharing communities.",
    category: "AI Security",
    duration: "6 Weekends",
    price: 2200,
    level: "intermediate" as const,
    tags: ["MISP", "Threat Intelligence", "IOC", "Information Sharing", "STIX/TAXII"],
    curriculum: {
      weeks: [
        { title: "Week 1: MISP Installation & Configuration", topics: ["Platform setup", "Organizations", "Sharing groups"] },
        { title: "Week 2: Event Management & Correlation", topics: ["Creating events", "Attributes", "Correlation engine"] },
        { title: "Week 3: Feeds & Automation", topics: ["Feed management", "Auto-import", "Custom feeds", "API integration"] },
        { title: "Week 4: STIX/TAXII Integration", topics: ["STIX format", "TAXII servers", "Information exchange"] },
        { title: "Week 5-6: Operational Intelligence", topics: ["SIEM integration", "SOAR playbooks", "Threat hunting", "Community participation"] },
      ]
    },
    startDate: "March 2025",
    endDate: "May 2025",
  },
  {
    title: "Apache Kafka for Security Operations",
    description: "Build real-time security data pipelines using Apache Kafka. Learn to stream logs, events, and telemetry data at scale. Integrate Kafka with SIEM, EDR, and analytics platforms for real-time threat detection.",
    category: "Operations",
    duration: "6 Weekends",
    price: 2000,
    level: "intermediate" as const,
    tags: ["Kafka", "Stream Processing", "Real-Time Analytics", "SOC", "Data Pipeline"],
    curriculum: {
      weeks: [
        { title: "Week 1: Kafka Architecture & Fundamentals", topics: ["Brokers", "Topics", "Partitions", "Producers", "Consumers"] },
        { title: "Week 2: Kafka Deployment & Operations", topics: ["Cluster setup", "Zookeeper", "Replication", "Performance tuning"] },
        { title: "Week 3: Security Event Streaming", topics: ["Log ingestion", "Event enrichment", "Schema registry"] },
        { title: "Week 4: Stream Processing with Kafka Streams", topics: ["Real-time processing", "Windowing", "Aggregations"] },
        { title: "Week 5-6: SOC Integration", topics: ["SIEM connectors", "Alert pipelines", "Threat feed streaming", "Incident response automation"] },
      ]
    },
    startDate: "March 2025",
    endDate: "May 2025",
  },

  // Specialized Security Courses
  {
    title: "Sovereign Cloud Architecture & Design",
    description: "Design and build sovereign cloud infrastructure that complies with data localization laws. Learn air-gapped deployment, national security requirements, and build infrastructure independent of foreign cloud providers.",
    category: "Enterprise Security",
    duration: "8 Weekends",
    price: 2800,
    level: "advanced" as const,
    tags: ["Sovereign Cloud", "Data Localization", "Air-Gap", "National Security", "Compliance"],
    curriculum: {
      weeks: [
        { title: "Week 1-2: Sovereign Cloud Principles", topics: ["Data sovereignty", "Regulatory landscape", "National requirements"] },
        { title: "Week 3: Infrastructure Design", topics: ["Air-gapped networks", "On-premise deployment", "Hybrid models"] },
        { title: "Week 4: Identity & Access Management", topics: ["National ID integration", "Sovereign authentication", "Federation"] },
        { title: "Week 5: Data Protection & Encryption", topics: ["Sovereign encryption", "Key management", "Data classification"] },
        { title: "Week 6-7: Compliance & Audit", topics: ["Regulatory frameworks", "Audit trails", "Evidence collection"] },
        { title: "Week 8: Operations & Incident Response", topics: ["Sovereign SOC", "National CERT integration", "Cross-border incidents"] },
      ]
    },
    startDate: "March 2025",
    endDate: "May 2025",
  },
  {
    title: "DNS Exfiltration & Covert Channels Detection",
    description: "Advanced course on detecting and preventing DNS-based data exfiltration and covert communication channels. Learn techniques used by APT groups and build detection systems using ML and behavioral analysis.",
    category: "DNS Security",
    duration: "6 Weekends",
    price: 2400,
    level: "advanced" as const,
    tags: ["DNS Security", "Data Exfiltration", "Covert Channels", "APT", "Detection"],
    curriculum: {
      weeks: [
        { title: "Week 1: DNS Exfiltration Techniques", topics: ["Tunneling protocols", "Encoding schemes", "Real-world case studies"] },
        { title: "Week 2: Fast-Flux Networks & DGA", topics: ["Domain generation algorithms", "Fast-flux detection", "C2 infrastructure"] },
        { title: "Week 3: Behavioral Analysis", topics: ["Baseline modeling", "Anomaly detection", "Statistical analysis"] },
        { title: "Week 4: Machine Learning Detection", topics: ["Feature engineering", "Classification models", "Real-time detection"] },
        { title: "Week 5-6: Defense Implementation", topics: ["RPZ deployment", "Sinkholing", "Threat intelligence integration", "SOC playbooks"] },
      ]
    },
    startDate: "March 2025",
    endDate: "May 2025",
  },
  
  // Strategic Leadership Course
  {
    title: "Cyber Strategy & National Security Leadership",
    description: "Bridge the gap between compliance-focused 'doing cyber' and operational excellence of 'being cyber'. Master strategic thinking required for positioning India as a global cybersecurity leader. Prepare to advise C-suite executives, government bodies (CERT-In, NCIIPC, DRDO), and shape national cyber policy.",
    category: "Enterprise Security",
    duration: "10 Weekends",
    price: 3500,
    level: "advanced" as const,
    tags: ["Cyber Strategy", "National Security", "Leadership", "Policy", "C-Suite", "CERT-In", "DRDO"],
    curriculum: {
      weeks: [
        { title: "Week 1: From Compliance to Capability", topics: ["The 'doing cyber' vs 'being cyber' paradigm", "Moving beyond checklists and audits", "Building operational muscle memory", "Why certification alone fails"] },
        { title: "Week 2: India's Cyber Landscape & Inflection Point", topics: ["Current state of Indian cybersecurity", "Gap analysis: where India stands globally", "Indigenous capability vs. imported solutions", "Learning from Israel's Unit 8200 and US Cyber Command"] },
        { title: "Week 3: Building Sovereign Cyber Capability", topics: ["Reducing dependence on foreign technology", "Developing indigenous threat intelligence", "Public-private partnerships for cyber resilience", "CERT-In, NCIIPC, and DRDO collaboration models"] },
        { title: "Week 4: Strategic Threat Assessment", topics: ["Nation-state threat actors targeting India", "Critical infrastructure protection priorities", "Supply chain security imperatives", "Cross-border cyber operations framework"] },
        { title: "Week 5: C-Suite Cyber Communication", topics: ["Translating technical risk to business impact", "Board-level cyber reporting", "ROI frameworks for security investments", "Building executive buy-in for cyber initiatives"] },
        { title: "Week 6: Policy & Regulatory Mastery", topics: ["IT Act 2000 and amendments", "DPDP Act 2023 implications", "Sectoral regulations (RBI, SEBI, IRDAI)", "International frameworks: GDPR, NIS2, CISA"] },
        { title: "Week 7: Incident Response at National Scale", topics: ["Coordinating multi-stakeholder response", "Government notification requirements", "Media and public communication", "Post-incident strategic recovery"] },
        { title: "Week 8: Global Cyber Diplomacy", topics: ["India's role in international cyber forums", "UN GGE and cyber norms", "Bilateral cyber agreements", "Tech transfer and intelligence sharing"] },
        { title: "Week 9: Case Studies - Strategic Failures & Successes", topics: ["Colonial Pipeline: operational vs. IT security", "SolarWinds: supply chain implications", "Kudankulam: critical infrastructure protection", "Estonian cyber warfare lessons"] },
        { title: "Week 10: Capstone - Strategic Advisory Project", topics: ["Develop national cyber strategy proposal", "Present to advisory panel", "Defend recommendations", "Receive feedback from industry and government leaders"] },
      ]
    },
    startDate: "March 2025",
    endDate: "June 2025",
  },
  
  // India-Focused Threat Intelligence
  {
    title: "India-Focused Threat Intelligence & APT Tracking",
    description: "Deep dive into threat actors specifically targeting Indian organizations. Study APT groups like Sidewinder, Bitter, and Transparent Tribe. Build intelligence capabilities aligned with CERT-In advisories and national threat landscape.",
    category: "AI Security",
    duration: "8 Weekends",
    price: 2800,
    level: "advanced" as const,
    tags: ["Threat Intelligence", "APT", "India", "CERT-In", "Nation-State", "Attribution"],
    curriculum: {
      weeks: [
        { title: "Week 1: India's Threat Landscape Overview", topics: ["Geopolitical context", "Primary adversaries", "Target sectors", "Attack trends 2020-2025"] },
        { title: "Week 2: Pakistan-Origin APT Groups", topics: ["Transparent Tribe (APT36)", "Sidewinder campaigns", "Targeting patterns", "TTPs and indicators"] },
        { title: "Week 3: China-Nexus Threat Actors", topics: ["APT41 operations", "Mustang Panda", "Supply chain targeting", "Critical infrastructure focus"] },
        { title: "Week 4: Attribution Methodology", topics: ["Infrastructure analysis", "Code similarity", "Operational patterns", "False flag detection"] },
        { title: "Week 5: CERT-In Intelligence Operationalization", topics: ["Advisory analysis", "Indicator integration", "Reporting requirements", "Collaboration protocols"] },
        { title: "Week 6: Building India-Centric Threat Feeds", topics: ["Open source collection", "Private sharing communities", "Sector-specific intelligence", "Regional threat sharing"] },
        { title: "Week 7-8: Threat Hunting Operations", topics: ["Hypothesis development", "Hunt playbooks for Indian context", "Live exercises", "Reporting and escalation"] },
      ]
    },
    startDate: "March 2025",
    endDate: "May 2025",
  },
];

export async function seedExtendedCourses() {
  try {
    console.log("Seeding extended course catalog...");
    
    for (const course of extendedCourses) {
      await db.insert(courses).values(course).onConflictDoNothing();
    }
    
    console.log(`✅ Seeded ${extendedCourses.length} additional specialized courses`);
  } catch (error) {
    console.error("Error seeding extended courses:", error);
    throw error;
  }
}

// Run seed function
seedExtendedCourses()
  .then(() => {
    console.log("Extended course seeding completed!");
    process.exit(0);
  })
  .catch((error) => {
    console.error("Extended course seeding failed:", error);
    process.exit(1);
  });
