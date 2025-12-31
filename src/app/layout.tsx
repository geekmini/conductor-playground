import type { Metadata } from "next";
import { Syne, Outfit } from "next/font/google";
import "./globals.css";
import { ToastProvider } from "@/components/Toast";

const syne = Syne({
  variable: "--font-syne",
  subsets: ["latin"],
  weight: ["600", "700"],
  display: "swap",
});

const outfit = Outfit({
  variable: "--font-outfit",
  subsets: ["latin"],
  weight: ["400", "500"],
  display: "swap",
});

const siteUrl = process.env.NEXT_PUBLIC_SITE_URL || "https://tron.ai";

export const metadata: Metadata = {
  metadataBase: new URL(siteUrl),
  title: {
    default: "Tron.ai | Creative Tech Agency",
    template: "%s | Tron.ai",
  },
  description:
    "We craft digital realities. A creative tech agency building immersive experiences that blur the line between imagination and reality. Specializing in web development, digital product design, and creative technology.",
  keywords: [
    "creative agency",
    "tech agency",
    "web development",
    "digital product design",
    "UX/UI design",
    "React",
    "Next.js",
    "WebGL",
    "AR/VR",
    "brand identity",
    "immersive experiences",
  ],
  authors: [{ name: "Tron.ai" }],
  creator: "Tron.ai",
  publisher: "Tron.ai",
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
    url: siteUrl,
    siteName: "Tron.ai",
    title: "Tron.ai | Creative Tech Agency",
    description:
      "We craft digital realities. A creative tech agency building immersive experiences that blur the line between imagination and reality.",
    images: [
      {
        url: "/og-image.png",
        width: 1200,
        height: 630,
        alt: "Tron.ai - Creative Tech Agency",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    site: "@tronai",
    creator: "@tronai",
    title: "Tron.ai | Creative Tech Agency",
    description:
      "We craft digital realities. A creative tech agency building immersive experiences.",
    images: ["/og-image.png"],
  },
  alternates: {
    canonical: siteUrl,
  },
  icons: {
    icon: "/favicon.ico",
    apple: "/apple-touch-icon.png",
  },
  manifest: "/site.webmanifest",
  verification: {
    google: "your-google-verification-code",
  },
};

// JSON-LD Structured Data
const jsonLd = {
  "@context": "https://schema.org",
  "@type": "Organization",
  name: "Tron.ai",
  description:
    "A creative tech agency building immersive digital experiences that blur the line between imagination and reality.",
  url: siteUrl,
  logo: `${siteUrl}/logo.png`,
  foundingDate: "2018",
  sameAs: [
    "https://twitter.com/tronai",
    "https://linkedin.com/company/tronai",
    "https://dribbble.com/tronai",
    "https://instagram.com/tronai",
  ],
  contactPoint: {
    "@type": "ContactPoint",
    contactType: "customer service",
    availableLanguage: ["English"],
  },
  aggregateRating: {
    "@type": "AggregateRating",
    ratingValue: "4.9",
    reviewCount: "150",
  },
  numberOfEmployees: {
    "@type": "QuantitativeValue",
    value: "50+",
  },
  knowsAbout: [
    "Web Development",
    "Digital Product Design",
    "Creative Technology",
    "Brand Identity",
    "AR/VR Experiences",
  ],
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="dark">
      <head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link
          rel="preconnect"
          href="https://fonts.gstatic.com"
          crossOrigin="anonymous"
        />
      </head>
      <body className={`${syne.variable} ${outfit.variable} antialiased`}>
        <ToastProvider>
          {children}
        </ToastProvider>
      </body>
    </html>
  );
}
