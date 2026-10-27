import type { Profile } from "@/data/site";

export default function ProfileHeader({ profile }: { profile: Profile }) {
  return (
    <header className="flex flex-col items-center gap-4 text-center">
      {profile.avatar ? (
        // eslint-disable-next-line @next/next/no-img-element
        <img
          src={profile.avatar}
          alt={`${profile.name} 프로필 사진`}
          className="h-36 w-36 rounded-full object-cover shadow-md ring-4 ring-white dark:ring-neutral-800"
        />
      ) : (
        <div className="flex h-36 w-36 items-center justify-center rounded-full bg-emerald-600 text-5xl font-bold text-white shadow-md ring-4 ring-white dark:ring-neutral-800">
          {profile.name.slice(0, 1)}
        </div>
      )}
      <div>
        <h1 className="text-2xl font-bold">{profile.name}</h1>
        {profile.bio && <p className="mt-1 text-neutral-600 dark:text-neutral-400">{profile.bio}</p>}
      </div>
    </header>
  );
}
