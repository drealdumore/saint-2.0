import React, { useEffect, useState } from "react";
import Project from "./project";

const fetchProjects = async () => {
  const { PROJECTS } = await import("@/lib/constants/projects");
  return PROJECTS;
};

const Projects = () => {
  const [projects, setProjects] = useState<any[]>([]);

  useEffect(() => {
    const loadProjects = async () => {
      const projectData = await fetchProjects();
      setProjects(projectData);
    };

    loadProjects();
  }, []);

  return (
    <article className="flex flex-col gap-3">
      <h2 className="md:text-2xl text-xl font-bold">Selected work</h2>

      <div className="flex flex-col gap-8 group/wrapper">
        {projects.length > 0 ? (
          projects.map((project, i) => (
            <Project
              key={i}
              name={project.name}
              description={project.description}
              href={project.href}
              image={project.image}
            />
          ))
        ) : (
          <p>Loading projects...</p>
        )}
      </div>
    </article>
  );
};

export default Projects;
