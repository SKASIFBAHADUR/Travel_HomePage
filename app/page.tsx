import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import Stats from "@/components/Stats";
import IncredibleIndia from "@/components/IncredibleIndia";
import JourneyHeader from "@/components/JourneyHeader";
import { countrySets } from "@/data/countrySets";
import { destinations } from "@/data/destinations";
import { videoSets } from "@/data/videoSets";
import Image from "next/image";
import dynamic from "next/dynamic";
import StructuredData from "@/components/StructuredData"; // Import StructuredData

// Lazy load heavy components for optimal performance
const Explore = dynamic(() => import("@/components/Explore"), {
    loading: () => <div className="h-20 w-full bg-gray-100 animate-pulse rounded-lg"></div>
});

const DestinationCarousel = dynamic(() => import("@/components/DestinationCarousel"), {
    loading: () => <div className="h-64 w-full bg-gray-100 animate-pulse rounded-lg"></div>
});

const Favourites = dynamic(() => import("@/components/Favourites"), {
    loading: () => <div className="h-20 w-full bg-gray-100 animate-pulse rounded-lg"></div>
});

const Testimonials = dynamic(() => import("@/components/Testimonials"), {
    loading: () => <div className="h-96 w-full bg-gray-100 animate-pulse rounded-lg"></div>
});

const VoicesOfClients = dynamic(() => import("@/components/VoicesOfClients"), {
    loading: () => <div className="h-64 w-full bg-gray-100 animate-pulse rounded-lg"></div>
});

const VideoCarousel = dynamic(() => import("@/components/VideoCarousel"), {
    loading: () => <div className="h-64 w-full bg-gray-100 animate-pulse rounded-lg"></div>
});

const CountryCarousel = dynamic(() => import("@/components/CountryCarousel"), {
    loading: () => <div className="h-64 w-full bg-gray-100 animate-pulse rounded-lg"></div>
});

const WhyChooseUs = dynamic(() => import("@/components/WhyChooseUs"), {
    loading: () => <div className="h-64 w-full bg-gray-100 animate-pulse rounded-lg"></div>
});

const Grade = dynamic(() => import("@/components/Grade"), {
    loading: () => <div className="h-64 w-full bg-gray-100 animate-pulse rounded-lg"></div>
});

const Footer = dynamic(() => import("@/components/Footer"), {
    loading: () => <div className="h-96 w-full bg-gray-100 animate-pulse rounded-lg"></div>
});


export default function Home() {
    return (
        <main className="min-h-screen bg-white text-black">
            <StructuredData />
            <h1 className="sr-only">GetSetGo Holidays - Premium Tour Packages for Dubai, Thailand & More</h1>

            {/* Navbar */}
            <Navbar />

            {/* Hero + Stats Section */}
            <div className="relative">
                <Hero />
                <Stats />
            </div>

            {/* Incredible India Section */}
            <div className="mt-24 bg-white">
                <IncredibleIndia />

                {/* First Carousel Section */}
                <section className="pb-16 bg-white">
                    <DestinationCarousel cards={destinations} />
                </section>

                {/* Explore Section */}
                <Explore />

                {/* Second Carousel Section */}
                <section className="pb-16 bg-white">
                    <DestinationCarousel cards={destinations} />
                </section>

                {/* Journey Header Section */}
                <JourneyHeader />

                {/* Third Carousel Section */}
                <section className="pb-16 bg-white">
                    <DestinationCarousel cards={destinations} />
                </section>

                {/* Testimonials Section */}
                <Testimonials />

                {/* Voices of Our Clients Section */}
                <div className="mt-20">
                    <VoicesOfClients />
                    <div className="container mx-auto px-4 mt-8">
                        <VideoCarousel sets={videoSets} />
                    </div>
                </div>

                {/* Favourites Section */}
                <Favourites />

                {/* Country Carousel Section */}
                <section className="mt-10 mb-20">
                    <CountryCarousel sets={countrySets} />
                </section>

                {/* Why Choose Us Section */}
                <WhyChooseUs />
            </div>

            {/* Grade Section */}
            <Grade />

            {/* Logo Section - Space between Grade and Footer */}
            <div className="py-12 md:py-16 bg-white flex justify-start items-center pl-4 md:pl-8 lg:pl-16">
                <Image
                    src="/footer/GetSetGo-Holidays-logo1 1.png"
                    alt="GetSetGo Holidays"
                    width={200}
                    height={80}
                    className="w-40 md:w-48 h-auto object-contain"
                />
            </div>

            {/* Footer */}
            <Footer />

        </main>
    );
}
