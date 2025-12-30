import { motion } from "framer-motion";
import { Scale, Server, Shield, Zap, Globe2, Activity, BarChart3, CheckCircle } from "lucide-react";
import { Link } from "wouter";
import PageLayout from "@/components/PageLayout";

const loadBalancingMethods = [
  { method: "Round Robin", description: "Distribute traffic evenly across all available servers" },
  { method: "Least Connections", description: "Route to the server with fewest active connections" },
  { method: "Weighted", description: "Assign different weights based on server capacity" },
  { method: "IP Hash", description: "Consistent routing based on client IP address" },
  { method: "Geolocation", description: "Route users to the nearest data center" },
  { method: "Health-Based", description: "Automatic failover based on real-time health checks" },
];

const features = [
  {
    icon: Shield,
    title: "SSL/TLS Offloading",
    description: "Terminate SSL connections at the load balancer, reducing backend server load and simplifying certificate management.",
  },
  {
    icon: Activity,
    title: "Health Monitoring",
    description: "Comprehensive health checks including HTTP, TCP, and custom scripts to ensure traffic only goes to healthy servers.",
  },
  {
    icon: Zap,
    title: "DDoS Protection",
    description: "Built-in rate limiting, connection limits, and traffic shaping to protect against volumetric attacks.",
  },
  {
    icon: BarChart3,
    title: "Real-Time Analytics",
    description: "Live dashboards showing traffic distribution, latency, error rates, and server performance.",
  },
];

const deploymentScenarios = [
  { scenario: "Web Application Load Balancing", description: "Distribute HTTP/HTTPS traffic across web server farms" },
  { scenario: "DNS Load Balancing", description: "Global server load balancing using intelligent DNS responses" },
  { scenario: "API Gateway", description: "Route and load balance API traffic with rate limiting and authentication" },
  { scenario: "Microservices", description: "Service mesh integration for container and Kubernetes environments" },
];

export default function ADCLoadBalancing() {
  return (
    <PageLayout
      title="ADC & Load Balancing"
      subtitle="Application Delivery Controllers for high-availability and optimal performance"
      badge="TCPWave ADC"
      breadcrumbs={[{ label: "TCPWave", href: "/tcpwave" }, { label: "ADC & Load Balancing" }]}
    >
      <section className="py-20 bg-slate-900/50">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-3xl md:text-4xl font-display font-bold text-white mb-4">
              Load Balancing <span className="text-primary">Methods</span>
            </h2>
            <p className="text-slate-400 max-w-2xl mx-auto">
              Multiple algorithms to optimize traffic distribution for your specific needs
            </p>
          </motion.div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {loadBalancingMethods.map((item, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.05 }}
                className="bg-slate-950/80 border border-slate-800 rounded-xl p-6 hover:border-primary/30 transition-all"
              >
                <div className="flex items-center gap-3 mb-3">
                  <Scale className="w-5 h-5 text-primary" />
                  <h4 className="text-lg font-display font-bold text-white">{item.method}</h4>
                </div>
                <p className="text-slate-400 text-sm">{item.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-20">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-3xl md:text-4xl font-display font-bold text-white mb-4">
              ADC <span className="text-secondary">Features</span>
            </h2>
          </motion.div>

          <div className="grid md:grid-cols-2 gap-8">
            {features.map((feature, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1 }}
                className="bg-slate-900/50 border border-slate-800 rounded-2xl p-8 hover:border-primary/50 transition-all"
              >
                <feature.icon className="w-12 h-12 text-primary mb-6" />
                <h3 className="text-xl font-display font-bold text-white mb-3">{feature.title}</h3>
                <p className="text-slate-400">{feature.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-20 bg-slate-900/50">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-3xl md:text-4xl font-display font-bold text-white mb-4">
              Deployment <span className="text-primary">Scenarios</span>
            </h2>
          </motion.div>

          <div className="grid md:grid-cols-2 gap-6">
            {deploymentScenarios.map((item, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, x: i % 2 === 0 ? -30 : 30 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1 }}
                className="bg-slate-950/80 border border-slate-800 rounded-xl p-6 hover:border-primary/30 transition-all"
              >
                <h4 className="text-lg font-display font-bold text-white mb-2">{item.scenario}</h4>
                <p className="text-slate-400 text-sm">{item.description}</p>
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
              Master ADC Engineering
            </h2>
            <p className="text-slate-400 max-w-2xl mx-auto mb-8">
              Learn to design, deploy, and optimize Application Delivery Controllers with hands-on training at T-SPAN.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link href="/courses">
                <button className="px-6 py-3 bg-primary text-slate-950 font-bold rounded-lg hover:bg-primary/90 transition-colors">
                  View Courses
                </button>
              </Link>
              <Link href="/tcpwave/request-demo">
                <button className="px-6 py-3 bg-slate-800 text-white font-bold rounded-lg hover:bg-slate-700 transition-colors border border-slate-700">
                  Request Demo
                </button>
              </Link>
            </div>
          </motion.div>
        </div>
      </section>
    </PageLayout>
  );
}
