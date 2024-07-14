import React from "react";
import Link from "next/link";

const AppFooter = () => {
  const links = [
    { href: "/", text: "Home" },
    { href: "/stack", text: "Stack" },
    { href: "/about", text: "About me" },
  ];

  const contact = [
    { href: "mailto:samuelisah234@gmail.com", text: "Email" },
    { href: "https://www.linkedin.com/in/isah-samuel/", text: "LinkedIn" },
    { href: "https://twitter.com/drealdumore", text: "x.com" },
    { href: "https://github.com/drealdumore", text: "GitHub" },
  ];

  return (
    <footer className="py-7 border-t border-t-zinc-100 dark:border-t-zinc-900">
      <div className="max-w-screen-lx mx-auto md:px-10 px-6 grid lg:grid-cols-5 gap-8">
        <div className="lg:col-span-3 xs:col-span-2 max-w-md">
          <h3 className="font-semibold mb-2">Saint's personal site</h3>
        </div>
        <div className="footer-items">
          <div className="xl:place-self-end lg:mr-6">
            <h4 className="font-semibold mb-3">Pages</h4>
            <ul className="space-y-2">
              {links.map((link, index) => (
                <li key={index}>
                  <Link
                    href={link.href}
                    className="text-zinc-400 link transition-colors font-medium hover:text-zinc-600"
                  >
                    {link.text}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
          <div className="xl:place-self-end">
            <h4 className="font-semibold mb-3">Connect</h4>
            <ul className="space-y-2">
              {contact.map((link, index) => (
                <li key={index}>
                  <Link
                    href={link.href}
                    className="text-zinc-400 hover:text-zinc-600 transition-colors font-medium cursor-alias"
                  >
                    {link.text}
                  </Link>
                </li>
              ))}
              {/* <li>
                <a
                  className="text-zinc-400 hover:text-zinc-600 transition-colors font-medium cursor-alias"
                  href="https://twitter.com/drealdumore"
                >
                  x.com
                </a>
              </li> */}
            </ul>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default AppFooter;
