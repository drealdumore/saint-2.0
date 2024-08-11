import { NextRequest, NextResponse } from "next/server";
import axios from "axios";
// import cheerio from "cheerio";
import * as cheerio from "cheerio";

export async function GET(
  req: NextRequest
) {
  const welcome = "welcome to my bookmarks. my bookmarks contains website i have discovered over the years and my go to tool. its simply my curated collection";
  
  console.log("welcome: ", welcome);

  try {
    return NextResponse.json({ welcome }, { status: 200 });
  } catch (error) {
    return NextResponse.json(
      { error: "Failed to scrape the welcome" },
      { status: 500 }
    );
  }
}
