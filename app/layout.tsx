import type { Metadata } from "next";

import localFont from "next/font/local";
import { GeistSans } from "geist/font/sans";
import { GeistMono } from "geist/font/mono";

import "./globals.css";
import AppFooter from "@/components/layout/footer";
import { sharedMetadata } from "@/lib/shared-meta";
import { SOCIALS } from "@/lib/social-profiles";
import Prefetch from "@/components/others/prefetch";
import AppNav from "@/components/layout/nav";
// import AppNav from "@/components/layout/test-nav";

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
        className={`${GeistSans.variable} ${GeistMono.variable} ${calSans.variable} ${Moranga.variable}`}
      >
        <Prefetch />
        <div className="relative font-sans max-w-2xl mx-auto selection:bg-neutral-800 selection:text-white">
          <AppNav />

          <main className="px-3 sm:px-4 md:p-8 min-h-screen text-neutral-800  my-7 lg:pt-8 lg:py-20">
            {children}
          </main>

          <AppFooter />
        </div>
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
