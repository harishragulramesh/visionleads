import Link from 'next/link';
import { Activity, Award, BookOpen, UserPlus } from 'lucide-react';

export default function MedicalPage() {
  return (
    <main className="bg-white">
      <section className="bg-emerald-900 text-white py-24 px-6 text-center">
        <h1 className="text-5xl font-extrabold mb-6">Leading Medical Universities</h1>
        <p className="text-xl max-w-2xl mx-auto opacity-80">
          Navigating the path to MBBS, BDS, and Allied Sciences in India’s finest Government and Private wings.
        </p>
      </section>

      <section className="max-w-6xl mx-auto py-20 px-6">
        <div className="bg-emerald-50 rounded-3xl p-12 mb-16 shadow-inner">
          <h2 className="text-3xl font-bold text-emerald-900 mb-8">Total Medical Guidance</h2>
          <div className="grid md:grid-cols-3 gap-8 text-center">
            <div className="p-4">
              <Activity className="mx-auto mb-4 text-emerald-600" size={40} />
              <h4 className="font-bold mb-2">NEET Strategy</h4>
              <p className="text-sm text-gray-600">Cut-off analysis for Government Medical Colleges across Tamil Nadu.</p>
            </div>
            <div className="p-4 border-x border-emerald-200">
              <Award className="mx-auto mb-4 text-emerald-600" size={40} />
              <h4 className="font-bold mb-2">Top Private Wings</h4>
              <p className="text-sm text-gray-600">Selecting Deemed Universities with the highest clinical patient flow.</p>
            </div>
            <div className="p-4">
              <BookOpen className="mx-auto mb-4 text-emerald-600" size={40} />
              <h4 className="font-bold mb-2">Allied Sciences</h4>
              <p className="text-sm text-gray-600">Expertise in B.Pharm, Nursing, and Physiotherapy career paths.</p>
            </div>
          </div>
        </div>

        <div className="text-center py-10 bg-white border-2 border-emerald-600 rounded-3xl">
          <h3 className="text-3xl font-bold text-gray-800 mb-4">Ready to Serve Humanity?</h3>
          <p className="text-gray-500 mb-8 px-6">Join the league of medical professionals with Vision Leads counseling.</p>
          <Link href="/form" className="inline-flex items-center gap-3 bg-emerald-600 hover:bg-emerald-700 text-white font-bold py-4 px-12 rounded-full transition-all hover:shadow-2xl">
            <UserPlus /> Begin Application
          </Link>
        </div>
      </section>
    </main>
  );
}