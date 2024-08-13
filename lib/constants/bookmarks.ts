type bookmarkType = {
  title: string;
  href: string;
  description: string;
  image: string;
};

type bookmarkScrapeType = {
  url: string;
};

// TODO -  USE DATABASE AND ADD YOUR OWNN DESCRIPTION
export const BOOKMARKS = (): bookmarkScrapeType[] => [
  { url: "https://clay.earth" },
  { url: "https://symbl.cc/en" },
  { url: "https://writekit.ai" },
  { url: "https://deadsimplesites.com" },
  { url: "https://www.flagpack.xyz" },
  { url: "https://million.dev/lint" },
  { url: "https://notion-avatar.vercel.app" },
  { url: "https://svgl.vercel.app" },
  { url: "https://vercel.com/font" },
];
