import Link from "next/link";
import Image from "next/image";

interface TrustedByProps {
    trustedByData?: {
        title?: string;
        platforms?: {
            name: string;
            url: string;
            logo?: string;
        }[];
    };
}

export function TrustedBy({ trustedByData }: TrustedByProps) {
    const title = trustedByData?.title || "Order Buddas on Your Favorite Apps";
    const platforms = trustedByData?.platforms || [
        { name: "Uber Eats", url: "https://www.ubereats.com" },
        { name: "DoorDash", url: "https://www.doordash.com/en/store/budda%E2%80%99s-bakery-205-e-700-s-pleasant-grove-32569829/54812346/" },
        { name: "Grubhub", url: "https://www.grubhub.com" },
        { name: "Postmates", url: "https://postmates.com" },
        { name: "SpotOn", url: "https://www.spoton.com" },
    ];

    return (
        <section className="pt-8 pb-8 md:pb-10 bg-[#FAF2D8] border-b border-[#e8dcc0]">
            <div className="max-w-[1280px] xl:max-w-[1400px] 2xl:max-w-[1600px] mx-auto px-6 lg:px-8 xl:px-12 2xl:px-16 text-center">
                <p className="text-[#145B57] font-bold mb-12 text-lg tracking-[0.1em] uppercase drop-shadow-sm">{title}</p>
                <div className="flex flex-wrap justify-center items-center gap-12 lg:gap-24">
                    {platforms.map((platform, index) => (
                        <Link
                            key={index}
                            href={platform.url}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="opacity-80 hover:opacity-100 hover:scale-110 hover:-translate-y-1 hover:drop-shadow-md transition-all duration-300 ease-out group"
                        >
                            {platform.logo ? (
                                <div className="relative h-16 w-auto min-w-[160px]">
                                    <Image
                                        src={platform.logo}
                                        alt={platform.name || "Platform logo"}
                                        fill
                                        className="object-contain transition-all duration-300 grayscale"
                                        style={{ filter: 'brightness(0) saturate(100%) invert(13%) sepia(5%) saturate(384%) hue-rotate(314deg) brightness(98%) contrast(89%)' }}
                                    />
                                </div>
                            ) : (
                                <span className="text-4xl font-black tracking-tight text-[#2B2B2B] transition-colors">
                                    {platform.name}
                                </span>
                            )}
                        </Link>
                    ))}
                </div>
            </div>
        </section>
    );
}
