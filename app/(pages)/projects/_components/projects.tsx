import React, { useEffect, useState } from "react";
import ProjectCard from "./project-card";

const fetchProjects = async () => {
  const { ALLPROJECTS } = await import("@/lib/constants/projects");
  return ALLPROJECTS;
};

const Projects = () => {
  const [projects, setProjects] = useState<any[]>([]);

  useEffect(() => {
    const loadProjects = async () => {
      const projectData = await fetchProjects();

      const sortedProjects = projectData.sort((a: any, b: any) => {
        const dateA = new Date(a.projectDate).getTime();
        const dateB = new Date(b.projectDate).getTime();
        return dateB - dateA;
      });

      setProjects(sortedProjects);
    };
    loadProjects();
  }, []);

  return (
    <>
      <div className="flex flex-col gap-8">
        {projects.length > 0 ? (
          projects.map((project, i) => (
            <ProjectCard
              key={i}
              projectName={project.projectName}
              projectLink={project.projectLink}
              projectDescription={project.projectDescription}
              projectType={project.projectType}
              projectDate={project.projectDate}
              technologies={project.technologies}
            />
          ))
        ) : (
          <p>Loading projects...</p>
        )}
      </div>
    </>
  );
};

export default Projects;
