import { motion } from "framer-motion";
import PageLayout from "@/components/PageLayout";

export default function TermsOfService() {
  return (
    <PageLayout
      title="Terms of Service"
      subtitle="Terms and conditions for using T-SPAN University services"
      badge="Legal"
      breadcrumbs={[{ label: "Terms of Service" }]}
    >
      <section className="py-20">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            className="max-w-4xl mx-auto"
          >
            <div className="bg-slate-900/50 border border-slate-800 rounded-2xl p-8 md:p-12 space-y-8">
              <p className="text-slate-400 text-sm">Last Updated: December 29, 2024</p>
              
              <div>
                <h2 className="text-2xl font-display font-bold text-white mb-4">1. Acceptance of Terms</h2>
                <p className="text-slate-300 leading-relaxed">
                  By accessing and using T-SPAN University's website and services, you agree to be bound by these Terms of Service. If you do not agree to these terms, please do not use our services.
                </p>
              </div>

              <div>
                <h2 className="text-2xl font-display font-bold text-white mb-4">2. Services</h2>
                <p className="text-slate-300 leading-relaxed">
                  T-SPAN University provides cybersecurity education, training programs, certifications, and related services. Access to certain services requires enrollment and payment.
                </p>
              </div>

              <div>
                <h2 className="text-2xl font-display font-bold text-white mb-4">3. User Accounts</h2>
                <p className="text-slate-300 leading-relaxed mb-4">
                  You are responsible for maintaining the confidentiality of your account credentials and for all activities under your account. You agree to:
                </p>
                <ul className="list-disc list-inside text-slate-300 space-y-2">
                  <li>Provide accurate and complete information</li>
                  <li>Notify us immediately of any unauthorized access</li>
                  <li>Not share your account with others</li>
                </ul>
              </div>

              <div>
                <h2 className="text-2xl font-display font-bold text-white mb-4">4. Payment and Refunds</h2>
                <p className="text-slate-300 leading-relaxed">
                  Course fees are due at the time of enrollment. Refunds are available within 14 days of purchase if you have not accessed more than 20% of the course content. Enterprise and custom training agreements have separate terms.
                </p>
              </div>

              <div>
                <h2 className="text-2xl font-display font-bold text-white mb-4">5. Intellectual Property</h2>
                <p className="text-slate-300 leading-relaxed">
                  All course content, materials, and intellectual property belong to T-SPAN University. You may not reproduce, distribute, or create derivative works without our written permission.
                </p>
              </div>

              <div>
                <h2 className="text-2xl font-display font-bold text-white mb-4">6. Code of Conduct</h2>
                <p className="text-slate-300 leading-relaxed mb-4">
                  Students must adhere to our academic integrity policy. Prohibited activities include:
                </p>
                <ul className="list-disc list-inside text-slate-300 space-y-2">
                  <li>Sharing course materials or credentials</li>
                  <li>Plagiarism or cheating on assessments</li>
                  <li>Using learned skills for malicious purposes</li>
                  <li>Harassment of other students or faculty</li>
                </ul>
              </div>

              <div>
                <h2 className="text-2xl font-display font-bold text-white mb-4">7. Limitation of Liability</h2>
                <p className="text-slate-300 leading-relaxed">
                  T-SPAN University is not liable for any indirect, incidental, or consequential damages arising from your use of our services. Our total liability is limited to the amount you paid for the specific service.
                </p>
              </div>

              <div>
                <h2 className="text-2xl font-display font-bold text-white mb-4">8. Governing Law</h2>
                <p className="text-slate-300 leading-relaxed">
                  These terms are governed by the laws of India. Any disputes shall be resolved in the courts of Hyderabad, Telangana.
                </p>
              </div>
            </div>
          </motion.div>
        </div>
      </section>
    </PageLayout>
  );
}
