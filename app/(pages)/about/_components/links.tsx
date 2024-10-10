"use client";

import { CONTACTS } from "@/lib/constants/social-profiles";
import Link from "next/link";

const Links = () => {
  const filteredContacts = CONTACTS.filter(
    (contact) => !contact.href.startsWith("mailto:")
  );

  return (
    <>
      <div className="max-w-s flex gap-20  w-full lg:ml-auto xs:grid xs:grid-cols-2">
        <div className="self-start mb-10 xs:mb-0">
          <h2 className="font-semibold mb-3">Socials</h2>
          <ul className="space-y-2">
            {filteredContacts.map((link, index) => (
              <li key={index}>
                <Link
                  href={link.href}
                  target="blank"
                  className="text-zinc-400 hover:text-neutral-900 transition-colors font-medium cursor-alias"
                >
                  {link.text}
                </Link>
              </li>
            ))}
          </ul>
        </div>

        <div>
          <h2 className="font-semibold mb-3">Contact</h2>
          <ul className="space-y-2">
            <li>
              <a
                target="blank"
                href="mailto:samuelisah234@gmail.com"
                className="text-zinc-400 hover:text-neutral-900 transition-colors font-medium cursor-alias"
              >
                Email
              </a>
            </li>
          </ul>
        </div>
      </div>
    </>
  );
};

export default Links;
