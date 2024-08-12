"use client";

import { EXPERIENCE } from "@/lib/constants/experience";

const Experience = () => {
  return (
    <>
      <div className="border-t">
        <h3 className="text-lg font-semibold mt-5 mb-2">Experience</h3>
        <div className="mb-4">
          {EXPERIENCE.map((exp, index) => (
            <div key={index} className="flex flex-col gap-2 mb-8">
              <div className="flex justify-between items-center">
                <p className="font-semibold">{exp.company}</p>
                <p className="text-neutral-500">{exp.duration}</p>
              </div>
              <p className="font-semibold">{exp.title}</p>
              {exp.description.map((desc, i) => (
                <p key={i} className="text-neutral-500 mb-4">
                  {desc}
                </p>
              ))}
            </div>
          ))}
        </div>
      </div>
    </>
  );
};

export default Experience;
