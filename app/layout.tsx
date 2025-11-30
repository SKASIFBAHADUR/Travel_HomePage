import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const viewport = {
  width: 'device-width',
  initialScale: 1,
  maximumScale: 1,
};

export const metadata = {
  metadataBase: new URL('https://getsetgoholidays.com'),
  title: "GetSetGo Holidays – Best Tour Packages for Dubai, Thailand & More",
  description: "Discover amazing tour packages to Dubai, Thailand, Japan, and India with GetSetGo Holidays. Expert travel planning, best prices, and unforgettable experiences await.",
  openGraph: {
    title: "GetSetGo Holidays – Dubai, Thailand & International Tour Packages",
    description: "Plan your dream vacation with GetSetGo Holidays. Premium tours to Dubai, Thailand, Japan, Singapore, and Indian destinations.",
    url: "https://getsetgoholidays.com",
    siteName: "GetSetGo Holidays",
    images: [
      {
        url: "/images/dubai.png",
        width: 1200,
        height: 630,
        alt: "GetSetGo Holidays - Travel the World",
      },
    ],
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "GetSetGo Holidays – Best Tour Packages",
    description: "Discover amazing tour packages to Dubai, Thailand, Japan & more with GetSetGo Holidays.",
    images: ["/images/dubai.png"],
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        {children}
      </body>
    </html>
  );
}
