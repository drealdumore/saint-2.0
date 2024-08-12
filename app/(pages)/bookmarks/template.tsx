"use client";

import React, { useState, useEffect, useRef } from "react";
import { usePathname } from "next/navigation";
import Motion from "@/components/design/y-motion";
import { Heading } from "@/components/design/heading";
import BreadCrumb from "@/components/design/breadCrumb";

interface LinkPosition {
  left: number;
  width: number;
  top: number;
}

const BookmarkTemplate = () => {
  const links = [
    { title: "Development" },
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
          return { left: rect.left, width: rect.width, top: rect.top };
        }
      );
      setLinkPositions(positions);
    }
  }, [containerRef.current, activeLinkIndex]);

  const pathname = usePathname();

  // Split pathname into segments for breadcrumb navigation
  const pathSegments = pathname.split("/").filter(Boolean);

  const shortLinks = [
    { title: "Home", link: "/" },
    { title: "Archive", link: "/archive" },
    ...pathSegments.map((segment, index) => {
      const link = `/${pathSegments.slice(0, index + 1).join("/")}`;
      return {
        title: segment.charAt(0).toUpperCase() + segment.slice(1),
        link,
      };
    }),
  ];

  // Add the current segment as the last item without a link
  if (pathSegments.length > 0) {
    links.push({
      title:
        pathSegments[pathSegments.length - 1].charAt(0).toUpperCase() +
        pathSegments[pathSegments.length - 1].slice(1),
    });
  }

  return (
    <Motion>
      <div className="flex flex-col gap-4">
        <BreadCrumb links={shortLinks} />

        <Heading
          title="Bookmarks"
          sub="Curation of my discoveries. Here is my go-to list of tools & software that I enjoy using and have helped me level up my skills."
        />

        {/* Navigation Links */}
        <div className="flex items-center justify-center">
          <div className="w-[90%]">
            <div
              className="relative grid-cols-3 grid sm:grid-cols-3 lg:grid-cols-4 p-2 rounded-lg ring-4 ring-neutral-900/5 text-sm font-medium text-white bg-[#0D0D0D] transition-all duration-100 w-full"
              ref={containerRef}
            >
              {links.map((link, i) => (
                <div
                  key={i}
                  className={`z-10 cursor-pointer px-4 py-2 max-md:px-2 max-md:text-sm hover:bg-neutral-800 hover:bg-opacity-50 transition-all rounded-md max-md:text-[12px] text-center ${
                    activeLinkIndex === i ? "bg-neutral-800 bg-opacity-50" : ""
                  }`}
                  onClick={() => setActiveLinkIndex(i)}
                >
                  {link.title}
                </div>
              ))}

              {linkPositions.length > 0 && (
                <div
                  className="transition-all h-9 bg-neutral-800 rounded-md absolute z-0 duration-300"
                  style={{
                    opacity: "1",
                    transform: `translateX(${
                      linkPositions[activeLinkIndex].left -
                      linkPositions[0].left +
                      8
                    }px) translateY(${
                      linkPositions[activeLinkIndex].top -
                      linkPositions[0].top +
                      8
                    }px)`,
                    width: `${linkPositions[activeLinkIndex].width}px`,
                  }}
                ></div>
              )}
            </div>
          </div>

          <div className="grid gap-8 sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3 sm:gap-4 md:gap-4"></div>
        </div>
      </div>
    </Motion>
  );
};

export default BookmarkTemplate;
