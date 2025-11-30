"use client";

import { useState } from "react";
import DestinationCard from "./DestinationCard";
import { ChevronLeft, ChevronRight } from "lucide-react";

interface Destination {
    slug: string;
    title: string;
    image: string;
    days: number;
    nights: number;
    price: number;
    amenities: Array<{
        icon: string;
        label: string;
        available: boolean;
    }>;
}

interface DestinationCarouselProps {
    cards: Destination[];
}

export default function DestinationCarousel({ cards }: DestinationCarouselProps) {
    const [current, setCurrent] = useState(0);
    const itemsPerSlide = 3;
    const totalSlides = Math.ceil(cards.length / itemsPerSlide);

    const goToSlide = (index: number) => {
        setCurrent(index);
    };

    const goToPrevious = () => {
        setCurrent((prev) => (prev > 0 ? prev - 1 : totalSlides - 1));
    };

    const goToNext = () => {
        setCurrent((prev) => (prev < totalSlides - 1 ? prev + 1 : 0));
    };

    // Get the cards for the current slide
    const currentCards = cards.slice(
        current * itemsPerSlide,
        (current + 1) * itemsPerSlide
    );

    if (cards.length === 0) return null;

    return (
        <div className="w-full flex flex-col items-center">
            {/* Cards Wrapper */}
            <div className="relative w-full">
                {/* Navigation Arrows */}
                {totalSlides > 1 && (
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

                <div className="flex flex-wrap justify-center gap-6 transition-all duration-500">
                    {currentCards.map((card, index) => (
                        <DestinationCard key={`${card.slug}-${index}`} {...card} />
                    ))}
                </div>
            </div>

            {/* Dots */}
            {totalSlides > 1 && (
                <div className="flex gap-3 mt-8">
                    {Array.from({ length: totalSlides }).map((_, index) => (
                        <button
                            key={index}
                            onClick={() => goToSlide(index)}
                            className={`h-3 w-3 rounded-full transition-all duration-300
                                ${current === index ? "bg-orange-500 w-5" : "bg-gray-300"}
                            `}
                            aria-label={`Go to slide ${index + 1}`}
                        />
                    ))}
                </div>
            )}
        </div>
    );
}

