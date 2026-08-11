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

const title = "Fukumoto | Portfolio";
const description =
  "インフラ・セキュリティ × AI開発 × 業務改善。現場で培ったインフラ・セキュリティの知識とAI開発を組み合わせ、業務改善ツールなどを開発しています。";

// OGP画像などの絶対URLを組み立てるための基準URL。
// Vercelでは環境変数から自動で解決されるため、追加の設定は不要。
const siteUrl = process.env.NEXT_PUBLIC_SITE_URL
  ? process.env.NEXT_PUBLIC_SITE_URL
  : process.env.VERCEL_PROJECT_PRODUCTION_URL
    ? `https://${process.env.VERCEL_PROJECT_PRODUCTION_URL}`
    : "http://localhost:3000";

export const metadata: Metadata = {
  metadataBase: new URL(siteUrl),
  title,
  description,
  openGraph: {
    title,
    description,
    url: "/",
    siteName: title,
    locale: "ja_JP",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title,
    description,
  },
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
