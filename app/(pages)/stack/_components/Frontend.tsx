"use client";

import { SkillCard } from "@/components/cards/skill-card";
import {
  HTML,
  SCSS,
  TAILWIND,
  JAVASCRIPT,
  TYPESCRIPT,
  REACT,
  ANGULAR,
  NEXTJS,
  FRAMER,
  VUE,
} from "@/lib/constants/icons";
import React from "react";

export const Frontend = () => {
  const frontendSkills = [
    { icon: <HTML />, skill: "HTML" },
    { icon: <SCSS />, skill: "SCSS" },
    { icon: <TAILWIND />, skill: "Tailwind CSS" },
    { icon: <JAVASCRIPT />, skill: "JavaScript" },
    { icon: <TYPESCRIPT />, skill: "TypeScript" },
    { icon: <ANGULAR />, skill: "Angular" },
    { icon: <FRAMER />, skill: "Framer Motion" },
    { icon: <REACT />, skill: "ReactJS" },
    { icon: <NEXTJS />, skill: "NextJS" },
    { icon: <VUE />, skill: "VueJS" },
  ];

  return (
    <div>
      <div>
        <h2 className="text-2xl font-semibold">Frontend Technologies</h2>
      </div>

      <div className="relative w-full mt-4">
        <div className="grid grid-cols-2 sm:grid-cols-2 md:grid-cols-3 gap-4">
          {frontendSkills.map((skill, index) => (
            <SkillCard key={index} skill={skill.skill} icon={skill.icon} />
          ))}
        </div>
      </div>
    </div>
  );
};
