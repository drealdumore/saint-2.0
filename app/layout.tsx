import type { Metadata } from "next";

import localFont from "next/font/local";
import { GeistSans } from "geist/font/sans";
import { GeistMono } from "geist/font/mono";

import "./globals.css";
import AppFooter from "@/components/layout/footer";
import AppNav from "@/components/layout/nav";
import { sharedMetadata } from "@/lib/shared-meta";
import { SOCIALS } from "@/lib/social-profiles";

const calSans = localFont({
  src: ".././public/fonts/CalSans-SemiBold.woff2",
  variable: "--font-calSans",
});

const Moranga = localFont({
  src: ".././public/fonts/moranga-bold.otf",
  variable: "--font-moranga",
});

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body
        suppressHydrationWarning
        className={`${GeistSans.variable} ${GeistMono.variable} ${calSans.variable} ${Moranga.variable} font-sans`}
      >
        <AppNav />
        <main className=" flex min-h-screen flex-col gap-12  p-8 text-neutral-800 mx-auto my-7 lg:pt-8 lg:py-20  max-w-2xl">
          {/* max-w-2xl sm:mx-5 md:mx-10"> */}
          {children}
        </main>
        <AppFooter />
      </body>
    </html>
  );
}

export const metadata: Metadata = {
  metadataBase: new URL("https://drealdumore.vercel.app/"),
  robots: {
    index: true,
    follow: true,
  },
  title: {
    default: sharedMetadata.title,
    template: `%s — ${sharedMetadata.title}`,
  },
  description: sharedMetadata.description,
  keywords: ["Samuel Isah", "Samuel Isah", "angular saint", "drealdumore"],
  openGraph: {
    title: {
      default: sharedMetadata.title,
      template: `%s — ${sharedMetadata.title}`,
    },
    description: sharedMetadata.description,
    type: "website",
    url: "https://drealdumore.vercel.app/",
    siteName: sharedMetadata.title,
    locale: "en_IE",
  },
  alternates: {
    canonical: "/",
  },
  twitter: {
    card: "summary_large_image",
    site: `@${SOCIALS.twitter.username}`,
    creator: `@${SOCIALS.twitter.username}`,
  },
};

export const viewport = {
  themeColor: "white",
  colorScheme: "only light",
  width: "device-width",
  initialScale: 1,
};
