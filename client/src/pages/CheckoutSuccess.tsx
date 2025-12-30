import { useEffect, useState } from "react";
import { Link, useLocation } from "wouter";
import { motion } from "framer-motion";
import { useQuery, useQueryClient } from "@tanstack/react-query";
import { CheckCircle, ArrowRight, Loader2, Home, Clock } from "lucide-react";
import { Button } from "@/components/ui/button";
import Navbar from "@/components/Navbar";

export default function CheckoutSuccess() {
  const [, navigate] = useLocation();
  const queryClient = useQueryClient();
  const searchParams = new URLSearchParams(window.location.search);
  const courseId = searchParams.get("courseId");
  const [pollCount, setPollCount] = useState(0);

  const { data: course } = useQuery({
    queryKey: ["/api/courses", courseId],
    queryFn: async () => {
      if (!courseId) return null;
      const res = await fetch(`/api/courses/${courseId}`);
      if (!res.ok) return null;
      return res.json();
    },
    enabled: !!courseId,
  });

  const { data: verificationResult, isLoading: isVerifying, refetch } = useQuery({
    queryKey: ["/api/stripe/verify-session", courseId],
    queryFn: async () => {
      const res = await fetch(`/api/stripe/verify-session?courseId=${courseId}`, {
        credentials: "include",
      });
      if (!res.ok) return { enrolled: false };
      return res.json();
    },
    enabled: !!courseId,
    refetchInterval: (data) => {
      if (data?.state?.data?.enrolled) return false;
      if (pollCount >= 10) return false;
      return 2000;
    },
  });

  useEffect(() => {
    if (verificationResult && !verificationResult.enrolled && pollCount < 10) {
      setPollCount(prev => prev + 1);
    }
    if (verificationResult?.enrolled) {
      queryClient.invalidateQueries({ queryKey: ["/api/enrollments"] });
    }
  }, [verificationResult, pollCount, queryClient]);

  const isEnrolled = verificationResult?.enrolled;

  return (
    <div className="min-h-screen bg-slate-950 text-white font-sans">
      <Navbar />

      <div className="relative pt-32 pb-24 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-green-900/20 via-slate-950 to-slate-950" />
        
        <div className="container mx-auto px-4 md:px-6 relative z-10">
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.5 }}
            className="max-w-2xl mx-auto text-center"
          >
            <div className="w-24 h-24 bg-green-500/20 rounded-full flex items-center justify-center mx-auto mb-8 border-2 border-green-500/40">
              <CheckCircle className="w-12 h-12 text-green-500" />
            </div>

            <h1 className="text-4xl md:text-5xl font-display font-bold text-white mb-4">
              Payment Successful!
            </h1>
            
            <p className="text-xl text-slate-300 mb-8 font-light">
              Thank you for your purchase. {course ? `You are now enrolled in "${course.title}".` : "You are now enrolled in the course."}
            </p>

            {!isEnrolled && isVerifying && (
              <div className="flex items-center justify-center gap-2 text-slate-400 mb-8">
                <Loader2 className="w-5 h-5 animate-spin" />
                <span>Confirming your payment...</span>
              </div>
            )}

            {!isEnrolled && !isVerifying && pollCount >= 10 && (
              <div className="flex items-center justify-center gap-2 text-amber-400 mb-8">
                <Clock className="w-5 h-5" />
                <span>Your enrollment is being processed. Please check your dashboard in a few minutes.</span>
              </div>
            )}

            <div className="bg-slate-900/80 backdrop-blur-md border border-slate-700 rounded-2xl p-8 mb-8">
              <h2 className="text-xl font-bold text-white mb-4">What's Next?</h2>
              <ul className="text-left space-y-4 text-slate-300">
                <li className="flex items-start gap-3">
                  <span className="w-6 h-6 bg-primary/20 rounded-full flex items-center justify-center shrink-0 mt-0.5">
                    <span className="text-primary font-bold text-sm">1</span>
                  </span>
                  <span>Access your course materials from the <strong className="text-white">Dashboard</strong></span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="w-6 h-6 bg-primary/20 rounded-full flex items-center justify-center shrink-0 mt-0.5">
                    <span className="text-primary font-bold text-sm">2</span>
                  </span>
                  <span>Check your email for a <strong className="text-white">receipt</strong> and course details</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="w-6 h-6 bg-primary/20 rounded-full flex items-center justify-center shrink-0 mt-0.5">
                    <span className="text-primary font-bold text-sm">3</span>
                  </span>
                  <span>Join the live cohort starting on the <strong className="text-white">{course?.startDate || "scheduled date"}</strong></span>
                </li>
              </ul>
            </div>

            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button 
                className="bg-primary text-white font-bold hover:bg-primary/90 h-12 px-8"
                onClick={() => navigate("/dashboard")}
                data-testid="button-go-dashboard"
              >
                Go to Dashboard
                <ArrowRight className="w-4 h-4 ml-2" />
              </Button>
              <Button 
                variant="outline"
                className="border-slate-600 text-slate-300 hover:bg-slate-800 h-12 px-8"
                onClick={() => navigate("/")}
                data-testid="button-go-home"
              >
                <Home className="w-4 h-4 mr-2" />
                Back to Home
              </Button>
            </div>
          </motion.div>
        </div>
      </div>
    </div>
  );
}
