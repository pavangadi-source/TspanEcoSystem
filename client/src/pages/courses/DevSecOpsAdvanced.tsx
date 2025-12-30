import { motion } from "framer-motion";
import { Link } from "wouter";
import PageLayout from "@/components/PageLayout";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { 
  ShieldAlert, 
  Terminal, 
  BookOpen, 
  CheckCircle, 
  Clock, 
  Users, 
  Award,
  Zap,
  Cloud,
  Lock,
  ArrowRight,
  GraduationCap,
  Server,
  Eye,
  AlertTriangle,
  Activity,
  Workflow,
  Target
} from "lucide-react";

export default function DevSecOpsAdvanced() {
  const modules = [
    {
      week: "Week 1-2",
      title: "Cloud Security Architecture",
      topics: [
        "AWS/Azure/GCP security services",
        "Cloud security posture management",
        "Identity and access management",
        "Network security in cloud",
        "Multi-cloud security strategies"
      ]
    },
    {
      week: "Week 3-4",
      title: "Kubernetes Security",
      topics: [
        "Kubernetes security architecture",
        "Pod security standards",
        "Network policies and service mesh",
        "Secrets management in K8s",
        "Runtime security with Falco"
      ]
    },
    {
      week: "Week 5-6",
      title: "Security Orchestration & Automation",
      topics: [
        "SOAR platforms integration",
        "Security workflow automation",
        "Incident response automation",
        "ChatOps for security",
        "Custom security tooling"
      ]
    },
    {
      week: "Week 7-8",
      title: "Threat Modeling & Risk Assessment",
      topics: [
        "STRIDE threat modeling",
        "Attack surface analysis",
        "Risk scoring and prioritization",
        "Security architecture review",
        "Continuous threat modeling"
      ]
    },
    {
      week: "Week 9-10",
      title: "Security Observability",
      topics: [
        "Security metrics and KPIs",
        "Centralized logging (ELK/Splunk)",
        "SIEM integration",
        "Anomaly detection",
        "Security dashboards"
      ]
    },
    {
      week: "Week 11-12",
      title: "Enterprise DevSecOps Program",
      topics: [
        "DevSecOps maturity assessment",
        "Security champions scaling",
        "Governance and compliance (ISO 27001, SOC2)",
        "RBI and CERT-In compliance",
        "DevSecOps transformation roadmap"
      ]
    }
  ];

  const highlights = [
    { icon: Clock, label: "Duration", value: "12 Weeks" },
    { icon: Users, label: "Batch Size", value: "20 Students" },
    { icon: Award, label: "Certificate", value: "T-SPAN DevSecOps Expert" },
    { icon: GraduationCap, label: "Level", value: "Advanced" }
  ];

  const skills = [
    "Cloud security architecture",
    "Kubernetes security",
    "Security automation (SOAR)",
    "Threat modeling",
    "Security observability",
    "SIEM/SOAR integration",
    "Compliance automation",
    "Security program management",
    "Incident response",
    "Security metrics",
    "Risk assessment",
    "DevSecOps transformation"
  ];

  const prerequisites = [
    "Completion of DevSecOps Engineering or equivalent",
    "Hands-on experience with security tools",
    "Cloud platform experience (AWS/Azure/GCP)",
    "Kubernetes fundamentals",
    "Understanding of enterprise security"
  ];

  const projects = [
    {
      title: "Cloud Security Platform",
      description: "Design and implement a comprehensive cloud security monitoring and compliance platform for multi-cloud environments"
    },
    {
      title: "Kubernetes Security Framework",
      description: "Build an end-to-end Kubernetes security solution with policy enforcement, runtime protection, and compliance reporting"
    },
    {
      title: "Security Automation Platform",
      description: "Create a SOAR-based security automation platform with custom playbooks for incident response"
    },
    {
      title: "Capstone: Enterprise DevSecOps Program",
      description: "Design a complete DevSecOps transformation program for a large enterprise with metrics, governance, and roadmap"
    }
  ];

  const tools = [
    { name: "AWS Security Hub", category: "Cloud" },
    { name: "Azure Sentinel", category: "SIEM" },
    { name: "Falco", category: "Runtime" },
    { name: "Kyverno", category: "K8s Policy" },
    { name: "Prowler", category: "Cloud Audit" },
    { name: "Elastic SIEM", category: "SIEM" },
    { name: "Cortex XSOAR", category: "SOAR" },
    { name: "Grafana", category: "Observability" },
    { name: "Vault", category: "Secrets" },
    { name: "Istio", category: "Service Mesh" }
  ];

  const certifications = [
    "Certified DevSecOps Professional (CDP)",
    "AWS Security Specialty (preparation)",
    "Certified Kubernetes Security Specialist (CKS) preparation",
    "ISO 27001 Lead Implementer awareness"
  ];

  return (
    <PageLayout
      title="DevSecOps Mastery"
      subtitle="Become an expert in enterprise-scale DevSecOps with cloud security, Kubernetes, automation, and security program leadership"
      badge="DevSecOps Track - Level 3"
      breadcrumbs={[
        { label: "Home", href: "/" },
        { label: "Courses", href: "/courses" },
        { label: "DevSecOps Advanced", href: "/courses/devsecops-advanced" }
      ]}
    >
      <div className="container mx-auto px-4 py-16">
        <div className="grid lg:grid-cols-3 gap-8">
          <div className="lg:col-span-2 space-y-12">
            <motion.section
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
            >
              <h2 className="text-2xl font-bold text-white mb-6 flex items-center gap-3">
                <ShieldAlert className="w-6 h-6 text-primary" />
                Course Overview
              </h2>
              <div className="prose prose-invert max-w-none">
                <p className="text-slate-300 text-lg leading-relaxed">
                  This advanced course transforms you into a DevSecOps leader capable of designing, 
                  implementing, and managing enterprise-scale security programs. You'll master cloud 
                  security, Kubernetes security, security automation, and organizational transformation.
                </p>
                <p className="text-slate-300 leading-relaxed mt-4">
                  With a focus on Indian regulatory compliance (RBI, CERT-In) and global standards 
                  (ISO 27001, SOC2), you'll learn to build security programs that meet the most 
                  stringent requirements. This course prepares you for senior DevSecOps, security 
                  architect, and CISO roles.
                </p>
              </div>
            </motion.section>

            <motion.section
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.1 }}
            >
              <h2 className="text-2xl font-bold text-white mb-6 flex items-center gap-3">
                <BookOpen className="w-6 h-6 text-primary" />
                Curriculum
              </h2>
              <div className="space-y-4">
                {modules.map((module, index) => (
                  <Card key={index} className="bg-slate-800/50 border-slate-700">
                    <CardHeader className="pb-3">
                      <div className="flex items-center justify-between">
                        <Badge variant="outline" className="text-primary border-primary">
                          {module.week}
                        </Badge>
                        <span className="text-sm text-slate-400">Module {index + 1}</span>
                      </div>
                      <CardTitle className="text-xl text-white">{module.title}</CardTitle>
                    </CardHeader>
                    <CardContent>
                      <ul className="space-y-2">
                        {module.topics.map((topic, topicIndex) => (
                          <li key={topicIndex} className="flex items-start gap-2 text-slate-300">
                            <CheckCircle className="w-4 h-4 text-green-500 mt-1 flex-shrink-0" />
                            <span>{topic}</span>
                          </li>
                        ))}
                      </ul>
                    </CardContent>
                  </Card>
                ))}
              </div>
            </motion.section>

            <motion.section
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.15 }}
            >
              <h2 className="text-2xl font-bold text-white mb-6 flex items-center gap-3">
                <Workflow className="w-6 h-6 text-primary" />
                Capstone Projects
              </h2>
              <div className="grid gap-4">
                {projects.map((project, index) => (
                  <Card key={index} className="bg-slate-800/50 border-slate-700">
                    <CardContent className="pt-6">
                      <div className="flex items-start gap-4">
                        <div className="w-10 h-10 bg-primary/20 rounded-lg flex items-center justify-center flex-shrink-0">
                          <span className="text-primary font-bold">{index + 1}</span>
                        </div>
                        <div>
                          <h4 className="text-white font-semibold mb-1">{project.title}</h4>
                          <p className="text-slate-400 text-sm">{project.description}</p>
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
            >
              <h2 className="text-2xl font-bold text-white mb-6 flex items-center gap-3">
                <Terminal className="w-6 h-6 text-primary" />
                Tools & Technologies
              </h2>
              <div className="grid grid-cols-2 md:grid-cols-5 gap-3">
                {tools.map((tool, index) => (
                  <div key={index} className="bg-slate-800/50 border border-slate-700 rounded-lg p-3 text-center">
                    <div className="text-white font-medium text-sm">{tool.name}</div>
                    <div className="text-slate-500 text-xs">{tool.category}</div>
                  </div>
                ))}
              </div>
            </motion.section>

            <motion.section
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.25 }}
            >
              <h2 className="text-2xl font-bold text-white mb-6 flex items-center gap-3">
                <Award className="w-6 h-6 text-primary" />
                Certification Preparation
              </h2>
              <Card className="bg-slate-800/50 border-slate-700">
                <CardContent className="pt-6">
                  <ul className="space-y-3">
                    {certifications.map((cert, index) => (
                      <li key={index} className="flex items-start gap-3 text-slate-300">
                        <Target className="w-5 h-5 text-primary mt-0.5" />
                        <span>{cert}</span>
                      </li>
                    ))}
                  </ul>
                </CardContent>
              </Card>
            </motion.section>

            <motion.section
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.3 }}
            >
              <h2 className="text-2xl font-bold text-white mb-6 flex items-center gap-3">
                <Zap className="w-6 h-6 text-primary" />
                Skills You'll Gain
              </h2>
              <div className="grid md:grid-cols-2 gap-3">
                {skills.map((skill, index) => (
                  <div key={index} className="flex items-center gap-3 bg-slate-800/30 rounded-lg p-3">
                    <div className="w-2 h-2 bg-primary rounded-full" />
                    <span className="text-slate-300">{skill}</span>
                  </div>
                ))}
              </div>
            </motion.section>

            <motion.section
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.35 }}
            >
              <h2 className="text-2xl font-bold text-white mb-6 flex items-center gap-3">
                <Lock className="w-6 h-6 text-primary" />
                Prerequisites
              </h2>
              <Card className="bg-slate-800/50 border-slate-700">
                <CardContent className="pt-6">
                  <ul className="space-y-3">
                    {prerequisites.map((prereq, index) => (
                      <li key={index} className="flex items-start gap-3 text-slate-300">
                        <CheckCircle className="w-5 h-5 text-blue-500 mt-0.5" />
                        <span>{prereq}</span>
                      </li>
                    ))}
                  </ul>
                </CardContent>
              </Card>
            </motion.section>
          </div>

          <div className="space-y-6">
            <motion.div
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.5 }}
            >
              <Card className="bg-gradient-to-br from-slate-800 to-slate-900 border-primary/30 sticky top-24">
                <CardHeader>
                  <div className="text-center">
                    <Badge className="mb-4 bg-purple-600">DevSecOps Track - Level 3</Badge>
                    <div className="text-4xl font-bold text-white mb-2">₹1,10,000</div>
                    <p className="text-slate-400">One-time payment</p>
                  </div>
                </CardHeader>
                <CardContent className="space-y-6">
                  <div className="grid grid-cols-2 gap-4">
                    {highlights.map((item, index) => (
                      <div key={index} className="text-center p-3 bg-slate-800/50 rounded-lg" data-testid={`highlight-${index}`}>
                        <item.icon className="w-5 h-5 text-primary mx-auto mb-1" />
                        <div className="text-xs text-slate-400">{item.label}</div>
                        <div className="text-sm font-semibold text-white">{item.value}</div>
                      </div>
                    ))}
                  </div>

                  <Link href="/login">
                    <Button className="w-full bg-primary hover:bg-primary/90" size="lg" data-testid="button-enroll">
                      Enroll Now
                      <ArrowRight className="w-4 h-4 ml-2" />
                    </Button>
                  </Link>

                  <div className="text-center">
                    <p className="text-sm text-slate-400">Next batch starts: March 15, 2025</p>
                  </div>

                  <div className="border-t border-slate-700 pt-4">
                    <h4 className="text-white font-semibold mb-3">Complete DevSecOps Track</h4>
                    <div className="space-y-2">
                      <Link href="/courses/devsecops-basic">
                        <div className="flex items-center gap-2 text-green-400 cursor-pointer text-sm">
                          <CheckCircle className="w-4 h-4" />
                          <span>DevSecOps Foundations (Level 1)</span>
                        </div>
                      </Link>
                      <Link href="/courses/devsecops-intermediate">
                        <div className="flex items-center gap-2 text-green-400 cursor-pointer text-sm">
                          <CheckCircle className="w-4 h-4" />
                          <span>DevSecOps Engineering (Level 2)</span>
                        </div>
                      </Link>
                      <div className="flex items-center gap-2 text-primary text-sm font-semibold">
                        <ArrowRight className="w-4 h-4" />
                        <span>DevSecOps Mastery (Level 3)</span>
                      </div>
                    </div>
                  </div>

                  <div className="border-t border-slate-700 pt-4">
                    <h4 className="text-white font-semibold mb-2">Career Outcomes</h4>
                    <ul className="space-y-1 text-sm text-slate-400">
                      <li>• Senior DevSecOps Engineer</li>
                      <li>• Security Architect</li>
                      <li>• DevSecOps Lead/Manager</li>
                      <li>• Cloud Security Specialist</li>
                      <li>• CISO (pathway)</li>
                    </ul>
                  </div>
                </CardContent>
              </Card>
            </motion.div>
          </div>
        </div>
      </div>
    </PageLayout>
  );
}