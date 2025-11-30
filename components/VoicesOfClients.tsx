import React from "react";

export default function VoicesOfClients() {
    return (
        <section className="w-full py-16 bg-white">
            <div className="container mx-auto px-4">
                {/* Header */}
                <div className="text-center mb-12">
                    {/* Small Label */}
                    <div className="flex items-center justify-center gap-4 mb-4">
                        <div className="h-[1px] w-16 bg-cyan-400"></div>
                        <h3 className="text-cyan-400 uppercase tracking-widest text-sm font-semibold">
                            Voices of Our Clients
                        </h3>
                        <div className="h-[1px] w-16 bg-cyan-400"></div>
                    </div>

                    {/* Main Heading */}
                    <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
                        Real Experiences, Real Impact
                    </h2>

                    {/* Subtitle */}
                    <p className="text-gray-600 text-base md:text-lg max-w-2xl mx-auto">
                        Watch real experiences and insights shared by our clients
                    </p>
                </div>
            </div>
        </section>
    );
}
