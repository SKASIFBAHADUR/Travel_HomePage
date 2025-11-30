import Image from "next/image";
import Link from "next/link";

interface VideoCardProps {
    slug: string;
    title: string;
    youtubeId: string;
    thumbnail: string;
}

export default function VideoCard({ slug, title, youtubeId, thumbnail }: VideoCardProps) {
    return (
        <Link href={`/testimonials/${slug}`} className="block">
            <div className="w-[350px] rounded-3xl overflow-hidden shadow-md bg-white transition-transform duration-300 hover:scale-105">
                {/* Thumbnail */}
                <div className="relative">
                    <Image
                        src={thumbnail}
                        width={400}
                        height={300}
                        alt={title}
                        className="w-full h-[260px] object-cover"
                        loading="lazy"
                    />

                    {/* Play Button Overlay */}
                    <div className="absolute inset-0 flex items-center justify-center">
                        <div className="bg-red-600 w-16 h-16 rounded-full flex items-center justify-center shadow-lg transition-transform duration-300 hover:scale-110">
                            <svg
                                className="w-8 h-8 text-white ml-1"
                                viewBox="0 0 24 24"
                                fill="currentColor"
                            >
                                <path d="M8 5v14l11-7z" />
                            </svg>
                        </div>
                    </div>
                </div>

                {/* Title */}
                <div className="p-6">
                    <h3 className="text-lg font-bold text-gray-900">
                        {title}
                    </h3>
                </div>
            </div>
        </Link>
    );
}
