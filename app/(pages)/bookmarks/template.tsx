"use client";

import { BookmarkCard } from "@/components/cards/bookmark-card";
import ProjectCard from "@/components/cards/project-card";
import { Heading } from "@/components/design/heading";
import { sharedMetadata } from "@/lib/shared-meta";
import { Metadata } from "next";
import React, { useState, useEffect, useRef } from "react";


interface LinkPosition {
  left: number;
  width: number;
}

const BookmarkTemplate = () => {
  const links = [
    { title: "All" },
    { title: "Development" },
    { title: "Frontend" },
    { title: "Icons" },
    { title: "VScode" },
    { title: "Websites" },
  ];

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

  return (
    <div className="flex flex-col gap-4">
      <Heading
        title="Bookmarks"
        sub="Curation of my discoveries. Here is my go-to list of tools & software that I enjoy using and have helped me level up my skills."
      />

      <div className="flex items-center justify-center w-full">
        <div
          className="relative flex items-center p-2 rounded-full ring-4 ring-neutral-900/5 text-sm font-medium text-white bg-[#0D0D0D] justify-between transition-all duration-100 max-md:text-[12px]"
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
      </div>

      <div className="grid gap-8 sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3 sm:gap-4 md:gap-4"></div>
    </div>
  );
};

export default BookmarkTemplate;
