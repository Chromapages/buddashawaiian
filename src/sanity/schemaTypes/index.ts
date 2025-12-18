import aboutPage from './aboutPage'
import benefitNightsPage from './benefitNightsPage'
import buddalinksPage from './buddalinksPage'
import cateringPage from './cateringPage'
import ctaSection from './ctaSection'
import heroSlide from './heroSlide'
import location from './location'
import menuCategory from './menuCategory'
import menuItem from './menuItem'
import page from './page'
import program from './program'
import promotion from './promotion'
import rewardsPage from './rewardsPage'
import seo from './seo'
import siteSettings from './siteSettings'
import testimonial from './testimonial'
import trustedBySection from './trustedBySection'

export const schema = {
    types: [
        // Pages
        aboutPage,
        benefitNightsPage,
        buddalinksPage,
        cateringPage,
        page,
        rewardsPage,

        // Menu
        menuCategory,
        menuItem,

        // Programs & Promotions
        program,
        promotion,

        // Components
        ctaSection,
        heroSlide,
        trustedBySection,

        // Settings & Data
        siteSettings,
        location,
        testimonial,

        // SEO
        seo,
    ],
}
