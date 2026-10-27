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
      className="fixed right-4 top-4 h-10 w-10 rounded-full border border-neutral-200 bg-white/80 text-lg shadow-sm backdrop-blur transition hover:scale-105 dark:border-neutral-700 dark:bg-neutral-800/80"
    >
      {/* 마운트 전에는 테마를 모르므로 비워 둬서 아이콘 깜빡임 방지 */}
      {dark === null ? "" : dark ? "☀️" : "🌙"}
    </button>
  );
}
