import Link from "next/link";
import { ShoppingBag } from "lucide-react";

export function AppDownloadCTA() {
    return (
        <section className="max-w-[1280px] xl:max-w-[1400px] 2xl:max-w-[1600px] mx-auto px-4 sm:px-6 lg:px-8 xl:px-12 2xl:px-16 py-16 2xl:py-24">
            <div className="relative overflow-hidden rounded-3xl bg-zinc-900 isolate shadow-xl">
                {/* Background Image */}
                <div className="absolute inset-0 z-0">
                    <img
                        alt="Chef grilling meat"
                        className="w-full h-full object-cover opacity-50 mix-blend-overlay"
                        src="https://lh3.googleusercontent.com/aida-public/AB6AXuB-LhJKdKh1D38aStliQxZJylPplCRlVEScIIGYJD6yTH0xGNWDphmFcV9Vrj58n_vbjBLxtCG2b2C6iEMV80Sxg4Et4HPH-fVFRehpNB-udxFBtFCQfFTweRjYxnxWEXDd7-EcboKxTLUZJGr2W8DafFGBkMjkuP9RWc6q0o3Zn6a4Lla8HdsRV3B4GtbpeHshUjrAyp22xjiehOXhRVpR8CMx_UEBsswTelaCFcMGz9QzWEpOSXh6yhX7j5rcBXokOE-fF2ds3lXG"
                    />
                    <div className="absolute inset-0 bg-gradient-to-r from-zinc-900 via-zinc-900/90 to-[#145B57]/25"></div>
                </div>

                {/* Content */}
                <div className="relative z-10 px-6 py-16 md:px-16 md:py-20 2xl:px-24 2xl:py-28">
                    <div className="max-w-xl 2xl:max-w-2xl space-y-6 text-center md:text-left">
                        <h2 className="text-4xl md:text-5xl lg:text-6xl 2xl:text-7xl font-black text-white leading-[1.1] tracking-tight">
                            Hungry?<br />
                            <span className="text-[#145B57]">We're ready.</span>
                        </h2>
                        <p className="text-lg text-gray-300 font-medium">
                            Skip the wait. Order your favorite plate lunches, bowls, and bakery treats online for quick and easy pickup.
                        </p>
                        <div className="flex flex-col sm:flex-row gap-4 justify-center md:justify-start pt-2">
                            <Link
                                href="https://order.toasttab.com/online/buddas-hawaiian-bbq-pleasant-grove-pg-123-state-st"
                                target="_blank"
                                className="h-14 px-8 bg-[#145B57] hover:bg-[#0f4643] text-white rounded-xl font-bold text-lg shadow-lg shadow-[#145B57]/30 transition-all hover:-translate-y-1 flex items-center justify-center gap-2"
                            >
                                Order Online
                                <ShoppingBag className="w-5 h-5" />
                            </Link>
                            <Link
                                href="/menu"
                                className="h-14 px-8 bg-white/10 hover:bg-white/20 border border-white/20 backdrop-blur-md text-white rounded-xl font-bold text-lg transition-all flex items-center justify-center gap-2"
                            >
                                View Menu
                            </Link>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}
