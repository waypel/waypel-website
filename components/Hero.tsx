"use client";

import Image from "next/image";
import { motion, Variants } from "framer-motion";

const containerVariants: Variants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.12,
    },
  },
};

const itemVariants: Variants = {
  hidden: { opacity: 0, y: 30 },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      type: "spring",
      stiffness: 100,
      damping: 18,
    },
  },
};


export default function Hero() {
  return (
    <section className="relative pt-36 pb-20 px-4 sm:px-6 bg-white overflow-hidden text-center">
      {/* Ambient background glows */}
      <div 
        className="absolute top-20 left-1/2 -translate-x-1/2 w-[600px] h-[300px] bg-gradient-to-tr from-[#8BC34A]/10 to-emerald-200/10 rounded-full blur-3xl -z-10" 
        style={{ pointerEvents: 'none' }}
      />
      <div 
        className="absolute top-80 left-[10%] w-[300px] h-[300px] bg-lime-100/20 rounded-full blur-3xl -z-10 animate-pulse" 
        style={{ pointerEvents: 'none', animationDuration: '8s' }}
      />
      <div 
        className="absolute top-60 right-[10%] w-[250px] h-[250px] bg-[#8BC34A]/5 rounded-full blur-3xl -z-10 animate-pulse" 
        style={{ pointerEvents: 'none', animationDuration: '6s' }}
      />

      <motion.div 
        variants={containerVariants}
        initial="hidden"
        animate="visible"
        className="max-w-4xl mx-auto relative z-10"
      >
        {/* Animated Heading */}
        <motion.h1 
          variants={itemVariants}
          className="text-4xl sm:text-7xl lg:text-8xl font-black text-black leading-none mb-6 tracking-tight"
        >
          The pathway to <br />
          <span className="text-[#8BC34A] bg-clip-text">learn and earn</span>
        </motion.h1>

        {/* Animated Subtitle */}
        <motion.p 
          variants={itemVariants}
          className="text-gray-500 text-base sm:text-xl max-w-2xl mx-auto mb-10 leading-relaxed font-medium"
        >
          Waypel combines quizzes, short videos, and rewards into one engaging
          experience where users learn new things, compete with friends, and
          earn coins.
        </motion.p>

        {/* CTA Buttons */}
        <motion.div 
          variants={itemVariants}
          className="flex flex-col sm:flex-row items-center justify-center gap-4 mb-10"
        >
          <motion.a
            href="https://play.google.com/store/apps/details?id=com.anonymous.wapelmobile"
            whileHover={{ scale: 1.03, boxShadow: "0 10px 25px -5px rgba(139, 195, 74, 0.4)" }}
            whileTap={{ scale: 0.98 }}
            className="flex items-center justify-center gap-2.5 text-black text-sm font-semibold rounded-xl bg-[#8BC34A] transition-all duration-300 w-[250px] h-[52px]"
          >
            <svg className="w-5 h-5 shrink-0" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
              <path d="M3 20.5v-17c0-.83 1-.9 1.27-.28L12 12l-7.73 8.78C4 21.4 3 21.33 3 20.5zM13.73 13.73l2.08 2.08-9.4 5.44 7.32-7.52zM20.23 11.3c.6.34.6 1.06 0 1.4l-2.82 1.63-2.3-2.33 2.3-2.33 2.82 1.63zM6.41 4.75l9.4 5.44-2.08 2.08-7.32-7.52z" />
            </svg>
            Download for Android
          </motion.a>
          
          <motion.a
            href="https://apps.apple.com/es/app/waypel/id6755714975"
            whileHover={{ scale: 1.03, boxShadow: "0 10px 25px -5px rgba(139, 195, 74, 0.4)" }}
            whileTap={{ scale: 0.98 }}
            className="flex items-center justify-center gap-2.5 text-black text-sm font-semibold rounded-xl bg-[#8BC34A] transition-all duration-300 w-[240px] h-[52px]"
          >
            <svg className="w-5 h-5 shrink-0" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
              <path d="M18.71 19.5c-.83 1.24-1.71 2.45-3.05 2.47-1.34.03-1.77-.79-3.29-.79-1.53 0-2 .77-3.27.82-1.31.05-2.3-1.32-3.14-2.53C4.25 17 2.94 12.45 4.7 9.39c.87-1.52 2.43-2.48 4.12-2.51 1.28-.02 2.5.87 3.29.87.78 0 2.26-1.07 3.8-.91.65.03 2.47.26 3.64 1.98-.09.06-2.17 1.28-2.15 3.81.03 3.02 2.65 4.03 2.68 4.04-.03.07-.42 1.44-1.38 2.83M13 3.5c.73-.83 1.94-1.46 2.94-1.5.13 1.17-.34 2.35-1.04 3.19-.69.85-1.83 1.51-2.95 1.42-.15-1.15.41-2.35 1.05-3.11z" />
            </svg>
            Download for iOS
          </motion.a>
        </motion.div>

        {/* Trust Badge */}
        <motion.div 
          variants={itemVariants}
          className="flex items-center justify-center gap-3 text-gray-500 mb-16"
        >
          <div className="flex -space-x-3.5">
            {["/badge1.png", "/badge2.png", "/badge3.png"].map((src, i) => (
              <motion.div
                key={i}
                whileHover={{ y: -5, scale: 1.1, zIndex: 20 }}
                className="relative cursor-pointer transition-all"
              >
                <Image
                  src={src}
                  alt={`Badge ${i + 1}`}
                  width={42}
                  height={42}
                  className="rounded-full border-2 border-white shadow-xs"
                />
              </motion.div>
            ))}
          </div>
          <span className="text-sm sm:text-base font-semibold text-gray-700">Trusted by 500+ users</span>
        </motion.div>

        {/* Floating Phone Mockups */}
        <motion.div 
          variants={itemVariants}
          className="flex items-end justify-center gap-6 mt-8 max-w-4xl mx-auto px-4"
        >
          {/* Phone 1 */}
          <motion.div
            animate={{
              y: [0, -12, 0],
            }}
            transition={{
              duration: 5.5,
              repeat: Infinity,
              ease: "easeInOut",
            }}
            className="w-1/2 max-w-[280px]"
          >
            <Image
              src="/banner-01.png"
              alt="Waypel app screenshot 1"
              width={280}
              height={560}
              sizes="(max-width: 768px) 50vw, 280px"
              className="object-contain drop-shadow-[0_20px_50px_rgba(139,195,74,0.15)] select-none pointer-events-none"
              priority
            />
          </motion.div>

          {/* Phone 2 */}
          <motion.div
            animate={{
              y: [0, -16, 0],
            }}
            transition={{
              duration: 6.5,
              repeat: Infinity,
              ease: "easeInOut",
              delay: 0.4,
            }}
            className="w-1/2 max-w-[280px]"
          >
            <Image
              src="/banner-02.png"
              alt="Waypel app screenshot 2"
              width={280}
              height={560}
              sizes="(max-width: 768px) 50vw, 280px"
              className="object-contain drop-shadow-[0_20px_50px_rgba(139,195,74,0.15)] select-none pointer-events-none"
              priority
            />
          </motion.div>
        </motion.div>
      </motion.div>
    </section>
  );
}

