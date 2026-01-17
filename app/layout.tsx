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
      <head>
        <script
          dangerouslySetInnerHTML={{
            __html: `
              var Tawk_API=Tawk_API||{}, Tawk_LoadStart=new Date();
              (function(){
                var s1=document.createElement("script"),s0=document.getElementsByTagName("script")[0];
                s1.async=true;
                s1.src='https://embed.tawk.to/6014157cc31c9117cb73d73a/1et777skm';
                s1.charset='UTF-8';
                s1.setAttribute('crossorigin','*');
                s0.parentNode.insertBefore(s1,s0);
              })();
              
              // Hide the widget by default - only show when explicitly opened
              Tawk_API.onLoad = function(){
                Tawk_API.hideWidget();
              };
            `,
          }}
        />
      </head>
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
