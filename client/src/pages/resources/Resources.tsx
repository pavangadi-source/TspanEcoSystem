import { useState } from "react";
import { Link, useLocation } from "wouter";
import { motion } from "framer-motion";
import { 
  BookOpen, FileText, Download, Lock, Shield, 
  Server, Brain, Network, AlertTriangle, Eye,
  ChevronRight, Sparkles, Code, Wrench, List, ArrowRight
} from "lucide-react";
import PageLayout from "@/components/PageLayout";
import { useLanguage } from "@/context/LanguageContext";
import { useAuth } from "@/hooks/use-auth";
import { Button } from "@/components/ui/button";

interface Resource {
  id: string;
  title: string;
  description: string;
  type: "ebook" | "whitepaper";
  category: string;
  pages?: number;
  requiresLogin: boolean;
  requiresKyc: boolean;
  icon: React.ReactNode;
  coverColor: string;
}

const gatedResources: Resource[] = [
  {
    id: "dns-security-guide",
    title: "Enterprise DNS Security Best Practices",
    description: "Comprehensive guide to securing enterprise DNS infrastructure against modern threats including DNS tunneling, cache poisoning, and DDoS attacks.",
    type: "ebook",
    category: "DNS Security",
    pages: 85,
    requiresLogin: true,
    requiresKyc: false,
    icon: <Shield className="w-8 h-8" />,
    coverColor: "from-cyan-600 to-blue-800"
  },
  {
    id: "tcpwave-ddi-architecture",
    title: "TCPWave DDI Architecture Whitepaper",
    description: "Technical deep-dive into TCPWave's unified DNS, DHCP, and IPAM platform architecture for enterprise deployments.",
    type: "whitepaper",
    category: "TCPWave",
    pages: 42,
    requiresLogin: true,
    requiresKyc: true,
    icon: <Server className="w-8 h-8" />,
    coverColor: "from-purple-600 to-indigo-800"
  },
  {
    id: "threat-intelligence-fundamentals",
    title: "Threat Intelligence Fundamentals",
    description: "Learn the foundations of cyber threat intelligence including IOC analysis, threat actor profiling, and intelligence sharing frameworks.",
    type: "ebook",
    category: "Threat Intelligence",
    pages: 120,
    requiresLogin: true,
    requiresKyc: false,
    icon: <Eye className="w-8 h-8" />,
    coverColor: "from-red-600 to-orange-800"
  },
  {
    id: "ai-powered-network-defense",
    title: "AI-Powered Network Defense",
    description: "Explore how artificial intelligence and machine learning are revolutionizing network security and threat detection.",
    type: "whitepaper",
    category: "AI & Security",
    pages: 38,
    requiresLogin: true,
    requiresKyc: true,
    icon: <Brain className="w-8 h-8" />,
    coverColor: "from-emerald-600 to-teal-800"
  },
  {
    id: "ipam-enterprise-deployment",
    title: "IPAM Enterprise Deployment Guide",
    description: "Step-by-step guide for deploying IP Address Management solutions in complex enterprise environments.",
    type: "ebook",
    category: "IPAM",
    pages: 95,
    requiresLogin: true,
    requiresKyc: false,
    icon: <Network className="w-8 h-8" />,
    coverColor: "from-amber-600 to-yellow-800"
  },
  {
    id: "zero-trust-network-architecture",
    title: "Zero Trust Network Architecture",
    description: "Implement zero trust principles across your network infrastructure with practical strategies and TCPWave integration.",
    type: "whitepaper",
    category: "Security Architecture",
    pages: 55,
    requiresLogin: true,
    requiresKyc: true,
    icon: <AlertTriangle className="w-8 h-8" />,
    coverColor: "from-rose-600 to-pink-800"
  },
  {
    id: "dpdp-compliance-handbook",
    title: "DPDP Act Compliance Handbook",
    description: "Complete guide to India's Digital Personal Data Protection Act compliance for enterprises and security teams.",
    type: "ebook",
    category: "Compliance",
    pages: 72,
    requiresLogin: true,
    requiresKyc: true,
    icon: <FileText className="w-8 h-8" />,
    coverColor: "from-violet-600 to-purple-800"
  },
  {
    id: "soc-operations-playbook",
    title: "SOC Operations Playbook",
    description: "Essential playbooks and procedures for Security Operations Center teams handling incident response and threat hunting.",
    type: "whitepaper",
    category: "SOC Operations",
    pages: 88,
    requiresLogin: true,
    requiresKyc: false,
    icon: <Shield className="w-8 h-8" />,
    coverColor: "from-sky-600 to-cyan-800"
  }
];

interface ResourceCategory {
  icon: typeof BookOpen;
  titleKey: string;
  descriptionKey: string;
  href: string;
  count: string;
}

