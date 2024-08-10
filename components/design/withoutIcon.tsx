import React from "react";


export const WithoutIcon = ({
  text,
  tooltip,
}: {
  text?: string | undefined;
  tooltip?: string | undefined;
}) => {
  return (
    <>
      <span className="px-1.5 py-0 group border border-transparent  bg-neutral-50 ring-1 ring-neutral-200 relative rounded-sm  inline-block cursor-help transition-colors hover:bg-neutral-100 ">
        {text}
        <span className="opacity-0 font-normal group-hover:opacity-100 delay-75 scale-90 group-hover:scale-100 pointer-events-none transition-all duration-150 ease-out absolute text-sm px-2.5 py-1 rounded-md bg-black z-[99] text-white  -top-5 group-hover:-top-6 left-[50%] translate-x-[-50%] -translate-y-3">
          <span className="w-2.5 h-2.5 rounded-sm bg-black absolute scale-75 group-hover:scale-100 transition-transform duration-200 z-30 transform rotate-45  -bottom-1 left-[50%] translate-x-[-50%]"></span>
          <span className="z-50 relative truncate">{tooltip}</span>
        </span>
      </span>
    </>
  );
};
