import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import AppFooter from "@/components/footer";
import AppNav from "@/components/nav";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Saint - Software Developer",
  description: "Fullstack Engineer with a passion for web development.",
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
      <body className={inter.className}>
        <AppNav />
        <div className="mx-auto lg:pt-8 lg:py-20 sm:mx-5 md:mx-10">

        {children}
        </div>
        <AppFooter />
      </body>
    </html>
  );
}
