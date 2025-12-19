import { buildLegacyTheme } from "sanity";

const props = {
    "--buddas-cream": "#FFF8E8",
    "--buddas-brown": "#5A3A1F", // Cocoa Brown
    "--buddas-brown-dark": "#3B2314", // Deepest Brown
    "--buddas-teal": "#54BFA5", // Base Teal (Brand Primary)
    "--buddas-teal-dark": "#1C5F56", // Dark Teal (Surface)
    "--buddas-teal-deepest": "#0D2B27", // Deepest Teal (Background)
    "--buddas-teal-mid": "#2A6E63", // Mid Teal (Borders - slightly lighter than surface)
    "--buddas-gold": "#E9C559",
    "--buddas-orange": "#D36200",
    "--buddas-white": "#FFFFFF",
    "--buddas-gray": "#887568",
};

export const buddasTheme = buildLegacyTheme({
    /* Base theme colors */
    "--black": props["--buddas-cream"], // Text color (Cream)
    "--white": props["--buddas-teal-deepest"], // Background color (Deepest Teal)

    "--gray": props["--buddas-teal-mid"],
    "--gray-base": props["--buddas-teal-mid"],

    "--component-bg": props["--buddas-teal-dark"],
    "--component-text-color": props["--buddas-cream"],

    /* Brand */
    "--brand-primary": props["--buddas-teal"],

    // Default button colors
    "--default-button-color": props["--buddas-teal-dark"],
    "--default-button-primary-color": props["--buddas-teal"],
    "--default-button-success-color": props["--buddas-teal"],
    "--default-button-warning-color": props["--buddas-orange"],
    "--default-button-danger-color": props["--buddas-orange"],

    /* State colors */
    "--state-info-color": props["--buddas-teal"],
    "--state-success-color": props["--buddas-teal"],
    "--state-warning-color": props["--buddas-orange"],
    "--state-danger-color": props["--buddas-orange"],

    /* Navbar */
    "--main-navigation-color": props["--buddas-teal-deepest"],
    "--main-navigation-color--inverted": props["--buddas-cream"],

    /* Focus color */
    "--focus-color": props["--buddas-gold"],
});
