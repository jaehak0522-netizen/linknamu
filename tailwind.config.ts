import type { Config } from "tailwindcss";

const config: Config = {
  // 다크모드는 <html class="dark"> 로 토글 (ThemeToggle 참고)
  darkMode: "class",
  content: [
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  plugins: [],
};
export default config;
