"use client";
import { useEffect } from 'react';
import AOS from 'aos';
import Link from 'next/link';
import { Raleway, Roboto } from 'next/font/google';
import { IoIosArrowRoundForward } from 'react-icons/io';
import aboutImg from '@/public/assets/images/servicesPic.png';
import chooseImg from '@/public/assets/images/choose.png';
import Image from 'next/image';
import { services, toolsAndTechnologies } from '@/utilities/services/services';
import UIText from '@/utilities/testResource';
import { reasons } from '@/utilities/services/reasons';
import AskAI from '../ai/page';
import Contact from '../Contact';

const raleway = Raleway({
    subsets: ['latin'],
});

const roboto = Roboto({
    subsets: ['latin'],
    weight: ['400', '500'],
});

const Services: React.FC = () => {
    useEffect(() => {
        AOS.init();
    }, []);

    return (
        <>
            {/* hero section */}
            <section>
                <div data-aos="fade-up" className="flex  items-center justify-center bg-gray-100 hero-section">
                    <div className="container mx-auto flex flex-col md:flex-row items-center justify-center px-4 lg:px-8 space-y-6 md:space-y-0">
                        {/* Left section (text + buttons) */}
                        <div className="w-full md:w-1/2 mt-4 flex flex-col items-center md:items-start justify-center space-y-6">
                            <h2 className={`text-3xl font-bold mb-2 relative group ${raleway.className}`}>
                                {UIText.services.title}
                                <span className="text-underline ms-2 absolute left-0 bottom-[-4px] rounded h-1 w-12 transition-all duration-500 group-hover:w-44"></span>
                            </h2>
                            <p className="text-center">
                                <i>&quot;{UIText.services.tag_line}&quot;</i>
                            </p>
                            <p className={`text-lg text-center md:text-left ${roboto.className}`}>{UIText.services.description}</p>
                            <div>
                                <Link href="/contact" passHref>
                                    <button type='button' className="hero-btn-resume text-white font-bold py-2 px-5 rounded">
                                        {UIText.contact.title}
                                    </button>
                                </Link>
                            </div>
                        </div>

                        {/* Right section (image with SVG background) */}
                        <div className="w-full md:w-1/2 flex justify-center items-center relative">
                            <Image src={aboutImg.src} className='rounded-3xl' alt='about-hero' width={350} height={350} />
                        </div>
                    </div>
                </div>
            </section>

            <div className="flex items-center justify-center bg-gray-100">
                <div className="container">
                    {/* Services Section */}
                    <section>
                        <div data-aos="fade-up" className="container mx-auto px-4 lg:px-8">
                            {/* Title */}
                            <h2 className={`text-3xl mt-5 font-bold mb-10 inline-block relative group ${raleway.className}`}>
                                {UIText.services.what_i_offer}
                                <span className="text-underline ms-1 absolute left-0 bottom-[-4px] rounded  h-1  w-12 transition-all duration-500 group-hover:w-44"></span>
                            </h2>

                            {/* Highlights List */}
                            <div className={`grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6  ${roboto.className}`}>
                                {
                                    services.map((item, index) => {
                                        return (
                                            <div key={index} className="bg-white shadow-lg rounded-lg p-6 flex flex-col items-center text-center service-card "  >
                                                <div className="text text-4xl text-white mb-4 blob-background-container">
                                                    <div className='blob-background flex items-center justify-center' style={{ backgroundImage: `url(${typeof item.img === "string" ? item.img : item.img.src})` }}>
                                                        <item.dataIcon />
                                                    </div>
                                                </div>
                                                <h3 className="text-lg font-medium mb-2">{item.title}</h3>
                                                <p className="text-gray-600">{item.description}</p>
                                            </div>
                                        );
                                    })
                                }
                            </div>
                        </div>
                    </section>

                    {/* tools and Technologies section */}
                    <section className=' py-10'>
                        <div data-aos="zoom-in" className='container mx-auto px-4 lg:px-8'>
                            <h2 className={`text-3xl mt-5 font-bold  inline-block relative group ${raleway.className}`}>
                                {UIText.services.tools_and_technologies}
                                <span className="text-underline ms-2 absolute left-0 bottom-[-4px] rounded  h-1  w-12 transition-all duration-500 group-hover:w-72"></span>
                            </h2>

                            <div className="mt-16 flex flex-wrap gap-4 justify-center items-center">
                                {toolsAndTechnologies.map((tool) => (
                                    <div className="tool-card" key={tool.id}>
                                        {tool.type === 'icon' ? (
                                            <tool.component style={{ color: tool.color || 'inherit' }} />
                                        ) : (
                                            <Image src={tool.src} width={80} height={80} alt={tool.alt} />
                                        )}
                                    </div>
                                ))}
                            </div>
                        </div>
                    </section>

                    <section className="bg-gray-100 py-10">
                        <div data-aos="fade-up" className="container mx-auto px-4 lg:px-8">
                            {/* Title */}
                            <h2 className={`text-3xl font-bold mb-10 inline-block relative group ${raleway.className}`}>
                                {UIText.services.why_choose_me}
                                <span className="text-underline ms-2 absolute left-0 bottom-[-4px] rounded  h-1  w-12 transition-all duration-500 group-hover:w-60"></span>
                            </h2>

                            <div className={`flex items-center justify-around choose-section bg-gray-700 ${roboto.className}`}>
                                {/* Reasons List */}
                                <div className="flex flex-col p-6 justify-center gap-2">
                                    {reasons.map((reason, index) => (
                                        <div key={index} className="flex items-center">
                                            <div className="bullet-point text-white">
                                                <IoIosArrowRoundForward size={40} />
                                            </div>
                                            <div className="text-white">
                                                <h4 className="ms-3 mt-1 text-xl">{reason}</h4>
                                            </div>
                                        </div>
                                    ))}
                                </div>

                                {/* Image Section */}
                                <div className="choose-img-container">
                                    <Image src={chooseImg.src} alt="about-hero" width={350} height={350} className="z-10" />
                                </div>
                            </div>
                        </div>
                    </section>
                </div>
            </div>

            {/* contact section */}
            <Contact titlePre="Ready to " highlight="Start a Project " titlePost="or need more info?" />

            {/* floating ask ai component */}
            <AskAI />
        </>
    )
}

export default Services;