import { motion } from "framer-motion";
import { Linkedin, Twitter, Mail, Award, GraduationCap, Building2, Shield, Globe, Users, Star } from "lucide-react";
import PageLayout from "@/components/PageLayout";

const governmentPatrons = [
  {
    name: "Sri Anumula Revanth Reddy",
    title: "Hon'ble Chief Minister of Telangana",
    image: "https://upload.wikimedia.org/wikipedia/commons/thumb/4/4e/Revanth_Reddy_in_2021.jpg/440px-Revanth_Reddy_in_2021.jpg",
    bio: "Sworn in as the 2nd Chief Minister of Telangana on December 7, 2023. Known as 'The Lion of Telangana' for his strong leadership in transforming the state into a global technology hub. Architect of Telangana's digital sovereignty vision and champion of cybersecurity infrastructure development.",
    credentials: ["Chief Minister since 2023", "TPCC President", "Former MP Malkajgiri"],
    highlight: "Visionary leader driving Telangana's transformation into India's cybersecurity capital"
  },
  {
    name: "Sri D. Sridhar Babu",
    title: "Hon'ble Minister for IT, Industries & Commerce",
    image: "https://pbs.twimg.com/profile_images/1733453889698787328/U7PxuNvN_400x400.jpg",
    bio: "5-term MLA from Manthani. LLB from Delhi University, M.A. Political Science from Hyderabad Central University. Former Minister for Higher Education in United Andhra Pradesh. Key architect of Telangana's AI-first strategy and mission to make Hyderabad the AI capital of the world.",
    credentials: ["IT & Industries Minister", "5-term MLA", "Former AICC Secretary"],
    highlight: "Leading Telangana's technology transformation and startup ecosystem"
  },
  {
    name: "Sri Jayesh Ranjan, IAS",
    title: "Special Chief Secretary, IT & Industries",
    image: "https://it.telangana.gov.in/wp-content/uploads/2021/10/Jayesh-Ranjan.jpeg",
    bio: "1992 IAS batch topper with Master's from IIM Calcutta and Lee Kuan Yew School of Public Policy. Awarded Royal Order of the Polar Star by King of Sweden. Honorary Doctorate from University of Bolton. Transformed Telangana into India's leading IT destination with strategic policy frameworks.",
    credentials: ["IAS 1992 Batch Topper", "Royal Order of Polar Star", "World Economic Forum Contributor"],
    highlight: "Architect of Telangana's IT policy and investment attraction strategy"
  },
];

const universityLeadership = [
  {
    name: "Pavan Gadi",
    title: "Founder & Chancellor, T-SPAN University",
    image: "https://api.dicebear.com/7.x/initials/svg?seed=PG&backgroundColor=0f172a&textColor=06b6d4&fontSize=42",
    bio: "Visionary entrepreneur and cybersecurity expert. Founded T-SPAN University to bridge India's cybersecurity skills gap with world-class education on live infrastructure. Pioneer of the 'Made in India, Serving the World' philosophy for indigenous cybersecurity technology.",
    credentials: ["T-SPAN Founder", "Cybersecurity Visionary", "Indigenous Technology Advocate"],
    linkedin: "#"
  },
  {
    name: "Sri Addanki Dayakar",
    title: "Patron & Strategic Advisor",
    image: "https://api.dicebear.com/7.x/initials/svg?seed=AD&backgroundColor=0f172a&textColor=fbbf24&fontSize=42",
    bio: "MCA from Osmania University, pursuing PhD. Member of Telangana Legislative Council and TPCC General Secretary. Strong advocate for technology-driven governance and digital empowerment. Key supporter of cybersecurity education initiatives aligned with Telangana's vision.",
    credentials: ["MLC Telangana", "MCA Osmania University", "TPCC General Secretary"],
    linkedin: "#"
  },
];

