import { motion } from "framer-motion";
import { Link } from "wouter";
import PageLayout from "@/components/PageLayout";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { 
  Shield, 
  Terminal, 
  BookOpen, 
  CheckCircle, 
  Clock, 
  Users, 
  Award,
  Zap,
  GitBranch,
  Lock,
  ArrowRight,
  GraduationCap,
  Server,
  Code
} from "lucide-react";

export default function DevSecOpsBasic() {
  const modules = [
    {
      week: "Week 1-2",
      title: "DevSecOps Fundamentals",
      topics: [
        "Introduction to DevSecOps culture",
        "Security in the SDLC lifecycle",
        "Shift-left security principles",
        "DevOps vs DevSecOps comparison",
        "Security champions program"
      ]
    },
    {
      week: "Week 3-4",
      title: "Version Control Security",
      topics: [
        "Git security best practices",
        "Secret scanning and prevention",
        "Branch protection rules",
        "Code review security guidelines",
        "Pre-commit hooks for security"
      ]
    },
    {
      week: "Week 5-6",
      title: "Secure Coding Practices",
      topics: [
        "OWASP Top 10 vulnerabilities",
        "Input validation and sanitization",
        "Authentication and authorization",
        "Secure session management",
        "Error handling and logging"
      ]
    },
    {
      week: "Week 7-8",
      title: "CI/CD Pipeline Security",
      topics: [
        "Secure CI/CD pipeline design",
        "Jenkins/GitHub Actions security",
        "Secrets management in pipelines",
        "Build artifact security",
        "Deployment gate controls"
      ]
    }
  ];

  const highlights = [
    { icon: Clock, label: "Duration", value: "8 Weeks" },
    { icon: Users, label: "Batch Size", value: "30 Students" },
    { icon: Award, label: "Certificate", value: "T-SPAN Certified" },
    { icon: GraduationCap, label: "Level", value: "Beginner" }
  ];

  const skills = [
    "DevSecOps fundamentals",
    "Git security practices",
    "OWASP Top 10 mitigation",
    "Secure coding techniques",
    "CI/CD security basics",
    "Secret management",
    "Security code review",
    "Compliance awareness"
  ];

  const prerequisites = [
    "Basic understanding of software development",
    "Familiarity with version control (Git)",
    "Basic command line knowledge",
    "Understanding of web applications"
  ];

  const tools = [
    { name: "Git", category: "Version Control" },
    { name: "GitHub Actions", category: "CI/CD" },
    { name: "GitLeaks", category: "Secret Scanning" },
    { name: "SonarQube", category: "Code Quality" },
    { name: "OWASP ZAP", category: "Security Testing" }
  ];

  return (
    <PageLayout
      title="DevSecOps Foundations"
      subtitle="Master the fundamentals of integrating security into DevOps practices and build a security-first development culture"
      badge="DevSecOps Track - Level 1"
      breadcrumbs={[
        { label: "Home", href: "/" },
        { label: "Courses", href: "/courses" },
        { label: "DevSecOps Basic", href: "/courses/devsecops-basic" }
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
                <Shield className="w-6 h-6 text-primary" />
                Course Overview
              </h2>
              <div className="prose prose-invert max-w-none">
                <p className="text-slate-300 text-lg leading-relaxed">
                  This foundational course introduces the principles and practices of DevSecOps, 
                  teaching you how to integrate security seamlessly into the software development 
                  lifecycle. You'll learn to shift security left and build a culture where 
                  security is everyone's responsibility.
                </p>
                <p className="text-slate-300 leading-relaxed mt-4">
                  Designed for developers, operations engineers, and security professionals 
                  transitioning to DevSecOps, this course emphasizes hands-on practice with 
                  real-world scenarios from Indian enterprises and government organizations.
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
              transition={{ duration: 0.5, delay: 0.2 }}
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
                <Code className="w-6 h-6 text-primary" />
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
                    <Badge className="mb-4 bg-green-600">DevSecOps Track - Level 1</Badge>
                    <div className="text-4xl font-bold text-white mb-2">₹55,000</div>
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
                    <p className="text-sm text-slate-400">Next batch starts: January 20, 2025</p>
                  </div>

                  <div className="border-t border-slate-700 pt-4">
                    <h4 className="text-white font-semibold mb-3">DevSecOps Track</h4>
                    <div className="space-y-2">
                      <div className="flex items-center gap-2 text-primary text-sm font-semibold">
                        <ArrowRight className="w-4 h-4" />
                        <span>DevSecOps Foundations (Level 1)</span>
                      </div>
                      <Link href="/courses/devsecops-intermediate">
                        <div className="flex items-center gap-2 text-slate-400 hover:text-primary cursor-pointer text-sm">
                          <ArrowRight className="w-4 h-4" />
                          <span>DevSecOps Engineering (Level 2)</span>
                        </div>
                      </Link>
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