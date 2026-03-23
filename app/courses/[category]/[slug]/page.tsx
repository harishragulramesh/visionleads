
import { notFound } from "next/navigation";
import Link from "next/link";
import { categories, getCategoryBySlug, getCoursesForCategory } from "@/data/categories";
import { getCourseBySlug } from "@/data/courses";
import type { Metadata } from "next";
interface Props {
  params: Promise<{ category: string; slug: string }>;
}

export async function generateStaticParams() {
  const paths: { category: string; slug: string }[] = [];
  for (const cat of categories) {
    for (const course of getCoursesForCategory(cat.id)) {
      paths.push({ category: cat.slug, slug: course.slug });
    }
  }
  return paths;
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug, category } = await params;
  const course = getCourseBySlug(slug);
  const cat = getCategoryBySlug(category);
  if (!course || !cat) return {};
 
  const title = `${course.title} (${course.shortTitle}) | ${cat.title} | Vision Leads`;
  const description = `${course.description} Career paths, salary range (${course.privateJobs?.salary?.min ?? ""} – ${course.privateJobs?.salary?.top ?? ""}), government jobs, and abroad opportunities for ${course.title}.`;
  const url = `https://visionleads.in/courses/${category}/${slug}`;
  const keywords = [
    course.title,
    course.shortTitle,
    cat.title,
    "engineering courses in Tamil Nadu",
    "career guidance",
    "course after 12th",
    ...course.privateJobs.roles.slice(0, 4),
    ...course.govtJobs.exams.slice(0, 3),
    "Vision Leads",
  ].join(", ");
 
  return {
    title,
    description,
    keywords,
    alternates: { canonical: url },
    openGraph: {
      type: "article",
      url,
      title,
      description,
      siteName: "Vision Leads",
      locale: "en_IN",
      images: [
        {
          url: `https://visionleads.in/og/${slug}.png`,
          width: 1200,
          height: 630,
          alt: `${course.title} — Career Guide by Vision Leads`,
        },
      ],
    },
    twitter: {
      card: "summary_large_image",
      title,
      description,
      images: [`https://visionleads.in/og/${slug}.png`],
      site: "@visionleads",
      creator: "@visionleads",
    },
    robots: {
      index: true,
      follow: true,
      googleBot: { index: true, follow: true, "max-image-preview": "large" },
    },
    other: {
      "application/ld+json": JSON.stringify({
        "@context": "https://schema.org",
        "@type": "Course",
        name: course.title,
        description: course.description,
        provider: {
          "@type": "Organization",
          name: "Vision Leads",
          sameAs: "https://visionleads.in",
        },
        educationalLevel: "Undergraduate",
        timeRequired: course.duration,
        inLanguage: ["en", "ta"],
        offers: {
          "@type": "Offer",
          category: cat.title,
        },
        keywords: course.privateJobs.roles.join(", "),
      }),
    },
  };
}

const FONTS = `@import url('https://fonts.googleapis.com/css2?family=DM+Sans:ital,opsz,wght@0,9..40,400;0,9..40,500;0,9..40,600&family=Fraunces:ital,wght@0,700;0,900;1,700&display=swap');`;

function SectionTitle({ children }: { children: React.ReactNode }) {
  return <h2 className="mb-6 text-2xl font-black text-gray-900" style={{ fontFamily: "'Fraunces', serif" }}>{children}</h2>;
}
function Card({ children, className = "" }: { children: React.ReactNode; className?: string }) {
  return <div className={`rounded-3xl border border-gray-100 bg-white p-6 shadow-[0_2px_20px_rgba(0,0,0,0.05)] ${className}`}>{children}</div>;
}
function Chip({ label, color, outline = false }: { label: string; color: string; outline?: boolean }) {
  return outline
    ? <span className="inline-block rounded-xl border px-3 py-1.5 text-xs font-semibold" style={{ borderColor: color + "40", color }}>{label}</span>
    : <span className="inline-block rounded-xl px-3 py-1.5 text-xs font-semibold" style={{ backgroundColor: color + "14", color }}>{label}</span>;
}
function Check({ text, color }: { text: string; color: string }) {
  return (
    <li className="flex items-start gap-2.5 text-sm text-gray-600">
      <span className="mt-0.5 flex h-5 w-5 shrink-0 items-center justify-center rounded-full" style={{ backgroundColor: color + "18" }}>
        <svg className="h-3 w-3" style={{ color }} fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M5 13l4 4L19 7" />
        </svg>
      </span>
      {text}
    </li>
  );
}
function Dot({ text }: { text: string }) {
  return (
    <li className="flex items-start gap-2.5 text-sm text-gray-500">
      <span className="mt-2 h-1.5 w-1.5 shrink-0 rounded-full bg-gray-300" />
      {text}
    </li>
  );
}
function SalaryBadge({ label, value, color }: { label: string; value: string; color: string }) {
  return (
    <div className="rounded-2xl border border-gray-100 bg-gray-50 p-4">
      <p className="mb-0.5 text-[10px] font-semibold uppercase tracking-widest text-gray-400">{label}</p>
      <p className="text-sm font-bold" style={{ color }}>{value}</p>
    </div>
  );
}

