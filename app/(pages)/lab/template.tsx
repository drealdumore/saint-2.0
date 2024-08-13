"use client";

import React from "react";
import { usePathname } from "next/navigation";
import Motion from "@/lib/motion/y-motion";
import { Heading } from "@/components/design/heading";
import BreadCrumb from "@/components/design/breadCrumb";

const LabTemplate = () => {
  const pathname = usePathname();

  // Split pathname into segments for breadcrumb navigation
  const pathSegments = pathname.split("/").filter(Boolean);

  const shortLinks = [
    { title: "Home", link: "/" },
    { title: "Archive", link: "/archive" },
    ...pathSegments.map((segment, index) => {
      const link = `/${pathSegments.slice(0, index + 1).join("/")}`;
      return {
        title: segment.charAt(0).toUpperCase() + segment.slice(1),
        link,
      };
    }),
  ];

  return (
    <Motion>
      <div className="flex flex-col gap-4">
        <BreadCrumb links={shortLinks} />

        <Heading
          title="Laboratory"
          sub="Implementing interfaces and interactions."
        />
      </div>
    </Motion>
  );
};

export default LabTemplate;
