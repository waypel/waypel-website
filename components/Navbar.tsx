"use client";

import Image from "next/image";
import { useState } from "react";

const navLinks = [
  { label: "Home", href: "#" },
  { label: "How it works", href: "#how-it-works" },
  { label: "About us", href: "#about" },
  { label: "Features", href: "#features" },
];

export default function Navbar() {
  const [open, setOpen] = useState(false);

  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-white/95 backdrop-blur-sm border-b border-gray-100">
      <nav
        className="w-full max-w-360 mx-auto px-25 flex items-center justify-between h-20.25"
        aria-label="Main navigation"
      >
        {/* Logo */}
        <a href="#" className="flex items-center  text-gray-900">
          <Image src="/Logo (1).png" alt="Waypel logo" width={160.31} height={42.85} className="rounded-full" />
         
        </a>

        {/* Desktop Links */}
        <ul className="flex flex-wrapitems-center text-sm  " style={{ width: '408.48px', height: '24px', gap: '47.83px' }}>
          {navLinks.map((link) => (
            <li key={link.label}>
              <a
                href={link.href}
                className="hover:text-[#8BC34A] transition-colors  text-black "
              >
                {link.label}
              </a>
            </li>
          ))}
        </ul>

        {/* CTA */}
        <a
          href="#contact"
          className="hidden md:inline-flex items-center px-4 py-2 rounded-full border border-[#8BC34A] text-sm font-medium text-gray-800 hover:bg-[#8BC34A] transition-colors"
        >
          Contact us
        </a>

        {/* Mobile burger */}
        <button
          className="md:hidden p-2 rounded-md text-gray-600 hover:text-gray-900"
          onClick={() => setOpen(!open)}
          aria-label="Toggle menu"
          aria-expanded={open}
        >
          <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            {open ? (
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
            ) : (
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
            )}
          </svg>
        </button>
      </nav>

      {/* Mobile menu */}
      {open && (
        <div className="md:hidden border-t border-gray-100 bg-white px-4 py-4 flex flex-col gap-3">
          {navLinks.map((link) => (
            <a
              key={link.label}
              href={link.href}
              className="text-sm font-medium text-gray-700 hover:text-gray-900"
              onClick={() => setOpen(false)}
            >
              {link.label}
            </a>
          ))}
          <a
            href="#contact"
            className="mt-2 text-center px-4 py-2 rounded-full border border-gray-300 text-sm font-medium text-gray-800"
          >
            Contact us
          </a>
        </div>
      )}
    </header>
  );
}
