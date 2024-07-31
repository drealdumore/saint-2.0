import Link from "next/link"; // Import Link from Next.js

const AppNav = () => {
  return (
    <nav className="sticky mt-2 lg:top-0 lg:bottom-auto lg:border-t-transparent lg:border-l-transparent lg:border-r-transparent lg:border-b border border-zinc-200 lg:border-b-zinc-100 bg-white z-[51] top-auto bottom-8  w-full lg:max-w-none max-w-[90%] mx-auto rounded-full lg:rounded-none shadow-xl shadow-black/5 lg:shadow-none">
      <div className="w-full flex items-center justify-between max-w-screen-lx mx-auto md:px-10 min-[350px]:px-4 xs:px-3">
        <div>
          <Link href="/" className="flex flex-col">
            <p className="text-base saint font-semibold fancy">Saint</p>
            <p className="text-[13px] opacity-80 engineer group-hover:opacity-100 animate-pulse">
              Full-Stack Developer
            </p>
          </Link>
        </div>
        <div
          className="flex items-center md:gap-8 gap-2 justify-between md:justify-normal w-full md:w-auto lg:px-0 md:px-1.5 px-0"
          id="nav-links"
        >
          <Link
            href="/"
            className="text-zinc-400 hover:text-black py-4 transition-colors duration-150 font-medium md:w-auto w-full text-center text-sm xs:text-base"
          >
            Home
          </Link>
          <Link
            href="/about"
            className="text-zinc-400 hover:text-black py-4 transition-colors duration-150 font-medium md:w-auto w-full text-center text-sm xs:text-base"
          >
            About
          </Link>
          <Link
            href="/stack"
            className="text-zinc-400 hover:text-black py-4 transition-colors duration-150 font-medium md:w-auto w-full text-center text-sm xs:text-base"
          >
            Stack
          </Link>
          <Link
            href="https://docs.google.com/document/d/1Yiwj9xYJ1CzXda6izCjxJlhUkOnZLKU_2s5RAkptO2A/edit?usp=sharing"
            target="_blank"
            className="text-zinc-400 hover:text-black py-4 transition-colors duration-150 font-medium md:w-auto w-full text-center text-sm xs:text-base"
          >
            Resume
          </Link>
        </div>
      </div>
    </nav>
  );
};

export default AppNav;
