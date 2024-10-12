type projectType = {
  name: string | any;
  description: string | undefined | null;
  image: string | any;
  href: string | undefined;
};

interface ProjectCardProps {
  projectName: string | undefined | null;
  projectLink: string | any;
  projectDescription: string | undefined | null;
  projectType: string | undefined | null;
  projectDate: string | any;
  technologies: string[];
}

export const ALLPROJECTS: ProjectCardProps[] = [
  {
    projectName: "MetaScraper",
    projectLink: "https://meta-scrapper.vercel.app",
    projectDescription:
      "Easily extract and retrieve metadata from any website, including the title, OG image, and description.",
    projectType: "Personal project",
    projectDate: "2024-03-01",
    technologies: ["TypeScript", "Next.js", "Tailwind CSS", "Framer Motion"],
  },
  {
    projectName: "Write it",
    projectLink: "https://writee-it.vercel.app",
    projectDescription:
      "Craft Your Unique Sayings and Watch Them change to perfect handwritting.",
    projectType: "Personal project",
    projectDate: "2023-12-15",
    technologies: ["Angular", "Tailwind CSS", "TypeScript"],
  },
];

export const PROJECTS: projectType[] = [
  {
    name: "MetaScraper",
    href: "https://meta-scrapper.vercel.app",
    image: "/projects/metascraper.png",
    description:
      "Easily extract and retrieve metadata from any website, including the title, OG image, and description.",
  },
  {
    name: "Write it",
    href: "https://writee-it.vercel.app/",
    image: "/projects/writeit.png",
    description:
      " Craft Your Unique Sayings and Watch Them change to perfect handwritting",
  },
];
