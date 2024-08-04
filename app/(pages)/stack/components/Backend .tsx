import { SkillCard } from "@/components/cards/skill-card";
import {
  HTML,
  SCSS,
  TAILWIND,
  JAVASCRIPT,
  TYPESCRIPT,
  ANGULAR,
  NEXTJS,
  NODEJS,
  EXPRESSJS,
  GIT,
  FIREBASE,
} from "@/lib/icons";
import React from "react";

export const Backend = () => {
  const backend = [
    { icon: <NODEJS />, skill: "Node Js" },
    { icon: <EXPRESSJS />, skill: "Express Js" },
    { icon: <GIT />, skill: "Git - Version Control" },
    { icon: <FIREBASE />, skill: "Firebase" },
  ];
  return (
    <div>
      <div>
        <h2 className="text-xl font-semibold  w-full text-[40px]">Backend</h2>
        <p className="font-medium">
          For the frontend, I use this tools to make dynamic and user friendly
          user interfaces.
        </p>
      </div>

      <div>
        <div className="relative w-full">
          <div className="w-full grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-x-4 gap-y-4 items-center">
            {backend.map((skill, index) => (
              <SkillCard index={index} skill={skill.skill} icon={skill.icon} />
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};
