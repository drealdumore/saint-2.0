"use client";

import {
  HTML,
  SCSS,
  TAILWIND,
  JAVASCRIPT,
  TYPESCRIPT,
  MySQL,
  ANGULAR,
  REACT,
  NEXTJS,
  NODEJS,
  EXPRESSJS,
  MongoDB,
  PostgreSQL,
  GIT,
  FIREBASE,
} from "@/lib/constants/icons";
import { motion } from "framer-motion";
import Image from "next/image";
import { SkillCard } from "../../../../components/cards/skill-card";

interface SkillsInterface {
  id: number;
  icon?: any | null | undefined;
  skill?: string | null | undefined;
}

const logos = [
  { src: "/nextjs.svg", alt: "Next.js" },
  { src: "/tailwind.svg", alt: "Tailwind CSS" },
  { src: "/node.svg", alt: "Node.js" },
  { src: "/express.svg", alt: "Express.js" },
  { src: "/mongodb.svg", alt: "MongoDB" },
  { src: "/react.svg", alt: "React" },
  { src: "/psql.svg", alt: "PostgreSQL" },
  { src: "/sql.svg", alt: "SQL" },
  { src: "/html.svg", alt: "HTML" },
  { src: "/javascript.svg", alt: "JavaScript" },
  { src: "/git.svg", alt: "Git" },
  { src: "/java.svg", alt: "Java" },
  { src: "/python.svg", alt: "Python" },
  { src: "/typescript.svg", alt: "TypeScript" },
  { src: "/aws.svg", alt: "AWS" },
  { src: "/css.svg", alt: "CSS" },
  { src: "/shadcn.svg", alt: "Shadcn" },
  { src: "/app.svg", alt: "App Development" },
];

const skillsArray: SkillsInterface[] = [
  { id: 0, icon: <HTML />, skill: "HTML / CSS" },
  { id: 1, icon: <SCSS />, skill: "SCSS" },
  { id: 2, icon: <TAILWIND />, skill: "Tailwind CSS" },
  { id: 3, icon: <JAVASCRIPT />, skill: "JavaScript" },
  { id: 4, icon: <TYPESCRIPT />, skill: "TypeScript" },
  { id: 5, icon: <MySQL />, skill: "MySQL" },
  { id: 6, icon: <ANGULAR />, skill: "Angular" },
  { id: 7, icon: <REACT />, skill: "React" },
  { id: 8, icon: <NEXTJS />, skill: "NextJs" },
  { id: 9, icon: <NODEJS />, skill: "Node Js" },
  { id: 10, icon: <EXPRESSJS />, skill: "Express Js" },
  { id: 11, icon: <MongoDB />, skill: "MongoDB" },
  { id: 12, icon: <PostgreSQL />, skill: "Postgres" },
  { id: 13, icon: <GIT />, skill: "Git - Version Control" },
  { id: 14, icon: <FIREBASE />, skill: "Firebase" },
];

const TechStack = () => {
  return (
    <>
      <div className="w-full flex flex-col pb-2 gap-3 text-center">
        <div className="flex flex-col gap-2 mb-4">
          <h2 className="md:text-2xl text-xl font-bold">My Tech Stack</h2>
          <p className="font-medium text-neutral-500">
            My expertise spans a diverse range of technologies enabling me to
            deliver cutting-edge solutions across various platforms.
          </p>
        </div>
      </div>

      <div className="flex items-center justify-center w-full scale-75 max-w-13xl sm:mt-3 sm:scale-90">
        <div
          className="scroller"
          data-direction="right"
          data-speed="fast"
          data-animated="true"
        >
          <div className="inner__scroller">
            {skillsArray.map((skill, index) => (
              <SkillCard key={index} skill={skill.skill} icon={skill.icon} />
            ))}
          </div>
        </div>
      </div>
    </>
  );
};

export default TechStack;
