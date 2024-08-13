type bookmarkType = {
  title: string;
  href: string;
  description: string;
  image: string;
};

type bookmarkScrapeType = {
  url: string;
};

export const BOOKMARKS = (): bookmarkScrapeType[] => [
  { url: "https://www.linkedin.com/feed/" },
  { url: "https://www.github.com/" },
  { url: "https://https://www.framer.com/motion/" },
  { url: "http://localhost:3000/bookmarks" },
  { url: "http://localhost:3000/archive" },
  { url: "http://localhost:3000/" },
  { url: "http://localhost:3000/about" },
  { url: "http://localhost:3000/stack" },
  { url: "http://localhost:3000/bookmarks" },
];
