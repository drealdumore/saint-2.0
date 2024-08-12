import Project from "@/components/design/project";
import { PROJECTS } from "@/lib/constants/projects";
import React from "react";

const Projects = () => {
  return (
    <>
      <article className="flex flex-col gap-3">
        <h2 className="md:text-2xl text-xl font-bold">Selected work</h2>

        <div className="flex flex-col gap-8 group/wrapper">
          {PROJECTS.map((project, i) => (
            <Project
              key={i}
              name={project.name}
              description={project.description}
              href={project.href}
              image={project.image}
            />
          ))}
        </div>
      </article>
    </>
  );
};

export default Projects;
