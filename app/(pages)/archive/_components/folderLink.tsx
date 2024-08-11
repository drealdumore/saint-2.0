import { FOLDER } from "@/lib/constants/icons";
import Link from "next/link";
import React from "react";

type folderLink = {
  href?: string | any | undefined;
  text?: string | any | undefined;
};

const FolderLink = ({ href, text }: folderLink) => {
  return (
    <>
      <Link
        href={`/archive/${href}`}
        className="p-4 relative rounded-lg flex items-center justify-center group cursor-pointer active:scale-95 transition-all duration-100 
    hover:bg-neutral-500/5"
      >
        <div className="flex flex-col items-center gap-2 w-28">
          <div className="text-neutral-400 relative ">
            <FOLDER className="w-14 h-14" />
          </div>
          <p className="font-medium text-center text-neutral-500 group-hover:text-neutral-900  transition-colors duration-75">
            {text}
          </p>
        </div>
      </Link>
    </>
  );
};

export default FolderLink;
