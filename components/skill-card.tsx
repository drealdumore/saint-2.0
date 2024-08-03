"use client";

import React from "react";

type skill = {
  index: number;
  icon: any;
  skill: string;
};

export const SkillCard = ({ index, icon, skill }: skill) => {
  return (
    <div
      key={index}
      className="min-w-[120px] py-4 px-3 ring-4 ring-neutral-800/5 gap-y-4 gap-x-4 justify-start items-center  border border-gray-200 rounded-lg flex"
    >
      <div className="text-2xl p-1 rounded">{icon}</div>
      <p className="font-normal  ">{skill}</p>
    </div>
  );
};