const resourceCategoryData: ResourceCategory[] = [
  {
    icon: BookOpen,
    titleKey: "resources.cat_ebooks",
    descriptionKey: "resources.cat_ebooks_desc",
    href: "#ebooks",
    count: "8+"
  },
  {
    icon: FileText,
    titleKey: "resources.cat_whitepapers",
    descriptionKey: "resources.cat_whitepapers_desc",
    href: "#whitepapers",
    count: "12+"
  },
  {
    icon: Code,
    titleKey: "resources.cat_cheatsheets",
    descriptionKey: "resources.cat_cheatsheets_desc",
    href: "/resources/cheat-sheets",
    count: "50+"
  },
  {
    icon: Wrench,
    titleKey: "resources.cat_tools",
    descriptionKey: "resources.cat_tools_desc",
    href: "/resources/tools",
    count: "20+"
  },
  {
    icon: List,
    titleKey: "resources.cat_glossary",
    descriptionKey: "resources.cat_glossary_desc",
    href: "/resources/glossary",
    count: "500+"
  },
  {
    icon: Shield,
    titleKey: "resources.cat_dns_guide",
    descriptionKey: "resources.cat_dns_guide_desc",
    href: "#dns-security-guide",
    count: "1"
  },
];

function ResourceCard({ resource, isAuthenticated, kycVerified }: { 
  resource: Resource; 
  isAuthenticated: boolean;
  kycVerified: boolean;
}) {
  const { t } = useLanguage();
  const [, navigate] = useLocation();
  
  const canAccess = isAuthenticated && (!resource.requiresKyc || kycVerified);
  const needsLogin = !isAuthenticated && resource.requiresLogin;
  const needsKyc = isAuthenticated && resource.requiresKyc && !kycVerified;

  const handleDownload = () => {
    if (needsLogin) {
      navigate(`/login?redirect=/resources`);
    } else if (needsKyc) {
      navigate(`/kyc?redirect=/resources`);
    } else {
      alert("Download would start here in production");
    }
  };

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      className="group relative bg-slate-900/50 border border-slate-800 rounded-2xl overflow-hidden hover:border-primary/50 transition-all duration-500 hover-lift"
      data-testid={`resource-card-${resource.id}`}
    >
      <div className={`h-40 bg-gradient-to-br ${resource.coverColor} relative overflow-hidden`}>
        <div className="absolute inset-0 bg-black/20" />
        <div className="absolute inset-0 bg-[linear-gradient(rgba(255,255,255,0.05)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.05)_1px,transparent_1px)] bg-[size:20px_20px]" />
        
        <div className="absolute top-4 left-4 w-12 h-12 bg-white/10 backdrop-blur-sm rounded-xl flex items-center justify-center text-white">
          {resource.icon}
        </div>
        
        <div className="absolute top-4 right-4 px-3 py-1 bg-white/20 backdrop-blur-sm rounded-full text-xs font-mono text-white uppercase">
          {resource.type}
        </div>
        
        {!canAccess && (
          <div className="absolute inset-0 bg-slate-950/60 backdrop-blur-[2px] flex items-center justify-center">
            <div className="w-16 h-16 bg-slate-900/80 rounded-full flex items-center justify-center border border-slate-700">
              <Lock className="w-8 h-8 text-slate-400" />
            </div>
          </div>
        )}
      </div>
      
      <div className="p-6">
        <div className="flex items-center gap-2 mb-2">
          <span className="px-2 py-0.5 bg-primary/10 text-primary text-xs font-mono rounded">
            {resource.category}
          </span>
          {resource.pages && (
            <span className="text-xs text-slate-500">{resource.pages} {t("resources.pages")}</span>
          )}
        </div>
        
        <h3 className="text-lg font-display font-bold text-white mb-2 group-hover:text-primary transition-colors">
          {resource.title}
        </h3>
        
        <p className="text-sm text-slate-400 leading-relaxed mb-4 line-clamp-2">
          {resource.description}
        </p>
        
        <div className="flex items-center justify-between">
          {needsLogin && (
            <Button
              onClick={handleDownload}
              className="w-full bg-slate-800 hover:bg-slate-700 text-slate-300"
              data-testid={`download-btn-${resource.id}`}
            >
              <Lock className="w-4 h-4 mr-2" />
              {t("resources.login_required")}
            </Button>
          )}
          
          {needsKyc && (
            <Button
              onClick={handleDownload}
              className="w-full bg-amber-600/20 hover:bg-amber-600/30 text-amber-400 border border-amber-600/30"
              data-testid={`download-btn-${resource.id}`}
            >
              <Shield className="w-4 h-4 mr-2" />
              {t("resources.kyc_required")}
            </Button>
          )}
          
          {canAccess && (
            <Button
              onClick={handleDownload}
              className="w-full bg-primary hover:bg-primary/90 text-white"
              data-testid={`download-btn-${resource.id}`}
            >
              <Download className="w-4 h-4 mr-2" />
              {t("resources.download")}
            </Button>
          )}
        </div>
      </div>
    </motion.div>
  );
}

