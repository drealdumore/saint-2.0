import { LINK } from "@/lib/constants/icons";
import { formatDateDifference } from "@/utils/formatDateDifference";
import Link from "next/link";
import React from "react";

interface ProjectCardProps {
  projectName: string | undefined | null;
  projectLink: string | any;
  projectDescription: string | undefined | null;
  projectType: string | undefined | null;
  projectDate: string | any;
  technologies: string[];
}

const ProjectCard: React.FC<ProjectCardProps> = ({
  projectName,
  projectLink,
  projectDescription,
  projectType,
  projectDate,
  technologies,
}) => {
  const formattedDate = new Date(projectDate);

  return (
    <div className="min-w-[120px] font-sans p-4 ring-4 ring-neutral-800/5 gap-y-4 gap-x-4 justify-start items-center border border-gray-200 rounded-lg flex">
      <div className="flex flex-col gap-y-4 w-full">
        <div className="inline-flex w-full justify-between items-center">
          <h3 className="font-medium text-lg tracking-tighter">
            {projectName}
          </h3>
          <div className="space-x-2">
            <Link
              className="text-sm inline-flex gap-x-1 items-center hover:underline opacity-50"
              rel="noopener noreferrer"
              target="_blank"
              href={projectLink}
            >
              <LINK />
              Link
            </Link>
          </div>
        </div>
        <div className="flex items-center w-full -mt-4">
          <span className="text-xs opacity-50">{projectType}</span>
          {/* <span className="text-xs text-emerald-500">{projectType}</span> */}
        </div>
        <p className="text-sm">{projectDescription}</p>
        <span className="text-neutral-500 text-xs -mb-2.5">
          I've came across
        </span>
        <div className="flex flex-wrap gap-2">
          {technologies.map((tech, index) => (
            <div
              key={index}
              className="p-1 inline-flex text-xs text-neutral-500 border bg-white max-w-max border-neutral-200 rounded"
            >
              {tech}
            </div>
          ))}
        </div>
        <span className="text-[10px] text-neutral-500">
          {formatDateDifference(formattedDate)}
        </span>
      </div>
    </div>
  );
};

export default ProjectCard;
