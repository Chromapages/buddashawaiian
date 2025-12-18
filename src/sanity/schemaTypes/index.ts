import { type SchemaTypeDefinition } from 'sanity'

import siteSettings from "./siteSettings";
import page from "./page";
import menuCategory from "./menuCategory";
import menuItem from "./menuItem";
import program from "./program";
import location from "./location";
import testimonial from "./testimonial";
import seo from "./seo";
import buddalinksPage from "./buddalinksPage";
import heroSlide from "./heroSlide";
import rewardsPage from "./rewardsPage";
import benefitNightsPage from "./benefitNightsPage";
import cateringPage from "./cateringPage";
import aboutPage from "./aboutPage";
import promotion from "./promotion";
import trustedBySection from './trustedBySection';
import ctaSection from './ctaSection';

export const schema: { types: SchemaTypeDefinition[] } = {
    types: [
        siteSettings,
        page,
        rewardsPage,
        benefitNightsPage,
        cateringPage,
        aboutPage,
        menuCategory,
        menuItem,
        program,
        location,
        testimonial,
        seo,
        buddalinksPage,
        heroSlide,
        promotion,
        trustedBySection,
        ctaSection,
    ],
}
