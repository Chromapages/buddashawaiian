import Link from "next/link";
import { Facebook, Instagram, Twitter } from "lucide-react";

export function Footer() {
    return (
        <footer className="bg-[#3A2F2B] text-[#FAF2D8] pt-8 pb-28 border-t border-[#FAF2D8]/10">
            <div className="max-w-[1280px] xl:max-w-[1400px] 2xl:max-w-[1600px] mx-auto px-4 sm:px-6 lg:px-8 xl:px-12 2xl:px-16">
                <div className="flex flex-col md:flex-row items-center justify-between gap-6 md:gap-8">
                    {/* Brand / Logo Mark */}
                    <div className="flex-shrink-0">
                        <Link href="/" className="font-display text-2xl tracking-tight hover:text-[#E9C559] transition-colors">
                            Buddas
                        </Link>
                    </div>

                    {/* Navigation Links */}
                    <nav className="flex flex-wrap justify-center gap-6 md:gap-10 text-sm font-medium">
                        <Link href="/menu" className="hover:text-[#E9C559] transition-colors">Menu</Link>
                        <Link href="/locations" className="hover:text-[#E9C559] transition-colors">Locations</Link>
                        <Link href="/about" className="hover:text-[#E9C559] transition-colors">Our Story</Link>
                        <Link href="/catering" className="hover:text-[#E9C559] transition-colors">Catering</Link>
                        <Link href="/order" className="hover:text-[#54BFA5] transition-colors text-[#54BFA5] font-bold">Order Now</Link>
                    </nav>

                    {/* Socials & Copyright */}
                    <div className="flex items-center gap-6 flex-shrink-0">
                        <div className="flex gap-4">
                            <Link href="#" className="hover:text-[#E9C559] transition-colors opacity-80 hover:opacity-100">
                                <Instagram className="w-4 h-4" />
                                <span className="sr-only">Instagram</span>
                            </Link>
                            <Link href="#" className="hover:text-[#E9C559] transition-colors opacity-80 hover:opacity-100">
                                <Facebook className="w-4 h-4" />
                                <span className="sr-only">Facebook</span>
                            </Link>
                            <Link href="#" className="hover:text-[#E9C559] transition-colors opacity-80 hover:opacity-100">
                                <Twitter className="w-4 h-4" />
                                <span className="sr-only">Twitter</span>
                            </Link>
                        </div>
                        <div className="hidden md:block w-px h-4 bg-[#FAF2D8]/20"></div>
                        <p className="text-xs text-[#FAF2D8]/60 whitespace-nowrap">
                            &copy; {new Date().getFullYear()} Buddas
                        </p>
                    </div>
                </div>
            </div>
        </footer>
    );
}
