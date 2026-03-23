import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import Navbar from "./Navbar"; // Adjust path as needed
import Footer from "./Footer"; // Adjust path as needed
import "./globals.css";

const geistSans = Geist({ variable: "--font-geist-sans", subsets: ["latin"] });
const geistMono = Geist_Mono({ variable: "--font-geist-mono", subsets: ["latin"] });

export const metadata: Metadata = {
  metadataBase: new URL("https://visionleads.in"),
  title: {
    default: "Vision Leads — Engineering Career Guidance",
    template: "%s | Vision Leads",
  },
  description:
    "Vision Leads helps students choose the right engineering and professional course with clear career paths, real salary data, government job options, and abroad opportunities.",
  keywords: [
    "Vision Leads",
    "career guidance Tamil Nadu",
    "engineering courses after 12th",
    "best course to study",
    "course salary comparison",
    "government jobs Tamil Nadu",
    "study abroad after engineering",
  ].join(", "),
  authors: [{ name: "Vision Leads", url: "https://visionleads.in" }],
  creator: "Vision Leads",
  publisher: "Vision Leads",
  category: "Education",
  openGraph: {
    type: "website",
    locale: "en_IN",
    url: "https://visionleads.in",
    siteName: "Vision Leads",
    title: "Vision Leads — Engineering Career Guidance",
    description:
      "Explore courses, career paths, salaries, government jobs, and abroad opportunities — all in Tamil & English.",
    images: [
      {
        url: "/og/default.png",
        width: 1200,
        height: 630,
        alt: "Vision Leads — Engineering Career Guidance",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    site: "@visionleads",
    creator: "@visionleads",
    title: "Vision Leads — Engineering Career Guidance",
    description: "Find your perfect course — with career paths, salaries, govt jobs & abroad opportunities.",
    images: ["/og/default.png"],
  },
  // icons: {
  //   icon: "/favicon.ico",
  //   shortcut: "/favicon-16x16.png",
  //   apple: "/apple-touch-icon.png",
  // },
  // manifest: "/site.webmanifest",
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
  verification: {
    // Add your Google Search Console verification code here
    // google: "your-google-verification-code",
  },
};



export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body className={`${geistSans.variable} ${geistMono.variable} antialiased font-sans`}>
        <Navbar />
        <main className="min-h-screen">
          {children}
        </main>
        <Footer />
      </body>
    </html>
  );
}