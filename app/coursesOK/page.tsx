import Link from "next/link";
import { courses } from "@/data/courses";

export const metadata = {
  title: "All Courses | Vision Leads",
  description: "Explore all engineering courses, career paths, salaries, and opportunities.",
};

export default function CoursesPage() {
  return (
    <main className="min-h-screen bg-white text-gray-900" style={{ fontFamily: "'DM Sans', sans-serif" }}>

      {/* Google Fonts */}
      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=DM+Sans:ital,opsz,wght@0,9..40,400;0,9..40,500;0,9..40,600;1,9..40,400&family=Fraunces:ital,wght@0,700;0,900;1,700&display=swap');
        .card-lift { transition: all 0.25s cubic-bezier(0.4,0,0.2,1); }
        .card-lift:hover { transform: translateY(-5px); box-shadow: 0 24px 64px -12px rgba(0,0,0,0.13); }
        .slide-arrow { transition: transform 0.2s ease; }
        .card-lift:hover .slide-arrow { transform: translateX(4px); }
        .bottom-line { width: 0; transition: width 0.3s ease; }
        .card-lift:hover .bottom-line { width: 100%; }
      `}</style>

      {/* ── Hero ─────────────────────────────────────────────────────── */}
      <div className="relative overflow-hidden bg-gradient-to-b from-slate-50 to-white">
        {/* Decorative gradient blobs */}
        <div className="pointer-events-none absolute -top-40 -left-40 h-[600px] w-[600px] rounded-full bg-gradient-to-br from-indigo-100 via-sky-100 to-transparent opacity-70 blur-3xl" />
        <div className="pointer-events-none absolute top-0 right-0 h-[400px] w-[400px] rounded-full bg-gradient-to-bl from-violet-100 to-transparent opacity-60 blur-3xl" />

        {/* Subtle dot grid */}
        <div
          className="pointer-events-none absolute inset-0 opacity-[0.04]"
          style={{
            backgroundImage: "radial-gradient(circle, #64748b 1px, transparent 1px)",
            backgroundSize: "28px 28px",
          }}
        />

        <div className="relative mx-auto max-w-6xl px-6 pb-16 pt-20 text-center">
          {/* Badge */}
          <div className="mb-6 inline-flex items-center gap-2 rounded-full border border-indigo-100 bg-white px-4 py-2 shadow-md shadow-indigo-50">
            <span className="h-2 w-2 animate-pulse rounded-full bg-indigo-500" />
            <span className="text-xs font-semibold uppercase tracking-[0.18em] text-indigo-600">
              Vision Leads · Engineering Pathways
            </span>
          </div>

          <h1
            className="mx-auto max-w-3xl text-5xl font-black leading-[1.1] tracking-tight text-gray-950 md:text-[64px]"
            style={{ fontFamily: "'Fraunces', serif" }}
          >
            Choose Your{" "}
            <span className="relative inline-block">
              <span className="bg-gradient-to-r from-indigo-600 via-violet-600 to-sky-500 bg-clip-text text-transparent">
                Engineering Path
              </span>
              <svg className="absolute -bottom-2 left-0 w-full" viewBox="0 0 300 12" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M2 8 Q75 2 150 8 Q225 14 298 8" stroke="url(#ul)" strokeWidth="3" strokeLinecap="round" />
                <defs>
                  <linearGradient id="ul" x1="0" y1="0" x2="300" y2="0">
                    <stop offset="0%" stopColor="#6366f1" />
                    <stop offset="50%" stopColor="#7c3aed" />
                    <stop offset="100%" stopColor="#0ea5e9" />
                  </linearGradient>
                </defs>
              </svg>
            </span>
          </h1>

          <p className="mx-auto mt-7 max-w-xl text-base leading-relaxed text-gray-500">
            உங்கள் எதிர்காலத்திற்கான சரியான course தேர்வு செய்யுங்கள். Discover careers, salaries & global opportunities.
          </p>

          {/* Stats */}
          <div className="mt-10 flex flex-wrap items-center justify-center gap-10">
            {[
              { value: `${courses.length}`, label: "Courses Available" },
              { value: "4 yr", label: "B.E / B.Tech" },
              { value: "₹1L+", label: "Top Monthly Salary" },
              { value: "5+", label: "Abroad Countries" },
            ].map((s) => (
              <div key={s.label} className="text-center">
                <p
                  className="text-3xl font-black leading-none text-gray-900"
                  style={{ fontFamily: "'Fraunces', serif" }}
                >
                  {s.value}
                </p>
                <p className="mt-1 text-xs font-medium uppercase tracking-widest text-gray-400">{s.label}</p>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* ── Grid ─────────────────────────────────────────────────────── */}
      <div className="mx-auto max-w-6xl px-6 py-16">

        {/* Section divider */}
        <div className="mb-10 flex items-center gap-4">
          <div className="h-px flex-1 bg-gradient-to-r from-transparent via-gray-200 to-transparent" />
          <span className="rounded-full border border-gray-200 bg-white px-4 py-1 text-xs font-semibold uppercase tracking-[0.2em] text-gray-400 shadow-sm">
            All Programmes
          </span>
          <div className="h-px flex-1 bg-gradient-to-r from-transparent via-gray-200 to-transparent" />
        </div>

        <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {courses.map((course) => (
            <Link
              key={course.id}
              href={`/courses/${course.slug}`}
              className="card-lift group relative flex flex-col overflow-hidden rounded-3xl border border-gray-100 bg-white shadow-[0_2px_16px_rgba(0,0,0,0.05)]"
            >
              {/* Coloured header */}
              <div className={`relative h-28 w-full overflow-hidden bg-gradient-to-br ${course.gradient}`}>
                {/* Inner shimmer */}
                <div
                  className="absolute inset-0 opacity-[0.12]"
                  style={{
                    backgroundImage: "radial-gradient(ellipse at 30% 60%, white 0%, transparent 60%)",
                  }}
                />
                <div
                  className="absolute inset-0 opacity-[0.06]"
                  style={{
                    backgroundImage: "linear-gradient(135deg, white 25%, transparent 25%) -10px 0, linear-gradient(225deg, white 25%, transparent 25%) -10px 0",
                    backgroundSize: "20px 20px",
                  }}
                />
                <span className="absolute bottom-3 left-5 text-4xl drop-shadow">{course.emoji}</span>
                <span className="absolute right-4 top-4 rounded-full bg-black/20 px-3 py-1 text-[10px] font-bold uppercase tracking-widest text-white backdrop-blur-sm">
                  {course.shortTitle}
                </span>
              </div>

              {/* Body */}
              <div className="flex flex-1 flex-col p-6">
                <h2
                  className="mb-2 text-[15px] font-semibold leading-snug text-gray-900 transition-colors group-hover:text-indigo-700"
                  style={{ fontFamily: "'Fraunces', serif" }}
                >
                  {course.title}
                </h2>

                <p className="mb-4 flex-1 text-sm leading-relaxed text-gray-500 line-clamp-2">
                  {course.tagline}
                </p>

                {/* Chips */}
                <div className="mb-4 flex flex-wrap gap-2">
                  <span className="flex items-center gap-1.5 rounded-xl bg-gray-50 px-3 py-1.5 text-xs font-medium text-gray-500">
                    <svg className="h-3.5 w-3.5 text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                    </svg>
                    {course.duration}
                  </span>
                  {course.privateJobs?.salary?.min && (
                    <span
                      className="rounded-xl px-3 py-1.5 text-xs font-semibold"
                      style={{ backgroundColor: course.color + "14", color: course.color }}
                    >
                      From {course.privateJobs.salary.min}
                    </span>
                  )}
                </div>

                {/* Highlight text */}
                <p className="mb-5 line-clamp-1 text-[11px] leading-relaxed text-gray-400">
                  {course.highlight}
                </p>

                {/* Footer CTA */}
                <div className="flex items-center justify-between border-t border-gray-50 pt-4">
                  <span className="text-xs font-semibold text-gray-800">Explore Course</span>
                  <span
                    className="slide-arrow flex h-8 w-8 items-center justify-center rounded-full"
                    style={{ background: `linear-gradient(135deg, ${course.color}22, ${course.color}10)` }}
                  >
                    <svg className="h-3.5 w-3.5" style={{ color: course.color }} fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M9 5l7 7-7 7" />
                    </svg>
                  </span>
                </div>
              </div>

              {/* Bottom gradient line on hover */}
              <div
                className="bottom-line absolute bottom-0 left-0 h-[3px] rounded-full"
                style={{ background: `linear-gradient(90deg, ${course.color}, transparent)` }}
              />
            </Link>
          ))}
        </div>
      </div>

      {/* Footer */}
      <div className="border-t border-gray-100 bg-gradient-to-r from-slate-50 via-white to-slate-50 py-10 text-center">
        <p
          className="text-xl font-black text-gray-900"
          style={{ fontFamily: "'Fraunces', serif" }}
        >
          Vision Leads
        </p>
        <p className="mt-1 text-sm text-gray-400">Engineering Career Guidance · All rights reserved</p>
      </div>
    </main>
  );
}