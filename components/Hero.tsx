import Image from "next/image";
import { Sun, Moon, ChevronLeft, ChevronRight, Facebook, Instagram, Twitter, Linkedin } from "lucide-react";

export default function Hero() {
    return (
        <section className="relative h-screen w-full overflow-hidden">
            {/* Background Image */}
            <div className="absolute inset-0">
                <Image
                    src="/images/dubai.png"
                    alt="Dubai Skyline"
                    fill
                    className="object-cover"
                    priority
                    quality={100}
                />
            </div>

            {/* Content */}
            <div className="relative z-10 h-full flex items-center justify-start px-4 sm:px-6 lg:px-12">

                {/* Follow Us Bar - Right Side */}
                <div className="hidden md:block fixed right-0 top-32 z-50">
                    <div className="bg-gray-700/80 backdrop-blur-sm rounded-l-2xl py-6 px-3 flex flex-col items-center gap-4">
                        <div className="flex flex-col items-center gap-1">
                            <span className="text-white text-xs font-semibold tracking-wider" style={{ writingMode: 'vertical-rl' }}>
                                Follow Us
                            </span>
                            <div className="w-px h-12 bg-white/30 my-2"></div>
                        </div>
                        <a href="https://wa.me/918975024242" target="_blank" rel="noopener noreferrer" className="text-white hover:text-green-400 transition-colors" aria-label="Chat on WhatsApp">
                            <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
                                <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z" />
                            </svg>
                        </a>
                        <a href="#" className="text-white hover:text-pink-400 transition-colors" aria-label="Follow us on Instagram">
                            <Instagram size={24} />
                        </a>
                        <a href="#" className="text-white hover:text-blue-400 transition-colors" aria-label="Follow us on Facebook">
                            <Facebook size={24} />
                        </a>
                        <a href="#" className="text-white hover:text-gray-300 transition-colors" aria-label="Connect on LinkedIn">
                            <Linkedin size={24} />
                        </a>
                        <a href="#" className="text-white hover:text-red-500 transition-colors" aria-label="Follow us on Pinterest">
                            <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
                                <path d="M23.498 6.186a3.016 3.016 0 0 0-2.122-2.136C19.505 3.545 12 3.545 12 3.545s-7.505 0-9.377.505A3.017 3.017 0 0 0 .502 6.186C0 8.07 0 12 0 12s0 3.93.502 5.814a3.016 3.016 0 0 0 2.122 2.136c1.871.505 9.376.505 9.376.505s7.505 0 9.377-.505a3.015 3.015 0 0 0 2.122-2.136C24 15.93 24 12 24 12s0-3.93-.502-5.814zM9.545 15.568V8.432L15.818 12l-6.273 3.568z" />
                            </svg>
                        </a>
                    </div>
                </div>

                <div className="ml-0 md:ml-12 lg:ml-24 flex flex-col">
                    {/* Arrows Box */}
                    <div className="bg-zinc-800/90 w-fit p-3 flex gap-4 backdrop-blur-sm">
                        <button className="hover:text-white transition-colors" aria-label="Previous destination">
                            <ChevronLeft size={24} className="text-orange-500" />
                        </button>
                        <button className="hover:text-white transition-colors" aria-label="Next destination">
                            <ChevronRight size={24} className="text-orange-500" />
                        </button>
                    </div>

                    {/* Top Destinations Card */}
                    <div className="w-full max-w-md bg-black/50 backdrop-blur-md text-white p-8 rounded-none shadow-2xl border-t-0">

                        <div className="mb-1">
                            <span className="text-sm font-semibold tracking-wide uppercase text-gray-300">Top Destinations</span>
                        </div>

                        <h2 className="text-6xl font-bold mb-2 tracking-tight">Dubai</h2>
                        <p className="text-xl text-gray-200 font-light mb-8">Explore Best Holiday Packages</p>

                        <div className="h-px w-full bg-white/30 mb-8"></div>

                        <div className="flex items-end justify-between mb-8">
                            <div className="flex items-center gap-6">
                                <div className="flex items-center gap-2">
                                    <Sun className="text-yellow-400" size={24} />
                                    <span className="text-lg font-medium">7 Days</span>
                                </div>
                                <div className="flex items-center gap-2">
                                    <Moon className="text-blue-300" size={24} />
                                    <span className="text-lg font-medium">6 Nights</span>
                                </div>
                            </div>

                            <div className="text-right">
                                <p className="text-sm text-gray-300 mb-1">Starting from</p>
                                <p className="text-4xl font-bold">₹75,000</p>
                            </div>
                        </div>

                        <button className="bg-white/10 hover:bg-white/20 text-white font-bold py-4 px-8 rounded-sm w-auto transition-colors text-lg backdrop-blur-sm border border-white/10">
                            Explore Packages
                        </button>
                    </div>
                </div>

            </div>
        </section>
    );
}
