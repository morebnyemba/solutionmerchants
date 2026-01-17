import type { Metadata } from "next";
import "./globals.css";
import Header from "@/components/Header";
import Footer from "@/components/Footer";

export const metadata: Metadata = {
  title: "Solutions Merchant Investments - Wholesale, Retail & Business Solutions",
  description: "Leading broking company delivering reliable wholesale, retail, hardware supply, logistics, and multi-sector business solutions across Zimbabwe and international markets.",
  keywords: "wholesale Zimbabwe, hardware supply, commodity broking, logistics, supply chain management, real estate Zimbabwe, bulk trading, business solutions",
  authors: [{ name: "Solutions Merchant Investments" }],
  creator: "Solutions Merchant Investments",
  publisher: "Solutions Merchant Investments",
  robots: {
    index: true,
    follow: true,
  },
  icons: {
    icon: "/favicon.ico",
    apple: "/favicon-512.png",
  },
  openGraph: {
    title: "Solutions Merchant Investments - Wholesale, Retail & Business Solutions",
    description: "Trusted partner for wholesale, retail, hardware supply, logistics, and multi-sector business solutions across Zimbabwe and international markets",
    type: "website",
    url: "https://www.solutionsmerchants.co.zw",
    siteName: "Solutions Merchant Investments",
    images: [
      {
        url: "/smslog.png",
        width: 490,
        height: 112,
        alt: "Solutions Merchant Investments Logo",
      },
    ],
    locale: "en_US",
  },
  twitter: {
    card: "summary_large_image",
    title: "Solutions Merchant Investments",
    description: "Wholesale, retail, hardware supply, logistics, and business solutions",
    images: ["/smslog.png"],
  },
  alternates: {
    canonical: "https://www.solutionsmerchants.co.zw",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className="font-sans antialiased">
        <Header />
        <main className="min-h-screen">
          {children}
        </main>
        <Footer />
      </body>
    </html>
  );
}
