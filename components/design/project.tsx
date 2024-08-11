import React from "react";
import Image from "next/image";
import { StaticImport } from "next/dist/shared/lib/get-img-props";

type projectType = {
  name: string | any;
  description: string | undefined | null;
  image: string | StaticImport | any;
  href: string | undefined;
};

const Project = ({ name, description, image, href }: projectType) => {
  return (
    <div className="w-full group/project mb-8 md:mb-0 lg:group-hover/wrapper:opacity-25 lg:hover:!opacity-100 transition-opacity">
      <a
        className="flex md:gap-0 gap-2 flex-col items-start relative group/link"
        href={href}
      >
        <div>
          <h3 className="text-lg font-semibold transition-colors md:group-hover/link:underline underline-offset-2">
            {name}
          </h3>
          <p className="text-neutral-500  mb-2 line-clamp-2">{description}</p>
        </div>
        <div className="w-full relative">
          <div className="bg-neutral-100 rounded-md overflow-hidden lg:h-auto flex items-center justify-center w-full md:px-8">
            <Image
              className="relative md:h-auto md:object-scale-down md:object-center object-cover object-left"
              src={image}
              alt={name}
              width={500}
              height={250}
            />
          </div>
        </div>
      </a>
    </div>
  );
};

export default Project;