const executiveTeam = [
  {
    name: "Dr. Ravin Kumar Jhaala",
    title: "Director & Chief Technology Architect",
    image: "https://api.dicebear.com/7.x/initials/svg?seed=RKJ&backgroundColor=0f172a&textColor=06b6d4&fontSize=36",
    bio: "20+ years building enterprise DDI solutions. Founded TCPWave, serving 1000+ billion DNS queries across 102 countries. Architect of India's first sovereign DNS security framework and pioneer of indigenous cybersecurity infrastructure.",
    credentials: ["TCPWave Founder", "102 Countries Served", "1000+ Billion DNS Queries"],
    linkedin: "#"
  },
  {
    name: "Dr. Somitra Sanadhya",
    title: "Academic Director - Cryptography",
    image: "https://api.dicebear.com/7.x/initials/svg?seed=SS&backgroundColor=0f172a&textColor=a855f7&fontSize=36",
    bio: "Professor at IIT Kanpur with 29,000+ citations. Leading researcher in applied cryptography and protocol security. Contributed to multiple national security protocols and blockchain security frameworks.",
    credentials: ["IIT Kanpur Professor", "29,000+ Citations", "Protocol Security Expert"],
    linkedin: "#"
  },
  {
    name: "Col. Vikram Singh (Retd.)",
    title: "Head of Military Cyber Programs",
    image: "https://api.dicebear.com/7.x/initials/svg?seed=VS&backgroundColor=0f172a&textColor=f97316&fontSize=36",
    bio: "Former Head of Indian Army Cyber Command. 25 years in military cyber operations. Led response to multiple nation-state attacks on defense networks. Specialist in offensive security and critical infrastructure protection.",
    credentials: ["Army Cyber Command", "25 Years Experience", "Nation-State Defense"],
    linkedin: "#"
  },
  {
    name: "Ken Huang",
    title: "Global Security Advisor",
    image: "https://api.dicebear.com/7.x/initials/svg?seed=KH&backgroundColor=0f172a&textColor=3b82f6&fontSize=36",
    bio: "Visiting faculty from University of San Francisco. Former Director at NIST. MIT Media Lab alumnus with 132 patents and $500K Lemelson Prize. Expert in international cybersecurity frameworks and compliance standards.",
    credentials: ["MIT Media Lab", "132 Patents", "Former NIST Director"],
    linkedin: "#"
  },
];

const advisoryBoard = [
  { name: "Dr. Sarah Chen", role: "Academic Advisor", org: "MIT Media Lab" },
  { name: "Raghunath Iyer", role: "Industry Advisor", org: "Former Cisco CISO" },
  { name: "Dr. Klaus Weber", role: "International Advisor", org: "NATO CCDCOE" },
  { name: "Pradeep Sharma", role: "Government Liaison", org: "Former MeitY Secretary" },
  { name: "Dr. Emily Watson", role: "Research Advisor", org: "Stanford CISA" },
  { name: "Ravi Shankar Prasad", role: "Policy Advisor", org: "Former IT Minister, GoI" },
];

