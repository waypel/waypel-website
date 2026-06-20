"use client";

import Image from "next/image";
import { useState, useEffect } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { motion, AnimatePresence } from "framer-motion";

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
  
  const pathname = usePathname();
  const isContactPage = !!pathname && (pathname === "/contact" || pathname.startsWith("/contact/"));

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 20) {
        setScrolled(true);
      } else {
        setScrolled(false);
      }
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <header 
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled 
          ? "bg-white/80 backdrop-blur-md border-b border-gray-100/50 shadow-xs h-16" 
          : "bg-white/95 md:bg-transparent h-20"
      }`}
    >
      <nav
        className="w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex items-center justify-between h-full"
        aria-label="Main navigation"
      >
        {/* Logo */}
        <Link href="/" className="flex items-center text-gray-900 transition-transform duration-300 hover:scale-102">
          <Image src="/Logo (1).png" alt="Waypel logo" width={140} height={37.4} className="rounded-full" />
        </Link>

        {/* Desktop Links with Sliding Hover Effect */}
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
                className="relative z-10 text-gray-700 hover:text-[#8BC34A] transition-colors duration-200"
              >
                {link.label}
              </a>
            </li>
          ))}
        </ul>

        {/* CTA */}
        {isContactPage ? (
          <div className="hidden md:inline-flex items-center px-5 py-2 rounded-full text-sm text-transparent" />
        ) : (
          <motion.div
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="hidden md:block"
          >
            <Link
              href="/contact"
              className="inline-flex items-center px-5 py-2.5 rounded-full border border-[#8BC34A] text-sm font-semibold text-gray-800 hover:bg-[#8BC34A] hover:text-white transition-all duration-300 shadow-xs hover:shadow-md hover:shadow-[#8BC34A]/10"
            >
              Contact Us
            </Link>
          </motion.div>
        )}

        {/* Mobile burger */}
        <button
          className="md:hidden p-2 rounded-md text-gray-600 hover:text-gray-900 focus:outline-none"
          onClick={() => setOpen(!open)}
          aria-label="Toggle menu"
          aria-expanded={open}
        >
          <svg 
            className="w-6 h-6 transform transition-transform duration-300" 
            fill="none" 
            stroke="currentColor" 
            viewBox="0 0 24 24"
          >
            {open ? (
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
            ) : (
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
            )}
          </svg>
        </button>
      </nav>

      {/* Mobile menu: blurred backdrop + sliding panel */}
      <AnimatePresence>
        {open && (
          <div className="md:hidden fixed inset-0 top-16 z-40">
            {/* Backdrop */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.2 }}
              className="absolute inset-0 backdrop-blur-xs bg-black/10"
              onClick={() => setOpen(false)}
            />

            {/* Sliding Panel */}
            <motion.div 
              initial={{ opacity: 0, y: -20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -20 }}
              transition={{ type: "spring", stiffness: 300, damping: 25 }}
              className="relative mx-4 my-3"
            >
              <div className="bg-white rounded-2xl shadow-xl overflow-hidden border border-gray-100">
                <div className="p-5 flex flex-col gap-4">
                  {navLinks.map((link) => (
                    <a
                      key={link.label}
                      href={link.href}
                      className="text-base font-semibold text-gray-800 hover:text-[#8BC34A] transition-colors py-1"
                      onClick={() => setOpen(false)}
                    >
                      {link.label}
                    </a>
                  ))}
                  {!isContactPage && (
                    <Link
                      href="/contact"
                      className="mt-2 text-center py-2.5 rounded-full border border-[#8BC34A] text-sm font-semibold text-gray-800 hover:bg-[#8BC34A] hover:text-white transition-colors"
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

