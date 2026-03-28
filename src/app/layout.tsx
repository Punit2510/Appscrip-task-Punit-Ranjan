import type { Metadata } from "next";
import localFont from "next/font/local";
import "./globals.css";
import Header from "@/components/Header/Header";
import Footer from "@/components/Footer/Footer";

const geistSans = localFont({
  src: "./fonts/GeistVF.woff",
  variable: "--font-geist-sans",
  weight: "100 900",
});
const geistMono = localFont({
  src: "./fonts/GeistMonoVF.woff",
  variable: "--font-geist-mono",
  weight: "100 900",
});

export const metadata: Metadata = {
  title: {
    template: "%s | Appscrip Task",
    default: "mettā muse | Premium Product Collection"
  },
  description: "Explore our dynamic premium collection of products. Senior Appscrip assignment built with Next.js App Router, SSR Data Fetching, and CSS Modules.",
  keywords: ["Appscrip", "E-commerce", "Mock Store", "React", "Next.js", "Server-Side Rendering", "CSS Modules"],
  authors: [{ name: "Daksh Arya", url: "https://github.com/daksharya" }],
  openGraph: {
    title: "mettā muse | Appscrip E-commerce Demo",
    description: "High-fidelity responsive Product Listing Page evaluated for the Appscrip Frontend Role.",
    url: "https://appscrip-task-daksh.vercel.app",
    siteName: "mettā muse",
    type: "website",
    locale: "en_US"
  },
  twitter: {
    card: "summary_large_image",
    title: "mettā muse Product Listing",
    description: "Explore our dynamic premium collection of products.",
    creator: "@daksharya",
  },
  robots: {
    index: true,
    follow: true,
  }
};

export const viewport = {
  themeColor: "#ffffff",
  width: "device-width",
  initialScale: 1,
  maximumScale: 1,
  userScalable: false,
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${geistSans.variable} ${geistMono.variable}`}>
        <Header />
        <main className="main-content">
          {children}
        </main>
        <Footer />
      </body>
    </html>
  );
}
