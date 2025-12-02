import React from 'react';
import Link from 'next/link';
import { Phone } from 'lucide-react';

export default function Header() {
  return (
    <header className="sticky top-0 z-50 w-full border-b bg-white/95 backdrop-blur supports-[backdrop-filter]:bg-white/60">
      <div className="container mx-auto flex h-16 items-center justify-between px-4">
        <div className="flex items-center gap-2">
          <Link href="/" className="flex items-center space-x-2">
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
            <span>Call Now</span>
          </a>
        </div>
      </div>
    </header>
  );
}

