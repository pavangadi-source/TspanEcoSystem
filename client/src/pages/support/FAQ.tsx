import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ChevronDown, Search } from "lucide-react";
import PageLayout from "@/components/PageLayout";

const faqCategories = [
  {
    category: "Admissions",
    questions: [
      { q: "What are the eligibility requirements for degree programs?", a: "Eligibility varies by program. Generally, a bachelor's degree in CS/IT or related field is required. See individual program pages for specific requirements." },
      { q: "How do I apply for admission?", a: "Visit our Admissions page to start your application. You'll need to submit your academic transcripts, statement of purpose, and complete our online application form." },
      { q: "Are scholarships available?", a: "Yes, we offer merit-based scholarships covering up to 50% of tuition. Need-based financial aid is also available." },
    ]
  },
  {
    category: "Courses & Learning",
    questions: [
      { q: "How long do I have access to course materials?", a: "You have lifetime access to all course materials for programs you've enrolled in, including future updates." },
      { q: "Are the labs available 24/7?", a: "Yes, our virtual labs and TCPWave sandbox environments are available 24/7 for enrolled students." },
      { q: "Can I get a certificate after completing a course?", a: "Yes, you'll receive a digital certificate upon successful completion of any course or program." },
    ]
  },
  {
    category: "Payments & Billing",
    questions: [
      { q: "What payment methods do you accept?", a: "We accept all major credit/debit cards, net banking, UPI, and international payments via Stripe." },
      { q: "Is there an EMI option?", a: "Yes, EMI options are available for courses above ₹20,000. We partner with major banks for no-cost EMI." },
      { q: "What is your refund policy?", a: "Refunds are available within 14 days if you've accessed less than 20% of course content." },
    ]
  },
  {
    category: "Technical Support",
    questions: [
      { q: "I can't access my lab environment. What should I do?", a: "First, try clearing your browser cache. If the issue persists, contact support with your lab ID and error message." },
      { q: "What browsers are supported?", a: "We recommend Chrome, Firefox, or Edge. Safari is supported but some lab features may be limited." },
      { q: "How do I reset my password?", a: "Click 'Forgot Password' on the login page. You'll receive a reset link via email." },
    ]
  },
];

export default function FAQ() {
  const [searchQuery, setSearchQuery] = useState("");
  const [openItems, setOpenItems] = useState<string[]>([]);

  const toggleItem = (id: string) => {
    setOpenItems(prev => 
      prev.includes(id) ? prev.filter(i => i !== id) : [...prev, id]
    );
  };

  return (
    <PageLayout
      title="Frequently Asked Questions"
      subtitle="Find answers to common questions about T-SPAN University"
      badge="FAQ"
      breadcrumbs={[{ label: "FAQ" }]}
    >
      <section className="py-20">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="max-w-2xl mx-auto mb-12"
          >
            <div className="relative">
              <Search className="absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 text-slate-500" />
              <input
                type="text"
                placeholder="Search FAQs..."
                className="w-full pl-12 pr-4 py-4 bg-slate-900 border border-slate-800 rounded-xl text-white focus:outline-none focus:border-primary transition-colors"
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                data-testid="input-search-faq"
              />
            </div>
          </motion.div>

          <div className="max-w-4xl mx-auto space-y-8">
            {faqCategories.map((category, catIdx) => (
              <motion.div
                key={catIdx}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: catIdx * 0.1 }}
              >
                <h2 className="text-xl font-display font-bold text-white mb-4">{category.category}</h2>
                <div className="space-y-3">
                  {category.questions.map((item, qIdx) => {
                    const itemId = `${catIdx}-${qIdx}`;
                    const isOpen = openItems.includes(itemId);
                    
                    return (
                      <div 
                        key={qIdx}
                        className="bg-slate-900/50 border border-slate-800 rounded-xl overflow-hidden"
                      >
                        <button
                          onClick={() => toggleItem(itemId)}
                          className="w-full flex items-center justify-between p-4 text-left hover:bg-slate-800/50 transition-colors"
                          data-testid={`faq-item-${itemId}`}
                        >
                          <span className="text-white font-medium pr-4">{item.q}</span>
                          <ChevronDown className={`w-5 h-5 text-slate-500 flex-shrink-0 transition-transform ${isOpen ? 'rotate-180' : ''}`} />
                        </button>
                        <AnimatePresence>
                          {isOpen && (
                            <motion.div
                              initial={{ height: 0, opacity: 0 }}
                              animate={{ height: "auto", opacity: 1 }}
                              exit={{ height: 0, opacity: 0 }}
                              className="overflow-hidden"
                            >
                              <div className="p-4 pt-0 text-slate-400 border-t border-slate-800">
                                {item.a}
                              </div>
                            </motion.div>
                          )}
                        </AnimatePresence>
                      </div>
                    );
                  })}
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>
    </PageLayout>
  );
}
