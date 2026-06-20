"use client";

import Image from "next/image";
import { motion } from "framer-motion";

export default function AboutUs() {
  return (
    <section id="about" className="py-24 px-4 sm:px-6 bg-white relative overflow-hidden">
      {/* Decorative ambient background orb */}
      <div className="absolute right-[-100px] top-[20%] w-[350px] h-[350px] bg-emerald-50/15 rounded-full blur-3xl -z-10" />

      <div className="max-w-6xl mx-auto">
        <motion.h2 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="text-4xl sm:text-6xl font-black text-center text-gray-900 mb-16 tracking-tight"
        >
          About Us
        </motion.h2>

        <div className="flex flex-col md:flex-row items-center gap-12 lg:gap-16">
          
          {/* Text reveal */}
          <motion.div 
            initial={{ opacity: 0, x: -40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ type: "spring", stiffness: 80, damping: 15 }}
            className="flex-1 flex flex-col gap-5"
          >
            <h3 className="text-3xl sm:text-4xl font-extrabold text-gray-900 leading-tight tracking-tight">
              We integrate fun into <span className="text-[#8BC34A]">Education</span>
            </h3>
            <p className="text-gray-600 leading-relaxed text-base font-medium">
              Waypel is an innovative educational platform designed to make
              learning engaging, rewarding, and accessible for everyone. Users
              can explore educational videos, quizzes, and learning-based games
              while gaining valuable knowledge through interactive experiences.
            </p>
            <p className="text-gray-600 leading-relaxed text-base font-medium">
              The platform also empowers educators and creators to share impactful
              content, grow learning communities, and inspire learners worldwide.
              Waypel combines education, entertainment, and technology to create
              a fun, practical, and motivating digital learning experience.
            </p>
          </motion.div>

          {/* Image hover reveal */}
          <motion.div 
            initial={{ opacity: 0, x: 40, scale: 0.95 }}
            whileInView={{ opacity: 1, x: 0, scale: 1 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ type: "spring", stiffness: 80, damping: 15 }}
            whileHover={{ scale: 1.02, y: -4 }}
            className="flex-1 w-full cursor-pointer"
          >
            <div className="rounded-3xl overflow-hidden aspect-4/3 relative border border-gray-100 shadow-[0_20px_50px_rgba(0,0,0,0.06)] hover:shadow-[0_25px_60px_rgba(139,195,74,0.12)] transition-shadow duration-500">
              <Image 
                src="/about-us.png" 
                alt="Student learning on Waypel" 
                fill 
                className="object-cover transition-transform duration-700 hover:scale-105" 
                sizes="(max-width: 768px) 100vw, 50vw" 
              />
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}

