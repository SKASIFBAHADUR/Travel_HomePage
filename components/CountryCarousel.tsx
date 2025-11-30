"use client";
import { useState } from "react";
import CountryCard from "./CountryCard";
import { ChevronLeft, ChevronRight } from "lucide-react";

interface Country {
    name: string;
    slug: string;
    image: string;
}

interface CountrySet {
    id: number;
    countries: Country[];
}

interface CountryCarouselProps {
    sets: CountrySet[];
}

export default function CountryCarousel({ sets }: CountryCarouselProps) {
    const [current, setCurrent] = useState(0);

    const goToPrevious = () => {
        setCurrent((prev) => (prev > 0 ? prev - 1 : sets.length - 1));
    };

    const goToNext = () => {
        setCurrent((prev) => (prev < sets.length - 1 ? prev + 1 : 0));
    };

    if (sets.length === 0) return null;

    return (
        <div className="w-full flex flex-col items-center pb-10">
            {/* Country Cards */}
            <div className="relative w-full">
                {/* Navigation Arrows */}
                {sets.length > 1 && (
                    <>
                        <button
                            onClick={goToPrevious}
                            className="absolute left-0 top-1/2 -translate-y-1/2 -translate-x-4 md:-translate-x-12 z-10 bg-white rounded-full p-2 shadow-lg hover:bg-gray-100 transition-colors"
                            aria-label="Previous slide"
                        >
                            <ChevronLeft size={24} className="text-orange-500" />
                        </button>
                        <button
                            onClick={goToNext}
                            className="absolute right-0 top-1/2 -translate-y-1/2 translate-x-4 md:translate-x-12 z-10 bg-white rounded-full p-2 shadow-lg hover:bg-gray-100 transition-colors"
                            aria-label="Next slide"
                        >
                            <ChevronRight size={24} className="text-orange-500" />
                        </button>
                    </>
                )}

                <div className="flex gap-6 justify-center flex-wrap transition-all duration-500">
                    {sets[current].countries.map((country) => (
                        <CountryCard key={country.slug} {...country} />
                    ))}
                </div>
            </div>

            {/* Dots */}
            {sets.length > 1 && (
                <div className="flex gap-3 mt-8">
                    {sets.map((_, index) => (
                        <button
                            key={index}
                            onClick={() => setCurrent(index)}
                            className={`
                                h-3 rounded-full transition-all duration-300
                                ${current === index ? "bg-orange-500 w-8" : "bg-gray-300 w-3"}
                            `}
                            aria-label={`Go to slide ${index + 1}`}
                        />
                    ))}
                </div>
            )}
        </div>
    );
}
