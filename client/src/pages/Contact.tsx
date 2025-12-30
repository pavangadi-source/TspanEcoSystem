import { useState } from "react";
import { motion } from "framer-motion";
import Navbar from "@/components/Navbar";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Label } from "@/components/ui/label";
import { useToast } from "@/hooks/use-toast";
import {
  Shield,
  MapPin,
  Mail,
  Phone,
  Clock,
  Send,
  Linkedin,
  Twitter,
  Globe,
  Building,
  MessageSquare,
} from "lucide-react";

const contactInfo = [
  {
    icon: <MapPin className="w-6 h-6" />,
    title: "Headquarters",
    details: ["TCPWave Inc.", "600 Alexander Road", "Princeton, NJ 08540", "USA"],
    color: "text-primary",
  },
  {
    icon: <Mail className="w-6 h-6" />,
    title: "Email",
    details: ["support@tcpwave.com", "sales@tcpwave.com"],
    color: "text-secondary",
  },
  {
    icon: <Phone className="w-6 h-6" />,
    title: "Phone",
    details: ["+1 888-831-8276", "+1 937-768-9831", "+1 908-705-1389"],
    color: "text-purple-400",
  },
  {
    icon: <Clock className="w-6 h-6" />,
    title: "Office Hours",
    details: ["Monday - Friday", "9:00 AM - 6:00 PM EST", "Saturday: 10AM - 2PM (Appointments)"],
    color: "text-blue-400",
  },
];

const socialLinks = [
  { icon: <Linkedin className="w-5 h-5" />, name: "LinkedIn", url: "#", color: "hover:text-blue-400" },
  { icon: <Twitter className="w-5 h-5" />, name: "Twitter", url: "#", color: "hover:text-sky-400" },
  { icon: <Globe className="w-5 h-5" />, name: "Website", url: "#", color: "hover:text-primary" },
];

const offices = [
  {
    city: "Princeton",
    country: "USA",
    type: "Global HQ",
    flag: "🇺🇸",
  },
  {
    city: "Bangalore",
    country: "India",
    type: "Asia Pacific",
    flag: "🇮🇳",
  },
  {
    city: "London",
    country: "UK",
    type: "EMEA",
    flag: "🇬🇧",
  },
  {
    city: "Singapore",
    country: "Singapore",
    type: "SEA Hub",
    flag: "🇸🇬",
  },
];

