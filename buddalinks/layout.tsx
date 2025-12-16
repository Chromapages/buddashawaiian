import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Budda's Hawaiian Bakery & Grill | Authentic Hawaiian Cuisine",
  description: "Experience authentic Hawaiian flavors at Budda's Hawaiian Bakery & Grill. Order online, view our menu, and make reservations. Taste the Aloha spirit in every bite!",
  keywords: ["Hawaiian food", "bakery", "grill", "Hawaiian restaurant", "authentic Hawaiian cuisine", "Honolulu", "order online", "food delivery", "restaurant"],
  authors: [{ name: "Budda's Hawaiian Bakery & Grill" }],
  openGraph: {
    title: "Budda's Hawaiian Bakery & Grill",
    description: "Authentic Hawaiian Cuisine - Order Online or Visit Us Today!",
    type: "website",
    locale: "en_US",
    siteName: "Budda's Hawaiian Bakery & Grill",
  },
  twitter: {
    card: "summary_large_image",
    title: "Budda's Hawaiian Bakery & Grill",
    description: "Authentic Hawaiian Cuisine - Order Online or Visit Us Today!",
  },
  viewport: {
    width: "device-width",
    initialScale: 1,
    maximumScale: 5,
    userScalable: true,
  },
  themeColor: [
    { media: "(prefers-color-scheme: light)", color: "#0ea5e9" },
    { media: "(prefers-color-scheme: dark)", color: "#0f172a" },
  ],
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
  icons: {
    icon: "/logo.png",
    apple: "/logo.png",
  },
  manifest: "/manifest.json",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" dir="ltr">
      <head>
        <meta name="format-detection" content="telephone=yes" />
        <meta name="apple-mobile-web-app-capable" content="yes" />
        <meta name="apple-mobile-web-app-status-bar-style" content="default" />
        <meta name="apple-mobile-web-app-title" content="Budda's Hawaiian" />
      </head>
      <body className="antialiased" suppressHydrationWarning>
        {children}
      </body>
    </html>
  );
}
