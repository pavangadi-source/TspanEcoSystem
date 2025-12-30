import { motion } from "framer-motion";
import { Link } from "wouter";
import PageLayout from "@/components/PageLayout";
import { BarChart3, Activity, Database, Code, Zap, CheckCircle, Clock, Users, Award, ArrowRight, Server, Globe, Search, Gauge, LineChart, PieChart, Layers, Settings } from "lucide-react";

const courseModules = [
  {
    week: 1,
    title: "Observability Fundamentals",
    topics: [
      "Three Pillars: Metrics, Logs, Traces",
      "Observability vs Traditional Monitoring",
      "Golden Signals: Latency, Traffic, Errors, Saturation",
      "SRE Principles and MTTR Optimization",
      "Observability Stack Architecture Overview",
      "Tool Selection: Grafana, Prometheus, ELK",
    ],
  },
  {
    week: 2,
    title: "TCPWave REST API Deep Dive",
    topics: [
      "TCPWave API Architecture (1,700+ Endpoints)",
      "Authentication: Token-Based & SSL Certificates",
      "Core API Categories: IPAM, DNS, DHCP, Network",
      "Rate Limiting and Best Practices (RFC 6585)",
      "API Response Formats: JSON, XML, CSV",
      "Python/JavaScript SDK Setup",
    ],
  },
  {
    week: 3,
    title: "Prometheus Architecture & Setup",
    topics: [
      "Prometheus Architecture: Server, Exporters, Alertmanager",
      "Pull-Based Metrics Collection Model",
      "Time-Series Data Model (Labels, Samples)",
      "prometheus.yml Configuration Deep Dive",
      "Node Exporter & Application Exporters",
      "Service Discovery Mechanisms",
    ],
  },
  {
    week: 4,
    title: "PromQL Mastery",
    topics: [
      "PromQL Fundamentals: Selectors, Functions",
      "Rate, Increase, and Histogram Quantiles",
      "Aggregation Operators (sum, avg, max, min)",
      "Vector Matching and Binary Operators",
      "Recording Rules for Performance",
      "Query Optimization Techniques",
    ],
  },
  {
    week: 5,
    title: "Custom Prometheus Exporters",
    topics: [
      "Building Python Prometheus Exporters",
      "prometheus_client Library Deep Dive",
      "Gauge, Counter, Histogram, Summary Metrics",
      "TCPWave Metrics Exporter Development",
      "DDI Metrics: DNS QPS, DHCP Leases, IP Utilization",
      "Containerizing Exporters with Docker",
    ],
  },
  {
    week: 6,
    title: "Grafana Fundamentals",
    topics: [
      "Grafana Architecture and Data Sources",
      "Dashboard, Panel, and Row Concepts",
      "Connecting Prometheus as Data Source",
      "Time Range Controls and Variables",
      "Panel Types: Graph, Stat, Gauge, Table",
      "Dashboard Permissions and Folders",
    ],
  },
  {
    week: 7,
    title: "Advanced Grafana Visualization",
    topics: [
      "Template Variables (Query, Custom, Datasource)",
      "Annotations and Event Overlays",
      "Heatmaps and Histograms",
      "Geomap and Node Graph Panels",
      "Dashboard Linking and Drilldowns",
      "Grafana Transformations",
    ],
  },
  {
    week: 8,
    title: "ELK Stack Fundamentals",
    topics: [
      "Elasticsearch Architecture (Nodes, Shards, Indices)",
      "Logstash Pipeline: Input, Filter, Output",
      "Beats Family: Filebeat, Metricbeat, Packetbeat",
      "Kibana Dashboard and Discover Interface",
      "Index Patterns and Mappings",
      "ILM (Index Lifecycle Management)",
    ],
  },
  {
    week: 9,
    title: "Log Ingestion & Processing",
    topics: [
      "Logstash Grok Patterns for Log Parsing",
      "TCPWave DNS/DHCP Log Ingestion",
      "Syslog and JSON Log Formats",
      "Enrichment with GeoIP and DNS Lookup",
      "Performance Tuning for High Volume",
      "Dead Letter Queues and Error Handling",
    ],
  },
  {
    week: 10,
    title: "Kibana Visualization & Dashboards",
    topics: [
      "Lens: Drag-and-Drop Visualization",
      "TSVB (Time Series Visual Builder)",
      "Data Tables and Markdown Panels",
      "Kibana Saved Objects and Spaces",
      "Dashboard Export/Import API",
      "Embedding Kibana in Custom Applications",
    ],
  },
  {
    week: 11,
    title: "TCPWave Custom Dashboard Development",
    topics: [
      "TCPWave Dashboard Architecture",
      "Building Widgets: Counters, Charts, Grids",
      "Real-Time Metrics: CPU, Memory, QPS, LPS",
      "SNMP Integration for Hardware Monitoring",
      "Alert Dashboard with Suricata IPS Data",
      "Disaster Recovery Health Visualization",
    ],
  },
  {
    week: 12,
    title: "Unified Observability Dashboard",
    topics: [
      "Grafana as Single Pane of Glass",
      "Multi-Datasource Dashboards (Prometheus + Elastic)",
      "Correlating Metrics with Logs",
      "Mixed Panel Queries",
      "Grafana Loki as ELK Alternative",
      "OpenTelemetry Integration",
    ],
  },
  {
    week: 13,
    title: "Alerting & Incident Response",
    topics: [
      "Prometheus Alertmanager Configuration",
      "Grafana Unified Alerting",
      "Alert Routing and Silencing",
      "PagerDuty, Slack, Email Integration",
      "Runbook Automation",
      "SLO/SLI Dashboards",
    ],
  },
  {
    week: 14,
    title: "Capstone: Enterprise Dashboard Platform",
    topics: [
      "Architecture Design: TCPWave + Prometheus + ELK",
      "Custom React Dashboard Frontend",
      "API Gateway for Unified Access",
      "Kubernetes Deployment with Helm",
      "Performance Testing and Optimization",
      "Final Project Presentation",
    ],
  },
];

