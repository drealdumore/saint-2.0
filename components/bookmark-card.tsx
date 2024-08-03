import Image from "next/image";
import Link from "next/link";

export const BookmarkCard = () => {
  return (
    <Link
      href={"/"}
      className="flex aspect-auto min-w-0 cursor-pointer flex-col gap-4 overflow-hidden rounded-xl bg-white p-4 transition-colors duration-300 hover:bg-gray-100 border border-gray-200 ring-4 ring-neutral-800/5"
    >
      <div className="aspect-[1200/630] overflow-hidden rounded-md">
        <Image
          src="/images/metascraper.png"
          loading="lazy"
          sizes="(max-width: 479px) 83vw, (max-width: 767px) 86vw, (max-width: 991px) 41vw, 25vw"
          alt=""
          className="aspect-[1200/630] animate-reveal rounded-lg border bg-cover bg-center bg-no-repeat object-cover"
          width={1200}
          height={630}
        />
      </div>
      <h2 className="line-clamp-4 text-lg leading-snug">MetaScraper</h2>
      <span className="line-clamp-4 inline-flex items-center gap-1 text-sm text-gray-500">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="16"
          height="16"
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          stroke-width="2"
          stroke-linecap="round"
          stroke-linejoin="round"
          className="lucide lucide-link2 "
        >
          <path d="M9 17H7A5 5 0 0 1 7 7h2"></path>
          <path d="M15 7h2a5 5 0 1 1 0 10h-2"></path>
          <line x1="8" x2="16" y1="12" y2="12"></line>
        </svg>
        localhost:3000
      </span>
      <p className="line-clamp-6 text-sm">Scrape websites metadata easily.</p>
    </Link>
  );
};
