import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import Link from "next/link";
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
  title: "GitFolio - Developer Portfolio Template",
  description: "Minimal and modern developer portfolio template built with Next.js and Tailwind CSS.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased min-h-screen bg-black text-gray-300 font-mono selection:bg-white/20 selection:text-white overflow-x-hidden`}
      >
        {/* Grid Background */}
        <div className="fixed inset-0 z-0 pointer-events-none">
          <div className="absolute inset-0 bg-[linear-gradient(to_right,#111_1px,transparent_1px),linear-gradient(to_bottom,#111_1px,transparent_1px)] bg-[size:4rem_4rem] [mask-image:radial-gradient(ellipse_60%_50%_at_50%_0%,#000_70%,transparent_100%)] opacity-20" />
          <div className="absolute bottom-0 left-0 right-0 h-[50vh] bg-gradient-to-t from-gray-900/40 to-transparent opacity-30" />
        </div>

        {/* Navigation */}
        <nav className="fixed top-0 left-0 right-0 z-50 bg-black/80 backdrop-blur-md border-b border-gray-800">
          <div className="max-w-6xl mx-auto px-6 h-16 flex items-center justify-between">
            <Link
              href="/"
              className="text-lg font-bold tracking-widest text-transparent bg-clip-text bg-gradient-to-r from-white to-gray-400 hover:to-white transition-all duration-300"
            >
              KADEEJA BAI
            </Link>
            <div className="flex gap-8 text-xs font-bold tracking-widest uppercase text-gray-500 hidden sm:flex">
              <Link href="/" className="hover:text-white hover:drop-shadow-[0_0_5px_rgba(255,255,255,0.8)] transition-all">ABOUT</Link>
              <Link href="/coding" className="hover:text-white hover:drop-shadow-[0_0_5px_rgba(255,255,255,0.8)] transition-all">CODING</Link>
              <Link href="/travel" className="hover:text-white hover:drop-shadow-[0_0_5px_rgba(255,255,255,0.8)] transition-all">TRAVEL</Link>
              <Link href="/art" className="hover:text-white hover:drop-shadow-[0_0_5px_rgba(255,255,255,0.8)] transition-all">ART</Link>
              <Link href="/contact" className="hover:text-white hover:drop-shadow-[0_0_5px_rgba(255,255,255,0.8)] transition-all">CONTACT</Link>
            </div>
          </div>
        </nav>

        <main className="relative z-10 max-w-6xl mx-auto px-6 pt-32 pb-20 min-h-[calc(100vh-80px)]">
          {children}
        </main>

        <footer className="relative z-10 py-8 text-center text-xs font-mono text-gray-500 border-t border-gray-800/50 bg-black">
          <p>Made with ❤️ by Kadeeja Bai</p>
        </footer>
      </body>
    </html>
  );
}
