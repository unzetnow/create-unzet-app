import type { Metadata } from "next";
import { DM_Sans } from "next/font/google";
import "./globals.css";
import { ThemeProvider } from "@/providers/theme-provider";

const dmSans = DM_Sans({
  subsets: ["latin"],
  variable: "--font-dm-sans",
});

export const metadata: Metadata = {
  title: {
    default: "Create Unzet App",
    template: "%s | Create Unzet App",
  },
  description:
    "Create Unzet App makes building your website or app a breeze. With React, Next.js, ShadCN, and TailwindCSS baked in, it’s all about shipping faster.",
  /* SEO Basics
  metadataBase: new URL("https://example.com"),
  keywords: ["keyword1", "keyword2", "keyword3"],
  authors: [{ name: "Your Name" }],
  creator: "Your Name/Company",
  publisher: "Your Name/Company",

  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
  openGraph: {
    type: "website",
    locale: "en_US",
    url: "https://example.com",
    title: "Your Site Name",
    description: "Your site description goes here",
    siteName: "Your Site Name",
    images: [
      {
        url: "https://example.com/og-image.jpg",
        width: 1200,
        height: 630,
        alt: "Site preview image",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Your Site Name",
    description: "Your site description goes here",
    creator: "@yourhandle",
    images: ["https://example.com/og-image.jpg"],
  },
  */
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className={`${dmSans.variable} antialiased`}>
        <ThemeProvider
          attribute="class"
          defaultTheme="system"
          enableSystem
          disableTransitionOnChange
        >
          {children}
        </ThemeProvider>
      </body>
    </html>
  );
}
