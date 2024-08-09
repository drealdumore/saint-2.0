"use client";

import React from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { contacts } from "@/lib/social-profiles";

const AppFooter = () => {
  const pathName = usePathname();
  const links = [
    { href: "/", text: "Home" },
    { href: "/about", text: "About" },
    { href: "/stack", text: "Stack" },
    { href: "/bookmarks", text: "Bookmarks" },
  ];

  return (
    <footer className="py-7 border-t  border-t-zinc-100">
      <div className="max-w-screen-lx mx-auto md:px-10 px-6 grid lg:grid-cols-6 gap-8">
        <div className="lg:col-span-3 xs:col-span-2 max-w-md">
          <h3 className="font-semibold mb-2">Saint's personal site</h3>
        </div>
        <div className="footer-items">
          <div className="xl:place-self-end">
            <h4 className="font-semibold mb-3">Pages</h4>
            <ul className="space-y-2 w-max">
              {links.map((link, index) => (
                <li key={index}>
                  <Link href={link.href}>
                    {pathName === link.href && <span>- </span>}
                    <span
                      className={`link transition-colors font-light hover:text-neutral-900 hover:cursor-alias ${
                        pathName === link.href
                          ? "underline underline-offset-2 text-neutral-900 font-medium"
                          : "text-zinc-400"
                      }`}
                    >
                      {link.text}
                    </span>
                  </Link>
                </li>
              ))}
            </ul>
          </div>
          <div className="xl:place-self-end">
            <h4 className="font-semibold mb-3">Connect</h4>
            <ul className="space-y-2">
              {contacts.map((link, index) => (
                <li key={index}>
                  <Link
                    href={link.href}
                    className="text-zinc-400 hover:text-neutral-900 hover:underline underline-offset-1 transition-colors font-light cursor-alias"
                  >
                    {link.text}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default AppFooter;
