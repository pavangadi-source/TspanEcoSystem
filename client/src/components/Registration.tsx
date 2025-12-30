import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { useToast } from "@/hooks/use-toast";
import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import * as z from "zod";
import { Form, FormControl, FormField, FormItem, FormMessage } from "@/components/ui/form";
import { Loader2 } from "lucide-react";

const formSchema = z.object({
  fullName: z.string().min(2, "Name is required"),
  email: z.string().email("Invalid email address"),
  phone: z.string().min(10, "Valid phone number required"),
  linkedIn: z.string().optional(),
  background: z.string().min(10, "Please tell us a bit about your background"),
});

export default function Registration() {
  const { toast } = useToast();
  const [isSubmitting, setIsSubmitting] = useState(false);
  
  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      fullName: "",
      email: "",
      phone: "",
      linkedIn: "",
      background: "",
    },
  });

  async function onSubmit(values: z.infer<typeof formSchema>) {
    setIsSubmitting(true);
    try {
      const response = await fetch("/api/registrations", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(values),
      });

      if (!response.ok) {
        const errorData = await response.json();
        throw new Error(errorData.message || "Registration failed");
      }

      toast({
        title: "Application Received",
        description: "We have received your registration request. An admissions officer will contact you shortly.",
        className: "bg-slate-900 border-primary text-white",
      });
      form.reset();
    } catch (error: any) {
      toast({
        title: "Registration Failed",
        description: error.message || "Something went wrong. Please try again.",
        variant: "destructive",
      });
    } finally {
      setIsSubmitting(false);
    }
  }

  return (
    <section id="register" className="py-20 bg-slate-950 relative overflow-hidden">
      {/* Background decoration */}
      <div className="absolute top-0 right-0 w-1/2 h-full bg-primary/5 -skew-x-12 transform origin-top-right" />

      <div className="container mx-auto px-4 md:px-6 relative z-10">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          
          <div>
            <h2 className="text-3xl md:text-5xl font-display font-bold text-white mb-6">
              Secure Your Spot <br />
              <span className="text-secondary">Register by Feb 15</span>
            </h2>
            <p className="text-slate-400 text-lg mb-8 max-w-lg">
              Join the elite cohort of defenders. This program is highly selective with limited seats for the live-infrastructure labs.
            </p>
            
            <div className="space-y-6">
              <div className="flex items-start gap-4">
                <div className="w-12 h-12 rounded-full bg-slate-900 border border-slate-700 flex items-center justify-center text-primary font-bold text-xl">
                  1
                </div>
                <div>
                  <h4 className="text-white font-bold text-lg">Apply Online</h4>
                  <p className="text-slate-500">Complete the form with your professional details.</p>
                </div>
              </div>
              <div className="flex items-start gap-4">
                <div className="w-12 h-12 rounded-full bg-slate-900 border border-slate-700 flex items-center justify-center text-secondary font-bold text-xl">
                  2
                </div>
                <div>
                  <h4 className="text-white font-bold text-lg">Screening</h4>
                  <p className="text-slate-500">Our team reviews your technical background.</p>
                </div>
              </div>
              <div className="flex items-start gap-4">
                <div className="w-12 h-12 rounded-full bg-slate-900 border border-slate-700 flex items-center justify-center text-white font-bold text-xl">
                  3
                </div>
                <div>
                  <h4 className="text-white font-bold text-lg">Enrollment</h4>
                  <p className="text-slate-500">Pay the tuition fee and receive access credentials.</p>
                </div>
              </div>
            </div>
          </div>

          <div className="bg-slate-900/80 backdrop-blur-md border border-slate-800 p-8 rounded-2xl shadow-2xl">
            <Form {...form}>
              <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-6">
                <FormField
                  control={form.control}
                  name="fullName"
                  render={({ field }) => (
                    <FormItem>
                      <Label className="text-slate-300">Full Name</Label>
                      <FormControl>
                        <Input placeholder="John Doe" {...field} className="bg-slate-950 border-slate-800 text-white focus:border-primary" />
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />
                <div className="grid md:grid-cols-2 gap-4">
                  <FormField
                    control={form.control}
                    name="email"
                    render={({ field }) => (
                      <FormItem>
                        <Label className="text-slate-300">Work Email</Label>
                        <FormControl>
                          <Input placeholder="john@company.com" {...field} className="bg-slate-950 border-slate-800 text-white focus:border-primary" />
                        </FormControl>
                        <FormMessage />
                      </FormItem>
                    )}
                  />
                  <FormField
                    control={form.control}
                    name="phone"
                    render={({ field }) => (
                      <FormItem>
                        <Label className="text-slate-300">Phone Number</Label>
                        <FormControl>
                          <Input placeholder="+91 98765 43210" {...field} className="bg-slate-950 border-slate-800 text-white focus:border-primary" />
                        </FormControl>
                        <FormMessage />
                      </FormItem>
                    )}
                  />
                </div>
                <FormField
                  control={form.control}
                  name="linkedIn"
                  render={({ field }) => (
                    <FormItem>
                      <Label className="text-slate-300">LinkedIn Profile (Optional)</Label>
                      <FormControl>
                        <Input placeholder="linkedin.com/in/..." {...field} className="bg-slate-950 border-slate-800 text-white focus:border-primary" />
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />
                <FormField
                  control={form.control}
                  name="background"
                  render={({ field }) => (
                    <FormItem>
                      <Label className="text-slate-300">Current Role & Background</Label>
                      <FormControl>
                        <Textarea 
                          placeholder="Briefly describe your current role and why you want to join..." 
                          className="bg-slate-950 border-slate-800 text-white focus:border-primary min-h-[100px]"
                          {...field} 
                        />
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />
                <Button 
                  type="submit" 
                  disabled={isSubmitting}
                  className="w-full bg-gradient-to-r from-primary to-blue-600 hover:from-primary/90 hover:to-blue-700 text-white font-bold h-12 text-lg disabled:opacity-50"
                  data-testid="button-submit-registration"
                >
                  {isSubmitting ? (
                    <>
                      <Loader2 className="mr-2 h-5 w-5 animate-spin" />
                      SUBMITTING...
                    </>
                  ) : (
                    "SUBMIT APPLICATION"
                  )}
                </Button>
                <p className="text-center text-xs text-slate-500 mt-4">
                  Enrollment closes February 15, 2025. Limited seats available.
                </p>
              </form>
            </Form>
          </div>

        </div>
      </div>
    </section>
  );
}
