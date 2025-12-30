import { motion } from "framer-motion";
import { Link } from "wouter";
import PageLayout from "@/components/PageLayout";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { 
  ShieldCheck, 
  Terminal, 
  BookOpen, 
  CheckCircle, 
  Clock, 
  Users, 
  Award,
  Zap,
  Container,
  Lock,
  ArrowRight,
  GraduationCap,
  Server,
  Scan,
  AlertTriangle,
  FileSearch
} from "lucide-react";

export default function DevSecOpsIntermediate() {
  const modules = [
    {
      week: "Week 1-2",
      title: "Static Application Security Testing (SAST)",
      topics: [
        "SAST tools and integration",
        "SonarQube advanced configuration",
        "Semgrep rule creation",
        "False positive management",
        "Custom security rules"
      ]
    },
    {
      week: "Week 3-4",
      title: "Dynamic Application Security Testing (DAST)",
      topics: [
        "DAST fundamentals and tools",
        "OWASP ZAP automation",
        "Burp Suite integration",
        "API security testing",
        "Authenticated scanning"
      ]
    },
    {
      week: "Week 5-6",
      title: "Container Security",
      topics: [
        "Docker security best practices",
        "Image vulnerability scanning",
        "Trivy and Clair integration",
        "Runtime container security",
        "Secure container registries"
      ]
    },
    {
      week: "Week 7-8",
      title: "Infrastructure as Code Security",
      topics: [
        "Terraform security scanning",
        "CloudFormation security",
        "Checkov and tfsec tools",
        "Policy as Code (OPA)",
        "Compliance automation"
      ]
    },
    {
      week: "Week 9-10",
      title: "Software Composition Analysis",
      topics: [
        "Dependency vulnerability scanning",
        "SBOM generation and management",
        "Snyk and Dependabot integration",
        "License compliance",
        "Supply chain security"
      ]
    }
  ];

  const highlights = [
    { icon: Clock, label: "Duration", value: "10 Weeks" },
    { icon: Users, label: "Batch Size", value: "25 Students" },
    { icon: Award, label: "Certificate", value: "T-SPAN Certified" },
    { icon: GraduationCap, label: "Level", value: "Intermediate" }
  ];

  const skills = [
    "SAST tool implementation",
    "DAST automation",
    "Container security",
    "IaC security scanning",
    "Dependency analysis",
    "SBOM management",
    "Security pipeline design",
    "Vulnerability management",
    "Compliance automation",
    "Policy as Code"
  ];

  const prerequisites = [
    "Completion of DevSecOps Foundations or equivalent",
    "Experience with CI/CD pipelines",
    "Basic Docker knowledge",
    "Understanding of cloud platforms"
  ];

  const projects = [
    {
      title: "Secure CI/CD Pipeline",
      description: "Build a comprehensive security pipeline with SAST, DAST, and SCA integrated into GitHub Actions"
    },
    {
      title: "Container Security Framework",
      description: "Implement end-to-end container security from build to runtime with automated scanning"
    },
    {
      title: "IaC Security Automation",
      description: "Create automated security checks for Terraform and CloudFormation with custom policies"
    }
  ];

  const tools = [
    { name: "SonarQube", category: "SAST" },
    { name: "Semgrep", category: "SAST" },
    { name: "OWASP ZAP", category: "DAST" },
    { name: "Trivy", category: "Container" },
    { name: "Checkov", category: "IaC" },
    { name: "Snyk", category: "SCA" },
    { name: "Syft", category: "SBOM" },
    { name: "OPA", category: "Policy" }
  ];

  return (
    <PageLayout
      title="DevSecOps Engineering"
      subtitle="Master security automation tools and techniques for comprehensive application and infrastructure security testing"
      badge="DevSecOps Track - Level 2"
      breadcrumbs={[
        { label: "Home", href: "/" },
        { label: "Courses", href: "/courses" },
        { label: "DevSecOps Intermediate", href: "/courses/devsecops-intermediate" }
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
                <ShieldCheck className="w-6 h-6 text-primary" />
                Course Overview
              </h2>
              <div className="prose prose-invert max-w-none">
                <p className="text-slate-300 text-lg leading-relaxed">
                  This intermediate course dives deep into security automation tools and techniques. 
                  You'll learn to implement comprehensive security testing across the entire application 
                  lifecycle, from code analysis to container security and infrastructure scanning.
                </p>
                <p className="text-slate-300 leading-relaxed mt-4">
                  With hands-on labs using industry-standard tools like SonarQube, OWASP ZAP, Trivy, 
                  and Checkov, you'll build practical expertise in automating security at scale. 
                  This course prepares you for DevSecOps engineer and security automation roles.
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
                <Server className="w-6 h-6 text-primary" />
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
              <div className="grid grid-cols-2 md:grid-cols-4 gap-3">
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
              transition={{ duration: 0.5, delay: 0.3 }}
            >
              <h2 className="text-2xl font-bold text-white mb-6 flex items-center gap-3">
                <FileSearch className="w-6 h-6 text-primary" />
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
                    <Badge className="mb-4 bg-blue-600">DevSecOps Track - Level 2</Badge>
                    <div className="text-4xl font-bold text-white mb-2">₹75,000</div>
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
                    <p className="text-sm text-slate-400">Next batch starts: February 10, 2025</p>
                  </div>

                  <div className="border-t border-slate-700 pt-4">
                    <h4 className="text-white font-semibold mb-3">DevSecOps Track</h4>
                    <div className="space-y-2">
                      <Link href="/courses/devsecops-basic">
                        <div className="flex items-center gap-2 text-green-400 cursor-pointer text-sm">
                          <CheckCircle className="w-4 h-4" />
                          <span>DevSecOps Foundations (Level 1)</span>
                        </div>
                      </Link>
                      <div className="flex items-center gap-2 text-primary text-sm font-semibold">
                        <ArrowRight className="w-4 h-4" />
                        <span>DevSecOps Engineering (Level 2)</span>
                      </div>
                      <Link href="/courses/devsecops-advanced">
                        <div className="flex items-center gap-2 text-slate-400 hover:text-primary cursor-pointer text-sm">
                          <ArrowRight className="w-4 h-4" />
                          <span>DevSecOps Mastery (Level 3)</span>
                        </div>
                      </Link>
                    </div>
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