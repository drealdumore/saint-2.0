import About from "./template";
import { sharedMetadata } from "@/lib/shared-meta";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: `About me - ${sharedMetadata.title}`,
};

const page = () => {
  return (
    <>
      <About />
    </>
  );
};

export default page;
