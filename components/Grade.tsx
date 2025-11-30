import React from "react";
import Image from "next/image";

export default function Grade() {
    const grades = [
        {
            image: "/images/grade 1.png",
            alt: "Best & Amazing Sightseeing",
        },
        {
            image: "/images/grade 2.png",
            alt: "Touring Award of the Year",
        },
        {
            image: "/images/grade 3.png",
            alt: "Big Tours Award of the Month",
        },
        {
            image: "/images/grade 4.png",
            alt: "Best Adventure Travel Award",
        },
        {
            image: "/images/grade 5.png",
            alt: "Tours & Travel Service Award",
        },
    ];

    return (
        <section className="relative w-full">
            {/* Background SVG */}
            <div className="w-full">
                <svg
                    width="100%"
                    height="100%"
                    viewBox="0 0 1437 300"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                    className="w-full h-auto min-h-[250px] object-cover"
                    preserveAspectRatio="none"
                >
                    <path d="M0 0H1437V269.792C851.592 371.86 586.408 151.068 0 299.792V0Z" fill="#D9D9D9" />
                    <path d="M0 0H1437V269.792C851.592 371.86 586.408 151.068 0 299.792V0Z" fill="url(#paint0_linear_465_48)" />
                    <defs>
                        <linearGradient id="paint0_linear_465_48" x1="719" y1="-306.829" x2="719" y2="353.299" gradientUnits="userSpaceOnUse">
                            <stop stopColor="#6746D3" />
                            <stop offset="1" stopColor="#0E0033" />
                        </linearGradient>
                    </defs>
                </svg>
            </div>

            {/* Content Overlay */}
            <div className="absolute inset-0 flex items-center justify-center px-4 pb-12">
                <div className="flex justify-center items-center gap-4 md:gap-8 lg:gap-12 flex-wrap">
                    {grades.map((grade, index) => (
                        <div
                            key={index}
                            className="flex-shrink-0 transition-transform duration-300 hover:scale-110"
                        >
                            <Image
                                src={grade.image}
                                alt={grade.alt}
                                width={180}
                                height={180}
                                className="w-20 h-20 md:w-32 md:h-32 lg:w-40 lg:h-40 object-contain"
                            />
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
}
