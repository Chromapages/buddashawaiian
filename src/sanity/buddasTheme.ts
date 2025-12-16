import {buildLegacyTheme} from "sanity";

const props = {
    "--buddas-cream": "#FAF2D8",
    "--buddas-brown": "#3D2A1A",
    "--buddas-teal": "#54BFA5",
    "--buddas-gold": "#E9C559",
    "--buddas-orange": "#F38D2D",
    "--buddas-dark": "#1D130C",
    "--buddas-white": "#FFFFFF",
};

export const buddasTheme = buildLegacyTheme({
    // Base theme colors
    "--black": props["--buddas-dark"],
    "--white": props["--buddas-cream"],
    "--gray": "#666666",
    "--gray-base": "#666666",
    "--component-bg": props["--buddas-cream"],
    "--component-text-color": props["--buddas-brown"],

    // Brand
    "--brand-primary": props["--buddas-teal"],

    // Default button colors
    "--default-button-color": props["--buddas-brown"],
    "--default-button-primary-color": props["--buddas-gold"],
    "--default-button-success-color": props["--buddas-teal"],
    "--default-button-warning-color": props["--buddas-orange"],
    "--default-button-danger-color": "#DC2626",

    // State colors
    "--state-info-color": props["--buddas-teal"],
    "--state-success-color": props["--buddas-teal"],
    "--state-warning-color": props["--buddas-orange"],
    "--state-danger-color": "#DC2626",

    // Navbar
    "--main-navigation-color": props["--buddas-brown"],
    "--main-navigation-color--inverted": props["--buddas-cream"],

    // Focus color
    "--focus-color": props["--buddas-teal"],
});
