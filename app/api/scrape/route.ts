import axios from "axios";
import { NextRequest, NextResponse } from "next/server";
import * as cheerio from "cheerio";
import { isValidUrl } from "@/utils/helpers";

export async function GET(request: NextRequest) {
  const { searchParams } = new URL(request.url);
  const url = searchParams.get("url");

  if (!url || !isValidUrl(url)) {
    return NextResponse.json(
      { error: "Invalid URL format. Please provide a valid URL." },
      { status: 400 }
    );
  }

  try {
    // Fetch the content from the provided URL
    const response = await fetch(url);
    const html = await response.text();

    console.log("Fetch the HTML content of the URL");
    const { data } = await axios.get(url);

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
      { title, description, ogImage, url },
      { status: 200 }
    );
  } catch (error) {
    return NextResponse.json(
      { error: "Failed to fetch the URL." },
      { status: 500 }
    );
  }
}
