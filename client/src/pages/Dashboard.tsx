import { useLocation } from "wouter";
import { motion } from "framer-motion";
import { useQuery } from "@tanstack/react-query";
import Navbar from "@/components/Navbar";
import { Button } from "@/components/ui/button";
import { 
  Shield, BookOpen, CheckCircle2, AlertCircle, Clock, 
  User, GraduationCap, ArrowRight, Loader2, Award
} from "lucide-react";

interface Course {
  id: string;
  title: string;
  category: string;
  duration: string;
  level: string;
}

interface Enrollment {
  id: string;
  courseId: string;
  status: string;
  enrolledAt: string;
}

export default function Dashboard() {
  const [, navigate] = useLocation();

  const { data: user } = useQuery({
    queryKey: ["/api/auth/user"],
    queryFn: async () => {
      const res = await fetch("/api/auth/user", { credentials: "include" });
      if (!res.ok) {
        if (res.status === 401) {
          navigate("/login");
          return null;
        }
        throw new Error("Failed to fetch user");
      }
      return res.json();
    },
  });

  const { data: profile, isLoading: profileLoading } = useQuery({
    queryKey: ["/api/profile"],
    queryFn: async () => {
      const res = await fetch("/api/profile", { credentials: "include" });
      if (!res.ok) throw new Error("Failed to fetch profile");
      return res.json();
    },
    enabled: !!user,
  });

  const { data: enrollments = [], isLoading: enrollmentsLoading } = useQuery({
    queryKey: ["/api/enrollments"],
    queryFn: async () => {
      const res = await fetch("/api/enrollments", { credentials: "include" });
      if (!res.ok) throw new Error("Failed to fetch enrollments");
      return res.json();
    },
    enabled: !!user,
  });

  const { data: courses = [] } = useQuery({
    queryKey: ["/api/courses"],
    queryFn: async () => {
      const res = await fetch("/api/courses");
      if (!res.ok) throw new Error("Failed to fetch courses");
      return res.json();
    },
  });

  const getCourse = (courseId: string): Course | undefined => {
    return courses.find((c: Course) => c.id === courseId);
  };

  const getStatusIcon = (status: string) => {
    switch (status) {
      case "active":
        return <CheckCircle2 className="w-5 h-5 text-green-500" />;
      case "completed":
        return <Award className="w-5 h-5 text-secondary" />;
      case "pending":
        return <Clock className="w-5 h-5 text-yellow-500" />;
      default:
        return <AlertCircle className="w-5 h-5 text-slate-500" />;
    }
  };

  const getStatusBadge = (status: string) => {
    const styles: Record<string, string> = {
      active: "bg-green-500/20 text-green-400 border-green-500/40",
      completed: "bg-secondary/20 text-secondary border-secondary/40",
      pending: "bg-yellow-500/20 text-yellow-400 border-yellow-500/40",
      cancelled: "bg-slate-500/20 text-slate-400 border-slate-500/40",
    };
    return styles[status] || styles.pending;
  };

  if (profileLoading || enrollmentsLoading) {
    return (
      <div className="min-h-screen bg-slate-950 flex items-center justify-center">
        <Loader2 className="w-8 h-8 text-primary animate-spin" />
      </div>
    );
  }

  const kycStatus = profile?.kycStatus || "pending";

  return (
    <div className="min-h-screen bg-slate-950 text-white">
      <Navbar />
      <div className="pt-24 pb-16">
        <div className="container mx-auto px-4 md:px-6 max-w-6xl">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="mb-12"
          >
            <div className="flex items-center gap-2 mb-2">
              <GraduationCap className="w-6 h-6 text-primary" />
              <span className="text-primary font-mono text-xs uppercase tracking-[0.3em]">Student Portal</span>
            </div>
            <h1 className="text-4xl md:text-5xl font-display font-bold text-white mb-2">
              Welcome back, <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary to-secondary">{user?.username || "Student"}</span>
            </h1>
            <p className="text-slate-400 text-lg">
              Manage your courses, track progress, and access sovereign infrastructure training.
            </p>
          </motion.div>

          <div className="grid lg:grid-cols-3 gap-6 mb-12">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.1 }}
              className={`p-6 rounded-xl border-2 ${
                kycStatus === "verified"
                  ? "bg-green-500/10 border-green-500/30"
                  : kycStatus === "pending" && profile?.kycData
                  ? "bg-yellow-500/10 border-yellow-500/30"
                  : "bg-slate-900/60 border-slate-800"
              }`}
            >
              <div className="flex items-start justify-between mb-4">
                <div className="p-3 bg-slate-950/50 rounded-xl">
                  <Shield className={`w-6 h-6 ${
                    kycStatus === "verified" ? "text-green-500" : 
                    kycStatus === "pending" && profile?.kycData ? "text-yellow-500" : "text-primary"
                  }`} />
                </div>
                {kycStatus === "verified" ? (
                  <span className="px-3 py-1 bg-green-500/20 text-green-400 text-xs font-mono rounded-full border border-green-500/40">
                    VERIFIED
                  </span>
                ) : kycStatus === "pending" && profile?.kycData ? (
                  <span className="px-3 py-1 bg-yellow-500/20 text-yellow-400 text-xs font-mono rounded-full border border-yellow-500/40">
                    PENDING
                  </span>
                ) : (
                  <span className="px-3 py-1 bg-slate-700/50 text-slate-400 text-xs font-mono rounded-full border border-slate-600">
                    INCOMPLETE
                  </span>
                )}
              </div>
              <h3 className="text-lg font-display font-bold text-white mb-2">KYC Verification</h3>
              <p className="text-slate-400 text-sm mb-4">
                {kycStatus === "verified"
                  ? "Identity verified. You can enroll in courses."
                  : kycStatus === "pending" && profile?.kycData
                  ? "Documents under review. 24-48 hours."
                  : "Complete verification to access courses."}
              </p>
              {kycStatus !== "verified" && !(kycStatus === "pending" && profile?.kycData) && (
                <Button
                  onClick={() => navigate("/kyc")}
                  data-testid="button-complete-kyc"
                  className="w-full bg-primary hover:bg-primary/90"
                >
                  Complete KYC
                  <ArrowRight className="w-4 h-4 ml-2" />
                </Button>
              )}
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2 }}
              className="p-6 rounded-xl bg-slate-900/60 border-2 border-slate-800"
            >
              <div className="p-3 bg-slate-950/50 rounded-xl w-fit mb-4">
                <BookOpen className="w-6 h-6 text-secondary" />
              </div>
              <h3 className="text-lg font-display font-bold text-white mb-2">Active Courses</h3>
              <p className="text-4xl font-display font-bold text-transparent bg-clip-text bg-gradient-to-r from-primary to-secondary mb-2">
                {enrollments.filter((e: Enrollment) => e.status === "active").length}
              </p>
              <p className="text-slate-400 text-sm">
                {enrollments.length > 0 ? "Courses in progress" : "No active enrollments yet"}
              </p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.3 }}
              className="p-6 rounded-xl bg-slate-900/60 border-2 border-slate-800"
            >
              <div className="p-3 bg-slate-950/50 rounded-xl w-fit mb-4">
                <User className="w-6 h-6 text-primary" />
              </div>
              <h3 className="text-lg font-display font-bold text-white mb-2">Role</h3>
              <p className="text-xl font-display font-bold text-white capitalize mb-2">
                {profile?.role || "Student"}
              </p>
              <p className="text-slate-400 text-sm">
                Access to sovereign infrastructure labs
              </p>
            </motion.div>
          </div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.4 }}
          >
            <div className="flex items-center justify-between mb-6">
              <h2 className="text-2xl font-display font-bold text-white">My Enrollments</h2>
              <Button
                variant="outline"
                onClick={() => navigate("/courses")}
                className="border-primary/50 text-primary hover:bg-primary/10"
              >
                Browse Courses
              </Button>
            </div>

            {enrollments.length === 0 ? (
              <div className="p-12 rounded-2xl bg-slate-900/40 border border-slate-800 text-center">
                <BookOpen className="w-16 h-16 text-slate-600 mx-auto mb-4" />
                <h3 className="text-xl font-display font-bold text-white mb-2">No Enrollments Yet</h3>
                <p className="text-slate-400 mb-6 max-w-md mx-auto">
                  Start your sovereign cybersecurity journey by enrolling in a course.
                  {kycStatus !== "verified" && " Complete KYC verification first."}
                </p>
                <Button
                  onClick={() => navigate(kycStatus === "verified" ? "/courses" : "/kyc")}
                  className="bg-primary hover:bg-primary/90"
                >
                  {kycStatus === "verified" ? "Explore Courses" : "Complete KYC First"}
                  <ArrowRight className="w-4 h-4 ml-2" />
                </Button>
              </div>
            ) : (
              <div className="space-y-4">
                {enrollments.map((enrollment: Enrollment, i: number) => {
                  const course = getCourse(enrollment.courseId);
                  if (!course) return null;
                  
                  return (
                    <motion.div
                      key={enrollment.id}
                      initial={{ opacity: 0, x: -20 }}
                      animate={{ opacity: 1, x: 0 }}
                      transition={{ delay: i * 0.1 }}
                      data-testid={`enrollment-card-${enrollment.id}`}
                      className="p-6 rounded-xl bg-slate-900/60 border border-slate-800 hover:border-primary/30 transition-all group"
                    >
                      <div className="flex flex-col md:flex-row md:items-center justify-between gap-4">
                        <div className="flex items-start gap-4">
                          {getStatusIcon(enrollment.status)}
                          <div>
                            <h4 className="text-lg font-display font-bold text-white group-hover:text-primary transition-colors">
                              {course.title}
                            </h4>
                            <div className="flex flex-wrap gap-2 mt-2">
                              <span className="text-xs text-slate-500 font-mono">{course.category}</span>
                              <span className="text-slate-600">•</span>
                              <span className="text-xs text-slate-500 font-mono">{course.duration}</span>
                              <span className="text-slate-600">•</span>
                              <span className="text-xs text-slate-500 font-mono capitalize">{course.level}</span>
                            </div>
                          </div>
                        </div>
                        
                        <div className="flex items-center gap-4">
                          <span className={`px-3 py-1 text-xs font-mono rounded-full border capitalize ${getStatusBadge(enrollment.status)}`}>
                            {enrollment.status}
                          </span>
                          <Button
                            variant="ghost"
                            size="sm"
                            onClick={() => navigate(`/courses/${enrollment.courseId}`)}
                            className="text-primary hover:bg-primary/10"
                          >
                            View Course
                            <ArrowRight className="w-4 h-4 ml-1" />
                          </Button>
                        </div>
                      </div>
                    </motion.div>
                  );
                })}
              </div>
            )}
          </motion.div>
        </div>
      </div>
    </div>
  );
}
