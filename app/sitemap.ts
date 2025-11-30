import { MetadataRoute } from 'next';
import { destinations } from '@/data/destinations';
import { videoSets } from '@/data/videoSets';

export default function sitemap(): MetadataRoute.Sitemap {
    const baseUrl = 'https://getsetgoholidays.com';

    // Static pages
    const staticPages = [
        {
            url: baseUrl,
            lastModified: new Date(),
            changeFrequency: 'daily' as const,
            priority: 1,
        },
    ];

    // Dynamic destination pages
    const destinationPages = destinations.map((dest) => ({
        url: `${baseUrl}/destinations/${dest.slug}`,
        lastModified: new Date(),
        changeFrequency: 'weekly' as const,
        priority: 0.8,
    }));

    // Dynamic testimonial pages
    const testimonialPages = videoSets.flatMap((set) =>
        set.videos.map((video) => ({
            url: `${baseUrl}/testimonials/${video.slug}`,
            lastModified: new Date(),
            changeFrequency: 'monthly' as const,
            priority: 0.6,
        }))
    );

    return [...staticPages, ...destinationPages, ...testimonialPages];
}