export default function Resources() {
  const { t } = useLanguage();
  const { user } = useAuth();
  const [filter, setFilter] = useState<"all" | "ebook" | "whitepaper">("all");
  
  const isAuthenticated = !!user;
  const kycVerified = user?.kycStatus === "verified";
  
  const filteredResources = gatedResources.filter(r => 
    filter === "all" || r.type === filter
  );

  const ebooks = gatedResources.filter(r => r.type === "ebook");
  const whitepapers = gatedResources.filter(r => r.type === "whitepaper");

  return (
    <PageLayout
      title={t("resources.title")}
      subtitle={t("resources.subtitle")}
      badge={t("resources.badge")}
      breadcrumbs={[{ label: "Resources" }]}
    >
      <section className="py-12">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 mb-16">
            {resourceCategoryData.map((category, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1 }}
              >
                <Link href={category.href}>
                  <div className="bg-slate-900/50 border border-slate-800 rounded-2xl p-6 h-full hover:border-primary/50 transition-all cursor-pointer group">
                    <div className="flex items-center justify-between mb-4">
                      <category.icon className="w-10 h-10 text-primary group-hover:scale-110 transition-transform" />
                      <span className="px-3 py-1 bg-primary/10 text-primary text-xs rounded-full">{category.count}</span>
                    </div>
                    <h3 className="text-lg font-display font-bold text-white mb-2 group-hover:text-primary transition-colors">{t(category.titleKey)}</h3>
                    <p className="text-slate-400 text-sm mb-3">{t(category.descriptionKey)}</p>
                    <div className="flex items-center gap-2 text-primary text-sm font-medium">
                      {t("resources.access")} <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                    </div>
                  </div>
                </Link>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      <section id="ebooks" className="py-16 bg-slate-900/30 border-y border-slate-800">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-display font-bold text-white mb-4">
              {t("resources.ebooks")} & {t("resources.whitepapers")}
            </h2>
            <p className="text-slate-400 max-w-2xl mx-auto mb-8">
              {t("resources.premium_some_kyc")}
            </p>
            
            <div className="flex flex-wrap items-center justify-center gap-4 mb-8">
              <button
                onClick={() => setFilter("all")}
                className={`px-6 py-3 rounded-xl font-medium transition-all duration-300 ${
                  filter === "all"
                    ? "bg-primary text-white shadow-[0_0_20px_rgba(6,182,212,0.3)]"
                    : "bg-slate-800/50 text-slate-400 hover:text-white hover:bg-slate-700/50"
                }`}
                data-testid="filter-all"
              >
                {t("resources.all")} ({gatedResources.length})
              </button>
              <button
                onClick={() => setFilter("ebook")}
                className={`px-6 py-3 rounded-xl font-medium transition-all duration-300 flex items-center gap-2 ${
                  filter === "ebook"
                    ? "bg-primary text-white shadow-[0_0_20px_rgba(6,182,212,0.3)]"
                    : "bg-slate-800/50 text-slate-400 hover:text-white hover:bg-slate-700/50"
                }`}
                data-testid="filter-ebooks"
              >
                <BookOpen className="w-4 h-4" />
                {t("resources.ebooks")} ({ebooks.length})
              </button>
              <button
                onClick={() => setFilter("whitepaper")}
                className={`px-6 py-3 rounded-xl font-medium transition-all duration-300 flex items-center gap-2 ${
                  filter === "whitepaper"
                    ? "bg-primary text-white shadow-[0_0_20px_rgba(6,182,212,0.3)]"
                    : "bg-slate-800/50 text-slate-400 hover:text-white hover:bg-slate-700/50"
                }`}
                data-testid="filter-whitepapers"
              >
                <FileText className="w-4 h-4" />
                {t("resources.whitepapers")} ({whitepapers.length})
              </button>
            </div>
            
            {!isAuthenticated && (
              <motion.div
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                className="max-w-2xl mx-auto mb-8 p-6 bg-gradient-to-r from-primary/10 to-cyan-600/10 border border-primary/30 rounded-2xl text-center"
              >
                <Sparkles className="w-8 h-8 text-primary mx-auto mb-3" />
                <h3 className="text-lg font-display font-bold text-white mb-2">
                  {t("resources.premium_title")}
                </h3>
                <p className="text-slate-400 mb-4">
                  {t("resources.premium_desc")}
                </p>
                <Link href="/login">
                  <Button className="bg-primary hover:bg-primary/90 text-white">
                    {t("resources.locked")}
                    <ChevronRight className="w-4 h-4 ml-2" />
                  </Button>
                </Link>
              </motion.div>
            )}
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
            {filteredResources.map((resource) => (
              <ResourceCard
                key={resource.id}
                resource={resource}
                isAuthenticated={isAuthenticated}
                kycVerified={kycVerified}
              />
            ))}
          </div>
        </div>
      </section>

      <section className="py-20 bg-gradient-to-r from-primary/10 to-secondary/10">
        <div className="container mx-auto px-4 text-center">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            <h2 className="text-3xl font-display font-bold text-white mb-6">
              {t("resources.tcpwave_docs")}
            </h2>
            <p className="text-slate-400 max-w-2xl mx-auto mb-8">
              {t("resources.tcpwave_docs_desc")}
            </p>
            <Link href="/resources/tcpwave-documentation">
              <button className="px-6 py-3 bg-primary text-slate-950 font-bold rounded-lg hover:bg-primary/90 transition-colors">
                {t("resources.view_docs")}
              </button>
            </Link>
          </motion.div>
        </div>
      </section>
    </PageLayout>
  );
}
