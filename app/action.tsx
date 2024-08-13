"use server";

import { BookmarkCard, BookmarkType } from "@/components/cards/bookmark-card";
import { BOOKMARKS } from "@/lib/constants/bookmarks";
import { scrapeUrl } from "@/utils/scrape";

export const fetchBookmarks = async (page: number) => {
  const bookmarks = BOOKMARKS();
  const results: any[] = [];

  for (const bookmark of bookmarks.slice(0, 10)) {
    const { data, error } = await scrapeUrl(bookmark.url);
    if (data) {
      const response = data;
      results.push(data);
      console.log(results);
    } else {
      console.error(error);
    }
  }

  //   const response = await fetch(
  //     `https://shikimori.one/api/animes?page=${page}&limit=8&order=popularity`
  //   );

  //   useEffect(() => {
  //     const fetchBookmarks = async () => {
  //       setLoading(true);
  //       setError("");

  //       setBookmarkData(results);
  //       setLoading(false);
  //     };

  //     fetchBookmarks();
  //   }, []);

  const data = results;
  //   const data = await response.json();

  return data.map((item: BookmarkType, index: number) => (
    <BookmarkCard key={index} data={item} index={index} />
  ));
};
