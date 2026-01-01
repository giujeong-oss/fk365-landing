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
  title: "Fresh Kitchen 365 | 채소, 과일, 주방 비품 전문 유통",
  description: "태국 파타야 & 방콕 지역 채소, 과일, 주방 비품 전문 유통 기업. 신선한 농산물과 주방용품을 365일 안정적으로 공급합니다. 고기 주문은 자매회사 Meet365에서!",
  keywords: ["채소", "과일", "주방 비품", "Fresh Kitchen", "파타야", "방콕", "태국", "식자재 공급", "B2B", "Meet365"],
  openGraph: {
    title: "Fresh Kitchen 365 | 채소, 과일, 주방 비품 전문 유통",
    description: "태국 파타야 & 방콕 지역 채소, 과일, 주방 비품 전문 유통 기업. 고기 주문은 자매회사 Meet365에서!",
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
