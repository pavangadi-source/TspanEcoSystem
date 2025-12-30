import { motion } from "framer-motion";
import { Link } from "wouter";
import PageLayout from "@/components/PageLayout";
import { Brain, Network, Shield, Bot, Database, Zap, CheckCircle, Clock, Users, Award, ArrowRight, Cpu, Globe, Server, Eye, Workflow, Sparkles } from "lucide-react";

const courseModules = [
  {
    week: 1,
    title: "Foundations of Agentic AI",
    topics: [
      "What is Agentic AI? Goal-Driven Autonomous Systems",
      "Evolution from Rule-Based to AI-Driven Automation",
      "Key Characteristics: Autonomy, Reasoning, Planning, Action",
      "Multi-Agent Systems (MAS) Architecture",
      "TMF Autonomy Levels: From Level 0 to Level 5",
      "Comparison: Traditional ML vs LLM-Powered Agents",
    ],
  },
  {
    week: 2,
    title: "LLM Foundations for Network Engineers",
    topics: [
      "Large Language Models (LLMs) Primer",
      "Prompt Engineering for Network Operations",
      "Retrieval Augmented Generation (RAG) for Network Docs",
      "Function Calling and Tool Use in LLMs",
      "Fine-Tuning vs In-Context Learning Trade-offs",
      "Model Selection: GPT-4, Claude, Llama for Network Tasks",
    ],
  },
  {
    week: 3,
    title: "NetMoniAI Architecture Deep Dive",
    topics: [
      "Texas Tech University NetMoniAI Framework Overview",
      "Two-Tier Hybrid Architecture: Distributed + Centralized",
      "Node-Level Micro-Agents: Packet Capture & Anomaly Detection",
      "Central Controller AI Agent: Cross-Node Correlation",
      "Four-Layer Agent Stack: Service, Agent, Memory, LLM",
      "Asynchronous Design for Low-Latency Detection",
    ],
  },
  {
    week: 4,
    title: "Building Network Micro-Agents",
    topics: [
      "Microservices Architecture for Network Monitoring",
      "Packet Capture Integration (pcap, Scapy, dpkt)",
      "Real-Time Traffic Analysis Techniques",
      "Local Anomaly Detection Algorithms",
      "Memory Store Design: Short-Term Event History",
      "Agent Communication Protocols",
    ],
  },
  {
    week: 5,
    title: "LLM-Powered Threat Detection",
    topics: [
      "Semantic Reasoning for Network Events",
      "DDoS Attack Classification with AI",
      "Coordinated Attack Pattern Recognition",
      "Human-Readable Alert Generation",
      "False Positive Reduction Strategies",
      "Explainable AI for SOC Operators",
    ],
  },
  {
    week: 6,
    title: "Central Orchestration & Correlation",
    topics: [
      "Aggregating Insights from Distributed Agents",
      "Cross-Node Attack Pattern Detection",
      "System-Wide Situational Awareness",
      "Alert Correlation and Deduplication",
      "Escalation Logic and Severity Scoring",
      "Dashboard Design for Network Operations",
    ],
  },
  {
    week: 7,
    title: "Enterprise Agentic AI Platforms",
    topics: [
      "IBM Network Intelligence Architecture",
      "Ericsson rApps and RAN Intelligent Controller",
      "Blue Planet Agentic AI Framework (Ciena)",
      "Infovista Intent-Driven Agents",
      "Persistent NetSynX Multi-Agent System",
      "Vendor Comparison and Selection Criteria",
    ],
  },
  {
    week: 8,
    title: "Autonomous Network Operations",
    topics: [
      "Self-Healing Networks: Detection to Remediation",
      "Self-Optimization: Dynamic Resource Allocation",
      "Self-Configuration: Automated Provisioning",
      "Intent-Based Networking with Natural Language",
      "Closed-Loop Operations Architecture",
      "MTTR Reduction Strategies",
    ],
  },
  {
    week: 9,
    title: "Multi-Agent Orchestration",
    topics: [
      "Agent Coordination Frameworks",
      "Monitoring, Planner, and Executor Agents",
      "Knowledge Base Agent Design",
      "ONAP Integration for API-Driven Recovery",
      "Managing Dependencies in Complex Workflows",
      "Agent-to-Agent Communication Patterns",
    ],
  },
  {
    week: 10,
    title: "Security & Trust in Agentic Systems",
    topics: [
      "AI Agent Security Attack Surfaces",
      "Prompt Injection and Manipulation Defense",
      "API and Connector Security",
      "Governance Frameworks for Autonomous Actions",
      "Explainability and Audit Trails",
      "Gradual Autonomy: From Advisor to Executor",
    ],
  },
  {
    week: 11,
    title: "Hands-On Lab: Building NetMoniAI",
    topics: [
      "Setting Up Python Agent Environment",
      "Implementing Node-Level Micro-Agent",
      "LLM Integration with OpenAI/Anthropic APIs",
      "NS-3 Network Simulation for Testing",
      "Central Controller Implementation",
      "Real-Time Dashboard Development",
    ],
  },
  {
    week: 12,
    title: "Capstone: Enterprise Deployment",
    topics: [
      "Production Architecture Design",
      "Scaling Agents Across Distributed Networks",
      "Integration with Existing SOC Tools",
      "Performance Benchmarking",
      "Final Project Presentation",
      "Industry Panel and Career Pathways",
    ],
  },
];

