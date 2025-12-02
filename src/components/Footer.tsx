"use client";
import { Phone, MapPin, Clock, Mail } from 'lucide-react';

export default function Footer() {
  return (
    <>
      {/* Contact / CTA Section */}
      <section id="contact" className="py-24 bg-brand-900 text-white relative overflow-hidden">
        {/* Decorative Background */}
        <div className="absolute top-0 right-0 -mr-20 -mt-20 w-96 h-96 rounded-full bg-brand-800 opacity-20 blur-3xl"></div>
        <div className="absolute bottom-0 left-0 -ml-20 -mb-20 w-80 h-80 rounded-full bg-brand-500 opacity-10 blur-3xl"></div>

        <div className="max-w-4xl mx-auto px-4 relative z-10 text-center">
          <h2 className="text-3xl md:text-5xl font-bold mb-8">Ready to fix that glass?</h2>
          <p className="text-brand-100 mb-12 text-xl leading-relaxed max-w-2xl mx-auto">
            Get a fast, free quote today. Call or text me directly, and I'll get back to you with a price and availability.
          </p>
          
          <div className="grid md:grid-cols-2 gap-8 mb-16">
             {/* Phone Card */}
             <a href="tel:4323522687" className="group bg-white/10 backdrop-blur-sm p-8 rounded-2xl border border-white/10 hover:bg-white/20 transition-all duration-300 flex flex-col items-center">
                <div className="bg-brand-500/20 p-4 rounded-full mb-6 group-hover:scale-110 transition-transform">
                   <Phone className="h-8 w-8 text-brand-300" />
                </div>
                <h3 className="text-xl font-bold mb-2">Call or Text</h3>
                <p className="text-3xl font-bold text-white mb-2">(432) 352-2687</p>
                <p className="text-brand-200 text-sm">Fastest response time</p>
             </a>

             {/* Email Card */}
             <a href="mailto:dedwardbeal@gmail.com" className="group bg-white/10 backdrop-blur-sm p-8 rounded-2xl border border-white/10 hover:bg-white/20 transition-all duration-300 flex flex-col items-center">
                <div className="bg-brand-500/20 p-4 rounded-full mb-6 group-hover:scale-110 transition-transform">
                   <Mail className="h-8 w-8 text-brand-300" />
                </div>
                <h3 className="text-xl font-bold mb-2">Email Me</h3>
                <p className="text-xl font-bold text-white mb-2 break-all">dedwardbeal@gmail.com</p>
                <p className="text-brand-200 text-sm">For quotes & inquiries</p>
             </a>
          </div>

          <div className="flex flex-col md:flex-row justify-center gap-8 text-brand-200 text-sm md:text-base">
            <div className="flex items-center justify-center gap-2">
               <MapPin className="h-5 w-5 text-brand-400" />
               <span>Serving Odessa, Midland & Permian Basin</span>
            </div>
            <div className="flex items-center justify-center gap-2">
               <Clock className="h-5 w-5 text-brand-400" />
               <span>Mon - Fri: 8:00 AM - 6:00 PM</span>
            </div>
          </div>
        </div>
      </section>

      {/* Footer Bottom */}
      <footer className="bg-slate-900 text-slate-400 py-12 border-t border-slate-800">
        <div className="max-w-7xl mx-auto px-4 flex flex-col md:flex-row justify-between items-center gap-6">
          <div className="flex items-center gap-2">
            <span className="text-white font-bold text-xl tracking-tight">BEAL GLASS</span>
          </div>
          
          <div className="flex gap-8 text-sm">
             <a href="#services" className="hover:text-white transition-colors">Services</a>
             <a href="#gallery" className="hover:text-white transition-colors">Work</a>
             <a href="#about" className="hover:text-white transition-colors">About</a>
             <a href="#contact" className="hover:text-white transition-colors">Contact</a>
          </div>

          <div className="text-sm text-center md:text-right">
            <p>&copy; {new Date().getFullYear()} Beal Glass. All rights reserved.</p>
            <p className="text-slate-500 mt-1">Proudly serving Odessa, TX.</p>
          </div>
        </div>
      </footer>
    </>
  );
}
