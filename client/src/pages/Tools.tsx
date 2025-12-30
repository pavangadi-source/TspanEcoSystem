import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import Navbar from "@/components/Navbar";
import { 
  Presentation, Code, Palette, PenTool, Video, Mic, 
  Zap, Search, BarChart3, MessageCircle, Shield, Rocket,
  Bot, FileText, GraduationCap, ShieldCheck, Wrench, Brain,
  ExternalLink, Star, ChevronLeft, ChevronRight
} from "lucide-react";
import { Button } from "@/components/ui/button";

const categories = [
  { id: "presentations", name: "Presentations", icon: Presentation, emoji: "🎬", count: 6 },
  { id: "code", name: "Code & Dev", icon: Code, emoji: "💻", count: 8 },
  { id: "design", name: "Design", icon: Palette, emoji: "🎨", count: 7 },
  { id: "writing", name: "Writing", icon: PenTool, emoji: "✍️", count: 6 },
  { id: "video", name: "Video", icon: Video, emoji: "🎥", count: 7 },
  { id: "audio", name: "Audio", icon: Mic, emoji: "🎙️", count: 6 },
  { id: "productivity", name: "Productivity", icon: Zap, emoji: "⚡", count: 6 },
  { id: "research", name: "Research", icon: Search, emoji: "🔍", count: 6 },
  { id: "data", name: "Data", icon: BarChart3, emoji: "📊", count: 5 },
  { id: "communication", name: "Communication", icon: MessageCircle, emoji: "💬", count: 5 },
  { id: "security", name: "Security", icon: Shield, emoji: "🔐", count: 4 },
  { id: "devops", name: "DevOps", icon: Rocket, emoji: "🚀", count: 5 },
  { id: "automation", name: "Automation", icon: Bot, emoji: "🤖", count: 5 },
  { id: "documentation", name: "Documentation", icon: FileText, emoji: "📝", count: 5 },
  { id: "learning", name: "Learning", icon: GraduationCap, emoji: "🎓", count: 4 },
  { id: "ssdlc", name: "SSDLC", icon: ShieldCheck, emoji: "🛡️", count: 4 },
  { id: "devsecops", name: "DevSecOps", icon: Wrench, emoji: "🔧", count: 4 },
  { id: "mlops", name: "MLOps", icon: Brain, emoji: "🧠", count: 4 },
];