const courseStats = [
  { value: "NetMoniAI", label: "Texas Tech Framework" },
  { value: "Level 5", label: "TMF Autonomy Target" },
  { value: "80%", label: "Downtime Reduction" },
  { value: "LLM+MAS", label: "Hybrid Architecture" },
];

const learningOutcomes = [
  "Understand agentic AI principles and TMF autonomy levels for networks",
  "Master the NetMoniAI two-tier hybrid architecture from Texas Tech",
  "Build distributed micro-agents for real-time network monitoring",
  "Implement LLM-powered threat detection with human-readable alerts",
  "Design central orchestration for cross-node attack correlation",
  "Deploy multi-agent systems for autonomous network operations",
  "Integrate agentic AI with enterprise platforms (IBM, Ericsson, Ciena)",
  "Implement security and governance for autonomous network actions",
  "Create self-healing, self-optimizing network infrastructure",
];

const prerequisites = [
  "Strong networking fundamentals (TCP/IP, routing, switching)",
  "Python programming proficiency",
  "Basic machine learning concepts",
  "Familiarity with REST APIs and microservices",
  "Understanding of network security principles",
];

const researchTeam = [
  { name: "Pallavi Zambare", role: "Lead Researcher" },
  { name: "Venkata Nikhil Thanikella", role: "Co-Author" },
  { name: "Nikhil Padmanabh Kottur", role: "Co-Author" },
  { name: "Sree Akhil Akula", role: "Co-Author" },
  { name: "Ying Liu", role: "Faculty Advisor" },
];

const industryPlatforms = [
  { name: "IBM Network Intelligence", focus: "Analytical + Reasoning AI" },
  { name: "Ericsson rApps", focus: "RAN Intelligent Controller" },
  { name: "Blue Planet (Ciena)", focus: "Telecom OSS Automation" },
  { name: "Infovista", focus: "Intent-Driven Agents" },
  { name: "Persistent NetSynX", focus: "Level 4 Autonomy" },
];

