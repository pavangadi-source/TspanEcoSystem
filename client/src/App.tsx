import { Switch, Route } from "wouter";
import { queryClient } from "./lib/queryClient";
import { QueryClientProvider } from "@tanstack/react-query";
import { Toaster } from "@/components/ui/toaster";
import { TooltipProvider } from "@/components/ui/tooltip";

// Core pages
import Home from "@/pages/Home";
import Login from "@/pages/Login";
import KYCVerification from "@/pages/KYCVerification";
import Courses from "@/pages/Courses";
import CourseDetail from "@/pages/CourseDetail";
import Dashboard from "@/pages/Dashboard";
import About from "@/pages/About";
import Faculty from "@/pages/Faculty";
import Partners from "@/pages/Partners";
import Admissions from "@/pages/Admissions";
import Contact from "@/pages/Contact";
import Careers from "@/pages/Careers";
import Tools from "@/pages/Tools";
import CheckoutSuccess from "@/pages/CheckoutSuccess";
import NotFound from "@/pages/not-found";

// About section
import VisionMission from "@/pages/about/VisionMission";
import Leadership from "@/pages/about/Leadership";
import TelanganaEcosystem from "@/pages/about/TelanganaEcosystem";
import MadeInIndia from "@/pages/about/MadeInIndia";
import Campus from "@/pages/about/Campus";

// TCPWave section
import DNSSecurity from "@/pages/tcpwave/DNSSecurity";
import IPAMSolutions from "@/pages/tcpwave/IPAMSolutions";
import DDIPlatform from "@/pages/tcpwave/DDIPlatform";
import NetworkAutomation from "@/pages/tcpwave/NetworkAutomation";
import ADCLoadBalancing from "@/pages/tcpwave/ADCLoadBalancing";
import CaseStudies from "@/pages/tcpwave/CaseStudies";
import RequestDemo from "@/pages/tcpwave/RequestDemo";
import TCPWavePricing from "@/pages/tcpwave/Pricing";

// Threat Intelligence
import ThreatIntelligence from "@/pages/threat-intelligence/ThreatIntelligence";
import ThreatExchange from "@/pages/threat-intelligence/Exchange";
import ThreatFeeds from "@/pages/threat-intelligence/Feeds";
import ThreatAPI from "@/pages/threat-intelligence/API";
import ThreatDashboard from "@/pages/threat-intelligence/Dashboard";
import MalwareAnalysis from "@/pages/threat-intelligence/MalwareAnalysis";
import IOCDatabase from "@/pages/threat-intelligence/IOCDatabase";
import ThreatSubscribe from "@/pages/threat-intelligence/Subscribe";
import ThreatPricing from "@/pages/threat-intelligence/Pricing";
import ThreatReports from "@/pages/threat-intelligence/Reports";

// TCPWave additional pages
import CustomerSuccess from "@/pages/tcpwave/CustomerSuccess";
import FreeTrial from "@/pages/tcpwave/FreeTrial";
import EnterpriseSolutions from "@/pages/tcpwave/EnterpriseSolutions";
import GovernmentSolutions from "@/pages/tcpwave/GovernmentSolutions";
import BankingFinance from "@/pages/tcpwave/BankingFinance";

// Programs
import Programs from "@/pages/programs/Programs";
import MastersCybersecurity from "@/pages/programs/MastersCybersecurity";
import MTechNetworkSecurity from "@/pages/programs/MTechNetworkSecurity";
import PGDiplomaCyberDefense from "@/pages/programs/PGDiplomaCyberDefense";
import ExecutiveMBA from "@/pages/programs/ExecutiveMBA";
import ExecutivePrograms from "@/pages/programs/ExecutivePrograms";
import ExecutiveCEO from "@/pages/programs/ExecutiveCEO";
import ExecutiveTechnicalLeaders from "@/pages/programs/ExecutiveTechnicalLeaders";
import ExecutiveAIThreatIntel from "@/pages/programs/ExecutiveAIThreatIntel";
import ExecutiveThreatMonitoring from "@/pages/programs/ExecutiveThreatMonitoring";
import Certificates from "@/pages/programs/Certificates";
import TCPWaveCertifications from "@/pages/programs/TCPWaveCertifications";

