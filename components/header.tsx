import Image from "next/image";
import React from "react";
import WithIcon from "./withIcon";

const Header = () => {
  return (
    <header className="flex font-bdog flex-col items-center justify-start md:gap-24 gap-16  w-full lg:pb-8 mb-12 lg:justify-between lg:flex-row ">
      <article className="flex flex-col lg:h-2/6 h-2/5 max-lg:w-full max-lg:flex ">
        <article className="max-w-[170px] w-full flex-shrink-0 mb-10 ">
          <Image
            id="avatar"
            src={"/avatars/avatar-smile.png"}
            className=" tw-shadow aspect-square rounded-full"
            alt="saint avatar"
            height={160}
            width={160}
          />
        </article>
        <article className="flex items-center  gap-x-3 mb-4">
          <p className="font-semibold items-center gap-2 hidden md:flex">
            Current Status:
          </p>
          <article className="flex items-center flex-row gap-x-2">
            <span className="relative flex h-3 w-3">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-700 opacity-75"></span>
              <span className="relative inline-flex rounded-full h-auto w-7 bg-emerald-700"></span>
            </span>
            <p className="flex font-semibold items-center gap-2 text-emerald-700">
              Open to work
            </p>
          </article>
        </article>

        <article className="cursor-text max-w-2xl">
          <h1 className="text-xl font-semibold leading-snug pointer-events-none transition-colors group hover:text-zinc-400 mb-10">
            <span className="font-cal leading-5">
              {" "}
              <span className="font-bold font-cal text-2xl">Saint </span>|
              Full-Stack Developer{" "}
            </span>
            <br></br>
            Full-Stack Developer building digital products.
          </h1>
          <p className="text-base mb-4">
            Hi 👋 I'm{" "}
            <span className="font-bold text-lg font-serif">Samuel</span> , a
            Full-Stack Developer based in{" "}
            <WithIcon text="Nigeria" src="/icons/nigeria-flag.svg" /> {" "}
            with a passion for web development. With over 4 years of hands-on
            experience, I've mastered the art of crafting seamless digital
            experiences. I'm interested in Angular, Software Development,
            Startups, Cryptocurrencies and Music.
          </p>
        </article>
      </article>
    </header>
  );
};

export default Header;
