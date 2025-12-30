import { motion } from "framer-motion";
import { MapPin, Building2, Wifi, Coffee, Car, Shield, Monitor, Server, Users } from "lucide-react";
import PageLayout from "@/components/PageLayout";

const facilities = [
  {
    icon: Server,
    title: "TCPWave Command Center",
    description: "Live DDI infrastructure with production-grade TCPWave deployment serving real traffic. Students operate enterprise-scale DNS, DHCP, and IPAM systems.",
    highlight: "24/7 Live Operations"
  },
  {
    icon: Shield,
    title: "Security Operations Center",
    description: "Fully functional SOC with SIEM integration, threat feeds, and incident response workstations. Real-time monitoring of simulated and live threats.",
    highlight: "Enterprise-grade SOC"
  },
  {
    icon: Monitor,
    title: "Cyber Range",
    description: "Isolated attack/defense environment for red team/blue team exercises. Realistic scenarios simulating nation-state and APT attacks.",
    highlight: "Military-grade simulations"
  },
  {
    icon: Building2,
    title: "Research Labs",
    description: "Dedicated labs for DNS security research, malware analysis, and threat intelligence development. Equipped with sandboxing and forensics tools.",
    highlight: "Published research facility"
  },
];

const amenities = [
  { icon: Wifi, name: "High-Speed Connectivity", description: "Redundant 10Gbps fiber with dedicated security research VLAN" },
  { icon: Coffee, name: "24/7 Cafeteria", description: "Round-the-clock food service for late-night incident response training" },
  { icon: Car, name: "Secure Parking", description: "ANPR-enabled parking with 500+ covered spaces" },
  { icon: Users, name: "Collaboration Spaces", description: "Open work areas, meeting rooms, and video conferencing facilities" },
];

const virtualTour = [
  { title: "Main Building", image: "https://images.unsplash.com/photo-1497366216548-37526070297c?w=800&h=400&fit=crop" },
  { title: "SOC Floor", image: "https://images.unsplash.com/photo-1518432031352-d6fc5c10da5a?w=800&h=400&fit=crop" },
  { title: "Research Lab", image: "https://images.unsplash.com/photo-1573164713714-d95e436ab8d6?w=800&h=400&fit=crop" },
  { title: "Cyber Range", image: "https://images.unsplash.com/photo-1550751827-4bd374c3f58b?w=800&h=400&fit=crop" },
];

export default function Campus() {
  return (
    <PageLayout
      title="Campus & Facilities"
      subtitle="World-class infrastructure designed for mission-critical cybersecurity training"
      badge="HITEC City, Hyderabad"
      breadcrumbs={[{ label: "About", href: "/about" }, { label: "Campus" }]}
    >
      <section className="py-20 bg-slate-900/50">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="bg-gradient-to-r from-primary/10 to-secondary/10 border border-primary/30 rounded-2xl p-8 md:p-12 mb-16"
          >
            <div className="flex flex-col md:flex-row items-center gap-8">
              <div className="flex-shrink-0">
                <MapPin className="w-20 h-20 text-primary" />
              </div>
              <div className="flex-1">
                <h3 className="text-2xl font-display font-bold text-white mb-4">
                  Strategic Location
                </h3>
                <p className="text-slate-300 leading-relaxed mb-4">
                  Our 100,000 sq. ft. campus is located in HITEC City, Hyderabad's premier technology hub. 
                  We're surrounded by Fortune 500 tech companies, government cyber facilities, and India's 
                  most vibrant startup ecosystem.
                </p>
                <div className="flex flex-wrap gap-4">
                  <span className="px-4 py-2 bg-slate-800 text-slate-300 rounded-full text-sm">5 min from Cyber Towers</span>
                  <span className="px-4 py-2 bg-slate-800 text-slate-300 rounded-full text-sm">Near Telangana Cyber Police</span>
                  <span className="px-4 py-2 bg-slate-800 text-slate-300 rounded-full text-sm">Metro Connected</span>
                </div>
              </div>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-12"
          >
            <h2 className="text-3xl md:text-4xl font-display font-bold text-white mb-4">
              Training <span className="text-primary">Facilities</span>
            </h2>
          </motion.div>

          <div className="grid md:grid-cols-2 gap-8">
            {facilities.map((facility, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1 }}
                className="bg-slate-950/80 border border-slate-800 rounded-2xl p-8 hover:border-primary/50 transition-all group"
              >
                <div className="flex items-start gap-6">
                  <div className="w-16 h-16 rounded-xl bg-primary/10 border border-primary/30 flex items-center justify-center flex-shrink-0 group-hover:scale-110 transition-transform">
                    <facility.icon className="w-8 h-8 text-primary" />
                  </div>
                  <div>
                    <div className="flex items-center gap-3 mb-2">
                      <h3 className="text-xl font-display font-bold text-white">{facility.title}</h3>
                    </div>
                    <span className="inline-block px-2 py-1 bg-primary/20 text-primary text-xs rounded mb-3">
                      {facility.highlight}
                    </span>
                    <p className="text-slate-400">{facility.description}</p>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-20">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-12"
          >
            <h2 className="text-3xl md:text-4xl font-display font-bold text-white mb-4">
              Virtual <span className="text-secondary">Tour</span>
            </h2>
          </motion.div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-4">
            {virtualTour.map((area, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1 }}
                className="relative overflow-hidden rounded-xl group cursor-pointer"
              >
                <img 
                  src={area.image} 
                  alt={area.title}
                  className="w-full h-48 object-cover group-hover:scale-110 transition-transform duration-500"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-slate-950 via-transparent to-transparent" />
                <div className="absolute bottom-0 left-0 right-0 p-4">
                  <h4 className="text-white font-display font-bold">{area.title}</h4>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-20 bg-slate-900/50">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-12"
          >
            <h2 className="text-3xl md:text-4xl font-display font-bold text-white mb-4">
              Campus <span className="text-primary">Amenities</span>
            </h2>
          </motion.div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {amenities.map((amenity, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1 }}
                className="bg-slate-950/80 border border-slate-800 rounded-xl p-6 text-center hover:border-primary/30 transition-all"
              >
                <amenity.icon className="w-10 h-10 text-primary mx-auto mb-4" />
                <h4 className="text-white font-display font-bold mb-2">{amenity.name}</h4>
                <p className="text-slate-400 text-sm">{amenity.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>
    </PageLayout>
  );
}
