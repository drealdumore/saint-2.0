"use client";

import Header from "@/components/layout/header";
import Skills from "@/components/design/skills";
import React from "react";
import Motion from "@/components/design/y-motion";
import Projects from "./_components/projects";

const Home = () => {
  return (
    <Motion>
      <div className="flex flex-col gap-4">
        <Header />
        <Projects/>
        <Skills />
      </div>
    </Motion>
  );
};

export default Home;
