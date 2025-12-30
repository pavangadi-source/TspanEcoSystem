import { motion } from "framer-motion";
import { Link } from "wouter";
import PageLayout from "@/components/PageLayout";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { 
  Building2, 
  IndianRupee, 
  FileText, 
  Calendar,
  CheckCircle,
  ArrowRight,
  Landmark,
  GraduationCap,
  Zap,
  Target,
  AlertTriangle
} from "lucide-react";

export default function ResearchFunding() {
  const fundingSchemes = [
    {
      name: "MeitY Cybersecurity R&D",
      ministry: "Ministry of Electronics & IT",
      amount: "₹50 Lakhs - ₹25 Crores",
      icon: "🔐"
    },
    {
      name: "DST SERB Grants",
      ministry: "Dept of Science & Technology",
      amount: "₹30 Lakhs - ₹5 Crores",
      icon: "🔬"
    },
    {
      name: "ANRF AI/ML Programs",
      ministry: "Anusandhan National Research Foundation",
      amount: "₹1 Crore - ₹50 Crores",
      icon: "🤖"
    }
  ];

  const meityPrograms = [
    {
      name: "Information Security Education & Awareness (ISEA)",
      focus: "Cybersecurity capacity building and awareness",
      funding: "Up to ₹5 Crores"
    },
    {
      name: "Cyber Security R&D",
      focus: "Research in emerging cybersecurity domains",
      funding: "₹50 Lakhs - ₹10 Crores"
    },
    {
      name: "Centre of Excellence in Cyber Security",
      focus: "Establish specialized cybersecurity research centers",
      funding: "Up to ₹25 Crores"
    },
    {
      name: "Digital India Programme",
      focus: "Secure digital infrastructure and services",
      funding: "Project-based"
    }
  ];

  const dstPrograms = [
    {
      name: "SERB Core Research Grant (CRG)",
      focus: "Fundamental research in science and engineering",
      eligibility: "PhD with research experience"
    },
    {
      name: "SERB POWER Grant",
      focus: "Women scientists in cybersecurity",
      eligibility: "Women researchers"
    },
    {
      name: "MATRICS",
      focus: "Mathematical sciences and theoretical CS",
      eligibility: "Faculty members"
    },
    {
      name: "Start-up Research Grant (SRG)",
      focus: "Early career researchers",
      eligibility: "First-time PIs"
    }
  ];

  const applicationTimeline = [
    { step: 1, title: "Identify Scheme", description: "Match research focus with appropriate funding program" },
    { step: 2, title: "Prepare Proposal", description: "Develop detailed project proposal with milestones" },
    { step: 3, title: "Institutional Approval", description: "Get endorsement from host institution" },
    { step: 4, title: "Online Submission", description: "Submit through official portals (eSERB, MeitY portal)" },
    { step: 5, title: "Expert Review", description: "Proposal undergoes peer review process" },
    { step: 6, title: "Sanction & Release", description: "Grant approval and fund disbursement" }
  ];

  const tips = [
    "Align proposal with National Cyber Security Policy objectives",
    "Include industry collaboration for higher success rates",
    "Demonstrate clear societal impact and technology transfer",
    "Budget for student training and capacity building",
    "Reference Atmanirbhar Bharat and Make in India initiatives"
  ];

  return (
    <PageLayout
      title="Government Research Funding"
      subtitle="Strategic guide to MeitY, DST, and ANRF grants for cybersecurity and AI research"
      badge="Funding Strategy"
      breadcrumbs={[
        { label: "Home", href: "/" },
        { label: "TIaaS", href: "/tiaas" },
        { label: "Research Funding", href: "/tiaas/research-funding" }
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
            <Landmark className="w-6 h-6 text-primary" />
            Funding Landscape Overview
          </h2>
          <div className="prose prose-invert max-w-none mb-8">
            <p className="text-slate-300 text-lg">
              The Government of India allocates approximately <strong className="text-amber-400">₹14,000+ Crores annually</strong> for 
              science and technology research. For T-SPAN's cybersecurity and AI research agenda, 
              three primary funding sources are most relevant.
            </p>
          </div>
          <div className="grid md:grid-cols-3 gap-6">
            {fundingSchemes.map((scheme, index) => (
              <Card key={index} className="bg-slate-800/50 border-slate-700 text-center hover:border-primary/50 transition-colors">
                <CardContent className="pt-8">
                  <div className="text-4xl mb-4">{scheme.icon}</div>
                  <h3 className="text-white font-bold mb-2">{scheme.name}</h3>
                  <div className="text-green-400 font-semibold text-lg mb-2">{scheme.amount}</div>
                  <p className="text-slate-500 text-sm">{scheme.ministry}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </motion.section>

        <div className="grid lg:grid-cols-2 gap-8 mb-12">
          <motion.section
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.1 }}
          >
            <h2 className="text-xl font-bold text-white mb-6 flex items-center gap-3">
              <Building2 className="w-5 h-5 text-orange-400" />
              MeitY Programs
            </h2>
            <div className="space-y-4">
              {meityPrograms.map((program, index) => (
                <Card key={index} className="bg-slate-800/50 border-l-4 border-l-orange-500 border-t-0 border-r-0 border-b-0">
                  <CardContent className="py-4">
                    <h4 className="text-white font-semibold mb-1">{program.name}</h4>
                    <p className="text-slate-400 text-sm mb-2">{program.focus}</p>
                    <Badge className="bg-green-600">{program.funding}</Badge>
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
            <h2 className="text-xl font-bold text-white mb-6 flex items-center gap-3">
              <GraduationCap className="w-5 h-5 text-green-400" />
              DST SERB Programs
            </h2>
            <div className="space-y-4">
              {dstPrograms.map((program, index) => (
                <Card key={index} className="bg-slate-800/50 border-l-4 border-l-green-500 border-t-0 border-r-0 border-b-0">
                  <CardContent className="py-4">
                    <h4 className="text-white font-semibold mb-1">{program.name}</h4>
                    <p className="text-slate-400 text-sm mb-2">{program.focus}</p>
                    <Badge variant="outline" className="border-green-500 text-green-400 text-xs">
                      {program.eligibility}
                    </Badge>
                  </CardContent>
                </Card>
              ))}
            </div>
          </motion.section>
        </div>

        <motion.section
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.3 }}
          className="mb-12"
        >
          <h2 className="text-2xl font-bold text-white mb-6 flex items-center gap-3">
            <Calendar className="w-6 h-6 text-primary" />
            Application Process
          </h2>
          <Card className="bg-slate-800/50 border-slate-700">
            <CardContent className="pt-8">
              <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-4">
                {applicationTimeline.map((item, index) => (
                  <div key={index} className="flex items-start gap-4">
                    <div className="w-10 h-10 bg-primary rounded-full flex items-center justify-center flex-shrink-0 text-white font-bold">
                      {item.step}
                    </div>
                    <div>
                      <h4 className="text-white font-semibold mb-1">{item.title}</h4>
                      <p className="text-slate-400 text-sm">{item.description}</p>
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
          transition={{ duration: 0.5, delay: 0.4 }}
          className="mb-12"
        >
          <h2 className="text-2xl font-bold text-white mb-6 flex items-center gap-3">
            <Target className="w-6 h-6 text-green-400" />
            Success Tips
          </h2>
          <Card className="bg-gradient-to-br from-green-900/20 to-slate-900 border-green-500/30">
            <CardContent className="pt-6">
              <ul className="space-y-3">
                {tips.map((tip, index) => (
                  <li key={index} className="flex items-start gap-3 text-slate-300">
                    <CheckCircle className="w-5 h-5 text-green-500 mt-0.5 flex-shrink-0" />
                    <span>{tip}</span>
                  </li>
                ))}
              </ul>
            </CardContent>
          </Card>
        </motion.section>

        <motion.section
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.5 }}
        >
          <Card className="bg-gradient-to-br from-primary/20 to-slate-900 border-primary/30">
            <CardContent className="pt-8 pb-8 text-center">
              <h3 className="text-2xl font-bold text-white mb-4">Need Help with Grant Applications?</h3>
              <p className="text-slate-300 mb-6 max-w-2xl mx-auto">
                T-SPAN Research Consortium provides guidance and support for preparing competitive 
                grant applications to MeitY, DST, and other government funding agencies.
              </p>
              <div className="flex gap-4 justify-center flex-wrap">
                <Link href="/contact">
                  <Button size="lg" className="bg-primary hover:bg-primary/90">
                    Contact Research Team
                  </Button>
                </Link>
                <Link href="/tiaas/intelligence-center">
                  <Button size="lg" variant="outline">
                    View Research Partnerships
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