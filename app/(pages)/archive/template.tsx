"use client";

import { Heading } from "@/components/design/heading";
import Motion from "@/components/design/y-motion";
import { FOLDER } from "@/lib/constants/icons";
import { ARCHIVELINKS } from "@/lib/constants/links";
import Link from "next/link";

import React from "react";

const Archive = () => {
  return (
    <>
      <Motion>
        <Heading
          title="Archive"
          sub="My collection of smaller projects, MVPs, and creative ideas. Feel free to look through if you are interested. Click on any folder to dive in and discover more."
        />

        <div className="flex flex-col gap-3">
          <div className="bg-gray-900/5 rounded-lg  gap-8 grid grid-cols-2 md:grid-cols-3 p-2">
            {ARCHIVELINKS.map((link, i) => (
              <Link
                key={i}
                href={`/archive/${link.href}`}
                className="p-4 relative rounded-lg flex items-center justify-center group cursor-alias active:scale-95 transition-all duration-75 
                hover:bg-neutral-500/5"
              >
                <div className="flex flex-col items-center gap-2 w-28">
                  <div className="text-neutral-400 relative ">
                    <FOLDER />
                  </div>
                  <p className="font-medium text-center text-neutral-500 group-hover:text-neutral-900  transition-colors duration-75">
                    {link.text}
                  </p>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </Motion>
    </>
  );
};

export default Archive;