// Courses
import MISPIntegration from "@/pages/courses/MISPIntegration";
import DDISecurityBestPractices from "@/pages/courses/DDISecurityBestPractices";
import CISSPPrep from "@/pages/courses/CISSPPrep";
import ThreatIntelDashboard from "@/pages/courses/ThreatIntelDashboard";
import PythonBasic from "@/pages/courses/PythonBasic";
import PythonIntermediate from "@/pages/courses/PythonIntermediate";
import PythonAdvanced from "@/pages/courses/PythonAdvanced";
import DevSecOpsBasic from "@/pages/courses/DevSecOpsBasic";
import DevSecOpsIntermediate from "@/pages/courses/DevSecOpsIntermediate";
import DevSecOpsAdvanced from "@/pages/courses/DevSecOpsAdvanced";

// TCPWave Core Network Engineering Courses
import DNSFundamentals from "@/pages/courses/DNSFundamentals";
import DHCPManagement from "@/pages/courses/DHCPManagement";
import IPAMEnterprise from "@/pages/courses/IPAMEnterprise";
import DDIIntegration from "@/pages/courses/DDIIntegration";
import TCPWaveAdmin from "@/pages/courses/TCPWaveAdmin";
import TCPWaveArchitect from "@/pages/courses/TCPWaveArchitect";
import AgenticAINetworking from "@/pages/courses/AgenticAINetworking";
import AIAgentProtocols from "@/pages/courses/AIAgentProtocols";
import CustomDashboards from "@/pages/courses/CustomDashboards";
import TCPWaveEssentials from "@/pages/courses/TCPWaveEssentials";
import WebAppSecurityTesting from "@/pages/courses/WebAppSecurityTesting";

// Online & Labs
import Online from "@/pages/online/Online";
import Labs from "@/pages/labs/Labs";

// Corporate & Government
import Corporate from "@/pages/corporate/Corporate";
import Government from "@/pages/government/Government";

// Banking & Research
import Banking from "@/pages/banking/Banking";
import Research from "@/pages/research/Research";

// Events, Blog, Resources, Community
import Events from "@/pages/events/Events";
import Blog from "@/pages/blog/Blog";
import Resources from "@/pages/resources/Resources";
import Community from "@/pages/community/Community";

// Legal & Support
import PrivacyPolicy from "@/pages/legal/PrivacyPolicy";
import TermsOfService from "@/pages/legal/TermsOfService";
import Support from "@/pages/support/Support";
import FAQ from "@/pages/support/FAQ";

// Landing pages
import GetStarted from "@/pages/landing/GetStarted";
import WhyTCPWave from "@/pages/landing/WhyTCPWave";
import SuccessStories from "@/pages/landing/SuccessStories";

// TIaaS (Threat Intelligence as a Service)
import TIaaS from "@/pages/tiaas/TIaaS";
import PartnerNetwork from "@/pages/tiaas/PartnerNetwork";
import TIaaSThreatReports from "@/pages/tiaas/ThreatReports";
import IntelligenceCenter from "@/pages/tiaas/IntelligenceCenter";
import AIDefense from "@/pages/tiaas/AIDefense";
import ResearchFunding from "@/pages/tiaas/ResearchFunding";

// Enterprise & Tracks
import Enterprise from "@/pages/Enterprise";
import ISBCybersecurity from "@/pages/tracks/ISBCybersecurity";
import DPDPCompliance from "@/pages/tracks/DPDPCompliance";
import NCIIPCCertification from "@/pages/tracks/NCIIPCCertification";
import CybersecurityGovernance from "@/pages/tracks/CybersecurityGovernance";

