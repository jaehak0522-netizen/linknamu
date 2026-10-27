import type { Metadata, Viewport } from "next";
import { profile } from "@/data/site";
import "./globals.css";

// Pretendard: 페이지에 쓰인 글자 범위만 내려받는 dynamic subset 버전
const pretendardHref =
  "https://cdn.jsdelivr.net/gh/orioncactus/pretendard@v1.3.9/dist/web/variable/pretendardvariable-dynamic-subset.min.css";

export const metadata: Metadata = {
  title: `${profile.name} | 링크나무`,
  description: profile.bio || "내 모든 링크를 한 페이지에",
};

export const viewport: Viewport = {
  themeColor: [
    { media: "(prefers-color-scheme: light)", color: "#fff8f0" },
    { media: "(prefers-color-scheme: dark)", color: "#1a1512" },
  ],
};

// 첫 렌더 전에 테마를 적용해 화면이 깜빡이지 않게 함 (저장된 선택 > 시스템 설정)
const themeScript = `try{var t=localStorage.getItem("theme");if(t==="dark"||(!t&&matchMedia("(prefers-color-scheme: dark)").matches))document.documentElement.classList.add("dark")}catch(e){}`;

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="ko" suppressHydrationWarning>
      <head>
        <script dangerouslySetInnerHTML={{ __html: themeScript }} />
        <link rel="preconnect" href="https://cdn.jsdelivr.net" crossOrigin="anonymous" />
        <link rel="stylesheet" href={pretendardHref} crossOrigin="anonymous" />
      </head>
      <body className="antialiased">{children}</body>
    </html>
  );
}
