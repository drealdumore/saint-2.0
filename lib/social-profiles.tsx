import { GithubIcon, LinkedinIcon } from "lucide-react";

const svg = () => {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      className="size-4"
      width="44"
      height="44"
      viewBox="0 0 24 24"
      strokeWidth="1.5"
      stroke="#000000"
      fill="none"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <path stroke="none" d="M0 0h24v24H0z" fill="none" />
      <path d="M4 4l11.733 16h4.267l-11.733 -16z" />
      <path d="M4 20l6.768 -6.768m2.46 -2.46l6.772 -6.772" />
    </svg>
  );
};

export const SOCIALS = {
  twitter: {
    title: "X (Twitter)",
    username: "drealdumore",
    url: "https://twitter.com/intent/user?screen_name=drealdumore",
    icon: svg(),
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


export const contacts = [
  { href: "mailto:samuelisah234@gmail.com", text: "Email" },
  { href: "https://www.linkedin.com/in/samuel-isah/", text: "LinkedIn" },
  { href: "https://twitter.com/drealdumore", text: "X.com" },
  { href: "https://github.com/drealdumore", text: "GitHub" },
];
