// import React from "react";
// import BookmarkTemplate from "./template";
// import { sharedMetadata } from "@/lib/constants/shared-meta";
// import { Metadata } from "next";

// export const metadata: Metadata = {
//   title: `Bookmarks | ${sharedMetadata.title}`,
//   description: "My go-to list of tools & software that I enjoy using and have helped me level up my skills.",
// };




// const page = () => {
//   return (
//     <>
//       <BookmarkTemplate />
//     </>
//   );
// };

// export default page;

"use client";

import { BookmarkCard } from "@/components/cards/bookmark-card";
import ProjectCard from "@/components/cards/project-card";
import { Heading } from "@/components/design/heading";
import Motion from "@/components/design/y-motion";
import { usePathname, useRouter, useSearchParams } from "next/navigation";

import React, { useState, useEffect, useRef } from "react";

interface LinkPosition {
  left: number;
  width: number;
}

const BookmarkTemplate = () => {
  const links = [
    { title: "Development" },
    { title: "Icons" },
    { title: "VScode" },
    { title: "Websites" },
  ];

  const currentUrl = typeof window !== "undefined" ? window.location.href : "";

  console.log("from bookmark template :: currentUrl: ", currentUrl);

  const [activeLinkIndex, setActiveLinkIndex] = useState(0);
  const [linkPositions, setLinkPositions] = useState<LinkPosition[]>([]);
  const containerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (containerRef.current) {
      const positions = Array.from(containerRef.current.children).map(
        (child: Element) => {
          const rect = (child as HTMLElement).getBoundingClientRect();
          return { left: rect.left, width: rect.width };
        }
      );
      setLinkPositions(positions);
    }
  }, [containerRef.current]);

  const pathname = usePathname();

  const url = `${pathname}`;

  return (
    <Motion>
      <div className="flex flex-col gap-4">
        <h1>Current Path: {pathname}</h1>
        {/* <span>{currentUrl}</span> */}
        <Heading
          title="Bookmarks"
          sub="Curation of my discoveries. Here is my go-to list of tools & software that I enjoy using and have helped me level up my skills."
        />

        {/* CROP OUT */}
        {/* TODO - FIX IT */}
        <div className="flex items-center justify-center w-full ">
          {/* TODO - FIX IT SO IT WRAPS WHEN SCREEN SM AND THE LINK POSITION COMES DOWN TOO AND MOVES UP WHEN NEEDED */}

          {/* <div
            className="relative grid-cols-3 grid sm:grid-cols-3 md:grid-cols-2 lg:grid-cols-3 p-2 rounded-lg ring-4 ring-neutral-900/5 text-sm font-medium text-white bg-[#0D0D0D] justify-between transition-all duration-100 max-md:text-[12px] w-full lg:max-w-none max-w-[90%]"
            ref={containerRef}
          > */}
          <div
            className="relative flex items-center  p-2 rounded-full ring-4 ring-neutral-900/5 text-sm font-medium text-white bg-[#0D0D0D] justify-between transition-all duration-100 max-md:text-[12px] w-full lg:max-w-none max-w-[90%]"
            ref={containerRef}
          >
            {links.map((link, i) => (
              <div
                key={i}
                className={`z-10 cursor-pointer px-4 py-2 max-md:px-2 max-md:text-sm hover:bg-neutral-800 hover:bg-opacity-50 transition-all rounded-full max-md:text-[12px] max-lg:text-center ${
                  activeLinkIndex === i ? "bg-neutral-800 bg-opacity-50" : ""
                }`}
                onClick={() => setActiveLinkIndex(i)}
              >
                {link.title}
              </div>
            ))}

            {/* {linkPositions.length > 0 && (
              <div
                className="transition-all h-9 bg-neutral-800 rounded-lg absolute z-0 duration-300"
                style={{
                  opacity: "1",
                  transform: `translateX(${
                    linkPositions[activeLinkIndex].left -
                    linkPositions[0].left +
                    1
                  }px), translateY(${
                    linkPositions[activeLinkIndex].left -
                    linkPositions[0].left +
                    1
                  }px)`,
                  width: `${linkPositions[activeLinkIndex].width}px`,
                }}
              ></div>
            )} */}
            {linkPositions.length > 0 && (
              <div
                className="transition-all h-9 bg-neutral-800 rounded-full absolute z-0 duration-300"
                style={{
                  opacity: "1",
                  transform: `translateX(${
                    linkPositions[activeLinkIndex].left -
                    linkPositions[0].left +
                    1
                  }px)`,
                  width: `${linkPositions[activeLinkIndex].width}px`,
                }}
              ></div>
            )}
          </div>
        </div>

        {/* OVERFLOW-SCROLL WHEN  */}
        {/* <div className="flex items-center justify-center w-full overflow-x-auto">
        <div
          className="relative flex items-center p-2 rounded-full ring-4 ring-neutral-900/5 text-sm font-medium text-white bg-[#0D0D0D] justify-between transition-all duration-100 max-md:text-[12px] w-full lg:max-w-none max-w-[90%] overflow-x-auto"
          ref={containerRef}
        >
          {links.map((link, i) => (
            <div
              key={i}
              className={`z-10 cursor-pointer px-4 py-2 max-md:px-2 max-md:text-sm hover:bg-neutral-800 hover:bg-opacity-50 transition-all rounded-full max-md:text-[12px] max-lg:text-center ${
                activeLinkIndex === i ? "bg-neutral-800 bg-opacity-50" : ""
              }`}
              onClick={() => setActiveLinkIndex(i)}
            >
              {link.title}
            </div>
          ))}

          {linkPositions.length > 0 && (
            <div
              className="transition-all h-9 bg-neutral-800 rounded-full absolute z-0 duration-300"
              style={{
                opacity: "1",
                transform: `translateX(${
                  linkPositions[activeLinkIndex].left -
                  linkPositions[0].left +
                  1
                }px)`,
                width: `${linkPositions[activeLinkIndex].width}px`,
              }}
            ></div>
          )}
        </div>
      </div> */}

        <div className="grid gap-8 sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3 sm:gap-4 md:gap-4"></div>
      </div>
    </Motion>
  );
};

export default BookmarkTemplate;