const tools: Record<string, Array<{
  name: string;
  tier: "Elite" | "Power" | "Essential";
  tagline: string;
  description: string;
  features: string[];
  link?: string;
}>> = {
  presentations: [
    { name: "Gamma", tier: "Elite", tagline: "AI-Powered Presentation Magic", description: "Create stunning presentations, documents, and webpages in seconds. Just describe what you want.", features: ["AI Generation", "Auto-Design", "One-Click Restyle", "Web Publish"] },
    { name: "Beautiful.ai", tier: "Power", tagline: "Smart Slides, Zero Design Skills", description: "Presentation software that designs slides for you. AI automatically formats content.", features: ["Smart Templates", "Auto-Layout", "Team Collaboration"] },
    { name: "Canva", tier: "Power", tagline: "Design Anything, Instantly", description: "All-in-one design platform with AI-powered features for presentations and graphics.", features: ["Magic Design", "Brand Kit", "10M+ Templates"] },
    { name: "Tome", tier: "Power", tagline: "AI-Native Storytelling", description: "Generate entire presentations from a single prompt with text, images, and layouts.", features: ["Narrative AI", "DALL-E Integration", "Live Embeds"] },
    { name: "Pitch", tier: "Essential", tagline: "Collaborative Deck Building", description: "Modern presentation software built for teams with real-time collaboration.", features: ["Real-time Collab", "Video Recording", "Analytics"] },
    { name: "SlidesAI", tier: "Essential", tagline: "Text to Slides in Seconds", description: "Transform any text into presentation slides automatically.", features: ["Google Slides Add-on", "Multi-Language", "Custom Themes"] },
  ],
  code: [
    { name: "Claude Code", tier: "Elite", tagline: "The Ultimate AI Coding Partner", description: "Anthropic's CLI coding assistant. Understands entire codebases, writes production-ready code.", features: ["Full Codebase Context", "Multi-File Editing", "Terminal Integration", "Git-Aware"] },
    { name: "Cursor", tier: "Elite", tagline: "The AI-First Code Editor", description: "VS Code fork with native AI integration. Chat with your codebase, generate code inline.", features: ["Codebase Chat", "Inline Generation", "Multi-Model", "Tab Autocomplete"] },
    { name: "GitHub Copilot", tier: "Power", tagline: "Your AI Pair Programmer", description: "AI-powered code suggestions right in your IDE based on your coding patterns.", features: ["IDE Integration", "Context-Aware", "Multi-Language"] },
    { name: "Windsurf", tier: "Power", tagline: "Flow State Coding with AI", description: "Codeium's AI-native IDE with multi-file, multi-step code generation.", features: ["Cascade AI", "Free Tier", "Multi-File Aware"] },
    { name: "Bolt.new", tier: "Power", tagline: "Prompt to Full-Stack App", description: "Describe an app, get a working full-stack application instantly.", features: ["Full-Stack Generation", "In-Browser IDE", "One-Click Deploy"] },
    { name: "v0 by Vercel", tier: "Power", tagline: "UI Generation on Steroids", description: "Generate React components and full UI from descriptions.", features: ["React/Next.js", "Tailwind CSS", "Copy-Paste Ready"] },
    { name: "Replit", tier: "Essential", tagline: "Code, Collaborate, Deploy", description: "Browser-based IDE with AI assistance. Write code in any language.", features: ["50+ Languages", "Ghostwriter AI", "Instant Deploy"] },
    { name: "Lovable", tier: "Essential", tagline: "Ideas to Apps, No Code Required", description: "Describe your app idea in plain English. Lovable generates a complete application.", features: ["No-Code", "Supabase Backend", "GitHub Sync"] },
  ],
  design: [
    { name: "Midjourney", tier: "Elite", tagline: "Imagination Rendered", description: "The gold standard in AI image generation. Create breathtaking visuals from text.", features: ["Photorealistic", "Artistic Styles", "V6 Quality", "Discord-Based"] },
    { name: "DALL-E 3", tier: "Elite", tagline: "OpenAI's Visual Genius", description: "State-of-the-art image generation integrated into ChatGPT.", features: ["Text-in-Image", "ChatGPT Native", "High Accuracy"] },
    { name: "Ideogram", tier: "Power", tagline: "Text That Actually Works", description: "AI image generator with the best text rendering in the industry.", features: ["Perfect Text", "Logo Design", "Magic Prompt"] },
    { name: "Adobe Firefly", tier: "Power", tagline: "Generative AI for Creatives", description: "Adobe's AI integrated across Creative Cloud. Commercially safe.", features: ["Commercial License", "Photoshop Native", "Generative Fill"] },
    { name: "Figma AI", tier: "Power", tagline: "Design Intelligence Built-In", description: "AI features within Figma for faster design and prototyping.", features: ["Native Integration", "Auto-Layout", "Component AI"] },
    { name: "Remove.bg", tier: "Essential", tagline: "Background Gone in 5 Seconds", description: "Instantly remove backgrounds from any image with AI precision.", features: ["Instant Removal", "API Available", "Batch Process"] },
    { name: "Leonardo.ai", tier: "Essential", tagline: "Game-Ready Asset Generation", description: "Create game assets, textures, and concept art with specialized AI.", features: ["Custom Models", "Texture Generation", "Canvas Editor"] },
  ],
  writing: [
    { name: "Claude", tier: "Elite", tagline: "The Thinking AI", description: "Anthropic's conversational AI with exceptional writing ability and long context.", features: ["200K Context", "Nuanced Writing", "PDF Analysis", "Artifacts"] },
    { name: "ChatGPT", tier: "Power", tagline: "The Conversational Pioneer", description: "OpenAI's flagship AI assistant with web browsing and image generation.", features: ["Web Browsing", "DALL-E Built-In", "Code Interpreter"] },
    { name: "Jasper", tier: "Power", tagline: "Enterprise Marketing AI", description: "AI marketing platform for teams with brand voice consistency.", features: ["Brand Voice", "Templates", "Team Features"] },
    { name: "Copy.ai", tier: "Power", tagline: "Sales & Marketing Copy Engine", description: "Generate high-converting copy for any marketing channel.", features: ["90+ Templates", "Workflows", "API Access"] },
    { name: "Grammarly", tier: "Essential", tagline: "Write with Confidence", description: "AI writing assistant for grammar, clarity, and tone everywhere you write.", features: ["Tone Detection", "Plagiarism Check", "Style Guides"] },
    { name: "Hemingway Editor", tier: "Essential", tagline: "Write Bold and Clear", description: "Makes your writing bold and clear with readability analysis.", features: ["Readability Score", "Simple Interface", "Desktop App"] },
  ],
  video: [
    { name: "Sora", tier: "Elite", tagline: "Text-to-Video Revolution", description: "OpenAI's groundbreaking video generation. Create cinematic videos from text.", features: ["60s Videos", "Photorealistic", "Scene Coherence"] },
    { name: "Runway", tier: "Elite", tagline: "AI Video Tools Suite", description: "Complete AI video toolkit used by Hollywood studios.", features: ["Gen-2 Video", "Motion Brush", "Inpainting"] },
    { name: "Pika", tier: "Power", tagline: "Creative Video Generation", description: "Turn images and text into videos with unique AI effects.", features: ["Image-to-Video", "Video Editing", "Quick Renders"] },
    { name: "HeyGen", tier: "Power", tagline: "AI Avatar Videos", description: "Create professional videos with 100+ realistic AI avatars.", features: ["100+ Avatars", "40+ Languages", "Clone Your Voice"] },
    { name: "Synthesia", tier: "Power", tagline: "Enterprise Video at Scale", description: "Create training videos with AI presenters. No cameras needed.", features: ["Enterprise Grade", "140+ Avatars", "120+ Languages"] },
    { name: "Descript", tier: "Essential", tagline: "Edit Video Like a Doc", description: "Revolutionary video editing through text transcripts.", features: ["Text-Based Editing", "Voice Clone", "Auto-Captions"] },
    { name: "CapCut", tier: "Essential", tagline: "Free Pro Video Editing", description: "Free, feature-rich video editor with AI-powered effects.", features: ["Free", "AI Effects", "Mobile + Desktop"] },
  ],
  audio: [
    { name: "ElevenLabs", tier: "Elite", tagline: "Voices Indistinguishable from Human", description: "The most realistic AI voice synthesis. Clone any voice in minutes.", features: ["Voice Cloning", "29 Languages", "Emotional Control", "API Access"] },
    { name: "Whisper", tier: "Power", tagline: "OpenAI's Transcription Engine", description: "Industry-leading speech recognition in 99 languages.", features: ["99 Languages", "Open Source", "Timestamps"] },
    { name: "Murf AI", tier: "Power", tagline: "Studio-Quality Voiceovers", description: "Create natural voiceovers for videos and podcasts.", features: ["120+ Voices", "Video Sync", "Team Workspace"] },
    { name: "Suno", tier: "Power", tagline: "Create Music with AI", description: "Generate complete songs with vocals from text prompts.", features: ["Full Songs", "Vocals + Instruments", "All Genres"] },
    { name: "Otter.ai", tier: "Essential", tagline: "Meeting Notes on Autopilot", description: "AI meeting assistant that records, transcribes, and summarizes.", features: ["Auto-Join Meetings", "Speaker ID", "Action Items"] },
    { name: "Podcastle", tier: "Essential", tagline: "Podcast Studio in Your Browser", description: "Record, edit, and enhance podcasts with AI.", features: ["Noise Removal", "Magic Dust", "Multi-Track"] },
  ],
  productivity: [
    { name: "Notion AI", tier: "Elite", tagline: "Your Second Brain, Supercharged", description: "AI integrated into Notion workspace for content and Q&A.", features: ["Q&A on Docs", "Auto-Fill Tables", "Meeting Summaries", "Writing Assist"] },
    { name: "Linear", tier: "Power", tagline: "Issue Tracking at Light Speed", description: "Modern project management with AI for smart prioritization.", features: ["Cycles & Sprints", "Git Sync", "Auto-Close Issues"] },
    { name: "Zapier", tier: "Power", tagline: "Automate Everything", description: "Connect 6,000+ apps with no-code automation and AI.", features: ["6000+ Apps", "AI Builder", "Multi-Step"] },
    { name: "Raycast", tier: "Power", tagline: "Launcher on Steroids", description: "Mac productivity launcher with built-in AI chat.", features: ["AI Chat Built-In", "Extensions", "Snippets"] },
    { name: "Motion", tier: "Essential", tagline: "AI-Scheduled Productivity", description: "Intelligent calendar that auto-schedules and prioritizes tasks.", features: ["Auto-Schedule", "Task Management", "Focus Time"] },
    { name: "Cron Calendar", tier: "Essential", tagline: "Calendar Built for Teams", description: "Next-gen calendar with team scheduling and timezone intelligence.", features: ["Menu Bar", "Team Overlays", "Time Zones"] },
  ],
  research: [
    { name: "Perplexity", tier: "Elite", tagline: "AI-Powered Answer Engine", description: "Search reimagined with AI. Get direct answers with citations.", features: ["Cited Answers", "Pro Search", "Focus Modes", "Collections"] },
    { name: "Consensus", tier: "Power", tagline: "Research Papers, Answered", description: "AI search engine for scientific research backed by peer-reviewed papers.", features: ["200M+ Papers", "Copilot", "Consensus Meter"] },
    { name: "Elicit", tier: "Power", tagline: "AI Research Assistant", description: "Automate literature reviews and synthesize findings.", features: ["Paper Discovery", "Data Extraction", "Synthesis"] },
    { name: "Semantic Scholar", tier: "Power", tagline: "AI-Powered Academic Search", description: "Free academic search with AI features across 200M+ papers.", features: ["TLDR Summaries", "Citation Analysis", "Research Feeds"] },
    { name: "NotebookLM", tier: "Essential", tagline: "Google's Research Notebook", description: "Upload documents and chat with them. AI grounds answers in sources.", features: ["Source-Grounded", "Audio Overview", "Multi-Doc Chat"] },
    { name: "ChatPDF", tier: "Essential", tagline: "Talk to Any PDF", description: "Upload a PDF and have a conversation to extract insights.", features: ["PDF Upload", "Chat Interface", "Page Citations"] },
  ],
  data: [
    { name: "Julius AI", tier: "Elite", tagline: "Data Analysis for Everyone", description: "Upload data, ask questions in plain English. AI creates visualizations.", features: ["No-Code Analysis", "Auto-Visualize", "Python/R Under Hood"] },
    { name: "Tableau AI", tier: "Power", tagline: "Enterprise BI with AI", description: "Ask questions about your data in natural language.", features: ["Einstein AI", "Explain Data", "Ask Data"] },
    { name: "Mode", tier: "Power", tagline: "Collaborative Data Science", description: "SQL + Python + R in one platform with AI-assisted queries.", features: ["SQL IDE", "Python Notebooks", "Report Insights"] },
    { name: "Akkio", tier: "Essential", tagline: "Predictive AI for Business", description: "Build ML models without data science skills.", features: ["No-Code ML", "Predictions", "Integrations"] },
    { name: "Count", tier: "Essential", tagline: "Visual Analytics Canvas", description: "Infinite canvas for data exploration with AI assistance.", features: ["Canvas UI", "AI Assistant", "Collaboration"] },
  ],
  communication: [
    { name: "Fireflies.ai", tier: "Elite", tagline: "Never Miss a Meeting Moment", description: "AI meeting assistant that transcribes and extracts action items.", features: ["Auto-Join", "AI Summaries", "Searchable", "CRM Sync"] },
    { name: "Grain", tier: "Power", tagline: "Clip & Share Meeting Moments", description: "Record meetings, create clips, and build insight libraries.", features: ["Video Clips", "AI Highlights", "Insight Library"] },
    { name: "Slack AI", tier: "Power", tagline: "Intelligence in Your Workspace", description: "AI built into Slack for summaries and smart search.", features: ["Channel Summaries", "Thread Catch-Up", "Smart Search"] },
    { name: "Loom", tier: "Essential", tagline: "Async Video Messaging", description: "Record quick videos instead of scheduling meetings.", features: ["Instant Recording", "AI Titles", "Auto-Chapters"] },
    { name: "Krisp", tier: "Essential", tagline: "AI Noise Cancellation", description: "Remove background noise from calls in real-time.", features: ["Noise Cancel", "Any App", "Meeting Notes"] },
  ],
  security: [
    { name: "Snyk", tier: "Elite", tagline: "Developer-First Security", description: "Find and fix vulnerabilities in code, dependencies, and containers.", features: ["Code Analysis", "Container Scan", "Auto-Fix PRs", "SBOM"] },
    { name: "Darktrace", tier: "Power", tagline: "Self-Learning Cyber AI", description: "AI that learns your business to detect anomalies autonomously.", features: ["Autonomous Response", "Network AI", "Email Security"] },
    { name: "Semgrep", tier: "Power", tagline: "Code Security at Scale", description: "Static analysis with custom rules for security bugs.", features: ["Custom Rules", "Multi-Language", "CI Integration"] },
    { name: "Vanta", tier: "Essential", tagline: "Compliance on Autopilot", description: "Automate SOC 2, ISO 27001, HIPAA compliance.", features: ["Auto-Evidence", "Continuous Monitoring", "Vendor Risk"] },
  ],
  devops: [
    { name: "Vercel", tier: "Elite", tagline: "Ship at the Speed of Frontend", description: "Deploy any frontend framework with zero configuration.", features: ["Zero Config", "Edge Runtime", "Preview Deploys", "AI SDK"] },
    { name: "GitHub Actions", tier: "Power", tagline: "CI/CD Native to GitHub", description: "Automate workflows directly in GitHub with AI suggestions.", features: ["YAML Workflows", "Marketplace", "Matrix Builds"] },
    { name: "Pulumi", tier: "Power", tagline: "IaC in Real Languages", description: "Write infrastructure as code in TypeScript, Python, or Go.", features: ["Real Languages", "AI Assist", "Multi-Cloud"] },
    { name: "Datadog", tier: "Power", tagline: "Observability Unified", description: "Monitoring, APM, logs, and security in one platform.", features: ["Watchdog AI", "APM", "Log Management"] },
    { name: "Railway", tier: "Essential", tagline: "Deploy in Seconds", description: "The simplest way to deploy apps with auto-detection.", features: ["Auto-Detect", "Databases", "Generous Free Tier"] },
  ],
  automation: [
    { name: "Make (Integromat)", tier: "Elite", tagline: "Visual Automation Platform", description: "Build complex automations visually with 1500+ integrations.", features: ["Visual Builder", "1500+ Apps", "Data Transform", "Webhooks"] },
    { name: "n8n", tier: "Power", tagline: "Self-Hostable Automation", description: "Open-source workflow automation with AI agent capabilities.", features: ["Self-Hostable", "Open Source", "AI Agents"] },
    { name: "AgentGPT", tier: "Power", tagline: "Autonomous AI Agents", description: "Create AI agents that accomplish goals autonomously.", features: ["Autonomous", "Task Breakdown", "Web-Based"] },
    { name: "Langchain", tier: "Power", tagline: "LLM Application Framework", description: "Build applications powered by LLMs with chains and agents.", features: ["Chains", "Agents", "Vector Stores"] },
    { name: "Flowise", tier: "Essential", tagline: "Visual LLM App Builder", description: "Drag-and-drop LangChain interface for chatbots and agents.", features: ["Visual Builder", "Open Source", "Deploy Anywhere"] },
  ],
  documentation: [
    { name: "GitBook", tier: "Elite", tagline: "Beautiful Documentation", description: "Create stunning documentation that stays in sync with code.", features: ["Git Sync", "AI Search", "Lens AI", "Custom Domains"] },
    { name: "Mintlify", tier: "Power", tagline: "Docs That Convert", description: "Modern documentation with AI features and API playgrounds.", features: ["AI Writer", "API Playground", "Analytics"] },
    { name: "Confluence AI", tier: "Power", tagline: "Enterprise Wiki Supercharged", description: "Atlassian's wiki with AI summaries and content generation.", features: ["Atlassian AI", "Page Summaries", "Enterprise"] },
    { name: "Readme", tier: "Essential", tagline: "API Docs Made Easy", description: "Beautiful API documentation with interactive examples.", features: ["Try It", "Metrics", "Custom Branding"] },
    { name: "Docusaurus", tier: "Essential", tagline: "Open Source Doc Sites", description: "Static site generator for documentation websites.", features: ["React-Based", "Versioning", "MDX Support"] },
  ],
  learning: [
    { name: "Coursera", tier: "Elite", tagline: "World-Class Courses", description: "Learn from top universities and companies worldwide.", features: ["Certificates", "Degrees", "Enterprise"] },
    { name: "Udemy", tier: "Power", tagline: "Skills for Any Goal", description: "Massive course library on every tech topic imaginable.", features: ["200K+ Courses", "Lifetime Access", "Mobile App"] },
    { name: "Pluralsight", tier: "Power", tagline: "Tech Skills Platform", description: "Skill assessments and learning paths for technology professionals.", features: ["Skill IQ", "Learning Paths", "Hands-On Labs"] },
    { name: "LinkedIn Learning", tier: "Essential", tagline: "Learn While You Network", description: "Professional development courses integrated with LinkedIn.", features: ["Profile Badges", "Business Skills", "Tech Courses"] },
  ],
  ssdlc: [
    { name: "SonarQube", tier: "Elite", tagline: "Code Quality Gateway", description: "Continuous inspection for clean code and security.", features: ["Quality Gates", "Security Hotspots", "CI/CD Integration"] },
    { name: "Checkmarx", tier: "Power", tagline: "Application Security Testing", description: "SAST, SCA, and IAST for comprehensive app security.", features: ["SAST", "SCA", "IDE Plugins"] },
    { name: "Veracode", tier: "Power", tagline: "Secure from the Start", description: "Cloud-based application security testing platform.", features: ["Dynamic Analysis", "SCA", "Policy Engine"] },
    { name: "OWASP ZAP", tier: "Essential", tagline: "Open Source Security Testing", description: "Free security testing tool for web applications.", features: ["Free", "Automated Scans", "API Testing"] },
  ],
  devsecops: [
    { name: "HashiCorp Vault", tier: "Elite", tagline: "Secrets Management", description: "Secure, store, and control access to secrets and encryption.", features: ["Dynamic Secrets", "Encryption", "Identity"] },
    { name: "Aqua Security", tier: "Power", tagline: "Cloud Native Security", description: "Full lifecycle security for containers and cloud workloads.", features: ["Container Scan", "Runtime Protection", "Kubernetes"] },
    { name: "Trivy", tier: "Power", tagline: "Vulnerability Scanner", description: "All-in-one security scanner for containers and IaC.", features: ["Container Scan", "IaC Scan", "Open Source"] },
    { name: "Falco", tier: "Essential", tagline: "Runtime Security", description: "Cloud-native runtime security and threat detection.", features: ["Real-time Alerts", "Kubernetes Native", "Open Source"] },
  ],
  mlops: [
    { name: "MLflow", tier: "Elite", tagline: "ML Lifecycle Platform", description: "Open source platform for the complete ML lifecycle.", features: ["Experiment Tracking", "Model Registry", "Deployment"] },
    { name: "Weights & Biases", tier: "Power", tagline: "ML Developer Tools", description: "Track experiments, visualize results, and share insights.", features: ["Experiment Tracking", "Sweeps", "Reports"] },
    { name: "Kubeflow", tier: "Power", tagline: "ML on Kubernetes", description: "Machine learning toolkit for Kubernetes.", features: ["Pipelines", "Notebooks", "Training"] },
    { name: "DVC", tier: "Essential", tagline: "Data Version Control", description: "Git for data and ML models.", features: ["Data Versioning", "Experiments", "Pipelines"] },
  ],
};

