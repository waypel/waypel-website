"use client";

import { motion, Variants } from "framer-motion";

const features = [
  {
    icon: "🎬",
    title: "Video Uploading",
    description: "Upload high-quality educational videos, shorts, and quick tutorials.",
  },
  {
    icon: "🎯",
    title: "Quiz Playing",
    description: "Test and solidify your knowledge on a wide variety of topics.",
  },
  {
    icon: "🏆",
    title: "Coquiz",
    description: "Collaborate with other creators, share challenges, and earn together.",
  },
  {
    icon: "👥",
    title: "Community",
    description: "Engage with peers, share study tips, and join discussions.",
  },
  {
    icon: "💰",
    title: "Earn Rewards",
    description: "Earn Waypel coins as you learn and redeem them for rewards.",
  },
  {
    icon: "⚔️",
    title: "Join Battles",
    description: "Challenge your friends in real-time quiz battles to test speed and accuracy.",
  },
];

const containerVariants: Variants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.08,
    },
  },
};

const cardVariants: Variants = {
  hidden: { opacity: 0, y: 30 },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      type: "spring",
      stiffness: 100,
      damping: 15,
    },
  },
};


export default function Features() {
  return (
    <section id="features" className="py-24 px-4 sm:px-6 bg-linear-to-b from-[#1C270F] to-[#121c05] relative overflow-hidden">
      {/* Decorative glows */}
      <div className="absolute right-0 top-0 w-96 h-96 bg-[#8BC34A]/5 rounded-full blur-3xl -z-10" />
      <div className="absolute left-0 bottom-0 w-[400px] h-[400px] bg-emerald-950/20 rounded-full blur-3xl -z-10" />

      <div className="max-w-6xl mx-auto">
        <h2 className="text-4xl sm:text-6xl font-black text-center text-white mb-16 tracking-tight">
          App Features
        </h2>

        <motion.div 
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6"
        >
          {features.map((feature) => (
            <motion.article
              key={feature.title}
              variants={cardVariants}
              whileHover={{ 
                y: -8, 
                borderColor: "rgba(139, 195, 74, 0.4)", 
                boxShadow: "0 20px 40px -15px rgba(0,0,0,0.3)"
              }}
              className="bg-[#1c2a0f]/60 backdrop-blur-xs border border-white/5 rounded-3xl p-8 flex flex-col gap-4 hover:bg-[#203112] transition-colors duration-300 group cursor-default"
            >
              {/* Icon wrapper with hover rotate */}
              <motion.div 
                whileHover={{ rotate: 10, scale: 1.1 }}
                className="w-12 h-12 bg-[#2d5a27] rounded-2xl flex items-center justify-center text-2xl shadow-inner shadow-black/10 shrink-0" 
                aria-hidden="true"
              >
                {feature.icon}
              </motion.div>
              
              <div className="flex flex-col gap-2">
                <h3 className="font-bold text-white text-lg tracking-tight group-hover:text-[#8BC34A] transition-colors">
                  {feature.title}
                </h3>
                <p className="text-sm text-gray-400 leading-relaxed font-medium">
                  {feature.description}
                </p>
              </div>
            </motion.article>
          ))}
        </motion.div>
      </div>
    </section>
  );
}