const stackComponents = [
  { name: "TCPWave API", desc: "1,700+ REST endpoints for DDI", icon: Server },
  { name: "Prometheus", desc: "Time-series metrics collection", icon: Activity },
  { name: "Grafana", desc: "Visualization & dashboards", icon: BarChart3 },
  { name: "Elasticsearch", desc: "Log storage & search", icon: Search },
  { name: "Logstash", desc: "Log ingestion & processing", icon: Layers },
  { name: "Kibana", desc: "ELK visualization", icon: PieChart },
];

const promqlExamples = [
  { query: "rate(dns_queries_total[5m])", desc: "DNS query rate" },
  { query: "dhcp_leases_active", desc: "Active DHCP leases" },
  { query: "ipam_subnet_utilization", desc: "Subnet utilization %" },
  { query: "histogram_quantile(0.95, ...)", desc: "95th percentile latency" },
];

const learningOutcomes = [
  "Master TCPWave REST API for DDI monitoring and automation",
  "Build custom Prometheus exporters for network infrastructure",
  "Write advanced PromQL queries for metrics analysis",
  "Design production-ready Grafana dashboards",
  "Implement ELK stack for log aggregation and analysis",
  "Create Logstash pipelines for DNS/DHCP log processing",
  "Build Kibana visualizations for security and compliance",
  "Develop unified observability dashboards with multiple data sources",
  "Configure alerting with Alertmanager and Grafana",
  "Deploy observability stack on Kubernetes",
];

const prerequisites = [
  "Basic networking knowledge (DNS, DHCP, IP addressing)",
  "Linux command line proficiency",
  "Python or JavaScript programming skills",
  "Understanding of REST APIs",
  "Docker basics recommended",
];

