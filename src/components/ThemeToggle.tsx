"use client";

import { useEffect, useState } from "react";

export default function ThemeToggle() {
  // 초기 테마는 layout.tsx의 인라인 스크립트가 <html class="dark">로 먼저 적용해 둠
  const [dark, setDark] = useState<boolean | null>(null);

  useEffect(() => setDark(document.documentElement.classList.contains("dark")), []);

  function toggle() {
    const next = !dark;
    document.documentElement.classList.toggle("dark", next);
    try {
      localStorage.setItem("theme", next ? "dark" : "light");
    } catch {}
    setDark(next);
  }

  return (
    <button
      type="button"
      onClick={toggle}
      aria-label={dark ? "밝은 화면으로 전환" : "어두운 화면으로 전환"}
      className="fixed right-5 top-5 z-10 h-10 w-10 rounded-full border border-white/70 bg-white/45 text-base shadow-[0_6px_20px_-10px_rgba(150,85,50,0.35)] backdrop-blur-xl transition duration-300 hover:bg-white/65 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#e98b6d]/60 dark:border-white/10 dark:bg-white/[0.06] dark:hover:bg-white/[0.1]"
    >
      {/* 마운트 전에는 테마를 모르므로 비워 둬서 아이콘 깜빡임 방지 */}
      {dark === null ? "" : dark ? "☀️" : "🌙"}
    </button>
  );
}
