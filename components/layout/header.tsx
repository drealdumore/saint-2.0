"use client";

import Image from "next/image";
import React from "react";
import WithIcon from "../design/withIcon";
import { AnimatePresence, motion } from "framer-motion";
import { Heading } from "../design/heading";

const Header = () => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 15 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, y: 15 }}
      transition={{ delay: 0.5 }}
    >
      <AnimatePresence>
        <div className="flex flex-col items-center justify-start md:gap-24 gap-16 w-full lg:pb-8 lg:justify-between lg:flex-row">
          <article className="flex flex-col lg:h-2/6 h-2/5 max-lg:w-full max-lg:flex">
            <article className="max-w-[170px] w-full flex-shrink-0 mb-10">
              <Image
                id="avatar"
                src="/avatars/avatar-smile.png"
                className="tw-shadow aspect-square rounded-[29px]"
                alt="saint avatar"
                height={120}
                width={120}
              />
            </article>
            <article className="flex items-center gap-x-3 mb-4">
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

            <article className="cursor-text max-w-3xl">
              <h1 className=" lg:text-[32px] font-semibold w-full font-cal text-2xl mb-1 leading-9">
                Samuel | Full-Stack Developer
              </h1>

              <p className="text-base mb-4">
                Hi 👋 I'm{" "}
                <span className="font-bold text-lg font-serif">Samuel</span>, a
                Full-Stack Developer based in{" "}
                <WithIcon text="Nigeria" src="/icons/nigeria-flag.svg" />{" "}
                Interested in developing innovative applications that exceed
                expectations on all platforms. I'm interested in Software
                Development, Startups, artificial intelligence, cybersecurity,
                mobile development and embedded systems.I enjoy learning and
                experimenting with new technologies.
              </p>
            </article>
          </article>
        </div>
      </AnimatePresence>
    </motion.div>
  );
};

export default Header;
