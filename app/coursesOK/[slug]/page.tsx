import { notFound } from "next/navigation";
import Link from "next/link";
import { courses, getCourseBySlug } from "@/data/courses";

interface Props {
  params: Promise<{ slug: string }>;
}

export async function generateStaticParams() {
  return courses.map((c) => ({ slug: c.slug }));
}

export async function generateMetadata({ params }: Props) {
  const { slug } = await params;
  const course = getCourseBySlug(slug);
  if (!course) return {};
  return {
    title: `${course.title} | Vision Leads`,
    description: course.description,
  };
}

// ── Sub-components ────────────────────────────────────────────────────────────

function SectionTitle({ children }: { children: React.ReactNode }) {
  return (
    <h2
      className="mb-6 text-2xl font-black text-gray-900"
      style={{ fontFamily: "'Fraunces', serif" }}
    >
      {children}
    </h2>
  );
}

function Card({ children, className = "" }: { children: React.ReactNode; className?: string }) {
  return (
    <div className={`rounded-3xl border border-gray-100 bg-white p-6 shadow-[0_2px_20px_rgba(0,0,0,0.05)] ${className}`}>
      {children}
    </div>
  );
}

function Chip({
  label,
  color,
  variant = "soft",
}: {
  label: string;
  color: string;
  variant?: "soft" | "outline";
}) {
  if (variant === "outline") {
    return (
      <span
        className="inline-block rounded-xl border px-3 py-1.5 text-xs font-semibold"
        style={{ borderColor: color + "40", color }}
      >
        {label}
      </span>
    );
  }
  return (
    <span
      className="inline-block rounded-xl px-3 py-1.5 text-xs font-semibold"
      style={{ backgroundColor: color + "14", color }}
    >
      {label}
    </span>
  );
}

