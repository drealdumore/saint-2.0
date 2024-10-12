import ProjectsTemplate from "./template";
import { sharedMetadata } from "@/lib/constants/shared-meta";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: `My Projects`,
  // title: `My Projects | ${sharedMetadata.title}`,
  description:
    "Explore a diverse range of projects I have worked on, including innovative web applications, backend solutions, and open-source contributions. Discover how I solve real-world problems through technology.",
  keywords:
    "software development, web applications, backend solutions, open-source, full-stack projects, portfolio, developer projects",
};

const page = () => {
  return (
    <>
      <ProjectsTemplate />
    </>
  );
};

export default page;
