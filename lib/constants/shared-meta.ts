export const sharedMetadata = {
  title: "Samuel - Full-Stack Developer",
  name: "Samuel Isah",
  description:
    "I'm Samuel Isah, also known as drealdumore online, a freelance Fullstack Engineer Interested in developing innovative applications that exceed expectations on all platforms and creating beautiful and functional interfaces. Also interested in Software Development, Startups, artificial intelligence, cybersecurity, mobile development and embedded systems. I enjoy learning and experimenting with new technologies.",
  og: "Fullstack Software Engineer based in Nigeria.",
  url:
    process.env.NODE_ENV === "development"
      ? "http://localhost:3000"
      : "https://drealdumore.vercel.app",
  ogImage: {
    width: 1200,
    height: 630,
    type: "image/png",
  },
};
