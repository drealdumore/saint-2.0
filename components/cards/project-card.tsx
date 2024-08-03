import { LINK } from "@/lib/icons";
import { formatDateDifference } from "@/utils/formatDateDifference";
import Link from "next/link";
import React from "react";

const ProjectCard = () => {
  const projectDate = new Date("2024-03-01");
  return (
    <div className="min-w-[120px] font-sans p-4 ring-4 ring-neutral-800/5 gap-y-4 gap-x-4 justify-start items-center  border border-gray-200 rounded-lg flex">
      <div className="flex flex-col gap-y-4 w-full">
        <div className="inline-flex w-full justify-between items-center">
          <h3 className="font-medium text-lg tracking-tighter">MetaScraper</h3>
          <div className="space-x-2">
            <Link
              className="text-sm inline-flex gap-x-1 items-center hover:underline opacity-50"
              rel="noopener noreferrer"
              target="_blank"
              href="localhost:3000"
            >
              <LINK />
              Link
            </Link>
          </div>
        </div>
        <div className="flex items-center w-full -mt-4">
          <span className="text-xs text-emerald-500">Personal project</span>
        </div>
        <p className="text-sm">Scrape websites metadata easily.</p>
        <span className="text-neutral-500 text-xs -mb-2.5">
          I've came across
        </span>
        <div className="flex flex-wrap gap-2">
          <div className="p-1 inline-flex text-xs text-neutral-500 border bg-white max-w-max border-neutral-200 rounded">
            TypeScript
          </div>

          <div className="p-1 inline-flex text-xs text-neutral-500 border bg-white max-w-max border-neutral-200 rounded">
            Next.js
          </div>
        </div>
        <span className="text-[10px] text-neutral-500">
          {formatDateDifference(projectDate)}
        </span>
      </div>
    </div>
  );
};

export default ProjectCard;
