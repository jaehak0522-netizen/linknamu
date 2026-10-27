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
      className="flex w-full items-center gap-4 rounded-2xl border border-neutral-200 bg-white px-5 py-4 shadow-sm transition hover:-translate-y-0.5 hover:shadow-md active:translate-y-0 dark:border-neutral-800 dark:bg-neutral-900"
    >
      <div className="min-w-0 flex-1">
        <p className="truncate font-semibold">{link.title}</p>
        <p className="truncate text-sm text-neutral-500 dark:text-neutral-400">
          {link.description ?? hostname(link.url)}
        </p>
      </div>
      <span aria-hidden className="text-neutral-400">↗</span>
    </a>
  );
}
