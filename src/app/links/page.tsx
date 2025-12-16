import Image from "next/image";
import { Facebook, Instagram, Mail, ArrowUpRight } from "lucide-react";

import { client } from "@/sanity/lib/client";
import { BUDDALINKS_PAGE_QUERY } from "@/sanity/lib/queries";
import { urlFor } from "@/sanity/lib/image";

interface SocialLink {
  platform?: string;
  label?: string;
  url: string;
}

interface PrimaryLink {
  label: string;
  url: string;
  style?: "primary" | "gold" | "white";
}

interface FeatureTile {
  title: string;
  url?: string;
  image?: any;
  accent?: "gold" | "teal" | "orange" | string;
}

interface BuddalinksPageData {
  title?: string;
  logo?: any;
  heroImage?: any;
  headline?: string;
  socialLinks?: SocialLink[];
  primaryLinks?: PrimaryLink[];
  promo?: {
    title?: string;
    body?: string;
    ctaLabel?: string;
    ctaUrl?: string;
  };
  featureTiles?: FeatureTile[];
}

export const revalidate = 60;

// Simple custom TikTok-style icon (note-like glyph)
function TikTokIcon(props: React.SVGProps<SVGSVGElement>) {
  return (
    <svg
      viewBox="0 0 16 16"
      aria-hidden="true"
      role="img"
      {...props}
    >
      <path
        d="M9 0h1.98c.144.715.54 1.617 1.235 2.512C12.895 3.389 13.797 4 15 4v2c-1.753 0-3.07-.814-4-1.829V11a5 5 0 1 1-5-5v2a3 3 0 1 0 3 3z"
        fill="currentColor"
      />
    </svg>
  );
}

function getSocialIcon(platform?: string) {
  const key = platform?.toLowerCase();
  if (key === "facebook") return Facebook;
  if (key === "instagram") return Instagram;
  if (key === "tiktok") return TikTokIcon;
  if (key === "email") return Mail;
  return Mail;
}

function getPrimaryLinkClasses(style: PrimaryLink["style"]) {
  if (style === "gold") {
    return "bg-[#E9C559] text-gray-800";
  }
  if (style === "white") {
    return "bg-white text-[#1C5F56]";
  }
  // primary dark teal
  return "bg-[#1C5F56] text-white";
}

function getTileGradient(accent?: FeatureTile["accent"]) {
  if (accent === "teal") {
    return "from-buddas-teal to-[#1C5F56]";
  }
  if (accent === "orange") {
    return "from-buddas-orange to-buddas-gold";
  }
  // default gold
  return "from-buddas-gold to-buddas-orange";
}

