"use client";

import { Heading } from "@/components/design/heading";
import Motion from "@/lib/motion/y-motion";
import Experience from "./_components/experience";
import Content from "./_components/content";
import Links from "./_components/links";
import Profile from "./_components/profile";

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
