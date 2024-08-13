import { BOOKMARKS } from "@/lib/constants/bookmarks";

export const scrapeAllBookmarks = async () => {
  const baseUrl = process.env.NEXT_PUBLIC_BASE_URL || "http://localhost:3000";
  const bookmarks = BOOKMARKS();

  const results: any[] = [];

  for (const bookmark of bookmarks.slice(0, 10)) {
    const response = await fetch(`${baseUrl}/api/scrape?url=${bookmark.url}`);
    const data = await response.json();

    if (response.ok) {
      results.push(data);
    } else {
      console.error(`Error scraping ${bookmark.url}:`, data.error);
    }
  }

  return results;
};

export const scrapeUrl = async (url: string) => {
  try {
    const response = await fetch(`/api/scrape?url=${url}`);
    const result = await response.json();

    if (response.ok) {
      return { data: result, error: null };
    } else {
      return { data: null, error: result.error };
    }
  } catch (err) {
    return { data: null, error: "An error occurred while fetching data" };
  }
};
