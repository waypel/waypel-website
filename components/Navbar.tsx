"use client";

import Image from "next/image";
import { useState } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";

const navLinks = [
  { label: "Home", href: "/" },
  { label: "How it works", href: "/#how-it-works" },
  { label: "About us", href: "/#about" },
  { label: "Features", href: "/#features" },
];

export default function Navbar() {
  const [open, setOpen] = useState(false);
  const pathname = usePathname();
  const isContactPage = !!pathname && (pathname === "/contact" || pathname.startsWith("/contact/"));

  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-white/95 backdrop-blur-sm border-b border-gray-100">
      <nav
        className="w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex items-center justify-between h-20"
        aria-label="Main navigation"
      >
        {/* Logo */}
        <Link href="/" className="flex items-center text-gray-900">
          <Image src="/Logo (1).png" alt="Waypel logo" width={160.31} height={42.85} className="rounded-full" />
        </Link>

        {/* Desktop Links */}
        <ul className="hidden md:flex items-center gap-12 text-sm">
          {navLinks.map((link) => (
            <li key={link.label}>
              <a href={link.href} className="hover:text-[#8BC34A] transition-colors text-black">
                {link.label}
              </a>
            </li>
          ))}
        </ul>

        {/* CTA */}
        {isContactPage ? (
          <div className="hidden md:inline-flex items-center px-4 py-2 rounded-full border border-transparent text-sm font-medium text-transparent" />
        ) : (
          <Link
            href="/contact"
            className="hidden md:inline-flex items-center px-4 py-2 rounded-full border border-[#8BC34A] text-sm font-medium text-gray-800 hover:bg-[#8BC34A] transition-colors"
          >
            Contact Us
          </Link>
        )}

        {/* Mobile burger */}
        <button
          className="md:hidden p-2 rounded-md text-gray-600 hover:text-gray-900"
          onClick={() => setOpen(!open)}
          aria-label="Toggle menu"
          aria-expanded={open}
        >
          <svg className={`w-5 h-5 transform transition-transform duration-300 ${open ? 'rotate-90' : 'rotate-0'}`} fill="none" stroke="currentColor" viewBox="0 0 24 24">
            {open ? (
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
            ) : (
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
            )}
          </svg>
        </button>
      </nav>

      {/* Mobile menu: blurred backdrop + sliding panel */}
      <div className={`md:hidden fixed inset-x-0 top-20 z-40 ${open ? 'pointer-events-auto' : 'pointer-events-none'}`}>
        {/* Backdrop (click to close) */}
        <div
          className={`absolute inset-0 transition-opacity duration-300 ${open ? 'opacity-100' : 'opacity-0'}`}
          onClick={() => setOpen(false)}
          aria-hidden
        >
          <div className="w-full h-full backdrop-blur-sm bg-black/20" />
        </div>

        {/* Sliding panel */}
        <div className={`relative mx-4 my-3 transform transition-transform duration-300 ${open ? 'translate-y-0 opacity-100' : '-translate-y-4 opacity-0'}`}>
          <div className="bg-white rounded-lg shadow-lg overflow-hidden border border-gray-100">
            <div className="p-4 flex flex-col gap-3">
              {navLinks.map((link) => (
                <a
                  key={link.label}
                  href={link.href}
                  className="text-sm font-medium text-black hover:text-[#8BC34A] transition-colors"
                  onClick={() => setOpen(false)}
                >
                  {link.label}
                </a>
              ))}
              {!isContactPage && (
                <Link
                  href="/contact"
                  className="mt-2 text-center px-4 py-2 rounded-full border hover:text-[#8BC34A] border-[#8BC34A] text-sm font-medium text-gray-800 hover:bg-[#8BC34A] hover:text-white transition-colors"
                  onClick={() => setOpen(false)}
                >
                  Contact us
                </Link>
              )}
            </div>
          </div>
        </div>
      </div>
    </header>
  );
}
