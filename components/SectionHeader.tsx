interface SectionHeaderProps {
    label: string;
    title: string;
    description: string;
}

export default function SectionHeader({ label, title, description }: SectionHeaderProps) {
    return (
        <section className="pt-32 pb-12 text-center bg-white">
            <div className="max-w-4xl mx-auto px-4">
                {/* Label with Lines */}
                <div className="flex items-center justify-center gap-4 mb-6">
                    <div className="h-0.5 w-16 bg-cyan-500"></div>
                    <span className="text-cyan-500 font-bold tracking-widest uppercase text-sm">{label}</span>
                    <div className="h-0.5 w-16 bg-cyan-500"></div>
                </div>

                {/* Main Heading */}
                <h2 className="text-4xl md:text-5xl font-bold text-black mb-6 tracking-tight">
                    {title}
                </h2>

                {/* Description */}
                <p className="text-gray-600 text-lg max-w-3xl mx-auto">
                    {description}
                </p>
            </div>
        </section>
    );
}

