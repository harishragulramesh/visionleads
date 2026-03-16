"use client";

import React, { useState } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { Search, User, Mail, CheckCircle2, Users } from 'lucide-react';

const ARTICLES = [
  {
    slug: "top-engineering-colleges-tamil-nadu",
    category: "ENGINEERING",
    title: "Top Engineering Colleges in Tamil Nadu: Rankings and Admissions",
    image: "/2148950577.jpg" // Replace with your engineering image
  },
  {
    slug: "how-to-choose-right-college",
    category: "COLLEGE PREP",
    title: "How to Choose the Right College: Beyond the Rankings",
    image: "/50075.jpg" // Replace with your college prep image
  },
  {
    slug: "merit-based-scholarships-2024",
    category: "SCHOLARSHIPS",
    title: "Navigating Merit-Based Scholarships in 2024",
    image: "/121218.jpg" // Replace with your scholarships image
  },
  {
    slug: "ai-revolution-career-path",
    category: "CAREER TRENDS",
    title: "The AI Revolution: Future-Proofing Your Career Path",
    image: "https://images.unsplash.com/photo-1677442136019-21780ecad995?auto=format&fit=crop&q=80"
  },
  {
    slug: "rural-tn-to-silicon-valley",
    category: "SUCCESS STORIES",
    title: "From Rural Tamil Nadu to Silicon Valley: A Journey",
    image: "https://images.unsplash.com/photo-1523580494863-6f3031224c94?auto=format&fit=crop&q=80"
  },
  {
    slug: "mentorship-competitive-advantage",
    category: "MENTORSHIP",
    title: "Why Having a Mentor is the Real Competitive Advantage",
    image: "https://images.unsplash.com/photo-1515187029135-18ee286d815b?auto=format&fit=crop&q=80"
  }
];

const CATEGORIES = ["All Articles", "College Prep", "Engineering", "Scholarships", "Career Trends", "Success Stories", "Mentorship"];

