import React, { useState } from 'react';
import { ChevronDown } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';

export function FAQAccordion() {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  const faqs = [
    {
      question: "How long does the visa application process take?",
      answer: "The visa processing time varies by country. Typically, student visas take 2-8 weeks to process. We recommend applying at least 3 months before your intended start date to account for any delays."
    },
    {
      question: "Do I need IELTS or TOEFL for all universities?",
      answer: "Not always. While most English-speaking universities require proof of English proficiency, some may waive this requirement if you've completed previous education in English. We'll help you identify which universities match your profile."
    },
    {
      question: "What are the costs involved in studying abroad?",
      answer: "Costs vary significantly by country and institution. Beyond tuition fees, you'll need to budget for accommodation, living expenses, health insurance, and travel. We provide detailed cost breakdowns and help you explore scholarship opportunities."
    },
    {
      question: "Can I work while studying?",
      answer: "Most countries allow international students to work part-time (typically 20 hours/week during term). Some countries like Canada and Australia offer post-study work permits. We'll guide you through the work regulations for your chosen destination."
    },
    {
      question: "What documents do I need to apply?",
      answer: "Common documents include academic transcripts, passport, proof of English proficiency, statement of purpose, letters of recommendation, and financial statements. We provide a complete checklist tailored to your chosen universities."
    }
  ];

  return (
    <div className="space-y-4">
      {faqs.map((faq, index) => (
        <div key={index} className="bg-[#1e3a47]/60 backdrop-blur-lg rounded-xl border border-teal-500/10 overflow-hidden">
          <button
            onClick={() => setOpenIndex(openIndex === index ? null : index)}
            className="w-full px-6 py-4 flex items-center justify-between text-left hover:bg-teal-500/5 transition-colors"
          >
            <span className="font-semibold text-black pr-4">{faq.question}</span>
            <motion.div
              animate={{ rotate: openIndex === index ? 180 : 0 }}
              transition={{ duration: 0.3 }}
            >
              <ChevronDown className="w-5 h-5 text-teal-400 flex-shrink-0" />
            </motion.div>
          </button>
          <AnimatePresence>
            {openIndex === index && (
              <motion.div
                initial={{ height: 0, opacity: 0 }}
                animate={{ height: "auto", opacity: 1 }}
                exit={{ height: 0, opacity: 0 }}
                transition={{ duration: 0.3 }}
                className="overflow-hidden"
              >
                <div className="px-6 pb-4 text-gray-400 leading-relaxed">
                  {faq.answer}
                </div>
              </motion.div>
            )}
          </AnimatePresence>
        </div>
      ))}
    </div>
  );
}
