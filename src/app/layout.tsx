import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";

export const metadata: Metadata = {
  title: "Tekuvo Technologies ",
  description: "Tekuvo Technologies is a leading web, app, and software development company in Kerala.",
  icons: {
    icon: "/logo.png", // or PNG: "/icon.png"
    
  },
  openGraph: {
    title: "Tekuvo Technologies",
    description: "Web, App, and Software Development Company in Kerala, India.",
    url: "https://www.tekuvo.in/", // replace with your domain
    siteName: "Tekuvo Technologies",
    // images: [
    //   {
    //     url: "/og-image.jpg", // add your OG image path here
    //     width: 1200, 
    //     height: 630,
    //     alt: "Tekuvo Technologies Preview",
    //   },
    // ],
    locale: "en_US",
    type: "website",
  },
};

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});


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
