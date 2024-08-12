import Link from "next/link";
import React from "react";

interface BreadCrumbItem {
  title: string;
  link?: string;
}

interface BreadCrumbProps {
  links: BreadCrumbItem[];
}

const BreadCrumb: React.FC<BreadCrumbProps> = ({ links }) => {
  if (links.length <= 4) {
    return (
      <ol className="flex flex-wrap items-center gap-1.5 break-words text-sm text-muted-foreground sm:gap-2.5">
        {links.map((link, index) => (
          <React.Fragment key={index}>
            <li className="inline-flex items-center gap-1.5">
              {link.link ? (
                <Link
                  //   className="link transition-colors hover:text-neutral-900 hover:cursor-alias text-zinc-500"
                  className={`${
                    links.length <= 4 && index === links.length - 1
                      ? "transition-colors text-neutral-900 "
                      : "text-zinc-500 link transition-colors hover:cursor-alias"
                  }`}
                  href={link.link}
                >
                  {link.title}
                </Link>
              ) : (
                <span className="link transition-colors hover:text-neutral-900 hover:cursor-alias text-zinc-500">
                  {link.title}
                </span>
              )}
            </li>
            {index < links.length - 1 && (
              <li
                role="presentation"
                aria-hidden="true"
                className="[&>svg]:size-3.5"
              >
                <Icon />
              </li>
            )}
          </React.Fragment>
        ))}
      </ol>
    );
  }

  return (
    <ol className="flex flex-wrap items-center gap-1.5 break-words text-sm text-muted-foreground sm:gap-2.5">
      <li className="inline-flex items-center gap-1.5">
        <Link
          className="link transition-colors hover:text-neutral-900 hover:cursor-alias text-zinc-500"
          href={links[0].link!}
        >
          {links[0].title}
        </Link>
      </li>
      <li role="presentation" aria-hidden="true" className="[&>svg]:size-3.5">
        <Icon />
      </li>
      <li className="inline-flex items-center gap-1.5">
        <span className="font-normal text-foreground">
          <Threedots />
        </span>
      </li>
      <li role="presentation" aria-hidden="true" className="[&>svg]:size-3.5">
        <Icon />
      </li>
      {links.length > 3 && (
        <>
          <li className="inline-flex items-center gap-1.5">
            {links[Math.floor(links.length / 2)].link ? (
              <Link
                className="link transition-colors hover:text-neutral-900 hover:cursor-alias text-zinc-500"
                href={links[Math.floor(links.length / 2)].link!}
              >
                {links[Math.floor(links.length / 2)].title}
              </Link>
            ) : (
              <span className="font-normal text-foreground">
                {links[Math.floor(links.length / 2)].title}
              </span>
            )}
          </li>
          <li
            role="presentation"
            aria-hidden="true"
            className="[&>svg]:size-3.5"
          >
            <Icon />
          </li>
        </>
      )}
      <li className="inline-flex items-center gap-1.5">
        {links[links.length - 1].link ? (
          <Link
            className="link transition-colors text-neutral-900 "
            href={links[links.length - 1].link!}
          >
            {links[links.length - 1].title}
          </Link>
        ) : (
          <span className="transition-colors text-neutral-900">
            {links[links.length - 1].title}
          </span>
        )}
      </li>
    </ol>
  );
};
export default BreadCrumb;

const Icon = () => (
  <svg
    width="15"
    height="15"
    viewBox="0 0 15 15"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
  >
    <path
      d="M6.1584 3.13508C6.35985 2.94621 6.67627 2.95642 6.86514 3.15788L10.6151 7.15788C10.7954 7.3502 10.7954 7.64949 10.6151 7.84182L6.86514 11.8418C6.67627 12.0433 6.35985 12.0535 6.1584 11.8646C5.95694 11.6757 5.94673 11.3593 6.1356 11.1579L9.565 7.49985L6.1356 3.84182C5.94673 3.64036 5.95694 3.32394 6.1584 3.13508Z"
      fill="currentColor"
      fillRule="evenodd"
      clipRule="evenodd"
    ></path>
  </svg>
);

const Threedots = () => (
  <svg
    width="15"
    height="15"
    viewBox="0 0 15 15"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    className="h-4 w-4"
  >
    <path
      d="M3.625 7.5C3.625 8.12132 3.12132 8.625 2.5 8.625C1.87868 8.625 1.375 8.12132 1.375 7.5C1.375 6.87868 1.87868 6.375 2.5 6.375C3.12132 6.375 3.625 6.87868 3.625 7.5ZM8.625 7.5C8.625 8.12132 8.12132 8.625 7.5 8.625C6.87868 8.625 6.375 8.12132 6.375 7.5C6.375 6.87868 6.87868 6.375 7.5 6.375C8.12132 6.375 8.625 6.87868 8.625 7.5ZM12.5 8.625C13.1213 8.625 13.625 8.12132 13.625 7.5C13.625 6.87868 13.1213 6.375 12.5 6.375C11.8787 6.375 11.375 6.87868 11.375 7.5C11.375 8.12132 11.8787 8.625 12.5 8.625Z"
      fill="currentColor"
      fill-rule="evenodd"
      clip-rule="evenodd"
    ></path>
  </svg>
);
