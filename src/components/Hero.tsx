import Link from 'next/link';
import { Phone, ClipboardCheck } from 'lucide-react';
import Image from 'next/image';

export default function Hero() {
  return (
    <section id="home" className="relative min-h-screen flex items-center justify-center overflow-hidden pt-20">
      {/* Background Image with Overlay */}
      <div className="absolute inset-0 z-0">
        <Image
          src="https://images.unsplash.com/photo-1621905251189-08b45d6a269e?ixlib=rb-4.0.3&auto=format&fit=crop&w=2069&q=80"
          alt="Auto Glass Repair Background"
          fill
          className="object-cover"
          priority
        />
        <div className="absolute inset-0 bg-gradient-to-b from-brand-900/90 to-brand-800/80"></div>
      </div>
      
      <div className="relative z-10 container mx-auto px-4 text-center max-w-5xl">
        <div className="inline-block bg-brand-500/20 backdrop-blur-sm border border-brand-400/30 rounded-full px-6 py-2 mb-8 animate-fade-in-up">
          <span className="text-brand-50 font-semibold text-sm uppercase tracking-wider">Serving Odessa & The Permian Basin</span>
        </div>
        
        <h1 className="text-5xl md:text-7xl font-extrabold text-white mb-8 leading-tight tracking-tight">
          Expert Auto Glass Repair <br className="hidden md:block"/> That Comes to You
        </h1>
        
        <p className="text-xl md:text-2xl text-brand-100 mb-12 max-w-3xl mx-auto font-light leading-relaxed">
          Cracked windshield? Broken door glass? I provide fast, reliable, owner-operated mobile service at your home or workplace.
        </p>
        
        <div className="flex flex-col sm:flex-row gap-6 justify-center items-center">
          <Link 
            href="#contact" 
            className="w-full sm:w-auto bg-brand-500 text-white px-8 py-4 rounded-xl font-bold text-lg hover:bg-brand-400 transition-all transform hover:-translate-y-1 shadow-xl shadow-brand-900/20 flex items-center justify-center gap-3"
          >
            <ClipboardCheck className="h-6 w-6" />
            <span>Get a Free Quote</span>
          </Link>
          
          <a 
            href="tel:4323522687" 
            className="w-full sm:w-auto bg-white text-brand-900 px-8 py-4 rounded-xl font-bold text-lg hover:bg-brand-50 transition-all transform hover:-translate-y-1 shadow-xl shadow-brand-900/20 flex items-center justify-center gap-3"
          >
            <Phone className="h-6 w-6" />
            <span>Call or Text (432) 352-2687</span>
          </a>
        </div>

        {/* Trust Indicators */}
        <div className="mt-16 flex flex-wrap justify-center gap-8 md:gap-16 text-brand-200 opacity-90 text-sm md:text-base font-medium">
           <div className="flex items-center gap-2">
             <div className="h-1.5 w-1.5 rounded-full bg-brand-400"></div>
             Mobile Service
           </div>
           <div className="flex items-center gap-2">
             <div className="h-1.5 w-1.5 rounded-full bg-brand-400"></div>
             Insurance Approved
           </div>
           <div className="flex items-center gap-2">
             <div className="h-1.5 w-1.5 rounded-full bg-brand-400"></div>
             Lifetime Warranty
           </div>
        </div>
      </div>
    </section>
  );
}
