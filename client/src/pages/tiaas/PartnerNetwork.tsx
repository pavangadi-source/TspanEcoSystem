import { motion } from "framer-motion";
import { Link } from "wouter";
import PageLayout from "@/components/PageLayout";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { 
  Building2, 
  Shield, 
  Globe, 
  Users,
  Award,
  Star,
  ArrowRight,
  CheckCircle,
  Briefcase
} from "lucide-react";

export default function PartnerNetwork() {
  const stats = [
    { value: "75+", label: "Total Companies" },
    { value: "$20B+", label: "Industry Size" },
    { value: "1500+", label: "Indian Startups" },
    { value: "30+", label: "CCoE Partners" }
  ];

  const flagshipPartner = {
    name: "TCPWave",
    tier: "Flagship Partner",
    specialization: "DDI Security & AI-Powered Network Infrastructure",
    description: "Command Center Core partner providing enterprise DDI solutions, AI-driven threat detection, and comprehensive network security infrastructure for the DSCI-TCPWave Partner Network Syndicate.",
    services: ["DDI Platform", "DNS Security", "IPAM Solutions", "AI Threat Detection", "Network Automation"]
  };

  const platinumPartners = [
    { name: "Palo Alto Networks", specialization: "Next-Gen Firewalls & Cloud Security", region: "Global" },
    { name: "CrowdStrike", specialization: "Endpoint Detection & Response", region: "Global" },
    { name: "Splunk", specialization: "SIEM & Security Analytics", region: "Global" },
    { name: "Fortinet", specialization: "Network Security & SD-WAN", region: "Global" },
    { name: "Check Point", specialization: "Threat Prevention & Security Management", region: "Global" }
  ];

  const goldPartners = [
    { name: "Quick Heal", specialization: "Endpoint Security", region: "India" },
    { name: "TAC Security", specialization: "Vulnerability Management", region: "India" },
    { name: "Lucideus (SAFE)", specialization: "Risk Quantification", region: "India" },
    { name: "Sequretek", specialization: "MDR & Threat Intelligence", region: "India" },
    { name: "Innefu Labs", specialization: "AI Security & Surveillance", region: "India" },
    { name: "Data Resolve", specialization: "Data Protection & DLP", region: "India" },
    { name: "InstaSafe", specialization: "Zero Trust Access", region: "India" },
    { name: "Smokescreen", specialization: "Deception Technology", region: "India" }
  ];

  const academicPartners = [
    { name: "BITS Pilani APPCAIR", role: "Intelligence Center Lead", focus: "AI/ML Research" },
    { name: "IIT Kanpur", role: "Network Security Research", focus: "Academic Partnership" },
    { name: "IIT Delhi", role: "Cryptography Research", focus: "Academic Partnership" },
    { name: "IIIT Hyderabad", role: "NLP & Threat Analysis", focus: "Research Collaboration" }
  ];

  const dsciStartups = [
    { name: "Kratikal", funding: "Series A", specialization: "Penetration Testing & VA" },
    { name: "ShieldSquare", funding: "Acquired", specialization: "Bot Management" },
    { name: "Appknox", funding: "Series A", specialization: "Mobile App Security" },
    { name: "WiJungle", funding: "Seed", specialization: "Unified Network Security" },
    { name: "CloudSEK", funding: "Series A", specialization: "Digital Risk Protection" },
    { name: "Privasea", funding: "Seed", specialization: "Privacy Compliance" }
  ];

  return (
    <PageLayout
      title="DSCI-TCPWave Partner Network"
      subtitle="Complete directory of 75+ cybersecurity companies, startups, and strategic partners"
      badge="Partner Syndicate"
      breadcrumbs={[
        { label: "Home", href: "/" },
        { label: "TIaaS", href: "/tiaas" },
        { label: "Partner Network", href: "/tiaas/partner-network" }
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
            <Card key={index} className="bg-gradient-to-br from-amber-900/30 to-slate-900 border-amber-500/30 text-center">
              <CardContent className="pt-6">
                <div className="text-3xl font-bold text-amber-400 mb-2">{stat.value}</div>
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
            <Award className="w-6 h-6 text-amber-400" />
            Flagship Partner
          </h2>
          <Card className="bg-gradient-to-br from-amber-900/20 to-slate-900 border-2 border-amber-500/50">
            <CardContent className="pt-8">
              <div className="flex items-start gap-6">
                <div className="w-20 h-20 bg-gradient-to-br from-amber-500 to-orange-600 rounded-xl flex items-center justify-center text-3xl font-bold text-white">
                  1
                </div>
                <div className="flex-1">
                  <div className="flex items-center gap-3 mb-2">
                    <h3 className="text-2xl font-bold text-amber-400">{flagshipPartner.name}</h3>
                    <Badge className="bg-gradient-to-r from-amber-500 to-orange-600 text-white">
                      {flagshipPartner.tier}
                    </Badge>
                  </div>
                  <p className="text-primary font-medium mb-3">{flagshipPartner.specialization}</p>
                  <p className="text-slate-400 mb-4">{flagshipPartner.description}</p>
                  <div className="flex flex-wrap gap-2">
                    {flagshipPartner.services.map((service, idx) => (
                      <Badge key={idx} variant="outline" className="border-amber-500/50 text-amber-400">
                        {service}
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
          transition={{ duration: 0.5, delay: 0.2 }}
          className="mb-12"
        >
          <h2 className="text-2xl font-bold text-white mb-6 flex items-center gap-3">
            <Star className="w-6 h-6 text-slate-300" />
            Platinum Partners
          </h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-4">
            {platinumPartners.map((partner, index) => (
              <Card key={index} className="bg-slate-800/50 border-slate-600">
                <CardContent className="pt-6">
                  <div className="flex items-center justify-between mb-2">
                    <h4 className="text-white font-semibold">{partner.name}</h4>
                    <Badge className="bg-slate-300 text-slate-900 text-xs">Platinum</Badge>
                  </div>
                  <p className="text-primary text-sm mb-2">{partner.specialization}</p>
                  <p className="text-slate-500 text-xs">{partner.region}</p>
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
            <Shield className="w-6 h-6 text-amber-500" />
            Gold Partners - India Focus
          </h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-4">
            {goldPartners.map((partner, index) => (
              <Card key={index} className="bg-slate-800/50 border-slate-700 hover:border-amber-500/50 transition-colors">
                <CardContent className="pt-6">
                  <div className="flex items-center justify-between mb-2">
                    <h4 className="text-white font-medium text-sm">{partner.name}</h4>
                    <Badge className="bg-amber-500 text-slate-900 text-xs">Gold</Badge>
                  </div>
                  <p className="text-slate-400 text-xs">{partner.specialization}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </motion.section>

        <div className="grid lg:grid-cols-2 gap-8 mb-12">
          <motion.section
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.4 }}
          >
            <h2 className="text-xl font-bold text-white mb-6 flex items-center gap-3">
              <Building2 className="w-5 h-5 text-purple-400" />
              Academic & Research Partners
            </h2>
            <div className="space-y-3">
              {academicPartners.map((partner, index) => (
                <Card key={index} className="bg-slate-800/50 border-purple-500/30">
                  <CardContent className="py-4">
                    <div className="flex items-center justify-between">
                      <div>
                        <h4 className="text-white font-medium">{partner.name}</h4>
                        <p className="text-purple-400 text-sm">{partner.role}</p>
                      </div>
                      <Badge variant="outline" className="border-purple-500/50 text-purple-400 text-xs">
                        {partner.focus}
                      </Badge>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          </motion.section>

          <motion.section
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.5 }}
          >
            <h2 className="text-xl font-bold text-white mb-6 flex items-center gap-3">
              <Briefcase className="w-5 h-5 text-green-400" />
              DSCI Incubated Startups
            </h2>
            <div className="space-y-3">
              {dsciStartups.map((startup, index) => (
                <Card key={index} className="bg-slate-800/50 border-green-500/30">
                  <CardContent className="py-4">
                    <div className="flex items-center justify-between">
                      <div>
                        <h4 className="text-white font-medium">{startup.name}</h4>
                        <p className="text-slate-400 text-sm">{startup.specialization}</p>
                      </div>
                      <Badge className="bg-green-600 text-xs">{startup.funding}</Badge>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          </motion.section>
        </div>

        <motion.section
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.6 }}
        >
          <Card className="bg-gradient-to-br from-primary/20 to-slate-900 border-primary/30">
            <CardContent className="pt-8 pb-8 text-center">
              <h3 className="text-2xl font-bold text-white mb-4">Become a Partner</h3>
              <p className="text-slate-300 mb-6 max-w-2xl mx-auto">
                Join the DSCI-TCPWave Partner Network and gain access to enterprise clients, 
                research collaborations, and go-to-market opportunities.
              </p>
              <div className="flex gap-4 justify-center flex-wrap">
                <Link href="/contact">
                  <Button size="lg" className="bg-primary hover:bg-primary/90">
                    Apply for Partnership
                  </Button>
                </Link>
                <Link href="/tiaas">
                  <Button size="lg" variant="outline">
                    Learn About TIaaS
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