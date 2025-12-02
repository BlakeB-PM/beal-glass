import React from 'react';
import Image from 'next/image';

const projects = [
  { 
    id: 1, 
    title: 'Windshield Replacement', 
    category: 'Repair',
    image: 'https://images.unsplash.com/photo-1632823471565-1ecf99454f15?auto=format&fit=crop&q=80&w=800'
  },
  { 
    id: 2, 
    title: 'Classic Car Restoration', 
    category: 'Custom',
    image: 'https://images.unsplash.com/photo-1552160793-ac2e8c65279c?auto=format&fit=crop&q=80&w=800'
  },
  { 
    id: 3, 
    title: 'Truck Glass', 
    category: 'Commercial',
    image: 'https://images.unsplash.com/photo-1605816988069-bfa2805f2f8c?auto=format&fit=crop&q=80&w=800'
  },
  { 
    id: 4, 
    title: 'Chip Repair', 
    category: 'Maintenance',
    image: 'https://images.unsplash.com/photo-1597762567952-608558469073?auto=format&fit=crop&q=80&w=800'
  },
  { 
    id: 5, 
    title: 'Side Window', 
    category: 'Replacement',
    image: 'https://images.unsplash.com/photo-1563720223185-11003d516935?auto=format&fit=crop&q=80&w=800'
  },
  { 
    id: 6, 
    title: 'Rear Windshield', 
    category: 'Replacement',
    image: 'https://images.unsplash.com/photo-1580273916550-e323be2f8160?auto=format&fit=crop&q=80&w=800'
  },
];

export default function Gallery() {
  return (
    <section id="gallery" className="py-24 bg-white">
      <div className="container mx-auto px-4">
        <div className="mx-auto max-w-2xl text-center mb-16">
          <h2 className="text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">Recent Work</h2>
          <p className="mt-4 text-lg text-gray-600">
            A showcase of our quality craftsmanship.
          </p>
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
              <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
              <div className="absolute bottom-0 left-0 right-0 p-4 translate-y-full transition-transform duration-300 group-hover:translate-y-0">
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

