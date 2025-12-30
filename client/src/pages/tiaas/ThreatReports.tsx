import { motion } from "framer-motion";
import { Link } from "wouter";
import PageLayout from "@/components/PageLayout";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { 
  FileText, 
  AlertTriangle, 
  Brain, 
  Shield,
  TrendingUp,
  Download,
  Calendar,
  Eye,
  Bot,
  Skull,
  Globe
} from "lucide-react";

export default function ThreatReports() {
  const featuredReport = {
    title: "Don't Underestimate Today's Enterprising Adversaries",
    subtitle: "DSCI CCoE × TCPWave Global Threat Report 2025",
    date: "December 2025",
    keyFindings: [
      "78% of CISOs believe AI-powered threats are significantly impacting their organizations",
      "Ransomware payments reached $459.8 million by mid-2025",
      "AI agents have become dominant threat vectors operating at unprecedented speeds",
      "GenAI democratizes advanced attack capabilities to less skilled adversaries"
    ],
    topics: ["AI-Driven Attacks", "Rogue AI Agents", "Ransomware Evolution", "Supply Chain Threats"]
  };

  const recentIncidents = [
    {
      name: "University of Pennsylvania Dual Breach",
      date: "November 2025",
      type: "Data Breach",
      impact: "Oracle vulnerability & SSO credential compromise"
    },
    {
      name: "London Councils Cyber Incident",
      date: "2025",
      type: "Data Exposure",
      impact: "500,000+ residents affected"
    },
    {
      name: "Balancer DeFi Hack",
      date: "2025",
      type: "Financial",
      impact: "$120 million stolen"
    },
    {
      name: "DoorDash Breach",
      date: "2025",
      type: "Data Breach",
      impact: "Customer data exposed"
    }
  ];

  const threatTrends = [
    {
      icon: Brain,
      title: "Rise of Generative AI in Attacks",
      description: "GenAI enables creation of convincing phishing emails, polymorphic malware, and automated reconnaissance at scale",
      severity: "Critical"
    },
    {
      icon: Bot,
      title: "Autonomous AI Agents",
      description: "Self-directing AI agents capable of autonomous reconnaissance, exploitation, and tactical evolution",
      severity: "Critical"
    },
    {
      icon: Skull,
      title: "Post-LockBit Ransomware Landscape",
      description: "RansomHub and other groups rapidly filling the vacuum left by LockBit disruption",
      severity: "High"
    },
    {
      icon: Globe,
      title: "Supply Chain Attacks",
      description: "Increasing sophistication in targeting software supply chains and third-party dependencies",
      severity: "High"
    }
  ];

  const reportArchive = [
    { title: "Q4 2025 Threat Landscape Update", date: "Dec 2025", type: "Quarterly" },
    { title: "India Banking Sector Threat Analysis", date: "Nov 2025", type: "Sector" },
    { title: "DNS Exfiltration Techniques Deep Dive", date: "Nov 2025", type: "Technical" },
    { title: "Critical Infrastructure Protection", date: "Oct 2025", type: "Sector" },
    { title: "AI-Powered Phishing Evolution", date: "Oct 2025", type: "Technical" },
    { title: "RBI Compliance & Cyber Threats", date: "Sep 2025", type: "Compliance" }
  ];

  return (
    <PageLayout
      title="Threat Intelligence Reports"
      subtitle="Comprehensive research on evolving cyber threats from DSCI CCoE and TCPWave Security Engineering"
      badge="Research & Analysis"
      breadcrumbs={[
        { label: "Home", href: "/" },
        { label: "TIaaS", href: "/tiaas" },
        { label: "Threat Reports", href: "/tiaas/threat-reports" }
      ]}
    >
      <div className="container mx-auto px-4 py-16">
        <motion.section
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="mb-12"
        >
          <h2 className="text-2xl font-bold text-white mb-6 flex items-center gap-3">
            <FileText className="w-6 h-6 text-primary" />
            Featured Report
          </h2>
          <Card className="bg-gradient-to-br from-red-900/20 to-slate-900 border-red-500/30">
            <CardContent className="pt-8">
              <div className="flex items-start justify-between mb-6">
                <div>
                  <Badge className="bg-red-600 mb-3">2025 Global Threat Report</Badge>
                  <h3 className="text-2xl font-bold text-white mb-2">{featuredReport.title}</h3>
                  <p className="text-primary">{featuredReport.subtitle}</p>
                </div>
                <div className="text-right">
                  <div className="flex items-center gap-2 text-slate-400 mb-2">
                    <Calendar className="w-4 h-4" />
                    <span>{featuredReport.date}</span>
                  </div>
                  <Button className="bg-primary hover:bg-primary/90">
                    <Download className="w-4 h-4 mr-2" />
                    Download Report
                  </Button>
                </div>
              </div>

              <div className="grid lg:grid-cols-2 gap-6">
                <div>
                  <h4 className="text-white font-semibold mb-3 flex items-center gap-2">
                    <Eye className="w-4 h-4 text-primary" />
                    Key Findings
                  </h4>
                  <ul className="space-y-2">
                    {featuredReport.keyFindings.map((finding, index) => (
                      <li key={index} className="text-slate-300 text-sm flex items-start gap-2">
                        <AlertTriangle className="w-4 h-4 text-amber-500 mt-0.5 flex-shrink-0" />
                        {finding}
                      </li>
                    ))}
                  </ul>
                </div>
                <div>
                  <h4 className="text-white font-semibold mb-3">Topics Covered</h4>
                  <div className="flex flex-wrap gap-2">
                    {featuredReport.topics.map((topic, index) => (
                      <Badge key={index} variant="outline" className="border-red-500/50 text-red-400">
                        {topic}
                      </Badge>
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
          transition={{ duration: 0.5, delay: 0.1 }}
          className="mb-12"
        >
          <h2 className="text-2xl font-bold text-white mb-6 flex items-center gap-3">
            <TrendingUp className="w-6 h-6 text-primary" />
            Emerging Threat Trends
          </h2>
          <div className="grid md:grid-cols-2 gap-6">
            {threatTrends.map((trend, index) => (
              <Card key={index} className="bg-slate-800/50 border-slate-700">
                <CardContent className="pt-6">
                  <div className="flex items-start gap-4">
                    <div className={`w-12 h-12 rounded-lg flex items-center justify-center ${
                      trend.severity === 'Critical' ? 'bg-red-500/20' : 'bg-orange-500/20'
                    }`}>
                      <trend.icon className={`w-6 h-6 ${
                        trend.severity === 'Critical' ? 'text-red-400' : 'text-orange-400'
                      }`} />
                    </div>
                    <div className="flex-1">
                      <div className="flex items-center gap-2 mb-2">
                        <h4 className="text-white font-semibold">{trend.title}</h4>
                        <Badge className={`text-xs ${
                          trend.severity === 'Critical' ? 'bg-red-600' : 'bg-orange-600'
                        }`}>
                          {trend.severity}
                        </Badge>
                      </div>
                      <p className="text-slate-400 text-sm">{trend.description}</p>
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
          transition={{ duration: 0.5, delay: 0.2 }}
          className="mb-12"
        >
          <h2 className="text-2xl font-bold text-white mb-6 flex items-center gap-3">
            <AlertTriangle className="w-6 h-6 text-amber-500" />
            Notable Incidents - 2025
          </h2>
          <div className="grid md:grid-cols-2 gap-4">
            {recentIncidents.map((incident, index) => (
              <Card key={index} className="bg-slate-800/50 border-slate-700">
                <CardContent className="pt-6">
                  <div className="flex items-center justify-between mb-2">
                    <h4 className="text-white font-medium">{incident.name}</h4>
                    <Badge variant="outline" className="text-xs">{incident.date}</Badge>
                  </div>
                  <div className="flex items-center gap-2 mb-2">
                    <Badge className="bg-red-600/20 text-red-400 text-xs">{incident.type}</Badge>
                  </div>
                  <p className="text-slate-400 text-sm">{incident.impact}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </motion.section>

        <motion.section
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.3 }}
        >
          <h2 className="text-2xl font-bold text-white mb-6 flex items-center gap-3">
            <FileText className="w-6 h-6 text-primary" />
            Report Archive
          </h2>
          <Card className="bg-slate-800/50 border-slate-700">
            <CardContent className="pt-6">
              <div className="space-y-3">
                {reportArchive.map((report, index) => (
                  <div key={index} className="flex items-center justify-between p-4 bg-slate-900/50 rounded-lg hover:bg-slate-900 transition-colors">
                    <div className="flex items-center gap-4">
                      <FileText className="w-5 h-5 text-primary" />
                      <div>
                        <h4 className="text-white font-medium">{report.title}</h4>
                        <p className="text-slate-500 text-sm">{report.date}</p>
                      </div>
                    </div>
                    <div className="flex items-center gap-3">
                      <Badge variant="outline" className="text-xs">{report.type}</Badge>
                      <Button variant="ghost" size="sm" className="text-primary">
                        <Download className="w-4 h-4" />
                      </Button>
                    </div>
                  </div>
                ))}
              </div>
            </CardContent>
          </Card>
        </motion.section>
      </div>
    </PageLayout>
  );
}