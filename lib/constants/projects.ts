type projectType = {
  name: string | any;
  description: string | undefined | null;
  image: string | any;
  href: string | undefined;
};

export const PROJECTS: projectType[] = [
  {
    name: "Love Notes",
    href: "#",
    image: "/projects/lovenote.png",
    description:
      "unique space to track your relationship, write love letters and preserve every special moment.",
  },
  {
    name: "Cal.com",
    href: "#",
    image: "/projects/calcom.webp",
    description:
      "Streamline scheduling, boost productivity, simplify life",
  },
];
