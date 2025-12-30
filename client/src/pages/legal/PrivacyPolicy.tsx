import { motion } from "framer-motion";
import PageLayout from "@/components/PageLayout";

export default function PrivacyPolicy() {
  return (
    <PageLayout
      title="Privacy Policy"
      subtitle="How we collect, use, and protect your personal information"
      badge="Legal"
      breadcrumbs={[{ label: "Privacy Policy" }]}
    >
      <section className="py-20">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            className="max-w-4xl mx-auto prose prose-invert"
          >
            <div className="bg-slate-900/50 border border-slate-800 rounded-2xl p-8 md:p-12 space-y-8">
              <div>
                <p className="text-slate-400 text-sm mb-8">Last Updated: December 29, 2024</p>
                
                <h2 className="text-2xl font-display font-bold text-white mb-4">1. Introduction</h2>
                <p className="text-slate-300 leading-relaxed mb-6">
                  T-SPAN University ("we," "our," or "us") is committed to protecting your privacy. This Privacy Policy explains how we collect, use, disclose, and safeguard your information when you visit our website and use our services.
                </p>
              </div>

              <div>
                <h2 className="text-2xl font-display font-bold text-white mb-4">2. Information We Collect</h2>
                <p className="text-slate-300 leading-relaxed mb-4">We collect information you provide directly, including:</p>
                <ul className="list-disc list-inside text-slate-300 space-y-2 mb-6">
                  <li>Name, email address, phone number</li>
                  <li>Educational and professional background</li>
                  <li>Payment information for course enrollments</li>
                  <li>KYC documents for identity verification</li>
                  <li>Course progress and assessment data</li>
                </ul>
              </div>

              <div>
                <h2 className="text-2xl font-display font-bold text-white mb-4">3. How We Use Your Information</h2>
                <ul className="list-disc list-inside text-slate-300 space-y-2 mb-6">
                  <li>Provide and maintain our educational services</li>
                  <li>Process enrollments and payments</li>
                  <li>Send administrative and promotional communications</li>
                  <li>Improve our courses and user experience</li>
                  <li>Comply with legal obligations</li>
                </ul>
              </div>

              <div>
                <h2 className="text-2xl font-display font-bold text-white mb-4">4. Data Security</h2>
                <p className="text-slate-300 leading-relaxed mb-6">
                  We implement industry-standard security measures to protect your personal information. All data is encrypted in transit and at rest. Access to personal data is restricted to authorized personnel only.
                </p>
              </div>

              <div>
                <h2 className="text-2xl font-display font-bold text-white mb-4">5. Data Retention</h2>
                <p className="text-slate-300 leading-relaxed mb-6">
                  We retain your information for as long as necessary to provide our services and comply with legal obligations. You may request deletion of your data by contacting privacy@tspan.edu.
                </p>
              </div>

              <div>
                <h2 className="text-2xl font-display font-bold text-white mb-4">6. Your Rights</h2>
                <p className="text-slate-300 leading-relaxed mb-4">Under applicable data protection laws, you have the right to:</p>
                <ul className="list-disc list-inside text-slate-300 space-y-2 mb-6">
                  <li>Access your personal data</li>
                  <li>Correct inaccurate data</li>
                  <li>Request deletion of your data</li>
                  <li>Object to processing of your data</li>
                  <li>Data portability</li>
                </ul>
              </div>

              <div>
                <h2 className="text-2xl font-display font-bold text-white mb-4">7. Contact Us</h2>
                <p className="text-slate-300 leading-relaxed">
                  For questions about this Privacy Policy, contact us at:<br />
                  Email: privacy@tspan.edu<br />
                  Address: T-SPAN University, HITEC City, Hyderabad, Telangana 500081
                </p>
              </div>
            </div>
          </motion.div>
        </div>
      </section>
    </PageLayout>
  );
}
