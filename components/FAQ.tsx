"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

const faqs = [
  { 
    q: "What is Waypel?", 
    a: "Waypel is an interactive educational platform that combines bite-sized educational videos, quiz playing, and rewards to make learning fun, social, and motivating." 
  },
  { 
    q: "How do I create an account?", 
    a: "Download the Waypel app from the Google Play Store or Apple App Store, open it, and follow the steps to sign up. You can register as either a Creator or a Learner." 
  },
  { 
    q: "How do creators earn on Waypel?",  
    a: "Creators earn rewards and Waypel coins based on the views, engagement, and quiz completions their educational materials receive from the community." 
  },
  { 
    q: "What type of content is available on Waypel?", 
    a: "Waypel offers short videos, study cards, and quizzes across multiple categories, including technology, science, languages, finance, history, and life skills." 
  },
  { 
    q: "Can learners earn rewards on Waypel?", 
    a: "Yes! Learners earn coins by watching educational content, scoring well in quizzes, keeping up daily learning streaks, and winning quiz battles." 
  },
  { 
    q: "Why is there a creator knowledge test?", 
    a: "To maintain high standards of quality and accuracy, all creators must pass a quick verification test in their chosen topics before publishing quizzes and lessons." 
  },
];

export default function FAQ() {
  const [open, setOpen] = useState<number | null>(0);

  return (
    <section className="py-24 px-4 sm:px-6 bg-[#111a08] relative overflow-hidden">
      {/* Large decorative FAQ Watermark */}
      <div 
        className="absolute right-[-100px] top-1/2 -translate-y-1/2 select-none pointer-events-none text-right hidden lg:block opacity-[0.03]"
        aria-hidden="true"
      >
        <span className="text-[280px] font-black text-[#8BC34A] leading-none tracking-tighter">
          FAQ
        </span>
      </div>

      <div className="max-w-4xl mx-auto relative z-10">
        <motion.h2 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="text-4xl sm:text-6xl font-black text-center text-white mb-16 tracking-tight leading-none"
        >
          Frequently Asked <br /> Questions
        </motion.h2>

        <div className="space-y-4 max-w-3xl mx-auto" role="list">
          {faqs.map((faq, i) => (
            <motion.div 
              key={i} 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.05 }}
              className="bg-[#1c2a0f]/50 border border-white/5 rounded-2xl overflow-hidden transition-colors duration-300 hover:bg-[#203112]/60"
              role="listitem"
            >
              <button
                className="w-full flex items-center justify-between px-6 py-5 text-left text-white font-bold text-base sm:text-lg hover:text-[#8BC34A] transition-colors cursor-pointer focus:outline-none"
                onClick={() => setOpen(open === i ? null : i)}
                aria-expanded={open === i}
              >
                <span>{faq.q}</span>
                <div className="w-8 h-8 rounded-full bg-white/5 flex items-center justify-center shrink-0 ml-4">
                  <motion.svg
                    animate={{ rotate: open === i ? 45 : 0 }}
                    transition={{ duration: 0.25, ease: "easeOut" }}
                    className="w-4 h-4 text-gray-300"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                    aria-hidden="true"
                  >
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M12 4v16m8-8H4" />
                  </motion.svg>
                </div>
              </button>

              <AnimatePresence initial={false}>
                {open === i && (
                  <motion.div
                    key="content"
                    initial={{ height: 0, opacity: 0 }}
                    animate={{ height: "auto", opacity: 1 }}
                    exit={{ height: 0, opacity: 0 }}
                    transition={{ duration: 0.3, ease: [0.25, 1, 0.5, 1] }}
                    className="overflow-hidden"
                  >
                    <div className="px-6 pb-6 text-sm sm:text-base text-gray-400 leading-relaxed font-medium">
                      {faq.a}
                    </div>
                  </motion.div>
                )}
              </AnimatePresence>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}

