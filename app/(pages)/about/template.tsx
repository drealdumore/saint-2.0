import React from "react";
import Image from "next/image";
import WithIcon from "@/components/design/withIcon";
import { Heading } from "@/components/design/heading";
import { contacts } from "@/lib/social-profiles";
import Link from "next/link";

const About = () => {
  const filteredContacts = contacts.filter(
    (contact) => !contact.href.startsWith("mailto:")
  );

  return (
    <>
      <section>
        {/* heading */}
        <Heading title="About Me" />

        <div className="flex flex-col gap-3 text-pretty">
          {/* about image */}
          <div className="w-full flex flex-col pb-4 mb-12">
            <div className="w-full">
              <div className="w-full relative h-48 ">
                <div className="rounded-2xl w-full md:max-w-2xl inset-0  bg-neutral-900/5 max-w-xl bg-[url('/bg/bg.png')] bg-cover bg-center mx-auto ml-0  h-full">
                  <div className="w-full  max-w-nav mx-auto left-1/2 -translate-x-1/2 absolute -bottom-12">
                    <Image
                      src="/avatars/laptop-avatar.png"
                      width="130"
                      height="130"
                      id="avatar"
                      className="ring-4 ring-neutral-700/20 aspect-square rounded-full"
                      alt="saint avatar"
                    />
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* about content*/}
          <div className="flex gap-12  flex-col mb-24">
            {/* <div className="flex gap-12 lg:flex-row flex-col mb-24"> */}
            <div className="flex-grow md:max-w-2xl flex text-zinc-500 flex-col gap-4 text-justify">
              <p>
                Full-Stack Software Developer based in{" "}
                <WithIcon text="Nigeria" src="/icons/nigeria-flag.svg" /> with a
                passion for web development. With over 4 years of hands-on
                experience, I've mastered the art of crafting seamless digital
                experiences.
              </p>
              <p>
                Innately curious person—passionate about the entanglement
                between humans and technology, and the ways we interact with the
                world. Currently crafting interfaces and building websites for a
                living. I navigate effortlessly through technologies such as
                Tailwind CSS, Sass, JavaScript, TypeScript, Next.js, and
                Node.js.
              </p>
              <p>
                I believe in the power of clean, efficient code to transform
                ideas into reality. Whether it's weaving the intricacies of
                Angular or navigating the frontiers of Next.js, I thrive on
                turning challenges into opportunities.
              </p>
              <p>
                I am fueled by a passion for crafting exceptional,
                high-performance applications. Coding is not just a job for me;
                it's a dynamic journey where I thrive on creating seamless and
                thoughtful solutions. Angular isn't just a framework; it's my
                canvas for shaping and enhancing the digital landscape.
              </p>

              <p>
                Beyond the lines of code, I treasure engaging conversations and
                the rhythm of good music, serving as catalysts that inspire and
                propel me in my creative process. Let's code a story where
                innovation and elegance converge, transforming lines of logic
                into extraordinary user experiences.
              </p>
            </div>

            {/* links */}
            <div className="max-w-s flex gap-20  w-full lg:ml-auto xs:grid xs:grid-cols-2">
              <div className="self-start mb-10 xs:mb-0">
                <h2 className="font-semibold mb-3">Socials</h2>
                <ul className="space-y-2 -ml-1">
                  {filteredContacts.map((link, index) => (
                    <li key={index}>
                      <Link
                        href={link.href}
                        className="text-zinc-400 hover:text-neutral-900 transition-colors font-medium cursor-alias"
                      >
                        {link.text}
                      </Link>
                    </li>
                  ))}
                </ul>
              </div>

              <div>
                <h2 className="font-semibold mb-3">Contact</h2>
                <ul className="space-y-2 -ml-1">
                  <li>
                    <a
                      href="mailto:samuelisah234@gmail.com"
                      className="text-zinc-400 hover:text-neutral-900 transition-colors font-medium cursor-alias"
                    >
                      Email
                    </a>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default About;
