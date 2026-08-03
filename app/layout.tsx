import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import Navbar from './components/navbar';
import Footer from './components/footer';
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Henry Graves Portfolio",
  description: "Software Engineer building scalable web applications.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={`${geistSans.variable} ${geistMono.variable} h-full antialiased`}>
      <body className="min-h-screen flex flex-col bg-slate-50 font-sans dark:bg-slate-950 relative overflow-hidden">
        {/* Subtle background decoration */}
        <div className="absolute inset-0 bg-gradient-to-br from-slate-800/10 via-transparent to-indigo-900/10 dark:from-slate-950/20 dark:via-transparent dark:to-indigo-950/20 pointer-events-none"></div>

        <Navbar />

        <main className="flex-grow flex items-center justify-center px-4 sm:px-6 lg:px-8">
          {children}
        </main>

        <Footer />
      </body>
    </html>
  );
}
