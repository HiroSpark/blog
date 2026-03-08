import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
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
  title: "HiroSpark",
  description: "HiroSparkのポートフォリオ",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="ja">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased bg-zinc-100`}
      >
        <div className="flex min-h-screen items-center justify-center font-sans">
          <main className="max-w-xl min-h-screen w-full px-6">
            <h1 className="font-bold text-2xl my-12">
              <Link href="/">HiroSpark</Link>
            </h1>
            {children}
          </main>
        </div>
      </body>
    </html>
  );
}
