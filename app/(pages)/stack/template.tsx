import React from "react";
import { Backend } from "./components/Backend ";
import { Frontend } from "./components/Frontend";
import { Heading } from "@/components/design/heading";

const Template = () => {
  return (
    <div>
      <div className="w-full flex flex-col pb-8 gap-2 max-w-3xl">
        <Heading title="Tools and Tech I work with" />

        <div className="flex flex-col gap-4">
          <Frontend />
          <Backend />
        </div>
      </div>
    </div>
  );
};

export default Template;
