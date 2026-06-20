"use client";

import { motion, Variants } from "framer-motion";
import Image from "next/image";

const testimonials = [
  {
    name: "Michelle K.",
    role: "Marketing Director",
    image: "/Testimony1.png",
    text: "Waypel completely changed how I spend my free time. The quizzes are fun, the videos are engaging, and earning rewards while learning makes the experience even better.",
    stars: 5,
  },
  {
    name: "David H.",
    role: "Youth Pastor",
    image: "/Testimony2.png",
    text: "Waypel combines entertainment, gaming, and education in a very creative way. It feels fresh and different from other platforms.",
    stars: 5,
  },
  {
    name: "Helen C.",
    role: "UI/UX Designer",
    image: "/Testimony3.png",
    text: "The platform encourages creativity while also rewarding users for participation. That balance is what makes Waypel stand out.",
    stars: 5,
  },
];

const containerVariants: Variants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.1,
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


export default function Testimonials() {
  return (
    <section className="py-24 px-4 sm:px-6 bg-gradient-to-b from-white via-[#8BC34A]/5 to-[#8BC34A]/10 relative overflow-hidden">
      {/* Decorative Blur Orb */}
      <div className="absolute left-1/2 -translate-x-1/2 bottom-[-100px] w-96 h-96 bg-[#8BC34A]/10 rounded-full blur-3xl -z-10" />

      <div className="max-w-6xl mx-auto">
        <motion.h2 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="text-4xl sm:text-6xl font-black text-center text-gray-900 mb-16 tracking-tight"
        >
          Testimonials
        </motion.h2>

        <motion.div 
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          className="grid grid-cols-1 md:grid-cols-3 gap-8"
        >
          {testimonials.map((t) => (
            <motion.article
              key={t.name}
              variants={cardVariants}
              whileHover={{ 
                y: -10, 
                boxShadow: "0 25px 50px -15px rgba(139,195,74,0.15)",
                borderColor: "rgba(139,195,74,0.2)"
              }}
              className="bg-white border border-gray-100 rounded-3xl p-8 shadow-xs flex flex-col gap-6 transition-all duration-300 cursor-default"
            >
              {/* User details */}
              <div className="flex items-center gap-4">
                <div className="relative w-12 h-12 rounded-full overflow-hidden border-2 border-[#8BC34A]/20 shadow-xs shrink-0">
                  <Image
                    src={t.image}
                    alt={`${t.name} avatar`}
                    fill
                    className="object-cover"
                  />
                </div>
                <div>
                  <h3 className="font-bold text-gray-900 text-base tracking-tight">{t.name}</h3>
                  <p className="text-xs font-semibold text-gray-400">{t.role}</p>
                </div>
              </div>

              {/* Testimony content */}
              <p className="text-gray-600 text-sm leading-relaxed font-medium flex-1 italic">
                &ldquo;{t.text}&rdquo;
              </p>

              {/* Star ratings */}
              <div className="flex items-center gap-1">
                {Array.from({ length: t.stars }).map((_, index) => (
                  <motion.span 
                    key={index} 
                    className="text-yellow-400 text-lg"
                    whileHover={{ scale: 1.2, rotate: 15 }}
                    transition={{ type: "spring", stiffness: 300 }}
                  >
                    ★
                  </motion.span>
                ))}
              </div>
            </motion.article>
          ))}
        </motion.div>
      </div>
    </section>
  );
}

