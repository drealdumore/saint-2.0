import React from "react";
import Image from "next/image";
import WithIcon from "@/components/withIcon";

const About = () => {
  return (
    <>
      <section>
        <h1 className="text-2xl font-semibold mb-16 w-full font-cal text-[40px]">
          About Me
        </h1>
        <div className="flex gap-12 lg:flex-row flex-col mb-24">
          <div className="max-w-[170px] w-full flex-shrink-0">
            <Image
              src="/avatars/laptop-avatar.png"
              width="250"
              height="250"
              id="avatar"
              className="tw-shadow aspect-square rounded-full"
              alt="saint avatar"
            />
          </div>
          <div className="flex-grow md:max-w-2xl">
            <p className="text-zinc-500 mb-4">
              Hi 👋 I'm Saint , a Full-Stack Developer based in {" "}
              <WithIcon text="Nigeria" src="/icons/nigeria-flag.svg" /> 
              {" "} with a passion for web development. With over 4 years of hands-on
              experience, I've mastered the art of crafting seamless digital
              experiences.
            </p>
            <p className="text-zinc-500 mb-4">
              Innately curious person—passionate about the entanglement between
              humans and technology, and the ways we interact with the world.
              Currently crafting interfaces and building websites for a living.
              I navigate effortlessly through technologies such as Tailwind CSS,
              Sass, JavaScript, TypeScript, Next.js, and Node.js.
            </p>
            <p className="text-zinc-500 mb-4">
              I believe in the power of clean, efficient code to transform ideas
              into reality. Whether it's weaving the intricacies of Angular or
              navigating the frontiers of Next.js, I thrive on turning
              challenges into opportunities.
            </p>
            <p className="text-zinc-500 mb-4">
              I am fueled by a passion for crafting exceptional,
              high-performance applications. Coding is not just a job for me;
              it's a dynamic journey where I thrive on creating seamless and
              thoughtful solutions. Angular isn't just a framework; it's my
              canvas for shaping and enhancing the digital landscape.
            </p>

            <p className="text-zinc-500 mb-4">
              Beyond the lines of code, I treasure engaging conversations and
              the rhythm of good music, serving as catalysts that inspire and
              propel me in my creative process. Let's code a story where
              innovation and elegance converge, transforming lines of logic into
              extraordinary user experiences.
            </p>
          </div>

          <div className="max-w-s mx-7 flex gap-20  w-full lg:ml-auto xs:grid xs:grid-cols-2">
            <div className="self-start mb-10 xs:mb-0">
              <h2 className="font-semibold mb-3">Socials</h2>
              <ul className="space-y-2 -ml-1">
                <li>
                  <a
                    href="https://twitter.com/drealdumore"
                    className="flex items-center gap-1 outline-transparent focus:outline-2 focus:outline-blue-50 disabled:cursor-not-allowed -ml-0.5 text-zinc-800 hover:underline underline-offset-2 font-medium rounded-md px-1.5 cursor-alias"
                  >
                    x.com
                  </a>
                </li>

                <li>
                  <a
                    href="https://www.linkedin.com/in/isah-samuel/"
                    className="flex items-center gap-1 outline-transparent focus:outline-2 focus:outline-blue-50 disabled:cursor-not-allowed -ml-0.5 text-zinc-800 hover:underline underline-offset-2 font-medium rounded-md px-1.5 cursor-alias"
                  >
                    LinkedIn
                  </a>
                </li>
                <li>
                  <a
                    href="https://github.com/drealdumore"
                    className="flex items-center gap-1 outline-transparent focus:outline-2 focus:outline-blue-50 disabled:cursor-not-allowed -ml-0.5 text-zinc-800 hover:underline underline-offset-2 font-medium rounded-md px-1.5 cursor-alias"
                  >
                    GitHub
                  </a>
                </li>
              </ul>
            </div>

            <div>
              <h2 className="font-semibold mb-3">Contact</h2>
              <ul className="space-y-2 -ml-1">
                <li>
                  <a
                    href="mailto:samuelisah234@gmail.com"
                    className="flex items-center gap-1 outline-transparent focus:outline-2 focus:outline-blue-50 disabled:cursor-not-allowed -ml-0.5 text-zinc-800 hover:underline underline-offset-2 font-medium rounded-md px-1.5 cursor-alias"
                  >
                    Email
                  </a>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default About;
