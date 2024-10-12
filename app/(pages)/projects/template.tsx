"use client";

import Motion from "@/lib/motion/y-motion";
import { Heading } from "@/components/design/heading";
import Projects from "./_components/projects";

const ProjectsTemplate = () => {
  return (
    <Motion>
      <div className="flex flex-col gap-4">
        <Heading
          title="My Projects!"
          sub="From innovative web applications to efficient backend solutions, take a look at my portfolio of work. "
        />

        <Projects />
      </div>
    </Motion>
  );
};

export default ProjectsTemplate;
