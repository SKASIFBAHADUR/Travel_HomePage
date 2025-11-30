"use client";
import Image from "next/image";

export default function Footer() {
    return (
        <footer className="relative w-full overflow-hidden bg-white">

            {/* ==== BACKGROUND IMAGE (FULL WIDTH) ==== */}
            <div className="relative w-full">
                <Image
                    src="/footer/background.svg"
                    alt="Footer Background"
                    width={1440}
                    height={600}
                    className="w-full h-auto object-cover"
                />

                {/* ===== CONTENT AREA OVERLAY ===== */}
                <div className="absolute inset-0 z-10 container mx-auto px-4 md:px-16 py-8 md:py-12 flex">

                    {/* LEFT SECTION - Content */}
                    <div className="w-full md:w-1/2 flex flex-col justify-between h-full pr-12 md:pr-40 md:ml-24">


                        {/* Content Blocks */}
                        <div className="space-y-6 text-sm md:text-base text-gray-800 font-medium">

                            {/* Pune */}
                            <div className="space-y-2">
                                <div className="flex items-start gap-3">
                                    <Image src="/footer/location.svg" alt="Location" width={20} height={20} className="mt-1 w-5 h-5" />
                                    <div>
                                        <h3 className="font-bold text-black text-lg">Pune</h3>
                                        <p className="leading-relaxed text-gray-700">
                                            Office No. 3, 2nd Floor, Jitendra Villa, 1194/6, Ghole Rd, near<br />
                                            Ramachandra Sabha Mandap, Sud Nagar, Shivajinagar, Pune,<br />
                                            Maharashtra 411005
                                        </p>
                                    </div>
                                </div>
                                <div className="flex items-center gap-3 ml-8">
                                    <Image src="/footer/call.svg" alt="Phone" width={20} height={20} className="w-4 h-4" />
                                    <p className="text-gray-700">+91-9881200242 | +91-8087822242</p>
                                </div>
                                <div className="flex items-center gap-3 ml-8">
                                    <Image src="/footer/mail.svg" alt="Email" width={20} height={20} className="w-4 h-4" />
                                    <p className="text-gray-700">sales@getsetgoholidays.com | info@getsetgoholidays.com</p>
                                </div>
                            </div>

                            {/* Mumbai */}
                            <div className="space-y-2">
                                <div className="flex items-start gap-3">
                                    <Image src="/footer/location.svg" alt="Location" width={20} height={20} className="mt-1 w-5 h-5" />
                                    <div>
                                        <h3 className="font-bold text-black text-lg">Mumbai</h3>
                                        <p className="leading-relaxed text-gray-700">
                                            Flat No.3, Ground Floor, Sunrise Building, 4th Pasta Lane, Colaba,<br />
                                            Mumbai – 400005.
                                        </p>
                                    </div>
                                </div>
                            </div>

                            {/* Kolhapur */}
                            <div className="space-y-2">
                                <div className="flex items-start gap-3">
                                    <Image src="/footer/location.svg" alt="Location" width={20} height={20} className="mt-1 w-5 h-5" />
                                    <div>
                                        <h3 className="font-bold text-black text-lg">Kolhapur/ Ichalkaranji</h3>
                                        <p className="leading-relaxed text-gray-700">
                                            "Yashgovind" Plot no. 79/B, Yashwant colony, Kolhapur Road,<br />
                                            Ichalkaranji. Dist. Kolhapur-416115
                                        </p>
                                    </div>
                                </div>
                                <div className="flex items-center gap-3 ml-8">
                                    <Image src="/footer/call.svg" alt="Phone" width={20} height={20} className="w-4 h-4" />
                                    <p className="text-gray-700">+91-8530040242</p>
                                </div>
                            </div>

                        </div>

                        {/* Copyright */}
                        <div className="mt-5">
                            <p className="text-xs md:text-sm text-gray-600">
                                Copyright © 2025 | All Rights Reserved By GetSetGo Holidays
                            </p>
                        </div>
                    </div>

                    {/* RIGHT SECTION - Tour Categories */}
                    <div className="w-full md:w-1/2 flex flex-col justify-start pl-0 md:pl-8 lg:pl-12 mt-8 md:mt-0">
                        <div className="flex flex-col md:flex-row gap-8 md:gap-12 lg:gap-16 text-sm md:text-base text-gray-800 font-medium">

                            {/* International Tours */}
                            <div className="space-y-3">
                                <h3 className="font-bold text-black text-lg">International Tours</h3>
                                <div className="space-y-2 text-gray-700">
                                    <p>Thailand</p>
                                    <p>Dubai</p>
                                    <p>Japan</p>
                                    <p>Singapore</p>
                                    <p>Mauritius</p>
                                </div>
                            </div>

                            {/* Discover India */}
                            <div className="space-y-3">
                                <h3 className="font-bold text-black text-lg">Discover India</h3>
                                <div className="space-y-2 text-gray-700">
                                    <p>Bhubaneshwar</p>
                                    <p>Chardham Yatra</p>
                                    <p>Kashmir</p>
                                    <p>Kerala</p>
                                    <p>Vaishnodevi</p>
                                </div>
                            </div>

                        </div>
                    </div>

                </div>
            </div>
        </footer>
    );
}
