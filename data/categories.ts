import { courses } from "./courses";

export interface Category {
  id: string;
  slug: string;
  title: string;
  shortTitle: string;
  emoji: string;
  tagline: string;
  description: string;
  color: string;
  gradient: string;
  bgLight: string;
  courseIds: string[];
}

export const categories: Category[] = [
  {
    id: "engineering",
    slug: "engineering",
    title: "Engineering",
    shortTitle: "B.E / B.Tech",
    emoji: "⚙️",
    tagline: "Build the future with technology",
    description:
      "Engineering programs cover design, development, and innovation across hardware, software, and infrastructure. From coding apps to building bridges — engineering shapes the world.",
    color: "#6366f1",
    gradient: "from-indigo-500 via-violet-500 to-purple-600",
    bgLight: "#eef2ff",
    courseIds: ["cse", "aids", "it", "ece", "eee", "civil", "mech","food","agri","biomedical","biotech", "aero", "auto", "cyber", "iot", "aiml", "genetic",],
  },
  {
    id: "arts-science",
    slug: "arts-science",
    title: "Arts & Science",
    shortTitle: "B.A / B.Sc",
    emoji: "🎨",
    tagline: "Explore knowledge, creativity & research",
    description:
      "Arts & Science programs span literature, languages, mathematics, physics, psychology, and more. These degrees open doors to teaching, research, civil services, and beyond.",
    color: "#ec4899",
    gradient: "from-pink-500 via-rose-500 to-fuchsia-600",
    bgLight: "#fdf2f8",
    courseIds: [],
  },
  {
    id: "medical",
    slug: "medical",
    title: "Medical & Health",
    shortTitle: "MBBS / Nursing",
    emoji: "🏥",
    tagline: "Save lives, serve communities",
    description:
      "Medical and paramedical programs train doctors, nurses, pharmacists, and allied health professionals. These careers are high-impact and always in demand across India and abroad.",
    color: "#10b981",
    gradient: "from-emerald-500 via-teal-500 to-green-600",
    bgLight: "#ecfdf5",
    courseIds: [],
  },
  {
    id: "commerce",
    slug: "commerce",
    title: "Commerce & Management",
    shortTitle: "B.Com / BBA / MBA",
    emoji: "📊",
    tagline: "Lead businesses, manage finances",
    description:
      "Commerce and management programs develop skills in accounting, finance, marketing, and business administration. Ideal for entrepreneurs, bankers, and corporate professionals.",
    color: "#f59e0b",
    gradient: "from-amber-400 via-orange-500 to-yellow-500",
    bgLight: "#fffbeb",
    courseIds: [],
  },
    {
    id: "law",
    slug: "law",
    title: "Law & Legal Studies",
    shortTitle: "LL.B / LL.M",
    emoji: "⚖️",
    tagline: "Advocate for justice, serve society",
    description:
      "Law programs prepare students for careers in legal practice, judiciary, and public service. These degrees are essential for those who wish to practice law or work in government and non-profit sectors.",
    color: "#f59e0sb",
    gradient: "from-amber-400 via-orange-500 to-yellow-500",
    bgLight: "#fffbee",
    courseIds: [],
  },
];

export function getCategoryBySlug(slug: string) {
  return categories.find((c) => c.slug === slug);
}

export function getCoursesForCategory(categoryId: string) {
  const cat = categories.find((c) => c.id === categoryId);
  if (!cat) return [];
  return courses.filter((c) => cat.courseIds.includes(c.id));
}
