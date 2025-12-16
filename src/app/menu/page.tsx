import { client } from "@/sanity/lib/client";
import { MENU_PAGE_QUERY } from "@/sanity/lib/queries";
import { Footer } from "@/components/Footer";
import { StickyLocationBar } from "@/components/StickyLocationBar";
import { AccessibleMenuToggle } from "@/components/AccessibleMenuToggle";
import { MenuClient } from "@/components/menu/MenuClient";

export const revalidate = 60;

export default async function MenuPage() {
    const data = await client.fetch(MENU_PAGE_QUERY);
    const { categories = [], locations = [] } = data || {};
    const primaryLocation = locations[0];

    return (
        <div className="min-h-screen flex flex-col bg-white font-body text-zinc-900">
            <AccessibleMenuToggle />

            {/* Main Content handled by Client Component */}
            <MenuClient categories={categories} />

            <Footer />
            <StickyLocationBar location={primaryLocation} />
        </div>
    );
}
