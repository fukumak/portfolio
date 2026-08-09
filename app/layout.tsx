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
  description:
    "インフラ・セキュリティ × AI開発 × 業務改善。現場で培ったインフラ・セキュリティの知識とAI開発を組み合わせ、業務改善ツールなどを開発しています。",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="ja"
      className={`${geistSans.variable} ${geistMono.variable} h-full antialiased`}
      style={{ backgroundColor: "#fdf8f1", color: "#292524" }}
    >
      <body className="min-h-full flex flex-col" style={{ backgroundColor: "#fdf8f1", color: "#292524" }}>{children}</body>
    </html>
  );
}
