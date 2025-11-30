import Image from "next/image";

export default function Testimonials() {
    return (
        <section className="w-full py-16 bg-white flex justify-center">
            <div className="w-full max-w-[1117px] h-[486px] flex flex-row items-center justify-center relative mx-4">

                {/* Left Side - Video Thumbnail (Smaller & Overlapping) */}
                <div className="w-[380px] h-[380px] bg-black flex flex-col items-center justify-center p-6 relative z-20 rounded-[30px] shadow-2xl mr-[-60px] flex-shrink-0">
                    <div className="text-center relative transform scale-90">
                        {/* "a" */}
                        <span className="absolute -top-8 left-4 font-serif italic text-4xl text-white">a</span>

                        {/* "glimps" */}
                        <h3 className="text-7xl font-bold text-white tracking-tighter leading-none font-serif relative z-10">
                            glimps
                        </h3>

                        <div className="flex items-baseline justify-center mt-[-10px]">
                            {/* "of" */}
                            <span className="font-serif italic text-3xl text-white mr-2">of</span>

                            {/* "Japan" */}
                            <span className="font-sans font-bold text-7xl text-white tracking-tight">Japan</span>
                        </div>

                        {/* "Tour" */}
                        <span className="font-cursive text-yellow-400 text-6xl absolute -bottom-10 right-0 z-20 transform -rotate-6">
                            Tour
                        </span>
                    </div>

                    <button className="mt-10 border border-orange-500 text-white px-6 py-2 rounded hover:bg-orange-500 transition uppercase tracking-wider text-xs z-30">
                        Watch Video
                    </button>
                </div>

                {/* Right Side - Testimonials (Larger Background) */}
                <div className="w-[750px] h-full bg-gradient-to-br from-[#4a3b89] to-[#2d1b69] p-8 pl-20 flex flex-col items-center justify-center text-center rounded-[30px] relative z-10 shadow-lg">

                    <h2 className="text-2xl mb-8 font-light text-white">
                        Our Client’s words <span className="text-yellow-400 font-bold italic relative inline-block">
                            inspire
                            <svg className="absolute w-full h-2 bottom-[-2px] left-0 text-yellow-400" viewBox="0 0 100 10" preserveAspectRatio="none">
                                <path d="M0 5 Q 50 10 100 5" stroke="currentColor" strokeWidth="3" fill="none" />
                            </svg>
                        </span> us every day.
                    </h2>

                    {/* Avatars Circle */}
                    <div className="relative w-full max-w-sm h-48 mb-6 flex items-center justify-center">
                        {/* Central Large Avatar (Image 15) */}
                        <div className="relative z-10">
                            <div className="w-24 h-24 rounded-full border-4 border-yellow-400 p-1 bg-white overflow-hidden shadow-xl">
                                <Image src="/images/image 15.png" alt="Akash Rubix" width={96} height={96} className="w-full h-full object-cover rounded-full" />
                            </div>
                            <div className="absolute -bottom-2 -right-2 bg-yellow-400 text-black p-1.5 rounded-full shadow-lg text-xs">
                                👍
                            </div>
                        </div>

                        {/* Floating Avatars (Images 16-21) */}
                        <div className="absolute top-0 left-16 w-12 h-12 rounded-full overflow-hidden border-2 border-white/30 opacity-80">
                            <Image src="/images/image 16.png" alt="User" width={48} height={48} className="w-full h-full object-cover" />
                        </div>
                        <div className="absolute top-2 right-20 w-10 h-10 rounded-full overflow-hidden border-2 border-white/30 opacity-70">
                            <Image src="/images/image 17.png" alt="User" width={40} height={40} className="w-full h-full object-cover" />
                        </div>
                        <div className="absolute bottom-8 left-10 w-9 h-9 rounded-full overflow-hidden border-2 border-white/30 opacity-60">
                            <Image src="/images/image 18.png" alt="User" width={36} height={36} className="w-full h-full object-cover" />
                        </div>
                        <div className="absolute bottom-2 right-24 w-12 h-12 rounded-full overflow-hidden border-2 border-white/30 opacity-80">
                            <Image src="/images/image 19.png" alt="User" width={48} height={48} className="w-full h-full object-cover" />
                        </div>
                        <div className="absolute top-1/2 right-4 transform -translate-y-1/2 w-9 h-9 rounded-full overflow-hidden border-2 border-white/30 opacity-60">
                            <Image src="/images/image 20.png" alt="User" width={36} height={36} className="w-full h-full object-cover" />
                        </div>
                        <div className="absolute top-1/2 left-4 transform -translate-y-1/2 w-10 h-10 rounded-full overflow-hidden border-2 border-white/30 opacity-60">
                            <Image src="/images/image 21.png" alt="User" width={40} height={40} className="w-full h-full object-cover" />
                        </div>
                    </div>

                    {/* Quote */}
                    <p className="text-gray-300 italic mb-3 max-w-md text-sm leading-relaxed">
                        “Excellent time management by this operator, extremely knowledgeable and well respected in tourist places, we had never felt worried or uneasy with these guys.”
                    </p>

                    <h4 className="text-lg font-bold text-white">Akash Rubix</h4>

                </div>
            </div>
        </section>
    );
}
