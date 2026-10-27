import { links, profile } from "@/data/site";
import LinkCard from "@/components/LinkCard";
import ProfileHeader from "@/components/ProfileHeader";
import ThemeToggle from "@/components/ThemeToggle";

// 와이어프레임 구조: 원형 프로필 사진 → 이름 → 한 줄 소개 → 링크 카드 세로 목록
export default function Home() {
  return (
    <main className="min-h-screen bg-gradient-to-b from-emerald-50 to-white px-4 py-16 dark:from-neutral-900 dark:to-neutral-950 sm:py-24">
      <ThemeToggle />
      <div className="mx-auto flex w-full max-w-md flex-col gap-8">
        <ProfileHeader profile={profile} />

        <ul className="flex flex-col gap-6" aria-label="링크 목록">
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
