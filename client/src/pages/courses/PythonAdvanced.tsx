import { motion } from "framer-motion";
import { Link } from "wouter";
import PageLayout from "@/components/PageLayout";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { 
  Brain, 
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
  Cloud,
  Cpu,
  LineChart,
  Workflow
} from "lucide-react";

export default function PythonAdvanced() {
  const modules = [
    {
      week: "Week 1-2",
      title: "Machine Learning Fundamentals",
      topics: [
        "ML workflow overview",
        "Scikit-learn essentials",
        "Feature engineering techniques",
        "Model training and evaluation",
        "Cross-validation strategies"
      ]
    },
    {
      week: "Week 3-4",
      title: "Deep Learning with Python",
      topics: [
        "TensorFlow/PyTorch basics",
        "Neural network architectures",
        "Model training best practices",
        "GPU acceleration",
        "Transfer learning"
      ]
    },
    {
      week: "Week 5-6",
      title: "MLOps Pipeline Design",
      topics: [
        "ML pipeline architecture",
        "Feature stores (Feast)",
        "Experiment tracking (MLflow)",
        "Model versioning",
        "Data versioning (DVC)"
      ]
    },
    {
      week: "Week 7-8",
      title: "Model Deployment & Serving",
      topics: [
        "Model serialization",
        "Serving with TensorFlow Serving",
        "FastAPI for ML APIs",
        "Kubernetes deployment basics",
        "A/B testing frameworks"
      ]
    },
    {
      week: "Week 9-10",
      title: "Monitoring & Observability",
      topics: [
        "Model performance monitoring",
        "Data drift detection",
        "Concept drift handling",
        "Alerting and dashboards",
        "Prometheus/Grafana integration"
      ]
    },
    {
      week: "Week 11-12",
      title: "Production MLOps",
      topics: [
        "End-to-end ML pipeline implementation",
        "Automated retraining pipelines",
        "Infrastructure as Code (Terraform)",
        "Security best practices",
        "Cost optimization strategies"
      ]
    }
  ];

  const highlights = [
    { icon: Clock, label: "Duration", value: "12 Weeks" },
    { icon: Users, label: "Batch Size", value: "20 Students" },
    { icon: Award, label: "Certificate", value: "T-SPAN MLOps Expert" },
    { icon: GraduationCap, label: "Level", value: "Advanced" }
  ];

  const skills = [
    "ML model development",
    "Deep learning frameworks",
    "MLOps pipeline design",
    "Model deployment strategies",
    "Kubernetes orchestration",
    "ML monitoring systems",
    "Feature store management",
    "Experiment tracking",
    "Infrastructure as Code",
    "Production ML systems",
    "Cost optimization",
    "Security in ML systems"
  ];

  const prerequisites = [
    "Completion of Python Intermediate course or equivalent",
    "Strong understanding of Python and OOP",
    "Experience with Docker and CI/CD",
    "Basic understanding of ML concepts",
    "Familiarity with cloud platforms (AWS/GCP/Azure)"
  ];

  const projects = [
    {
      title: "End-to-End ML Pipeline",
      description: "Design and implement a complete ML pipeline for cybersecurity threat detection with automated training and deployment"
    },
    {
      title: "Model Serving Platform",
      description: "Build a scalable model serving infrastructure with Kubernetes, including A/B testing and canary deployments"
    },
    {
      title: "ML Monitoring Dashboard",
      description: "Create a comprehensive monitoring solution for production ML models with drift detection and alerting"
    },
    {
      title: "Capstone: Production MLOps System",
      description: "Implement a full production MLOps system for a real-world cybersecurity use case"
    }
  ];

  const tools = [
    { name: "TensorFlow", category: "ML Framework" },
    { name: "PyTorch", category: "ML Framework" },
    { name: "MLflow", category: "Experiment Tracking" },
    { name: "DVC", category: "Data Versioning" },
    { name: "Feast", category: "Feature Store" },
    { name: "Kubernetes", category: "Orchestration" },
    { name: "Prometheus", category: "Monitoring" },
    { name: "Grafana", category: "Visualization" },
    { name: "Terraform", category: "IaC" },
    { name: "Airflow", category: "Orchestration" }
  ];

  return (
    <PageLayout
      title="Python for MLOps - Advanced"
      subtitle="Master production machine learning operations with advanced Python, deep learning, and enterprise MLOps practices"
      badge="MLOps Track - Level 3"
      breadcrumbs={[
        { label: "Home", href: "/" },
        { label: "Courses", href: "/courses" },
        { label: "Python Advanced", href: "/courses/python-advanced" }
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
                <Brain className="w-6 h-6 text-primary" />
                Course Overview
              </h2>
              <div className="prose prose-invert max-w-none">
                <p className="text-slate-300 text-lg leading-relaxed">
                  This advanced course transforms you into an MLOps engineer capable of designing, 
                  building, and managing production machine learning systems. You'll master the 
                  complete ML lifecycle from model development to deployment and monitoring.
                </p>
                <p className="text-slate-300 leading-relaxed mt-4">
                  With hands-on projects focused on cybersecurity applications, you'll learn to 
                  build scalable ML pipelines, implement automated retraining systems, and create 
                  robust monitoring solutions. This course prepares you for senior MLOps and 
                  ML Engineering roles in enterprise environments.
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
              transition={{ duration: 0.5, delay: 0.25 }}
            >
              <h2 className="text-2xl font-bold text-white mb-6 flex items-center gap-3">
                <Cpu className="w-6 h-6 text-primary" />
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
                    <Badge className="mb-4 bg-purple-600">MLOps Track - Level 3</Badge>
                    <div className="text-4xl font-bold text-white mb-2">₹95,000</div>
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
                    <p className="text-sm text-slate-400">Next batch starts: March 1, 2025</p>
                  </div>

                  <div className="border-t border-slate-700 pt-4">
                    <h4 className="text-white font-semibold mb-3">Complete MLOps Track</h4>
                    <div className="space-y-2">
                      <Link href="/courses/python-basic">
                        <div className="flex items-center gap-2 text-green-400 cursor-pointer text-sm">
                          <CheckCircle className="w-4 h-4" />
                          <span>Python Basic (Level 1)</span>
                        </div>
                      </Link>
                      <Link href="/courses/python-intermediate">
                        <div className="flex items-center gap-2 text-green-400 cursor-pointer text-sm">
                          <CheckCircle className="w-4 h-4" />
                          <span>Python Intermediate (Level 2)</span>
                        </div>
                      </Link>
                      <div className="flex items-center gap-2 text-primary text-sm font-semibold">
                        <ArrowRight className="w-4 h-4" />
                        <span>Python Advanced (Level 3)</span>
                      </div>
                    </div>
                  </div>

                  <div className="border-t border-slate-700 pt-4">
                    <h4 className="text-white font-semibold mb-2">Career Outcomes</h4>
                    <ul className="space-y-1 text-sm text-slate-400">
                      <li>• MLOps Engineer</li>
                      <li>• ML Platform Engineer</li>
                      <li>• Senior Data Engineer</li>
                      <li>• AI Infrastructure Specialist</li>
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