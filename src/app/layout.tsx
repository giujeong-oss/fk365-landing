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
  title: "Fresh Kitchen 365 | 프리미엄 식자재 공급",
  description: "태국 파타야 & 방콕 지역 프리미엄 식자재 공급 전문 기업. 신선한 채소, 과일, 육류를 365일 안정적으로 공급합니다.",
  keywords: ["식자재", "Fresh Kitchen", "파타야", "방콕", "태국", "식자재 공급", "B2B"],
  openGraph: {
    title: "Fresh Kitchen 365 | 프리미엄 식자재 공급",
    description: "태국 파타야 & 방콕 지역 프리미엄 식자재 공급 전문 기업",
    url: "https://freshkitchen365.com",
    siteName: "Fresh Kitchen 365",
    locale: "ko_KR",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="ko">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        {children}
      </body>
    </html>
  );
}
