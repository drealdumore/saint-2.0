import Image from "next/image";
import React from "react";

const Header = () => {
  return (
    <header className="flex flex-col items-center justify-start md:gap-24 gap-16  w-full lg:pb-8 mb-12 lg:justify-between lg:flex-row ">
      <article className="flex flex-col lg:h-2/6 h-2/5 max-lg:w-full max-lg:flex ">
        <article className="max-w-[170px] w-full flex-shrink-0 mb-10 ">
          <img
            id="avatar"
            src="./assets/avatars/avatar-smile.png"
            className=" tw-shadow aspect-square rounded-full"
            alt="saint avatar"
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
            <span className="group-hover:underline underline-offset-4">
              {" "}
              <span className="font-bold text-2xl">Saint</span>| Angular Dev{" "}
            </span>
            <br></br>
            Software Developer building digital products.
          </h1>
          <p className="text-base mb-4">
            Hi 👋 I'm{" "}
            <span className="font-bold text-lg font-serif">Saint</span> , a
            Software Developer based in{" "}
            <span className="relative p-1 leading-none text-sm dark:hover:bg-neutral-700 align-middle bg-neutral-50 hover:bg-neutral-100 dark:bg-neutral-800 inline-flex max-w-max gap-x-2 items-center rounded-sm ring-1 ring-neutral-200 dark:ring-neutral-700">
              <Image
                src="/icons/nigeria-flag.svg"
                width="16"
                height="16"
                className="size-4 aspect-square rounded"
                alt="Nigeria flag icon"
                loading="lazy"
              />
              Nigeria{" "}
            </span>{" "}
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
