import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
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
  title: "Fukumoto | Portfolio",
  description: "インフラ・セキュリティ × AI開発 × IT教育発信エンジニアのポートフォリオ",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className={`${geistSans.variable} ${geistMono.variable} h-full antialiased`}
      style={{ backgroundColor: "#0c0a13", color: "#f0e6ff" }}
    >
      <body className="min-h-full flex flex-col" style={{ backgroundColor: "#0c0a13", color: "#f0e6ff" }}>{children}</body>
    </html>
  );
}
