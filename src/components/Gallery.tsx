'use client';

import React, { useCallback, useEffect, useState } from 'react';
import Image from 'next/image';
import useEmblaCarousel from 'embla-carousel-react';
import { ChevronLeft, ChevronRight } from 'lucide-react';

const projects = [
  { 
    id: 1, 
    title: 'Precision Chip Repair', 
    image: '/images/Chip repair.png',
    objectFit: 'cover' as const,
    objectPosition: 'center 60%' // Move visible area up to show hand and chip
  },
  { 
    id: 2, 
    title: 'Expert Installation', 
    image: '/images/back glass action shot.jpg',
    objectFit: 'cover' as const,
    objectPosition: 'center 55%' // Shift view up to show more of subject
  },
  { 
    id: 3, 
    title: 'Proper Sealing', 
    image: '/images/Caulking gun.png',
    objectFit: 'cover' as const,
    objectPosition: 'center 40%' // Shift view up to show more of subject
  },
  { 
    id: 4, 
    title: 'Quality Finish', 
    image: '/images/Cleaning windshield.png',
    objectFit: 'cover' as const,
    objectPosition: 'center 45%' // Shift view up to show more of subject
  },
];

export default function Gallery() {
  const [emblaRef, emblaApi] = useEmblaCarousel({ 
    loop: true,
    align: 'center',
    containScroll: 'trimSnaps',
  });
  const [selectedIndex, setSelectedIndex] = useState(0);

  const scrollPrev = useCallback(() => {
    if (emblaApi) emblaApi.scrollPrev();
  }, [emblaApi]);

  const scrollNext = useCallback(() => {
    if (emblaApi) emblaApi.scrollNext();
  }, [emblaApi]);

  const onSelect = useCallback(() => {
    if (!emblaApi) return;
    setSelectedIndex(emblaApi.selectedScrollSnap());
  }, [emblaApi]);

  useEffect(() => {
    if (!emblaApi) return;
    onSelect();
    emblaApi.on('select', onSelect);
    return () => {
      emblaApi.off('select', onSelect);
    };
  }, [emblaApi, onSelect]);

  return (
    <section id="gallery" className="py-24 bg-white">
      <div className="container mx-auto px-4">
        <div className="mx-auto max-w-2xl text-center mb-16">
          <h2 className="text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">Expert Craftsmanship</h2>
        </div>
        
        {/* Mobile Carousel with Peek */}
        <div className="md:hidden relative">
          <div className="overflow-visible px-4" ref={emblaRef}>
            <div className="flex -mx-3">
              {projects.map((project, index) => (
                <div 
                  key={project.id} 
                  className="flex-[0_0_85%] min-w-0 px-3 transition-all duration-300"
                  style={{
                    opacity: index === selectedIndex ? 1 : 0.4,
                    transform: index === selectedIndex ? 'scale(1)' : 'scale(0.9)',
                  }}
                >
                  <div className="relative overflow-hidden rounded-lg bg-gray-100 aspect-square shadow-xl">
                    <Image
                      src={project.image}
                      alt={project.title}
                      fill
                      style={{ 
                        objectFit: project.objectFit,
                        objectPosition: project.objectPosition 
                      }}
                      sizes="85vw"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-transparent to-transparent" />
                    <div className="absolute bottom-0 left-0 right-0 p-4">
                      <h3 className="text-lg font-semibold text-white">{project.title}</h3>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
          
          {/* Carousel Controls */}
          <div className="flex items-center justify-center gap-4 mt-6">
            <button
              onClick={scrollPrev}
              className="p-2 rounded-full bg-brand-600 text-white hover:bg-brand-700 transition-colors shadow-lg"
              aria-label="Previous image"
            >
              <ChevronLeft className="h-5 w-5" />
            </button>
            
            <div className="flex gap-2">
              {projects.map((_, index) => (
                <button
                  key={index}
                  onClick={() => emblaApi?.scrollTo(index)}
                  className={`h-2 rounded-full transition-all ${
                    index === selectedIndex 
                      ? 'w-8 bg-brand-600' 
                      : 'w-2 bg-gray-300'
                  }`}
                  aria-label={`Go to image ${index + 1}`}
                />
              ))}
            </div>
            
            <button
              onClick={scrollNext}
              className="p-2 rounded-full bg-brand-600 text-white hover:bg-brand-700 transition-colors shadow-lg"
              aria-label="Next image"
            >
              <ChevronRight className="h-5 w-5" />
            </button>
          </div>
        </div>

        {/* Desktop 2x2 Grid */}
        <div className="hidden md:grid md:grid-cols-2 gap-6 max-w-4xl mx-auto">
          {projects.map((project) => (
            <div key={project.id} className="group relative overflow-hidden rounded-lg bg-gray-100 aspect-square shadow-md">
              <Image
                src={project.image}
                alt={project.title}
                fill
                className="transition-transform duration-300 group-hover:scale-110"
                style={{ 
                  objectFit: project.objectFit,
                  objectPosition: project.objectPosition 
                }}
                sizes="(max-width: 1200px) 50vw, 33vw"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-transparent to-transparent" />
              <div className="absolute bottom-0 left-0 right-0 p-4">
                <h3 className="text-lg font-semibold text-white">{project.title}</h3>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
