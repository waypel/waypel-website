"use client";

import { useState } from "react";

const faqs = [
   { q: "How do I create an account?", a: "Waypel is an interactive educational platform that combines learning, quizzes, games, and digital experiences to make education engaging and rewarding.", 
   },
  { q: "How do I create an account?", a: "Waypel is an interactive educational platform that combines learning, quizzes, games, and digital experiences to make education engaging and rewarding.", 
   },
  { q: "How are creators paid on Waypel?",  a: "Waypel is an interactive educational platform that combines learning, quizzes, games, and digital experiences to make education engaging and rewarding.", 
  },
  { q: "What type of content is available on Waypel?", a: "Waypel is an interactive educational platform that combines learning, quizzes, games, and digital experiences to make education engaging and rewarding.", 
  },
  { q: "Can learners earn rewards on Waypel?", a: "Waypel is an interactive educational platform that combines learning, quizzes, games, and digital experiences to make education engaging and rewarding.", 
  },
  { q: "Why is there a creator knowledge test?", a: "Waypel is an interactive educational platform that combines learning, quizzes, games, and digital experiences to make education engaging and rewarding.", 
  },
];

export default function FAQ() {
  const [open, setOpen] = useState<number | null>(0);

  return (
    <section className="py-20 px-4 sm:px-6 bg-[#1A1A1A] relative overflow-hidden">
      {/* Watermark */}
      <span
        className=" rotate-270 deg  absolute right-[-180] top-1/2 -translate-y-1/2 sm:text-[258px] text-bold text-[#8BC34A33] select-none pointer-events-none leading-none"
        aria-hidden="true"
      >
        FAQ
      </span>

      <div className="max-w-3xl mx-auto relative z-10">
        <h2 className="text-3xl sm:text-4xl font-bold text-center text-white mb-12">
          Frequently Asked <br /> Questions
        </h2>

        <div className="space-y-2" role="list">
          {faqs.map((faq, i) => (
            <div key={i} className="bg-[#243824] rounded-xl overflow-hidden" role="listitem">
              <button
                className="w-full flex items-center justify-between px-5 py-4 text-left text-white font-medium text-sm hover:bg-[#2d4a2d] transition-colors"
                onClick={() => setOpen(open === i ? null : i)}
                aria-expanded={open === i}
              >
                <span>{faq.q}</span>
                <svg
                  className={`w-4 h-4 text-gray-400 transition-transform shrink-0 ml-4 ${open === i ? "rotate-45" : ""}`}
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                  aria-hidden="true"
                >
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 4v16m8-8H4" />
                </svg>
              </button>
              {open === i && faq.a && (
                <div className="px-5 pb-4 text-sm text-gray-400 leading-relaxed">
                  {faq.a}
                </div>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
