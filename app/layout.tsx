import type { Metadata } from "next";
import { Roboto } from "next/font/google";
import { Toaster } from "@/components/ui/sonner"
import "./globals.css";

import { cn } from "@/lib/utils";

const roboto = Roboto({
  weight: '400',
  subsets: ['latin'],
  display: 'swap',
})

export const metadata: Metadata = {
  title: "Prem Prakash Gupta",
  description: "Skills | Experience | Education | Contact Us",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={cn("min-h-screen font-sans antialiased relative")}>
        {/* Universe Background Container */}
        <div className="fixed inset-0 -z-10 overflow-hidden">
          {/* Stars (CSS-only) */}
          <div style={{
            background: 'radial-gradient(circle, rgba(255,255,255,1) 1px, transparent 1px), radial-gradient(circle, rgba(255,255,255,1) 1px, transparent 1px)',
            backgroundSize: '50px 50px',
            backgroundPosition: '0 0, 25px 25px',
            opacity: 0.9,
            animation: 'twinkle 10s infinite alternate'
          }}></div>
          {/* Saturn (CSS-only simplified) */}
          <div className="absolute bottom-10 right-10 w-48 h-48 rounded-full" style={{
            background: 'radial-gradient(circle at 30% 30%, #c0a080, #806040, #403020)', // More realistic planet color
            boxShadow: '0 0 60px rgba(192, 160, 128, 0.9), inset 0 0 20px rgba(0,0,0,0.5)', // Enhanced shadow
            opacity: 0.8,
            transform: 'translate(0%, 0%)',
            animation: 'float 15s ease-in-out infinite alternate'
          }}>
            {/* Rings */}
            <div className="absolute w-64 h-16 rounded-full" style={{
              top: '50%',
              left: '50%',
              transform: 'translate(-50%, -50%) rotateX(70deg) scale(1.2)',
              background: 'linear-gradient(to right, rgba(255,255,255,0.8) 0%, rgba(0,0,0,0.8) 50%, rgba(255,255,255,0.8) 100%)', // White and black mix
              boxShadow: '0 0 30px rgba(255, 255, 255, 0.4), inset 0 0 10px rgba(0,0,0,0.5)', // Enhanced shadow
              border: '2px solid rgba(255,255,255,0.2)' // Subtle border
            }}></div>
          </div>
          {/* Nebula/Galaxy effect (subtle gradient) */}
          <div className="absolute inset-0 bg-gradient-to-br from-purple-900 via-black to-blue-900 opacity-80"></div>
        </div>

        {children}

        <Toaster />

      </body>
    </html>
  );
}
