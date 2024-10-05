"use client";

import Header from "@/components/layout/header";
import Skills from "@/components/design/skills";
import React from "react";
import Motion from "@/lib/motion/y-motion";
import Projects from "./_components/projects";
import TechStack from "@/components/design/techStack";

const Home = () => {
  return (
    <Motion>
      <div className="flex flex-col gap-4">
        <Header />
        <Projects />
        {/* <Skills /> */}
        <TechStack/>
      </div>
    </Motion>
  );
};

export default Home;
