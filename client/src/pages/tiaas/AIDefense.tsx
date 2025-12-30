import { motion } from "framer-motion";
import { Link } from "wouter";
import PageLayout from "@/components/PageLayout";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { 
  Brain, 
  Bot, 
  Shield, 
  Zap,
  Eye,
  AlertTriangle,
  Lock,
  Cpu,
  Network,
  Target,
  CheckCircle,
  ArrowRight
} from "lucide-react";

export default function AIDefense() {
  const capabilities = [
    {
      icon: Brain,
      title: "Generative AI Detection",
      description: "Identify AI-generated phishing, deepfakes, and synthetic content with 99.2% accuracy",
      stats: "99.2% accuracy"
    },
    {
      icon: Bot,
      title: "Rogue AI Agent Defense",
      description: "Detect and neutralize autonomous malicious AI agents before they can cause damage",
      stats: "< 50ms response"
    },
    {
      icon: Eye,
      title: "Predictive Threat Analytics",
      description: "Machine learning models that anticipate attack patterns and zero-day exploits",
      stats: "72hr advance warning"
    },
    {
      icon: Network,
      title: "Behavioral Anomaly Detection",
      description: "AI-powered analysis of network and user behavior to identify sophisticated threats",
      stats: "95% threat coverage"
    }
  ];

  const aiNativeApproach = [
    {
      phase: "Anticipate",
      description: "Proactively predict zero-day attacks before they materialize",
      icon: Target
    },
    {
      phase: "Detect",
      description: "Real-time AI-powered detection of novel attack patterns",
      icon: Eye
    },
    {
      phase: "Respond",
      description: "Automated response and containment of identified threats",
      icon: Zap
    },
    {
      phase: "Adapt",
      description: "Continuous learning and model improvement from new threat data",
      icon: Brain
    }
  ];

  const threatActors = [
    { name: "Nation-State Actors", aiCapability: "High", threat: "Espionage, Infrastructure" },
    { name: "eCrime Syndicates", aiCapability: "Medium-High", threat: "Ransomware, Data Theft" },
    { name: "Hacktivists", aiCapability: "Medium", threat: "DDoS, Defacement" },
    { name: "Insider Threats", aiCapability: "Low-Medium", threat: "Data Exfiltration" }
  ];

  const defenseModules = [
    {
      title: "LLM Threat Analysis",
      description: "Leverage commercial LLMs to rapidly synthesize threat intelligence and identify vulnerabilities",
      features: ["Target reconnaissance", "Vulnerability identification", "Exploit code analysis"]
    },
    {
      title: "Autonomous Defense Agents",
      description: "Deploy beneficial AI agents for continuous threat hunting and incident response",
      features: ["24/7 threat hunting", "Automated triage", "Response orchestration"]
    },
    {
      title: "Adversarial ML Protection",
      description: "Protect AI/ML models from adversarial attacks and model poisoning",
      features: ["Model hardening", "Evasion detection", "Data validation"]
    },
    {
      title: "GenAI Content Analysis",
      description: "Detect AI-generated phishing, social engineering, and synthetic media",
      features: ["Deepfake detection", "Phishing analysis", "Content authentication"]
    }
  ];

  return (
    <PageLayout
      title="AI-Native Defense Platform"
      subtitle="Proactive, AI-powered defense against next-generation cyber threats and autonomous adversaries"
      badge="AI Security"
      breadcrumbs={[
        { label: "Home", href: "/" },
        { label: "TIaaS", href: "/tiaas" },
        { label: "AI Defense", href: "/tiaas/ai-defense" }
      ]}
    >
      <div className="container mx-auto px-4 py-16">
        <motion.section
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="mb-12"
        >
          <Card className="bg-gradient-to-br from-red-900/20 to-slate-900 border-red-500/30">
            <CardContent className="pt-8">
              <div className="flex items-start gap-4 mb-6">
                <AlertTriangle className="w-8 h-8 text-red-400" />
                <div>
                  <h3 className="text-xl font-bold text-white mb-2">The AI Threat Reality</h3>
                  <p className="text-slate-300">
                    78% of CISOs believe AI-powered cyber threats are significantly impacting their organizations. 
                    GenAI has democratized advanced attack capabilities, enabling adversaries to conduct reconnaissance, 
                    automate exploitation, and generate convincing phishing campaigns at unprecedented scale.
                  </p>
                </div>
              </div>
              <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
                {threatActors.map((actor, index) => (
                  <div key={index} className="bg-slate-900/50 rounded-lg p-4">
                    <h4 className="text-white font-medium text-sm mb-2">{actor.name}</h4>
                    <div className="text-xs space-y-1">
                      <div className="text-amber-400">AI: {actor.aiCapability}</div>
                      <div className="text-slate-500">{actor.threat}</div>
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
          transition={{ duration: 0.5, delay: 0.1 }}
          className="mb-12"
        >
          <h2 className="text-2xl font-bold text-white mb-6 flex items-center gap-3">
            <Shield className="w-6 h-6 text-primary" />
            Our AI-Native Approach
          </h2>
          <p className="text-slate-300 mb-8 max-w-3xl">
            At DSCI CCoE and TCPWave, we maintain that waiting for adversaries to unveil novel attack 
            methodologies is an untenable strategy. Our mandate is to aggressively accelerate AI 
            integration across all layers of cyber defense.
          </p>
          <div className="grid md:grid-cols-4 gap-4">
            {aiNativeApproach.map((phase, index) => (
              <Card key={index} className="bg-slate-800/50 border-slate-700 text-center">
                <CardContent className="pt-8 pb-6">
                  <div className="w-16 h-16 bg-primary/20 rounded-full flex items-center justify-center mx-auto mb-4">
                    <phase.icon className="w-8 h-8 text-primary" />
                  </div>
                  <h4 className="text-white font-bold mb-2">{phase.phase}</h4>
                  <p className="text-slate-400 text-sm">{phase.description}</p>
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
            <Cpu className="w-6 h-6 text-primary" />
            Defense Capabilities
          </h2>
          <div className="grid md:grid-cols-2 gap-6">
            {capabilities.map((cap, index) => (
              <Card key={index} className="bg-slate-800/50 border-slate-700">
                <CardContent className="pt-6">
                  <div className="flex items-start gap-4">
                    <div className="w-12 h-12 bg-primary/20 rounded-lg flex items-center justify-center">
                      <cap.icon className="w-6 h-6 text-primary" />
                    </div>
                    <div className="flex-1">
                      <div className="flex items-center justify-between mb-2">
                        <h4 className="text-white font-semibold">{cap.title}</h4>
                        <Badge className="bg-green-600 text-xs">{cap.stats}</Badge>
                      </div>
                      <p className="text-slate-400 text-sm">{cap.description}</p>
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
          className="mb-12"
        >
          <h2 className="text-2xl font-bold text-white mb-6 flex items-center gap-3">
            <Brain className="w-6 h-6 text-purple-400" />
            Defense Modules
          </h2>
          <div className="grid md:grid-cols-2 gap-6">
            {defenseModules.map((module, index) => (
              <Card key={index} className="bg-slate-800/50 border-slate-700">
                <CardHeader>
                  <CardTitle className="text-white text-lg">{module.title}</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-slate-400 text-sm mb-4">{module.description}</p>
                  <div className="space-y-2">
                    {module.features.map((feature, idx) => (
                      <div key={idx} className="flex items-center gap-2 text-slate-300 text-sm">
                        <CheckCircle className="w-4 h-4 text-green-500" />
                        {feature}
                      </div>
                    ))}
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </motion.section>

        <motion.section
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.4 }}
        >
          <Card className="bg-gradient-to-br from-purple-900/30 to-slate-900 border-purple-500/30">
            <CardContent className="pt-8 pb-8 text-center">
              <h3 className="text-2xl font-bold text-white mb-4">Deploy AI-Native Defense</h3>
              <p className="text-slate-300 mb-6 max-w-2xl mx-auto">
                Protect your organization with cutting-edge AI defense capabilities. 
                Don't wait for the next attack—anticipate and neutralize threats proactively.
              </p>
              <div className="flex gap-4 justify-center flex-wrap">
                <Link href="/contact">
                  <Button size="lg" className="bg-primary hover:bg-primary/90">
                    Schedule Assessment
                  </Button>
                </Link>
                <Link href="/tiaas">
                  <Button size="lg" variant="outline">
                    Explore TIaaS Platform
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