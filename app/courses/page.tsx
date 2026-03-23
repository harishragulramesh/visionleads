import Link from "next/link";
import { categories } from "@/data/categories";
import { courses } from "@/data/courses";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "All Courses — Engineering, Arts, Medical, Commerce | Vision Leads",
  description:
    "Explore all courses across Engineering, Arts & Science, Medical, and Commerce. Find the best career path, salary details, government jobs, and abroad opportunities — all in one place.",
  keywords: [
    "courses after 12th Tamil Nadu",
    "engineering courses India",
    "best course for future",
    "career guidance Tamil Nadu",
    "B.E B.Tech course list",
    "Arts Science Medical Commerce courses",
    "Vision Leads",
    "course salary details",
    "government jobs after engineering",
  ].join(", "),
  alternates: { canonical: "https://visionleads.in/courses" },
  openGraph: {
    type: "website",
    url: "https://visionleads.in/courses",
    title: "All Courses | Vision Leads — Career Guidance",
    description: "Explore Engineering, Arts & Science, Medical and Commerce courses with salary, career paths and abroad opportunities.",
    siteName: "Vision Leads",
    locale: "en_IN",
    images: [{ url: "https://visionleads.in/og/courses.png", width: 1200, height: 630, alt: "All Courses — Vision Leads" }],
  },
  twitter: {
    card: "summary_large_image",
    title: "All Courses | Vision Leads",
    description: "Find your perfect course — Engineering, Arts, Medical & Commerce with full career & salary details.",
    images: ["https://visionleads.in/og/courses.png"],
    site: "@visionleads",
  },
  robots: { index: true, follow: true, googleBot: { index: true, follow: true, "max-image-preview": "large" } },
};

const FONTS = `@import url('https://fonts.googleapis.com/css2?family=DM+Sans:ital,opsz,wght@0,9..40,400;0,9..40,500;0,9..40,600;0,9..40,700&family=Fraunces:ital,wght@0,700;0,900;1,700&display=swap');`;

