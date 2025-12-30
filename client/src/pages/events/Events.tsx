import { motion } from "framer-motion";
import { Calendar, Video, Users, Trophy, ArrowRight } from "lucide-react";
import { Link } from "wouter";
import PageLayout from "@/components/PageLayout";

const eventTypes = [
  {
    icon: Video,
    title: "Webinars",
    description: "Free online sessions on trending cybersecurity topics, tools, and career guidance.",
    href: "/events/webinars",
    frequency: "Weekly"
  },
  {
    icon: Users,
    title: "Conferences",
    description: "Annual T-SPAN Cybersecurity Summit and regional conferences across India.",
    href: "/events/conferences",
    frequency: "Annual"
  },
  {
    icon: Trophy,
    title: "Hackathons",
    description: "48-hour coding challenges to solve real cybersecurity problems.",
    href: "/events/hackathons",
    frequency: "Quarterly"
  },
  {
    icon: Calendar,
    title: "CTF Competitions",
    description: "Capture the flag tournaments with prizes and career opportunities.",
    href: "/events/ctf-competitions",
    frequency: "Monthly"
  },
];

const upcomingEvents = [
  { title: "DNS Security Deep Dive", type: "Webinar", date: "Jan 15, 2025", time: "6:00 PM IST" },
  { title: "T-SPAN Winter CTF 2025", type: "CTF", date: "Jan 25-26, 2025", time: "48 Hours" },
  { title: "TCPWave Administrator Bootcamp", type: "Workshop", date: "Feb 1, 2025", time: "Full Day" },
  { title: "Cybersecurity Career Fair", type: "Conference", date: "Feb 15, 2025", time: "10:00 AM IST" },
];

export default function Events() {
  return (
    <PageLayout
      title="Events"
      subtitle="Webinars, conferences, hackathons, and CTF competitions"
      badge="T-SPAN Events"
      breadcrumbs={[{ label: "Events" }]}
    >
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-2 gap-8">
            {eventTypes.map((event, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1 }}
              >
                <Link href={event.href}>
                  <div className="bg-slate-900/50 border border-slate-800 rounded-2xl p-8 h-full hover:border-primary/50 transition-all cursor-pointer group">
                    <div className="flex items-center justify-between mb-6">
                      <event.icon className="w-12 h-12 text-primary group-hover:scale-110 transition-transform" />
                      <span className="px-3 py-1 bg-primary/10 text-primary text-sm rounded-full">{event.frequency}</span>
                    </div>
                    <h3 className="text-xl font-display font-bold text-white mb-3 group-hover:text-primary transition-colors">{event.title}</h3>
                    <p className="text-slate-400 mb-4">{event.description}</p>
                    <div className="flex items-center gap-2 text-primary text-sm font-medium">
                      View Events <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                    </div>
                  </div>
                </Link>
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
              Upcoming <span className="text-primary">Events</span>
            </h2>
          </motion.div>

          <div className="max-w-3xl mx-auto space-y-4">
            {upcomingEvents.map((event, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, x: -30 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1 }}
                className="bg-slate-950/80 border border-slate-800 rounded-xl p-6 hover:border-primary/30 transition-all flex items-center justify-between"
              >
                <div>
                  <h4 className="text-lg font-display font-bold text-white mb-1">{event.title}</h4>
                  <span className="text-primary text-sm">{event.type}</span>
                </div>
                <div className="text-right">
                  <div className="text-white font-medium">{event.date}</div>
                  <div className="text-slate-500 text-sm">{event.time}</div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>
    </PageLayout>
  );
}
