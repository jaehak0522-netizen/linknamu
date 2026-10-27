import type { Profile } from "@/data/site";

// 흰 테두리 + 따뜻한 색 그림자로 살짝 떠 있는 느낌
const avatarClass =
  "h-28 w-28 rounded-full ring-4 ring-white/80 shadow-[0_2px_4px_rgba(120,70,40,0.08),0_16px_40px_-12px_rgba(180,100,60,0.45)] dark:ring-white/10 dark:shadow-[0_16px_40px_-12px_rgba(0,0,0,0.6)] sm:h-32 sm:w-32";

export default function ProfileHeader({ profile }: { profile: Profile }) {
  return (
    <header className="flex flex-col items-center gap-5 text-center">
      {profile.avatar ? (
        // eslint-disable-next-line @next/next/no-img-element
        <img src={profile.avatar} alt={`${profile.name} 프로필 사진`} className={`${avatarClass} object-cover`} />
      ) : (
        <div
          className={`${avatarClass} flex items-center justify-center bg-gradient-to-br from-[#f6b38f] to-[#e98b6d] text-5xl font-semibold text-white`}
        >
          {profile.name.slice(0, 1)}
        </div>
      )}
      <div className="flex flex-col gap-2">
        <h1 className="text-2xl font-bold tracking-tight text-stone-900 dark:text-stone-50">{profile.name}</h1>
        {profile.bio && (
          <p className="max-w-xs text-[15px] leading-relaxed text-stone-600 dark:text-stone-400">{profile.bio}</p>
        )}
      </div>
    </header>
  );
}