export default function Leadership() {
  return (
    <PageLayout
      title="Leadership Team"
      subtitle="Government patrons, visionary founders, and world-class practitioners shaping T-SPAN University"
      badge="Our Leaders"
      breadcrumbs={[{ label: "About", href: "/about" }, { label: "Leadership" }]}
    >
      <section className="py-20 bg-gradient-to-b from-slate-900/80 to-slate-950">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <div className="flex items-center justify-center gap-2 mb-4">
              <Star className="w-5 h-5 text-secondary" />
              <span className="text-secondary font-mono text-sm uppercase tracking-widest">Government Patronage</span>
              <Star className="w-5 h-5 text-secondary" />
            </div>
            <h2 className="text-3xl md:text-4xl font-display font-bold text-white mb-4">
              Telangana <span className="text-secondary">Government</span> Leadership
            </h2>
            <p className="text-slate-400 max-w-3xl mx-auto">
              T-SPAN University operates under the visionary patronage of Telangana's leadership, 
              positioning the state as India's cybersecurity capital and the global nerve center for digital security
            </p>
          </motion.div>

          <div className="grid lg:grid-cols-3 gap-8">
            {governmentPatrons.map((patron, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1 }}
                className="bg-gradient-to-b from-slate-900 to-slate-950 border border-secondary/30 rounded-2xl overflow-hidden hover:border-secondary/60 transition-all group"
              >
                <div className="relative">
                  <div className="h-64 overflow-hidden">
                    <img 
                      src={patron.image} 
                      alt={patron.name}
                      className="w-full h-full object-cover object-top group-hover:scale-105 transition-transform duration-500"
                      onError={(e) => {
                        const target = e.target as HTMLImageElement;
                        target.src = `https://api.dicebear.com/7.x/initials/svg?seed=${patron.name.split(' ').map(n => n[0]).join('')}&backgroundColor=0f172a&textColor=fbbf24&fontSize=42`;
                      }}
                    />
                  </div>
                  <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-slate-950 via-slate-950/80 to-transparent p-6 pt-16">
                    <h3 className="text-xl font-display font-bold text-white mb-1">{patron.name}</h3>
                    <p className="text-secondary font-mono text-sm">{patron.title}</p>
                  </div>
                </div>
                <div className="p-6">
                  <p className="text-slate-400 text-sm mb-4 leading-relaxed">{patron.bio}</p>
                  <div className="flex flex-wrap gap-2 mb-4">
                    {patron.credentials.map((cred, j) => (
                      <span key={j} className="px-2 py-1 bg-secondary/10 text-secondary border border-secondary/20 text-xs rounded-full">
                        {cred}
                      </span>
                    ))}
                  </div>
                  <p className="text-xs text-slate-500 italic border-t border-slate-800 pt-4">
                    {patron.highlight}
                  </p>
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
            className="text-center mb-16"
          >
            <h2 className="text-3xl md:text-4xl font-display font-bold text-white mb-4">
              University <span className="text-primary">Founding</span> Leadership
            </h2>
            <p className="text-slate-400 max-w-2xl mx-auto">
              Visionary founders building India's premier cybersecurity education institution
            </p>
          </motion.div>

          <div className="grid md:grid-cols-2 gap-8 max-w-4xl mx-auto">
            {universityLeadership.map((leader, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1 }}
                className="bg-slate-950/80 border border-primary/30 rounded-2xl overflow-hidden hover:border-primary/60 transition-all group"
              >
                <div className="flex flex-col md:flex-row">
                  <div className="md:w-40 h-40 md:h-auto flex-shrink-0 bg-slate-900 flex items-center justify-center">
                    <img 
                      src={leader.image} 
                      alt={leader.name}
                      className="w-32 h-32 rounded-full object-cover group-hover:scale-105 transition-transform duration-500"
                    />
                  </div>
                  <div className="p-6 flex-1">
                    <h3 className="text-xl font-display font-bold text-white mb-1">{leader.name}</h3>
                    <p className="text-primary font-mono text-sm mb-4">{leader.title}</p>
                    <p className="text-slate-400 text-sm mb-4 leading-relaxed">{leader.bio}</p>
                    <div className="flex flex-wrap gap-2">
                      {leader.credentials.map((cred, j) => (
                        <span key={j} className="px-2 py-1 bg-slate-800 text-slate-300 text-xs rounded-full">
                          {cred}
                        </span>
                      ))}
                    </div>
                  </div>
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
            className="text-center mb-16"
          >
            <h2 className="text-3xl md:text-4xl font-display font-bold text-white mb-4">
              Executive <span className="text-primary">Team</span>
            </h2>
            <p className="text-slate-400 max-w-2xl mx-auto">
              World-class practitioners from IIT, MIT, NIST, and military cyber commands
            </p>
          </motion.div>

          <div className="grid md:grid-cols-2 gap-8">
            {executiveTeam.map((leader, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1 }}
                className="bg-slate-950/80 border border-slate-800 rounded-2xl overflow-hidden hover:border-primary/50 transition-all group"
              >
                <div className="flex flex-col md:flex-row">
                  <div className="md:w-40 h-40 md:h-auto flex-shrink-0 bg-slate-900 flex items-center justify-center">
                    <img 
                      src={leader.image} 
                      alt={leader.name}
                      className="w-28 h-28 rounded-full object-cover"
                    />
                  </div>
                  <div className="p-6 flex-1">
                    <h3 className="text-xl font-display font-bold text-white mb-1">{leader.name}</h3>
                    <p className="text-primary font-mono text-sm mb-4">{leader.title}</p>
                    <p className="text-slate-400 text-sm mb-4 leading-relaxed">{leader.bio}</p>
                    <div className="flex flex-wrap gap-2 mb-4">
                      {leader.credentials.map((cred, j) => (
                        <span key={j} className="px-2 py-1 bg-slate-800 text-slate-300 text-xs rounded-full">
                          {cred}
                        </span>
                      ))}
                    </div>
                    <a 
                      href={leader.linkedin}
                      className="inline-flex items-center gap-2 text-slate-500 hover:text-primary transition-colors text-sm"
                    >
                      <Linkedin className="w-4 h-4" />
                      Connect on LinkedIn
                    </a>
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
            className="text-center mb-16"
          >
            <h2 className="text-3xl md:text-4xl font-display font-bold text-white mb-4">
              Advisory <span className="text-secondary">Board</span>
            </h2>
            <p className="text-slate-400 max-w-2xl mx-auto">
              Distinguished leaders from government, military, and global technology organizations
            </p>
          </motion.div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {advisoryBoard.map((advisor, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.05 }}
                className="bg-slate-900/50 border border-slate-800 rounded-xl p-6 hover:border-primary/30 transition-all"
              >
                <h4 className="text-lg font-display font-bold text-white mb-1">{advisor.name}</h4>
                <p className="text-primary text-sm mb-2">{advisor.role}</p>
                <p className="text-slate-500 text-sm">{advisor.org}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-20 bg-gradient-to-r from-primary/10 to-secondary/10 border-y border-slate-800">
        <div className="container mx-auto px-4 text-center">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            <h2 className="text-3xl font-display font-bold text-white mb-6">
              Join Our Leadership Network
            </h2>
            <p className="text-slate-400 max-w-2xl mx-auto mb-8">
              We're always looking for exceptional leaders to join our advisory board and help shape 
              the future of cybersecurity education in India and beyond.
            </p>
            <a 
              href="/contact" 
              className="inline-flex items-center gap-2 px-6 py-3 bg-primary text-slate-950 font-bold rounded-lg hover:bg-primary/90 transition-colors"
            >
              <Mail className="w-5 h-5" />
              Get In Touch
            </a>
          </motion.div>
        </div>
      </section>
    </PageLayout>
  );
}
