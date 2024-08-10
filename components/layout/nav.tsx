"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { SvgFilter } from "../design/svgFilter";
import { useState, useRef, useEffect, useLayoutEffect } from "react";

interface LinkPosition {
  left: number;
  width: number;
}

const AppNav = () => {
  const pathName = usePathname();

  const links = [
    { link: "/", title: "Home" },
    { link: "/about", title: "About" },
    { link: "/stack", title: "Stack" },
    {
      link: "https://docs.google.com/document/d/1Yiwj9xYJ1CzXda6izCjxJlhUkOnZLKU_2s5RAkptO2A/edit?usp=sharing",
      title: "Resume",
    },
  ];

  const [linkPositions, setLinkPositions] = useState<LinkPosition[]>([]);
  const [selectorPosition, setSelectorPosition] = useState<{
    x: number;
    width: number;
  }>({ x: 0, width: 0 });
  const containerRef = useRef<HTMLDivElement>(null);
  const selector = useRef<HTMLDivElement>(null);
  const [activeLinkIndex, setActiveLinkIndex] = useState(0);

  const updateSelectorPosition = (index: number) => {
    const activeLink = containerRef.current?.children[index] as HTMLElement;
    if (activeLink) {
      const { left, width } = activeLink.getBoundingClientRect();
      const containerRect = containerRef.current?.getBoundingClientRect();

      if (containerRect) {
        const containerLeft = containerRect.left;

        const newLeft = left;
        const newWidth = width;

        setSelectorPosition({
          x: newLeft - containerLeft,
          width: newWidth,
        });

        // Center the text inside the selector
        selector.current!.style.transform = `translateX(${
          newLeft - containerLeft
        }px)`;
        selector.current!.style.width = `${newWidth}px`;
        selector.current!.style.lineHeight = `${activeLink.offsetHeight}px`;

        // Show the selector
        selector.current?.classList.remove("opacity-0");
        setTimeout(() => {
          if (selector.current) {
            selector.current.classList.add("transition-all");
          }
        }, 100);
      }
    } else {
      // Hide the selector for non-allowed pages
      selector.current?.classList.add("opacity-0");
    }
  };

  useLayoutEffect(() => {
    if (linkPositions.length > 0) {
      const activeLinkIndex = links.findIndex((link) => link.link === pathName);

      if (activeLinkIndex >= 0) {
        updateSelectorPosition(activeLinkIndex);
      }
    }

    window.addEventListener("resize", handleResize);

    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, [linkPositions, pathName]);

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

  const handleResize = () => {
    const activeLinkIndex = links.findIndex((link) => link.link === pathName);

    if (activeLinkIndex >= 0) {
      updateSelectorPosition(activeLinkIndex);
    }
  };

  return (
    <>
      <nav className="bg-white/50 gap-12 px-2 text-neutral-800 sticky mt-2 pb-1 pt-2 top-0 bottom-auto border-t-transparent border-l-transparent border-r-transparent border-b  border-b-zinc-100  z-[51]  w-full max-w-none  mx-auto rounded-none shadow-none nav">
        {/* <nav className="bg-white/50 backdrop-blur-sm flex flex-col gap-12 px-1 text-neutral-800 sticky mt-2 lg:top-0 lg:bottom-auto lg:border-t-transparent lg:border-l-transparent lg:border-r-transparent lg:border-b border border-zinc-200 lg:border-b-zinc-100 bg-white z-[51] top-auto bottom-8  w-full lg:max-w-none max-w-[90%] mx-auto rounded-full lg:rounded-none shadow-xl shadow-black/5 lg:shadow-none nav"> */}
        <div className="w-full px-0 md:px-1.5  flex items-center justify-between max-w-screen-lx mx-auto">
          {/* <div className="w-full lg:px-0 md:px-1.5 px-0 flex items-center justify-between max-w-screen-lx mx-auto"> */}
          <div>
            <Link href="/" className="flex flex-col">
              <p className="text-base block font-semibold  sm:font-sans">
                Saint
              </p>
              <p className="text-[13px]  hidden md:block opacity-80 group-hover:opacity-100">
                Full-Stack Developer
              </p>
            </Link>
          </div>
          {/* <div>
            <Link href="/" className="flex flex-col">
              <p className="text-base hidden sm:block font-semibold fancy">
                Saint
              </p>
              <p className="text-[13px]  hidden md:block opacity-80 group-hover:opacity-100">
                Full-Stack Developer
              </p>
            </Link>
          </div> */}
          <div
            className="flex items-center md:gap-4 gap-2 justify-between md:justify-normal w-auto -0 px-0 relative"
            // className="flex items-center md:gap-4 gap-2 justify-between md:justify-normal w-full md:w-auto lg:px-0 md:px-1.5 px-0 relative"
            id="nav-links"
            ref={containerRef}
          >
            {links.map((link, i) => (
              <Link
                key={i}
                onClick={() => setActiveLinkIndex(i)}
                href={link.link}
                className={`${
                  pathName === link.link ? " text-neutral-900" : ""
                }text-zinc-400 flex items-center rounded-[8px] justify-center px-2 h-9 hover:text-neutral-800 py-4 transition-colors duration-150 font-medium md:w-auto w-full text-center text-sm xs:text-base z-50 relative 
                `}
                // }text-zinc-400 flex items-center rounded-full justify-center px-4 h-9 hover:text-neutral-800 py-4 transition-colors duration-150 font-medium md:w-auto w-full text-center text-sm xs:text-base z-50 relative
              >
                {link.title}
              </Link>
            ))}

            {linkPositions.length > 0 && (
              <div
                ref={selector}
                className={`transition-all px-2 h-9 bg-gray-200 rounded-[8px] absolute duration-300 opacity-0 flex items-center justify-center ${
                  pathName === links[activeLinkIndex].link ? "z-40" : "z-0"
                }`}
                style={{
                  transform: `translateX(${selectorPosition.x}px)`,
                  width: `${selectorPosition.width}px`,
                }}
              ></div>
            )}
          </div>
        </div>
      </nav>
      <SvgFilter />
    </>
  );
};

export default AppNav;
