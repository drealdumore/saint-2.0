"use client";

import React from "react";

type skill = {
  icon?: React.ReactNode | any | null | undefined;
  skill?: string | null | undefined;
};

export const SkillCard = ({ icon, skill }: skill) => {
  return (
    <div className="min-w-[120px] py-4 px-3 ring-4 ring-neutral-800/5 gap-y-4 gap-x-4 justify-start items-center  border border-gray-200 rounded-lg h-[4rem] flex">
      <div className="text-2xl p-1 rounded">{icon}</div>
      <p className="font-normal  ">{skill}</p>
    </div>
  );
};
