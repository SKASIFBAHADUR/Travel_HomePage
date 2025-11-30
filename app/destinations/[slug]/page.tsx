import Image from "next/image";
import { destinations } from "@/data/destinations";
import { PageProps } from "@/types/PageProps";

interface Destination {
    slug: string;
    title: string;
    image: string;
    days: number;
    nights: number;
    price: number;
    short: string;
    amenities: Array<{
        icon: string;
        label: string;
        available: boolean;
    }>;
}

export async function generateStaticParams() {
    return destinations.map((d) => ({ slug: d.slug }));
}

export default function DestinationPage({ params }: PageProps) {
    const { slug } = params;

    const dest = destinations.find((d) => d.slug === slug) as Destination | undefined;

    if (!dest) {
        return <div className="p-10 text-center text-xl">Destination not found</div>;
    }

    return (
        <main className="p-10 max-w-4xl mx-auto">
            <h1 className="text-3xl font-bold mb-4">{dest.title}</h1>

            <Image
                src={dest.image}
                alt={dest.title}
                width={1200}
                height={600}
                className="rounded-lg object-cover w-full h-auto"
            />

            <p className="mt-4 text-gray-700">{dest.short}</p>

            <div className="mt-6 flex gap-6">
                <div>
                    <p className="text-sm text-gray-500">Duration</p>
                    <p className="font-bold">
                        {dest.days} Days / {dest.nights} Nights
                    </p>
                </div>

                <div>
                    <p className="text-sm text-gray-500">Price</p>
                    <p className="font-bold">
                        ₹{Number(dest.price).toLocaleString("en-IN")}
                    </p>
                </div>
            </div>

            <h2 className="mt-8 text-xl font-semibold">Amenities</h2>
            <div className="flex gap-4 mt-3 flex-wrap">
                {dest.amenities.map((a, i) => (
                    <div key={i} className="flex items-center gap-2 p-3 border rounded-lg bg-white shadow">
                        <Image src={a.icon} alt={a.label} width={36} height={36} />
                        <div>
                            <div className="text-sm">{a.label}</div>
                            <div className={a.available ? "text-green-600" : "text-red-500"}>
                                {a.available ? "Included" : "Not Included"}
                            </div>
                        </div>
                    </div>
                ))}
            </div>

            <div className="mt-8">
                <button className="bg-orange-500 hover:bg-orange-600 text-white px-6 py-3 rounded-lg">
                    Book Now
                </button>
            </div>
        </main>
    );
}

