import type { LinkItem } from "@/data/site";

function hostname(url: string) {
  try {
    return new URL(url).hostname.replace(/^www\./, "");
  } catch {
    return url;
  }
}

export default function LinkCard({ link }: { link: LinkItem }) {
  return (
    <a
      href={`/go/${link.id}`}
      target="_blank"
      rel="noopener noreferrer"
      className="group flex w-full items-center gap-4 rounded-[1.25rem] border border-white/70 bg-white/45 px-6 py-5 shadow-[0_1px_2px_rgba(120,70,40,0.06),0_10px_30px_-14px_rgba(150,85,50,0.3)] backdrop-blur-xl transition duration-300 ease-out hover:bg-white/65 hover:shadow-[0_1px_2px_rgba(120,70,40,0.06),0_14px_34px_-14px_rgba(150,85,50,0.38)] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#e98b6d]/60 dark:border-white/10 dark:bg-white/[0.06] dark:shadow-[0_10px_30px_-14px_rgba(0,0,0,0.6)] dark:hover:bg-white/[0.1]"
    >
      <div className="min-w-0 flex-1">
        <p className="truncate font-semibold text-stone-900 dark:text-stone-50">{link.title}</p>
        <p className="mt-0.5 truncate text-sm text-stone-500 dark:text-stone-400">
          {link.description ?? hostname(link.url)}
        </p>
      </div>
      <svg
        aria-hidden
        viewBox="0 0 20 20"
        fill="none"
        stroke="currentColor"
        strokeWidth="1.75"
        strokeLinecap="round"
        strokeLinejoin="round"
        className="h-4 w-4 shrink-0 text-stone-400 transition duration-300 ease-out group-hover:-translate-y-px group-hover:translate-x-px group-hover:text-stone-600 dark:text-stone-500 dark:group-hover:text-stone-300"
      >
        <path d="M7 13l6-6M8 7h5v5" />
      </svg>
    </a>
  );
}
