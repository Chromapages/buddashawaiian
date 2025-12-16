import { ProgramCard } from "@/components/ProgramCard";
import { Gift, Heart, Utensils } from "lucide-react";

interface ProgramsStripProps {
    programs: any[];
}

export function ProgramsStrip({ programs }: ProgramsStripProps) {
    // Map keys to icons and descriptions manually if not in Sanity, or use Sanity data
    // For now, we'll use a helper to get static assets if Sanity data is sparse
    const getProgramDetails = (key: string) => {
        switch (key) {
            case "rewards":
                return {
                    icon: <Gift className="w-8 h-8" />,
                    description: "Earn points on every order and unlock free food.",
                    href: "/rewards",
                    cta: "Join Rewards"
                };
            case "benefit-nights":
                return {
                    icon: <Heart className="w-8 h-8" />,
                    description: "Raise funds for your school or team with us.",
                    href: "/benefit-nights",
                    cta: "Host a Fundraiser"
                };
            case "catering":
                return {
                    icon: <Utensils className="w-8 h-8" />,
                    description: "Feed the whole ohana with our party pans.",
                    href: "/catering",
                    cta: "View Catering"
                };
            default:
                return {
                    icon: <Gift className="w-8 h-8" />,
                    description: "Learn more about our programs.",
                    href: "#",
                    cta: "Learn More"
                };
        }
    };

    // Sort programs to ensure consistent order: Rewards, Benefit Nights, Catering
    const sortedPrograms = ["rewards", "benefit-nights", "catering"]
        .map(key => programs?.find(p => p.key === key))
        .filter(Boolean);

    if (sortedPrograms.length === 0) return null;

    return (
        <section className="py-16 md:py-24 bg-buddas-cream/50">
            <div className="container mx-auto px-4">
                <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                    {sortedPrograms.map((program: any) => {
                        const details = getProgramDetails(program.key);
                        return (
                            <ProgramCard
                                key={program._id}
                                title={program.title}
                                description={program.heroSubtitle || details.description}
                                href={details.href}
                                ctaLabel={details.cta}
                                icon={details.icon}
                            />
                        );
                    })}
                </div>
            </div>
        </section>
    );
}
