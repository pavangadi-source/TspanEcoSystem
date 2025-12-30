import { useEffect } from "react";
import { Link, useLocation } from "wouter";
import { motion } from "framer-motion";
import { Shield, Lock, ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { useAuth } from "@/hooks/use-auth";
import { FcGoogle } from "react-icons/fc";

export default function Login() {
  const [, setLocation] = useLocation();
  const { user, isLoading, isAuthenticated } = useAuth();

  useEffect(() => {
    if (!isLoading && isAuthenticated) {
      setLocation("/dashboard");
    }
  }, [isLoading, isAuthenticated, setLocation]);

  const handleLogin = () => {
    window.location.href = "/api/login";
  };

  if (isLoading) {
    return (
      <div className="min-h-screen bg-slate-950 flex items-center justify-center">
        <div className="w-8 h-8 border-2 border-primary border-t-transparent rounded-full animate-spin" />
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-slate-950 flex items-center justify-center p-4 relative overflow-hidden">
      <div className="absolute inset-0 bg-[url('https://www.transparenttextures.com/patterns/carbon-fibre.png')] opacity-10" />
      <div className="absolute inset-0 bg-gradient-to-b from-slate-950 via-slate-900/90 to-slate-950" />
      
      <div className="absolute top-1/4 left-1/4 w-64 h-64 bg-primary/20 rounded-full blur-[100px] animate-pulse-slow" />
      <div className="absolute bottom-1/4 right-1/4 w-64 h-64 bg-secondary/10 rounded-full blur-[100px] animate-pulse-slow delay-1000" />

      <motion.div 
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        className="relative z-10 w-full max-w-md"
      >
        <div className="flex flex-col items-center mb-8">
          <Link href="/">
            <div className="flex items-center gap-3 group mb-4 cursor-pointer">
              <div className="relative">
                <Shield className="w-12 h-12 text-primary fill-primary/20 group-hover:text-secondary transition-colors duration-300" />
                <div className="absolute inset-0 bg-primary/20 blur-md rounded-full group-hover:bg-secondary/20 transition-colors duration-300" />
              </div>
            </div>
          </Link>
          <h1 className="text-2xl font-display font-bold text-white tracking-wide">SECURE ACCESS</h1>
          <p className="text-slate-500 text-sm font-mono tracking-wider uppercase mt-1">T-SPAN University Portal</p>
        </div>

        <Card className="bg-slate-900/80 backdrop-blur-md border-slate-800 shadow-2xl overflow-hidden">
          <div className="h-1 w-full bg-gradient-to-r from-primary via-secondary to-primary animate-gradient-x" />
          <CardHeader className="space-y-1 text-center">
            <CardTitle className="text-xl text-white">Welcome to T-SPAN</CardTitle>
            <CardDescription className="text-slate-400">
              Sign in to access courses, complete KYC verification, and manage your enrollments.
            </CardDescription>
          </CardHeader>
          <CardContent className="space-y-6">
            <Button 
              onClick={handleLogin}
              className="w-full bg-white hover:bg-slate-100 text-slate-900 font-bold h-14 text-lg border border-slate-300 shadow-sm"
              data-testid="button-login"
            >
              <FcGoogle className="w-6 h-6 mr-3" />
              Continue with Google
              <ArrowRight className="w-5 h-5 ml-auto text-slate-400" />
            </Button>

            <div className="space-y-4 text-center">
              <p className="text-sm text-slate-400">
                Sign in with your Google account to access T-SPAN University.
              </p>
              <div className="flex flex-wrap justify-center gap-4 text-xs text-slate-500">
                <span className="flex items-center gap-1">
                  <Shield className="w-3 h-3" /> Secure OAuth 2.0
                </span>
                <span className="flex items-center gap-1">
                  <Lock className="w-3 h-3" /> End-to-End Encrypted
                </span>
              </div>
            </div>

            <div className="border-t border-slate-800 pt-4">
              <p className="text-center text-sm text-slate-400">
                After signing in, you'll need to{" "}
                <Link href="/kyc">
                  <span className="text-primary hover:underline font-medium cursor-pointer">complete KYC verification</span>
                </Link>
                {" "}to enroll in courses.
              </p>
            </div>
          </CardContent>
        </Card>

        <div className="mt-6 text-center">
          <Link href="/">
            <span className="text-slate-500 hover:text-primary text-sm cursor-pointer">
              ← Back to Home
            </span>
          </Link>
        </div>
      </motion.div>
    </div>
  );
}