export default function CoursesPage() {
  const totalCourses = courses.length;

  return (
    <main className="min-h-screen bg-white" style={{ fontFamily: "'DM Sans', sans-serif" }}>
      <style>{`
        ${FONTS}
        .cat-card { transition: all 0.28s cubic-bezier(0.4,0,0.2,1); }
        .cat-card:hover { transform: translateY(-6px); box-shadow: 0 28px 64px -12px rgba(0,0,0,0.14); }
        .arrow-icon { transition: transform 0.2s ease; }
        .cat-card:hover .arrow-icon { transform: translateX(5px); }
        .bottom-line { width:0; transition: width 0.3s ease; }
        .cat-card:hover .bottom-line { width: 100%; }
        .hero-blob { animation: blob 8s ease-in-out infinite; }
        .hero-blob-2 { animation: blob 10s ease-in-out infinite reverse; }
        @keyframes blob { 0%,100%{transform:translate(0,0) scale(1)} 50%{transform:translate(20px,-20px) scale(1.05)} }
      `}</style>

      {/* ── Navbar ─────────────────────────────────────────────── */}
      {/* <nav className="sticky top-0 z-50 border-b border-gray-100 bg-white/80 backdrop-blur-md">
        <div className="mx-auto flex max-w-6xl items-center justify-between px-6 py-4">
          <Link href="/" className="flex items-center gap-2.5">
            <div className="flex h-8 w-8 items-center justify-center rounded-xl bg-gradient-to-br from-indigo-500 to-violet-600 text-sm font-black text-white">V</div>
            <span className="text-base font-black text-gray-900" style={{ fontFamily: "'Fraunces', serif" }}>Vision Leads</span>
          </Link>
          <div className="hidden items-center gap-6 md:flex">
            {categories.map((cat) => (
              <Link key={cat.id} href={`/courses/${cat.slug}`} className="text-sm font-medium text-gray-500 transition-colors hover:text-gray-900">
                {cat.shortTitle}
              </Link>
            ))}
          </div>
          <Link href="/courses/engineering" className="rounded-xl bg-gray-900 px-4 py-2 text-sm font-semibold text-white transition-all hover:bg-gray-700">
            Explore →
          </Link>
        </div>
      </nav> */}

      {/* ── Hero ───────────────────────────────────────────────── */}
      <section className="relative overflow-hidden bg-gradient-to-b from-slate-50 to-white">
        <div className="hero-blob pointer-events-none absolute -top-48 -left-48 h-[700px] w-[700px] rounded-full bg-gradient-to-br from-indigo-100 via-violet-100 to-transparent opacity-60 blur-3xl" />
        <div className="hero-blob-2 pointer-events-none absolute -top-32 right-0 h-[500px] w-[500px] rounded-full bg-gradient-to-bl from-pink-100 via-sky-100 to-transparent opacity-50 blur-3xl" />
        <div className="pointer-events-none absolute inset-0 opacity-[0.035]" style={{ backgroundImage: "radial-gradient(circle, #6366f1 1px, transparent 1px)", backgroundSize: "32px 32px" }} />

        <div className="relative mx-auto max-w-6xl px-6 pb-20 pt-24 text-center">
          <div className="mb-7 inline-flex items-center gap-2 rounded-full border border-indigo-100 bg-white px-4 py-2 shadow-md shadow-indigo-50/60">
            <span className="h-2 w-2 animate-pulse rounded-full bg-indigo-500" />
            <span className="text-xs font-bold uppercase tracking-[0.18em] text-indigo-600">#1 Engineering Career Guidance</span>
          </div>

          <h1 className="mx-auto max-w-4xl text-5xl font-black leading-[1.08] tracking-tight text-gray-950 md:text-[64px]" style={{ fontFamily: "'Fraunces', serif" }}>
            Your Future Starts With{" "}
            <span className="relative whitespace-nowrap">
              <span className="bg-gradient-to-r from-indigo-600 via-violet-600 to-sky-500 bg-clip-text text-transparent">the Right Course</span>
              <svg className="absolute -bottom-2 left-0 w-full" viewBox="0 0 400 14" fill="none">
                <path d="M2 10 Q100 3 200 9 Q300 15 398 8" stroke="url(#ul)" strokeWidth="3.5" strokeLinecap="round" />
                <defs>
                  <linearGradient id="ul" x1="0" y1="0" x2="400" y2="0">
                    <stop offset="0%" stopColor="#6366f1" /><stop offset="50%" stopColor="#7c3aed" /><stop offset="100%" stopColor="#0ea5e9" />
                  </linearGradient>
                </defs>
              </svg>
            </span>
          </h1>

          <p className="mx-auto mt-8 max-w-xl text-lg leading-relaxed text-gray-500">
            உங்கள் interest பார்த்து சரியான course, career, salary எல்லாம் ஒரே இடத்தில் தெரிஞ்சுக்கோ.
          </p>

          <div className="mt-9 flex flex-wrap items-center justify-center gap-3">
            <Link href="/courses/engineering" className="inline-flex items-center gap-2 rounded-2xl bg-gradient-to-r from-indigo-600 to-violet-600 px-7 py-3.5 text-sm font-bold text-white shadow-lg shadow-indigo-200 transition-all hover:opacity-95">
              Explore Engineering
              <svg className="h-4 w-4" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M9 5l7 7-7 7" /></svg>
            </Link>
            <Link href="/courses/arts-science" className="inline-flex items-center gap-2 rounded-2xl border border-gray-200 bg-white px-7 py-3.5 text-sm font-bold text-gray-700 shadow-sm transition-all hover:shadow-md">
              Arts & Science
            </Link>
          </div>

          {/* Stats */}
          <div className="mt-14 flex flex-wrap items-center justify-center gap-10">
            {[
              { value: `${totalCourses}+`, label: "Courses Covered" },
              { value: "4", label: "Stream Categories" },
              { value: "₹1L+", label: "Top Monthly Salary" },
              { value: "5+", label: "Abroad Countries" },
            ].map((s) => (
              <div key={s.label} className="text-center">
                <p className="text-3xl font-black leading-none text-gray-900" style={{ fontFamily: "'Fraunces', serif" }}>{s.value}</p>
                <p className="mt-1.5 text-xs font-semibold uppercase tracking-widest text-gray-400">{s.label}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── Categories ─────────────────────────────────────────── */}
      <section className="mx-auto max-w-6xl px-6 py-20">
        <div className="mb-12 text-center">
          <p className="mb-2 text-xs font-bold uppercase tracking-[0.2em] text-gray-400">Browse by Stream</p>
          <h2 className="text-4xl font-black text-gray-900" style={{ fontFamily: "'Fraunces', serif" }}>Choose Your Stream</h2>
          <p className="mx-auto mt-3 max-w-md text-base text-gray-500">Select a category to explore all courses, careers, and salary details.</p>
        </div>

        <div className="grid grid-cols-1 gap-6 sm:grid-cols-2">
          {categories.map((cat) => (
            <Link
              key={cat.id}
              href={`/courses/${cat.slug}`}
              className="cat-card group relative flex flex-col overflow-hidden rounded-3xl border border-gray-100 bg-white shadow-[0_2px_20px_rgba(0,0,0,0.06)]"
            >
              {/* Gradient header */}
              <div className={`relative h-40 w-full overflow-hidden bg-gradient-to-br ${cat.gradient}`}>
                <div className="absolute inset-0 opacity-20" style={{ backgroundImage: "radial-gradient(ellipse at 20% 60%, white 0%, transparent 55%)" }} />
                <div className="absolute inset-0 opacity-[0.08]" style={{ backgroundImage: "repeating-linear-gradient(45deg, white 0, white 1px, transparent 0, transparent 50%)", backgroundSize: "20px 20px" }} />
                <span className="absolute bottom-5 left-6 text-6xl drop-shadow-sm">{cat.emoji}</span>
                <span className="absolute right-5 top-5 rounded-full bg-black/20 px-3 py-1 text-xs font-bold text-white backdrop-blur-sm">
                  {cat.courseIds.length > 0 ? `${cat.courseIds.length} courses` : "Coming Soon"}
                </span>
              </div>

              {/* Body */}
              <div className="flex flex-1 flex-col p-7">
                <span className="mb-2 inline-block rounded-lg px-2.5 py-1 text-[10px] font-bold uppercase tracking-widest" style={{ backgroundColor: cat.color + "15", color: cat.color }}>
                  {cat.shortTitle}
                </span>
                <h3 className="mt-1 text-2xl font-black text-gray-900 transition-colors group-hover:text-indigo-700" style={{ fontFamily: "'Fraunces', serif" }}>{cat.title}</h3>
                <p className="mt-2 flex-1 text-sm leading-relaxed text-gray-500 line-clamp-2">{cat.description}</p>

                <div className="mt-6 flex items-center justify-between border-t border-gray-50 pt-5">
                  <span className="text-sm font-semibold text-gray-800">{cat.courseIds.length > 0 ? "Explore Courses" : "Coming Soon"}</span>
                  <span className="arrow-icon flex h-9 w-9 items-center justify-center rounded-2xl" style={{ background: `linear-gradient(135deg, ${cat.color}22, ${cat.color}10)` }}>
                    <svg className="h-4 w-4" style={{ color: cat.color }} fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M9 5l7 7-7 7" />
                    </svg>
                  </span>
                </div>
              </div>

              <div className="bottom-line absolute bottom-0 left-0 h-[3px] rounded-full" style={{ background: `linear-gradient(90deg, ${cat.color}, transparent)` }} />
            </Link>
          ))}
        </div>
      </section>

      {/* ── CTA ────────────────────────────────────────────────── */}
      <section className="mx-auto max-w-6xl px-6 pb-20">
        <div className="relative overflow-hidden rounded-3xl bg-gradient-to-br from-indigo-600 via-violet-600 to-purple-700 p-12 text-center text-white shadow-2xl shadow-indigo-200">
          <div className="pointer-events-none absolute -top-20 -right-20 h-64 w-64 rounded-full bg-white/10 blur-2xl" />
          <div className="pointer-events-none absolute -bottom-16 -left-16 h-48 w-48 rounded-full bg-white/10 blur-2xl" />
          <p className="relative mb-2 text-sm font-bold uppercase tracking-widest text-indigo-200">Start Today</p>
          <h2 className="relative mb-4 text-4xl font-black leading-tight" style={{ fontFamily: "'Fraunces', serif" }}>Not Sure Which Course to Pick?</h2>
          <p className="relative mx-auto mb-8 max-w-md text-base text-indigo-100">Explore all Engineering courses and find the one that matches your interest, skills & salary goals.</p>
          <Link href="/courses/engineering" className="relative inline-flex items-center gap-2 rounded-2xl bg-white px-8 py-4 text-sm font-bold text-indigo-700 shadow-lg transition-all hover:shadow-xl">
            View All Engineering Courses
            <svg className="h-4 w-4" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M9 5l7 7-7 7" /></svg>
          </Link>
        </div>
      </section>

      {/* ── Footer ─────────────────────────────────────────────── */}
      {/* <footer className="border-t border-gray-100 bg-white py-10">
        <div className="mx-auto flex max-w-6xl flex-col items-center justify-between gap-4 px-6 md:flex-row">
          <div className="flex items-center gap-2.5">
            <div className="flex h-8 w-8 items-center justify-center rounded-xl bg-gradient-to-br from-indigo-500 to-violet-600 text-sm font-black text-white">V</div>
            <span className="text-base font-black text-gray-900" style={{ fontFamily: "'Fraunces', serif" }}>Vision Leads</span>
          </div>
          <p className="text-sm text-gray-400">Engineering Career Guidance · All rights reserved</p>
          <div className="flex gap-5">
            {categories.map((c) => (
              <Link key={c.id} href={`/courses/${c.slug}`} className="text-sm text-gray-400 hover:text-gray-700">{c.shortTitle}</Link>
            ))}
          </div>
        </div>
      </footer> */}
    </main>
  );
}