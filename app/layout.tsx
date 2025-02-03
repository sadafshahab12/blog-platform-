import type { Metadata } from "next";
import { Open_Sans } from "next/font/google";
import "./globals.css";
import Navbar from "./components/Navbar";
import { ClerkProvider } from "@clerk/nextjs";
import Footer from "./components/Footer";

const openSans = Open_Sans({
  weight: ["400", "700"],
  subsets: ["latin", "cyrillic"],
  style: ["normal"],
  display: "swap",
});

export const metadata: Metadata = {
  title: "PostHive Blog Platform",
  description:
    "PostHive – A dynamic blog platform where users can share, like, and comment on insightful tech and life blogs.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <ClerkProvider>
      <html lang="en">
        <head>
          <link rel="shortcut icon" href="/favicon.jpg" type="image/jpeg" />
        </head>
        <body className={`${openSans.className} antialiased`}>
          <Navbar />
          {children}
          <Footer />
        </body>
      </html>
    </ClerkProvider>
  );
}
