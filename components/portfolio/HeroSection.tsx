import React from 'react';
import { raleway, roboto } from '@/utilities/hook/useFonts';
import Link from 'next/link';
import Image from 'next/image';
import UIText from '@/utilities/testResource';
import portfolioPic from "@/public/assets/images/portfolioPic.png";

const HeroSection: React.FC = () => {
    return (
        <>
            <section>
                <div data-aos="fade-up" className="flex items-center justify-center bg-gray-100 hero-section">
                    <div className="container mx-auto flex flex-col md:flex-row items-center justify-center px-4 space-y-6 md:space-y-0">
                        {/* Left Section */}
                        <div className="w-full md:w-1/2 mt-4 flex flex-col items-center md:items-start justify-center space-y-6 lg:px-20">
                            <h2 className={`text-3xl font-bold mb-2 relative group ${raleway.className}`}>
                                {UIText.projects.title}
                                <span className="text-underline ms-2 absolute left-0 bottom-[-4px] rounded h-1 w-12 transition-all duration-500 group-hover:w-40"></span>
                            </h2>
                            <p className={`text-lg text-center md:text-left ${roboto.className}`}>{UIText.projects.description}</p>
                            <div>
                                <Link href="/contact" passHref>
                                    <button type="button" className="hero-btn-resume text-white font-bold py-2 px-5 rounded">
                                        {UIText.contact.title}
                                    </button>
                                </Link>
                            </div>
                        </div>

                        {/* Right Section */}
                        <div className="w-full md:w-1/2 flex justify-center items-center relative">
                            <Image src={portfolioPic.src} className="rounded-3xl" alt="about-hero" width={350} height={350} />
                        </div>
                    </div>
                </div>
            </section>
        </>
    )
}

export default HeroSection;
