export const sharedMetadata = {
  title: "Samuel - Full-Stack Developer",
  name: "Samuel Isah",
  description:
    "I'm Samuel Isah, a Fullstack Engineer Interested in developing innovative applications that exceed expectations on all platforms and creating beautiful and functional interfaces.",
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
  image: './og.png'
};
