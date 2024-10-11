import { OpenGraphImage } from "@/components/og-image";
import { sharedMetadata } from "@/lib/constants/shared-meta";
import { ImageResponse } from "next/og";

export async function GET() {
  return new ImageResponse(
    (
      <OpenGraphImage
        title={sharedMetadata.name}
        description={sharedMetadata.og}
      />
    ),

    {
      width: 1200,
      height: 630,
    }
  );
}
