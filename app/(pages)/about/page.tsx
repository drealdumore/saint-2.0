import About from "./template";
import { sharedMetadata } from "@/lib/constants/shared-meta";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: `About me`,
};

const page = () => {
  return (
    <>
      <About />
    </>
  );
};

export default page;
