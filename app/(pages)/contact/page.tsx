import Contact from "./template";
import { sharedMetadata } from "@/lib/constants/shared-meta";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: `Contact me`,
};

const page = () => {
  return (
    <>
      <Contact />
    </>
  );
};

export default page;
