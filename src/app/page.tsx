import { links, profile } from "@/data/site";
import LinkCard from "@/components/LinkCard";
import ProfileHeader from "@/components/ProfileHeader";
import ThemeToggle from "@/components/ThemeToggle";

// 와이어프레임 구조: 원형 프로필 사진 → 이름 → 한 줄 소개 → 링크 카드 세로 목록
export default function Home() {
  return (
    <main className="relative min-h-screen px-6 py-20 sm:px-8 sm:py-28">
      {/* 배경: 크림 → 살구 그라데이션 + 글래스 카드 뒤로 비칠 은은한 빛 번짐 */}
      <div aria-hidden className="pointer-events-none fixed inset-0 -z-10 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-b from-[#fff8f0] via-[#fdeee2] to-[#fbdcc8] dark:from-[#1a1512] dark:via-[#211915] dark:to-[#2b1e18]" />
        <div className="absolute -left-24 top-1/4 h-80 w-80 rounded-full bg-[#ffd9b8]/60 blur-3xl dark:bg-[#7a4a32]/25" />
        <div className="absolute -right-20 bottom-[12%] h-96 w-96 rounded-full bg-[#f8c4b4]/50 blur-3xl dark:bg-[#6b3b30]/25" />
      </div>

      <ThemeToggle />
      <div className="mx-auto flex w-full max-w-[26rem] flex-col gap-12">
        <ProfileHeader profile={profile} />

        <ul className="flex flex-col gap-4" aria-label="링크 목록">
          {links.map((link) => (
            <li key={link.id}>
              <LinkCard link={link} />
            </li>
          ))}
        </ul>
      </div>
    </main>
  );
}
