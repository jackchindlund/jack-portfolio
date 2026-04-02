import type { Metadata } from "next";
import { Geist } from "next/font/google";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Jack Chindlund — Marketing",
  description:
    "Marketing candidate focused on consumer insight, brand strategy, and product thinking for consumer brands.",
  openGraph: {
    title: "Jack Chindlund — Marketing",
    description:
      "Consumer insight, brand strategy, and go-to-market thinking for consumer brands.",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={`${geistSans.variable} scroll-smooth`}>
      <body className={`${geistSans.className} min-h-full antialiased`}>
        {children}
      </body>
    </html>
  );
}
