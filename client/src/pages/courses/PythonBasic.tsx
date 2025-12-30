import { motion } from "framer-motion";
import { Link } from "wouter";
import PageLayout from "@/components/PageLayout";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { 
  Code, 
  Terminal, 
  BookOpen, 
  CheckCircle, 
  Clock, 
  Users, 
  Award,
  Zap,
  Database,
  FileCode,
  ArrowRight,
  GraduationCap
} from "lucide-react";

export default function PythonBasic() {
  const modules = [
    {
      week: "Week 1-2",
      title: "Python Fundamentals",
      topics: [
        "Python installation & environment setup",
        "Variables, data types, and operators",
        "Control flow: if/else, loops",
        "Functions and scope",
        "Error handling basics"
      ]
    },
    {
      week: "Week 3-4",
      title: "Data Structures & Collections",
      topics: [
        "Lists, tuples, and sets",
        "Dictionaries and nested structures",
        "List comprehensions",
        "String manipulation",
        "File I/O operations"
      ]
    },
    {
      week: "Week 5-6",
      title: "Object-Oriented Python",
      topics: [
        "Classes and objects",
        "Inheritance and polymorphism",
        "Encapsulation and abstraction",
        "Magic methods",
        "Decorators basics"
      ]
    },
    {
      week: "Week 7-8",
      title: "Python for Data & Automation",
      topics: [
        "Working with CSV and JSON",
        "Introduction to NumPy",
        "Basic Pandas operations",
        "Scripting and automation",
        "Introduction to APIs"
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
    "Python syntax and semantics",
    "Data structure manipulation",
    "Object-oriented programming",
    "File handling and I/O",
    "Basic data analysis",
    "Script automation",
    "API consumption basics",
    "Git version control"
  ];

  const prerequisites = [
    "Basic computer literacy",
    "Understanding of general programming concepts (helpful but not required)",
    "Willingness to practice coding daily",
    "Access to a computer with internet"
  ];

  return (
    <PageLayout
      title="Python for MLOps - Basic"
      subtitle="Build a solid foundation in Python programming, the essential language for machine learning operations and data engineering"
      badge="MLOps Track - Level 1"
      breadcrumbs={[
        { label: "Home", href: "/" },
        { label: "Courses", href: "/courses" },
        { label: "Python Basic", href: "/courses/python-basic" }
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
                <Code className="w-6 h-6 text-primary" />
                Course Overview
              </h2>
              <div className="prose prose-invert max-w-none">
                <p className="text-slate-300 text-lg leading-relaxed">
                  This foundational course introduces Python programming with a focus on skills essential 
                  for machine learning operations. You'll learn Python from scratch, building up to 
                  data manipulation and automation tasks that form the backbone of MLOps workflows.
                </p>
                <p className="text-slate-300 leading-relaxed mt-4">
                  Designed for absolute beginners, this course emphasizes hands-on practice with 
                  real-world examples from cybersecurity and data engineering. By the end, you'll 
                  be ready to progress to intermediate Python and specialized MLOps tools.
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
                <FileCode className="w-6 h-6 text-primary" />
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
                    <Badge className="mb-4 bg-green-600">MLOps Track - Level 1</Badge>
                    <div className="text-4xl font-bold text-white mb-2">₹45,000</div>
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
                    <p className="text-sm text-slate-400">Next batch starts: January 15, 2025</p>
                  </div>

                  <div className="border-t border-slate-700 pt-4">
                    <h4 className="text-white font-semibold mb-3">Continue Your Journey</h4>
                    <div className="space-y-2">
                      <Link href="/courses/python-intermediate">
                        <div className="flex items-center gap-2 text-primary hover:text-primary/80 cursor-pointer text-sm">
                          <ArrowRight className="w-4 h-4" />
                          <span>Python Intermediate (Level 2)</span>
                        </div>
                      </Link>
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