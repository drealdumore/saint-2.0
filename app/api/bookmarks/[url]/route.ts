import { NextRequest, NextResponse } from "next/server";
import axios from "axios";
// import cheerio from "cheerio";
import * as cheerio from "cheerio";

export async function GET(
  req: NextRequest,
  { params }: { params: { url: string } }
) {
  const { url } = params;

  if (!params.url) {
    return new NextResponse("url is required", { status: 400 });
  }
  console.log("url: ", url);

  try {
    return NextResponse.json({ url }, { status: 200 });
  } catch (error) {
    return NextResponse.json(
      { error: "Failed to scrape the URL" },
      { status: 500 }
    );
  }
}
