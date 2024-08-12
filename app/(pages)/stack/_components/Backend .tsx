"use client";

import { SkillCard } from "@/components/cards/skill-card";
import { NODEJS, EXPRESSJS, MongoDB, MySQL, PostgreSQL } from "@/lib/constants/icons";
import React from "react";

export const Backend = () => {
  const backendSkills = [
    { id: 1, icon: <MySQL />, skill: "MySQL" },
    { id: 2, icon: <NODEJS />, skill: "Node.js" },
    { id: 3, icon: <EXPRESSJS />, skill: "Express.js" },
    { id: 4, icon: <MongoDB />, skill: "MongoDB" },
    { id: 5, icon: <PostgreSQL />, skill: "PostgreSQL" },
  ];

  return (
    <div>
      <div>
        <h2 className="text-2xl font-semibold">Backend Technologies</h2>
        <p className="font-medium mt-2">
          These are the tools and technologies I use to build robust and
          scalable backend systems.
        </p>
      </div>

      <div className="mt-4">
        <div className="relative w-full">
          <div className="w-full grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4 items-center">
            {backendSkills.map((skill) => (
              <SkillCard
              key={skill.id}
                
                skill={skill.skill}
                icon={skill.icon}
              />
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};
