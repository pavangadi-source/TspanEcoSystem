import { motion } from "framer-motion";
import { Link } from "wouter";
import PageLayout from "@/components/PageLayout";
import { Plug, Network, Shield, Bot, Database, Zap, CheckCircle, Clock, Users, Award, ArrowRight, Server, Globe, Code, Workflow, Layers, Search, Brain } from "lucide-react";

const courseModules = [
  {
    week: 1,
    title: "Foundations of Agentic AI Protocols",
    topics: [
      "The M×N Integration Problem in AI Systems",
      "Why We Need Standardized AI Protocols",
      "Protocol Categories: Tool Access vs Agent Communication",
      "Industry Players: Anthropic, Google, OpenAI, Microsoft",
      "Linux Foundation Agentic AI Foundation Overview",
      "The Future of AI Interoperability",
    ],
  },
  {
    week: 2,
    title: "Model Context Protocol (MCP) Fundamentals",
    topics: [
      "What is MCP? 'USB-C for AI' Explained",
      "History: Anthropic's November 2024 Launch",
      "MCP Architecture: Hosts, Clients, Servers",
      "Transport Methods: stdio, SSE, Streamable-HTTP",
      "Capabilities: Tools, Resources, Prompts, Sampling",
      "MCP vs OpenAPI: Key Differences",
    ],
  },
  {
    week: 3,
    title: "MCP Deep Dive: Specification & Protocol",
    topics: [
      "JSON-RPC 2.0 Message Format",
      "Initialization and Capability Negotiation",
      "Tool Definition Schema and Execution",
      "Resource Discovery and Access",
      "Prompt Templates and Sampling",
      "Error Handling and Session Management",
    ],
  },
  {
    week: 4,
    title: "Building MCP Servers (Python)",
    topics: [
      "Official Python SDK Setup",
      "FastMCP Framework for Rapid Development",
      "@tool, @resource, @prompt Decorators",
      "Async Operations and Streaming",
      "Docker Containerization for MCP Servers",
      "Testing with MCP Inspector",
    ],
  },
  {
    week: 5,
    title: "Building MCP Servers (TypeScript)",
    topics: [
      "Official TypeScript SDK Overview",
      "@modelcontextprotocol/sdk Package",
      "Server Implementation Patterns",
      "NPX Distribution for Easy Sharing",
      "Claude Desktop Integration",
      "Cursor and VS Code Configuration",
    ],
  },
  {
    week: 6,
    title: "MCP Security & Production Deployment",
    topics: [
      "Prompt Injection Vulnerabilities",
      "Tool Permission Escalation Risks",
      "OAuth Integration and Scoping",
      "Filesystem Boundaries (Roots)",
      "Container Isolation with Docker MCP",
      "Human-in-the-Loop Design Patterns",
    ],
  },
  {
    week: 7,
    title: "Agent2Agent Protocol (A2A) Fundamentals",
    topics: [
      "What is A2A? Google's April 2025 Launch",
      "Agent Discovery via Agent Cards (JSON)",
      "Task Management Lifecycle",
      "Multi-Modal Support: Text, Audio, Video",
      "Long-Running Tasks and Streaming",
      "A2A vs MCP: Complementary Protocols",
    ],
  },
  {
    week: 8,
    title: "A2A Deep Dive: Building Agent Networks",
    topics: [
      "Agent Card Schema and Well-Known URLs",
      "Task States: Running, Completed, Failed, Canceled",
      "HTTP/SSE/gRPC Transport Options",
      "JSON-RPC Communication Patterns",
      "Agent Development Kit (ADK) Integration",
      "Interactions API for Multi-Turn Workflows",
    ],
  },
  {
    week: 9,
    title: "Elasticsearch as AI Data Lake",
    topics: [
      "Elasticsearch Architecture for AI Workloads",
      "Index Design for LLM Context Windows",
      "Vector Search and Semantic Embeddings",
      "Real-Time Log and Event Analytics",
      "Data Lake Patterns: Hot, Warm, Cold Tiers",
      "Kibana Integration for Visualization",
    ],
  },
  {
    week: 10,
    title: "MCP + Elasticsearch Integration",
    topics: [
      "Official elastic/mcp-server-elasticsearch Setup",
      "Docker and NPM Deployment Options",
      "Core Tools: list_indices, get_mappings, search",
      "Natural Language to Query DSL Translation",
      "FastMCP Custom Server Development",
      "Async Elasticsearch Client Integration",
    ],
  },
  {
    week: 11,
    title: "Building Your Own MCP UI",
    topics: [
      "React Frontend Architecture for MCP",
      "MCP Client Implementation in Browser",
      "Real-Time Streaming with Server-Sent Events",
      "Tool Execution Visualization",
      "Query Builder with Natural Language",
      "Dashboard Design for AI Data Lakes",
    ],
  },
  {
    week: 12,
    title: "Advanced Protocols & Ecosystem",
    topics: [
      "Agent Gateway Protocol (AGP)",
      "A2UI: Declarative UI for Agents",
      "Secure Passport Extension",
      "OpenAI Tools API Comparison",
      "LangChain and LlamaIndex Integration",
      "The Agentic AI Protocol Landscape 2025",
    ],
  },
  {
    week: 13,
    title: "Enterprise Integration Patterns",
    topics: [
      "Multi-Agent Orchestration Architecture",
      "ServiceNow and ITSM Integration",
      "Slack, GitHub, Google Drive MCP Servers",
      "Database MCP: Postgres, MySQL, MongoDB",
      "Cloud Platform Integration (AWS, Azure, GCP)",
      "Observability and Monitoring",
    ],
  },
  {
    week: 14,
    title: "Capstone: Full-Stack AI Agent Platform",
    topics: [
      "Architecture Design: MCP + A2A + Elasticsearch",
      "Custom MCP Server for Your Domain",
      "React Dashboard with Real-Time Analytics",
      "Agent Network Deployment",
      "Security Audit and Best Practices",
      "Final Project Presentation",
    ],
  },
];

