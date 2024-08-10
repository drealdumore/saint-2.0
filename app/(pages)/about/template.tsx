"use client";

import { Heading } from "@/components/design/heading";
import Motion from "@/components/design/y-motion";
import Experience from "./components/experience";
import Content from "./components/content";
import Links from "./components/links";
import Profile from "./components/profile";

const About = () => {
  return (
    <Motion>
      <Heading title="About Me" />

      <div className="flex flex-col gap-3">
        <Profile />

        <div className="flex gap-12  flex-col ">
          <Content />
          <Links />
        </div>

        <Experience />
      </div>
    </Motion>
  );
};

export default About;
