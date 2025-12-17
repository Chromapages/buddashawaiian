import type { Metadata } from "next";
import { DM_Sans, Lilita_One, Poppins } from "next/font/google"; // Switched Inter_Tight to DM_Sans for body text

import "./globals.css";
import { client } from "@/sanity/lib/client";
import { SITE_SETTINGS_QUERY } from "@/sanity/lib/queries";
import { urlFor } from "@/sanity/lib/image";
import { ConditionalHeader } from "@/components/ConditionalHeader";

const dmSans = DM_Sans({
  variable: "--font-dm-sans",
  weight: ["400", "500"], // Regular (body), Medium (buttons/nav)
  subsets: ["latin"],
});

const lilitaOne = Lilita_One({
  variable: "--font-lilita",
  weight: "400",
  subsets: ["latin"],
});

const poppins = Poppins({
  variable: "--font-poppins",
  weight: ["500", "600"], // Medium (sub-headers/prices), SemiBold (H1/H2/Hero)
  subsets: ["latin"],
});

export async function generateMetadata(): Promise<Metadata> {
  try {
    const siteSettings = await client.fetch(SITE_SETTINGS_QUERY);

    const title = siteSettings?.title || "Buddas Hawaiian Bakery & Grill";
    const description = siteSettings?.tagline || "Bring Aloha to the Table.";

    const icons = siteSettings?.favicon
      ? { icon: urlFor(siteSettings.favicon).width(32).height(32).url() }
      : undefined;

    return {
      title,
      description,
      icons,
    };
  } catch (error) {
    console.error("Failed to fetch metadata", error);
    return {
      title: "Buddas Hawaiian Bakery & Grill",
      description: "Bring Aloha to the Table.",
    };
  }
}

export const revalidate = 60; // Revalidate every 60 seconds

export default async function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  let logoUrl: string | undefined;
  let orderUrl: string | undefined;
  let ctaStyle: string | undefined;

  try {
    const siteSettings = await client.fetch(SITE_SETTINGS_QUERY);
    // Use direct asset URL since we're expanding asset-> in the query
    logoUrl = siteSettings?.logo?.asset?.url || undefined;
    console.log('[DEBUG] Logo URL from Sanity:', logoUrl);
    orderUrl = siteSettings?.defaultOrderingUrl;
    ctaStyle = siteSettings?.headerCtaStyle;
  } catch (error) {
    console.error("Failed to fetch site settings for navigation", error);
  }

  return (
    <html lang="en" suppressHydrationWarning>
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <link href="https://fonts.googleapis.com/css2?family=Google+Sans+Flex:opsz,wght@6..144,1..1000&display=swap" rel="stylesheet" />
      </head>
      <body
        className={`${dmSans.variable} ${lilitaOne.variable} ${poppins.variable} antialiased bg-warm-sand text-deep-ocean`}
        suppressHydrationWarning
      >
        <ConditionalHeader logoUrl={logoUrl} orderUrl={orderUrl} ctaStyle={ctaStyle} />
        {children}
      </body>
    </html>
  );
}
