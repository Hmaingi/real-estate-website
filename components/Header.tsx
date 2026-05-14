"use client";
import { useState } from "react";
import Link from "next/link";
import { MessageCircle, Menu, X } from "lucide-react";
import BrandWordmark from "@/components/BrandWordmark";

export default function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const navLinks = [
    { href: "/", label: "Home" },
    { href: "/buy", label: "Buy" },
    { href: "/listings?type=Rent", label: "Rent" },
    { href: "/about", label: "About Us" },
    { href: "/dashboard", label: "Developer access" },
  ];

  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-white/95 backdrop-blur-md shadow-sm">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16 lg:h-[78px]">
          {/* Logo */}
          <Link href="/" className="group flex items-center max-w-[58vw] sm:max-w-none">
            <BrandWordmark className="text-[2rem] sm:text-[2.45rem] lg:text-[2.9rem] transition-colors group-hover:text-[#102f46]" />
          </Link>

          {/* Desktop Navigation */}
          <nav className="hidden lg:flex items-center space-x-8">
            {navLinks.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className="font-medium text-slate-800 hover:text-emerald-700 transition-colors"
              >
                {link.label}
              </Link>
            ))}
          </nav>

          {/* Contact Button & Mobile Menu Toggle */}
          <div className="flex items-center space-x-4">
            <Link
              href="/contact"
              className="hidden sm:flex items-center space-x-2 bg-emerald-600 hover:bg-emerald-700 text-white px-5 py-2.5 rounded-md font-semibold transition-colors"
            >
              <MessageCircle className="h-4 w-4" />
              <span>Message Us</span>
            </Link>

            {/* Mobile Menu Toggle */}
            <button
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              className="lg:hidden p-2 rounded-md text-slate-800 transition-colors"
            >
              {isMenuOpen ? (
                <X className="h-6 w-6" />
              ) : (
                <Menu className="h-6 w-6" />
              )}
            </button>
          </div>
        </div>

        {/* Mobile Menu */}
        {isMenuOpen && (
          <div className="lg:hidden bg-white border-t border-slate-200 py-4">
            <nav className="flex flex-col space-y-4">
              {navLinks.map((link) => (
                <Link
                  key={link.href}
                  href={link.href}
                  className="text-slate-700 hover:text-emerald-600 font-medium transition-colors px-4 py-2"
                  onClick={() => setIsMenuOpen(false)}
                >
                  {link.label}
                </Link>
              ))}
              <Link
                href="/contact"
                className="flex items-center space-x-2 bg-emerald-600 hover:bg-emerald-700 text-white px-4 py-2 mx-4 rounded-lg font-medium transition-colors"
                onClick={() => setIsMenuOpen(false)}
              >
                <MessageCircle className="h-4 w-4" />
                <span>Message Us</span>
              </Link>
            </nav>
          </div>
        )}
      </div>
    </header>
  );
}