export default function AgenticAINetworking() {
  return (
    <PageLayout
      title="Agentic AI in Network Engineering"
      subtitle="Master autonomous network monitoring with Texas Tech's NetMoniAI framework"
      badge="Expert Course"
      breadcrumbs={[
        { label: "Courses", href: "/courses" },
        { label: "Agentic AI Networking" },
      ]}
    >
      <section className="py-12">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-4 gap-6 mb-12">
            {[
              { label: "Duration", value: "12 Weeks", icon: Clock },
              { label: "Level", value: "Expert", icon: Award },
              { label: "Format", value: "Live + Labs + Project", icon: Users },
              { label: "Price", value: "₹1,50,000", icon: Zap },
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
                <item.icon className="w-8 h-8 text-cyan-400 mx-auto mb-3" />
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
                Course <span className="text-cyan-400">Overview</span>
              </h2>
              <p className="text-slate-400 mb-6">
                Agentic AI represents a paradigm shift in network engineering—from rule-based automation 
                to intelligent, autonomous systems that can reason, plan, and act independently. This 
                comprehensive 12-week course teaches you to build and deploy AI agents for network 
                monitoring, security, and operations.
              </p>
              <p className="text-slate-400 mb-6">
                You'll master the <strong className="text-white">NetMoniAI framework</strong> developed 
                by Texas Tech University researchers, which combines distributed micro-agents at network 
                nodes with a centralized AI controller for comprehensive threat detection and response.
              </p>
              <p className="text-slate-400 mb-6">
                The industry is moving toward TMF Level 5 autonomous networks where infrastructure 
                self-configures, self-optimizes, and self-heals in real-time. This course prepares 
                you to lead that transformation.
              </p>

              <div className="grid grid-cols-2 gap-4 mb-8">
                {courseStats.map((stat, i) => (
                  <div key={i} className="bg-gradient-to-br from-cyan-500/10 to-blue-500/10 border border-cyan-500/30 rounded-lg p-4 text-center">
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
                    <CheckCircle className="w-5 h-5 text-cyan-400 mt-0.5 flex-shrink-0" />
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

      <section className="py-16 bg-gradient-to-br from-slate-900 to-slate-950">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-12"
          >
            <h2 className="text-3xl font-display font-bold text-white mb-4">
              NetMoniAI <span className="text-cyan-400">Framework</span>
            </h2>
            <p className="text-slate-400 max-w-3xl mx-auto">
              Developed by Texas Tech University, NetMoniAI is an open-source agentic AI framework 
              for network security and monitoring. It combines distributed edge intelligence with 
              centralized LLM-powered reasoning.
            </p>
          </motion.div>

          <div className="grid md:grid-cols-2 gap-8 mb-12">
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="bg-slate-900/80 border border-cyan-500/30 rounded-2xl p-8"
            >
              <div className="flex items-center gap-4 mb-6">
                <div className="w-14 h-14 bg-gradient-to-br from-cyan-500 to-blue-500 rounded-xl flex items-center justify-center">
                  <Network className="w-7 h-7 text-white" />
                </div>
                <div>
                  <h3 className="text-xl font-display font-bold text-white">Node-Level Micro-Agents</h3>
                  <p className="text-cyan-400">Distributed Intelligence</p>
                </div>
              </div>
              <ul className="space-y-3 text-slate-400">
                <li className="flex items-start gap-2">
                  <Cpu className="w-5 h-5 text-cyan-400 mt-0.5 flex-shrink-0" />
                  Lightweight autonomous microservices at each network node
                </li>
                <li className="flex items-start gap-2">
                  <Eye className="w-5 h-5 text-cyan-400 mt-0.5 flex-shrink-0" />
                  Real-time packet capture and traffic analysis
                </li>
                <li className="flex items-start gap-2">
                  <Shield className="w-5 h-5 text-cyan-400 mt-0.5 flex-shrink-0" />
                  Local anomaly detection without centralized rules
                </li>
                <li className="flex items-start gap-2">
                  <Brain className="w-5 h-5 text-cyan-400 mt-0.5 flex-shrink-0" />
                  LLM-powered reasoning for threat classification
                </li>
              </ul>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="bg-slate-900/80 border border-purple-500/30 rounded-2xl p-8"
            >
              <div className="flex items-center gap-4 mb-6">
                <div className="w-14 h-14 bg-gradient-to-br from-purple-500 to-pink-500 rounded-xl flex items-center justify-center">
                  <Bot className="w-7 h-7 text-white" />
                </div>
                <div>
                  <h3 className="text-xl font-display font-bold text-white">Central Controller Agent</h3>
                  <p className="text-purple-400">Orchestrated Intelligence</p>
                </div>
              </div>
              <ul className="space-y-3 text-slate-400">
                <li className="flex items-start gap-2">
                  <Workflow className="w-5 h-5 text-purple-400 mt-0.5 flex-shrink-0" />
                  Aggregates insights from all node-level agents
                </li>
                <li className="flex items-start gap-2">
                  <Globe className="w-5 h-5 text-purple-400 mt-0.5 flex-shrink-0" />
                  Detects coordinated attacks across multiple nodes
                </li>
                <li className="flex items-start gap-2">
                  <Sparkles className="w-5 h-5 text-purple-400 mt-0.5 flex-shrink-0" />
                  GPT-O3 powered semantic analysis and correlation
                </li>
                <li className="flex items-start gap-2">
                  <Server className="w-5 h-5 text-purple-400 mt-0.5 flex-shrink-0" />
                  System-wide situational awareness and response
                </li>
              </ul>
            </motion.div>
          </div>

          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="bg-slate-900/50 border border-slate-700 rounded-2xl p-8"
          >
            <h3 className="text-xl font-display font-bold text-white mb-6 text-center">Research Team - Texas Tech University</h3>
            <div className="flex flex-wrap justify-center gap-6">
              {researchTeam.map((member, i) => (
                <div key={i} className="text-center">
                  <div className="w-16 h-16 bg-gradient-to-br from-cyan-500/20 to-blue-500/20 border border-cyan-500/30 rounded-full flex items-center justify-center mx-auto mb-2">
                    <span className="text-cyan-400 font-bold text-lg">{member.name.split(' ').map(n => n[0]).join('')}</span>
                  </div>
                  <div className="text-white font-medium text-sm">{member.name}</div>
                  <div className="text-slate-500 text-xs">{member.role}</div>
                </div>
              ))}
            </div>
            <div className="text-center mt-6">
              <a 
                href="https://arxiv.org/abs/2508.10052" 
                target="_blank" 
                rel="noopener noreferrer"
                className="text-cyan-400 hover:text-cyan-300 text-sm underline"
              >
                Read the Research Paper: arXiv:2508.10052
              </a>
            </div>
          </motion.div>
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
              Industry <span className="text-secondary">Platforms</span>
            </h2>
            <p className="text-slate-400 max-w-2xl mx-auto">
              Learn the commercial agentic AI platforms transforming enterprise network operations
            </p>
          </motion.div>

          <div className="grid md:grid-cols-5 gap-4 mb-12">
            {industryPlatforms.map((platform, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.05 }}
                className="bg-slate-900/50 border border-slate-800 rounded-xl p-4 text-center hover:border-secondary/50 transition-all"
              >
                <div className="text-white font-bold text-sm mb-1">{platform.name}</div>
                <div className="text-slate-500 text-xs">{platform.focus}</div>
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
              12-Week <span className="text-secondary">Curriculum</span>
            </h2>
            <p className="text-slate-400 max-w-2xl mx-auto">
              From AI foundations to enterprise deployment with hands-on labs
            </p>
          </motion.div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {courseModules.map((module, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.03 }}
                className="bg-slate-950/80 border border-slate-800 rounded-xl p-6 hover:border-cyan-500/50 transition-all"
              >
                <div className="flex items-center gap-4 mb-4">
                  <div className="w-12 h-12 bg-gradient-to-br from-cyan-500 to-blue-500 rounded-lg flex items-center justify-center text-white font-bold">
                    W{module.week}
                  </div>
                  <h3 className="text-md font-display font-bold text-white leading-tight">{module.title}</h3>
                </div>
                <ul className="space-y-1.5">
                  {module.topics.map((topic, j) => (
                    <li key={j} className="flex items-start gap-2 text-slate-400 text-xs">
                      <Brain className="w-3 h-3 text-cyan-400 mt-0.5 flex-shrink-0" />
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
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="bg-gradient-to-br from-green-500/10 to-emerald-500/10 border border-green-500/30 rounded-2xl p-8"
            >
              <h3 className="text-xl font-display font-bold text-white mb-4">Autonomous Capabilities</h3>
              <ul className="space-y-3">
                {[
                  { title: "Self-Healing", desc: "Proactive detection and automated remediation" },
                  { title: "Self-Optimization", desc: "Dynamic resource allocation in real-time" },
                  { title: "Self-Configuration", desc: "Automated provisioning and deployment" },
                  { title: "80% Downtime Reduction", desc: "Through proactive AI measures" },
                ].map((item, i) => (
                  <li key={i} className="flex items-start gap-3">
                    <CheckCircle className="w-5 h-5 text-green-400 mt-0.5 flex-shrink-0" />
                    <div>
                      <span className="text-white font-medium">{item.title}</span>
                      <span className="text-slate-400 text-sm ml-2">{item.desc}</span>
                    </div>
                  </li>
                ))}
              </ul>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="bg-gradient-to-br from-amber-500/10 to-orange-500/10 border border-amber-500/30 rounded-2xl p-8"
            >
              <h3 className="text-xl font-display font-bold text-white mb-4">Career Opportunities</h3>
              <ul className="space-y-3">
                {[
                  "AI Network Architect",
                  "Autonomous Systems Engineer",
                  "MLOps Engineer (Telecom)",
                  "SOC Automation Specialist",
                  "Network AI Research Scientist",
                  "Enterprise AI Integration Lead",
                ].map((role, i) => (
                  <li key={i} className="flex items-start gap-3 text-slate-300">
                    <ArrowRight className="w-5 h-5 text-amber-400 mt-0.5 flex-shrink-0" />
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
          <div className="bg-gradient-to-r from-cyan-500/20 to-blue-500/20 border border-cyan-500/30 rounded-2xl p-8 md:p-12 text-center">
            <div className="flex justify-center mb-6">
              <div className="w-20 h-20 bg-gradient-to-br from-cyan-500 to-blue-500 rounded-xl flex items-center justify-center">
                <Brain className="w-10 h-10 text-white" />
              </div>
            </div>
            <h2 className="text-3xl font-display font-bold text-white mb-4">
              Lead the Autonomous Network Revolution
            </h2>
            <p className="text-slate-300 max-w-2xl mx-auto mb-8">
              Master agentic AI for network engineering and join the movement toward 
              TMF Level 5 autonomous networks that self-manage, self-heal, and self-optimize.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link href="/admissions">
                <button className="px-8 py-4 bg-cyan-500 text-white font-bold rounded-lg hover:bg-cyan-400 transition-all flex items-center gap-2 justify-center">
                  Enroll Now <ArrowRight className="w-5 h-5" />
                </button>
              </Link>
              <Link href="/courses">
                <button className="px-8 py-4 border border-slate-600 text-white font-bold rounded-lg hover:border-cyan-500/50 transition-all">
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
