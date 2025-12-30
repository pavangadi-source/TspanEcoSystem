import { useState } from "react";
import { Link } from "wouter";
import { motion } from "framer-motion";
import { Search, Filter, ChevronRight, Shield, Server, Cpu, Globe, Lock, Clock, BarChart } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Badge } from "@/components/ui/badge";
import Navbar from "@/components/Navbar";
import { useQuery } from "@tanstack/react-query";
import type { Course } from "@shared/schema";

export default function Courses() {
  const [filter, setFilter] = useState("All");
  const [search, setSearch] = useState("");

  const { data: courses = [], isLoading, error } = useQuery<Course[]>({
    queryKey: ["/api/courses"],
    queryFn: async () => {
      const response = await fetch("/api/courses");
      if (!response.ok) throw new Error("Failed to fetch courses");
      return response.json();
    },
  });

  const filteredCourses = courses.filter(course => {
    const matchesFilter = filter === "All" || course.category === filter;
    const matchesSearch = course.title.toLowerCase().includes(search.toLowerCase()) || course.description.toLowerCase().includes(search.toLowerCase());
    return matchesFilter && matchesSearch;
  });

  if (isLoading) {
    return (
      <div className="min-h-screen bg-slate-950 text-white font-sans">
        <Navbar />
        <div className="flex items-center justify-center min-h-[60vh]">
          <div className="text-center">
            <div className="animate-spin w-12 h-12 border-4 border-primary border-t-transparent rounded-full mx-auto mb-4" />
            <p className="text-slate-400">Loading courses...</p>
          </div>
        </div>
      </div>
    );
  }

  if (error) {
    return (
      <div className="min-h-screen bg-slate-950 text-white font-sans">
        <Navbar />
        <div className="flex items-center justify-center min-h-[60vh]">
          <div className="text-center text-red-400">
            <p>Failed to load courses. Please try again later.</p>
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-slate-950 text-white font-sans">
      <Navbar />
      
      {/* Hero Section */}
      <section className="relative pt-32 pb-20 overflow-hidden">
        <div className="absolute inset-0 bg-[url('https://www.transparenttextures.com/patterns/diagmonds-light.png')] opacity-5" />
        <div className="absolute top-0 right-0 w-1/2 h-full bg-gradient-to-l from-primary/10 to-transparent" />
        
        <div className="container mx-auto px-4 md:px-6 relative z-10">
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="max-w-3xl"
          >
            <div className="flex items-center gap-2 text-primary font-mono text-sm uppercase tracking-widest mb-4">
              <span className="w-2 h-2 bg-primary rounded-full animate-pulse" />
              Live Operations Catalog
            </div>
            <h1 className="text-4xl md:text-6xl font-display font-bold text-white mb-6 leading-tight">
              Elite Training for <br />
              Sovereign Defenders
            </h1>
            <p className="text-slate-400 text-lg max-w-2xl mb-8">
              Forget "Hello World". Our courses deploy you into live-fire ranges running TCPWave infrastructure. 
              Learn to defend assets that matter.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Search & Filter Bar */}
      <div className="sticky top-[72px] z-40 bg-slate-950/90 backdrop-blur-md border-y border-slate-800 py-4">
        <div className="container mx-auto px-4 md:px-6 flex flex-col md:flex-row gap-4 items-center justify-between">
          
          <div className="flex items-center gap-2 overflow-x-auto w-full md:w-auto pb-2 md:pb-0 scrollbar-hide">
            {["All", "Infrastructure", "Operations", "AI Security", "Architecture", "Strategy"].map((cat) => (
              <button
                key={cat}
                onClick={() => setFilter(cat)}
                className={`px-4 py-2 rounded-full text-sm font-medium font-bold transition-all whitespace-nowrap ${
                  filter === cat 
                    ? "bg-primary text-white shadow-[0_0_15px_rgba(6,182,212,0.4)]" 
                    : "bg-slate-900 text-slate-400 hover:bg-slate-800 hover:text-white"
                }`}
              >
                {cat}
              </button>
            ))}
          </div>

          <div className="relative w-full md:w-80">
            <Search className="absolute left-3 top-2.5 h-4 w-4 text-slate-500" />
            <Input 
              placeholder="Search curriculum..." 
              value={search}
              onChange={(e) => setSearch(e.target.value)}
              className="pl-9 bg-slate-900 border-slate-800 focus:border-primary text-white"
            />
          </div>
        </div>
      </div>

      {/* Course Grid */}
      <section className="py-16 relative">
        <div className="absolute top-1/4 right-0 w-[600px] h-[600px] bg-primary/5 rounded-full blur-[120px] pointer-events-none" />
        <div className="container mx-auto px-4 md:px-6">
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {filteredCourses.map((course, i) => (
              <motion.div
                key={course.id}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: i * 0.1 }}
              >
                <Link href={`/courses/${course.id}`} className="group block h-full bg-slate-900/50 border border-slate-800 rounded-2xl overflow-hidden hover:border-primary/50 transition-all hover:shadow-[0_0_50px_rgba(6,182,212,0.25)] hover:-translate-y-2 relative backdrop-blur-sm duration-500">
                    {/* Multi-layer Gradient Effects */}
                    <div className="absolute inset-0 bg-gradient-to-br from-primary/15 via-secondary/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-700 pointer-events-none" />
                    <div className="absolute inset-0 bg-gradient-to-tl from-transparent via-white/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none" />
                    
                    {/* Animated Sweep Gradient */}
                    <div className="absolute inset-0 bg-gradient-to-r from-transparent via-primary/20 to-transparent -translate-x-full group-hover:translate-x-full transition-transform duration-1200 ease-out pointer-events-none" />
                    
                    {/* Image Container */}
                    <div className="h-52 bg-slate-950 relative overflow-hidden">
                      <div className="absolute inset-0 bg-gradient-to-t from-slate-900 to-transparent z-10" />
                      
                      {/* Generative Image with Zoom Effect */}
                      <div className={`absolute inset-0 opacity-80 group-hover:scale-110 transition-transform duration-700 ease-out mix-blend-luminosity group-hover:mix-blend-normal`} >
                         <img 
                           src={course.imageUrl || 'https://images.unsplash.com/photo-1550751827-4bd374c3f58b?w=800&q=80'}
                           className="w-full h-full object-cover"
                           onError={(e) => {
                             e.currentTarget.src = "https://images.unsplash.com/photo-1558494949-ef010cbdcc31?w=800&q=80";
                           }}
                           alt={course.title}
                         />
                      </div>
                      
                      <div className="absolute top-4 right-4 z-20">
                        <Badge className="bg-slate-950/60 backdrop-blur-md border border-slate-700 text-white font-mono tracking-wider shadow-lg">
                          {course.level.charAt(0).toUpperCase() + course.level.slice(1)}
                        </Badge>
                      </div>
                    </div>

                    <div className="p-6 relative z-10">
                      <div className="flex justify-between items-start mb-4">
                         <div className="text-xs font-mono text-primary uppercase tracking-[0.15em] font-bold border-b border-primary/30 pb-1">{course.category}</div>
                         <div className="flex items-center gap-1 text-secondary text-xs font-bold bg-secondary/10 px-2 py-1 rounded-full border border-secondary/20">
                           <Shield className="w-3 h-3 fill-current" />
                           ${course.price.toLocaleString()}
                         </div>
                      </div>
                      
                      <h3 className="text-xl font-display font-bold text-white mb-3 group-hover:text-primary transition-colors leading-tight min-h-[3.5rem]">
                        {course.title}
                      </h3>
                      
                      <p className="text-slate-400 text-sm mb-6 line-clamp-3 leading-relaxed font-light">
                        {course.description}
                      </p>

                      <div className="flex flex-wrap gap-2 mb-6">
                        {course.tags?.slice(0, 3).map(tag => (
                          <span key={tag} className="text-[10px] font-mono uppercase px-2 py-1 rounded bg-slate-800/50 text-slate-300 border border-slate-700/50 group-hover:border-primary/30 transition-colors">
                            {tag}
                          </span>
                        ))}
                      </div>

                      <div className="flex items-center justify-between pt-4 border-t border-slate-800/50 group-hover:border-primary/20 transition-colors">
                        <div className="flex items-center gap-2 text-slate-400 text-xs font-mono">
                          <Clock className="w-3 h-3 text-secondary" />
                          {course.duration}
                        </div>
                        <div className="flex items-center gap-1 font-bold text-white text-sm group-hover:text-primary transition-colors group-hover:translate-x-1 duration-300">
                          View Program <ChevronRight className="w-4 h-4" />
                        </div>
                      </div>
                    </div>
                </Link>
              </motion.div>
            ))}
          </div>
        </div>
      </section>
      
      {/* CTA Section */}
      <section className="py-20 bg-slate-900 border-t border-slate-800">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl font-display font-bold text-white mb-6">Not Sure Where to Start?</h2>
          <p className="text-slate-400 max-w-2xl mx-auto mb-8">
            Our admissions team can analyze your background and recommend the perfect sovereign defense track for your career goals.
          </p>
          <Link href="/kyc">
            <Button size="lg" className="bg-white text-slate-950 hover:bg-slate-200 font-bold">
              Get A Career Assessment
            </Button>
          </Link>
        </div>
      </section>
    </div>
  );
}
