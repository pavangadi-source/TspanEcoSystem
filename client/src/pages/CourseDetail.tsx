import { useEffect } from "react";
import { Link, useRoute, useLocation } from "wouter";
import { motion } from "framer-motion";
import { useQuery, useMutation } from "@tanstack/react-query";
import { 
  ChevronLeft, Shield, CheckCircle, FileText, 
  Users, Award, Calendar, Terminal, Clock, Loader2, ArrowRight, CreditCard
} from "lucide-react";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { useToast } from "@/hooks/use-toast";
import Navbar from "@/components/Navbar";

interface Course {
  id: string;
  title: string;
  description: string;
  category: string;
  level: string;
  duration: string;
  price: number;
  tags: string[];
  curriculum: {
    weeks: { title: string; topics: string[] }[];
  };
  startDate: string;
  endDate: string;
}

export default function CourseDetail() {
  const [, params] = useRoute("/courses/:id");
  const [, navigate] = useLocation();
  const { toast } = useToast();
  const courseId = params?.id;

  const { data: course, isLoading } = useQuery<Course>({
    queryKey: ["/api/courses", courseId],
    queryFn: async () => {
      const res = await fetch(`/api/courses/${courseId}`);
      if (!res.ok) throw new Error("Failed to fetch course");
      return res.json();
    },
    enabled: !!courseId,
  });

  const { data: user } = useQuery({
    queryKey: ["/api/auth/user"],
    queryFn: async () => {
      const res = await fetch("/api/auth/user", { credentials: "include" });
      if (!res.ok) return null;
      return res.json();
    },
  });

  const { data: profile } = useQuery({
    queryKey: ["/api/profile"],
    queryFn: async () => {
      const res = await fetch("/api/profile", { credentials: "include" });
      if (!res.ok) return null;
      return res.json();
    },
    enabled: !!user,
  });

  const { data: enrollments = [] } = useQuery({
    queryKey: ["/api/enrollments"],
    queryFn: async () => {
      const res = await fetch("/api/enrollments", { credentials: "include" });
      if (!res.ok) return [];
      return res.json();
    },
    enabled: !!user,
  });

  const isEnrolled = enrollments.some((e: any) => e.courseId === courseId);
  const kycVerified = profile?.kycStatus === "verified";

  const { data: stripeProducts = [] } = useQuery({
    queryKey: ["/api/stripe/products"],
    queryFn: async () => {
      const res = await fetch("/api/stripe/products");
      if (!res.ok) return [];
      return res.json();
    },
  });

  const getStripePriceId = () => {
    const product = stripeProducts.find((p: any) => 
      p.product_metadata?.courseId === courseId
    );
    return product?.price_id || null;
  };

  const checkoutMutation = useMutation({
    mutationFn: async (priceId: string) => {
      const res = await fetch("/api/stripe/checkout", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        credentials: "include",
        body: JSON.stringify({ courseId, priceId }),
      });
      if (!res.ok) {
        const errorData = await res.json().catch(() => ({}));
        throw new Error(errorData.message || "Failed to create checkout");
      }
      return res.json();
    },
    onSuccess: (data) => {
      if (data.url) {
        window.location.href = data.url;
      }
    },
    onError: (error: Error) => {
      toast({
        title: "Checkout Failed",
        description: error.message || "Please try again later.",
        variant: "destructive",
      });
    },
  });

  const handleCheckout = () => {
    if (!user) {
      navigate("/login");
      return;
    }
    if (!kycVerified) {
      toast({
        title: "KYC Required",
        description: "Please complete identity verification before purchasing.",
        variant: "destructive",
      });
      navigate("/kyc");
      return;
    }
    const priceId = getStripePriceId();
    if (priceId) {
      checkoutMutation.mutate(priceId);
    } else {
      toast({
        title: "Course Unavailable",
        description: "This course is not yet available for purchase. Please check back later.",
        variant: "destructive",
      });
    }
  };
  
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  if (isLoading) {
    return (
      <div className="min-h-screen bg-slate-950 flex items-center justify-center">
        <Loader2 className="w-8 h-8 text-primary animate-spin" />
      </div>
    );
  }

  if (!course) {
    return (
      <div className="min-h-screen bg-slate-950 flex items-center justify-center text-white">
        <div className="text-center">
          <h1 className="text-2xl font-bold mb-4">Course Not Found</h1>
          <Button onClick={() => navigate("/courses")}>Back to Courses</Button>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-slate-950 text-white font-sans">
      <Navbar />

      <div className="relative pt-32 pb-16 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-blue-900/20 via-slate-950 to-slate-950" />
        <div className="absolute top-0 right-0 w-full h-full bg-[url('https://www.transparenttextures.com/patterns/circuit-board.png')] opacity-10" />
        
        <div className="container mx-auto px-4 md:px-6 relative z-10">
          <Link href="/courses">
            <span className="inline-flex items-center text-slate-400 hover:text-primary mb-6 transition-colors cursor-pointer">
              <ChevronLeft className="w-4 h-4 mr-1" /> Back to Catalog
            </span>
          </Link>
          
          <div className="grid lg:grid-cols-[2fr_1fr] gap-12">
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
            >
              <div className="flex gap-2 mb-4">
                <Badge className="bg-primary/20 text-primary hover:bg-primary/30 border-primary/50">
                  {course.category}
                </Badge>
                <Badge variant="outline" className="text-slate-400 border-slate-700 capitalize">
                  {course.level}
                </Badge>
              </div>
              
              <h1 className="text-4xl md:text-5xl font-display font-bold text-white mb-4 leading-tight">
                {course.title}
              </h1>
              <p className="text-xl text-slate-300 mb-8 font-light">
                {course.description}
              </p>
              
              <div className="flex flex-wrap gap-6 text-sm text-slate-400">
                <div className="flex items-center gap-2">
                  <Calendar className="w-5 h-5 text-secondary" />
                  <span>Starts: <span className="text-white font-medium">{course.startDate}</span></span>
                </div>
                <div className="flex items-center gap-2">
                  <Clock className="w-5 h-5 text-secondary" />
                  <span>Duration: <span className="text-white font-medium">{course.duration}</span></span>
                </div>
              </div>
            </motion.div>
            
            <div className="hidden lg:block relative">
              <motion.div 
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.2 }}
                className="bg-slate-900/80 backdrop-blur-md border border-slate-700 p-6 rounded-2xl shadow-2xl sticky top-24"
              >
                <div className="flex justify-between items-end mb-2">
                  <span className="text-slate-400 text-sm">Tuition Fee</span>
                  <span className="text-3xl font-display font-bold text-white">${course.price.toLocaleString()}</span>
                </div>
                
                <div className="w-full h-px bg-slate-800 my-4" />
                
                <ul className="space-y-3 mb-6">
                   <li className="flex items-start gap-2 text-sm text-slate-300">
                     <Terminal className="w-4 h-4 text-primary mt-0.5" />
                     <span>Live TCPWave Lab Access</span>
                   </li>
                   <li className="flex items-start gap-2 text-sm text-slate-300">
                     <FileText className="w-4 h-4 text-primary mt-0.5" />
                     <span>Lifetime Course Material</span>
                   </li>
                   <li className="flex items-start gap-2 text-sm text-slate-300">
                     <Award className="w-4 h-4 text-primary mt-0.5" />
                     <span>Official Certification</span>
                   </li>
                </ul>

                {isEnrolled ? (
                  <div className="space-y-3">
                    <div className="flex items-center justify-center gap-2 py-3 px-4 bg-green-500/20 border border-green-500/40 rounded-lg">
                      <CheckCircle className="w-5 h-5 text-green-500" />
                      <span className="text-green-400 font-bold">Enrolled</span>
                    </div>
                    <Button 
                      variant="outline"
                      className="w-full border-primary/50 text-primary hover:bg-primary/10"
                      onClick={() => navigate("/dashboard")}
                    >
                      Go to Dashboard
                      <ArrowRight className="w-4 h-4 ml-2" />
                    </Button>
                  </div>
                ) : (
                  <>
                    <Button 
                      className="w-full bg-primary text-white font-bold hover:bg-primary/90 h-12 text-lg mb-3"
                      onClick={handleCheckout}
                      disabled={checkoutMutation.isPending}
                      data-testid="button-enroll"
                    >
                      {checkoutMutation.isPending ? (
                        <>
                          <Loader2 className="w-5 h-5 mr-2 animate-spin" />
                          Processing...
                        </>
                      ) : (
                        <>
                          <CreditCard className="w-5 h-5 mr-2" />
                          Purchase Course
                        </>
                      )}
                    </Button>
                    <p className="text-center text-xs text-slate-500">
                      Secure payment via Stripe. Limited to 25 seats per cohort.
                    </p>
                  </>
                )}
              </motion.div>
            </div>
          </div>
        </div>
      </div>

      <div className="container mx-auto px-4 md:px-6 py-12">
        <div className="grid lg:grid-cols-[2fr_1fr] gap-12">
          <div className="space-y-12">
            
            <section>
              <h2 className="text-2xl font-display font-bold text-white mb-6 flex items-center gap-2">
                <Shield className="w-6 h-6 text-primary" />
                Course Overview
              </h2>
              <div className="prose prose-invert prose-lg text-slate-300 max-w-none">
                {course.description}
              </div>
            </section>

            {course.curriculum?.weeks && (
              <section>
                <h2 className="text-2xl font-display font-bold text-white mb-6">Curriculum</h2>
                <div className="space-y-4">
                  {course.curriculum.weeks.map((week, i) => (
                    <div key={i} className="group bg-slate-900 border border-slate-800 p-6 rounded-xl hover:border-primary/50 transition-colors">
                      <div className="flex flex-col md:flex-row gap-4 md:items-start">
                        <div className="shrink-0 w-16 h-16 bg-slate-950 rounded-lg flex flex-col items-center justify-center border border-slate-800 group-hover:bg-primary/10 transition-colors">
                          <span className="text-xs text-slate-500 uppercase font-mono">Week</span>
                          <span className="text-xl font-bold text-white">{i + 1}</span>
                        </div>
                        <div>
                          <h3 className="text-lg font-bold text-white mb-2 group-hover:text-primary transition-colors">{week.title}</h3>
                          <div className="flex flex-wrap gap-2">
                            {week.topics.map((topic, j) => (
                              <span key={j} className="px-2 py-1 bg-slate-800 rounded text-xs text-slate-400">
                                {topic}
                              </span>
                            ))}
                          </div>
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              </section>
            )}

            {course.tags && course.tags.length > 0 && (
              <section>
                <h2 className="text-xl font-bold text-white mb-6">Topics Covered</h2>
                <div className="flex flex-wrap gap-3">
                  {course.tags.map((tag) => (
                    <div key={tag} className="px-4 py-2 bg-slate-900 border border-slate-800 rounded-lg text-slate-300 font-mono text-sm">
                      {tag}
                    </div>
                  ))}
                </div>
              </section>
            )}

          </div>

          <div className="lg:hidden">
             <div className="bg-slate-900 border border-slate-700 p-6 rounded-2xl shadow-xl sticky bottom-4">
               <div className="flex items-center justify-between mb-4">
                 <span className="text-2xl font-display font-bold text-white">${course.price.toLocaleString()}</span>
                 {isEnrolled && (
                   <span className="text-green-400 text-sm font-bold flex items-center gap-1">
                     <CheckCircle className="w-4 h-4" /> Enrolled
                   </span>
                 )}
               </div>
               {isEnrolled ? (
                 <Button 
                   className="w-full bg-primary/20 text-primary border border-primary/50 hover:bg-primary/30 h-12 text-lg"
                   onClick={() => navigate("/dashboard")}
                 >
                   Go to Dashboard
                 </Button>
               ) : (
                 <Button 
                   className="w-full bg-primary text-white font-bold hover:bg-primary/90 h-12 text-lg"
                   onClick={handleCheckout}
                   disabled={checkoutMutation.isPending}
                   data-testid="button-enroll-mobile"
                 >
                   {checkoutMutation.isPending ? "Processing..." : "Purchase Course"}
                 </Button>
               )}
             </div>
          </div>
        </div>
      </div>
    </div>
  );
}
