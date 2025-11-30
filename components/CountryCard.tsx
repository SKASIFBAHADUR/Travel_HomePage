import Image from "next/image";
import Link from "next/link";

interface CountryCardProps {
    name: string;
    image: string;
    slug: string;
}

export default function CountryCard({ name, image, slug }: CountryCardProps) {
    return (
        <Link href={`/destinations/${slug}`}>
            <div className="relative w-[260px] h-[360px] rounded-3xl overflow-hidden shadow-lg cursor-pointer group">
                <Image
                    src={image}
                    alt={name}
                    width={300}
                    height={400}
                    className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                    loading="lazy"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent opacity-80"></div>
                <h3 className="text-white text-2xl font-bold absolute bottom-6 left-6 drop-shadow-xl">
                    {name}
                </h3>
            </div>
        </Link>
    );
}
