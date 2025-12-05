"use client";

import React, { useState } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { Phone, Menu, X } from 'lucide-react';

export default function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <header className="sticky top-0 z-50 w-full bg-white shadow-sm">
      <div className="container mx-auto flex h-24 items-center justify-between px-4">
        {/* Logo - cropped to remove white bottom */}
        <Link href="/" className="flex items-center z-50 overflow-hidden h-16 sm:h-18 md:h-20">
          <Image 
            src="/images/logo.png" 
            alt="Beal Glass" 
            width={320} 
            height={90}
            className="w-44 sm:w-52 md:w-64 h-auto object-cover object-top scale-110"
            priority
          />
        </Link>
        
        {/* Desktop Navigation */}
        <nav className="hidden md:flex items-center gap-10">
          <Link href="#about" className="text-base font-semibold text-slate-600 hover:text-brand-600 transition-colors">About</Link>
          <Link href="#services" className="text-base font-semibold text-slate-600 hover:text-brand-600 transition-colors">Services</Link>
          <Link href="#gallery" className="text-base font-semibold text-slate-600 hover:text-brand-600 transition-colors">Work</Link>
          <Link href="#contact" className="text-base font-semibold text-slate-600 hover:text-brand-600 transition-colors">Contact</Link>
        </nav>

        {/* CTA Button & Mobile Menu */}
        <div className="flex items-center gap-3">
          <a 
            href="tel:4323522687" 
            className="hidden sm:flex items-center gap-2 rounded-full bg-brand-600 px-6 py-3 text-base font-semibold text-white hover:bg-brand-700 transition-colors"
          >
            <Phone className="h-5 w-5" />
            <span>(432) 352-2687</span>
          </a>

          {/* Mobile Menu Button */}
          <button 
            className="md:hidden p-2 text-slate-700 hover:bg-slate-100 rounded-lg transition-colors"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            aria-label="Toggle menu"
          >
            {isMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
          </button>
        </div>
      </div>

      {/* Mobile Menu Overlay */}
      {isMenuOpen && (
        <div className="md:hidden absolute top-24 left-0 w-full bg-white border-t border-slate-100 shadow-lg">
          <nav className="flex flex-col p-4 space-y-1">
            <Link 
              href="#about" 
              className="px-4 py-3 text-base font-medium text-slate-700 hover:bg-slate-50 rounded-lg transition-colors"
              onClick={() => setIsMenuOpen(false)}
            >
              About
            </Link>
            <Link 
              href="#services" 
              className="px-4 py-3 text-base font-medium text-slate-700 hover:bg-slate-50 rounded-lg transition-colors"
              onClick={() => setIsMenuOpen(false)}
            >
              Services
            </Link>
            <Link 
              href="#gallery" 
              className="px-4 py-3 text-base font-medium text-slate-700 hover:bg-slate-50 rounded-lg transition-colors"
              onClick={() => setIsMenuOpen(false)}
            >
              Work
            </Link>
            <Link 
              href="#contact" 
              className="px-4 py-3 text-base font-medium text-slate-700 hover:bg-slate-50 rounded-lg transition-colors"
              onClick={() => setIsMenuOpen(false)}
            >
              Contact
            </Link>
            <div className="pt-2">
              <a 
                href="tel:4323522687" 
                className="flex items-center justify-center gap-2 w-full rounded-full bg-brand-600 px-4 py-3 text-sm font-semibold text-white hover:bg-brand-700 transition-colors"
              >
                <Phone className="h-4 w-4" />
                <span>Call (432) 352-2687</span>
              </a>
            </div>
          </nav>
        </div>
      )}
    </header>
  );
}

