import type { Metadata } from "next";
import { Inter, JetBrains_Mono } from "next/font/google";
import { Toaster } from "@/components/ui/sonner";
import "./globals.css";
import { cn } from "@/lib/utils";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
  display: "swap",
});

const jetbrainsMono = JetBrains_Mono({
  subsets: ["latin"],
  variable: "--font-jetbrains-mono",
  display: "swap",
});

export const metadata: Metadata = {
  title: "Prem Prakash Gupta | Full Stack Developer (MERN)",
  description: "Portfolio of Prem Prakash Gupta, a Full Stack Developer (MERN) with 2+ years of experience building scalable SaaS backends, database models, and high-performance React user interfaces.",
  keywords: [
    "Prem Prakash Gupta",
    "Full Stack Developer",
    "MERN Stack Developer",
    "React Developer",
    "Node.js Developer",
    "SaaS Backend Engineer",
    "Web Developer Portfolio",
    "Software Engineer Gurugram",
    "Systellar Technologies",
    "Thundergits"
  ],
  authors: [{ name: "Prem Prakash Gupta" }],
  creator: "Prem Prakash Gupta",
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
  openGraph: {
    type: "website",
    locale: "en_US",
    url: "https://myportfolio-nextjs-roan.vercel.app",
    title: "Prem Prakash Gupta | Full Stack Developer",
    description: "I build scalable SaaS backends and clean React UIs — shipped to 3,000+ real users.",
    siteName: "Prem Prakash Gupta Portfolio",
  },
  twitter: {
    card: "summary_large_image",
    title: "Prem Prakash Gupta | Full Stack Developer",
    description: "I build scalable SaaS backends and clean React UIs — shipped to 3,000+ real users.",
    creator: "@premprakashgupta",
  },
  icons: {
    icon: "/favicon.png?v=2",
    shortcut: "/favicon.ico?v=2",
    apple: "/favicon.png?v=2",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  // AEO / GEO JSON-LD Structured Data
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "Person",
    "name": "Prem Prakash Gupta",
    "jobTitle": "Full Stack Developer (MERN)",
    "url": "https://myportfolio-nextjs-roan.vercel.app",
    "sameAs": [
      "https://github.com/premprakashgupta",
      "https://www.linkedin.com/in/premprakashgupta-/"
    ],
    "knowsAbout": [
      "React",
      "Next.js",
      "Node.js",
      "Express.js",
      "MongoDB",
      "MySQL",
      "Prisma ORM",
      "TypeScript",
      "AWS EC2",
      "Docker",
      "SaaS Backend Development",
      "REST APIs"
    ],
    "worksFor": [
      {
        "@type": "Organization",
        "name": "Thundergits Consultancy Pvt. Ltd."
      },
      {
        "@type": "Organization",
        "name": "Systellar Technologies Pvt. Ltd."
      },
      {
        "@type": "Organization",
        "name": "MittArv Technology Pvt. Ltd."
      }
    ]
  };

  return (
    <html lang="en" className={cn(inter.variable, jetbrainsMono.variable)}>
      <head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
      </head>
      <body className="min-h-screen bg-[#F9FAFB] text-[#111827] antialiased">
        {children}
        <Toaster />
      </body>
    </html>
  );
}
