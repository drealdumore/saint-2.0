import { BookmarkCard } from "@/components/cards/bookmark-card";
import ProjectCard from "@/components/cards/project-card";
import { Heading } from "@/components/heading";
import { sharedMetadata } from "@/lib/shared-meta";
import { Metadata } from "next";
import React from "react";

export const metadata: Metadata = {
  title: `Bookmarks - ${sharedMetadata.title}`,
  description: "curation of my discoveries",
};

const page = () => {
  const links = [
    { title: "All" },
    { title: "Development" },
    { title: "Frontend" },
    { title: "Icons" },
    { title: "VScode" },
    { title: "Websites" },
  ];

  return (
    <div className="flex flex-col gap-4">
      <Heading
        title="Bookmarks"
        sub="Curation of my discoveries. Here is my go-to list of tools & software that I enjoy using and have helped me level up my skills."
      />

      <div className="flex items-center p-2 rounded-full ring-4 ring-neutral-900/5 text-sm font-medium text-white bg-[#0D0D0D] justify-between transition-all duration-100 max-md:text-[12px] ">
        {links.map((link, i) => (
          <div
            key={i}
            className="z-10 cursor-pointer px-4 py-2 max-md:px-2 max-md:text-sm hover:bg-neutral-700 hover:bg-opacity-50 transition-all rounded-full max-md:text-[12px]  max-lg:text-center"
          >
            {link.title}
          </div>
        ))}

        <div
          className="transition-all h-9 w-12 bg-neutral-800 rounded-full absolute z-0 left-0 duration-300 translate-x-1 max-md:w-16"
          style={{
            opacity: "1",
            transform: "translateX(10px)",
            width: "50px",
          }}
        ></div>
      </div>

      <div className="grid gap-8 sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3 sm:gap-4 md:gap-4">
        
      </div>
    </div>
  );
};

export default page;