function Router() {
  return (
    <Switch>
      {/* Core routes */}
      <Route path="/" component={Home} />
      <Route path="/login" component={Login} />
      <Route path="/kyc" component={KYCVerification} />
      <Route path="/dashboard" component={Dashboard} />
      <Route path="/courses" component={Courses} />
      {/* Specialized Courses - must be before dynamic :id route */}
      <Route path="/courses/misp-integration" component={MISPIntegration} />
      <Route path="/courses/ddi-security-best-practices" component={DDISecurityBestPractices} />
      <Route path="/courses/cissp-prep" component={CISSPPrep} />
      <Route path="/courses/threat-intel-dashboard" component={ThreatIntelDashboard} />
      {/* MLOps Track - Python Courses */}
      <Route path="/courses/python-basic" component={PythonBasic} />
      <Route path="/courses/python-intermediate" component={PythonIntermediate} />
      <Route path="/courses/python-advanced" component={PythonAdvanced} />
      {/* DevSecOps Track */}
      <Route path="/courses/devsecops-basic" component={DevSecOpsBasic} />
      <Route path="/courses/devsecops-intermediate" component={DevSecOpsIntermediate} />
      <Route path="/courses/devsecops-advanced" component={DevSecOpsAdvanced} />
      {/* TCPWave Core Network Engineering Track */}
      <Route path="/courses/dns-fundamentals" component={DNSFundamentals} />
      <Route path="/courses/dhcp-management" component={DHCPManagement} />
      <Route path="/courses/ipam-enterprise" component={IPAMEnterprise} />
      <Route path="/courses/ddi-integration" component={DDIIntegration} />
      <Route path="/courses/tcpwave-admin" component={TCPWaveAdmin} />
      <Route path="/courses/tcpwave-architect" component={TCPWaveArchitect} />
      {/* Agentic AI in Network Engineering */}
      <Route path="/courses/agentic-ai-networking" component={AgenticAINetworking} />
      {/* AI Agent Protocols */}
      <Route path="/courses/ai-agent-protocols" component={AIAgentProtocols} />
      {/* Custom Dashboards */}
      <Route path="/courses/custom-dashboards" component={CustomDashboards} />
      {/* TCPWave Essentials */}
      <Route path="/courses/tcpwave-essentials" component={TCPWaveEssentials} />
      {/* Web App Security Testing */}
      <Route path="/courses/web-app-security-testing" component={WebAppSecurityTesting} />
      {/* Dynamic course route */}
      <Route path="/courses/:id" component={CourseDetail} />
      <Route path="/about" component={About} />
      <Route path="/faculty" component={Faculty} />
      <Route path="/partners" component={Partners} />
      <Route path="/admissions" component={Admissions} />
      <Route path="/contact" component={Contact} />
      <Route path="/careers" component={Careers} />
      <Route path="/tools" component={Tools} />
      <Route path="/checkout/success" component={CheckoutSuccess} />

      {/* About section */}
      <Route path="/about/vision-mission" component={VisionMission} />
      <Route path="/about/leadership" component={Leadership} />
      <Route path="/about/telangana-cybersecurity-ecosystem" component={TelanganaEcosystem} />
      <Route path="/about/made-in-india" component={MadeInIndia} />
      <Route path="/about/campus" component={Campus} />

      {/* TCPWave section */}
      <Route path="/tcpwave" component={DDIPlatform} />
      <Route path="/tcpwave/dns-security" component={DNSSecurity} />
      <Route path="/tcpwave/ipam-solutions" component={IPAMSolutions} />
      <Route path="/tcpwave/ddi-platform" component={DDIPlatform} />
      <Route path="/tcpwave/network-automation" component={NetworkAutomation} />
      <Route path="/tcpwave/adc-load-balancing" component={ADCLoadBalancing} />
      <Route path="/tcpwave/case-studies" component={CaseStudies} />
      <Route path="/tcpwave/customer-success" component={CustomerSuccess} />
      <Route path="/tcpwave/request-demo" component={RequestDemo} />
      <Route path="/tcpwave/free-trial" component={FreeTrial} />
      <Route path="/tcpwave/pricing" component={TCPWavePricing} />
      <Route path="/tcpwave/enterprise-solutions" component={EnterpriseSolutions} />
      <Route path="/tcpwave/government-solutions" component={GovernmentSolutions} />
      <Route path="/tcpwave/banking-finance" component={BankingFinance} />

      {/* Threat Intelligence */}
      <Route path="/threat-intelligence" component={ThreatIntelligence} />
      <Route path="/threat-intelligence/exchange" component={ThreatExchange} />
      <Route path="/threat-intelligence/feeds" component={ThreatFeeds} />
      <Route path="/threat-intelligence/api" component={ThreatAPI} />
      <Route path="/threat-intelligence/real-time-dashboard" component={ThreatDashboard} />
      <Route path="/threat-intelligence/malware-analysis" component={MalwareAnalysis} />
      <Route path="/threat-intelligence/ioc-database" component={IOCDatabase} />
      <Route path="/threat-intelligence/subscribe" component={ThreatSubscribe} />
      <Route path="/threat-intelligence/pricing" component={ThreatPricing} />
      <Route path="/threat-intelligence/reports" component={ThreatReports} />

      {/* TIaaS - Threat Intelligence as a Service */}
      <Route path="/tiaas" component={TIaaS} />
      <Route path="/tiaas/partner-network" component={PartnerNetwork} />
      <Route path="/tiaas/threat-reports" component={TIaaSThreatReports} />
      <Route path="/tiaas/intelligence-center" component={IntelligenceCenter} />
      <Route path="/tiaas/ai-defense" component={AIDefense} />
      <Route path="/tiaas/research-funding" component={ResearchFunding} />

      {/* Enterprise & Management Tracks */}
      <Route path="/enterprise" component={Enterprise} />
      <Route path="/tracks/isb-cybersecurity" component={ISBCybersecurity} />
      <Route path="/tracks/dpdp-compliance" component={DPDPCompliance} />
      <Route path="/tracks/nciipc-certification" component={NCIIPCCertification} />
      <Route path="/tracks/cybersecurity-governance" component={CybersecurityGovernance} />

      {/* Programs */}
      <Route path="/programs" component={Programs} />
      <Route path="/executive-programs" component={ExecutivePrograms} />
      <Route path="/programs/executive" component={ExecutivePrograms} />
      <Route path="/programs/executive-cybersecurity-ceo" component={ExecutiveCEO} />
      <Route path="/programs/executive-technical-leaders" component={ExecutiveTechnicalLeaders} />
      <Route path="/programs/executive-ai-threat-intelligence" component={ExecutiveAIThreatIntel} />
      <Route path="/programs/executive-threat-monitoring" component={ExecutiveThreatMonitoring} />
      <Route path="/programs/masters-cybersecurity" component={MastersCybersecurity} />
      <Route path="/programs/mtech-network-security" component={MTechNetworkSecurity} />
      <Route path="/programs/pgdiploma-cyber-defense" component={PGDiplomaCyberDefense} />
      <Route path="/programs/executive-mba-cybersecurity" component={ExecutiveMBA} />
      <Route path="/programs/certificates" component={Certificates} />
      <Route path="/programs/certificates/:slug" component={Certificates} />
      <Route path="/programs/tcpwave-certifications" component={TCPWaveCertifications} />
      <Route path="/programs/tcpwave-certifications/:slug" component={TCPWaveCertifications} />

      {/* Online */}
      <Route path="/online" component={Online} />
      <Route path="/online/courses" component={Courses} />
      <Route path="/online/live-classes" component={Online} />
      <Route path="/online/virtual-labs" component={Labs} />
      <Route path="/online/cyber-range" component={Labs} />
      <Route path="/online/free-courses" component={Courses} />

      {/* Media */}
      <Route path="/youtube" component={Online} />
      <Route path="/tv" component={Online} />
      <Route path="/telugu-channel" component={Online} />

      {/* Labs */}
      <Route path="/labs" component={Labs} />
      <Route path="/labs/live-infrastructure" component={Labs} />
      <Route path="/labs/tcpwave-sandbox" component={Labs} />
      <Route path="/labs/soc-simulation" component={Labs} />
      <Route path="/labs/attack-defense" component={Labs} />
      <Route path="/labs/ctf-challenges" component={Labs} />

      {/* Corporate */}
      <Route path="/corporate" component={Corporate} />
      <Route path="/corporate/enterprise-training" component={Corporate} />
      <Route path="/corporate/custom-programs" component={Corporate} />
      <Route path="/corporate/soc-team-training" component={Corporate} />
      <Route path="/corporate/executive-briefings" component={Corporate} />
      <Route path="/corporate/ciso-roundtables" component={Corporate} />
      <Route path="/corporate/request-proposal" component={Corporate} />

      {/* Government */}
      <Route path="/government" component={Government} />
      <Route path="/government/telangana-partnership" component={Government} />
      <Route path="/government/law-enforcement-training" component={Government} />
      <Route path="/government/defense-sector" component={Government} />
      <Route path="/government/critical-infrastructure" component={Government} />
      <Route path="/government/digital-india-alignment" component={Government} />
      <Route path="/government/atmanirbhar-bharat" component={Government} />

      {/* Banking */}
      <Route path="/banking" component={Banking} />
      <Route path="/banking/rbi-compliance" component={Banking} />
      <Route path="/banking/fraud-detection" component={Banking} />
      <Route path="/banking/transaction-security" component={Banking} />
      <Route path="/banking/bank-training-programs" component={Banking} />

      {/* Research */}
      <Route path="/research" component={Research} />
      <Route path="/research/publications" component={Research} />
      <Route path="/research/threat-reports" component={Research} />
      <Route path="/research/whitepapers" component={Research} />
      <Route path="/research/dns-security-research" component={Research} />
      <Route path="/research/ai-cybersecurity" component={Research} />

      {/* Faculty */}
      <Route path="/faculty/iit-experts" component={Faculty} />
      <Route path="/faculty/mit-experts" component={Faculty} />
      <Route path="/faculty/industry-practitioners" component={Faculty} />
      <Route path="/faculty/tcpwave-experts" component={Faculty} />

      {/* Admissions */}
      <Route path="/admissions/apply" component={Admissions} />
      <Route path="/admissions/requirements" component={Admissions} />
      <Route path="/admissions/fees" component={Admissions} />
      <Route path="/admissions/scholarships" component={Admissions} />
      <Route path="/admissions/international-students" component={Admissions} />

      {/* Careers */}
      <Route path="/careers/placement-statistics" component={Careers} />
      <Route path="/careers/hiring-partners" component={Careers} />
      <Route path="/careers/job-board" component={Careers} />
      <Route path="/careers/salary-insights" component={Careers} />
      <Route path="/careers/tcpwave-careers" component={Careers} />

      {/* Partners */}
      <Route path="/partners/bits-pilani" component={Partners} />
      <Route path="/partners/iit-kanpur" component={Partners} />
      <Route path="/partners/dsci" component={Partners} />
      <Route path="/partners/become-partner" component={Partners} />

      {/* Events */}
      <Route path="/events" component={Events} />
      <Route path="/events/webinars" component={Events} />
      <Route path="/events/conferences" component={Events} />
      <Route path="/events/hackathons" component={Events} />
      <Route path="/events/ctf-competitions" component={Events} />

      {/* Blog */}
      <Route path="/blog" component={Blog} />
      <Route path="/blog/category/:category" component={Blog} />

      {/* News & Press */}
      <Route path="/news" component={Blog} />
      <Route path="/press" component={Blog} />

      {/* Resources */}
      <Route path="/resources" component={Resources} />
      <Route path="/resources/ebooks" component={Resources} />
      <Route path="/resources/whitepapers" component={Resources} />
      <Route path="/resources/cheat-sheets" component={Resources} />
      <Route path="/resources/tools" component={Resources} />
      <Route path="/resources/glossary" component={Resources} />
      <Route path="/resources/dns-security-guide" component={Resources} />
      <Route path="/resources/tcpwave-documentation" component={Resources} />

      {/* Community */}
      <Route path="/community" component={Community} />
      <Route path="/community/forums" component={Community} />
      <Route path="/community/alumni" component={Community} />
      <Route path="/community/discord" component={Community} />
      <Route path="/community/linkedin" component={Community} />

      {/* Contact */}
      <Route path="/contact/sales" component={Contact} />
      <Route path="/contact/admissions" component={Contact} />
      <Route path="/contact/corporate" component={Contact} />
      <Route path="/contact/government" component={Contact} />

      {/* Support */}
      <Route path="/support" component={Support} />
      <Route path="/faq" component={FAQ} />

      {/* Legal */}
      <Route path="/privacy-policy" component={PrivacyPolicy} />
      <Route path="/terms-of-service" component={TermsOfService} />
      <Route path="/cookie-policy" component={PrivacyPolicy} />

      {/* Landing/CTA pages */}
      <Route path="/get-started" component={GetStarted} />
      <Route path="/schedule-demo" component={RequestDemo} />
      <Route path="/talk-to-expert" component={Contact} />
      <Route path="/roi-calculator" component={TCPWavePricing} />
      <Route path="/compare-solutions" component={WhyTCPWave} />
      <Route path="/why-tcpwave" component={WhyTCPWave} />
      <Route path="/success-stories" component={SuccessStories} />

      {/* SEO pages */}
      <Route path="/cybersecurity-training-india" component={Programs} />
      <Route path="/best-cybersecurity-university" component={About} />
      <Route path="/dns-security-training" component={DNSSecurity} />
      <Route path="/soc-analyst-course" component={Courses} />
      <Route path="/threat-intelligence-training" component={ThreatIntelligence} />
      <Route path="/ethical-hacking-course-hyderabad" component={Courses} />
      <Route path="/cybersecurity-jobs-telangana" component={Careers} />
      <Route path="/made-in-india-cybersecurity" component={MadeInIndia} />
      <Route path="/enterprise-dns-security" component={DNSSecurity} />
      <Route path="/ipam-training" component={IPAMSolutions} />

      {/* 404 */}
      <Route component={NotFound} />
    </Switch>
  );
}

function App() {
  return (
    <QueryClientProvider client={queryClient}>
      <TooltipProvider>
        <Router />
        <Toaster />
      </TooltipProvider>
    </QueryClientProvider>
  );
}

export default App;
