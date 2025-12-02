import React from 'react';

const projects = [
  { id: 1, title: 'Windshield Replacement', category: 'Repair' },
  { id: 2, title: 'Classic Car Restoration', category: 'Custom' },
  { id: 3, title: 'Truck Glass', category: 'Commercial' },
  { id: 4, title: 'Chip Repair', category: 'Maintenance' },
  { id: 5, title: 'Side Window', category: 'Replacement' },
  { id: 6, title: 'Rear Windshield', category: 'Replacement' },
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
            <div key={project.id} className="group relative overflow-hidden rounded-lg bg-gray-100 aspect-[4/3]">
              {/* Placeholder for images */}
              <div className="absolute inset-0 flex items-center justify-center bg-gray-200 text-gray-400">
                <span className="text-sm font-medium">Image Placeholder</span>
              </div>
              <div className="absolute inset-0 bg-black/0 transition-colors group-hover:bg-black/40" />
              <div className="absolute bottom-0 left-0 right-0 p-4 translate-y-full transition-transform group-hover:translate-y-0">
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

