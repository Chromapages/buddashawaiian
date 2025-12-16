import { MapPin, Clock, Phone } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { cn } from "@/lib/utils";

interface LocationCardProps {
    name: string;
    addressLine1: string;
    addressLine2?: string;
    city: string;
    state: string;
    zip: string;
    phone?: string;
    hoursSummary?: string;
    mapUrl?: string;
    orderingUrl?: string;
    variant?: "default" | "compact";
    className?: string;
}

export function LocationCard({
    name,
    addressLine1,
    addressLine2,
    city,
    state,
    zip,
    phone,
    hoursSummary,
    mapUrl,
    orderingUrl,
    variant = "default",
    className,
}: LocationCardProps) {
    const fullAddress = `${addressLine1}${addressLine2 ? ` ${addressLine2}` : ''}, ${city}, ${state} ${zip}`;

    // Compact variant for minimal display
    if (variant === "compact") {
        return (
            <Card 
                className={cn(
                    "bg-white rounded-2xl shadow-sm hover:shadow-md transition-all duration-300 border border-buddas-brown/5",
                    className
                )}
            >
                <CardContent className="p-4">
                    {/* Location Name */}
                    <h3 className="text-lg font-semibold text-buddas-brown mb-1">
                        {name}
                    </h3>

                    {/* Hours */}
                    {hoursSummary && (
                        <p className="text-xs text-buddas-brown/60 mb-2">
                            Today: {hoursSummary}
                        </p>
                    )}

                    {/* Address - Condensed */}
                    <p className="text-sm text-buddas-brown/70 mb-3">
                        {addressLine1}, {city}, {state} {zip}
                    </p>

                    {/* Pill CTAs */}
                    <div className="flex flex-wrap gap-2">
                        {mapUrl && (
                            <Button 
                                asChild 
                                size="sm"
                                variant="outline" 
                                className="border-buddas-teal text-buddas-teal hover:bg-buddas-teal/5 rounded-full text-xs"
                            >
                                <a href={mapUrl} target="_blank" rel="noopener noreferrer">
                                    Get Directions
                                </a>
                            </Button>
                        )}
                        {phone && (
                            <Button 
                                asChild 
                                size="sm"
                                variant="ghost" 
                                className="text-buddas-brown hover:bg-buddas-brown/5 rounded-full text-xs"
                            >
                                <a href={`tel:${phone.replace(/\D/g, '')}`}>
                                    Call
                                </a>
                            </Button>
                        )}
                        {orderingUrl && (
                            <Button 
                                asChild 
                                size="sm"
                                className="bg-buddas-gold text-buddas-brown hover:bg-buddas-gold/90 rounded-full text-xs shadow-sm"
                            >
                                <a href={orderingUrl} target="_blank" rel="noopener noreferrer">
                                    Order Online
                                </a>
                            </Button>
                        )}
                    </div>
                </CardContent>
            </Card>
        );
    }

    return (
        <Card 
            className={cn(
                "bg-white rounded-2xl shadow-sm hover:shadow-lg hover:-translate-y-1 transition-all duration-300 border border-buddas-brown/5",
                className
            )}
        >
            <CardContent className="p-6">
                {/* Header: Location Name */}
                <h3 className="font-display text-2xl text-buddas-brown mb-6">
                    {name}
                </h3>

                {/* Info List */}
                <div className="space-y-3 mb-6">
                    {/* Address - Clickable */}
                    {mapUrl ? (
                        <a 
                            href={mapUrl} 
                            target="_blank" 
                            rel="noopener noreferrer"
                            className="flex items-start gap-3 text-buddas-brown/80 hover:text-buddas-teal transition-colors group"
                        >
                            <MapPin className="w-5 h-5 text-buddas-teal shrink-0 mt-0.5 group-hover:scale-110 transition-transform" />
                            <div className="leading-relaxed">
                                <p>{addressLine1}</p>
                                {addressLine2 && <p>{addressLine2}</p>}
                                <p>{city}, {state} {zip}</p>
                            </div>
                        </a>
                    ) : (
                        <div className="flex items-start gap-3 text-buddas-brown/80">
                            <MapPin className="w-5 h-5 text-buddas-teal shrink-0 mt-0.5" />
                            <div className="leading-relaxed">
                                <p>{addressLine1}</p>
                                {addressLine2 && <p>{addressLine2}</p>}
                                <p>{city}, {state} {zip}</p>
                            </div>
                        </div>
                    )}

                    {/* Hours */}
                    {hoursSummary && (
                        <div className="flex items-start gap-3 text-buddas-brown/80">
                            <Clock className="w-5 h-5 text-buddas-teal shrink-0 mt-0.5" />
                            <p className="leading-relaxed">{hoursSummary}</p>
                        </div>
                    )}

                    {/* Phone - Clickable */}
                    {phone && (
                        <a 
                            href={`tel:${phone.replace(/\D/g, '')}`}
                            className="flex items-start gap-3 text-buddas-brown/80 hover:text-buddas-teal transition-colors group"
                        >
                            <Phone className="w-5 h-5 text-buddas-teal shrink-0 mt-0.5 group-hover:scale-110 transition-transform" />
                            <p className="leading-relaxed">{phone}</p>
                        </a>
                    )}
                </div>

                {/* CTAs */}
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                    {mapUrl && (
                        <Button 
                            asChild 
                            variant="outline" 
                            className="w-full border-buddas-teal text-buddas-teal hover:bg-buddas-teal/5 rounded-full font-semibold"
                        >
                            <a href={mapUrl} target="_blank" rel="noopener noreferrer">
                                Get Directions
                            </a>
                        </Button>
                    )}
                    {orderingUrl && (
                        <Button 
                            asChild 
                            className="w-full bg-buddas-gold text-buddas-brown hover:bg-buddas-gold/90 rounded-full font-semibold shadow-sm"
                        >
                            <a href={orderingUrl} target="_blank" rel="noopener noreferrer">
                                Order Online
                            </a>
                        </Button>
                    )}
                </div>
            </CardContent>
        </Card>
    );
}
