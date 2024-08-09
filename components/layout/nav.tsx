"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { SvgFilter } from "../design/svgFilter";

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

  return (
    <>
      <nav className="bg-white/50 backdrop-blur-sm flex flex-col gap-12 px-5 text-neutral-800 sticky mt-2 lg:top-0 lg:bottom-auto lg:border-t-transparent lg:border-l-transparent lg:border-r-transparent lg:border-b border border-zinc-200 lg:border-b-zinc-100 bg-white z-[51] top-auto bottom-8  w-full lg:max-w-none max-w-[90%] mx-auto rounded-full lg:rounded-none shadow-xl shadow-black/5 lg:shadow-none nav ">
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
            className="flex items-center md:gap-8 gap-2 justify-between md:justify-normal w-full md:w-auto lg:px-0 md:px-1.5 px-0"
            id="nav-links"
          >
            {links.map((link, i) => (
              <Link
                key={i}
                href={link.link}
                className={`${
                  pathName === link.link ? "underline" : ""
                }text-zinc-400 link hover:text-neutral-800 py-4 transition-colors duration-150 font-medium md:w-auto w-full text-center text-sm xs:text-base`}
              >
                {link.title}
              </Link>
            ))}
          </div>
        </div>
      </nav>
      <SvgFilter />
    </>
  );
};

export default AppNav;