const protocolComparison = [
  { 
    protocol: "MCP", 
    org: "Anthropic → Linux Foundation", 
    purpose: "AI → Tools/Data",
    launched: "Nov 2024",
    adoption: "97M+ monthly SDK downloads"
  },
  { 
    protocol: "A2A", 
    org: "Google → Linux Foundation", 
    purpose: "Agent → Agent",
    launched: "Apr 2025",
    adoption: "150+ organizations"
  },
  { 
    protocol: "OpenAI Tools", 
    org: "OpenAI", 
    purpose: "Function Calling",
    launched: "Jun 2023",
    adoption: "ChatGPT, GPT API"
  },
  { 
    protocol: "AGP", 
    org: "Community", 
    purpose: "Agent Routing",
    launched: "2025",
    adoption: "Emerging"
  },
];

const mcpTools = [
  { name: "list_indices", desc: "Discover Elasticsearch indices" },
  { name: "get_mappings", desc: "Inspect field structure" },
  { name: "search", desc: "Execute Query DSL" },
  { name: "get_shards", desc: "Retrieve shard info" },
];

const learningOutcomes = [
  "Master MCP and A2A protocols for AI agent development",
  "Build production-ready MCP servers in Python and TypeScript",
  "Implement A2A agent networks with discovery and task management",
  "Connect Elasticsearch as an AI data lake via MCP",
  "Build custom React UIs for MCP-powered applications",
  "Design secure, scalable multi-agent architectures",
  "Integrate with enterprise tools (Slack, GitHub, databases)",
  "Navigate the evolving AI protocol ecosystem",
];

const prerequisites = [
  "Strong programming skills (Python and/or TypeScript)",
  "Understanding of REST APIs and JSON-RPC",
  "Basic knowledge of LLMs and AI agents",
  "Familiarity with Elasticsearch or similar databases",
  "React/frontend development experience (for UI modules)",
];

const industryAdopters = [
  { name: "Anthropic", role: "MCP Creator" },
  { name: "OpenAI", role: "MCP Adopter" },
  { name: "Google", role: "A2A Creator" },
  { name: "Microsoft", role: "Windows MCP" },
  { name: "AWS", role: "A2A Partner" },
  { name: "Elastic", role: "MCP Server" },
];

