import { LINK } from "@/lib/constants/icons";
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
          alt=""
          className="aspect-[1200/630] animate-reveal rounded-lg border bg-cover bg-center bg-no-repeat object-cover"
          width={1200}
          height={630}
        />
      </div>
      <h2 className="line-clamp-4 text-lg leading-snug">MetaScraper</h2>
      <span className="line-clamp-4 inline-flex items-center gap-1 text-sm text-gray-500">
        <LINK />
        localhost:3000
      </span>
      <p className="line-clamp-6 text-sm">Scrape websites metadata easily.</p>
    </Link>
  );
};
