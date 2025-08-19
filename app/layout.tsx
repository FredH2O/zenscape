import type { Metadata } from "next";
import { Noto_Sans_JP } from "next/font/google";
import "./globals.css";
import AnnouncementBar from "@/components/AnnouncementBar/AnnouncementBar";
import StickyHeader from "@/components/Navigation/StickyHeader/StickyHeader";
import Footer from "@/components/Footer/Footer";
import { Analytics } from "@vercel/analytics/next";

const notoSans = Noto_Sans_JP({
  variable: "--font-noto-sans-jp",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  metadataBase: new URL("https://zenscape-rho.vercel.app/"), // <-- set this to your live URL
  title: {
    default: "Zenscape",
    template: "%s | Zenscape",
  },
  description:
    "Step into serenity — explore the beauty of Japanese gardens with Zenscape.",
  icons: {
    icon: [
      { url: "/favicon-16x16.png", sizes: "16x16", type: "image/png" },
      { url: "/favicon-32x32.png", sizes: "32x32", type: "image/png" },
      { url: "/favicon.ico" },
      { url: "/apple-touch-icon.png", sizes: "180x180", type: "image/png" },
    ],
  },
  openGraph: {
    title: "Zenscape",
    description:
      "Step into serenity — explore the beauty of Japanese gardens with Zenscape.",
    url: "/",
    siteName: "Zenscape",
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary",
    title: "Zenscape",
    description:
      "Step into serenity — explore the beauty of Japanese gardens with Zenscape.",
  },
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

        <Analytics />
      </body>
    </html>
  );
}
