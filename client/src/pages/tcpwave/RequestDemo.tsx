import { useState } from "react";
import { motion } from "framer-motion";
import { Calendar, Users, Building2, Mail, Phone, CheckCircle, ArrowRight } from "lucide-react";
import PageLayout from "@/components/PageLayout";

const demoFeatures = [
  "Live TCPWave platform walkthrough",
  "Customized to your use case",
  "Technical deep-dive with engineers",
  "Pricing and deployment options",
  "Q&A with product experts",
];

const companyTypes = [
  "Enterprise (1000+ employees)",
  "Mid-Market (100-999 employees)",
  "Small Business (< 100 employees)",
  "Government/Public Sector",
  "Educational Institution",
  "Service Provider/MSP",
];

export default function RequestDemo() {
  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    email: "",
    phone: "",
    company: "",
    companyType: "",
    jobTitle: "",
    message: "",
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log("Demo request submitted:", formData);
  };

  return (
    <PageLayout
      title="Request a Demo"
      subtitle="See TCPWave in action with a personalized demonstration"
      badge="Schedule Demo"
      breadcrumbs={[{ label: "TCPWave", href: "/tcpwave" }, { label: "Request Demo" }]}
    >
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="flex flex-col lg:flex-row gap-12">
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              animate={{ opacity: 1, x: 0 }}
              className="lg:w-1/3"
            >
              <h2 className="text-2xl font-display font-bold text-white mb-6">
                What to Expect
              </h2>
              <ul className="space-y-4 mb-8">
                {demoFeatures.map((feature, i) => (
                  <li key={i} className="flex items-center gap-3 text-slate-300">
                    <CheckCircle className="w-5 h-5 text-primary flex-shrink-0" />
                    {feature}
                  </li>
                ))}
              </ul>

              <div className="bg-slate-900/50 border border-slate-800 rounded-xl p-6">
                <Calendar className="w-10 h-10 text-primary mb-4" />
                <h4 className="text-lg font-display font-bold text-white mb-2">Demo Duration</h4>
                <p className="text-slate-400 text-sm mb-4">
                  Typical demos run 45-60 minutes. We'll customize the agenda based on your specific interests and use cases.
                </p>
                <div className="flex items-center gap-2 text-slate-500 text-sm">
                  <Users className="w-4 h-4" />
                  <span>Include your team members</span>
                </div>
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 30 }}
              animate={{ opacity: 1, x: 0 }}
              className="lg:w-2/3"
            >
              <div className="bg-slate-900/50 border border-slate-800 rounded-2xl p-8">
                <form onSubmit={handleSubmit} className="space-y-6">
                  <div className="grid md:grid-cols-2 gap-6">
                    <div>
                      <label className="block text-sm font-medium text-slate-300 mb-2">First Name *</label>
                      <input
                        type="text"
                        required
                        className="w-full px-4 py-3 bg-slate-950 border border-slate-700 rounded-lg text-white focus:outline-none focus:border-primary transition-colors"
                        value={formData.firstName}
                        onChange={(e) => setFormData({...formData, firstName: e.target.value})}
                        data-testid="input-first-name"
                      />
                    </div>
                    <div>
                      <label className="block text-sm font-medium text-slate-300 mb-2">Last Name *</label>
                      <input
                        type="text"
                        required
                        className="w-full px-4 py-3 bg-slate-950 border border-slate-700 rounded-lg text-white focus:outline-none focus:border-primary transition-colors"
                        value={formData.lastName}
                        onChange={(e) => setFormData({...formData, lastName: e.target.value})}
                        data-testid="input-last-name"
                      />
                    </div>
                  </div>

                  <div className="grid md:grid-cols-2 gap-6">
                    <div>
                      <label className="block text-sm font-medium text-slate-300 mb-2">Work Email *</label>
                      <input
                        type="email"
                        required
                        className="w-full px-4 py-3 bg-slate-950 border border-slate-700 rounded-lg text-white focus:outline-none focus:border-primary transition-colors"
                        value={formData.email}
                        onChange={(e) => setFormData({...formData, email: e.target.value})}
                        data-testid="input-email"
                      />
                    </div>
                    <div>
                      <label className="block text-sm font-medium text-slate-300 mb-2">Phone</label>
                      <input
                        type="tel"
                        className="w-full px-4 py-3 bg-slate-950 border border-slate-700 rounded-lg text-white focus:outline-none focus:border-primary transition-colors"
                        value={formData.phone}
                        onChange={(e) => setFormData({...formData, phone: e.target.value})}
                        data-testid="input-phone"
                      />
                    </div>
                  </div>

                  <div className="grid md:grid-cols-2 gap-6">
                    <div>
                      <label className="block text-sm font-medium text-slate-300 mb-2">Company *</label>
                      <input
                        type="text"
                        required
                        className="w-full px-4 py-3 bg-slate-950 border border-slate-700 rounded-lg text-white focus:outline-none focus:border-primary transition-colors"
                        value={formData.company}
                        onChange={(e) => setFormData({...formData, company: e.target.value})}
                        data-testid="input-company"
                      />
                    </div>
                    <div>
                      <label className="block text-sm font-medium text-slate-300 mb-2">Job Title</label>
                      <input
                        type="text"
                        className="w-full px-4 py-3 bg-slate-950 border border-slate-700 rounded-lg text-white focus:outline-none focus:border-primary transition-colors"
                        value={formData.jobTitle}
                        onChange={(e) => setFormData({...formData, jobTitle: e.target.value})}
                        data-testid="input-job-title"
                      />
                    </div>
                  </div>

                  <div>
                    <label className="block text-sm font-medium text-slate-300 mb-2">Company Type *</label>
                    <select
                      required
                      className="w-full px-4 py-3 bg-slate-950 border border-slate-700 rounded-lg text-white focus:outline-none focus:border-primary transition-colors"
                      value={formData.companyType}
                      onChange={(e) => setFormData({...formData, companyType: e.target.value})}
                      data-testid="select-company-type"
                    >
                      <option value="">Select company type</option>
                      {companyTypes.map((type, i) => (
                        <option key={i} value={type}>{type}</option>
                      ))}
                    </select>
                  </div>

                  <div>
                    <label className="block text-sm font-medium text-slate-300 mb-2">What would you like to see in the demo?</label>
                    <textarea
                      rows={4}
                      className="w-full px-4 py-3 bg-slate-950 border border-slate-700 rounded-lg text-white focus:outline-none focus:border-primary transition-colors"
                      value={formData.message}
                      onChange={(e) => setFormData({...formData, message: e.target.value})}
                      placeholder="Tell us about your current DDI challenges, specific features you'd like to see, or use cases..."
                      data-testid="textarea-message"
                    />
                  </div>

                  <button
                    type="submit"
                    className="w-full px-6 py-4 bg-primary text-slate-950 font-bold rounded-lg hover:bg-primary/90 transition-colors flex items-center justify-center gap-2"
                    data-testid="button-submit-demo"
                  >
                    Request Demo
                    <ArrowRight className="w-5 h-5" />
                  </button>
                </form>
              </div>
            </motion.div>
          </div>
        </div>
      </section>
    </PageLayout>
  );
}
