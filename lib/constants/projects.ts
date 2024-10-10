type projectType = {
  name: string | any;
  description: string | undefined | null;
  image: string | any;
  href: string | undefined;
};

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
