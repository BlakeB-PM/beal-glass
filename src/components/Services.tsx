import { Shield, Car, DoorOpen, Wrench } from 'lucide-react';

const services = [
  {
    name: 'Windshield Replacement',
    description: 'High-quality OEM or OEE glass installation. I ensure a perfect seal and proper fit for your safety.',
    icon: Car,
  },
  {
    name: 'Rock Chip Repair',
    description: 'Save money by repairing small chips before they spread into large cracks. Fast and often free with insurance.',
    icon: Shield, 
  },
  {
    name: 'Door & Back Glass',
    description: 'Shattered side window? I replace door glass, back glass, and even fix broken window regulators/motors.',
    icon: DoorOpen,
  },
  {
    name: 'Mobile Service',
    description: 'I come to you! Convenient mobile service at your home or workplace throughout Odessa and Midland.',
    icon: Wrench,
  },
];

export default function Services() {
  return (
    <section id="services" className="py-12 md:py-16 bg-slate-50">
      <div className="container mx-auto px-4 max-w-7xl">
        <div className="text-center mb-16">
          <h2 className="text-brand-600 font-bold uppercase tracking-wider text-sm mb-3">My Services</h2>
          <h3 className="text-3xl md:text-4xl font-bold text-slate-900">Complete Auto Glass Solutions</h3>
          <p className="mt-4 text-slate-600 max-w-2xl mx-auto text-lg">
            I handle everything from small rock chips to full windshield replacements on all vehicle makes and models.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {services.map((service) => (
            <div 
              key={service.name} 
              className="bg-white rounded-2xl p-8 shadow-lg border border-slate-100 hover:border-brand-200 hover:shadow-xl transition-all duration-300 group"
            >
              <div className="w-14 h-14 bg-brand-50 rounded-xl flex items-center justify-center text-brand-600 mb-6 group-hover:bg-brand-600 group-hover:text-white transition-colors duration-300">
                <service.icon className="h-7 w-7" aria-hidden="true" />
              </div>
              <h4 className="text-xl font-bold text-slate-900 mb-3">
                {service.name}
              </h4>
              <p className="text-slate-600 leading-relaxed">
                {service.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
