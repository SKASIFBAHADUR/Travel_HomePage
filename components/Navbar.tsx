"use client";

import Link from "next/link";
import Image from "next/image";
import { useState, useEffect } from "react";
import { Menu, X } from "lucide-react";

export default function Navbar() {
    const [isScrolled, setIsScrolled] = useState(false);
    const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
    const [isDropdownOpen, setIsDropdownOpen] = useState(false);

    useEffect(() => {
        const handleScroll = () => {
            if (window.scrollY > 50) {
                setIsScrolled(true);
            } else {
                setIsScrolled(false);
            }
        };

        window.addEventListener("scroll", handleScroll);
        return () => window.removeEventListener("scroll", handleScroll);
    }, []);

    return (
        <header
            className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${isScrolled
                ? "bg-black/80 backdrop-blur-md py-4"
                : "bg-transparent py-6"
                }`}
        >
            <nav className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8" aria-label="Main navigation">
                <div className="flex items-center justify-between">
                    <div className="flex-shrink-0">
                        <Link href="/" className="block">
                            <Image
                                src="/images/logo.png"
                                alt="Travel Logo"
                                width={120}
                                height={40}
                                className="h-10 w-auto"
                                priority
                            />
                        </Link>
                    </div>

                    <div className="hidden md:flex items-center space-x-8">
                        <Link href="#" className="text-white hover:text-amber-400 px-3 py-2 rounded-md text-sm font-medium transition-colors">
                            Domestic Tours
                        </Link>
                        <Link href="#" className="text-white hover:text-amber-400 px-3 py-2 rounded-md text-sm font-medium transition-colors">
                            International Tours
                        </Link>

                        {/* Call with Icon and Number */}
                        <div className="flex items-center gap-2">
                            <Image
                                src="/images/call.png"
                                alt="Call"
                                width={20}
                                height={20}
                                className="w-5 h-5"
                            />
                            <a href="tel:+918975024242" className="text-white text-sm font-medium hover:text-amber-400 transition-colors">
                                +91-8975024242
                            </a>
                        </div>
                    </div>

                    <div className="hidden md:flex items-center gap-4">
                        <button className="bg-orange-500 hover:bg-orange-600 text-white px-6 py-2 rounded-full text-sm font-medium transition-colors">
                            Plan Tour
                        </button>

                        {/* Burger Dropdown */}
                        <div className="relative">
                            <button
                                onClick={() => setIsDropdownOpen(!isDropdownOpen)}
                                className="text-white hover:text-amber-400 p-2 transition-colors"
                                aria-label="Open menu"
                            >
                                <Menu size={24} />
                            </button>

                            {isDropdownOpen && (
                                <div className="absolute right-0 mt-2 w-48 bg-black/95 backdrop-blur-xl rounded-lg shadow-lg border border-white/10 py-2">
                                    <Link href="#" className="block px-4 py-2 text-sm text-gray-300 hover:bg-white/10 hover:text-white transition-colors">
                                        About Us
                                    </Link>
                                    <Link href="#" className="block px-4 py-2 text-sm text-gray-300 hover:bg-white/10 hover:text-white transition-colors">
                                        Gallery
                                    </Link>
                                    <Link href="#" className="block px-4 py-2 text-sm text-gray-300 hover:bg-white/10 hover:text-white transition-colors">
                                        Testimonials
                                    </Link>
                                    <Link href="#" className="block px-4 py-2 text-sm text-gray-300 hover:bg-white/10 hover:text-white transition-colors">
                                        Contact
                                    </Link>
                                </div>
                            )}
                        </div>
                    </div>

                    <div className="md:hidden">
                        <button
                            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
                            className="text-gray-300 hover:text-white p-2"
                            aria-label="Toggle mobile menu"
                        >
                            {isMobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
                        </button>
                    </div>
                </div>

                {/* Mobile menu */}
                {isMobileMenuOpen && (
                    <div className="md:hidden bg-black/95 backdrop-blur-xl absolute top-full left-0 right-0 border-t border-white/10">
                        <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3">
                            <Link href="#" className="text-white block px-3 py-2 rounded-md text-base font-medium">
                                Domestic Tours
                            </Link>
                            <Link href="#" className="text-white block px-3 py-2 rounded-md text-base font-medium">
                                International Tours
                            </Link>

                            {/* Call in Mobile */}
                            <div className="flex items-center gap-2 px-3 py-2">
                                <Image
                                    src="/images/call.png"
                                    alt="Call"
                                    width={20}
                                    height={20}
                                    className="w-5 h-5"
                                />
                                <a href="tel:+918975024242" className="text-white text-base font-medium">
                                    +91-8975024242
                                </a>
                            </div>

                            <Link href="#" className="text-gray-300 block px-3 py-2 rounded-md text-base font-medium">
                                About Us
                            </Link>
                            <Link href="#" className="text-gray-300 block px-3 py-2 rounded-md text-base font-medium">
                                Gallery
                            </Link>
                            <Link href="#" className="text-gray-300 block px-3 py-2 rounded-md text-base font-medium">
                                Testimonials
                            </Link>
                            <Link href="#" className="text-gray-300 block px-3 py-2 rounded-md text-base font-medium">
                                Contact
                            </Link>

                            <button className="w-full mt-4 bg-orange-500 hover:bg-orange-600 text-white px-6 py-3 rounded-full text-base font-medium transition-colors">
                                Plan Tour
                            </button>
                        </div>
                    </div>
                )}
            </nav>
        </header >
    );
}
