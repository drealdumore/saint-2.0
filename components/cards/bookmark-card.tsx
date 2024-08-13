import { LINK } from "@/lib/constants/icons";
import Image from "next/image";
import Link from "next/link";
import { MotionDiv } from "../../lib/motion/motionDiv";

export type BookmarkType = {
  ogTitle?: string;
  url?: string;
  description?: string;
  ogImage?: string;
};

export interface BookmarkCardProps {
  data: BookmarkType;
  index: number;
}

const variants = {
  hidden: { opacity: 0 },
  visible: { opacity: 1 },
};

// export const BookmarkCard: React.FC<BookmarkCardProps> = ({ data }) => {
export const BookmarkCard = ({ data, index }: BookmarkCardProps) => {
  return (
    <MotionDiv
      variants={variants}
      initial="hidden"
      animate="visible"
      transition={{ delay: index * 0.25, ease: "easeInOut", duration: 0.5 }}
      viewport={{ amount: 0 }}
    >
      <Link
        href={data.url || "/#"}
        target="_blank"
        className="flex aspect-auto min-w-0 cursor-pointer flex-col gap-4 overflow-hidden rounded-xl bg-white p-4 transition-colors duration-300 hover:bg-gray-100 border border-gray-200 ring-4 ring-neutral-800/5"
      >
        <div className="aspect-[1200/630] overflow-hidden rounded-md">
          {data.ogImage ? (
            <Image
              src={data.ogImage}
              loading="lazy"
              alt={data.ogTitle || "Bookmark Image"}
              className="aspect-[1200/630] animate-reveal rounded-lg border bg-cover bg-center bg-no-repeat object-cover"
              width={1200}
              height={630}
            />
          ) : (
            <div className="aspect-[1200/630] bg-gray-200 rounded-lg"></div> 
          )}
        </div>
        <h2 className="line-clamp-1 text-lg leading-snug">
          {data.ogTitle || "No Title"}
        </h2>
        <span className="line-clamp-4 inline-flex items-center gap-1 text-sm text-gray-500">
          <LINK />
          {data.url || "No URL"}
        </span>
        <p className="text-sm line-clamp-3 ">
          {data.description || "No Description"}
        </p>
      </Link>
    </MotionDiv>
  );
};
