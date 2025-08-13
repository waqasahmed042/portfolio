import React from 'react';
import Image from 'next/image';
import UIText from '@/utilities/testResource';
import { raleway } from '@/utilities/hook/useFonts';
import { trustedCompanies } from '@/utilities/home/trustedCompanies';

const TrustedCompanies: React.FC = () => {
    return (
        <>
            <section className="bg-gray-100 py-10">
                <div data-aos="fade-up" className="container mx-auto px-4 lg:px-8">
                    {/* Title */}
                    <h2 className={`text-3xl font-bold mb-10 inline-block relative group ${raleway.className}`}>
                        {UIText.home.trusted_companies}
                        <span className="text-underline ms-2 absolute left-0 bottom-[-4px] rounded h-1 w-12 transition-all duration-500 group-hover:w-64"></span>
                    </h2>

                    <div className="marque-container h-full w-full flex items-center justify-center text-base">
                        <div className="Marquee w-full box-border p-4 font-light flex items-center overflow-hidden">
                            <div className="Marquee-content flex animate-marquee hover:animate-pause">
                                {[...trustedCompanies, ...trustedCompanies].map((logo, index) => (
                                    <div
                                        key={index}
                                        className="Marquee-tag w-52 mx-2 p-2 inline-flex items-center justify-center transition-all duration-900 ease-in-out hover:scale-110"
                                    >
                                        <Image src={logo.src} alt={logo.alt} />
                                    </div>
                                ))}
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </>
    );
};

export default TrustedCompanies;