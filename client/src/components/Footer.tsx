import { Link } from "wouter";
import { Shield, Mail, Phone, MapPin, Linkedin, Twitter, Youtube, Github } from "lucide-react";

const footerLinks = {
  programs: [
    { label: "Master's in Cybersecurity", href: "/programs/masters-cybersecurity" },
    { label: "M.Tech Network Security", href: "/programs/mtech-network-security" },
    { label: "PG Diploma Cyber Defense", href: "/programs/pgdiploma-cyber-defense" },
    { label: "Executive MBA", href: "/programs/executive-mba-cybersecurity" },
    { label: "Certificate Programs", href: "/programs/certificates" },
  ],
  tcpwave: [
    { label: "DNS Security", href: "/tcpwave/dns-security" },
    { label: "IPAM Solutions", href: "/tcpwave/ipam-solutions" },
    { label: "DDI Platform", href: "/tcpwave/ddi-platform" },
    { label: "Network Automation", href: "/tcpwave/network-automation" },
    { label: "Request Demo", href: "/tcpwave/request-demo" },
  ],
  resources: [
    { label: "Threat Intelligence", href: "/threat-intelligence" },
    { label: "Research Publications", href: "/research/publications" },
    { label: "Virtual Labs", href: "/online/virtual-labs" },
    { label: "CTF Challenges", href: "/labs/ctf-challenges" },
    { label: "Blog", href: "/blog" },
  ],
  company: [
    { label: "About Us", href: "/about" },
    { label: "Leadership", href: "/about/leadership" },
    { label: "Careers", href: "/careers" },
    { label: "Partners", href: "/partners" },
    { label: "Contact", href: "/contact" },
  ],
};

export default function Footer() {
  return (
    <footer className="bg-slate-950 border-t border-slate-900">
      <div className="container mx-auto px-4 py-16">
        <div className="grid md:grid-cols-2 lg:grid-cols-5 gap-12">
          <div className="lg:col-span-1">
            <Link href="/" className="flex items-center gap-2 mb-6">
              <Shield className="w-8 h-8 text-primary" />
              <span className="font-display font-bold text-xl text-white">T-SPAN</span>
            </Link>
            <p className="text-slate-400 text-sm mb-6 leading-relaxed">
              India's premier cybersecurity university, delivering sovereign security education 
              through live infrastructure training and TCPWave-powered labs.
            </p>
            <div className="flex gap-4">
              <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer" className="w-10 h-10 rounded-lg bg-slate-900 border border-slate-800 flex items-center justify-center hover:border-primary/50 hover:bg-primary/10 transition-all">
                <Linkedin className="w-5 h-5 text-slate-400 hover:text-primary" />
              </a>
              <a href="https://twitter.com" target="_blank" rel="noopener noreferrer" className="w-10 h-10 rounded-lg bg-slate-900 border border-slate-800 flex items-center justify-center hover:border-primary/50 hover:bg-primary/10 transition-all">
                <Twitter className="w-5 h-5 text-slate-400 hover:text-primary" />
              </a>
              <a href="https://youtube.com" target="_blank" rel="noopener noreferrer" className="w-10 h-10 rounded-lg bg-slate-900 border border-slate-800 flex items-center justify-center hover:border-primary/50 hover:bg-primary/10 transition-all">
                <Youtube className="w-5 h-5 text-slate-400 hover:text-primary" />
              </a>
              <a href="https://github.com" target="_blank" rel="noopener noreferrer" className="w-10 h-10 rounded-lg bg-slate-900 border border-slate-800 flex items-center justify-center hover:border-primary/50 hover:bg-primary/10 transition-all">
                <Github className="w-5 h-5 text-slate-400 hover:text-primary" />
              </a>
            </div>
          </div>

          <div>
            <h4 className="font-display font-bold text-white mb-6">Programs</h4>
            <ul className="space-y-3">
              {footerLinks.programs.map((link, i) => (
                <li key={i}>
                  <Link href={link.href} className="text-slate-400 hover:text-primary transition-colors text-sm">
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h4 className="font-display font-bold text-white mb-6">TCPWave</h4>
            <ul className="space-y-3">
              {footerLinks.tcpwave.map((link, i) => (
                <li key={i}>
                  <Link href={link.href} className="text-slate-400 hover:text-primary transition-colors text-sm">
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h4 className="font-display font-bold text-white mb-6">Resources</h4>
            <ul className="space-y-3">
              {footerLinks.resources.map((link, i) => (
                <li key={i}>
                  <Link href={link.href} className="text-slate-400 hover:text-primary transition-colors text-sm">
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h4 className="font-display font-bold text-white mb-6">Company</h4>
            <ul className="space-y-3">
              {footerLinks.company.map((link, i) => (
                <li key={i}>
                  <Link href={link.href} className="text-slate-400 hover:text-primary transition-colors text-sm">
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
            <div className="mt-8 space-y-3">
              <div className="flex items-center gap-3 text-sm text-slate-400">
                <Mail className="w-4 h-4 text-primary" />
                <span>admissions@tspan.edu</span>
              </div>
              <div className="flex items-center gap-3 text-sm text-slate-400">
                <Phone className="w-4 h-4 text-primary" />
                <span>+91 40 2345 6789</span>
              </div>
              <div className="flex items-center gap-3 text-sm text-slate-400">
                <MapPin className="w-4 h-4 text-primary" />
                <span>Hyderabad, Telangana</span>
              </div>
            </div>
          </div>
        </div>

        <div className="border-t border-slate-900 mt-12 pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center gap-4">
            <p className="text-slate-600 text-sm">
              © 2025 T-SPAN University. All rights reserved. Made in India 🇮🇳
            </p>
            <div className="flex gap-6">
              <Link href="/privacy-policy" className="text-slate-500 hover:text-primary text-sm transition-colors">
                Privacy Policy
              </Link>
              <Link href="/terms-of-service" className="text-slate-500 hover:text-primary text-sm transition-colors">
                Terms of Service
              </Link>
              <Link href="/cookie-policy" className="text-slate-500 hover:text-primary text-sm transition-colors">
                Cookie Policy
              </Link>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
