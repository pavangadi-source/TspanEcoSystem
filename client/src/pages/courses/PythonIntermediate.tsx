import { motion } from "framer-motion";
import { Link } from "wouter";
import PageLayout from "@/components/PageLayout";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { 
  Code2, 
  Terminal, 
  BookOpen, 
  CheckCircle, 
  Clock, 
  Users, 
  Award,
  Zap,
  Database,
  GitBranch,
  ArrowRight,
  GraduationCap,
  Server,
  Container
} from "lucide-react";

export default function PythonIntermediate() {
  const modules = [
    {
      week: "Week 1-2",
      title: "Advanced Python Concepts",
      topics: [
        "Generators and iterators",
        "Context managers",
        "Advanced decorators",
        "Metaclasses introduction",
        "Type hints and mypy"
      ]
    },
    {
      week: "Week 3-4",
      title: "Data Engineering with Python",
      topics: [
        "Advanced Pandas operations",
        "Data cleaning and transformation",
        "Working with databases (SQLAlchemy)",
        "ETL pipeline basics",
        "Data validation with Pydantic"
      ]
    },
    {
      week: "Week 5-6",
      title: "Testing & Code Quality",
      topics: [
        "Unit testing with pytest",
        "Mocking and fixtures",
        "Code coverage analysis",
        "Linting with flake8/black",
        "Pre-commit hooks"
      ]
    },
    {
      week: "Week 7-8",
      title: "APIs & Microservices",
      topics: [
        "REST API design principles",
        "FastAPI framework",
        "Request validation",
        "Authentication patterns",
        "API documentation with OpenAPI"
      ]
    },
    {
      week: "Week 9-10",
      title: "Containerization & CI/CD",
      topics: [
        "Docker fundamentals",
        "Dockerfile best practices",
        "Docker Compose for development",
        "GitHub Actions basics",
        "Automated testing pipelines"
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
    "Advanced Python patterns",
    "Data pipeline development",
    "API design and implementation",
    "Test-driven development",
    "Docker containerization",
    "CI/CD pipeline setup",
    "Database operations",
    "Code quality practices",
    "Git workflow mastery",
    "Documentation standards"
  ];

  const prerequisites = [
    "Completion of Python Basic course or equivalent",
    "Understanding of OOP concepts",
    "Basic command line proficiency",
    "Familiarity with Git version control"
  ];

  const projects = [
    {
      title: "Data Pipeline Project",
      description: "Build an ETL pipeline that ingests, transforms, and loads cybersecurity log data"
    },
    {
      title: "REST API Development",
      description: "Create a FastAPI service for threat intelligence data with authentication"
    },
    {
      title: "CI/CD Implementation",
      description: "Set up automated testing and deployment for a Python application"
    }
  ];

  return (
    <PageLayout
      title="Python for MLOps - Intermediate"
      subtitle="Master advanced Python techniques, data engineering, and DevOps practices essential for MLOps workflows"
      badge="MLOps Track - Level 2"
      breadcrumbs={[
        { label: "Home", href: "/" },
        { label: "Courses", href: "/courses" },
        { label: "Python Intermediate", href: "/courses/python-intermediate" }
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
                <Code2 className="w-6 h-6 text-primary" />
                Course Overview
              </h2>
              <div className="prose prose-invert max-w-none">
                <p className="text-slate-300 text-lg leading-relaxed">
                  This intermediate course bridges the gap between Python fundamentals and production-ready 
                  MLOps skills. You'll learn advanced Python patterns, data engineering techniques, and 
                  essential DevOps practices that form the foundation of modern ML pipelines.
                </p>
                <p className="text-slate-300 leading-relaxed mt-4">
                  With a focus on practical, industry-relevant skills, you'll build real projects 
                  including data pipelines, REST APIs, and CI/CD workflows. This course prepares you 
                  for the advanced MLOps track and professional ML engineering roles.
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
              transition={{ duration: 0.5, delay: 0.2 }}
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
              transition={{ duration: 0.5, delay: 0.4 }}
            >
              <h2 className="text-2xl font-bold text-white mb-6 flex items-center gap-3">
                <GitBranch className="w-6 h-6 text-primary" />
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
                    <Badge className="mb-4 bg-blue-600">MLOps Track - Level 2</Badge>
                    <div className="text-4xl font-bold text-white mb-2">₹65,000</div>
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
                    <p className="text-sm text-slate-400">Next batch starts: February 1, 2025</p>
                  </div>

                  <div className="border-t border-slate-700 pt-4">
                    <h4 className="text-white font-semibold mb-3">MLOps Track</h4>
                    <div className="space-y-2">
                      <Link href="/courses/python-basic">
                        <div className="flex items-center gap-2 text-green-400 cursor-pointer text-sm">
                          <CheckCircle className="w-4 h-4" />
                          <span>Python Basic (Level 1)</span>
                        </div>
                      </Link>
                      <div className="flex items-center gap-2 text-primary text-sm font-semibold">
                        <ArrowRight className="w-4 h-4" />
                        <span>Python Intermediate (Level 2)</span>
                      </div>
                      <Link href="/courses/python-advanced">
                        <div className="flex items-center gap-2 text-slate-400 hover:text-primary cursor-pointer text-sm">
                          <ArrowRight className="w-4 h-4" />
                          <span>Python Advanced (Level 3)</span>
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