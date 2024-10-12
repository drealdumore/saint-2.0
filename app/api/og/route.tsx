import { OpenGraphImage } from "@/components/og-image";
import { sharedMetadata } from "@/lib/constants/shared-meta";
import { getBoldFont, getRegularFont } from "@/utils/fonts";
import { ImageResponse } from "next/og";

type sizeType = {
  width: number;
  height: number;
};

export const alt = sharedMetadata.title;

export const size: sizeType = {
  width: sharedMetadata.ogImage.width,
  height: sharedMetadata.ogImage.height,
};

export const contentType = sharedMetadata.ogImage.type;

export async function GET() {
  const [regularFontData, boldFontData] = await Promise.all([
    getRegularFont(),
    getBoldFont(),
  ]);

  return new ImageResponse(
    (
      <OpenGraphImage
        title={sharedMetadata.name}
        description={sharedMetadata.og}
      />
    ),
    {
      width: size.width,
      height: size.height,
      fonts: [
        {
          name: "Geist Sans",
          data: regularFontData,
          style: "normal",
          weight: 400,
        },
        {
          name: "Geist Sans",
          data: boldFontData,
          style: "normal",
          weight: 500,
        },
      ],
    }
  );
}
