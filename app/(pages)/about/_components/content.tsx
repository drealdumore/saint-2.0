"use client";

import WithIcon from "@/components/design/withIcon";

const Content = () => {
  const content = [
    `Innately curious person—passionate about the entanglement between humans and technology, and the ways we interact with the world. Currently crafting interfaces and building websites for a living. I navigate effortlessly through technologies such as Tailwind CSS, Sass, JavaScript, TypeScript, Next.js, and Node.js.`,
    `I believe in the power of clean, efficient code to transform ideas into reality. Whether it's weaving the intricacies of Angular or navigating the frontiers of Next.js, I thrive on turning challenges into opportunities.`,
    `I am fueled by a passion for crafting exceptional, high-performance applications. Coding is not just a job for me; it's a dynamic journey where I thrive on creating seamless and thoughtful solutions. Angular isn't just a framework; it's my canvas for shaping and enhancing the digital landscape.`,
    `Beyond the lines of code, I treasure engaging conversations and the rhythm of good music, serving as catalysts that inspire and propel me in my creative process. Let's code a story where innovation and elegance converge, transforming lines of logic into extraordinary user experiences.`,
  ];

  return (
    <>
      <div className="flex-grow md:max-w-2xl flex text-zinc-500 flex-col gap-4">
        <p>
          Full-Stack Software Developer based in{" "}
          <WithIcon text="Nigeria" src="/icons/nigeria-flag.svg" /> with a
          passion for web development. With over 4 years of hands-on experience,
          I've mastered the art of crafting seamless digital experiences.
        </p>

        {content.map((paragraph, index) => (
          <p key={index} dangerouslySetInnerHTML={{ __html: paragraph }} />
        ))}
      </div>
    </>
  );
};

export default Content;