const tierColors = {
  Elite: "from-amber-500 to-yellow-600",
  Power: "from-purple-500 to-indigo-600",
  Essential: "from-slate-500 to-slate-600",
};

const tierBorders = {
  Elite: "border-amber-500/50 hover:border-amber-400",
  Power: "border-purple-500/50 hover:border-purple-400",
  Essential: "border-slate-600/50 hover:border-slate-500",
};

// Partners carousel data
const partners = [
  { name: "MahaaAI", type: "Strategic AI", description: "Advanced AI platform for enterprise security operations" },
  { name: "MIT Media Lab", type: "Research", description: "Project NANDA - Network security and AI research" },
  { name: "Texas Tech University", type: "Academic", description: "NetMonAI Research Group - AI-driven SOC capabilities" },
  { name: "Red Hat Enterprise AI", type: "Technology", description: "Enterprise-grade Linux AI platforms" },
  { name: "CyberPrivilege", type: "Security", description: "Zero-trust architecture implementations" },
  { name: "SafeSquid", type: "Security", description: "Web security and content filtering solutions" },
  { name: "Datacipher", type: "Integration", description: "Enterprise data security and encryption" },
  { name: "ThinkCloud", type: "Cloud", description: "Cloud transformation and migration services" },
  { name: "World Wide Technology", type: "Enterprise", description: "Global technology solutions provider" },
  { name: "Optiv", type: "Consulting", description: "Cybersecurity advisory and managed services" },
  { name: "Kyndryl", type: "Services", description: "Infrastructure services and modernization" },
  { name: "DXC Technology", type: "Services", description: "Digital transformation and IT services" },
  { name: "TCS", type: "Enterprise", description: "Global delivery with Fortune 500 expertise" },
  { name: "Wipro", type: "Enterprise", description: "Enterprise-grade implementation expertise" },
  { name: "UST Global", type: "Consulting", description: "Digital transformation expertise" },
  { name: "DSCI", type: "Compliance", description: "Data Security Council of India - Best practices" },
  { name: "Stanford CISA", type: "Academic", description: "Stanford Center for Internet Security - Elite research" },
];

