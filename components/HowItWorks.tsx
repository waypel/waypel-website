"use client";

import { useState } from "react";
import Image from "next/image";
import { motion, AnimatePresence, Variants } from "framer-motion";

const creatorsSteps = [
  {
    title: "Download & Create an Account",
    description:
      "Download Waypel from Play Store or App Store, then create your creator account to begin immediately.",
    screen: "Create Account",
    image: "/create-account-01.png",
  },
  {
    title: "Take the Knowledge Test",
    description:
      "Complete the creator knowledge assessment test to verify expertise and maintain educational content quality standards.",
    screen: "Knowledge Test",
    image: "/create-account-02.png",
  },
  {
    title: "Start Creating & Earning",
    description:
      "Upload educational videos, quizzes, and learning materials while earning rewards from learner engagement activities.",
    screen: "Create Game",
    image: "/play-02.png",
  },
];

const learnersSteps = [
  {
    title: "Download & Create an Account",
    description:
      "Download Waypel from Play Store or App Store, then create your creator account to begin immediately.",
    image: "/create-account-01.png",
  },
  {
    title: "Choose Content of Interest",
    description:
      "Browse educational categories or follow creators offering content matching your interests, skills, and personal learning goals.",
    image: "/Rectangle.png",
  },
  {
    title: "Learn, Engage & Grow",
    description:
      "Watch educational videos, complete quizzes, engage consistently, and steadily improve knowledge through interactive learning experiences.",
    image: "/play-01.png",
  },
];

const cardVariants: Variants = {
  hidden: { opacity: 0, y: 30 },
  visible: (i: number) => ({
    opacity: 1,
    y: 0,
    transition: {
      delay: i * 0.1,
      duration: 0.5,
      type: "spring",
      stiffness: 100,
      damping: 15,
    },
  }),
};


function CreatorCard({ image, title, description, index }: { image: string; title: string; description: string; index: number }) {
  return (
    <motion.article
      variants={cardVariants}
      custom={index}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, margin: "-50px" }}
      whileHover={{ y: -8, boxShadow: "0 25px 50px -12px rgba(139, 195, 74, 0.18)", borderColor: "rgba(139, 195, 74, 0.3)" }}
      className="flex flex-col justify-between rounded-3xl overflow-hidden border border-[#8BC34A]/10 bg-[#f0f7e6] h-full shadow-xs transition-colors duration-300"
    >
      <div className="p-8 flex flex-col gap-3">
        <h3 className="text-gray-900 text-xl font-bold tracking-tight">{title}</h3>
        <p className="text-gray-600 text-sm leading-relaxed">{description}</p>
      </div>
      <div className="w-full h-72 relative mt-4">
        <Image src={image} alt={title} fill sizes="(max-width: 768px) 100vw, 33vw" className="object-contain object-bottom" />
      </div>
    </motion.article>
  );
}

function LearnerCard({ image, title, description, index }: { image: string; title: string; description: string; index: number }) {
  return (
    <motion.article
      variants={cardVariants}
      custom={index}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, margin: "-50px" }}
      whileHover={{ y: -8, boxShadow: "0 25px 50px -12px rgba(139, 195, 74, 0.18)", borderColor: "rgba(139, 195, 74, 0.3)" }}
      className="flex flex-col justify-between rounded-3xl overflow-hidden border border-[#8BC34A]/10 bg-[#f0f7e6] h-full shadow-xs transition-colors duration-300"
    >
      <div className="p-8 flex flex-col gap-3">
        <h3 className="text-gray-900 text-xl font-bold tracking-tight">{title}</h3>
        <p className="text-gray-600 text-sm leading-relaxed">{description}</p>
      </div>
      <div className="w-full h-72 relative mt-4">
        <Image src={image} alt={title} fill sizes="(max-width: 768px) 100vw, 33vw" className="object-contain object-bottom" />
      </div>
    </motion.article>
  );
}

export default function HowItWorks() {
  const [tab, setTab] = useState<"creators" | "learners">("creators");

  return (
    <section
      id="how-it-works"
      className="bg-white w-full py-24 px-4 sm:px-6 relative overflow-hidden"
    >
      {/* Decorative Blur Orbs */}
      <div className="absolute -left-20 top-1/2 w-80 h-80 bg-emerald-100/10 rounded-full blur-3xl -z-10" />
      <div className="absolute -right-20 top-1/4 w-80 h-80 bg-[#8BC34A]/5 rounded-full blur-3xl -z-10" />

      <div className="max-w-7xl mx-auto flex flex-col items-center gap-16">
        
        {/* Heading + Toggle */}
        <div className="flex flex-col items-center gap-8 max-w-2xl">
          <h2 className="text-4xl sm:text-6xl font-black text-center text-black tracking-tight leading-none">
            How Waypel works
          </h2>

          {/* Sliding Tab Toggle */}
          <div className="flex bg-[#0c1206] rounded-full p-1.5 relative z-0">
            {(["creators", "learners"] as const).map((t) => (
              <button
                key={t}
                onClick={() => setTab(t)}
                className={`px-6 py-2.5 rounded-full text-sm font-semibold transition-colors duration-250 relative z-10 cursor-pointer ${
                  tab === t
                    ? "text-white"
                    : "text-gray-400 hover:text-white"
                }`}
                aria-pressed={tab === t}
              >
                {tab === t && (
                  <motion.span
                    layoutId="activeTabIndicator"
                    className="absolute inset-0 bg-[#8BC34A] rounded-full -z-10 shadow-md"
                    transition={{ type: "spring", stiffness: 350, damping: 28 }}
                  />
                )}
                For {t.charAt(0).toUpperCase() + t.slice(1)}
              </button>
            ))}
          </div>
        </div>

        {/* Steps Grid with AnimatePresence */}
        <div className="w-full max-w-6xl min-h-[550px]">
          <AnimatePresence mode="wait">
            <motion.div
              key={tab}
              initial={{ opacity: 0, x: tab === "creators" ? -20 : 20 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: tab === "creators" ? 20 : -20 }}
              transition={{ duration: 0.35, ease: "easeInOut" }}
              className="grid grid-cols-1 md:grid-cols-3 gap-6"
            >
              {tab === "creators"
                ? creatorsSteps.map((step, i) => (
                    <CreatorCard 
                      key={`creator-${i}`} 
                      image={step.image} 
                      title={step.title} 
                      description={step.description} 
                      index={i} 
                    />
                  ))
                : learnersSteps.map((step, i) => (
                    <LearnerCard 
                      key={`learner-${i}`} 
                      image={step.image} 
                      title={step.title} 
                      description={step.description} 
                      index={i} 
                    />
                  ))}
            </motion.div>
          </AnimatePresence>
        </div>

      </div>
    </section>
  );
}