function Check({ text, color }: { text: string; color: string }) {
  return (
    <li className="flex items-start gap-2.5 text-sm text-gray-600">
      <span
        className="mt-0.5 flex h-5 w-5 shrink-0 items-center justify-center rounded-full"
        style={{ backgroundColor: color + "18" }}
      >
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

// ── Main Page ─────────────────────────────────────────────────────────────────

export default async function CourseDetailPage({ params }: Props) {
  const { slug } = await params;
  const course = getCourseBySlug(slug);
  if (!course) notFound();

  return (
    <main className="min-h-screen bg-white text-gray-900" style={{ fontFamily: "'DM Sans', sans-serif" }}>
      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=DM+Sans:ital,opsz,wght@0,9..40,400;0,9..40,500;0,9..40,600&family=Fraunces:ital,wght@0,700;0,900;1,700&display=swap');
      `}</style>

      {/* ── Hero ────────────────────────────────────────────────────── */}
      <div className="relative overflow-hidden">
        {/* Full-bleed gradient bg */}
        <div className={`absolute inset-0 bg-gradient-to-br ${course.gradient} opacity-[0.07]`} />
        <div
          className="absolute inset-0 opacity-[0.03]"
          style={{
            backgroundImage: "radial-gradient(circle, #374151 1px, transparent 1px)",
            backgroundSize: "24px 24px",
          }}
        />
        {/* Glow blob */}
        <div
          className="pointer-events-none absolute -top-32 left-1/2 h-[500px] w-[500px] -translate-x-1/2 rounded-full blur-3xl"
          style={{ background: course.color + "20" }}
        />

        <div className="relative mx-auto max-w-5xl px-6 pb-14 pt-10">
          {/* Back link */}
          <Link
            href="/courses"
            className="mb-8 inline-flex items-center gap-2 rounded-xl border border-gray-200 bg-white px-4 py-2 text-sm font-medium text-gray-600 shadow-sm transition-all hover:border-gray-300 hover:text-gray-900"
          >
            <svg className="h-4 w-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
            </svg>
            All Courses
          </Link>

          <div className="flex flex-col gap-8 md:flex-row md:items-start md:justify-between">
            {/* Left */}
            <div className="flex-1">
              {/* Emoji + badge */}
              <div className="mb-4 flex items-center gap-4">
                <div
                  className="flex h-16 w-16 items-center justify-center rounded-2xl text-4xl shadow-lg"
                  style={{ background: `linear-gradient(135deg, ${course.color}22, ${course.color}10)`, border: `1.5px solid ${course.color}30` }}
                >
                  {course.emoji}
                </div>
                <div>
                  <span
                    className="inline-block rounded-full px-3 py-1 text-xs font-bold uppercase tracking-widest"
                    style={{ backgroundColor: course.color + "15", color: course.color }}
                  >
                    {course.shortTitle}
                  </span>
                  <p className="mt-1 text-sm text-gray-400">{course.duration}</p>
                </div>
              </div>

              <h1
                className="mb-3 text-4xl font-black leading-tight text-gray-950 md:text-5xl"
                style={{ fontFamily: "'Fraunces', serif" }}
              >
                {course.title}
              </h1>
              <p className="text-base leading-relaxed text-gray-500">{course.tagline}</p>
            </div>

            {/* Right — highlight card */}
            <div
              className="shrink-0 rounded-3xl p-[1.5px] md:w-64"
              style={{ background: `linear-gradient(135deg, ${course.color}60, ${course.color}20)` }}
            >
              <div className="rounded-[22px] bg-white p-5">
                <p className="mb-2 text-[10px] font-semibold uppercase tracking-widest text-gray-400">Key Highlight</p>
                <p className="text-sm font-semibold leading-relaxed text-gray-800">{course.highlight}</p>
              </div>
            </div>
          </div>

          {/* Description */}
          <div className="mt-8 rounded-3xl border border-gray-100 bg-gray-50/60 p-6">
            <p className="text-sm leading-relaxed text-gray-600">{course.description}</p>
          </div>

          {/* Real-world examples */}
          <div className="mt-5 flex flex-wrap gap-2">
            {course.examples.map((ex: string) => (
              <span
                key={ex}
                className="rounded-xl border border-gray-200 bg-white px-3 py-1.5 text-xs font-medium text-gray-600 shadow-sm"
              >
                {ex}
              </span>
            ))}
          </div>
        </div>
      </div>

      {/* ── Body ────────────────────────────────────────────────────── */}
      <div className="mx-auto max-w-5xl space-y-14 px-6 py-14">

        {/* Subjects */}
        <section>
          <SectionTitle>📚 Subjects by Year</SectionTitle>
          <div className="grid gap-4 sm:grid-cols-2">
            {Object.entries(course.subjects).map(([year, subs]) => (
              <Card key={year}>
                <div
                  className="mb-4 inline-flex items-center gap-2 rounded-xl px-3 py-1.5"
                  style={{ backgroundColor: course.color + "12" }}
                >
                  <span className="h-2 w-2 rounded-full" style={{ backgroundColor: course.color }} />
                  <p className="text-xs font-bold uppercase tracking-wider" style={{ color: course.color }}>
                    {year}
                  </p>
                </div>
                <ul className="space-y-2">
                  {(subs as string[]).map((s) => (
                    <Dot key={s} text={s} />
                  ))}
                </ul>
              </Card>
            ))}
          </div>
        </section>

        {/* Private Jobs */}
        <section>
          <SectionTitle>💼 Private Sector Careers</SectionTitle>
          <div className="grid gap-5 md:grid-cols-3">
            <Card>
              <p className="mb-4 text-[10px] font-semibold uppercase tracking-widest text-gray-400">Job Roles</p>
              <ul className="space-y-2">
                {course.privateJobs.roles.map((r: string) => (
                  <Check key={r} text={r} color={course.color} />
                ))}
              </ul>
            </Card>
            <Card>
              <p className="mb-4 text-[10px] font-semibold uppercase tracking-widest text-gray-400">Where to Work</p>
              <ul className="space-y-2">
                {course.privateJobs.companies.map((c: string) => (
                  <Dot key={c} text={c} />
                ))}
              </ul>
            </Card>
            <div className="flex flex-col gap-4">
              {course.privateJobs.salary.min && (
                <SalaryBadge label="Starting Salary" value={course.privateJobs.salary.min} color="#16a34a" />
              )}
              {course.privateJobs.salary.mid && (
                <SalaryBadge label="Mid-level Salary" value={course.privateJobs.salary.mid} color="#d97706" />
              )}
              {course.privateJobs.salary.top && (
                <SalaryBadge label="Senior / Top" value={course.privateJobs.salary.top} color={course.color} />
              )}
              {course.privateJobs.salary.note && (
                <div className="rounded-2xl border border-dashed border-gray-200 bg-gray-50 p-4">
                  <p className="text-xs leading-relaxed text-gray-500">{course.privateJobs.salary.note}</p>
                </div>
              )}
            </div>
          </div>
        </section>

        {/* Government Jobs */}
        <section>
          <SectionTitle>🏛️ Government Jobs</SectionTitle>
          <div className="grid gap-5 md:grid-cols-2">
            <Card>
              <p className="mb-4 text-[10px] font-semibold uppercase tracking-widest text-gray-400">Roles Available</p>
              <ul className="space-y-2">
                {course.govtJobs.roles.map((r: string) => (
                  <Check key={r} text={r} color={course.color} />
                ))}
              </ul>
            </Card>
            <Card>
              <p className="mb-4 text-[10px] font-semibold uppercase tracking-widest text-gray-400">Exams to Target</p>
              <div className="mb-6 flex flex-wrap gap-2">
                {course.govtJobs.exams.map((e: string) => (
                  <Chip key={e} label={e} color={course.color} />
                ))}
              </div>
              <p className="mb-3 text-[10px] font-semibold uppercase tracking-widest text-gray-400">Salary</p>
              {course.govtJobs.salary?.range && (
                <p className="text-sm font-bold text-green-600">{course.govtJobs.salary.range}</p>
              )}
              {course.govtJobs.salary?.clerk && (
                <div className="space-y-1.5">
                  <p className="text-sm text-gray-600">Clerk: <span className="font-bold text-green-600">{course.govtJobs.salary.clerk}</span></p>
                  <p className="text-sm text-gray-600">Officer: <span className="font-bold text-amber-600">{course.govtJobs.salary.officer}</span></p>
                  {course.govtJobs.salary.psu && (
                    <p className="text-sm text-gray-600">PSU: <span className="font-bold" style={{ color: course.color }}>{course.govtJobs.salary.psu}</span></p>
                  )}
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
              <p className="mb-1 text-[10px] font-semibold uppercase tracking-widest text-gray-400">Higher Study Degree</p>
              <p className="mb-5 text-sm font-semibold text-gray-800">{course.abroad.higherStudy.degree}</p>

              <p className="mb-3 text-[10px] font-semibold uppercase tracking-widest text-gray-400">Entrance Exams</p>
              <div className="mb-5 flex flex-wrap gap-2">
                {course.abroad.higherStudy.exams.map((e: string) => (
                  <Chip key={e} label={e} color={course.color} variant="outline" />
                ))}
              </div>

              <p className="mb-3 text-[10px] font-semibold uppercase tracking-widest text-gray-400">Top Countries</p>
              <div className="flex flex-wrap gap-2">
                {course.abroad.higherStudy.countries.map((c: string) => (
                  <span key={c} className="rounded-xl bg-gray-50 px-3 py-1.5 text-xs font-medium text-gray-600 border border-gray-100">
                    {c}
                  </span>
                ))}
              </div>
            </Card>

            <div className="flex flex-col gap-5">
              <Card className="flex-1">
                <p className="mb-4 text-[10px] font-semibold uppercase tracking-widest text-gray-400">Direct Job Requirements</p>
                <ul className="space-y-2">
                  {course.abroad.directJob.requirements.map((r: string) => (
                    <Check key={r} text={r} color={course.color} />
                  ))}
                </ul>
              </Card>

              {/* Salary hero card */}
              <div
                className={`relative overflow-hidden rounded-3xl bg-gradient-to-br ${course.gradient} p-6 text-white`}
              >
                <div className="absolute -right-8 -top-8 h-32 w-32 rounded-full bg-white/10" />
                <p className="relative z-10 text-[10px] font-semibold uppercase tracking-widest text-white/60">
                  Abroad Salary Potential
                </p>
                <p className="relative z-10 mt-2 text-2xl font-black leading-snug" style={{ fontFamily: "'Fraunces', serif" }}>
                  {course.abroad.salary}
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Suitable */}
        <section>
          <SectionTitle>🎯 Is This Course Right For You?</SectionTitle>
          <div className="grid gap-5 md:grid-cols-2">
            <Card>
              <div className="mb-4 flex items-center gap-2">
                <span className="flex h-7 w-7 items-center justify-center rounded-xl bg-green-50 text-sm">✅</span>
                <p className="text-[10px] font-semibold uppercase tracking-widest text-green-600">Suitable For</p>
              </div>
              <ul className="space-y-2.5">
                {course.suitableFor.map((s: string) => (
                  <Check key={s} text={s} color="#16a34a" />
                ))}
              </ul>
            </Card>

            <div className="flex flex-col gap-5">
              <Card>
                <div className="mb-4 flex items-center gap-2">
                  <span className="flex h-7 w-7 items-center justify-center rounded-xl bg-red-50 text-sm">⚠️</span>
                  <p className="text-[10px] font-semibold uppercase tracking-widest text-red-500">Reconsider If</p>
                </div>
                <p className="text-sm leading-relaxed text-gray-600">{course.notSuitable}</p>
              </Card>

              {/* Key highlight */}
              <div
                className="rounded-3xl p-[1.5px]"
                style={{ background: `linear-gradient(135deg, ${course.color}, ${course.color}50)` }}
              >
                <div className="rounded-[22px] bg-white p-5">
                  <p
                    className="mb-1 text-[10px] font-semibold uppercase tracking-widest"
                    style={{ color: course.color }}
                  >
                    ⭐ Key Highlight
                  </p>
                  <p className="text-sm font-semibold leading-relaxed text-gray-800">{course.highlight}</p>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Navigation */}
        <div className="flex items-center justify-between border-t border-gray-100 pt-8">
          <Link
            href="/courses"
            className="inline-flex items-center gap-2 rounded-2xl border border-gray-200 bg-white px-5 py-2.5 text-sm font-semibold text-gray-700 shadow-sm transition-all hover:border-gray-300 hover:shadow-md"
          >
            <svg className="h-4 w-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
            </svg>
            All Courses
          </Link>
          <p className="text-xs text-gray-300" style={{ fontFamily: "'Fraunces', serif" }}>Vision Leads</p>
        </div>
      </div>

      {/* Footer */}
      <div className="border-t border-gray-100 bg-gradient-to-r from-slate-50 via-white to-slate-50 py-10 text-center">
        <p className="text-xl font-black text-gray-900" style={{ fontFamily: "'Fraunces', serif" }}>
          Vision Leads
        </p>
        <p className="mt-1 text-sm text-gray-400">Engineering Career Guidance · All rights reserved</p>
      </div>
    </main>
  );
}