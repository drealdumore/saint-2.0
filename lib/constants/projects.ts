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
    projectLink: "https://metascraper.example.com",
    projectDescription: "Scrape websites metadata easily and efficiently.",
    projectType: "Personal project",
    projectDate: "2024-03-01",
    technologies: ["TypeScript", "Next.js", "Tailwind CSS"],
  },
  {
    projectName: "TaskFlow",
    projectLink: "https://taskflow.example.com",
    projectDescription: "A task management tool to boost team productivity.",
    projectType: "Client project",
    projectDate: "2023-12-15",
    technologies: ["React", "Node.js", "MongoDB"],
  },
  {
    projectName: "JobTracker",
    projectLink: "https://jobtracker.example.com",
    projectDescription:
      "Track job applications and career progress seamlessly.",
    projectType: "Open-source project",
    projectDate: "2023-08-10",
    technologies: ["Angular", "Firebase", "Bootstrap"],
  },
  {
    projectName: "QuickDocs",
    projectLink: "https://quickdocs.example.com",
    projectDescription: "Generate and share documents with ease in real time.",
    projectType: "Personal project",
    projectDate: "2023-11-20",
    technologies: ["Vue.js", "Express", "MySQL"],
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

