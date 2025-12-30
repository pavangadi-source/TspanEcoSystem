import { motion } from "framer-motion";
import { FileText, ArrowRight, Calendar, User } from "lucide-react";
import { Link } from "wouter";
import PageLayout from "@/components/PageLayout";

const categories = [
  { name: "DNS Security", href: "/blog/category/dns-security", count: 25 },
  { name: "Threat Intelligence", href: "/blog/category/threat-intelligence", count: 18 },
  { name: "TCPWave Tutorials", href: "/blog/category/tcpwave-tutorials", count: 30 },
  { name: "Career Advice", href: "/blog/category/career-advice", count: 15 },
  { name: "Industry News", href: "/blog/category/industry-news", count: 40 },
];

const featuredPosts = [
  {
    title: "Understanding DNS-Based Data Exfiltration: Detection and Prevention",
    excerpt: "A comprehensive guide to detecting and preventing DNS tunneling attacks in enterprise environments.",
    author: "Dr. Priya Venkatesh",
    date: "Dec 20, 2024",
    category: "DNS Security",
    readTime: "12 min read"
  },
  {
    title: "Getting Started with TCPWave DDI: A Complete Tutorial",
    excerpt: "Step-by-step guide to deploying and configuring your first TCPWave DDI environment.",
    author: "Arjun Mehta",
    date: "Dec 15, 2024",
    category: "TCPWave Tutorials",
    readTime: "15 min read"
  },
  {
    title: "Top 10 Cybersecurity Skills in Demand for 2025",
    excerpt: "Industry analysis of the most valuable cybersecurity skills employers are seeking.",
    author: "Career Services Team",
    date: "Dec 10, 2024",
    category: "Career Advice",
    readTime: "8 min read"
  },
  {
    title: "India's Cybersecurity Landscape: Threats and Opportunities",
    excerpt: "Analysis of the evolving threat landscape and growth opportunities in India's cybersecurity sector.",
    author: "Dr. R. Krishnamurthy",
    date: "Dec 5, 2024",
    category: "Industry News",
    readTime: "10 min read"
  },
];

export default function Blog() {
  return (
    <PageLayout
      title="Blog"
      subtitle="Insights, tutorials, and news from T-SPAN's cybersecurity experts"
      badge="T-SPAN Blog"
      breadcrumbs={[{ label: "Blog" }]}
    >
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="flex flex-col lg:flex-row gap-12">
            <div className="lg:w-3/4">
              <motion.div
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                className="mb-8"
              >
                <h2 className="text-2xl font-display font-bold text-white mb-6">Featured Posts</h2>
              </motion.div>
              
              <div className="space-y-8">
                {featuredPosts.map((post, i) => (
                  <motion.article
                    key={i}
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: i * 0.1 }}
                    className="bg-slate-900/50 border border-slate-800 rounded-2xl p-8 hover:border-primary/50 transition-all cursor-pointer group"
                  >
                    <span className="text-primary text-sm font-mono">{post.category}</span>
                    <h3 className="text-xl font-display font-bold text-white mt-2 mb-3 group-hover:text-primary transition-colors">
                      {post.title}
                    </h3>
                    <p className="text-slate-400 mb-4">{post.excerpt}</p>
                    <div className="flex items-center gap-6 text-sm text-slate-500">
                      <span className="flex items-center gap-2">
                        <User className="w-4 h-4" />
                        {post.author}
                      </span>
                      <span className="flex items-center gap-2">
                        <Calendar className="w-4 h-4" />
                        {post.date}
                      </span>
                      <span>{post.readTime}</span>
                    </div>
                  </motion.article>
                ))}
              </div>
            </div>
            
            <div className="lg:w-1/4">
              <motion.div
                initial={{ opacity: 0, x: 30 }}
                animate={{ opacity: 1, x: 0 }}
              >
                <h3 className="text-xl font-display font-bold text-white mb-6">Categories</h3>
                <div className="space-y-3">
                  {categories.map((cat, i) => (
                    <Link key={i} href={cat.href}>
                      <div className="flex items-center justify-between p-4 bg-slate-900/50 border border-slate-800 rounded-xl hover:border-primary/30 transition-all cursor-pointer">
                        <span className="text-slate-300">{cat.name}</span>
                        <span className="text-slate-500 text-sm">{cat.count}</span>
                      </div>
                    </Link>
                  ))}
                </div>
              </motion.div>
            </div>
          </div>
        </div>
      </section>
    </PageLayout>
  );
}
