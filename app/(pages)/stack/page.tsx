import Skills from "@/components/skills";
import React from "react";

const Stack = () => {
  return (
    <div>
      <div className="w-full flex flex-col pb-8 gap-3">
        <h1 className="text-2xl font-semibold  w-full font-cal text-[40px]">
          Tools and Tech I work with
        </h1>

        <Skills />
      </div>
    </div>
  );
};

export default Stack;
