import { NextRequest, NextResponse } from "next/server";
import axios from "axios";
// import cheerio from "cheerio";
import * as cheerio from "cheerio";

export async function GET(
  req: NextRequest,
  { params }: { params: { url: string } }
) {
  const { url } = params;

  // TODO - FIX SO THAT PARAMS.URL ACCEPTS URL
  if (
    !url ||
    typeof url !== "string" ||
    (!url.startsWith("https://") &&
      !url.startsWith("http://") &&
      !url.includes("www."))
  ) {
    return NextResponse.json(
      {
        error:
          "Invalid URL. Please ensure the URL includes 'https://' or 'www.'",
      },
      { status: 400 }
    );
  }

  try {
    const decodedUrl = decodeURIComponent(url);
    // Fetch the HTML content of the URL
    console.log(decodedUrl);
    console.log("Fetch the HTML content of the URL");
    const { data } = await axios.get(decodedUrl);

    // Load the HTML content into cheerio
    console.log("Load the HTML content into cheerio");

    const $ = cheerio.load(data);

    // Extract the title
    console.log("Extract the title");

    const title = $("head title").text();

    // Extract the meta description
    console.log("Extract the meta description");

    const description =
      $('meta[name="description"]').attr("content") ||
      $('meta[name="Description"]').attr("content");

    // Extract the og:image
    console.log("Extract the og:image");

    const ogImage = $('meta[property="og:image"]').attr("content");

    // Respond with the extracted information
    return NextResponse.json(
      { title, description, ogImage, url: decodedUrl },
      { status: 200 }
    );
  } catch (error) {
    console.log(error);

    return NextResponse.json(
      { error: "Failed to scrape the URL" },
      { status: 500 }
    );
  }
}
