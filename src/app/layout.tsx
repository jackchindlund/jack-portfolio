import type { Metadata } from "next";
import localFont from "next/font/local";
import { SiteHeader } from "@/components/layout/SiteHeader";
import { SiteFooter } from "@/components/layout/SiteFooter";
import { site } from "@/content/site";
import "./globals.css";
const sans = localFont({
  src: "../../public/fonts/geist-latin.woff2",
  variable: "--font-sans",
  weight: "100 900",
  display: "swap",
});
const serif = localFont({
  src: "../../public/fonts/source-serif-4-latin.woff2",
  variable: "--font-serif",
  weight: "200 900",
  display: "swap",
});
export const metadata: Metadata = {
  metadataBase: new URL(site.origin),
  title: { default: site.title, template: "%s | Jack Chindlund" },
  description: site.description,
  alternates: { canonical: "/" },
  openGraph: {
    type: "website",
    locale: "en_US",
    siteName: "Jack Chindlund",
    title: site.title,
    description: site.description,
    url: "/",
    images: [
      {
        url: "/images/share/home.png",
        width: 1200,
        height: 630,
        alt: "Jack Chindlund — Product marketing, sales enablement, AI workflows",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: site.title,
    description: site.description,
    images: ["/images/share/home.png"],
  },
  icons: { icon: [{ url: "/icon.svg", type: "image/svg+xml" }] },
};
export default function RootLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="en" className={sans.variable + " " + serif.variable}>
      <body>
        <a className="skip-link" href="#main">
          Skip to content
        </a>
        <SiteHeader />
        {children}
        <SiteFooter />
      </body>
    </html>
  );
}
