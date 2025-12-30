import { motion } from "framer-motion";
import { Link } from "wouter";
import PageLayout from "@/components/PageLayout";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { 
  Shield, 
  Eye, 
  Network, 
  Brain, 
  Globe, 
  AlertTriangle,
  ArrowRight,
  Building2,
  FileSearch,
  Zap,
  Users,
  Database,
  Lock
} from "lucide-react";

export default function TIaaS() {
  const services = [
    {
      icon: Eye,
      title: "Real-Time Threat Monitoring",
      description: "24/7 monitoring of global threat landscape with AI-powered detection and automated alerting",
      features: ["AI-driven detection", "Automated alerts", "Global coverage"],
      link: "/threat-intelligence/real-time-dashboard"
    },
    {
      icon: Brain,
      title: "AI-Native Defense Platform",
      description: "Leverage GenAI and autonomous agents for proactive threat hunting and zero-day protection",
      features: ["GenAI integration", "Autonomous agents", "Predictive analytics"],
      link: "/tiaas/ai-defense"
    },
    {
      icon: Network,
      title: "Partner Network Access",
      description: "Connect with 75+ cybersecurity companies through DSCI-TCPWave Partner Network Syndicate",
      features: ["75+ partners", "DSCI CCoE", "Industry access"],
      link: "/tiaas/partner-network"
    },
    {
      icon: FileSearch,
      title: "Threat Research Reports",
      description: "Comprehensive research on enterprising adversaries, AI attacks, and emerging threats",
      features: ["Monthly reports", "AI threat analysis", "Trend forecasting"],
      link: "/tiaas/threat-reports"
    },
    {
      icon: Database,
      title: "IOC Database Access",
      description: "Access to millions of indicators of compromise with real-time updates and STIX/TAXII support",
      features: ["50M+ IOCs", "STIX/TAXII", "API access"],
      link: "/threat-intelligence/ioc-database"
    },
    {
      icon: Building2,
      title: "Intelligence Center Partnership",
      description: "Strategic partnership with BITS Pilani APPCAIR for cutting-edge research and analysis",
      features: ["BITS Pilani", "Academic research", "PhD programs"],
      link: "/tiaas/intelligence-center"
    }
  ];

  const stats = [
    { value: "50M+", label: "Threat Indicators" },
    { value: "75+", label: "Partner Companies" },
    { value: "24/7", label: "Monitoring" },
    { value: "₹25Cr+", label: "Research Funding" }
  ];

  const threatCategories = [
    { name: "Nation-State Actors", severity: "Critical", trend: "↑ 45%" },
    { name: "Ransomware Syndicates", severity: "Critical", trend: "↑ 38%" },
    { name: "AI-Powered Attacks", severity: "High", trend: "↑ 78%" },
    { name: "Supply Chain Threats", severity: "High", trend: "↑ 52%" },
    { name: "Insider Threats", severity: "Medium", trend: "↑ 23%" },
    { name: "DNS Exfiltration", severity: "High", trend: "↑ 41%" }
  ];

  return (
    <PageLayout
      title="Threat Intelligence as a Service"
      subtitle="Enterprise-grade threat intelligence powered by DSCI CCoE and TCPWave Security Engineering partnership"
      badge="TIaaS Platform"
      breadcrumbs={[
        { label: "Home", href: "/" },
        { label: "Threat Intelligence as a Service", href: "/tiaas" }
      ]}
    >
      <div className="container mx-auto px-4 py-16">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="grid grid-cols-2 md:grid-cols-4 gap-6 mb-16"
        >
          {stats.map((stat, index) => (
            <Card key={index} className="bg-gradient-to-br from-slate-800 to-slate-900 border-primary/30 text-center">
              <CardContent className="pt-6">
                <div className="text-3xl font-bold text-primary mb-2">{stat.value}</div>
                <div className="text-slate-400 text-sm">{stat.label}</div>
              </CardContent>
            </Card>
          ))}
        </motion.div>

        <motion.section
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.1 }}
          className="mb-16"
        >
          <h2 className="text-2xl font-bold text-white mb-6 flex items-center gap-3">
            <Shield className="w-6 h-6 text-primary" />
            About TIaaS
          </h2>
          <div className="prose prose-invert max-w-none">
            <p className="text-slate-300 text-lg leading-relaxed">
              The T-SPAN Threat Intelligence as a Service (TIaaS) platform represents a groundbreaking 
              collaboration between DSCI Centre of Cyber Security Excellence (CCoE) and TCPWave Security 
              Engineering. Our platform provides comprehensive threat intelligence capabilities designed 
              to protect Indian enterprises, government organizations, and critical infrastructure.
            </p>
            <p className="text-slate-300 leading-relaxed mt-4">
              In an era where adversaries operate with business-like efficiency and leverage advanced AI, 
              our TIaaS platform delivers proactive, AI-native defense capabilities. We don't wait for 
              threats to materialize—we anticipate and neutralize them before they can cause damage.
            </p>
          </div>
        </motion.section>

        <motion.section
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.2 }}
          className="mb-16"
        >
          <h2 className="text-2xl font-bold text-white mb-8 flex items-center gap-3">
            <Zap className="w-6 h-6 text-primary" />
            Service Offerings
          </h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {services.map((service, index) => (
              <Card key={index} className="bg-slate-800/50 border-slate-700 hover:border-primary/50 transition-colors">
                <CardHeader>
                  <div className="w-12 h-12 bg-primary/20 rounded-lg flex items-center justify-center mb-4">
                    <service.icon className="w-6 h-6 text-primary" />
                  </div>
                  <CardTitle className="text-white text-lg">{service.title}</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-slate-400 text-sm mb-4">{service.description}</p>
                  <div className="flex flex-wrap gap-2 mb-4">
                    {service.features.map((feature, idx) => (
                      <Badge key={idx} variant="outline" className="text-xs">
                        {feature}
                      </Badge>
                    ))}
                  </div>
                  <Link href={service.link}>
                    <Button variant="ghost" size="sm" className="text-primary hover:text-primary/80 p-0">
                      Learn More <ArrowRight className="w-4 h-4 ml-1" />
                    </Button>
                  </Link>
                </CardContent>
              </Card>
            ))}
          </div>
        </motion.section>

        <motion.section
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.3 }}
          className="mb-16"
        >
          <h2 className="text-2xl font-bold text-white mb-8 flex items-center gap-3">
            <AlertTriangle className="w-6 h-6 text-primary" />
            Current Threat Landscape
          </h2>
          <Card className="bg-slate-800/50 border-slate-700">
            <CardContent className="pt-6">
              <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-4">
                {threatCategories.map((threat, index) => (
                  <div key={index} className="bg-slate-900/50 rounded-lg p-4 border border-slate-700">
                    <div className="flex items-center justify-between mb-2">
                      <span className="text-white font-medium">{threat.name}</span>
                      <Badge 
                        className={`text-xs ${
                          threat.severity === 'Critical' ? 'bg-red-600' :
                          threat.severity === 'High' ? 'bg-orange-600' : 'bg-yellow-600'
                        }`}
                      >
                        {threat.severity}
                      </Badge>
                    </div>
                    <div className="text-green-400 text-sm font-mono">{threat.trend}</div>
                  </div>
                ))}
              </div>
              <div className="mt-6 text-center">
                <p className="text-slate-400 text-sm mb-4">
                  Data source: DSCI CCoE × TCPWave Global Threat Report 2025
                </p>
                <Link href="/tiaas/threat-reports">
                  <Button variant="outline">
                    View Full Threat Report <ArrowRight className="w-4 h-4 ml-2" />
                  </Button>
                </Link>
              </div>
            </CardContent>
          </Card>
        </motion.section>

        <motion.section
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.4 }}
        >
          <Card className="bg-gradient-to-br from-primary/20 to-slate-900 border-primary/30">
            <CardContent className="pt-8 pb-8 text-center">
              <h3 className="text-2xl font-bold text-white mb-4">Ready to Secure Your Organization?</h3>
              <p className="text-slate-300 mb-6 max-w-2xl mx-auto">
                Get started with T-SPAN TIaaS platform and protect your organization with 
                enterprise-grade threat intelligence backed by DSCI and TCPWave expertise.
              </p>
              <div className="flex gap-4 justify-center flex-wrap">
                <Link href="/contact">
                  <Button size="lg" className="bg-primary hover:bg-primary/90">
                    Request Demo
                  </Button>
                </Link>
                <Link href="/tiaas/pricing">
                  <Button size="lg" variant="outline">
                    View Pricing
                  </Button>
                </Link>
              </div>
            </CardContent>
          </Card>
        </motion.section>
      </div>
    </PageLayout>
  );
}