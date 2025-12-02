"use client";

import React, { useState } from 'react';
import Link from 'next/link';
import { Phone, Menu, X } from 'lucide-react';

export default function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <header className="sticky top-0 z-50 w-full border-b bg-white/95 backdrop-blur supports-[backdrop-filter]:bg-white/60">
      <div className="container mx-auto flex h-16 items-center justify-between px-4">
        <div className="flex items-center gap-2">
          <Link href="/" className="flex items-center space-x-2 z-50">
            <span className="text-xl font-bold text-blue-900">Beal Glass</span>
          </Link>
        </div>
        
        <nav className="hidden md:flex items-center gap-6 text-sm font-medium text-gray-700">
          <Link href="#services" className="hover:text-blue-600 transition-colors">Services</Link>
          <Link href="#gallery" className="hover:text-blue-600 transition-colors">Work</Link>
          <Link href="#about" className="hover:text-blue-600 transition-colors">About</Link>
          <Link href="#contact" className="hover:text-blue-600 transition-colors">Contact</Link>
        </nav>

        <div className="flex items-center gap-4">
          <a 
            href="tel:4323522687" 
            className="hidden sm:flex items-center gap-2 rounded-md bg-blue-600 px-4 py-2 text-sm font-semibold text-white shadow-sm hover:bg-blue-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-blue-600"
          >
            <Phone className="h-4 w-4" />
            <span>Call or Text</span>
          </a>

          {/* Mobile Menu Button */}
          <button 
            className="md:hidden p-2 text-gray-700"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            aria-label="Toggle menu"
          >
            {isMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
          </button>
        </div>
      </div>

      {/* Mobile Menu Overlay */}
      {isMenuOpen && (
        <div className="md:hidden absolute top-16 left-0 w-full bg-white border-b border-gray-100 shadow-lg p-4 flex flex-col space-y-4 animate-in slide-in-from-top-5">
          <Link 
            href="#services" 
            className="block px-4 py-2 text-base font-medium text-gray-700 hover:bg-gray-50 rounded-md"
            onClick={() => setIsMenuOpen(false)}
          >
            Services
          </Link>
          <Link 
            href="#gallery" 
            className="block px-4 py-2 text-base font-medium text-gray-700 hover:bg-gray-50 rounded-md"
            onClick={() => setIsMenuOpen(false)}
          >
            Work
          </Link>
          <Link 
            href="#about" 
            className="block px-4 py-2 text-base font-medium text-gray-700 hover:bg-gray-50 rounded-md"
            onClick={() => setIsMenuOpen(false)}
          >
            About
          </Link>
          <Link 
            href="#contact" 
            className="block px-4 py-2 text-base font-medium text-gray-700 hover:bg-gray-50 rounded-md"
            onClick={() => setIsMenuOpen(false)}
          >
            Contact
          </Link>
          <a 
            href="tel:4323522687" 
            className="flex items-center justify-center gap-2 w-full rounded-md bg-blue-600 px-4 py-3 text-sm font-semibold text-white shadow-sm hover:bg-blue-500"
          >
            <Phone className="h-4 w-4" />
            <span>Call or Text</span>
          </a>
        </div>
      )}
    </header>
  );
}

