"use client";

import { Heading } from "@/components/design/heading";
import Motion from "@/lib/motion/y-motion";
import { ARCHIVELINKS } from "@/lib/constants/links";

import React from "react";
import FolderLink from "./_components/folderLink";

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
            {ARCHIVELINKS.map((link) => (
              <FolderLink key={link.id} href={link.href} text={link.text} />
            ))}
          </div>
        </div>
      </Motion>
    </>
  );
};

export default Archive;
