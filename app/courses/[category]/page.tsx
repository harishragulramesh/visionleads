import { notFound } from "next/navigation";
import Link from "next/link";
import { categories, getCategoryBySlug, getCoursesForCategory } from "@/data/categories";
import type { Metadata } from "next";
interface Props {
  params: Promise<{ category: string }>;
}

export async function generateStaticParams() {
  return categories.map((c) => ({ category: c.slug }));
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { category } = await params;
  const cat = getCategoryBySlug(category);
  if (!cat) return {};
 
  const title = `${cat.title} Courses in Tamil Nadu | ${cat.shortTitle} Guide | Vision Leads`;
  const description = `Explore all ${cat.title} courses — career paths, salary ranges, government jobs, and abroad opportunities. ${cat.description}`;
  const url = `https://visionleads.in/courses/${category}`;
 
  return {
    title,
    description,
    keywords: [
      `${cat.title} courses`,
      `${cat.shortTitle} career guide`,
      `${cat.title} salary`,
      `${cat.title} government jobs`,
      "engineering courses after 12th",
      "best courses Tamil Nadu",
      "Vision Leads career guidance",
    ].join(", "),
    alternates: { canonical: url },
    openGraph: {
      type: "website",
      url,
      title,
      description,
      siteName: "Vision Leads",
      locale: "en_IN",
      images: [{ url: `https://visionleads.in/og/${category}.png`, width: 1200, height: 630, alt: `${cat.title} Courses — Vision Leads` }],
    },
    twitter: {
      card: "summary_large_image",
      title,
      description,
      images: [`https://visionleads.in/og/${category}.png`],
      site: "@visionleads",
    },
    robots: { index: true, follow: true, googleBot: { index: true, follow: true, "max-image-preview": "large" } },
  };
}

const FONTS = `@import url('https://fonts.googleapis.com/css2?family=DM+Sans:ital,opsz,wght@0,9..40,400;0,9..40,500;0,9..40,600;0,9..40,700&family=Fraunces:ital,wght@0,700;0,900;1,700&display=swap');`;

