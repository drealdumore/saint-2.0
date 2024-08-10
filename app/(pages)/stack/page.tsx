import { sharedMetadata } from "@/lib/shared-meta";
import { Metadata } from "next";
import Template from "./template";

export const metadata: Metadata = {
  title: `Stack | ${sharedMetadata.title}`,
};

const Stack = () => {
  return <Template />;
};

export default Stack;
