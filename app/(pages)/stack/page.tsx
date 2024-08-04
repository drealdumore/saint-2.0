import React from "react";
import { Backend } from "./components/Backend ";
import { Heading } from "@/components/design/heading";
import { Frontend } from "./components/Frontend";

const Stack = () => {
  return (
    <div>
      <div className="w-full flex flex-col pb-8 gap-3 max-w-3xl">
        <Heading title="Tools and Tech I work with" />

        <Frontend />
        <Backend />
      </div>
    </div>
  );
};

export default Stack;
