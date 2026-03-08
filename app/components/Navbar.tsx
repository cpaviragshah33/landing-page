"use client";

import { useState, useEffect } from "react";
import { MenuIcon, XIcon } from "./icons";

const navLinks = [
  { label: "Services", href: "#services" },
  { label: "About", href: "#about" },
  { label: "How It Works", href: "#how-it-works" },
  { label: "Contact", href: "#contact" },
];

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <nav
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled
          ? "bg-white/95 shadow-md backdrop-blur-sm"
          : "bg-transparent"
      }`}
    >
      <div className="mx-auto flex h-20 max-w-7xl items-center justify-between px-4 sm:px-6 lg:px-8">
        <a href="#" className="flex flex-col">
          <span className="text-xl font-semibold leading-tight text-navy-900">
            Virag Shah CPA
          </span>
          <span className="text-xs font-medium tracking-wide text-charcoal/60">
            Certified Public Accountant
          </span>
        </a>

        {/* Desktop nav */}
        <div className="hidden items-center gap-8 md:flex">
          {navLinks.map((link) => (
            <a
              key={link.href}
              href={link.href}
              className="text-sm font-medium text-charcoal transition-colors hover:text-navy-900"
            >
              {link.label}
            </a>
          ))}
          <a
            href="mailto:cpaviragshah33@gmail.com?subject=Consultation%20Request"
            className="rounded-lg bg-accent px-5 py-2.5 text-sm font-semibold text-white transition-colors hover:bg-accent-hover"
          >
            Get in Touch
          </a>
        </div>

        {/* Mobile hamburger */}
        <button
          onClick={() => setMobileOpen(!mobileOpen)}
          className="text-charcoal md:hidden"
          aria-label="Toggle menu"
        >
          {mobileOpen ? (
            <XIcon className="h-6 w-6" />
          ) : (
            <MenuIcon className="h-6 w-6" />
          )}
        </button>
      </div>

      {/* Mobile menu panel */}
      {mobileOpen && (
        <div className="border-t border-gray-100 bg-white px-4 pb-6 pt-2 shadow-lg md:hidden">
          {navLinks.map((link) => (
            <a
              key={link.href}
              href={link.href}
              onClick={() => setMobileOpen(false)}
              className="block py-3 text-base font-medium text-charcoal transition-colors hover:text-navy-900"
            >
              {link.label}
            </a>
          ))}
          <a
            href="mailto:cpaviragshah33@gmail.com?subject=Consultation%20Request"
            onClick={() => setMobileOpen(false)}
            className="mt-3 block rounded-lg bg-accent px-5 py-2.5 text-center text-sm font-semibold text-white transition-colors hover:bg-accent-hover"
          >
            Get in Touch
          </a>
        </div>
      )}
    </nav>
  );
}
