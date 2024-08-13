"use client";

import React, { useEffect, useState } from "react";
import { BookmarkCard } from "@/components/cards/bookmark-card";
import { BOOKMARKS } from "@/lib/constants/bookmarks";
import { scrapeUrl } from "@/utils/scrape";
import { ButtonLoader, PageSpinner } from "@/components/loaders";

const AllBookmarks = () => {
  const [error, setError] = useState("");
  const [loading, setLoading] = useState(false);
  const [bookmarkData, setBookmarkData] = useState<any[]>([]);

  useEffect(() => {
    const fetchBookmarks = async () => {
      setLoading(true);
      setError("");
      const bookmarks = BOOKMARKS();
      const results: any[] = [];

      for (const bookmark of bookmarks.slice(0, 10)) {
        const { data, error } = await scrapeUrl(bookmark.url);
        if (data) {
          results.push(data);
          console.log(results);
        } else {
          console.error(error);
        }
      }

      setBookmarkData(results);
      setLoading(false);
    };

    fetchBookmarks();
  }, []);

  return (
    <>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
        {bookmarkData.map((data, index) => (
          <BookmarkCard key={index} data={data} index={index} />
        ))}
      </div>
      {loading && (
        <div className="w-full flex items-center justify-center">
          <PageSpinner />
        </div>
      )}

      {error && <p>{error}</p>}
    </>
  );
};

export default AllBookmarks;
