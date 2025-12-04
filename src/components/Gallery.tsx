import React from 'react';
import Image from 'next/image';

const projects = [
  { 
    id: 1, 
    title: 'Precision Chip Repair', 
    category: 'Maintenance',
    image: '/images/Chip repair.png'
  },
  { 
    id: 2, 
    title: 'Expert Installation', 
    category: 'Replacement',
    image: '/images/back glass action shot.jpg'
  },
  { 
    id: 3, 
    title: 'Proper Sealing', 
    category: 'Installation',
    image: '/images/Caulking gun.png'
  },
  { 
    id: 4, 
    title: 'Surface Preparation', 
    category: 'Detailing',
    image: '/images/Cleaning windshield.png'
  },
];

export default function Gallery() {
  return (
    <section id="gallery" className="py-24 bg-white">
      <div className="container mx-auto px-4">
        <div className="mx-auto max-w-2xl text-center mb-16">
          <h2 className="text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">Expert Craftsmanship</h2>
        </div>
        
        <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {projects.map((project) => (
            <div key={project.id} className="group relative overflow-hidden rounded-lg bg-gray-100 aspect-[4/3] shadow-md">
              <Image
                src={project.image}
                alt={project.title}
                fill
                className="object-cover transition-transform duration-300 group-hover:scale-110"
                sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-transparent to-transparent" />
              <div className="absolute bottom-0 left-0 right-0 p-4">
                <h3 className="text-lg font-semibold text-white">{project.title}</h3>
                <p className="text-sm text-gray-200">{project.category}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

