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

  const [activeLinkIndex, setActiveLinkIndex] = useState(0);
  const [linkPositions, setLinkPositions] = useState<LinkPosition[]>([]);
  const [selectorPosition, setSelectorPosition] = useState<{
    x: number;
    width: number;
  }>({ x: 0, width: 0 });
  const containerRef = useRef<HTMLDivElement>(null);
  const selector = useRef<HTMLDivElement>(null);

  // const handleSelector = () => {
  //   const activeLink = containerRef.current?.children[activeLinkIndex] as HTMLElement;
  //   if (activeLink) {
  //     const { left, width } = activeLink.getBoundingClientRect();
  //     const containerRect = containerRef.current?.getBoundingClientRect();

  //     if (containerRect) {
  //       const containerLeft = containerRect.left;
  //       const containerRight = containerRect.right;

  //       // Adjustments for mobile screens
  //       const isMobile = typeof window !== "undefined" && window.innerWidth < 768;
  //       const mobileWidthFactor = 1.2;

  //       // Calculate the selector's new position and width
  //       let newLeft = isMobile ? left - width / (mobileWidthFactor * 2) : left;
  //       let newWidth = isMobile ? width * mobileWidthFactor : width;

  //       // Constrain the selector within the container bounds
  //       newLeft = Math.max(newLeft, containerLeft);
  //       newWidth = Math.min(newWidth, containerRight - newLeft);

  //       setSelectorPosition({
  //         x: newLeft - containerLeft, // Ensure this line does not include any extra offset
  //         width: newWidth,
  //       });

  //       // Show the selector
  //       selector.current?.classList.remove("opacity-0");
  //       setTimeout(() => {
  //         if (selector.current) {
  //           selector.current.classList.add("transition-all");
  //         }
  //       }, 100);
  //     }
  //   } else {
  //     // Hide the selector for non-allowed pages
  //     selector.current?.classList.add("opacity-0");
  //   }
  // };

  const handleSelector = () => {
    const activeLink = containerRef.current?.children[
      activeLinkIndex
    ] as HTMLElement;
    if (activeLink) {
      const { left, width } = activeLink.getBoundingClientRect();
      const containerRect = containerRef.current?.getBoundingClientRect();

      if (containerRect) {
        const containerLeft = containerRect.left;
        const containerRight = containerRect.right;

        // Adjustments for mobile screens
        const isMobile =
          typeof window !== "undefined" && window.innerWidth < 768;
        const mobileWidthFactor = 1.2;

        // Calculate the selector's new position and width
        let newLeft =
          (isMobile ? left - width / (mobileWidthFactor * 2) : left) - 31;
        // (isMobile ? left - width / (mobileWidthFactor * 2) : left) - 31; // Subtract 12px for the offset
        // let newLeft = (isMobile ? left - width / (mobileWidthFactor * 2) : left) - 12; // Subtract 12px for the offset
        let newWidth = isMobile ? width * mobileWidthFactor : width;

        // Constrain the selector within the container bounds
        newLeft = Math.max(newLeft, containerLeft);
        newWidth = Math.min(newWidth, containerRight - newLeft);

        setSelectorPosition({
          x: newLeft - containerLeft, // Ensure this line does not include any extra offset
          width: newWidth,
        });

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
    if (selectorPosition.x === 0 && selectorPosition.width === 0) {
      setTimeout(() => {
        handleSelector();
      }, 100);
    }

    requestAnimationFrame(() => {
      handleSelector();
    });

    window.addEventListener("resize", handleSelector);

    return () => {
      window.removeEventListener("resize", handleSelector);
    };
  }, [pathName, activeLinkIndex]);

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
    <>
      <nav className="bg-white/50 backdrop-blur-sm flex flex-col gap-12 px-5 text-neutral-800 sticky mt-2 lg:top-0 lg:bottom-auto lg:border-t-transparent lg:border-l-transparent lg:border-r-transparent lg:border-b border border-zinc-200 lg:border-b-zinc-100 bg-white z-[51] top-auto bottom-8  w-full lg:max-w-none max-w-[90%] mx-auto rounded-full lg:rounded-none shadow-xl shadow-black/5 lg:shadow-none nav">
        <div className="w-full flex items-center justify-between max-w-screen-lx mx-auto">
          <div>
            <Link href="/" className="flex flex-col">
              <p className="text-base hidden sm:block font-semibold fancy">
                Saint
              </p>
              <p className="text-[13px]  hidden md:block opacity-80 group-hover:opacity-100">
                Full-Stack Developer
              </p>
            </Link>
          </div>
          <div
            // style={{ width: "18rem" }}
            className="flex items-center md:gap-8 gap-2 justify-between md:justify-normal w-full md:w-auto lg:px-0 md:px-1.5 px-0"
            id="nav-links"
            ref={containerRef}
          >
            {links.map((link, i) => (
              <Link
                key={i}
                onClick={() => setActiveLinkIndex(i)}
                href="#"
                // href={link.link}
                className={`${
                  pathName === link.link ? "underline" : ""
                }text-zinc-400 link hover:text-neutral-800 py-4 transition-colors duration-150 font-medium md:w-auto w-full text-center text-sm xs:text-base z-50  ${
                  activeLinkIndex === i ? "bg-opacity-50" : ""
                }`}
              >
                {link.title}
              </Link>
            ))}

            {linkPositions.length > 0 && (
              <div
                ref={selector}
                className="transition-all h-9 bg-gray-200 px-8 rounded-full absolute z-0 duration-300 opacity-0"
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