export default async function BuddalinksPage() {
  const data = (await client.fetch(BUDDALINKS_PAGE_QUERY)) as BuddalinksPageData | null;

  const socialLinks = data?.socialLinks ?? [];
  const primaryLinks = data?.primaryLinks ?? [];
  const featureTiles = data?.featureTiles ?? [];
  const promo = data?.promo;

  const hasContent =
    socialLinks.length > 0 ||
    primaryLinks.length > 0 ||
    featureTiles.length > 0 ||
    !!promo;

  return (
    <main className="min-h-screen w-full bg-[#FAF2D8]" role="main">
      {/* Hero band */}
      <header className="relative h-48 overflow-hidden">
        {data?.heroImage ? (
          <>
            <Image
              src={urlFor(data.heroImage).width(1200).url()}
              alt={(data.heroImage as any)?.alt || "Buddas background"}
              fill
              priority
              sizes="100vw"
              className="object-cover"
              unoptimized
            />
            <div className="absolute inset-0 bg-black/40" />
          </>
        ) : (
          <div className="absolute inset-0 bg-gradient-to-br from-[#E9C559] via-[#54BFA5] to-[#F38D2D]">
            <div className="absolute inset-0 bg-black/40" />
          </div>
        )}
      </header>

      <div className="max-w-md mx-auto px-4 pb-8 space-y-5 -mt-16">
        {/* Logo + socials */}
        <section className="bg-white p-6 rounded-lg shadow-sm relative z-10 text-center">
          {data?.logo && (
            <div className="mb-4 flex justify-center">
              <div className="relative w-48 h-24">
                <Image
                  src={urlFor(data.logo).width(600).url()}
                  alt={(data.logo as any)?.alt || data?.title || "Buddas Hawaiian"}
                  fill
                  className="object-contain drop-shadow-lg"
                  sizes="192px"
                  unoptimized
                />
              </div>
            </div>
          )}
          {data?.headline && (
            <p className="text-base text-buddas-brown/70 mb-4">{data.headline}</p>
          )}

          {socialLinks.length > 0 && (
            <div className="space-y-1">
              <div className="flex justify-center gap-4">
                {socialLinks.map((social) => {
                  const Icon = getSocialIcon(social.platform);
                  return (
                    <a
                      key={`${social.platform}-${social.url}`}
                      href={social.url}
                      target="_blank"
                      rel="noopener noreferrer"
                      aria-label={social.label || social.platform}
                      className="flex h-10 w-10 items-center justify-center rounded-full bg-buddas-teal/10 text-buddas-teal hover:bg-buddas-teal/20 transition-colors"
                    >
                      <Icon className="h-5 w-5" aria-hidden="true" />
                    </a>
                  );
                })}
              </div>
              <p className="pt-1 text-xs leading-tight text-buddas-brown/70">
                Follow Buddas for daily specials &amp; events
              </p>
            </div>
          )}
        </section>

        {/* Primary CTAs */}
        {primaryLinks.length > 0 && (
          <section className="space-y-3" aria-label="Primary actions">
            {primaryLinks.map((link) => (
              <a
                key={link.label + link.url}
                href={link.url}
                target="_blank"
                rel="noopener noreferrer"
                className={`block w-full text-center py-4 px-5 text-base font-medium rounded-full shadow-sm hover:opacity-90 transition-opacity ${getPrimaryLinkClasses(
                  link.style
                )}`}
              >
                {link.label}
              </a>
            ))}
          </section>
        )}

        {/* Promo banner */}
        {promo && (promo.title || promo.body) && (
          <section className="bg-white p-5 rounded-2xl shadow-sm flex items-center justify-between gap-3">
            <div className="space-y-1">
              <div className="inline-flex items-center rounded-full bg-buddas-teal/10 px-3 py-1 text-[10px] font-bold uppercase tracking-[0.2em] text-buddas-teal">
                Buddas Rewards
              </div>
              {promo.title && (
                <h2 className="font-bold text-lg leading-snug text-[#3A2F2B]">
                  {promo.title}
                </h2>
              )}
              {promo.body && (
                <p className="text-sm leading-relaxed text-buddas-brown/70">{promo.body}</p>
              )}
            </div>
            {promo.ctaUrl && promo.ctaLabel && (
              <a
                href={promo.ctaUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center space-x-2 rounded-full bg-[#E9C559] px-4 py-2.5 text-sm font-bold text-[#1C5F56] shadow-sm hover:opacity-90 transition-opacity whitespace-nowrap"
              >
                <span>{promo.ctaLabel}</span>
                <ArrowUpRight className="w-4 h-4 rotate-45" aria-hidden="true" />
              </a>
            )}
          </section>
        )}

        {/* Feature grid */}
        {featureTiles.length > 0 && (
          <section className="grid grid-cols-3 gap-4" aria-label="Featured links">
            {featureTiles.map((tile) => (
              <a
                key={tile.title + (tile.url || "")}
                href={tile.url || "#"}
                target={tile.url ? "_blank" : undefined}
                rel={tile.url ? "noopener noreferrer" : undefined}
                className="group block text-center"
              >
                <div className="relative aspect-square w-full rounded-lg overflow-hidden shadow-sm">
                  {tile.image ? (
                    <Image
                      src={urlFor(tile.image).width(600).url()}
                      alt={(tile.image as any)?.alt || tile.title}
                      fill
                      sizes="(max-width: 768px) 33vw, 200px"
                      className="object-cover"
                      unoptimized
                    />
                  ) : (
                    <div
                      className={`w-full h-full bg-gradient-to-br ${getTileGradient(
                        tile.accent
                      )}`}
                    />
                  )}
                  <div className="absolute inset-0 bg-black/20" />
                  <div
                    className={`absolute top-2 left-2 w-5 h-5 rounded-full border-2 border-white ${
                      tile.accent === "teal"
                        ? "bg-[#54BFA5]"
                        : tile.accent === "orange"
                        ? "bg-[#F38D2D]"
                        : "bg-[#E9C559]"
                    }`}
                  />
                </div>
                <span className="mt-2 inline-block font-bold text-[11px] tracking-wide uppercase text-[#3A2F2B]">
                  {tile.title}
                </span>
              </a>
            ))}
          </section>
        )}

        {!hasContent && (
          <p className="text-center text-sm text-buddas-brown/60">
            Buddas links coming soon.
          </p>
        )}
      </div>
    </main>
  );
}
