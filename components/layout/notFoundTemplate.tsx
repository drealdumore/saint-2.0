"use client";

import Link from "next/link";
import React from "react";
import Motion from "../design/y-motion";

const NotFoundTemplate = () => {
  const links = [
    { href: "/", text: "Home" },
    { href: "/about", text: "About" },
    { href: "/stack", text: "Stack" },
    { href: "/bookmarks", text: "Bookmarks" },
  ];
  return (
    <>
      <Motion>
        <div className="mx-auto">
          <div className="flex flex-col gap-4">
            <div className="flex flex-col gap-2">
              <h2 className="font-cal">404—Not found</h2>
              <p>You just hit a route that doesn’t exist.</p>
              <p>
                Another thing not found anymore is HTML comments. Websites are
                smaller, at what cost? A discarded thought, an unfinished
                design, an alternate phrasing, a note to self.
              </p>
            </div>
            <ul className="mt-3 flex flex-col gap-2">
              {links.map((link, index) => (
                <li key={index}>
                  <Link
                    prefetch={true}
                    className="link text-gray-400 hover:text-neutral-800 transition-all"
                    href={link.href}
                  >
                    {link.text}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </Motion>
    </>
  );
};

export default NotFoundTemplate;
