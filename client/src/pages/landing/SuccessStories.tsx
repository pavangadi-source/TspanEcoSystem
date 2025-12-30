import { motion } from "framer-motion";
import { Quote, Building2, TrendingUp, Award } from "lucide-react";
import PageLayout from "@/components/PageLayout";

const successStories = [
  {
    name: "Rahul Sharma",
    title: "Security Architect",
    company: "Microsoft India",
    image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=150&h=150&fit=crop",
    story: "T-SPAN's hands-on training on live DDI infrastructure was exactly what I needed. The TCPWave certification helped me land my dream role at Microsoft.",
    salary: "₹45 LPA",
    previousRole: "Network Engineer"
  },
  {
    name: "Priya Nair",
    title: "SOC Lead",
    company: "HDFC Bank",
    image: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=150&h=150&fit=crop",
    story: "The threat intelligence training at T-SPAN gave me practical skills that textbooks couldn't. I now lead a team of 15 analysts protecting India's largest private bank.",
    salary: "₹32 LPA",
    previousRole: "Junior Analyst"
  },
  {
    name: "Arjun Menon",
    title: "CISO",
    company: "Startup Unicorn",
    image: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=150&h=150&fit=crop",
    story: "The Executive MBA in Cybersecurity prepared me for leadership. Within 2 years of graduation, I became CISO of a billion-dollar startup.",
    salary: "₹85 LPA",
    previousRole: "Security Manager"
  },
  {
    name: "Sneha Reddy",
    title: "DNS Security Specialist",
    company: "Google Cloud",
    image: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=150&h=150&fit=crop",
    story: "T-SPAN's DNS security program is unmatched. The practical experience with TCPWave and DNSSEC made me stand out in Google's interview process.",
    salary: "₹55 LPA",
    previousRole: "Network Admin"
  },
];

const stats = [
  { value: "95%", label: "Placement Rate" },
  { value: "3x", label: "Average Salary Increase" },
  { value: "500+", label: "Hiring Partners" },
  { value: "30+", label: "Countries" },
];

export default function SuccessStories() {
  return (
    <PageLayout
      title="Success Stories"
      subtitle="Real stories from T-SPAN graduates transforming their careers"
      badge="Alumni Success"
      breadcrumbs={[{ label: "Success Stories" }]}
    >
      <section className="py-20 bg-slate-900/50">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-4 gap-6 mb-16">
            {stats.map((stat, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1 }}
                className="bg-slate-950/80 border border-slate-800 rounded-xl p-6 text-center"
              >
                <div className="text-3xl font-display font-bold text-primary mb-2">{stat.value}</div>
                <div className="text-slate-400 text-sm">{stat.label}</div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-2 gap-8">
            {successStories.map((story, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1 }}
                className="bg-slate-900/50 border border-slate-800 rounded-2xl p-8"
              >
                <div className="flex items-start gap-4 mb-6">
                  <img 
                    src={story.image} 
                    alt={story.name}
                    className="w-16 h-16 rounded-full object-cover border-2 border-primary"
                  />
                  <div>
                    <h3 className="text-xl font-display font-bold text-white">{story.name}</h3>
                    <p className="text-primary">{story.title}</p>
                    <p className="text-slate-500 text-sm">{story.company}</p>
                  </div>
                </div>
                
                <div className="mb-6">
                  <Quote className="w-8 h-8 text-primary/30 mb-2" />
                  <p className="text-slate-300 italic leading-relaxed">{story.story}</p>
                </div>
                
                <div className="flex items-center gap-6 pt-4 border-t border-slate-800">
                  <div>
                    <span className="text-slate-500 text-xs">Current Salary</span>
                    <div className="text-green-400 font-bold">{story.salary}</div>
                  </div>
                  <div>
                    <span className="text-slate-500 text-xs">Previous Role</span>
                    <div className="text-slate-400">{story.previousRole}</div>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>
    </PageLayout>
  );
}