export default function Contact() {
  const { toast } = useToast();
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    subject: "",
    message: "",
  });
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    
    if (!formData.name || !formData.email || !formData.message) {
      toast({
        title: "Missing Fields",
        description: "Please fill in all required fields.",
        variant: "destructive",
      });
      return;
    }

    setIsSubmitting(true);
    
    await new Promise((resolve) => setTimeout(resolve, 1000));
    
    toast({
      title: "Message Sent",
      description: "Thank you for contacting us. We'll respond within 24-48 hours.",
    });
    
    setFormData({ name: "", email: "", subject: "", message: "" });
    setIsSubmitting(false);
  };

  const updateField = (field: keyof typeof formData, value: string) => {
    setFormData((prev) => ({ ...prev, [field]: value }));
  };

  return (
    <div className="min-h-screen bg-slate-950 text-white overflow-x-hidden font-sans">
      <Navbar />
      
      {/* Hero Section */}
      <section className="pt-32 pb-16 relative overflow-hidden">
        <div className="absolute inset-0 bg-[linear-gradient(rgba(6,182,212,0.03)_1px,transparent_1px),linear-gradient(90deg,rgba(6,182,212,0.03)_1px,transparent_1px)] bg-[size:50px_50px]" />
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-secondary/5 rounded-full blur-[150px]" />
        
        <div className="container mx-auto px-4 relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-center max-w-3xl mx-auto"
          >
            <div className="flex items-center justify-center gap-2 mb-4">
              <MessageSquare className="w-5 h-5 text-primary animate-pulse" />
              <span className="text-primary font-mono text-xs uppercase tracking-[0.3em]" data-testid="text-contact-badge">
                Get In Touch
              </span>
            </div>
            <h1 className="text-4xl md:text-6xl font-display font-bold mb-6" data-testid="text-contact-title">
              Contact <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary to-secondary">Us</span>
            </h1>
            <p className="text-slate-400 text-lg md:text-xl max-w-2xl mx-auto" data-testid="text-contact-description">
              Have questions about our programs? Ready to start your cybersecurity journey? Our admissions team is here to help.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Main Content */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="grid lg:grid-cols-2 gap-12">
            
            {/* Contact Form */}
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: 0.2 }}
            >
              <div className="p-8 rounded-2xl bg-slate-900/60 border border-slate-800" data-testid="section-contact-form">
                <div className="flex items-center gap-3 mb-6">
                  <div className="p-2 bg-primary/20 rounded-lg">
                    <Send className="w-5 h-5 text-primary" />
                  </div>
                  <h2 className="text-2xl font-display font-bold text-white">Send a Message</h2>
                </div>
                
                <form onSubmit={handleSubmit} className="space-y-6">
                  <div className="grid sm:grid-cols-2 gap-4">
                    <div className="space-y-2">
                      <Label htmlFor="name" className="text-slate-300">Full Name *</Label>
                      <Input
                        id="name"
                        data-testid="input-name"
                        value={formData.name}
                        onChange={(e) => updateField("name", e.target.value)}
                        placeholder="Your name"
                        className="bg-slate-950 border-slate-700 text-white focus:border-primary"
                        required
                      />
                    </div>
                    <div className="space-y-2">
                      <Label htmlFor="email" className="text-slate-300">Email Address *</Label>
                      <Input
                        id="email"
                        data-testid="input-email"
                        type="email"
                        value={formData.email}
                        onChange={(e) => updateField("email", e.target.value)}
                        placeholder="your@email.com"
                        className="bg-slate-950 border-slate-700 text-white focus:border-primary"
                        required
                      />
                    </div>
                  </div>
                  
                  <div className="space-y-2">
                    <Label htmlFor="subject" className="text-slate-300">Subject</Label>
                    <Input
                      id="subject"
                      data-testid="input-subject"
                      value={formData.subject}
                      onChange={(e) => updateField("subject", e.target.value)}
                      placeholder="How can we help?"
                      className="bg-slate-950 border-slate-700 text-white focus:border-primary"
                    />
                  </div>
                  
                  <div className="space-y-2">
                    <Label htmlFor="message" className="text-slate-300">Message *</Label>
                    <Textarea
                      id="message"
                      data-testid="input-message"
                      value={formData.message}
                      onChange={(e) => updateField("message", e.target.value)}
                      placeholder="Tell us about your inquiry..."
                      rows={6}
                      className="bg-slate-950 border-slate-700 text-white focus:border-primary resize-none"
                      required
                    />
                  </div>
                  
                  <Button
                    type="submit"
                    disabled={isSubmitting}
                    className="w-full bg-primary hover:bg-primary/90 text-white font-bold shadow-[0_0_20px_rgba(6,182,212,0.3)] hover:shadow-[0_0_30px_rgba(6,182,212,0.5)] transition-all"
                    data-testid="button-submit"
                  >
                    {isSubmitting ? (
                      <>Sending...</>
                    ) : (
                      <>
                        Send Message <Send className="ml-2 w-4 h-4" />
                      </>
                    )}
                  </Button>
                </form>
              </div>
            </motion.div>

            {/* Contact Information */}
            <motion.div
              initial={{ opacity: 0, x: 30 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: 0.3 }}
              className="space-y-6"
            >
              <div className="grid sm:grid-cols-2 gap-4" data-testid="section-contact-info">
                {contactInfo.map((info, index) => (
                  <motion.div
                    key={info.title}
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.4 + index * 0.1 }}
                    className="p-5 rounded-xl bg-slate-900/60 border border-slate-800 hover:border-primary/30 transition-all"
                    data-testid={`card-contact-${index}`}
                  >
                    <div className={`${info.color} mb-3`}>{info.icon}</div>
                    <h3 className="text-lg font-display font-bold text-white mb-2">{info.title}</h3>
                    {info.details.map((detail, i) => (
                      <p key={i} className="text-slate-400 text-sm">{detail}</p>
                    ))}
                  </motion.div>
                ))}
              </div>

              {/* Social Links */}
              <div className="p-6 rounded-xl bg-slate-900/60 border border-slate-800" data-testid="section-social-links">
                <h3 className="text-lg font-display font-bold text-white mb-4">Connect With Us</h3>
                <div className="flex gap-4">
                  {socialLinks.map((social) => (
                    <a
                      key={social.name}
                      href={social.url}
                      className={`p-3 rounded-lg bg-slate-800 text-slate-400 ${social.color} transition-colors`}
                      data-testid={`link-social-${social.name.toLowerCase()}`}
                    >
                      {social.icon}
                    </a>
                  ))}
                </div>
              </div>

              {/* Map Placeholder */}
              <div className="rounded-xl overflow-hidden border border-slate-800" data-testid="section-map">
                <div className="relative h-64 bg-gradient-to-br from-slate-900 to-slate-950 flex items-center justify-center">
                  <div className="absolute inset-0 bg-[linear-gradient(rgba(6,182,212,0.05)_1px,transparent_1px),linear-gradient(90deg,rgba(6,182,212,0.05)_1px,transparent_1px)] bg-[size:30px_30px]" />
                  <div className="text-center z-10">
                    <MapPin className="w-12 h-12 text-primary mx-auto mb-3 animate-bounce" />
                    <p className="text-white font-display font-bold">Princeton, NJ</p>
                    <p className="text-slate-400 text-sm">600 Alexander Road</p>
                  </div>
                  
                  {/* Decorative dots for global presence */}
                  <div className="absolute top-4 left-4 w-2 h-2 bg-primary rounded-full animate-ping" />
                  <div className="absolute top-1/3 right-8 w-2 h-2 bg-secondary rounded-full animate-ping" style={{ animationDelay: "0.5s" }} />
                  <div className="absolute bottom-8 left-1/4 w-2 h-2 bg-purple-500 rounded-full animate-ping" style={{ animationDelay: "1s" }} />
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Global Offices */}
      <section className="py-16 bg-slate-900/50">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-12"
          >
            <div className="flex items-center justify-center gap-2 mb-4">
              <Building className="w-5 h-5 text-secondary" />
              <span className="text-secondary font-mono text-xs uppercase tracking-[0.2em]">Global Presence</span>
            </div>
            <h2 className="text-3xl md:text-4xl font-display font-bold mb-4" data-testid="text-offices-title">
              Our <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary to-secondary">Offices</span>
            </h2>
          </motion.div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6" data-testid="section-offices">
            {offices.map((office, index) => (
              <motion.div
                key={office.city}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className="p-6 rounded-xl bg-slate-900 border border-slate-800 hover:border-primary/50 transition-all text-center group"
                data-testid={`card-office-${index}`}
              >
                <span className="text-4xl mb-3 block group-hover:scale-125 transition-transform">{office.flag}</span>
                <h3 className="text-lg font-display font-bold text-white">{office.city}</h3>
                <p className="text-slate-400 text-sm">{office.country}</p>
                <span className="inline-block mt-2 px-3 py-1 bg-primary/10 text-primary text-xs font-mono rounded-full">
                  {office.type}
                </span>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-12 bg-slate-950 border-t border-slate-900">
        <div className="container mx-auto px-4 text-center">
          <div className="flex items-center justify-center gap-2 mb-6">
            <Shield className="w-8 h-8 text-primary" />
            <span className="font-display font-bold text-xl text-white">T-SPAN UNIVERSITY</span>
          </div>
          <p className="text-slate-600 text-sm">
            © 2025 T-SPAN University. All rights reserved.
          </p>
        </div>
      </footer>
    </div>
  );
}
