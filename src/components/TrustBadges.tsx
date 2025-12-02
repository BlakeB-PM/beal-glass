import { Truck, ShieldCheck, Award, UserCheck } from 'lucide-react';

export default function TrustBadges() {
  return (
    <section className="bg-white py-12 border-b border-slate-100">
      <div className="container mx-auto px-4 max-w-7xl">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
          <div className="flex flex-col items-center gap-3">
            <div className="bg-brand-50 p-4 rounded-full text-brand-600">
              <Truck className="h-8 w-8" />
            </div>
            <span className="font-semibold text-slate-700">Mobile Service</span>
          </div>
          <div className="flex flex-col items-center gap-3">
            <div className="bg-brand-50 p-4 rounded-full text-brand-600">
              <ShieldCheck className="h-8 w-8" />
            </div>
            <span className="font-semibold text-slate-700">Insurance Approved</span>
          </div>
          <div className="flex flex-col items-center gap-3">
            <div className="bg-brand-50 p-4 rounded-full text-brand-600">
              <Award className="h-8 w-8" />
            </div>
            <span className="font-semibold text-slate-700">Lifetime Warranty</span>
          </div>
          <div className="flex flex-col items-center gap-3">
            <div className="bg-brand-50 p-4 rounded-full text-brand-600">
              <UserCheck className="h-8 w-8" />
            </div>
            <span className="font-semibold text-slate-700">Owner Operated</span>
          </div>
        </div>
      </div>
    </section>
  );
}