export default function AIAgentProtocols() {
  return (
    <PageLayout
      title="AI Agent Protocols: MCP, A2A & Beyond"
      subtitle="Master the protocols powering the agentic AI revolution with Elasticsearch integration"
      badge="Expert Course"
      breadcrumbs={[
        { label: "Courses", href: "/courses" },
        { label: "AI Agent Protocols" },
      ]}
    >
      <section className="py-12">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-4 gap-6 mb-12">
            {[
              { label: "Duration", value: "14 Weeks", icon: Clock },
              { label: "Level", value: "Expert", icon: Award },
              { label: "Format", value: "Live + Labs + Project", icon: Users },
              { label: "Price", value: "₹1,75,000", icon: Zap },
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
                <item.icon className="w-8 h-8 text-violet-400 mx-auto mb-3" />
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
                Course <span className="text-violet-400">Overview</span>
              </h2>
              <p className="text-slate-400 mb-6">
                The AI industry has converged on standardized protocols for agent interoperability. 
                <strong className="text-white"> Model Context Protocol (MCP)</strong> from Anthropic connects 
                AI to tools and data, while <strong className="text-white">Agent2Agent (A2A)</strong> from 
                Google enables agents to collaborate. Together, they form the foundation of the agentic AI ecosystem.
              </p>
              <p className="text-slate-400 mb-6">
                This comprehensive 14-week course takes you from protocol fundamentals to building 
                production-ready MCP servers, A2A agent networks, and custom UIs powered by 
                <strong className="text-white"> Elasticsearch</strong> as your AI data lake.
              </p>
              <p className="text-slate-400 mb-6">
                By the end, you'll be able to build complete AI agent platforms that leverage 
                the same protocols used by Claude, ChatGPT, and enterprise systems worldwide.
              </p>

              <div className="bg-gradient-to-br from-violet-500/10 to-purple-500/10 border border-violet-500/30 rounded-xl p-6 mb-6">
                <h4 className="text-lg font-bold text-white mb-4 flex items-center gap-2">
                  <Plug className="w-5 h-5 text-violet-400" />
                  The "USB-C for AI" Revolution
                </h4>
                <p className="text-slate-400 text-sm">
                  Before MCP: 10 AI apps × 100 tools = 1,000 custom integrations<br/>
                  After MCP: Build once → Connect everywhere
                </p>
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
                    <CheckCircle className="w-5 h-5 text-violet-400 mt-0.5 flex-shrink-0" />
                    {outcome}
                  </li>
                ))}
              </ul>

              <div className="bg-gradient-to-br from-violet-500/10 to-purple-500/10 border border-violet-500/30 rounded-xl p-6">
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
              Protocol <span className="text-violet-400">Comparison</span>
            </h2>
            <p className="text-slate-400 max-w-2xl mx-auto">
              Understanding how MCP and A2A complement each other in the AI ecosystem
            </p>
          </motion.div>

          <div className="overflow-x-auto mb-12">
            <table className="w-full border-collapse">
              <thead>
                <tr className="border-b border-slate-700">
                  <th className="text-left py-4 px-4 text-white font-bold">Protocol</th>
                  <th className="text-left py-4 px-4 text-white font-bold">Organization</th>
                  <th className="text-left py-4 px-4 text-white font-bold">Purpose</th>
                  <th className="text-left py-4 px-4 text-white font-bold">Launched</th>
                  <th className="text-left py-4 px-4 text-white font-bold">Adoption</th>
                </tr>
              </thead>
              <tbody>
                {protocolComparison.map((proto, i) => (
                  <tr key={i} className="border-b border-slate-800 hover:bg-slate-800/50">
                    <td className="py-4 px-4">
                      <span className="text-violet-400 font-bold">{proto.protocol}</span>
                    </td>
                    <td className="py-4 px-4 text-slate-400 text-sm">{proto.org}</td>
                    <td className="py-4 px-4 text-white">{proto.purpose}</td>
                    <td className="py-4 px-4 text-slate-400">{proto.launched}</td>
                    <td className="py-4 px-4 text-slate-400 text-sm">{proto.adoption}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>

          <div className="grid md:grid-cols-2 gap-8">
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="bg-slate-900/80 border border-blue-500/30 rounded-2xl p-8"
            >
              <div className="flex items-center gap-4 mb-6">
                <div className="w-14 h-14 bg-gradient-to-br from-blue-500 to-cyan-500 rounded-xl flex items-center justify-center">
                  <Plug className="w-7 h-7 text-white" />
                </div>
                <div>
                  <h3 className="text-xl font-display font-bold text-white">MCP</h3>
                  <p className="text-blue-400">Model Context Protocol</p>
                </div>
              </div>
              <p className="text-slate-400 mb-4">
                Connects AI models to external tools, databases, and APIs. 
                Think of it as giving your LLM hands to interact with the world.
              </p>
              <ul className="space-y-2 text-slate-400 text-sm">
                <li className="flex items-center gap-2">
                  <Database className="w-4 h-4 text-blue-400" />
                  Query databases with natural language
                </li>
                <li className="flex items-center gap-2">
                  <Code className="w-4 h-4 text-blue-400" />
                  Execute code and manage files
                </li>
                <li className="flex items-center gap-2">
                  <Globe className="w-4 h-4 text-blue-400" />
                  Access APIs: Slack, GitHub, Google Drive
                </li>
              </ul>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="bg-slate-900/80 border border-green-500/30 rounded-2xl p-8"
            >
              <div className="flex items-center gap-4 mb-6">
                <div className="w-14 h-14 bg-gradient-to-br from-green-500 to-emerald-500 rounded-xl flex items-center justify-center">
                  <Network className="w-7 h-7 text-white" />
                </div>
                <div>
                  <h3 className="text-xl font-display font-bold text-white">A2A</h3>
                  <p className="text-green-400">Agent2Agent Protocol</p>
                </div>
              </div>
              <p className="text-slate-400 mb-4">
                Enables AI agents from different vendors to discover and collaborate. 
                Think of it as a social network for AI agents.
              </p>
              <ul className="space-y-2 text-slate-400 text-sm">
                <li className="flex items-center gap-2">
                  <Bot className="w-4 h-4 text-green-400" />
                  Agent discovery via Agent Cards
                </li>
                <li className="flex items-center gap-2">
                  <Workflow className="w-4 h-4 text-green-400" />
                  Task delegation between agents
                </li>
                <li className="flex items-center gap-2">
                  <Layers className="w-4 h-4 text-green-400" />
                  Multi-agent orchestration
                </li>
              </ul>
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
              MCP + <span className="text-amber-400">Elasticsearch</span> Integration
            </h2>
            <p className="text-slate-400 max-w-2xl mx-auto">
              Transform Elasticsearch into a conversational AI data lake with natural language queries
            </p>
          </motion.div>

          <div className="grid md:grid-cols-2 gap-8 mb-12">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="bg-slate-900/50 border border-amber-500/30 rounded-2xl p-8"
            >
              <h3 className="text-xl font-bold text-white mb-4 flex items-center gap-2">
                <Search className="w-6 h-6 text-amber-400" />
                Official MCP Tools for Elasticsearch
              </h3>
              <div className="space-y-4">
                {mcpTools.map((tool, i) => (
                  <div key={i} className="flex items-center gap-4 bg-slate-950/50 rounded-lg p-3">
                    <code className="text-amber-400 font-mono text-sm">{tool.name}</code>
                    <span className="text-slate-400 text-sm">{tool.desc}</span>
                  </div>
                ))}
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.1 }}
              className="bg-slate-900/50 border border-slate-700 rounded-2xl p-8"
            >
              <h3 className="text-xl font-bold text-white mb-4">Quick Setup</h3>
              <div className="bg-slate-950 rounded-lg p-4 font-mono text-sm overflow-x-auto">
                <div className="text-slate-500 mb-2"># Docker deployment</div>
                <div className="text-green-400">docker run -i --rm \</div>
                <div className="text-green-400 pl-4">-e ES_URL=$ES_URL \</div>
                <div className="text-green-400 pl-4">-e ES_API_KEY=$ES_API_KEY \</div>
                <div className="text-green-400 pl-4">docker.elastic.co/mcp/elasticsearch</div>
                <div className="text-slate-500 mt-4 mb-2"># NPM for Claude Desktop</div>
                <div className="text-cyan-400">npx @elastic/mcp-server-elasticsearch</div>
              </div>
              <p className="text-slate-400 text-sm mt-4">
                Query your logs with: "Show me all 500 errors from last 15 minutes"
              </p>
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
              14-Week <span className="text-secondary">Curriculum</span>
            </h2>
            <p className="text-slate-400 max-w-2xl mx-auto">
              From protocol fundamentals to building production AI agent platforms
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
                className="bg-slate-950/80 border border-slate-800 rounded-xl p-5 hover:border-violet-500/50 transition-all"
              >
                <div className="flex items-center gap-3 mb-3">
                  <div className="w-10 h-10 bg-gradient-to-br from-violet-500 to-purple-500 rounded-lg flex items-center justify-center text-white font-bold text-sm">
                    W{module.week}
                  </div>
                  <h3 className="text-sm font-display font-bold text-white leading-tight">{module.title}</h3>
                </div>
                <ul className="space-y-1">
                  {module.topics.map((topic, j) => (
                    <li key={j} className="flex items-start gap-2 text-slate-400 text-xs">
                      <Plug className="w-3 h-3 text-violet-400 mt-0.5 flex-shrink-0" />
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
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-12"
          >
            <h2 className="text-3xl font-display font-bold text-white mb-4">
              Industry <span className="text-violet-400">Adoption</span>
            </h2>
            <p className="text-slate-400">
              The entire AI industry has converged on these protocols
            </p>
          </motion.div>

          <div className="flex flex-wrap justify-center gap-6 mb-12">
            {industryAdopters.map((company, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.05 }}
                className="bg-slate-900/50 border border-slate-800 rounded-xl px-6 py-4 text-center"
              >
                <div className="text-white font-bold">{company.name}</div>
                <div className="text-violet-400 text-sm">{company.role}</div>
              </motion.div>
            ))}
          </div>

          <div className="grid md:grid-cols-3 gap-6">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="bg-gradient-to-br from-blue-500/10 to-cyan-500/10 border border-blue-500/30 rounded-xl p-6 text-center"
            >
              <div className="text-4xl font-bold text-white mb-2">97M+</div>
              <div className="text-slate-400">Monthly MCP SDK Downloads</div>
            </motion.div>
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.1 }}
              className="bg-gradient-to-br from-green-500/10 to-emerald-500/10 border border-green-500/30 rounded-xl p-6 text-center"
            >
              <div className="text-4xl font-bold text-white mb-2">150+</div>
              <div className="text-slate-400">A2A Partner Organizations</div>
            </motion.div>
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.2 }}
              className="bg-gradient-to-br from-violet-500/10 to-purple-500/10 border border-violet-500/30 rounded-xl p-6 text-center"
            >
              <div className="text-4xl font-bold text-white mb-2">16K+</div>
              <div className="text-slate-400">Public MCP Servers</div>
            </motion.div>
          </div>
        </div>
      </section>

      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="bg-gradient-to-r from-violet-500/20 to-purple-500/20 border border-violet-500/30 rounded-2xl p-8 md:p-12 text-center">
            <div className="flex justify-center mb-6">
              <div className="w-20 h-20 bg-gradient-to-br from-violet-500 to-purple-500 rounded-xl flex items-center justify-center">
                <Plug className="w-10 h-10 text-white" />
              </div>
            </div>
            <h2 className="text-3xl font-display font-bold text-white mb-4">
              Master the Protocols of the AI Era
            </h2>
            <p className="text-slate-300 max-w-2xl mx-auto mb-8">
              Build production-ready AI agent platforms with MCP, A2A, and Elasticsearch. 
              Join the movement that's standardizing how AI connects to the world.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link 
                href="/admissions"
                className="px-8 py-4 bg-violet-500 text-white font-bold rounded-lg hover:bg-violet-400 transition-all flex items-center gap-2 justify-center"
                data-testid="enroll-now-btn"
              >
                Enroll Now <ArrowRight className="w-5 h-5" />
              </Link>
              <Link 
                href="/courses"
                className="px-8 py-4 border border-slate-600 text-white font-bold rounded-lg hover:border-violet-500/50 transition-all"
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
