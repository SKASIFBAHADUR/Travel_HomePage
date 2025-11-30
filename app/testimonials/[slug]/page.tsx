import { PageProps } from "@/types/PageProps";

interface Video {
    youtubeId: string;
    title: string;
}

export default function TestimonialPage({ params }: PageProps) {
    // In production, you'd fetch the video data from your database or API
    // For now, we'll use a simple mapping
    const videoMap: Record<string, Video> = {
        "testimonial-1": { youtubeId: "dQw4w9WgXcQ", title: "Customer Testimonial 1" },
        "testimonial-2": { youtubeId: "dQw4w9WgXcQ", title: "Customer Testimonial 2" },
        "testimonial-3": { youtubeId: "dQw4w9WgXcQ", title: "Customer Testimonial 3" },
        "testimonial-4": { youtubeId: "dQw4w9WgXcQ", title: "Amazing travel experience" },
        "testimonial-5": { youtubeId: "dQw4w9WgXcQ", title: "Highly recommended service" },
        "testimonial-6": { youtubeId: "dQw4w9WgXcQ", title: "Best trip ever" },
        "testimonial-7": { youtubeId: "dQw4w9WgXcQ", title: "Unforgettable journey" },
        "testimonial-8": { youtubeId: "dQw4w9WgXcQ", title: "Great coordination" },
        "testimonial-9": { youtubeId: "dQw4w9WgXcQ", title: "Well-planned service" },
    };

    const video = videoMap[params.slug];

    if (!video) {
        return (
            <div className="min-h-screen flex items-center justify-center">
                <h1 className="text-2xl">Video not found</h1>
            </div>
        );
    }

    return (
        <main className="min-h-screen bg-gray-50 py-16">
            <div className="container mx-auto px-4 max-w-4xl">
                <h1 className="text-3xl font-bold text-center mb-8">{video.title}</h1>

                {/* YouTube Embed */}
                <div className="relative w-full" style={{ paddingBottom: "56.25%" }}>
                    <iframe
                        className="absolute top-0 left-0 w-full h-full rounded-lg shadow-lg"
                        src={`https://www.youtube.com/embed/${video.youtubeId}?autoplay=1`}
                        title={video.title}
                        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                        allowFullScreen
                    />
                </div>

                {/* Back Button */}
                <div className="mt-8 text-center">
                    <a
                        href="/"
                        className="inline-block px-6 py-3 bg-orange-500 text-white rounded-full hover:bg-orange-600 transition-colors"
                    >
                        ← Back to Home
                    </a>
                </div>
            </div>
        </main>
    );
}
