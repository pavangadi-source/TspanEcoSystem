import { useState } from "react";
import { useLocation } from "wouter";
import { motion } from "framer-motion";
import { useMutation, useQuery, useQueryClient } from "@tanstack/react-query";
import Navbar from "@/components/Navbar";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { useToast } from "@/hooks/use-toast";
import { Shield, CheckCircle2, AlertCircle, User, FileText, Building, Loader2 } from "lucide-react";

interface KYCData {
  fullName: string;
  dateOfBirth: string;
  nationality: string;
  idType: string;
  idNumber: string;
  address: string;
  city: string;
  state: string;
  postalCode: string;
  country: string;
  organization: string;
  designation: string;
  yearsExperience: string;
}

export default function KYCVerification() {
  const [, navigate] = useLocation();
  const { toast } = useToast();
  const queryClient = useQueryClient();
  
  const [formData, setFormData] = useState<KYCData>({
    fullName: "",
    dateOfBirth: "",
    nationality: "",
    idType: "",
    idNumber: "",
    address: "",
    city: "",
    state: "",
    postalCode: "",
    country: "",
    organization: "",
    designation: "",
    yearsExperience: "",
  });

  const { data: profile, isLoading: profileLoading } = useQuery({
    queryKey: ["/api/profile"],
    queryFn: async () => {
      const res = await fetch("/api/profile", { credentials: "include" });
      if (!res.ok) {
        if (res.status === 401) {
          navigate("/login");
          return null;
        }
        throw new Error("Failed to fetch profile");
      }
      return res.json();
    },
  });

  const submitKYC = useMutation({
    mutationFn: async (data: KYCData) => {
      const res = await fetch("/api/profile/kyc", {
        method: "PATCH",
        headers: { "Content-Type": "application/json" },
        credentials: "include",
        body: JSON.stringify(data),
      });
      if (!res.ok) throw new Error("Failed to submit KYC");
      return res.json();
    },
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ["/api/profile"] });
      toast({
        title: "KYC Submitted",
        description: "Your verification documents have been submitted for review.",
      });
      navigate("/dashboard");
    },
    onError: () => {
      toast({
        title: "Submission Failed",
        description: "Please try again later.",
        variant: "destructive",
      });
    },
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    
    // Client-side validation
    const requiredFields: (keyof KYCData)[] = ["fullName", "dateOfBirth", "nationality", "idType", "idNumber", "address", "city", "country"];
    const missingFields = requiredFields.filter(field => !formData[field] || formData[field].trim() === "");
    
    if (missingFields.length > 0) {
      toast({
        title: "Missing Required Fields",
        description: "Please fill in all required fields.",
        variant: "destructive",
      });
      return;
    }
    
    submitKYC.mutate(formData);
  };

  const updateField = (field: keyof KYCData, value: string) => {
    setFormData((prev) => ({ ...prev, [field]: value }));
  };

  if (profileLoading) {
    return (
      <div className="min-h-screen bg-slate-950 flex items-center justify-center">
        <Loader2 className="w-8 h-8 text-primary animate-spin" />
      </div>
    );
  }

  const kycStatus = profile?.kycStatus;

  return (
    <div className="min-h-screen bg-slate-950 text-white">
      <Navbar />
      <div className="pt-24 pb-16">
        <div className="container mx-auto px-4 md:px-6 max-w-4xl">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-center mb-12"
          >
            <div className="flex items-center justify-center gap-2 mb-4">
              <Shield className="w-6 h-6 text-primary animate-pulse" />
              <span className="text-primary font-mono text-xs uppercase tracking-[0.3em]">Identity Verification</span>
            </div>
            <h1 className="text-4xl md:text-5xl font-display font-bold text-white mb-4">
              KYC <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary to-secondary">Verification</span>
            </h1>
            <p className="text-slate-400 text-lg max-w-2xl mx-auto">
              Complete your identity verification to access T-SPAN courses and sovereign infrastructure training.
            </p>
          </motion.div>

          {kycStatus === "verified" ? (
            <motion.div
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              className="p-8 rounded-2xl bg-gradient-to-br from-green-500/10 to-emerald-500/5 border-2 border-green-500/30 text-center"
            >
              <CheckCircle2 className="w-16 h-16 text-green-500 mx-auto mb-4" />
              <h2 className="text-2xl font-display font-bold text-white mb-2">Verification Complete</h2>
              <p className="text-slate-400 mb-6">Your identity has been verified. You can now enroll in courses.</p>
              <Button onClick={() => navigate("/courses")} className="bg-primary hover:bg-primary/90">
                Browse Courses
              </Button>
            </motion.div>
          ) : kycStatus === "pending" && profile?.kycData ? (
            <motion.div
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              className="p-8 rounded-2xl bg-gradient-to-br from-yellow-500/10 to-amber-500/5 border-2 border-yellow-500/30 text-center"
            >
              <AlertCircle className="w-16 h-16 text-yellow-500 mx-auto mb-4" />
              <h2 className="text-2xl font-display font-bold text-white mb-2">Verification Pending</h2>
              <p className="text-slate-400 mb-6">Your documents are under review. This usually takes 24-48 hours.</p>
              <Button variant="outline" onClick={() => navigate("/dashboard")}>
                Go to Dashboard
              </Button>
            </motion.div>
          ) : (
            <motion.form
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.1 }}
              onSubmit={handleSubmit}
              className="space-y-8"
            >
              <div className="p-6 md:p-8 rounded-2xl bg-slate-900/60 border border-slate-800">
                <div className="flex items-center gap-3 mb-6">
                  <div className="p-2 bg-primary/20 rounded-lg">
                    <User className="w-5 h-5 text-primary" />
                  </div>
                  <h3 className="text-xl font-display font-bold text-white">Personal Information</h3>
                </div>
                
                <div className="grid sm:grid-cols-2 gap-4">
                  <div className="space-y-2">
                    <Label htmlFor="fullName" className="text-slate-300">Full Name (as per ID)</Label>
                    <Input
                      id="fullName"
                      data-testid="input-fullname"
                      value={formData.fullName}
                      onChange={(e) => updateField("fullName", e.target.value)}
                      placeholder="Enter your full name"
                      className="bg-slate-950 border-slate-700 text-white"
                      required
                    />
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="dateOfBirth" className="text-slate-300">Date of Birth</Label>
                    <Input
                      id="dateOfBirth"
                      data-testid="input-dob"
                      type="date"
                      value={formData.dateOfBirth}
                      onChange={(e) => updateField("dateOfBirth", e.target.value)}
                      className="bg-slate-950 border-slate-700 text-white"
                      required
                    />
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="nationality" className="text-slate-300">Nationality</Label>
                    <Input
                      id="nationality"
                      data-testid="input-nationality"
                      value={formData.nationality}
                      onChange={(e) => updateField("nationality", e.target.value)}
                      placeholder="e.g., Indian"
                      className="bg-slate-950 border-slate-700 text-white"
                      required
                    />
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="country" className="text-slate-300">Country of Residence</Label>
                    <Input
                      id="country"
                      data-testid="input-country"
                      value={formData.country}
                      onChange={(e) => updateField("country", e.target.value)}
                      placeholder="e.g., India"
                      className="bg-slate-950 border-slate-700 text-white"
                      required
                    />
                  </div>
                </div>
              </div>

              <div className="p-6 md:p-8 rounded-2xl bg-slate-900/60 border border-slate-800">
                <div className="flex items-center gap-3 mb-6">
                  <div className="p-2 bg-secondary/20 rounded-lg">
                    <FileText className="w-5 h-5 text-secondary" />
                  </div>
                  <h3 className="text-xl font-display font-bold text-white">Identity Document</h3>
                </div>
                
                <div className="grid sm:grid-cols-2 gap-4">
                  <div className="space-y-2">
                    <Label htmlFor="idType" className="text-slate-300">ID Type</Label>
                    <Select value={formData.idType} onValueChange={(v) => updateField("idType", v)}>
                      <SelectTrigger data-testid="select-idtype" className="bg-slate-950 border-slate-700 text-white">
                        <SelectValue placeholder="Select ID type" />
                      </SelectTrigger>
                      <SelectContent>
                        <SelectItem value="aadhaar">Aadhaar Card</SelectItem>
                        <SelectItem value="pan">PAN Card</SelectItem>
                        <SelectItem value="passport">Passport</SelectItem>
                        <SelectItem value="driving_license">Driving License</SelectItem>
                        <SelectItem value="voter_id">Voter ID</SelectItem>
                      </SelectContent>
                    </Select>
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="idNumber" className="text-slate-300">ID Number</Label>
                    <Input
                      id="idNumber"
                      data-testid="input-idnumber"
                      value={formData.idNumber}
                      onChange={(e) => updateField("idNumber", e.target.value)}
                      placeholder="Enter ID number"
                      className="bg-slate-950 border-slate-700 text-white"
                      required
                    />
                  </div>
                </div>
              </div>

              <div className="p-6 md:p-8 rounded-2xl bg-slate-900/60 border border-slate-800">
                <div className="flex items-center gap-3 mb-6">
                  <div className="p-2 bg-primary/20 rounded-lg">
                    <Building className="w-5 h-5 text-primary" />
                  </div>
                  <h3 className="text-xl font-display font-bold text-white">Professional Information</h3>
                </div>
                
                <div className="grid sm:grid-cols-2 gap-4">
                  <div className="space-y-2">
                    <Label htmlFor="organization" className="text-slate-300">Organization</Label>
                    <Input
                      id="organization"
                      data-testid="input-organization"
                      value={formData.organization}
                      onChange={(e) => updateField("organization", e.target.value)}
                      placeholder="Current employer or institution"
                      className="bg-slate-950 border-slate-700 text-white"
                    />
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="designation" className="text-slate-300">Designation</Label>
                    <Input
                      id="designation"
                      data-testid="input-designation"
                      value={formData.designation}
                      onChange={(e) => updateField("designation", e.target.value)}
                      placeholder="Your current role"
                      className="bg-slate-950 border-slate-700 text-white"
                    />
                  </div>
                  <div className="space-y-2 sm:col-span-2">
                    <Label htmlFor="yearsExperience" className="text-slate-300">Years of Experience in Cybersecurity/IT</Label>
                    <Select value={formData.yearsExperience} onValueChange={(v) => updateField("yearsExperience", v)}>
                      <SelectTrigger data-testid="select-experience" className="bg-slate-950 border-slate-700 text-white">
                        <SelectValue placeholder="Select experience" />
                      </SelectTrigger>
                      <SelectContent>
                        <SelectItem value="0-1">0-1 years</SelectItem>
                        <SelectItem value="1-3">1-3 years</SelectItem>
                        <SelectItem value="3-5">3-5 years</SelectItem>
                        <SelectItem value="5-10">5-10 years</SelectItem>
                        <SelectItem value="10+">10+ years</SelectItem>
                      </SelectContent>
                    </Select>
                  </div>
                </div>
              </div>

              <div className="p-6 md:p-8 rounded-2xl bg-slate-900/60 border border-slate-800">
                <div className="flex items-center gap-3 mb-6">
                  <div className="p-2 bg-secondary/20 rounded-lg">
                    <FileText className="w-5 h-5 text-secondary" />
                  </div>
                  <h3 className="text-xl font-display font-bold text-white">Address</h3>
                </div>
                
                <div className="grid sm:grid-cols-2 gap-4">
                  <div className="space-y-2 sm:col-span-2">
                    <Label htmlFor="address" className="text-slate-300">Street Address</Label>
                    <Input
                      id="address"
                      data-testid="input-address"
                      value={formData.address}
                      onChange={(e) => updateField("address", e.target.value)}
                      placeholder="Enter your address"
                      className="bg-slate-950 border-slate-700 text-white"
                      required
                    />
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="city" className="text-slate-300">City</Label>
                    <Input
                      id="city"
                      data-testid="input-city"
                      value={formData.city}
                      onChange={(e) => updateField("city", e.target.value)}
                      placeholder="City"
                      className="bg-slate-950 border-slate-700 text-white"
                      required
                    />
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="state" className="text-slate-300">State/Province</Label>
                    <Input
                      id="state"
                      data-testid="input-state"
                      value={formData.state}
                      onChange={(e) => updateField("state", e.target.value)}
                      placeholder="State"
                      className="bg-slate-950 border-slate-700 text-white"
                    />
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="postalCode" className="text-slate-300">Postal Code</Label>
                    <Input
                      id="postalCode"
                      data-testid="input-postalcode"
                      value={formData.postalCode}
                      onChange={(e) => updateField("postalCode", e.target.value)}
                      placeholder="Postal code"
                      className="bg-slate-950 border-slate-700 text-white"
                    />
                  </div>
                </div>
              </div>

              <div className="flex flex-col sm:flex-row gap-4">
                <Button
                  type="submit"
                  data-testid="button-submit-kyc"
                  disabled={submitKYC.isPending}
                  className="flex-1 bg-primary hover:bg-primary/90 text-white h-14 text-lg font-bold"
                >
                  {submitKYC.isPending ? (
                    <>
                      <Loader2 className="w-5 h-5 mr-2 animate-spin" />
                      Submitting...
                    </>
                  ) : (
                    "Submit for Verification"
                  )}
                </Button>
                <Button
                  type="button"
                  variant="outline"
                  onClick={() => navigate("/dashboard")}
                  className="border-slate-700 text-slate-300 hover:bg-slate-800"
                >
                  Cancel
                </Button>
              </div>

              <p className="text-xs text-slate-500 text-center">
                By submitting, you agree to T-SPAN's privacy policy and consent to identity verification.
                Your data is encrypted and handled per sovereign data protection standards.
              </p>
            </motion.form>
          )}
        </div>
      </div>
    </div>
  );
}
