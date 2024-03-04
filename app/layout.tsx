import type { Metadata } from "next";
import { Roboto } from "next/font/google";
import { Toaster } from "@/components/ui/sonner"
import "./globals.css";

import Header from "./_components/Header";
import { cn } from "@/lib/utils";
import Footer from "./_components/Footer";

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
      <body className={cn("min-h-screen bg-background font-sans antialiased relative")}>
        <Header />

        {children} 

        <Footer/>
        <Toaster />
      </body>
    </html>
  );
}
