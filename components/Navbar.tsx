"use client";

import Image from "next/image";
import { useState, useEffect } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { motion, AnimatePresence } from "framer-motion";
import { useTheme } from "./ThemeProvider";

const navLinks = [
  { label: "Home", href: "/" },
  { label: "How it works", href: "/#how-it-works" },
  { label: "About us", href: "/#about" },
  { label: "Features", href: "/#features" },
];

export default function Navbar() {
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [hoveredIndex, setHoveredIndex] = useState<number | null>(null);
  const { theme, toggleTheme } = useTheme();
  
  const pathname = usePathname();
  const isContactPage = !!pathname && (pathname === "/contact" || pathname.startsWith("/contact/"));

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <header 
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled 
          ? "bg-white/80 dark:bg-[#0c1206]/80 backdrop-blur-md border-b border-gray-100/50 dark:border-gray-800/50 shadow-xs h-16" 
          : "bg-white/95 dark:bg-[#0c1206]/95 md:bg-transparent md:dark:bg-transparent h-20"
      }`}
    >
      <nav
        className="w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex items-center justify-between h-full"
        aria-label="Main navigation"
      >
        {/* Logo */}
        <Link href="/" className="flex items-center transition-transform duration-300 hover:scale-102">
          <Image src="/Logo (1).png" alt="Waypel logo" width={140} height={37.4} className="rounded-full" />
        </Link>

        {/* Desktop Links */}
        <ul className="hidden md:flex items-center gap-1 text-sm font-medium">
          {navLinks.map((link, idx) => (
            <li 
              key={link.label}
              className="relative py-2 px-4"
              onMouseEnter={() => setHoveredIndex(idx)}
              onMouseLeave={() => setHoveredIndex(null)}
            >
              {hoveredIndex === idx && (
                <motion.span
                  layoutId="navHover"
                  className="absolute inset-0 bg-[#8BC34A]/10 rounded-full z-0"
                  transition={{ type: "spring", stiffness: 350, damping: 28 }}
                />
              )}
              <a 
                href={link.href} 
                className="relative z-10 text-gray-700 dark:text-gray-300 hover:text-[#8BC34A] transition-colors duration-200"
              >
                {link.label}
              </a>
            </li>
          ))}
        </ul>

        <div className="hidden md:flex items-center gap-3">
          {/* Theme Toggle */}
          <button
            onClick={toggleTheme}
            className="w-9 h-9 rounded-full flex items-center justify-center bg-gray-100 dark:bg-gray-800 text-gray-600 dark:text-gray-300 hover:bg-gray-200 dark:hover:bg-gray-700 transition-colors"
            aria-label="Toggle dark mode"
          >
            {theme === "dark" ? (
              <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 20 20"><path d="M10 2a1 1 0 011 1v1a1 1 0 11-2 0V3a1 1 0 011-1zm4 8a4 4 0 11-8 0 4 4 0 018 0zm-.464 4.95l.707.707a1 1 0 001.414-1.414l-.707-.707a1 1 0 00-1.414 1.414zm2.12-10.607a1 1 0 010 1.414l-.706.707a1 1 0 11-1.414-1.414l.707-.707a1 1 0 011.414 0zM17 11a1 1 0 100-2h-1a1 1 0 100 2h1zm-7 4a1 1 0 011 1v1a1 1 0 11-2 0v-1a1 1 0 011-1zM5.05 6.464A1 1 0 106.465 5.05l-.708-.707a1 1 0 00-1.414 1.414l.707.707zm1.414 8.486l-.707.707a1 1 0 01-1.414-1.414l.707-.707a1 1 0 011.414 1.414zM4 11a1 1 0 100-2H3a1 1 0 000 2h1z"/></svg>
            ) : (
              <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 20 20"><path d="M17.293 13.293A8 8 0 016.707 2.707a8.001 8.001 0 1010.586 10.586z"/></svg>
            )}
          </button>

          {/* CTA */}
          {!isContactPage && (
            <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
              <Link
                href="/contact"
                className="inline-flex items-center px-5 py-2.5 rounded-full border border-[#8BC34A] text-sm font-semibold text-gray-800 dark:text-gray-200 hover:bg-[#8BC34A] hover:text-white transition-all duration-300 shadow-xs hover:shadow-md hover:shadow-[#8BC34A]/10"
              >
                Contact Us
              </Link>
            </motion.div>
          )}
        </div>

        {/* Mobile: theme toggle + burger */}
        <div className="md:hidden flex items-center gap-2">
          <button
            onClick={toggleTheme}
            className="w-9 h-9 rounded-full flex items-center justify-center bg-gray-100 dark:bg-gray-800 text-gray-600 dark:text-gray-300"
            aria-label="Toggle dark mode"
          >
            {theme === "dark" ? (
              <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 20 20"><path d="M10 2a1 1 0 011 1v1a1 1 0 11-2 0V3a1 1 0 011-1zm4 8a4 4 0 11-8 0 4 4 0 018 0zm-.464 4.95l.707.707a1 1 0 001.414-1.414l-.707-.707a1 1 0 00-1.414 1.414zm2.12-10.607a1 1 0 010 1.414l-.706.707a1 1 0 11-1.414-1.414l.707-.707a1 1 0 011.414 0zM17 11a1 1 0 100-2h-1a1 1 0 100 2h1zm-7 4a1 1 0 011 1v1a1 1 0 11-2 0v-1a1 1 0 011-1zM5.05 6.464A1 1 0 106.465 5.05l-.708-.707a1 1 0 00-1.414 1.414l.707.707zm1.414 8.486l-.707.707a1 1 0 01-1.414-1.414l.707-.707a1 1 0 011.414 1.414zM4 11a1 1 0 100-2H3a1 1 0 000 2h1z"/></svg>
            ) : (
              <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 20 20"><path d="M17.293 13.293A8 8 0 016.707 2.707a8.001 8.001 0 1010.586 10.586z"/></svg>
            )}
          </button>
          <button
            className="p-2 rounded-md text-gray-600 dark:text-gray-300 hover:text-gray-900 dark:hover:text-white focus:outline-none"
            onClick={() => setOpen(!open)}
            aria-label="Toggle menu"
            aria-expanded={open}
          >
            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              {open ? (
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
              ) : (
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
              )}
            </svg>
          </button>
        </div>
      </nav>

      {/* Mobile menu */}
      <AnimatePresence>
        {open && (
          <div className="md:hidden fixed inset-0 top-16 z-40">
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.2 }}
              className="absolute inset-0 backdrop-blur-xs bg-black/10"
              onClick={() => setOpen(false)}
            />
            <motion.div 
              initial={{ opacity: 0, y: -20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -20 }}
              transition={{ type: "spring", stiffness: 300, damping: 25 }}
              className="relative mx-4 my-3"
            >
              <div className="bg-white dark:bg-[#1c2a0f] rounded-2xl shadow-xl overflow-hidden border border-gray-100 dark:border-gray-800">
                <div className="p-5 flex flex-col gap-4">
                  {navLinks.map((link) => (
                    <a
                      key={link.label}
                      href={link.href}
                      className="text-base font-semibold text-gray-800 dark:text-gray-200 hover:text-[#8BC34A] transition-colors py-1"
                      onClick={() => setOpen(false)}
                    >
                      {link.label}
                    </a>
                  ))}
                  {!isContactPage && (
                    <Link
                      href="/contact"
                      className="mt-2 text-center py-2.5 rounded-full border border-[#8BC34A] text-sm font-semibold text-gray-800 dark:text-gray-200 hover:bg-[#8BC34A] hover:text-white transition-colors"
                      onClick={() => setOpen(false)}
                    >
                      Contact us
                    </Link>
                  )}
                </div>
              </div>
            </motion.div>
          </div>
        )}
      </AnimatePresence>
    </header>
  );
}