export default async function CourseDetailPage({ params }: Props) {
  const { category, slug } = await params;
  const cat = getCategoryBySlug(category);
  const course = getCourseBySlug(slug);
  if (!cat || !course) notFound();

  return (
    <main className="min-h-screen bg-white text-gray-900" style={{ fontFamily: "'DM Sans', sans-serif" }}>
      <style>{`${FONTS}`}</style>

      {/* ── Navbar ─────────────────────────────────────────────── */}
      <nav className="sticky top-0 z-50 border-b border-gray-100 bg-white/80 backdrop-blur-md">
        <div className="mx-auto flex max-w-5xl items-center justify-between px-6 py-4">
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
          <Link href={`/courses/${category}`} className="rounded-xl border border-gray-200 bg-white px-4 py-2 text-sm font-semibold text-gray-700 shadow-sm transition-all hover:border-gray-300">
            ← {cat.title}
          </Link>
        </div>
      </nav>

      {/* ── Hero ───────────────────────────────────────────────── */}
      <div className="relative overflow-hidden">
        <div className={`absolute inset-0 bg-gradient-to-br ${course.gradient} opacity-[0.07]`} />
        <div className="pointer-events-none absolute -top-32 left-1/2 h-[500px] w-[500px] -translate-x-1/2 rounded-full blur-3xl" style={{ background: course.color + "20" }} />
        <div className="pointer-events-none absolute inset-0 opacity-[0.03]" style={{ backgroundImage: "radial-gradient(circle, #374151 1px, transparent 1px)", backgroundSize: "24px 24px" }} />

        <div className="relative mx-auto max-w-5xl px-6 pb-14 pt-10">
          {/* Breadcrumb */}
          <div className="mb-6 flex items-center gap-2 text-sm text-gray-400">
            <Link href="/" className="hover:text-gray-700">Home</Link>
            <span>/</span>
            <Link href="/courses" className="hover:text-gray-700">Courses</Link>
            <span>/</span>
            <Link href={`/courses/${category}`} className="hover:text-gray-700">{cat.title}</Link>
            <span>/</span>
            <span className="font-medium text-gray-700">{course.shortTitle}</span>
          </div>

          <div className="flex flex-col gap-8 md:flex-row md:items-start md:justify-between">
            <div className="flex-1">
              <div className="mb-4 flex items-center gap-4">
                <div className="flex h-16 w-16 items-center justify-center rounded-2xl text-4xl shadow-lg"
                  style={{ background: `linear-gradient(135deg, ${course.color}22, ${course.color}10)`, border: `1.5px solid ${course.color}30` }}>
                  {course.emoji}
                </div>
                <div>
                  <span className="inline-block rounded-full px-3 py-1 text-xs font-bold uppercase tracking-widest" style={{ backgroundColor: course.color + "15", color: course.color }}>
                    {course.shortTitle}
                  </span>
                  <p className="mt-1 text-sm text-gray-400">{course.duration}</p>
                </div>
              </div>
              <h1 className="mb-3 text-4xl font-black leading-tight text-gray-950 md:text-5xl" style={{ fontFamily: "'Fraunces', serif" }}>
                {course.title}
              </h1>
              <p className="text-base leading-relaxed text-gray-500">{course.tagline}</p>
            </div>

            <div className="shrink-0 rounded-3xl p-[1.5px] md:w-64" style={{ background: `linear-gradient(135deg, ${course.color}60, ${course.color}20)` }}>
              <div className="rounded-[22px] bg-white p-5">
                <p className="mb-2 text-[10px] font-semibold uppercase tracking-widest text-gray-400">Key Highlight</p>
                <p className="text-sm font-semibold leading-relaxed text-gray-800">{course.highlight}</p>
              </div>
            </div>
          </div>

          <div className="mt-8 rounded-3xl border border-gray-100 bg-gray-50/60 p-6">
            <p className="text-sm leading-relaxed text-gray-600">{course.description}</p>
          </div>

          <div className="mt-5 flex flex-wrap gap-2">
            {course.examples.map((ex: string) => (
              <span key={ex} className="rounded-xl border border-gray-200 bg-white px-3 py-1.5 text-xs font-medium text-gray-600 shadow-sm">{ex}</span>
            ))}
          </div>
        </div>
      </div>
            
      {/* ── Content ────────────────────────────────────────────── */}
      <div className="mx-auto max-w-5xl space-y-14 px-6 py-14">

        {/* Subjects */}
        <section>
          <SectionTitle>📚 Subjects by Year</SectionTitle>
          <div className="grid gap-4 sm:grid-cols-2">
            {Object.entries(course.subjects).map(([year, subs]) => (
              <Card key={year}>
                <div className="mb-4 inline-flex items-center gap-2 rounded-xl px-3 py-1.5" style={{ backgroundColor: course.color + "12" }}>
                  <span className="h-2 w-2 rounded-full" style={{ backgroundColor: course.color }} />
                  <p className="text-xs font-bold uppercase tracking-wider" style={{ color: course.color }}>{year}</p>
                </div>
                <ul className="space-y-2">{(subs as string[]).map((s) => <Dot key={s} text={s} />)}</ul>
              </Card>
            ))}
          </div>
        </section>

        
        <div className="mx-auto max-w-5xl px-4 md:px-6 ">
          <div className="bg-white font-sans">
            {/* 1. CTA BANNER SECTION */}
            <section className="relative overflow-hidden ">
              <div className="max-w-7xl mx-auto relative z-10 flex flex-col gap-6">
                
                {/* ── Wide Course Strip (Mobile Friendly) ─────────────────────────── */}
                <div className="relative w-full min-h-[140px] md:h-[140px] overflow-hidden rounded-3xl bg-blue-100  flex flex-col md:flex-row items-stretch md:items-center">
                  
                  {/* Left/Top Side: Icon/Gradient Section */}
                  <div className={`relative flex h-24 md:h-full w-full md:w-40 shrink-0 items-center justify-center bg-gradient-to-br ${course.gradient}`}>
                    {/* Background Textures */}
                    <div className="absolute inset-0 opacity-20" style={{ backgroundImage: "radial-gradient(ellipse at 50% 30%, white 0%, transparent 65%)" }} />
                    <div className="absolute inset-0 opacity-[0.06]" style={{ backgroundImage: "repeating-linear-gradient(45deg,white 0,white 1px,transparent 0,transparent 50%)", backgroundSize: "15px 15px" }} />
                    
                    <div className="relative z-10 flex flex-row md:flex-col items-center gap-3 md:gap-1">
                      <div className="flex h-10 w-10 md:h-12 md:w-12 items-center justify-center rounded-xl bg-white/25 text-2xl md:text-3xl shadow-lg backdrop-blur-sm">
                        {course.emoji}
                      </div>
                      <span className="rounded-full bg-black/20 px-2 py-0.5 text-[9px] font-bold uppercase tracking-tighter text-white backdrop-blur-sm">
                        {course.shortTitle}
                      </span>
                    </div>
                  </div>

                  {/* Right/Bottom Side: Info Content */}
                  <div className="flex flex-1 flex-col md:flex-row items-start md:items-center justify-between p-5 md:px-10">
                    <div className="flex flex-col mb-4 md:mb-0">
                      <h3 className="text-lg md:text-xl font-black text-gray-900 leading-tight" style={{ fontFamily: "'Fraunces', serif" }}>
                        {course.title}
                      </h3>
                      <p className="text-xs md:text-sm font-medium text-gray-400">
                        {course.duration} • {cat.shortTitle}
                      </p>
                    </div>

                    {/* Salary & CTA Group - Layout adjusts for mobile */}
                    <div className="flex w-full md:w-auto items-center justify-between md:justify-end gap-4 md:gap-8 border-t md:border-t-0 pt-4 md:pt-0">
                      <div className="text-left md:text-right">
                        <p className="text-[9px] md:text-[10px] font-bold uppercase tracking-widest text-gray-400">Salary Potential</p>
                        <p className="text-base md:text-lg font-black" style={{ color: course.color }}>
                          {course.privateJobs?.salary?.top ?? "₹80,000+"}
                        </p>
                      </div>
                      <Link href="/form" >
                      <button
                        className="flex-1 md:flex-none text-center rounded-xl px-5 py-3 text-sm font-bold text-white shadow-md transition-all hover:brightness-110 active:scale-95"
                        style={{ background: `linear-gradient(135deg, ${course.color}, ${course.color}dd)` }}
                      >
                        Register →
                      </button>
                      </Link>
                    </div>
                  </div>
                </div>
                {/* ────────────────────────────────────────────────────────────────────── */}
                
              </div>
            </section>
          </div>
        </div>
        {/* Private Jobs */}
        <section>
          <SectionTitle>💼 Private Sector Careers</SectionTitle>
          <div className="grid gap-5 md:grid-cols-3">
            <Card>
              <p className="mb-4 text-[10px] font-semibold uppercase tracking-widest text-gray-400">Job Roles</p>
              <ul className="space-y-2">{course.privateJobs.roles.map((r: string) => <Check key={r} text={r} color={course.color} />)}</ul>
            </Card>
            <Card>
              <p className="mb-4 text-[10px] font-semibold uppercase tracking-widest text-gray-400">Where to Work</p>
              <ul className="space-y-2">{course.privateJobs.companies.map((c: string) => <Dot key={c} text={c} />)}</ul>
            </Card>
            <div className="flex flex-col gap-4">
              {course.privateJobs.salary.min && <SalaryBadge label="Starting" value={course.privateJobs.salary.min} color="#16a34a" />}
              {course.privateJobs.salary.mid && <SalaryBadge label="Mid-level" value={course.privateJobs.salary.mid} color="#d97706" />}
              {course.privateJobs.salary.top && <SalaryBadge label="Senior / Top" value={course.privateJobs.salary.top} color={course.color} />}
              {course.privateJobs.salary.note && (
                <div className="rounded-2xl border border-dashed border-gray-200 bg-gray-50 p-4">
                  <p className="text-xs leading-relaxed text-gray-500">{course.privateJobs.salary.note}</p>
                </div>
              )}
            </div>
          </div>
        </section>

        {/* Govt Jobs */}
        <section>
          <SectionTitle>🏛️ Government Jobs</SectionTitle>
          <div className="grid gap-5 md:grid-cols-2">
            <Card>
              <p className="mb-4 text-[10px] font-semibold uppercase tracking-widest text-gray-400">Roles Available</p>
              <ul className="space-y-2">{course.govtJobs.roles.map((r: string) => <Check key={r} text={r} color={course.color} />)}</ul>
            </Card>
            <Card>
              <p className="mb-4 text-[10px] font-semibold uppercase tracking-widest text-gray-400">Exams to Target</p>
              <div className="mb-6 flex flex-wrap gap-2">{course.govtJobs.exams.map((e: string) => <Chip key={e} label={e} color={course.color} />)}</div>
              <p className="mb-3 text-[10px] font-semibold uppercase tracking-widest text-gray-400">Salary</p>
              {course.govtJobs.salary?.range && <p className="text-sm font-bold text-green-600">{course.govtJobs.salary.range}</p>}
              {course.govtJobs.salary?.clerk && (
                <div className="space-y-1.5">
                  <p className="text-sm text-gray-600">Clerk: <span className="font-bold text-green-600">{course.govtJobs.salary.clerk}</span></p>
                  <p className="text-sm text-gray-600">Officer: <span className="font-bold text-amber-600">{course.govtJobs.salary.officer}</span></p>
                  {course.govtJobs.salary.psu && <p className="text-sm text-gray-600">PSU: <span className="font-bold" style={{ color: course.color }}>{course.govtJobs.salary.psu}</span></p>}
                </div>
              )}
              {course.govtJobs.salary?.je && (
                <div className="space-y-1.5">
                  <p className="text-sm text-gray-600">JE: <span className="font-bold text-green-600">{course.govtJobs.salary.je}</span></p>
                  <p className="text-sm text-gray-600">AE: <span className="font-bold text-amber-600">{course.govtJobs.salary.ae}</span></p>
                </div>
              )}
            </Card>
          </div>
        </section>

        {/* Abroad */}
        <section>
          <SectionTitle>✈️ Abroad Opportunities</SectionTitle>
          <div className="grid gap-5 md:grid-cols-2">
            <Card>
              <p className="mb-1 text-[10px] font-semibold uppercase tracking-widest text-gray-400">Higher Study</p>
              <p className="mb-5 text-sm font-semibold text-gray-800">{course.abroad.higherStudy.degree}</p>
              <p className="mb-3 text-[10px] font-semibold uppercase tracking-widest text-gray-400">Entrance Exams</p>
              <div className="mb-5 flex flex-wrap gap-2">{course.abroad.higherStudy.exams.map((e: string) => <Chip key={e} label={e} color={course.color} outline />)}</div>
              <p className="mb-3 text-[10px] font-semibold uppercase tracking-widest text-gray-400">Top Countries</p>
              <div className="flex flex-wrap gap-2">
                {course.abroad.higherStudy.countries.map((c: string) => (
                  <span key={c} className="rounded-xl border border-gray-100 bg-gray-50 px-3 py-1.5 text-xs font-medium text-gray-600">{c}</span>
                ))}
              </div>
            </Card>
            <div className="flex flex-col gap-5">
              <Card className="flex-1">
                <p className="mb-4 text-[10px] font-semibold uppercase tracking-widest text-gray-400">Direct Job Requirements</p>
                <ul className="space-y-2">{course.abroad.directJob.requirements.map((r: string) => <Check key={r} text={r} color={course.color} />)}</ul>
              </Card>
              <div className={`relative overflow-hidden rounded-3xl bg-gradient-to-br ${course.gradient} p-6 text-white`}>
                <div className="absolute -right-8 -top-8 h-32 w-32 rounded-full bg-white/10" />
                <p className="relative z-10 text-[10px] font-semibold uppercase tracking-widest text-white/60">Abroad Salary Potential</p>
                <p className="relative z-10 mt-2 text-2xl font-black" style={{ fontFamily: "'Fraunces', serif" }}>{course.abroad.salary}</p>
              </div>
            </div>
          </div>
        </section>

        {/* Suitability */}
        <section>
          <SectionTitle>🎯 Is This Course Right For You?</SectionTitle>
          <div className="grid gap-5 md:grid-cols-2">
            <Card>
              <div className="mb-4 flex items-center gap-2">
                <span className="flex h-7 w-7 items-center justify-center rounded-xl bg-green-50 text-sm">✅</span>
                <p className="text-[10px] font-semibold uppercase tracking-widest text-green-600">Suitable For</p>
              </div>
              <ul className="space-y-2.5">{course.suitableFor.map((s: string) => <Check key={s} text={s} color="#16a34a" />)}</ul>
            </Card>
            <div className="flex flex-col gap-5">
              <Card>
                <div className="mb-4 flex items-center gap-2">
                  <span className="flex h-7 w-7 items-center justify-center rounded-xl bg-red-50 text-sm">⚠️</span>
                  <p className="text-[10px] font-semibold uppercase tracking-widest text-red-500">Reconsider If</p>
                </div>
                <p className="text-sm leading-relaxed text-gray-600">{course.notSuitable}</p>
              </Card>
              <div className="rounded-3xl p-[1.5px]" style={{ background: `linear-gradient(135deg, ${course.color}, ${course.color}50)` }}>
                <div className="rounded-[22px] bg-white p-5">
                  <p className="mb-1 text-[10px] font-semibold uppercase tracking-widest" style={{ color: course.color }}>⭐ Key Highlight</p>
                  <p className="text-sm font-semibold leading-relaxed text-gray-800">{course.highlight}</p>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Nav */}
        <div className="flex items-center justify-between border-t border-gray-100 pt-8">
          <Link href={`/courses/${category}`}
            className="inline-flex items-center gap-2 rounded-2xl border border-gray-200 bg-white px-5 py-2.5 text-sm font-semibold text-gray-700 shadow-sm transition-all hover:shadow-md">
            <svg className="h-4 w-4" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" /></svg>
            Back to {cat.title}
          </Link>
          <p className="text-xs text-gray-300" style={{ fontFamily: "'Fraunces', serif" }}>Vision Leads</p>
        </div>
      </div>

      {/* ── Register Now Card ─────────────────────────────────────────────────── */}
        


      {/* Footer */}
      <footer className="border-t border-gray-100 bg-white py-10">
        <div className="mx-auto flex max-w-5xl flex-col items-center justify-between gap-4 px-6 md:flex-row">
          <Link href="/" className="flex items-center gap-2.5">
            <div className="flex h-8 w-8 items-center justify-center rounded-xl bg-gradient-to-br from-indigo-500 to-violet-600 text-sm font-black text-white">V</div>
            <span className="text-base font-black text-gray-900" style={{ fontFamily: "'Fraunces', serif" }}>Vision Leads</span>
          </Link>
          <p className="text-sm text-gray-400">Engineering Career Guidance · All rights reserved</p>
          <div className="flex gap-5">
            {categories.map((c) => <Link key={c.id} href={`/courses/${c.slug}`} className="text-sm text-gray-400 hover:text-gray-700">{c.shortTitle}</Link>)}
          </div>
        </div>
      </footer>
    </main>
  );
}