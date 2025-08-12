import type { Metadata } from "next";
import { Noto_Sans_JP } from "next/font/google";
import "./globals.css";
import AnnouncementBar from "@/components/AnnouncementBar/AnnouncementBar";
import StickyHeader from "@/components/Navigation/StickyHeader/StickyHeader";
import Footer from "@/components/Footer/Footer";

const notoSans = Noto_Sans_JP({
  variable: "--font-noto-sans-jp",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Zenscape",
  description:
    "Zenscape is a japanese inspired website flexing the beauty of japanese gardens.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="scroll-smooth">
      <body className={`relative ${notoSans.variable} antialiased`}>
        <AnnouncementBar />
        <StickyHeader />

        <main className="">{children}</main>
        <Footer />
      </body>
    </html>
  );
}
