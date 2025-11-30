export default function Stats() {
    return (
        <section aria-label="Travel statistics" className="absolute left-1/2 -translate-x-1/2 bottom-0 translate-y-1/2 z-30 w-full">
            <div className="max-w-5xl mx-auto px-4">
                <div className="bg-white rounded-2xl shadow-2xl py-6 px-8">
                    <div className="grid grid-cols-2 md:grid-cols-5 gap-6 md:gap-8">
                        {/* Rating */}
                        <div className="flex items-center gap-3">
                            <div className="text-4xl">⭐</div>
                            <div>
                                <div className="text-2xl font-bold text-gray-900">4.6</div>
                                <div className="text-sm text-gray-600">Rated</div>
                            </div>
                        </div>

                        {/* Tours & Travels */}
                        <div className="flex items-center gap-3">
                            <div className="text-4xl">🚐</div>
                            <div>
                                <div className="text-2xl font-bold text-gray-900">5700+</div>
                                <div className="text-sm text-gray-600">Tours & Travels</div>
                            </div>
                        </div>

                        {/* Happy Customers */}
                        <div className="flex items-center gap-3">
                            <div className="text-4xl">🤝</div>
                            <div>
                                <div className="text-2xl font-bold text-gray-900">20000+</div>
                                <div className="text-sm text-gray-600">Happy Customers</div>
                            </div>
                        </div>

                        {/* Worldwide Destinations */}
                        <div className="flex items-center gap-3">
                            <div className="text-4xl">🌍</div>
                            <div>
                                <div className="text-2xl font-bold text-gray-900">100+</div>
                                <div className="text-sm text-gray-600">Worldwide Destinations</div>
                            </div>
                        </div>

                        {/* Wild Camping */}
                        <div className="flex items-center gap-3">
                            <div className="text-4xl">🏕️</div>
                            <div>
                                <div className="text-2xl font-bold text-gray-900">1000+</div>
                                <div className="text-sm text-gray-600">Wild Camping</div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}
