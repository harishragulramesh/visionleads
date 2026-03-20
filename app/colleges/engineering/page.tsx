import Link from 'next/link';
import { Cpu, Globe, Rocket, ArrowRight } from 'lucide-react';

export default function EngineeringPage() {
  return (
    <main className="bg-white">
      {/* Hero */}
      <section className="bg-slate-900 text-white py-24 px-6 text-center">
        <h1 className="text-5xl font-extrabold mb-6">Premier Engineering Hubs</h1>
        <p className="text-xl max-w-2xl mx-auto opacity-80">
          Bridging the gap between a standard degree and industry-ready expertise through Anna University’s top-tier institutions.
        </p>
      </section>

      {/* Depth Content */}
      <section className="max-w-6xl mx-auto py-20 px-6">
        <div className="grid lg:grid-cols-2 gap-16 mb-20">
          <div>
            <h2 className="text-3xl font-bold mb-6 text-slate-800">Beyond the Counseling Code</h2>
            <p className="text-gray-600 mb-4 leading-relaxed">
              In the current Tamil Nadu engineering landscape, a college code is just a number. At Vision Leads, we evaluate 
              **Engineering Hubs** based on their R&D labs, industry partnerships, and campus placement ratios.
            </p>
            <div className="space-y-4">
              <div className="flex gap-4">
                <div className="bg-blue-100 p-2 rounded-lg h-fit"><Cpu className="text-blue-600"/></div>
                <div>
                  <h4 className="font-bold">Tier-1 Affiliation</h4>
                  <p className="text-sm text-gray-500">Selection of colleges with consistent NBA and NAAC A++ accreditation.</p>
                </div>
              </div>
              <div className="flex gap-4">
                <div className="bg-blue-100 p-2 rounded-lg h-fit"><Globe className="text-blue-600"/></div>
                <div>
                  <h4 className="font-bold">Global Curriculum</h4>
                  <p className="text-sm text-gray-500">Exposure to AI, Robotics, and Sustainable Energy specializations.</p>
                </div>
              </div>
            </div>
          </div>
          <div className="bg-slate-50 p-10 rounded-3xl border-2 border-dashed border-slate-200 flex flex-col justify-center items-center text-center">
            <Rocket className="w-16 h-16 text-blue-600 mb-6" />
            <h3 className="text-2xl font-bold mb-4">Start Your Tech Journey</h3>
            <p className="text-gray-500 mb-8">Secure your spot in the 2026 Engineering intake through our expert counseling.</p>
            <Link href="/form" className="bg-blue-600 hover:bg-blue-700 text-white font-bold py-4 px-10 rounded-full flex items-center gap-2 transition-all transform hover:scale-105 shadow-xl">
              Apply for Counseling <ArrowRight size={20} />
            </Link>
          </div>
        </div>
      </section>
    </main>
  );
}