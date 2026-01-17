import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Contact Us - Solutions Merchant Investments",
  description: "Get in touch with Solutions Merchant Investments. Contact us via phone, email, or fill out our contact form for business inquiries.",
  keywords: "contact Solutions Merchant Investments, get in touch, business inquiries, phone number, email",
  openGraph: {
    title: "Contact Us - Solutions Merchant Investments",
    description: "Reach out to Solutions Merchant Investments for wholesale, retail, and business solutions",
    type: "website",
    url: "https://www.solutionsmerchants.co.zw/contact",
    images: [
      {
        url: "/smslog.png",
        width: 490,
        height: 112,
        alt: "Solutions Merchant Investments Logo",
      },
    ],
  },
  twitter: {
    card: "summary",
    title: "Contact Solutions Merchant Investments",
    description: "Get in touch with our team for business inquiries",
  },
};

export default function ContactLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return children;
}
