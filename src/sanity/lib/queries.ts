import { groq } from "next-sanity";

export const HOME_PAGE_QUERY = groq`{
  "siteSettings": *[_type == "siteSettings"][0] {
    title,
    tagline,
    logo,
    "heroSlides": heroSlides[] {
      badge,
      title,
      subtitle,
      image {
        asset->{
          _id,
          url
        },
        hotspot,
        crop
      },
      primaryCtaLabel,
      primaryCtaLink,
      secondaryCtaLabel,
      secondaryCtaLink,
      features
    },
    mainNavigation[] {
      label,
      url
    },
    primaryPhone,
    primaryEmail,
    defaultOrderingUrl
  },
  "featuredMenuItems": *[_type == "menuItem" && isSignature == true] | order(_createdAt desc) [0...8] {
    _id,
    name,
    description,
    price,
    image {
      asset->{
        _id,
        url
      },
      hotspot,
      crop
    },
    isSignature
  },
  "popularItems": *[_type == "menuItem" && "popular" in tags] | order(_createdAt desc) [0...4] {
    _id,
    name,
    description,
    price,
    image {
      asset->{
        _id,
        url
      },
      hotspot,
      crop
    },
    isSignature
  },
  "newItems": *[_type == "menuItem"] | order(_createdAt desc) [0...4] {
    _id,
    name,
    description,
    price,
    image {
      asset->{
        _id,
        url
      },
      hotspot,
      crop
    },
    isSignature
  },
  "programs": *[_type == "program" && key in ["rewards", "benefit-nights", "catering"]] {
    _id,
    title,
    "slug": slug.current,
    key,
    heroTitle,
    heroSubtitle,
    "icon": benefits[0].icon
  },
  "locations": *[_type == "location"] | order(isPrimaryLocation desc) [0...3] {
    _id,
    name,
    addressLine1,
    city,
    state,
    zip,
    phone,
    hours,
    mapUrl,
    orderingUrl
  },
  "testimonials": *[_type == "testimonial" && approved == true && spam != true] | order(_createdAt desc) [0...6] {
    _id,
    name,
    roleOrLocation,
    quote,
    rating,
    source,
    googleReview {
      reviewUrl,
      foodRating,
      serviceRating,
      atmosphereRating
    }
  },
  "cateringData": *[_type == "cateringPage"][0] {
    heroTitle,
    heroSubtitle,
    "heroImage": heroImage.asset->url,
    introduction,
    heroCtaLabel,
    heroCtaLink,
    eventsTitle,
    eventsDescription,
    "eventsImage": eventsImage.asset->url,
    eventsCtaLabel,
    eventsCtaLink,
    serviceTypes[] {
      title,
      description,
      "image": image.asset->url
    }
  },
  "aboutData": *[_type == "aboutPage"][0] {
    storyTitle,
    storyContent
  },
  "promotions": *[_type == "promotion" && isActive == true] | order(displayOrder asc) [0...3] {
    _id,
    title,
    badge,
    description,
    "couponCode": promoCode,
    "buttonText": ctaLabel,
    "link": ctaLink,
    "image": image.asset->url,
    ctaType,
    colorTheme,
    icon
  },
  "trustedByData": *[_type == "trustedBySection"][0] {
    "title": title,
    platforms[] {
      name,
      url,
      "logo": logo.asset->url
    }
  }
}`;

export const SITE_SETTINGS_QUERY = groq`*[_type == "siteSettings"][0] {
  title,
  tagline,
  logo {
    asset->{
      _id,
      url
    },
    hotspot,
    crop
  },
  headerCtaStyle,
  favicon,
  mainNavigation[] {
    label,
    url
  },
  primaryPhone,
  primaryEmail,
  defaultOrderingUrl,
  socialLinks
}`;

export const MENU_PAGE_QUERY = groq`{
  "categories": *[_type == "menuCategory" && (!defined(visible) || visible == true)] | order(displayOrder asc) {
    _id,
    title,
    "slug": slug.current,
    description,
    "icon": icon,
    "items": *[_type == "menuItem" && references(^._id)] | order(sortOrder asc, name asc) {
      _id,
      name,
      description,
      price,
      priceNote,
      comboPrice,
      comboPriceNote,
      "image": image,
      tags,
      isSignature,
      "slug": slug.current,
      calories,
      allergens,
      ingredients
    }
  },
  "locations": *[_type == "location"] | order(isPrimaryLocation desc) [0...3] {
    _id,
    name,
    addressLine1,
    city,
    state,
    zip,
    phone,
    hours,
    mapUrl,
    orderingUrl
  }
}`;

export const LOCATIONS_PAGE_QUERY = groq`*[_type == "location"] | order(isPrimaryLocation desc) {
  _id,
  name,
  addressLine1,
  addressLine2,
  city,
  state,
  zip,
  phone,
  hours,
  mapUrl,
  orderingUrl,
  isPrimaryLocation
}`;

export const PROGRAM_PAGE_QUERY = groq`*[_type == "program" && slug.current == $slug][0] {
  title,
  heroTitle,
  heroSubtitle,
  heroImage,
  headlinePercentage,
  benefits,
  steps,
  packages,
  faq,
  ctaLabel,
  ctaHref
}`;

export const REWARDS_PAGE_QUERY = groq`*[_type == "rewardsPage"][0] {
  title,
  heroTitle,
  heroSubtitle,
  heroImage,
  heroCtaLabel,
  heroCtaLink,
  benefits,
  steps,
  faq,
  seo
}`;

export const BENEFIT_NIGHTS_PAGE_QUERY = groq`*[_type == "benefitNightsPage"][0] {
  title,
  heroTitle,
  heroSubtitle,
  heroImage,
  heroCtaLabel,
  heroCtaLink,
  headlinePercentage,
  benefits,
  howItWorks,
  faq,
  seo
}`;

export const CATERING_PAGE_QUERY = groq`*[_type == "cateringPage"][0] {
  title,
  heroTitle,
  heroSubtitle,
  heroImage,
  heroCtaLabel,
  heroCtaLink,
  introduction,
  serviceTypes,
  menuHighlights,
  howItWorks,
  faq,
  seo
}`;

export const ABOUT_PAGE_QUERY = groq`*[_type == "aboutPage"][0] {
  title,
  heroTitle,
  heroSubtitle,
  heroImage,
  storyTitle,
  storyContent,
  storyImage,
  values,
  team,
  gallery,
  seo
}`;

export const PAGE_QUERY = groq`*[_type == "page" && slug.current == $slug][0] {
  title,
  heroTitle,
  heroSubtitle,
  heroImage,
  contentBlocks
}`;

export const BUDDALINKS_PAGE_QUERY = groq`*[_type == "buddalinksPage" && slug.current == "links"][0] {
  title,
  logo,
  heroImage,
  headline,
  socialLinks[]{
    platform,
    label,
    url
  },
  "primaryLinks": primaryLinks[] | order(order asc) {
    label,
    url,
    style,
    order
  },
  promo{
    title,
    body,
    ctaLabel,
    ctaUrl
  },
  featureTiles[]{
    title,
    url,
    image,
    accent
  }
}`;

export const KEY_INFO_QUERY = groq`* [_type == "location" && isPrimaryLocation == true][0] {
    name,
    addressLine1,
    city,
    state,
    zip,
    phone,
    hours,
    mapUrl,
    orderingUrl
}`;
