import { MenuItemCard } from "@/components/MenuItemCard";

interface MenuCategorySectionProps {
    category: any;
}

export function MenuCategorySection({ category }: MenuCategorySectionProps) {
    if (!category.items || category.items.length === 0) return null;

    return (
        <section id={category.slug} className="py-12 scroll-mt-32">
            <div className="container mx-auto px-4">
                <div className="mb-8">
                    <h2 className="font-display text-3xl text-buddas-brown mb-2">
                        {category.title}
                    </h2>
                    {category.description && (
                        <p className="text-buddas-brown/70 max-w-2xl">
                            {category.description}
                        </p>
                    )}
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                    {category.items.map((item: any) => (
                        <MenuItemCard
                            key={item._id}
                            name={item.name}
                            description={item.description}
                            price={item.price}
                            priceNote={item.priceNote}
                            comboPrice={item.comboPrice}
                            comboPriceNote={item.comboPriceNote}
                            image={item.image}
                            tags={item.tags}
                            isSignature={item.isSignature}
                        />
                    ))}
                </div>
            </div>
        </section>
    );
}