export default async function CategoryPage({ params }: Props) {
  const { category } = await params;
  const cat = getCategoryBySlug(category);
  if (!cat) notFound();

  const catCourses = getCoursesForCategory(cat.id);

  return (
    <main className="min-h-screen bg-white text-gray-900" style={{ fontFamily: "'DM Sans', sans-serif" }}>
      <style>{`
        ${FONTS}
        .card-lift { transition: all 0.25s cubic-bezier(0.4,0,0.2,1); }
        .card-lift:hover { transform: translateY(-5px); box-shadow: 0 24px 64px -12px rgba(0,0,0,0.13); }
        .slide-arrow { transition: transform 0.2s ease; }
        .card-lift:hover .slide-arrow { transform: translateX(4px); }
        .bottom-line { width:0; transition: width 0.3s ease; }
        .card-lift:hover .bottom-line { width: 100%; }
      `}</style>

      {/* ── Navbar ─────────────────────────────────────────────── */}
      {/* <nav className="sticky top-0 z-50 border-b border-gray-100 bg-white/80 backdrop-blur-md">
        <div className="mx-auto flex max-w-6xl items-center justify-between px-6 py-4">
          <Link href="/" className="flex items-center gap-2.5">
            <div className="flex h-8 w-8 items-center justify-center rounded-xl bg-gradient-to-br from-indigo-500 to-violet-600 text-sm font-black text-white">V</div>
            <span className="text-base font-black text-gray-900" style={{ fontFamily: "'Fraunces', serif" }}>Vision Leads</span>
          </Link>
          <div className="hidden items-center gap-6 md:flex">
            {categories.map((c) => (
              <Link key={c.id} href={`/courses/${c.slug}`}
                className={`text-sm font-medium transition-colors ${c.slug === category ? "font-bold text-gray-900" : "text-gray-500 hover:text-gray-900"}`}>
                {c.shortTitle}
              </Link>
            ))}
          </div>
          <Link href="/courses" className="rounded-xl border border-gray-200 bg-white px-4 py-2 text-sm font-semibold text-gray-700 shadow-sm transition-all hover:border-gray-300">
            ← All Streams
          </Link>
        </div>
      </nav> */}

      {/* ── Hero ───────────────────────────────────────────────── */}
      <div className="relative overflow-hidden">
        <div className={`absolute inset-0 bg-gradient-to-br ${cat.gradient} opacity-[0.06]`} />
        <div className="pointer-events-none absolute -top-40 left-1/2 h-[600px] w-[600px] -translate-x-1/2 rounded-full blur-3xl" style={{ background: cat.color + "18" }} />
        <div className="pointer-events-none absolute inset-0 opacity-[0.03]" style={{ backgroundImage: "radial-gradient(circle, #374151 1px, transparent 1px)", backgroundSize: "28px 28px" }} />

        <div className="relative mx-auto max-w-6xl px-6 pb-16 pt-12">
          {/* Breadcrumb */}
          <div className="mb-6 flex items-center gap-2 text-sm text-gray-400">
            <Link href="/" className="hover:text-gray-700">Home</Link>
            <span>/</span>
            <Link href="/courses" className="hover:text-gray-700">Courses</Link>
            <span>/</span>
            <span className="font-medium text-gray-700">{cat.title}</span>
          </div>

          <div className="flex flex-col gap-8 md:flex-row md:items-end md:justify-between">
            <div>
              <div className="mb-4 flex items-center gap-4">
                <div className="flex h-16 w-16 items-center justify-center rounded-2xl text-4xl shadow-lg"
                  style={{ background: `linear-gradient(135deg, ${cat.color}22, ${cat.color}10)`, border: `1.5px solid ${cat.color}30` }}>
                  {cat.emoji}
                </div>
                <span className="rounded-full px-4 py-1.5 text-xs font-bold uppercase tracking-widest" style={{ backgroundColor: cat.color + "15", color: cat.color }}>
                  {cat.shortTitle}
                </span>
              </div>
              <h1 className="text-5xl font-black leading-tight text-gray-950 md:text-6xl" style={{ fontFamily: "'Fraunces', serif" }}>
                {cat.title}
              </h1>
              <p className="mt-3 max-w-xl text-base leading-relaxed text-gray-500">{cat.description}</p>
            </div>

            {catCourses.length > 0 && (
              <div className="shrink-0 rounded-3xl border border-gray-100 bg-white p-6 shadow-sm text-center">
                <p className="text-5xl font-black" style={{ fontFamily: "'Fraunces', serif", color: cat.color }}>{catCourses.length}</p>
                <p className="text-xs font-semibold uppercase tracking-widest text-gray-400">Courses Available</p>
              </div>
            )}
          </div>
        </div>
      </div>

      {/* ── Courses / Empty ────────────────────────────────────── */}
      <div className="mx-auto max-w-6xl px-6 py-14">
        {catCourses.length === 0 ? (
          <div className="flex flex-col items-center justify-center py-24 text-center">
            <span className="mb-4 text-6xl">🚧</span>
            <h2 className="mb-2 text-2xl font-black text-gray-900" style={{ fontFamily: "'Fraunces', serif" }}>Coming Soon</h2>
            <p className="mb-8 text-gray-500">We're preparing detailed course guides for {cat.title}.</p>
            <Link href="/courses" className="rounded-2xl border border-gray-200 bg-white px-6 py-3 text-sm font-semibold text-gray-700 shadow-sm transition-all hover:shadow-md">
              ← Back to All Streams
            </Link>
          </div>
        ) : (
          <>
            <div className="mb-10 flex items-center gap-4">
              <div className="h-px flex-1 bg-gradient-to-r from-transparent via-gray-200 to-transparent" />
              <span className="rounded-full border border-gray-200 bg-white px-4 py-1 text-xs font-semibold uppercase tracking-[0.2em] text-gray-400 shadow-sm">
                {catCourses.length} Programmes
              </span>
              <div className="h-px flex-1 bg-gradient-to-r from-transparent via-gray-200 to-transparent" />
            </div>

            <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
              {catCourses.map((course) => (
                <Link
                  key={course.id}
                  href={`/courses/${category}/${course.slug}`}
                  className="card-lift group relative flex flex-col overflow-hidden rounded-3xl border border-gray-100 bg-white shadow-[0_2px_16px_rgba(0,0,0,0.05)]"
                >
                  <div className={`relative h-28 w-full overflow-hidden bg-gradient-to-br ${course.gradient}`}>
                    <div className="absolute inset-0 opacity-[0.12]" style={{ backgroundImage: "radial-gradient(ellipse at 30% 60%, white 0%, transparent 60%)" }} />
                    <span className="absolute bottom-3 left-5 text-4xl drop-shadow">{course.emoji}</span>
                    <span className="absolute right-4 top-4 rounded-full bg-black/20 px-3 py-1 text-[10px] font-bold uppercase tracking-widest text-white backdrop-blur-sm">
                      {course.shortTitle}
                    </span>
                  </div>

                  <div className="flex flex-1 flex-col p-6">
                    <h2 className="mb-2 text-[15px] font-semibold leading-snug text-gray-900 transition-colors group-hover:text-indigo-700" style={{ fontFamily: "'Fraunces', serif" }}>
                      {course.title}
                    </h2>
                    <p className="mb-4 flex-1 text-sm leading-relaxed text-gray-500 line-clamp-2">{course.tagline}</p>

                    <div className="mb-4 flex flex-wrap gap-2">
                      <span className="flex items-center gap-1.5 rounded-xl bg-gray-50 px-3 py-1.5 text-xs font-medium text-gray-500">
                        <svg className="h-3.5 w-3.5 text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                        </svg>
                        {course.duration}
                      </span>
                      {course.privateJobs?.salary?.min && (
                        <span className="rounded-xl px-3 py-1.5 text-xs font-semibold" style={{ backgroundColor: course.color + "14", color: course.color }}>
                          From {course.privateJobs.salary.min}
                        </span>
                      )}
                    </div>

                    <p className="mb-5 line-clamp-1 text-[11px] text-gray-400">{course.highlight}</p>

                    <div className="flex items-center justify-between border-t border-gray-50 pt-4">
                      <span className="text-xs font-semibold text-gray-800">Explore Course</span>
                      <span className="slide-arrow flex h-8 w-8 items-center justify-center rounded-full" style={{ background: `linear-gradient(135deg, ${course.color}22, ${course.color}10)` }}>
                        <svg className="h-3.5 w-3.5" style={{ color: course.color }} fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M9 5l7 7-7 7" />
                        </svg>
                      </span>
                    </div>
                  </div>

                  <div className="bottom-line absolute bottom-0 left-0 h-[3px] rounded-full" style={{ background: `linear-gradient(90deg, ${course.color}, transparent)` }} />
                </Link>
              ))}
            </div>
          </>
        )}
      </div>

      {/* Footer */}
      {/* <footer className="border-t border-gray-100 bg-white py-10">
        <div className="mx-auto flex max-w-6xl flex-col items-center justify-between gap-4 px-6 md:flex-row">
          <Link href="/" className="flex items-center gap-2.5">
            <div className="flex h-8 w-8 items-center justify-center rounded-xl bg-gradient-to-br from-indigo-500 to-violet-600 text-sm font-black text-white">V</div>
            <span className="text-base font-black text-gray-900" style={{ fontFamily: "'Fraunces', serif" }}>Vision Leads</span>
          </Link>
          <p className="text-sm text-gray-400">Engineering Career Guidance · All rights reserved</p>
          <div className="flex gap-5">
            {categories.map((c) => <Link key={c.id} href={`/courses/${c.slug}`} className="text-sm text-gray-400 hover:text-gray-700">{c.shortTitle}</Link>)}
          </div>
        </div>
      </footer> */}
    </main>
  );
}