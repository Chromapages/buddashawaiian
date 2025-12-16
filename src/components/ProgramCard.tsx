import Link from "next/link";
import { ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { cn } from "@/lib/utils";

interface ProgramCardProps {
    title: string;
    description: string;
    href: string;
    ctaLabel?: string;
    icon?: React.ReactNode;
    className?: string;
}

export function ProgramCard({
    title,
    description,
    href,
    ctaLabel = "Learn More",
    icon,
    className,
}: ProgramCardProps) {
    return (
        <Card className={cn(
            "flex flex-col h-full border-none bg-white transition-all duration-300 ease-out",
            "shadow-[0_4px_6px_-1px_rgba(0,0,0,0.1),0_2px_4px_-1px_rgba(0,0,0,0.06)]",
            "hover:shadow-[0_20px_25px_-5px_rgba(0,0,0,0.1),0_10px_10px_-5px_rgba(0,0,0,0.04)]",
            "hover:-translate-y-2",
            className
        )}>
            <CardHeader>
                <div className="mb-4 text-buddas-teal transition-transform duration-300 group-hover:scale-110 origin-left">{icon}</div>
                <CardTitle className="text-2xl font-display text-buddas-brown">
                    {title}
                </CardTitle>
            </CardHeader>
            <CardContent className="flex-1">
                <p className="text-buddas-brown/80 leading-relaxed">
                    {description}
                </p>
            </CardContent>
            <CardFooter>
                <Button asChild variant="ghost" className="group/btn p-0 hover:bg-transparent text-buddas-teal hover:text-buddas-teal/80">
                    <Link href={href} className="flex items-center gap-2">
                        {ctaLabel}
                        <ArrowRight className="w-4 h-4 transition-transform group-hover/btn:translate-x-1" />
                    </Link>
                </Button>
            </CardFooter>
        </Card>
    );
}
