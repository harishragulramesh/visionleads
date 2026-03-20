import Link from 'next/link';
import { Sparkles, Library, Zap, Send } from 'lucide-react';

export default function ArtsSciencePage() {
  return (
    <main className="bg-stone-50">
      <section className="bg-indigo-900 text-white py-24 px-6 text-center">
        <h1 className="text-5xl font-extrabold mb-6 text-transparent bg-clip-text bg-gradient-to-r from-pink-300 to-indigo-200">
          Arts & Science Centers
        </h1>
        <p className="text-xl max-w-2xl mx-auto opacity-80">
          Transforming students into thought leaders through creative and liberal arts excellence in Tamil Nadu.
        </p>
      </section>

      <section className="max-w-6xl mx-auto py-20 px-6">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          <div className="space-y-6">
            <h2 className="text-4xl font-bold text-indigo-900">Why Choose Liberal Arts?</h2>
            <p className="text-gray-700 text-lg">
              Education is no longer just about memorization; it's about **critical thinking**. Our partnered Arts 
              & Science centers in Salem and beyond emphasize:
            </p>
            <div className="grid grid-cols-2 gap-4">
              <div className="bg-white p-4 rounded-xl shadow-sm border-l-4 border-pink-500">
                <Zap size={20} className="text-pink-500 mb-2"/>
                <p className="font-bold">Digital Media</p>
              </div>
              <div className="bg-white p-4 rounded-xl shadow-sm border-l-4 border-indigo-500">
                <Library size={20} className="text-indigo-500 mb-2"/>
                <p className="font-bold">Data Science</p>
              </div>
            </div>
          </div>
          <div className="bg-indigo-900 text-white p-12 rounded-[40px] shadow-2xl relative overflow-hidden">
            <Sparkles className="absolute top-4 right-4 text-indigo-700 w-24 h-24" />
            <h3 className="text-2xl font-bold mb-4 relative z-10">Unleash Your Creativity</h3>
            <p className="opacity-80 mb-8 relative z-10">
              Apply today to explore courses in Visual Comm, Commerce, and Pure Sciences at Periyar University's elite centers.
            </p>
            <Link href="/form" className="relative z-10 block text-center bg-white text-indigo-900 font-black py-4 px-8 rounded-2xl hover:bg-pink-100 transition-colors uppercase tracking-widest shadow-lg">
              Apply Now <Send className="inline ml-2" size={18} />
            </Link>
          </div>
        </div>
      </section>
    </main>
  );
}