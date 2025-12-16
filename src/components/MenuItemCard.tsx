import { Sparkles } from "lucide-react";
import Image from "next/image";
import { urlFor } from "@/sanity/lib/image";
import { Badge } from "@/components/ui/badge";
import { Card, CardContent, CardHeader } from "@/components/ui/card";
import { cn } from "@/lib/utils";

interface MenuItemProps {
    name: string;
    description?: string;
    price: number;
    priceNote?: string;
    comboPrice?: number;
    comboPriceNote?: string;
    image?: any;
    tags?: string[];
    isSignature?: boolean;
    className?: string;
}

export function MenuItemCard({
    name,
    description,
    price,
    priceNote,
    comboPrice,
    comboPriceNote,
    image,
    tags,
    isSignature,
    className,
}: MenuItemProps) {
    return (
        <Card className={cn(
            "overflow-hidden border-0 shadow-sm relative group transition-all duration-300 hover:shadow-xl bg-white flex flex-col h-full rounded-2xl",
            isSignature && "ring-2 ring-buddas-gold/30",
            className
        )}>
            {/* Image Section - Fixed Aspect Ratio */}
            {image ? (
                <div className="relative h-56 w-full shrink-0 overflow-hidden bg-gray-100">
                    <Image
                        src={urlFor(image).width(600).height(400).url()}
                        alt={name}
                        fill
                        className="object-cover transition-transform duration-500 group-hover:scale-105"
                        sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                    />
                    {isSignature && (
                        <div className="absolute top-3 right-3 z-10">
                            <Badge className="bg-buddas-gold text-buddas-brown hover:bg-buddas-gold/90 border-0 shadow-sm px-3 py-1 text-xs font-bold uppercase tracking-wider">
                                <Sparkles className="w-3 h-3 mr-1.5 fill-current" /> Signature
                            </Badge>
                        </div>
                    )}
                    {tags && tags.length > 0 && (
                        <div className="absolute bottom-3 left-3 flex flex-wrap gap-1.5 z-10">
                            {tags.map((tag) => (
                                <Badge
                                    key={tag}
                                    variant="secondary"
                                    className={cn(
                                        "bg-white/95 backdrop-blur-sm text-buddas-brown shadow-sm border-0 text-[10px] font-bold px-2 py-0.5 uppercase tracking-wide",
                                        tag.toLowerCase() === "spicy" && "text-red-600"
                                    )}
                                >
                                    {tag}
                                </Badge>
                            ))}
                        </div>
                    )}
                </div>
            ) : (
                <div className="h-2 w-full bg-buddas-teal/20" />
            )}

            {/* Content Section */}
            <div className="flex flex-col flex-1 p-6">
                <CardHeader className="p-0 mb-3 space-y-1">
                    <div className="flex justify-between items-start gap-2">
                        <h3 className="text-xl font-bold text-buddas-brown font-display leading-tight group-hover:text-buddas-teal transition-colors">
                            {name}
                        </h3>
                    </div>
                    <div className="flex items-baseline gap-2 text-buddas-brown">
                        <span className="text-lg font-bold tracking-tight">
                            ${price.toFixed(2)}
                        </span>
                        {priceNote && (
                            <span className="text-sm font-medium text-buddas-brown/50">
                                {priceNote}
                            </span>
                        )}
                    </div>
                </CardHeader>

                <CardContent className="p-0 flex-1">
                    {description && (
                        <p className="text-buddas-brown/70 text-sm leading-relaxed line-clamp-3">
                            {description}
                        </p>
                    )}
                </CardContent>

                {/* Combo Pricing Section */}
                {comboPrice && (
                    <div className="mt-6 pt-4 border-t border-dashed border-buddas-brown/10">
                        <div className="flex items-center justify-between bg-buddas-cream/50 p-3 rounded-xl group/combo hover:bg-buddas-cream transition-colors">
                            <div className="flex flex-col">
                                <span className="text-xs font-bold uppercase tracking-wider text-buddas-teal mb-0.5">
                                    Make it a Combo
                                </span>
                                {comboPriceNote && (
                                    <span className="text-[10px] text-buddas-brown/60 font-medium leading-tight max-w-[140px]">
                                        {comboPriceNote}
                                    </span>
                                )}
                            </div>
                            <div className="flex flex-col items-end">
                                <span className="text-lg font-bold text-buddas-brown group-hover/combo:text-buddas-teal transition-colors">
                                    ${comboPrice.toFixed(2)}
                                </span>
                            </div>
                        </div>
                    </div>
                )}
            </div>
        </Card>
    );
}
