import type { Metadata } from "next";
import { Inter } from "next/font/google";
import localFont from "next/font/local";

import "./globals.css";
import AppFooter from "@/components/footer";
import AppNav from "@/components/nav";

const inter = Inter({ subsets: ["latin"] });


const calSans = localFont({
  src: ".././public/fonts/CalSans-SemiBold.woff2",
  variable: "--font-calSans",
});

const Moranga = localFont({
  src: ".././public/fonts/moranga-bold.otf",
  variable: "--font-moranga",
});

const BDOG = localFont({
  src: ".././public/fonts/BDOGrotesk-VF.woff2",
  variable: "--font-bdog",
});

export const metadata: Metadata = {
  title: "Saint - Full-Stack Developer",
  description: "Fullstack Engineer with a passion for web development.",
  // icon: '/avatars/avatar-smile.png',
  keywords:
    "Angular, JavaScript, TypeScript, Web Development, Frontend, Developer",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${calSans.variable} ${Moranga.variable} ${BDOG.variable}  ${inter.className}`}>
        <AppNav />
        <div className="mx-auto my-7 lg:pt-8 lg:py-20 sm:mx-5 md:mx-10">

        {children}
        </div>
        <AppFooter />
      </body>
    </html>
  );
}
