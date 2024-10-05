import React from "react";
import Image from "next/image";

const WithIcon = ({ text, src }: { text: string; src: string }) => {
  return (
    <>
      
      <span className="px-1.5  py-0 border border-transparent cursor-pointer bg-neutral-50  gap-x-2  ring-1 ring-neutral-200 relative rounded-sm   inline-flex items-center transition-colors hover:bg-neutral-100">
        {" "}
        <Image
          src={src}
          width="16"
          height="16"
          className="size-4 aspect-square rounded"
          alt="Nigeria flag icon"
        />
        {text}{" "}
      </span>
    </>
  );
};

export default WithIcon;
