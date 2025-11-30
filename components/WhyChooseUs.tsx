"use client";
import React from "react";
import Image from "next/image";

export default function WhyChooseUs() {
    const features = [
        {
            icon: "/icons/tour&travel.png",
            title: "Luxury tours & travel",
            description:
                "Elevate your travel experience with our bespoke luxury tours, meticulously crafted to suit your preferences.",
        },
        {
            icon: "/icons/money 1.png",
            title: "Reasonable packages",
            description:
                "At our travel agency, we believe in making quality travel accessible to everyone.",
        },
        {
            icon: "/icons/hand-peace 1.png",
            title: "Peaceful destinations",
            description:
                "Indulge in the beauty of untouched landscapes and immerse yourself in tranquility.",
        },
        {
            icon: "/icons/support.png",
            title: "Support",
            description:
                "Raghukul Holidays and GetSetGo Holidays have achieved 100% customer satisfaction.",
        },
    ];

    return (
        <section className="w-full py-16 bg-white">
            <div className="container mx-auto px-4 max-w-7xl">
                {/* Grid of Cards */}
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
                    {features.map((feature, index) => (
                        <div
                            key={index}
                            className="group relative rounded-2xl p-8 shadow-md cursor-pointer transition-all duration-300 hover:shadow-xl bg-white border border-gray-200 hover:bg-gradient-to-br hover:from-orange-500 hover:to-orange-600"
                        >
                            {/* Icon - Top Left */}
                            <div className="mb-6">
                                <div className="w-14 h-14 flex items-center justify-center opacity-70 group-hover:opacity-100">
                                    <Image
                                        src={feature.icon}
                                        alt={feature.title}
                                        width={56}
                                        height={56}
                                        className="transition-all duration-300 group-hover:brightness-0 group-hover:invert"
                                    />
                                </div>
                            </div>

                            {/* Title */}
                            <h3 className="text-xl font-bold mb-3 transition-colors duration-300 text-gray-900 group-hover:text-white">
                                {feature.title}
                            </h3>

                            {/* Description */}
                            <p className="text-sm leading-relaxed transition-colors duration-300 text-gray-600 group-hover:text-white group-hover:text-opacity-90">
                                {feature.description}
                            </p>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
}

