import { motion } from "framer-motion";
import { Link } from "wouter";
import PageLayout from "@/components/PageLayout";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { 
  Brain, 
  Building2, 
  GraduationCap, 
  Users,
  Cpu,
  Database,
  Shield,
  ArrowRight,
  CheckCircle,
  Award,
  Globe,
  Zap
} from "lucide-react";

export default function IntelligenceCenter() {
  const stats = [
    { value: "200+", label: "Research Publications" },
    { value: "50+", label: "PhD Scholars" },
    { value: "₹100Cr+", label: "Research Grants" },
    { value: "15+", label: "Industry Partners" }
  ];

  const researchAreas = [
    {
      title: "Adversarial Machine Learning",
      description: "Research on AI model robustness against adversarial attacks and evasion techniques",
      icon: Brain
    },
    {
      title: "Autonomous Threat Hunting",
      description: "Development of self-directing AI agents for proactive threat detection",
      icon: Cpu
    },
    {
      title: "Privacy-Preserving AI",
      description: "Federated learning and differential privacy for secure intelligence sharing",
      icon: Shield
    },
    {
      title: "Natural Language Threat Analysis",
      description: "NLP models for analyzing threat reports, dark web, and social media",
      icon: Database
    }
  ];

  const architectureLayers = [
    {
      layer: "Data Ingestion",
      components: ["Threat Feeds", "Dark Web Crawlers", "OSINT Sources", "Partner APIs", "Internal Sensors"]
    },
    {
      layer: "BITS Pilani APPCAIR",
      components: ["ML Pipeline", "NLP Engine", "Graph Analytics", "Behavioral Analysis", "Attribution Models"],
      highlight: true
    },
    {
      layer: "Intelligence Platform",
      components: ["Threat Scoring", "IOC Enrichment", "Campaign Tracking", "Actor Profiling", "MITRE Mapping"]
    },
    {
      layer: "Delivery & Action",
      components: ["APIs", "STIX/TAXII", "Dashboards", "Alerts", "Automated Response"]
    }
  ];

  const drDas = {
    name: "Dr. Ashish Das",
    title: "Director, BITS Pilani APPCAIR",
    credentials: ["PhD Computer Science", "IEEE Fellow", "ACM Distinguished Member"],
    expertise: ["AI/ML Security", "Adversarial Learning", "Threat Intelligence", "Privacy-Preserving AI"]
  };

  const useCases = [
    {
      title: "Real-Time Threat Correlation",
      description: "AI-powered correlation of global threat data with organization-specific context for prioritized alerting"
    },
    {
      title: "Predictive Threat Modeling",
      description: "Machine learning models that predict likely attack vectors based on current threat landscape"
    },
    {
      title: "Automated IOC Enrichment",
      description: "Automatic enrichment of indicators with historical context, attribution, and severity scoring"
    },
    {
      title: "Supply Chain Risk Analysis",
      description: "Continuous monitoring and risk assessment of third-party vendors and dependencies"
    }
  ];

  return (
    <PageLayout
      title="BITS Pilani Intelligence Center"
      subtitle="Strategic partnership with BITS Pilani APPCAIR for cutting-edge AI-powered threat intelligence research"
      badge="Research Partnership"
      breadcrumbs={[
        { label: "Home", href: "/" },
        { label: "TIaaS", href: "/tiaas" },
        { label: "Intelligence Center", href: "/tiaas/intelligence-center" }
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
            <Card key={index} className="bg-gradient-to-br from-blue-900/30 to-slate-900 border-blue-500/30 text-center">
              <CardContent className="pt-6">
                <div className="text-3xl font-bold text-blue-400 mb-2">{stat.value}</div>
                <div className="text-slate-400 text-sm">{stat.label}</div>
              </CardContent>
            </Card>
          ))}
        </motion.div>

        <motion.section
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.1 }}
          className="mb-12"
        >
          <h2 className="text-2xl font-bold text-white mb-6 flex items-center gap-3">
            <Building2 className="w-6 h-6 text-amber-400" />
            About BITS Pilani APPCAIR
          </h2>
          <div className="prose prose-invert max-w-none">
            <p className="text-slate-300 text-lg leading-relaxed">
              The Anuradha and Prashanth Palakurthi Centre for Artificial Intelligence Research (APPCAIR) 
              at BITS Pilani serves as the Intelligence Center for T-SPAN's threat intelligence operations. 
              This partnership combines world-class academic research with practical cybersecurity applications.
            </p>
            <p className="text-slate-300 leading-relaxed mt-4">
              APPCAIR's expertise in adversarial machine learning, natural language processing, and 
              privacy-preserving AI forms the backbone of T-SPAN's next-generation threat detection 
              and analysis capabilities.
            </p>
          </div>
        </motion.section>

        <motion.section
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.15 }}
          className="mb-12"
        >
          <h2 className="text-2xl font-bold text-white mb-6 flex items-center gap-3">
            <GraduationCap className="w-6 h-6 text-primary" />
            Research Leadership
          </h2>
          <Card className="bg-gradient-to-br from-slate-800 to-slate-900 border-blue-500/30">
            <CardContent className="pt-8">
              <div className="flex items-start gap-6">
                <div className="w-24 h-24 bg-gradient-to-br from-blue-600 to-purple-600 rounded-full flex items-center justify-center text-4xl">
                  👨‍🔬
                </div>
                <div className="flex-1">
                  <h3 className="text-xl font-bold text-white mb-1">{drDas.name}</h3>
                  <p className="text-amber-400 font-medium mb-3">{drDas.title}</p>
                  <div className="flex flex-wrap gap-2 mb-4">
                    {drDas.credentials.map((cred, idx) => (
                      <Badge key={idx} className="bg-blue-600">{cred}</Badge>
                    ))}
                  </div>
                  <div className="grid md:grid-cols-2 gap-3">
                    {drDas.expertise.map((exp, idx) => (
                      <div key={idx} className="flex items-center gap-2 text-slate-300 text-sm">
                        <CheckCircle className="w-4 h-4 text-green-500" />
                        {exp}
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </CardContent>
          </Card>
        </motion.section>

        <motion.section
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.2 }}
          className="mb-12"
        >
          <h2 className="text-2xl font-bold text-white mb-6 flex items-center gap-3">
            <Brain className="w-6 h-6 text-purple-400" />
            Research Focus Areas
          </h2>
          <div className="grid md:grid-cols-2 gap-6">
            {researchAreas.map((area, index) => (
              <Card key={index} className="bg-slate-800/50 border-slate-700 hover:border-purple-500/50 transition-colors">
                <CardContent className="pt-6">
                  <div className="flex items-start gap-4">
                    <div className="w-12 h-12 bg-purple-500/20 rounded-lg flex items-center justify-center">
                      <area.icon className="w-6 h-6 text-purple-400" />
                    </div>
                    <div>
                      <h4 className="text-white font-semibold mb-2">{area.title}</h4>
                      <p className="text-slate-400 text-sm">{area.description}</p>
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </motion.section>

        <motion.section
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.25 }}
          className="mb-12"
        >
          <h2 className="text-2xl font-bold text-white mb-6 flex items-center gap-3">
            <Cpu className="w-6 h-6 text-cyan-400" />
            Intelligence Architecture
          </h2>
          <Card className="bg-slate-800/50 border-slate-700">
            <CardContent className="pt-8">
              <div className="space-y-4">
                {architectureLayers.map((layer, index) => (
                  <div key={index} className={`flex items-center gap-4 p-4 rounded-lg ${
                    layer.highlight 
                      ? 'bg-gradient-to-r from-blue-900/50 to-purple-900/50 border border-blue-500/50' 
                      : 'bg-slate-900/50'
                  }`}>
                    <div className={`w-32 text-center py-2 rounded-lg font-semibold text-sm ${
                      layer.highlight ? 'bg-amber-500 text-slate-900' : 'bg-blue-900 text-blue-300'
                    }`}>
                      {layer.layer}
                    </div>
                    <div className="flex-1 flex flex-wrap gap-2">
                      {layer.components.map((comp, idx) => (
                        <Badge 
                          key={idx} 
                          variant="outline" 
                          className={layer.highlight ? 'border-blue-500 text-blue-300' : 'border-slate-600'}
                        >
                          {comp}
                        </Badge>
                      ))}
                    </div>
                  </div>
                ))}
              </div>
            </CardContent>
          </Card>
        </motion.section>

        <motion.section
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.3 }}
          className="mb-12"
        >
          <h2 className="text-2xl font-bold text-white mb-6 flex items-center gap-3">
            <Zap className="w-6 h-6 text-primary" />
            Key Use Cases
          </h2>
          <div className="grid md:grid-cols-2 gap-6">
            {useCases.map((useCase, index) => (
              <Card key={index} className="bg-slate-800/50 border-slate-700">
                <CardContent className="pt-6">
                  <div className="flex items-start gap-3">
                    <div className="w-8 h-8 bg-primary/20 rounded-lg flex items-center justify-center flex-shrink-0">
                      <span className="text-primary font-bold">{index + 1}</span>
                    </div>
                    <div>
                      <h4 className="text-white font-semibold mb-2">{useCase.title}</h4>
                      <p className="text-slate-400 text-sm">{useCase.description}</p>
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </motion.section>

        <motion.section
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.35 }}
        >
          <Card className="bg-gradient-to-br from-blue-900/30 to-slate-900 border-blue-500/30">
            <CardContent className="pt-8 pb-8 text-center">
              <h3 className="text-2xl font-bold text-white mb-4">Research Collaboration Opportunities</h3>
              <p className="text-slate-300 mb-6 max-w-2xl mx-auto">
                Partner with BITS Pilani APPCAIR and T-SPAN for cutting-edge cybersecurity research, 
                PhD programs, and industry collaboration.
              </p>
              <div className="flex gap-4 justify-center flex-wrap">
                <Link href="/contact">
                  <Button size="lg" className="bg-primary hover:bg-primary/90">
                    Contact Research Team
                  </Button>
                </Link>
                <Link href="/programs/masters-cybersecurity">
                  <Button size="lg" variant="outline">
                    View Academic Programs
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