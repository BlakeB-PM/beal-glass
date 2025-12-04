import { Check } from 'lucide-react';
import Image from 'next/image';

export default function About() {
  return (
    <section id="about" className="py-24 bg-white overflow-hidden">
      <div className="container mx-auto px-4 max-w-7xl">
        <div className="grid md:grid-cols-2 gap-12 lg:gap-20 items-center">
          {/* Image Column */}
          <div className="relative order-2 md:order-1">
            <div className="absolute -top-4 -left-4 w-24 h-24 bg-brand-100 rounded-full mix-blend-multiply filter blur-xl opacity-70 animate-blob"></div>
            <div className="relative rounded-2xl overflow-hidden shadow-2xl aspect-[4/3]">
               <Image 
                 src="/images/profile shot.png"
                 alt="Douglas Beal - Auto Glass Expert"
                 fill
                 className="object-cover object-top"
               />
            </div>
            <div className="absolute -bottom-6 -right-6 bg-white p-6 rounded-xl shadow-xl hidden md:block border border-slate-100">
              <p className="text-brand-600 font-bold text-4xl mb-1">40+</p>
              <p className="text-slate-600 text-sm font-medium">Years of<br/>Experience</p>
            </div>
          </div>

          {/* Content Column */}
          <div className="order-1 md:order-2">
            <div className="inline-block bg-brand-50 text-brand-600 px-4 py-1 rounded-full text-sm font-semibold mb-6">
              About The Owner
            </div>
            <h2 className="text-3xl font-bold text-slate-900 mb-6 sm:text-4xl">Local, Honest, and Hardworking</h2>
            <p className="text-slate-600 mb-6 text-lg leading-relaxed">
              My name is Douglas Beal, and I've been serving the Permian Basin for over 40 years. At <strong>Beal Glass</strong>, you aren't just a number—you're a neighbor. I founded this business to provide a personal, reliable service that keeps our community safe on the road.
            </p>
            <p className="text-slate-600 mb-8 text-lg leading-relaxed">
              When you call, you speak directly to me—the expert who will be working on your car. I take pride in my workmanship, using only top-quality glass and adhesives to ensure your vehicle is as safe as the day it left the factory. I treat every car like it belongs to my own family.
            </p>
            
            <ul className="space-y-4 mb-10">
              <li className="flex items-center gap-3">
                <div className="flex-shrink-0 w-6 h-6 rounded-full bg-green-100 flex items-center justify-center">
                  <Check className="h-4 w-4 text-green-600" />
                </div>
                <span className="text-slate-700 font-medium">Working with all insurance companies</span>
              </li>
              <li className="flex items-center gap-3">
                <div className="flex-shrink-0 w-6 h-6 rounded-full bg-green-100 flex items-center justify-center">
                  <Check className="h-4 w-4 text-green-600" />
                </div>
                <span className="text-slate-700 font-medium">Personal touch you can trust</span>
              </li>
              <li className="flex items-center gap-3">
                <div className="flex-shrink-0 w-6 h-6 rounded-full bg-green-100 flex items-center justify-center">
                  <Check className="h-4 w-4 text-green-600" />
                </div>
                <span className="text-slate-700 font-medium">Free mobile service to your location</span>
              </li>
            </ul>

            <div className="flex items-center gap-4 pt-4 border-t border-slate-100">
              <div>
                <p className="font-bold text-slate-900">Douglas Beal</p>
                <p className="text-slate-500 text-sm">Owner & Lead Technician</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
