import { client } from "@/sanity/lib/client";
import { LOCATIONS_PAGE_QUERY, CONTACT_PAGE_QUERY } from "@/sanity/lib/queries";
import { Footer } from "@/components/Footer";
import { ContactClient } from "@/components/contact/ContactClient";

export const revalidate = 60;

export default async function ContactPage() {
    const locations = await client.fetch(LOCATIONS_PAGE_QUERY);
    const pageData = await client.fetch(CONTACT_PAGE_QUERY);
    const primaryLocation = locations?.[0];

    return (
        <div className="bg-white font-sans">
            <main>
                <ContactClient primaryLocation={primaryLocation} pageData={pageData} />
            </main>
            <Footer />
        </div>
    );
}
