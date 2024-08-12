import axios from "axios";
import { NextRequest, NextResponse } from "next/server";
import * as cheerio from "cheerio";
import { isValidUrl } from "@/utils/helpers";

// http://localhost:3000/api/scrape?url=http://localhost:3000

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
    // Fetch the HTML content of the provided URL using axios
    const { data } = await axios.get(url);

    // Load the HTML content into cheerio
    const $ = cheerio.load(data);

    // Extract the title
    const title = $("head title").text() || $("title").text();

    // Extract the meta description
    const description =
      $('meta[name="description"]').attr("content") ||
      $('meta[name="Description"]').attr("content") ||
      "";

    // Extract the og:image
    const ogImage = $('meta[property="og:image"]').attr("content") || "";

    // Extract the meta keywords
    const keywords = $('meta[name="keywords"]').attr("content") || "";

    // Extract the author
    const author =
      $('meta[name="author"]').attr("content") ||
      $('meta[name="Author"]').attr("content") ||
      "";

    // Extract additional open graph metadata (like og:title and og:description)
    const ogTitle = $('meta[property="og:title"]').attr("content") || title;
    const ogDescription =
      $('meta[property="og:description"]').attr("content") || description;

    // Extract social media links
    const socialMedia = {
      facebook: $('a[href*="facebook.com"]').attr("href"),
      twitter: $('a[href*="twitter.com"]').attr("href"),
      instagram: $('a[href*="instagram.com"]').attr("href"),
      linkedin: $('a[href*="linkedin.com"]').attr("href"),
      youtube: $('a[href*="youtube.com"]').attr("href"),
    };

    // Respond with the extracted information
    return NextResponse.json(
      {
        title,
        description,
        ogImage,
        keywords,
        author,
        ogTitle,
        ogDescription,
        socialMedia,
        url,
      },
      { status: 200 }
    );
  } catch (error: any) {
    console.error("Error fetching the URL:", error.message);
    return NextResponse.json(
      { error: "Failed to fetch the URL." },
      { status: 500 }
    );
  }
}
