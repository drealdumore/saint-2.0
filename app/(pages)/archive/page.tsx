import React from "react";
import Archive from "./template";
import { sharedMetadata } from "@/lib/constants/shared-meta";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: `My Archive`,
  description: "My collection of smaller projects, MVPs, and creative ideas.",
};

const page = () => {
  return (
    <>
      <Archive />
    </>
  );
};

export default page;
