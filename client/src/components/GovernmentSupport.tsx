import { motion } from "framer-motion";
import { Shield, Award, Building2 } from "lucide-react";

import revanthReddyImg from "@assets/image_1767012905772.png";
import scindiaImg from "@assets/image_1767013075273.png";
import vaishnawImg from "@assets/image_1767013153604.png";
import dayakarImg from "@assets/image_1767013211033.png";
import jayeshRanjanImg from "@assets/image_1767013402491.png";

const supporters = [
  {
    name: "Sri A. Revanth Reddy",
    title: "Hon'ble Chief Minister",
    organization: "Government of Telangana",
    image: revanthReddyImg,
    badge: "State Patron",
  },
  {
    name: "Shri Jyotiraditya M. Scindia",
    title: "Union Cabinet Minister",
    organization: "Civil Aviation & Steel",
    image: scindiaImg,
    badge: "Central Support",
  },
  {
    name: "Shri Ashwini Vaishnaw",
    title: "Union Cabinet Minister",
    organization: "Electronics & IT, Railways",
    image: vaishnawImg,
    badge: "IT Ministry",
  },
  {
    name: "Sri Addanki Dayakar",
    title: "MLC & TPCC General Secretary",
    organization: "Government of Telangana",
    image: dayakarImg,
    badge: "State Support",
  },
  {
    name: "Shri Jayesh Ranjan, IAS",
    title: "CEO, Industry & Investment Cell",
    organization: "Chief Minister's Office, Telangana",
    image: jayeshRanjanImg,
    badge: "Industry Leader",
  },
];

export default function GovernmentSupport() {
  return (
    <section className="py-20 bg-gradient-to-b from-slate-900 to-slate-950 relative overflow-hidden">
      <div className="absolute inset-0 bg-[linear-gradient(rgba(6,182,212,0.03)_1px,transparent_1px),linear-gradient(90deg,rgba(6,182,212,0.03)_1px,transparent_1px)] bg-[size:50px_50px]" />
      
      <div className="absolute top-20 left-10 w-64 h-64 bg-orange-500/10 rounded-full blur-[100px]" />
      <div className="absolute bottom-20 right-10 w-64 h-64 bg-green-500/10 rounded-full blur-[100px]" />
      
      <div className="container mx-auto px-4 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <div className="flex items-center justify-center gap-3 mb-4">
            <div className="w-12 h-12 bg-gradient-to-br from-orange-500 to-green-500 rounded-xl flex items-center justify-center">
              <Building2 className="w-6 h-6 text-white" />
            </div>
          </div>
          <h2 className="text-3xl md:text-4xl font-display font-bold text-white mb-4">
            Supported by <span className="text-transparent bg-clip-text bg-gradient-to-r from-orange-400 via-white to-green-400">Government of India</span>
          </h2>
          <p className="text-2xl md:text-3xl font-display italic text-white/90 mb-4">
            "Telangana must become the nerve center of cybersecurity for the world"
          </p>
          <p className="text-slate-400 max-w-3xl mx-auto text-lg">
            T-SPAN University operates with the vision and support of India's highest offices, 
            championing digital sovereignty and cybersecurity education as a national priority.
          </p>
          <div className="flex items-center justify-center gap-4 mt-6">
            <div className="flex items-center gap-2 px-4 py-2 bg-orange-500/10 border border-orange-500/30 rounded-full">
              <div className="w-3 h-3 bg-orange-500 rounded-full animate-pulse" />
              <span className="text-orange-400 text-sm font-medium">Digital India Initiative</span>
            </div>
            <div className="flex items-center gap-2 px-4 py-2 bg-green-500/10 border border-green-500/30 rounded-full">
              <div className="w-3 h-3 bg-green-500 rounded-full animate-pulse" />
              <span className="text-green-400 text-sm font-medium">Skill India Mission</span>
            </div>
          </div>
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-5 gap-5">
          {supporters.map((person, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1 }}
              className="group relative"
            >
              <div className="bg-gradient-to-b from-slate-800/80 to-slate-900/80 border border-slate-700/50 rounded-2xl overflow-hidden backdrop-blur-sm hover:border-primary/50 transition-all duration-300 hover:shadow-[0_0_40px_rgba(6,182,212,0.15)]">
                <div className="relative">
                  <div className="absolute top-3 right-3 z-10">
                    <span className="px-3 py-1 bg-gradient-to-r from-orange-500 to-green-500 text-white text-xs font-bold rounded-full shadow-lg">
                      {person.badge}
                    </span>
                  </div>
                  <div className="aspect-square overflow-hidden bg-gradient-to-br from-slate-800 to-slate-900">
                    <img
                      src={person.image}
                      alt={person.name}
                      className="w-full h-full object-cover object-top group-hover:scale-105 transition-transform duration-500"
                    />
                  </div>
                  <div className="absolute bottom-0 left-0 right-0 h-24 bg-gradient-to-t from-slate-900 to-transparent" />
                </div>
                
                <div className="p-5 -mt-8 relative z-10">
                  <h3 className="text-lg font-display font-bold text-white mb-1">
                    {person.name}
                  </h3>
                  <p className="text-primary text-sm font-medium mb-1">
                    {person.title}
                  </p>
                  <p className="text-slate-500 text-xs">
                    {person.organization}
                  </p>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mt-12 text-center"
        >
          <div className="inline-flex items-center gap-3 px-6 py-3 bg-slate-900/80 border border-slate-700 rounded-full">
            <Shield className="w-5 h-5 text-primary" />
            <span className="text-slate-300 text-sm">
              Building India's Cyber Defense Workforce through Public-Private Partnership
            </span>
            <Award className="w-5 h-5 text-secondary" />
          </div>
        </motion.div>
      </div>
    </section>
  );
}
