import React from "react";
import BookmarkTemplate from "./template";
import { sharedMetadata } from "@/lib/constants/shared-meta";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: `My Bookmarks`,
  description:
    "My go-to list of tools & software that I enjoy using and have helped me level up my skills.",
};

const page = () => {
  return (
    <>
      <BookmarkTemplate />
    </>
  );
};

export default page;