const dashboardMetrics = [
  { metric: "DNS QPS", desc: "Queries per second" },
  { metric: "DHCP Leases", desc: "Active/available leases" },
  { metric: "IP Utilization", desc: "Subnet usage percentage" },
  { metric: "API Latency", desc: "Response time percentiles" },
  { metric: "Error Rate", desc: "Failed requests ratio" },
  { metric: "Zone Health", desc: "DNS zone status" },
];

export default function CustomDashboards() {
  return (
    <PageLayout
      title="Custom Dashboard Development"
      subtitle="Build enterprise observability dashboards with TCPWave APIs, Grafana, Prometheus & ELK"
      badge="Advanced Course"
      breadcrumbs={[
        { label: "Courses", href: "/courses" },
        { label: "Custom Dashboards" },
      ]}
    >
      <section className="py-12">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-4 gap-6 mb-12">
            {[
              { label: "Duration", value: "14 Weeks", icon: Clock },
              { label: "Level", value: "Advanced", icon: Award },
              { label: "Format", value: "Live + Labs + Project", icon: Users },
              { label: "Price", value: "₹1,25,000", icon: Zap },
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
                <item.icon className="w-8 h-8 text-amber-400 mx-auto mb-3" />
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
                Course <span className="text-amber-400">Overview</span>
              </h2>
              <p className="text-slate-400 mb-6">
                Modern network operations demand real-time visibility into infrastructure health. 
                This comprehensive course teaches you to build enterprise-grade observability dashboards 
                using the industry's most powerful tools: <strong className="text-white">TCPWave APIs</strong>, 
                <strong className="text-white"> Grafana</strong>, <strong className="text-white">Prometheus</strong>, 
                and the <strong className="text-white">ELK Stack</strong>.
              </p>
              <p className="text-slate-400 mb-6">
                You'll learn to leverage TCPWave's 1,700+ REST API endpoints to extract DDI metrics, 
                build custom Prometheus exporters, design stunning Grafana visualizations, and implement 
                log aggregation with Elasticsearch, Logstash, and Kibana.
              </p>
              <p className="text-slate-400 mb-6">
                By the end, you'll have the skills to build unified observability platforms that 
                correlate metrics, logs, and traces for complete infrastructure visibility.
              </p>

              <div className="bg-gradient-to-br from-amber-500/10 to-orange-500/10 border border-amber-500/30 rounded-xl p-6">
                <h4 className="text-lg font-bold text-white mb-4 flex items-center gap-2">
                  <Gauge className="w-5 h-5 text-amber-400" />
                  Key DDI Metrics You'll Monitor
                </h4>
                <div className="grid grid-cols-2 gap-3">
                  {dashboardMetrics.map((item, i) => (
                    <div key={i} className="text-sm">
                      <span className="text-amber-400 font-medium">{item.metric}</span>
                      <span className="text-slate-500 ml-2">- {item.desc}</span>
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
                    <CheckCircle className="w-4 h-4 text-amber-400 mt-0.5 flex-shrink-0" />
                    {outcome}
                  </li>
                ))}
              </ul>

              <div className="bg-gradient-to-br from-amber-500/10 to-orange-500/10 border border-amber-500/30 rounded-xl p-6">
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
              Technology <span className="text-amber-400">Stack</span>
            </h2>
            <p className="text-slate-400 max-w-2xl mx-auto">
              Master the complete observability ecosystem for network infrastructure
            </p>
          </motion.div>

          <div className="grid md:grid-cols-3 lg:grid-cols-6 gap-4 mb-12">
            {stackComponents.map((component, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.05 }}
                className="bg-slate-900/80 border border-slate-800 rounded-xl p-4 text-center hover:border-amber-500/50 transition-all"
              >
                <component.icon className="w-8 h-8 text-amber-400 mx-auto mb-2" />
                <div className="text-white font-bold text-sm">{component.name}</div>
                <div className="text-slate-500 text-xs">{component.desc}</div>
              </motion.div>
            ))}
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
                  <Activity className="w-7 h-7 text-white" />
                </div>
                <div>
                  <h3 className="text-xl font-display font-bold text-white">Prometheus + Grafana</h3>
                  <p className="text-blue-400">Metrics & Visualization</p>
                </div>
              </div>
              <p className="text-slate-400 mb-4">
                Industry-standard stack for time-series metrics. 70% of companies use this combination 
                for infrastructure monitoring.
              </p>
              <div className="bg-slate-950 rounded-lg p-4 font-mono text-xs">
                <div className="text-slate-500 mb-2"># Sample PromQL Queries</div>
                {promqlExamples.map((ex, i) => (
                  <div key={i} className="mb-1">
                    <span className="text-cyan-400">{ex.query}</span>
                    <span className="text-slate-600 ml-2"># {ex.desc}</span>
                  </div>
                ))}
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="bg-slate-900/80 border border-green-500/30 rounded-2xl p-8"
            >
              <div className="flex items-center gap-4 mb-6">
                <div className="w-14 h-14 bg-gradient-to-br from-green-500 to-emerald-500 rounded-xl flex items-center justify-center">
                  <Search className="w-7 h-7 text-white" />
                </div>
                <div>
                  <h3 className="text-xl font-display font-bold text-white">ELK Stack</h3>
                  <p className="text-green-400">Logs & Analytics</p>
                </div>
              </div>
              <p className="text-slate-400 mb-4">
                Elasticsearch, Logstash, and Kibana for comprehensive log management. 
                Process DNS/DHCP logs, security events, and audit trails.
              </p>
              <div className="bg-slate-950 rounded-lg p-4 font-mono text-xs">
                <div className="text-slate-500 mb-2"># Logstash Pipeline</div>
                <div className="text-green-400">input {'{'} beats {'{'} port =&gt; 5044 {'}'} {'}'}</div>
                <div className="text-green-400">filter {'{'} grok {'{'} ... {'}'} {'}'}</div>
                <div className="text-green-400">output {'{'} elasticsearch {'{'} ... {'}'} {'}'}</div>
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
              TCPWave <span className="text-primary">API Integration</span>
            </h2>
            <p className="text-slate-400 max-w-2xl mx-auto">
              Leverage TCPWave's comprehensive REST API for DDI monitoring
            </p>
          </motion.div>

          <div className="grid md:grid-cols-3 gap-6 mb-12">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="bg-slate-900/50 border border-slate-800 rounded-xl p-6"
            >
              <div className="text-4xl font-bold text-primary mb-2">1,700+</div>
              <div className="text-white font-medium mb-2">REST API Endpoints</div>
              <div className="text-slate-400 text-sm">Complete coverage for IPAM, DNS, DHCP, and network management operations</div>
            </motion.div>
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.1 }}
              className="bg-slate-900/50 border border-slate-800 rounded-xl p-6"
            >
              <div className="text-4xl font-bold text-green-400 mb-2">60 Days</div>
              <div className="text-white font-medium mb-2">Token Validity</div>
              <div className="text-slate-400 text-sm">Secure token-based authentication with IP-restricted access</div>
            </motion.div>
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.2 }}
              className="bg-slate-900/50 border border-slate-800 rounded-xl p-6"
            >
              <div className="text-4xl font-bold text-amber-400 mb-2">SNMPv3</div>
              <div className="text-white font-medium mb-2">Hardware Monitoring</div>
              <div className="text-slate-400 text-sm">MIB-based statistics for appliance and infrastructure health</div>
            </motion.div>
          </div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="bg-slate-900/50 border border-slate-700 rounded-2xl p-8"
          >
            <h3 className="text-xl font-bold text-white mb-4">Sample API Calls</h3>
            <div className="grid md:grid-cols-2 gap-4">
              <div className="bg-slate-950 rounded-lg p-4 font-mono text-xs">
                <div className="text-slate-500 mb-2"># Get IPAM Health</div>
                <div className="text-cyan-400">GET /rest/ipam/health</div>
                <div className="text-slate-500 mt-3 mb-2"># List Networks</div>
                <div className="text-cyan-400">GET /rest/network/list?page=1&rows=50</div>
              </div>
              <div className="bg-slate-950 rounded-lg p-4 font-mono text-xs">
                <div className="text-slate-500 mb-2"># DNS Zone Stats</div>
                <div className="text-cyan-400">GET /rest/dns/zone/stats</div>
                <div className="text-slate-500 mt-3 mb-2"># DHCP Lease Summary</div>
                <div className="text-cyan-400">GET /rest/dhcp/lease/summary</div>
              </div>
            </div>
          </motion.div>
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
              From observability fundamentals to enterprise dashboard deployment
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
                className="bg-slate-950/80 border border-slate-800 rounded-xl p-5 hover:border-amber-500/50 transition-all"
              >
                <div className="flex items-center gap-3 mb-3">
                  <div className="w-10 h-10 bg-gradient-to-br from-amber-500 to-orange-500 rounded-lg flex items-center justify-center text-white font-bold text-sm">
                    W{module.week}
                  </div>
                  <h3 className="text-sm font-display font-bold text-white leading-tight">{module.title}</h3>
                </div>
                <ul className="space-y-1">
                  {module.topics.map((topic, j) => (
                    <li key={j} className="flex items-start gap-2 text-slate-400 text-xs">
                      <BarChart3 className="w-3 h-3 text-amber-400 mt-0.5 flex-shrink-0" />
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
              className="bg-gradient-to-br from-blue-500/10 to-cyan-500/10 border border-blue-500/30 rounded-2xl p-8"
            >
              <h3 className="text-xl font-display font-bold text-white mb-4">What You'll Build</h3>
              <ul className="space-y-3">
                {[
                  "Custom Prometheus exporter for TCPWave DDI metrics",
                  "Grafana dashboards for DNS/DHCP/IPAM monitoring",
                  "Logstash pipelines for network log processing",
                  "Kibana visualizations for security analysis",
                  "Unified observability platform with alerting",
                  "Kubernetes-deployed monitoring stack",
                ].map((item, i) => (
                  <li key={i} className="flex items-start gap-3 text-slate-300">
                    <CheckCircle className="w-5 h-5 text-blue-400 mt-0.5 flex-shrink-0" />
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
              className="bg-gradient-to-br from-amber-500/10 to-orange-500/10 border border-amber-500/30 rounded-2xl p-8"
            >
              <h3 className="text-xl font-display font-bold text-white mb-4">Career Opportunities</h3>
              <ul className="space-y-3">
                {[
                  "Site Reliability Engineer (SRE)",
                  "DevOps Engineer - Observability",
                  "Platform Engineer",
                  "Network Operations Analyst",
                  "Infrastructure Monitoring Specialist",
                  "Dashboard Developer",
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
          <div className="bg-gradient-to-r from-amber-500/20 to-orange-500/20 border border-amber-500/30 rounded-2xl p-8 md:p-12 text-center">
            <div className="flex justify-center mb-6">
              <div className="w-20 h-20 bg-gradient-to-br from-amber-500 to-orange-500 rounded-xl flex items-center justify-center">
                <BarChart3 className="w-10 h-10 text-white" />
              </div>
            </div>
            <h2 className="text-3xl font-display font-bold text-white mb-4">
              Build World-Class Observability Dashboards
            </h2>
            <p className="text-slate-300 max-w-2xl mx-auto mb-8">
              Master the tools that power enterprise infrastructure monitoring. 
              From TCPWave APIs to Grafana, Prometheus, and ELK - become an observability expert.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link 
                href="/admissions"
                className="px-8 py-4 bg-amber-500 text-slate-950 font-bold rounded-lg hover:bg-amber-400 transition-all flex items-center gap-2 justify-center"
                data-testid="enroll-now-btn"
              >
                Enroll Now <ArrowRight className="w-5 h-5" />
              </Link>
              <Link 
                href="/courses"
                className="px-8 py-4 border border-slate-600 text-white font-bold rounded-lg hover:border-amber-500/50 transition-all"
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
