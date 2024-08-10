import React from "react";
import Image from "next/image";

const WithIcon = ({ text, src }: { text: string; src: string }) => {
  return (
    <>
      <span className="p-1 cursor-pointer leading-none text-sm  align-middle bg-neutral-50 hover:bg-neutral-100  inline-flex max-w-max gap-x-2 items-center rounded-sm ring-1 ring-neutral-200">
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
