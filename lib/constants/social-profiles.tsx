import { GithubIcon, LinkedinIcon, X } from "lucide-react";

export const SOCIALS = {
  twitter: {
    title: "X (Twitter)",
    username: "drealdumore",
    url: "https://twitter.com/drealdumore",
    icon: <X/>,
  },

  github: {
    title: "GitHub",
    url: "https://github.com/drealdumore",
    icon: <GithubIcon size={16} />,
  },
  
  linkedin: {
    title: "LinkedIn",
    url: "https://www.linkedin.com/in/samuel-isah",
    icon: <LinkedinIcon size={16} />,
  },
};


export const CONTACTS = [
  { href: "mailto:samuelisah234@gmail.com", text: "Email" },
  { href: "https://www.linkedin.com/in/samuel-isah/", text: "LinkedIn" },
  { href: "https://twitter.com/drealdumore", text: "X.com" },
  { href: "https://github.com/drealdumore", text: "GitHub" },
];