export default function LandingPage() {
  const [activeFilter, setActiveFilter] = useState("All Articles");

  const filteredArticles = ARTICLES.filter(article => 
    activeFilter === "All Articles" || article.category === activeFilter.toUpperCase()
  );

  return (
    <div className="min-h-screen bg-white font-sans text-slate-900">


      {/* --- Hero Section --- */}
      <section className="relative h-[500px] w-full bg-slate-900 overflow-hidden">
        <Image 
          src="https://educationquest.org/wp-content/uploads/2023/04/F92FFB18-E2AE-4AEB-B188-3D1E294DCD84-e1683669512174-856x556.jpeg" 
          alt="University Library"
          fill
          priority
          className="object-cover opacity-40"
        />
        <div className="relative z-10 flex flex-col justify-center h-full px-12 max-w-4xl">
          <span className="bg-blue-600 text-white text-xs font-bold px-3 py-1 w-fit rounded mb-4 uppercase">
            Featured Guide
          </span>
          <h1 className="text-5xl font-bold text-white mb-6 leading-tight">
            Mastering Your Future:<br /> The Ultimate College Selection Guide 2024
          </h1>
          <p className="text-slate-200 text-lg mb-8 max-w-xl">
            Navigating the complex landscape of higher education requires more than just grades. 
            Discover our proven framework for finding your perfect fit.
          </p>
          <Link href="/articles/ultimate-college-guide" className="bg-blue-600 hover:bg-blue-700 text-white font-semibold py-3 px-6 rounded-md w-fit flex items-center gap-2 transition">
            Read Full Article <span>→</span>
          </Link>
        </div>
      </section>

      {/* --- Category Filter --- */}
      <div className="flex gap-8 px-12 py-6 border-b text-sm font-medium text-slate-500 overflow-x-auto whitespace-nowrap scrollbar-hide">
        {CATEGORIES.map((cat) => (
          <button 
            key={cat}
            onClick={() => setActiveFilter(cat)}
            className={`pb-1 transition-all duration-200 ${
              activeFilter === cat 
              ? "text-blue-600 border-b-2 border-blue-600" 
              : "hover:text-slate-800"
            }`}
          >
            {cat}
          </button>
        ))}
      </div>

      {/* --- Article Grid --- */}
      <main className="px-12 py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10">
          {filteredArticles.length > 0 ? (
            filteredArticles.map((article, index) => (
              <ArticleCard 
                key={index}
                slug={article.slug}
                category={article.category} 
                title={article.title}
                image={article.image}
              />
            ))
          ) : (
            <div className="col-span-full py-20 text-center">
              <p className="text-slate-400 text-lg italic">No articles found in this category.</p>
            </div>
          )}
        </div>
      </main>

      {/* --- Newsletter --- */}
      <section className="mx-12 my-16 bg-blue-50 rounded-2xl p-12 text-center">
        <div className="inline-flex items-center justify-center w-12 h-12 bg-white rounded-full shadow-sm mb-6">
          <Mail className="text-blue-600" />
        </div>
        <h2 className="text-3xl font-bold mb-4">Stay Ahead of the Curve</h2>
        <div className="flex flex-col sm:flex-row gap-3 justify-center max-w-md mx-auto">
          <input type="email" placeholder="Enter your email" className="flex-1 px-4 py-3 rounded-md border" />
          <button className="bg-blue-600 text-white px-6 py-3 rounded-md font-semibold">Subscribe</button>
        </div>
      </section>

      {/* --- Editorial Vision --- */}
      <section className="px-12 py-20 grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
        <div>
          <h2 className="text-3xl font-bold mb-8">Our Editorial Vision</h2>
          <div className="space-y-8">
            <div className="flex gap-4">
              <CheckCircle2 className="text-blue-600 flex-shrink-0" size={24} />
              <div>
                <h4 className="font-bold">Data-Driven Insights</h4>
                <p className="text-slate-600 text-sm">Our recommendations are backed by placement statistics and institutional quality audits.</p>
              </div>
            </div>
            <div className="flex gap-4">
              <Users className="text-blue-600 flex-shrink-0" size={24} />
              <div>
                <h4 className="font-bold">Expert Network</h4>
                <p className="text-slate-600 text-sm">Articles are co-authored by senior educators and HR professionals from Fortune 500 companies.</p>
              </div>
            </div>
          </div>
        </div>
        <div className="flex gap-4 h-[400px]">
           <div className="flex-1 relative rounded-2xl overflow-hidden mt-12">
            <Image src="https://images.unsplash.com/photo-1522202176988-66273c2fd55f?auto=format&fit=crop&q=80" alt="Team" fill className="object-cover" />
          </div>
          <div className="flex-1 relative rounded-2xl overflow-hidden mb-12">
            <Image src="https://images.unsplash.com/photo-1516321318423-f06f85e504b3?auto=format&fit=crop&q=80" alt="Tech" fill className="object-cover" />
          </div>
        </div>
      </section>

      {/* --- Footer --- */}
      <footer className="h-40 bg-black relative flex items-end justify-center pb-8">
        <div className="absolute -top-20 left-0 w-full overflow-hidden leading-[0]">
          <svg viewBox="0 0 1200 120" preserveAspectRatio="none" className="relative block w-full h-[100px] fill-black">
            <path d="M0,0 C300,120 900,120 1200,0 L1200,120 L0,120 Z"></path>
          </svg>
        </div>
        <p className="text-slate-500 text-sm">© 2026 Vision Leads. All rights reserved.</p>
      </footer>
    </div>
  );
}

function ArticleCard({ slug, category, title, image }: { slug: string; category: string; title: string; image: string }) {
  return (
    <Link href={`/articles/${slug}`} className="group block">
      <div className="relative h-48 w-full mb-4 overflow-hidden rounded-xl bg-slate-100">
        <Image 
          src={image} 
          alt={title} 
          fill 
          className="object-cover group-hover:scale-105 transition duration-500"
        />
      </div>
      <span className="text-blue-600 text-[10px] font-bold tracking-widest uppercase mb-2 block">
        {category} • 10 MIN READ
      </span>
      <h3 className="font-bold text-lg leading-snug group-hover:text-blue-600 transition">
        {title}
      </h3>
      <p className="text-slate-500 text-sm mt-2 line-clamp-2">
        A detailed breakdown of the best institutions and strategies to help you succeed in your career journey.
      </p>
    </Link>
  );
}