export default function Tools() {
  const [activeCategory, setActiveCategory] = useState("code");
  const [partnerIndex, setPartnerIndex] = useState(0);
  
  const visiblePartners = 4;
  const maxIndex = partners.length - visiblePartners;
  
  const nextPartners = () => setPartnerIndex(i => Math.min(i + 1, maxIndex));
  const prevPartners = () => setPartnerIndex(i => Math.max(i - 1, 0));

  return (
    <div className="min-h-screen bg-slate-950 text-white">
      <Navbar />
      
      {/* Hero Section */}
      <section className="pt-32 pb-16 relative overflow-hidden">
        <div className="absolute inset-0 bg-[linear-gradient(rgba(6,182,212,0.03)_1px,transparent_1px),linear-gradient(90deg,rgba(6,182,212,0.03)_1px,transparent_1px)] bg-[size:50px_50px]" />
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-primary/5 rounded-full blur-[150px]" />
        
        <div className="container mx-auto px-4 relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-center max-w-4xl mx-auto"
          >
            <div className="flex items-center justify-center gap-2 mb-4">
              <Zap className="w-5 h-5 text-primary animate-pulse" />
              <span className="text-primary font-mono text-xs uppercase tracking-[0.3em]" data-testid="text-tools-badge">
                AI Arsenal
              </span>
            </div>
            <h1 className="text-4xl md:text-6xl font-display font-bold mb-6" data-testid="text-tools-title">
              TCPWave{" "}
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary to-secondary">
                Superhero Toolkit
              </span>
            </h1>
            <p className="text-slate-400 text-lg md:text-xl max-w-2xl mx-auto mb-8" data-testid="text-tools-description">
              Every AI tool you need to become unstoppable. From presentations to code, design to automation — master them all.
            </p>
            
            {/* Stats */}
            <div className="grid grid-cols-3 gap-4 max-w-lg mx-auto" data-testid="section-tools-stats">
              <div className="p-4 rounded-xl bg-slate-900/60 border border-slate-800">
                <p className="text-3xl font-bold text-primary">115+</p>
                <p className="text-slate-400 text-sm">Power Tools</p>
              </div>
              <div className="p-4 rounded-xl bg-slate-900/60 border border-slate-800">
                <p className="text-3xl font-bold text-secondary">18</p>
                <p className="text-slate-400 text-sm">Categories</p>
              </div>
              <div className="p-4 rounded-xl bg-slate-900/60 border border-slate-800">
                <p className="text-3xl font-bold text-purple-400">10x</p>
                <p className="text-slate-400 text-sm">Productivity</p>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Partners Carousel */}
      <section className="py-12 bg-slate-900/50 border-y border-slate-800">
        <div className="container mx-auto px-4">
          <div className="flex items-center justify-between mb-6">
            <div>
              <h2 className="text-xl font-display font-bold text-white">TCPWave Global Partner Network</h2>
              <p className="text-slate-400 text-sm">Strategic partners teaching at T-SPAN</p>
            </div>
            <div className="flex gap-2">
              <Button 
                variant="outline" 
                size="icon" 
                onClick={prevPartners}
                disabled={partnerIndex === 0}
                className="border-slate-700 hover:bg-slate-800 disabled:opacity-30"
                data-testid="button-partners-prev"
              >
                <ChevronLeft className="w-4 h-4" />
              </Button>
              <Button 
                variant="outline" 
                size="icon" 
                onClick={nextPartners}
                disabled={partnerIndex >= maxIndex}
                className="border-slate-700 hover:bg-slate-800 disabled:opacity-30"
                data-testid="button-partners-next"
              >
                <ChevronRight className="w-4 h-4" />
              </Button>
            </div>
          </div>
          
          <div className="overflow-hidden">
            <motion.div 
              className="flex gap-4"
              animate={{ x: -partnerIndex * (280 + 16) }}
              transition={{ type: "spring", stiffness: 300, damping: 30 }}
            >
              {partners.map((partner, i) => (
                <motion.div
                  key={partner.name}
                  className="flex-shrink-0 w-[280px] p-4 rounded-xl bg-slate-900 border border-slate-800 hover:border-primary/50 transition-all"
                  data-testid={`card-partner-${i}`}
                >
                  <div className="flex items-center gap-3 mb-2">
                    <div className="w-10 h-10 rounded-lg bg-gradient-to-br from-primary/20 to-secondary/20 flex items-center justify-center">
                      <span className="text-lg font-bold text-primary">{partner.name.charAt(0)}</span>
                    </div>
                    <div>
                      <p className="font-bold text-white text-sm">{partner.name}</p>
                      <p className="text-xs text-primary font-mono">{partner.type}</p>
                    </div>
                  </div>
                  <p className="text-slate-400 text-xs line-clamp-2">{partner.description}</p>
                </motion.div>
              ))}
            </motion.div>
          </div>
        </div>
      </section>

      {/* Category Tabs */}
      <section className="py-8 sticky top-[72px] z-40 bg-slate-950/95 backdrop-blur-md border-b border-slate-800">
        <div className="container mx-auto px-4">
          <div className="flex gap-2 overflow-x-auto pb-2 scrollbar-hide">
            {categories.map((cat) => (
              <button
                key={cat.id}
                onClick={() => setActiveCategory(cat.id)}
                className={`flex items-center gap-2 px-4 py-2 rounded-lg font-medium text-sm whitespace-nowrap transition-all ${
                  activeCategory === cat.id
                    ? "bg-primary text-white"
                    : "bg-slate-900 text-slate-400 hover:bg-slate-800 hover:text-white"
                }`}
                data-testid={`tab-${cat.id}`}
              >
                <span>{cat.emoji}</span>
                <span>{cat.name}</span>
                <span className="text-xs opacity-60">({cat.count})</span>
              </button>
            ))}
          </div>
        </div>
      </section>

      {/* Tools Grid */}
      <section className="py-12">
        <div className="container mx-auto px-4">
          <AnimatePresence mode="wait">
            <motion.div
              key={activeCategory}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -20 }}
              className="grid md:grid-cols-2 lg:grid-cols-3 gap-6"
              data-testid="section-tools-grid"
            >
              {tools[activeCategory]?.map((tool, i) => (
                <motion.div
                  key={tool.name}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: i * 0.05 }}
                  className={`p-6 rounded-xl bg-slate-900/80 border ${tierBorders[tool.tier]} transition-all group hover:scale-[1.02]`}
                  data-testid={`card-tool-${tool.name.toLowerCase().replace(/\s+/g, '-')}`}
                >
                  <div className="flex items-start justify-between mb-4">
                    <div className="flex items-center gap-3">
                      <div className={`w-12 h-12 rounded-xl bg-gradient-to-br ${tierColors[tool.tier]} flex items-center justify-center`}>
                        <span className="text-white font-bold text-lg">{tool.name.charAt(0)}</span>
                      </div>
                      <div>
                        <h3 className="font-display font-bold text-white group-hover:text-primary transition-colors">
                          {tool.name}
                        </h3>
                        <span className={`text-xs font-mono px-2 py-0.5 rounded-full bg-gradient-to-r ${tierColors[tool.tier]} text-white`}>
                          {tool.tier}
                        </span>
                      </div>
                    </div>
                    <Star className="w-4 h-4 text-slate-600 group-hover:text-amber-400 transition-colors" />
                  </div>
                  
                  <p className="text-secondary font-medium text-sm mb-2">{tool.tagline}</p>
                  <p className="text-slate-400 text-sm mb-4 line-clamp-2">{tool.description}</p>
                  
                  <div className="flex flex-wrap gap-2">
                    {tool.features.map((feature) => (
                      <span key={feature} className="text-xs px-2 py-1 bg-slate-800 rounded-md text-slate-300">
                        {feature}
                      </span>
                    ))}
                  </div>
                </motion.div>
              ))}
            </motion.div>
          </AnimatePresence>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gradient-to-b from-slate-900 to-slate-950 border-t border-slate-800">
        <div className="container mx-auto px-4 text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            <h2 className="text-3xl md:text-4xl font-display font-bold mb-4">
              Master These Tools at{" "}
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary to-secondary">
                T-SPAN University
              </span>
            </h2>
            <p className="text-slate-400 max-w-2xl mx-auto mb-8">
              Our courses integrate hands-on training with the industry's most powerful AI tools.
              Graduate with practical skills that employers demand.
            </p>
            <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
              <Button
                size="lg"
                className="bg-primary hover:bg-primary/90 text-white font-bold shadow-[0_0_20px_rgba(6,182,212,0.4)]"
                asChild
              >
                <a href="/courses">
                  <GraduationCap className="mr-2 w-5 h-5" /> Explore Courses
                </a>
              </Button>
              <Button
                size="lg"
                variant="outline"
                className="border-slate-700 hover:bg-slate-800"
                asChild
              >
                <a href="/partners">
                  <ExternalLink className="mr-2 w-5 h-5" /> View All Partners
                </a>
              </Button>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  );
}
