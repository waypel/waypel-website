'use client';

import React, { useState, useEffect } from 'react';
import Link from 'next/link';
import { motion, AnimatePresence } from 'framer-motion';
import { ChevronUp, Mail, MapPin } from 'lucide-react';
import { Variants } from "framer-motion";

export default function PrivacyPage() {
  const [showBackToTop, setShowBackToTop] = useState(false);
  const [activeSection, setActiveSection] = useState('');

  useEffect(() => {
    const handleScroll = () => {
      setShowBackToTop(window.scrollY > 300);

      const sections = document.querySelectorAll('section[id]');
      sections.forEach((section) => {
        const rect = section.getBoundingClientRect();
        if (rect.top <= 100 && rect.bottom >= 100) {
          setActiveSection(section.id);
        }
      });
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const sectionVariants: Variants = {
    hidden: { opacity: 0, y: 20 },
    visible: (i: number) => ({
      opacity: 1,
      y: 0,
      transition: {
        delay: i * 0.1,
        duration: 0.6,
        ease: [0.22, 1, 0.36, 1],
      },
    }),
  };

  const cardVariants: Variants = {
    hidden: { opacity: 0, x: -20 },
    visible: (i: number) => ({
      opacity: 1,
      x: 0,
      transition: {
        delay: i * 0.05,
        duration: 0.5,
        ease: [0.22, 1, 0.36, 1],
      },
    }),
  };

  const tocSections = [
    { id: 'information-collected', label: 'Information We Collect' },
    { id: 'how-we-use', label: 'How We Use Your Information' },
    { id: 'information-sharing', label: 'Information Sharing' },
    { id: 'data-security', label: 'Data Security' },
    { id: 'your-rights', label: 'Your Rights and Choices' },
    { id: 'contact-us', label: 'Contact Us' },
  ];

  return (
    <div className="min-h-screen bg-linear-to-br from-slate-50 via-white to-slate-50 dark:from-[#0c1206] dark:via-[#0c1206] dark:to-[#111a08] transition-colors duration-300">
      {/* HERO SECTION */}
      <motion.section
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        className="relative overflow-hidden bg-linear-to-br from-slate-900 via-slate-800 to-slate-900 px-4 py-20 sm:px-6 lg:px-8"
      >
        <div className="absolute inset-0 overflow-hidden">
          <div className="absolute -top-40 -right-40 h-80 w-80 rounded-full bg-[#8BC34A]/10 blur-3xl"></div>
          <div className="absolute -bottom-40 -left-40 h-80 w-80 rounded-full bg-[#8BC34A]/10 blur-3xl"></div>
        </div>

        <div className="relative mx-auto max-w-4xl">
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.2, duration: 0.6 }}
          >
            <div className="mb-4 inline-flex items-center rounded-full bg-[#8BC34A]/20 px-4 py-2 backdrop-blur-sm">
              <span className="text-sm font-semibold text-[#8BC34A]">Last Updated</span>
              <span className="ml-2 text-sm font-medium text-slate-200">December 2024</span>
            </div>
          </motion.div>

          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.3, duration: 0.6 }}
            className="mt-6 text-5xl font-bold tracking-tight text-white sm:text-6xl"
          >
            Privacy Policy
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.4, duration: 0.6 }}
            className="mt-4 text-xl text-slate-300"
          >
            We respect your privacy and are committed to protecting your personal information.
          </motion.p>
        </div>
      </motion.section>

      <div className="flex flex-col lg:flex-row">
        {/* STICKY TABLE OF CONTENTS */}
        <aside className="sticky top-20 hidden h-fit w-64 shrink-0 lg:block">
          <motion.nav
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.5, duration: 0.6 }}
            className="m-8 rounded-lg border border-slate-200 dark:border-gray-800 bg-white dark:bg-[#1c2a0f] p-6 shadow-sm"
            aria-label="Table of contents"
          >
            <h2 className="mb-6 text-sm font-bold uppercase tracking-widest text-slate-900 dark:text-white">
              Contents
            </h2>
            <ul className="space-y-3">
              {tocSections.map((section) => (
                <li key={section.id}>
                  <button
                    onClick={() => scrollToSection(section.id)}
                    className={`text-sm transition-colors duration-200 ${
                      activeSection === section.id
                        ? 'font-semibold text-[#8BC34A]'
                        : 'text-slate-600 dark:text-gray-400 hover:text-[#8BC34A]'
                    }`}
                    aria-current={activeSection === section.id ? 'page' : undefined}
                  >
                    {section.label}
                  </button>
                </li>
              ))}
            </ul>
          </motion.nav>
        </aside>

        {/* MOBILE TABLE OF CONTENTS */}
        <motion.nav
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.5, duration: 0.6 }}
          className="lg:hidden mx-4 mb-6 rounded-2xl border border-slate-200 dark:border-gray-800 bg-white dark:bg-[#1c2a0f] p-5 shadow-sm sm:mx-6 sm:p-6"
          aria-label="Mobile table of contents"
        >
          <h2 className="mb-4 text-sm font-bold uppercase tracking-widest text-slate-900 dark:text-white">
            Contents
          </h2>
          <ul className="grid gap-3 sm:grid-cols-2">
            {tocSections.map((section) => (
              <li key={section.id}>
                <button
                  onClick={() => scrollToSection(section.id)}
                  className={`w-full rounded-2xl border px-4 py-3 text-left text-sm transition-all duration-200 ${
                    activeSection === section.id
                      ? 'border-[#8BC34A] bg-[#8BC34A]/10 font-semibold text-[#8BC34A]'
                      : 'border-slate-200 dark:border-gray-700 bg-slate-50 dark:bg-[#111a08] text-slate-700 dark:text-gray-300 hover:border-[#8BC34A]'
                  }`}
                  aria-current={activeSection === section.id ? 'page' : undefined}
                >
                  {section.label}
                </button>
              </li>
            ))}
          </ul>
        </motion.nav>

        {/* MAIN CONTENT */}
        <main className="flex-1 px-4 py-8 sm:px-6 lg:px-8">
          <motion.div className="mx-auto max-w-3xl space-y-12">
            {/* SECTION 1: INFORMATION WE COLLECT */}
            <motion.section
              id="information-collected"
              custom={0}
              variants={sectionVariants}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, margin: '-100px' }}
              className="scroll-mt-20"
            >
              <div className="space-y-6">
                <div>
                  <h2 className="text-3xl font-bold text-slate-900 dark:text-white">Information We Collect</h2>
                  <div className="mt-3 h-1 w-16 bg-linear-to-r from-[#8BC34A] to-transparent"></div>
                </div>

                <p className="text-lg leading-relaxed text-slate-700 dark:text-gray-300">
                  We collect information you provide directly to us, such as when you create an account,
                  use our services, or contact us for support.
                </p>

                <motion.div
                  custom={0}
                  variants={cardVariants}
                  initial="hidden"
                  whileInView="visible"
                  viewport={{ once: true }}
                  className="rounded-lg border border-slate-200 dark:border-gray-800 bg-white dark:bg-[#1c2a0f] p-6 shadow-sm transition-shadow duration-300 hover:shadow-md"
                >
                  <h3 className="mb-4 flex items-center text-xl font-semibold text-slate-900 dark:text-white">
                    <span className="mr-3 inline-flex h-8 w-8 items-center justify-center rounded-full bg-[#8BC34A]/20">
                      <span className="text-sm font-bold text-[#8BC34A]">1</span>
                    </span>
                    Personal Information
                  </h3>
                  <ul className="space-y-2">
                    {[
                      'Email address and username',
                      'Profile information (avatar, bio, preferences)',
                      'Chat messages and content you create',
                      'Quiz responses and game data',
                    ].map((item, i) => (
                      <motion.li
                        key={i}
                        custom={i}
                        variants={cardVariants}
                        initial="hidden"
                        whileInView="visible"
                        viewport={{ once: true }}
                        className="flex items-start text-slate-700 dark:text-gray-300"
                      >
                        <span className="mr-3 mt-1.5 shrink-0 text-[#8BC34A]">•</span>
                        <span>{item}</span>
                      </motion.li>
                    ))}
                  </ul>
                </motion.div>

                <motion.div
                  custom={1}
                  variants={cardVariants}
                  initial="hidden"
                  whileInView="visible"
                  viewport={{ once: true }}
                  className="rounded-lg border border-slate-200 dark:border-gray-800 bg-white dark:bg-[#1c2a0f] p-6 shadow-sm transition-shadow duration-300 hover:shadow-md"
                >
                  <h3 className="mb-4 flex items-center text-xl font-semibold text-slate-900 dark:text-white">
                    <span className="mr-3 inline-flex h-8 w-8 items-center justify-center rounded-full bg-[#8BC34A]/20">
                      <span className="text-sm font-bold text-[#8BC34A]">2</span>
                    </span>
                    Automatically Collected Information
                  </h3>
                  <ul className="space-y-2">
                    {[
                      'Device information and identifiers',
                      'Usage data and app interactions',
                      'Location data (if permitted)',
                      'Performance and crash data',
                    ].map((item, i) => (
                      <motion.li
                        key={i}
                        custom={i + 4}
                        variants={cardVariants}
                        initial="hidden"
                        whileInView="visible"
                        viewport={{ once: true }}
                        className="flex items-start text-slate-700 dark:text-gray-300"
                      >
                        <span className="mr-3 mt-1.5 shrink-0 text-[#8BC34A]">•</span>
                        <span>{item}</span>
                      </motion.li>
                    ))}
                  </ul>
                </motion.div>
              </div>
            </motion.section>

            <div className="border-t border-slate-200 dark:border-gray-800"></div>

            {/* SECTION 2: HOW WE USE YOUR INFORMATION */}
            <motion.section
              id="how-we-use"
              custom={1}
              variants={sectionVariants}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, margin: '-100px' }}
              className="scroll-mt-20"
            >
              <div className="space-y-6">
                <div>
                  <h2 className="text-3xl font-bold text-slate-900 dark:text-white">How We Use Your Information</h2>
                  <div className="mt-3 h-1 w-16 bg-linear-to-r from-[#8BC34A] to-transparent"></div>
                </div>

                <p className="text-lg leading-relaxed text-slate-700 dark:text-gray-300">
                  We use the information we collect to:
                </p>

                <motion.div
                  custom={1}
                  variants={cardVariants}
                  initial="hidden"
                  whileInView="visible"
                  viewport={{ once: true }}
                  className="rounded-lg bg-linear-to-br from-[#8BC34A]/10 to-transparent p-6"
                >
                  <ul className="space-y-3">
                    {[
                      'Provide and improve our services',
                      'Enable communication between users',
                      'Personalize your experience',
                      'Process transactions and rewards',
                      'Send notifications and updates',
                      'Ensure safety and prevent abuse',
                      'Comply with legal obligations',
                    ].map((item, i) => (
                      <motion.li
                        key={i}
                        custom={i}
                        variants={cardVariants}
                        initial="hidden"
                        whileInView="visible"
                        viewport={{ once: true }}
                        className="flex items-center text-slate-700 dark:text-gray-300"
                      >
                        <span className="mr-3 flex h-2 w-2 shrink-0 rounded-full bg-[#8BC34A]"></span>
                        {item}
                      </motion.li>
                    ))}
                  </ul>
                </motion.div>
              </div>
            </motion.section>

            <div className="border-t border-slate-200 dark:border-gray-800"></div>

            {/* SECTION 3: INFORMATION SHARING */}
            <motion.section
              id="information-sharing"
              custom={2}
              variants={sectionVariants}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, margin: '-100px' }}
              className="scroll-mt-20"
            >
              <div className="space-y-6">
                <div>
                  <h2 className="text-3xl font-bold text-slate-900 dark:text-white">Information Sharing</h2>
                  <div className="mt-3 h-1 w-16 bg-linear-to-r from-[#8BC34A] to-transparent"></div>
                </div>

                <p className="text-lg leading-relaxed text-slate-700 dark:text-gray-300">
                  We do not sell your personal information. We may share your information in the following
                  circumstances:
                </p>

                <motion.div
                  custom={2}
                  variants={cardVariants}
                  initial="hidden"
                  whileInView="visible"
                  viewport={{ once: true }}
                  className="rounded-lg border-l-4 border-[#8BC34A] bg-white dark:bg-[#1c2a0f] p-6 shadow-sm"
                >
                  <ul className="space-y-2">
                    {[
                      'With other users as part of the social features',
                      'With service providers who help us operate the app',
                      'When required by law or to protect our rights',
                      'In connection with a business transfer or merger',
                      'With your explicit consent',
                    ].map((item, i) => (
                      <motion.li
                        key={i}
                        custom={i}
                        variants={cardVariants}
                        initial="hidden"
                        whileInView="visible"
                        viewport={{ once: true }}
                        className="flex items-start text-slate-700 dark:text-gray-300"
                      >
                        <span className="mr-3 mt-1.5 shrink-0 text-[#8BC34A]">▸</span>
                        <span>{item}</span>
                      </motion.li>
                    ))}
                  </ul>
                </motion.div>
              </div>
            </motion.section>

            <div className="border-t border-slate-200 dark:border-gray-800"></div>

            {/* SECTION 4: DATA SECURITY */}
            <motion.section
              id="data-security"
              custom={3}
              variants={sectionVariants}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, margin: '-100px' }}
              className="scroll-mt-20"
            >
              <div className="space-y-6">
                <div>
                  <h2 className="text-3xl font-bold text-slate-900 dark:text-white">Data Security</h2>
                  <div className="mt-3 h-1 w-16 bg-linear-to-r from-[#8BC34A] to-transparent"></div>
                </div>

                <motion.div
                  custom={3}
                  variants={cardVariants}
                  initial="hidden"
                  whileInView="visible"
                  viewport={{ once: true }}
                  className="space-y-4 rounded-lg border border-slate-200 dark:border-gray-800 bg-white dark:bg-[#1c2a0f] p-6 shadow-sm"
                >
                  <p className="text-slate-700 dark:text-gray-300">
                    We implement appropriate technical and organizational measures to protect your personal
                    information against unauthorized access, alteration, disclosure, or destruction.
                  </p>
                  <p className="text-slate-700 dark:text-gray-300">
                    However, no method of transmission over the internet or electronic storage is 100% secure,
                    so we cannot guarantee absolute security.
                  </p>
                </motion.div>
              </div>
            </motion.section>

            <div className="border-t border-slate-200 dark:border-gray-800"></div>

            {/* SECTION 5: YOUR RIGHTS AND CHOICES */}
            <motion.section
              id="your-rights"
              custom={4}
              variants={sectionVariants}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, margin: '-100px' }}
              className="scroll-mt-20"
            >
              <div className="space-y-6">
                <div>
                  <h2 className="text-3xl font-bold text-slate-900 dark:text-white">Your Rights and Choices</h2>
                  <div className="mt-3 h-1 w-16 bg-linear-to-r from-[#8BC34A] to-transparent"></div>
                </div>

                <p className="text-lg leading-relaxed text-slate-700 dark:text-gray-300">You have the right to:</p>

                <div className="grid gap-4 sm:grid-cols-2">
                  {[
                    'Access and update your personal information',
                    'Delete your account and associated data',
                    'Control privacy settings and notifications',
                    'Opt out of marketing communications',
                    'Request a copy of your data',
                    'Report privacy concerns to us',
                  ].map((right, i) => (
                    <motion.div
                      key={i}
                      custom={i}
                      variants={cardVariants}
                      initial="hidden"
                      whileInView="visible"
                      viewport={{ once: true }}
                      className="flex items-start rounded-lg bg-linear-to-br from-[#8BC34A]/5 to-transparent dark:from-[#8BC34A]/10 p-4"
                    >
                      <div className="flex h-6 w-6 shrink-0 items-center justify-center rounded-full bg-[#8BC34A]/30">
                        <svg
                          className="h-4 w-4 text-[#8BC34A]"
                          fill="currentColor"
                          viewBox="0 0 20 20"
                        >
                          <path
                            fillRule="evenodd"
                            d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
                            clipRule="evenodd"
                          />
                        </svg>
                      </div>
                      <span className="ml-3 text-slate-700 dark:text-gray-300">{right}</span>
                    </motion.div>
                  ))}
                </div>
              </div>
            </motion.section>

            <div className="border-t border-slate-200 dark:border-gray-800"></div>

            {/* SECTION 6: CONTACT US */}
            <motion.section
              id="contact-us"
              custom={5}
              variants={sectionVariants}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, margin: '-100px' }}
              className="scroll-mt-20"
            >
              <div className="space-y-6">
                <div>
                  <h2 className="text-3xl font-bold text-slate-900 dark:text-white">Contact Us</h2>
                  <div className="mt-3 h-1 w-16 bg-linear-to-r from-[#8BC34A] to-transparent"></div>
                </div>

                <p className="text-lg leading-relaxed text-slate-700 dark:text-gray-300">
                  If you have any questions about this Privacy Policy, please contact us at:
                </p>

                <div className="grid gap-4 sm:grid-cols-2">
                  <motion.div
                    custom={0}
                    variants={cardVariants}
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ once: true }}
                    className="rounded-lg border border-slate-200 dark:border-gray-800 bg-white dark:bg-[#1c2a0f] p-6 shadow-sm transition-all duration-300 hover:border-[#8BC34A] hover:shadow-md"
                  >
                    <div className="flex items-center">
                      <div className="flex h-12 w-12 items-center justify-center rounded-lg bg-[#8BC34A]/20">
                        <Mail className="h-6 w-6 text-[#8BC34A]" />
                      </div>
                      <div className="ml-4">
                        <p className="text-sm font-medium text-slate-500 dark:text-gray-400">Email</p>
                        <Link
                          href="mailto:privacy@waypel.com"
                          className="text-lg font-semibold text-[#8BC34A] transition-colors hover:text-[#7CB32E]"
                        >
                          privacy@waypel.com
                        </Link>
                      </div>
                    </div>
                  </motion.div>

                  <motion.div
                    custom={1}
                    variants={cardVariants}
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ once: true }}
                    className="rounded-lg border border-slate-200 dark:border-gray-800 bg-white dark:bg-[#1c2a0f] p-6 shadow-sm transition-all duration-300 hover:border-[#8BC34A] hover:shadow-md"
                  >
                    <div className="flex items-center">
                      <div className="flex h-12 w-12 items-center justify-center rounded-lg bg-[#8BC34A]/20">
                        <MapPin className="h-6 w-6 text-[#8BC34A]" />
                      </div>
                      <div className="ml-4">
                        <p className="text-sm font-medium text-slate-500 dark:text-gray-400">Address</p>
                        <p className="text-lg font-semibold text-slate-900 dark:text-white">Waypel Privacy Team</p>
                      </div>
                    </div>
                  </motion.div>
                </div>
              </div>
            </motion.section>

            {/* FOOTER CTA */}
            <motion.section
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="mt-16 rounded-lg border border-[#8BC34A]/30 bg-linear-to-br from-[#8BC34A]/10 to-transparent p-8"
            >
              <div className="space-y-4 text-center">
                <h3 className="text-2xl font-bold text-slate-900 dark:text-white">Privacy Concerns?</h3>
                <p className="text-slate-700 dark:text-gray-300">
                  We take your privacy seriously. If you have any concerns or questions, please don&apos;t hesitate
                  to reach out to our support team.
                </p>
                <motion.div
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                >
                  <Link
                    href="/contact"
                    className="inline-flex items-center gap-2 rounded-lg bg-[#8BC34A] px-6 py-3 font-semibold text-white transition-all duration-300 hover:bg-[#7CB32E] hover:shadow-lg"
                  >
                    Contact Support
                    <svg
                      className="h-4 w-4"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M9 5l7 7-7 7"
                      />
                    </svg>
                  </Link>
                </motion.div>
              </div>
            </motion.section>
          </motion.div>
        </main>
      </div>

      {/* BACK TO TOP BUTTON */}
      <AnimatePresence>
        {showBackToTop && (
          <motion.button
            initial={{ opacity: 0, scale: 0 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0, scale: 0 }}
            onClick={scrollToTop}
            className="fixed bottom-8 right-8 flex h-12 w-12 items-center justify-center rounded-full bg-[#8BC34A] text-white shadow-lg transition-all duration-300 hover:bg-[#7CB32E] hover:shadow-xl"
            aria-label="Back to top"
          >
            <ChevronUp className="h-6 w-6" />
          </motion.button>
        )}
      </AnimatePresence>
    </div>
  );
}
