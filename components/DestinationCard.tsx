import Image from "next/image";
import Link from "next/link";

interface Amenity {
    icon: string;
    label: string;
    available: boolean;
}

interface DestinationCardProps {
    slug: string;
    title: string;
    image: string;
    days: number;
    nights: number;
    price: number;
    amenities: Amenity[];
}

export default function DestinationCard({
    slug,
    title,
    image,
    days,
    nights,
    price,
    amenities,
}: DestinationCardProps) {
    return (
        <Link href={`/destinations/${slug}`} className="block">
            <article className="bg-white rounded-[20px] shadow-lg overflow-hidden w-[360px] hover:shadow-2xl transition">
                {/* Image */}
                <Image
                    src={image}
                    alt={title}
                    width={360}
                    height={240}
                    className="rounded-t-[20px] object-cover"
                    loading="lazy"
                />

                <div className="p-5">
                    {/* Title */}
                    <h3 className="text-xl font-bold">{title}</h3>

                    {/* Days / Nights */}
                    <div className="mt-3 inline-flex items-center gap-4 bg-gray-100 px-4 py-2 rounded-xl">
                        <span>☀ {days} Days</span>
                        <span>🌙 {nights} Nights</span>
                    </div>

                    {/* Amenities Icons */}
                    <div className="flex gap-4 mt-4">
                        {amenities.map((a, i) => (
                            <div key={i} className="w-14 text-center">
                                <Image src={a.icon} alt={a.label} width={36} height={36} loading="lazy" />
                                <div className="text-xs mt-1">{a.label}</div>
                                <div className="mt-1">
                                    {a.available ? (
                                        <span className="text-green-600 font-bold">✔</span>
                                    ) : (
                                        <span className="text-red-500 font-bold">✘</span>
                                    )}
                                </div>
                            </div>
                        ))}
                    </div>

                    {/* Price + Button */}
                    <div className="flex items-center justify-between mt-6">
                        <div>
                            <p className="text-sm text-gray-500">Price Per Person</p>
                            <p className="text-2xl font-extrabold">
                                ₹{Number(price).toLocaleString("en-IN")}
                            </p>
                        </div>

                        <button className="bg-gradient-to-r from-orange-500 to-red-500 text-white px-6 py-2 rounded-xl shadow-md">
                            Tour Details
                        </button>
                    </div>
                </div>
            </article>
        </Link>
    );
}

