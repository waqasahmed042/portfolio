'use client';
import React, { useState, useEffect } from 'react';
import Image from 'next/image';
import AOS from 'aos';
import 'aos/dist/aos.css';
import { Raleway, Roboto } from 'next/font/google';
import Link from 'next/link';
import { useRouter } from 'next/navigation';
import Toast from '@/components/Toast';
import { buttonText, demoLoomURLs, powerpoint_addins } from '@/utilities/portfolio';
import portfolioPic from "@/public/assets/images/portfolioPic.png";
import { IoIosArrowDown } from "react-icons/io";
import Navbar from '@/components/Navbar';
import UIText from '@/utilities/testResource';
import { PortfolioItem } from '@/utilities/type';
import PortfolioDialog from '../PortfolioItem';

const raleway = Raleway({
    subsets: ["latin"],
});

const roboto = Roboto({
    subsets: ["latin"],
    weight: ["400", "500"],
});

const PowerpointAddins: React.FC = () => {
    const router = useRouter();
    const [infoMessage, setInfoMessage] = useState('');
    const [activeButton, setActiveButton] = useState<string>('PowerPoint Add-ins');
    const [isDropdownOpen, setIsDropdownOpen] = useState<boolean>(false);
    const [isSmallScreen, setIsSmallScreen] = useState<boolean>(false);
    const [selectedCard, setSelectedCard] = useState<PortfolioItem | null>(null);

    useEffect(() => {
        AOS.init({ duration: 1200 });
    }, []);

    useEffect(() => {
        const handleResize = () => {
            setIsSmallScreen(window.innerWidth < 500);
        };

        handleResize(); // Check initial size
        window.addEventListener('resize', handleResize);

        return () => {
            window.removeEventListener('resize', handleResize);
        };
    }, []);

    const handlePreviewClick = (card: PortfolioItem) => {
        setSelectedCard(card);
    };

    const handleDemoClick = (item: { addin_name: string }) => {
        setInfoMessage("");

        setTimeout(() => {
            const demo = demoLoomURLs.find(d => d.addin_name === item.addin_name);
            if (demo && demo.demoLoomURL) {
                window.open(demo.demoLoomURL, "_blank");
            } else {
                setInfoMessage("Demo not available for this project");
            }
        }, 100)
    };

    const handleButtonClick = (text: string) => {
        setActiveButton(text);
        setIsDropdownOpen(false);

        // Define the route based on the button text
        const routes: { [key: string]: string } = {
            'All Portfolio': '/portfolio',
            'Dashboards': '/portfolio/dashboards',
            'Office Add-ins': '/portfolio/office-addins',
            'Google Add-ons': '/portfolio/google-addons',
            'Gmail Add-ons': '/portfolio/gmail-addons',
            'Google Sheet Add-ons': '/portfolio/google-sheet-addons',
            'Google Docs Add-ons': '/portfolio/google-docs-addons',
            'Google Form Add-ons': '/portfolio/google-forms-addons',
            'Word Add-ins': '/portfolio/word-addins',
            'Excel Add-ins': '/portfolio/excel-addins',
            'PowerPoint Add-ins': '/portfolio/powerpoint-addins',
            'Outlook Add-ins': '/portfolio/outlook-addins',
        };

        const route = routes[text] || '/portfolio'; // Default route
        router.push(route);
    };

    const closeDialog = () => {
        setSelectedCard(null);
    };

    return (
        <>
            <Navbar />
            {/* Hero Section */}
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

            <section className="bg-gray-100">
                <div className="mx-4 md:mx-0">
                    {isSmallScreen ? (
                        <div className="relative">
                            <button
                                type="button"
                                onClick={() => setIsDropdownOpen(!isDropdownOpen)}
                                className="w-full flex flex-row justify-between items-center bg-gradient-to-br from-[#ff7e5f] to-[#d73e0f] text-white font-semibold py-2 px-4 rounded"
                            >
                                <span className="mr-1">{activeButton}</span>
                                <IoIosArrowDown />
                            </button>
                            {isDropdownOpen && (
                                <div className="absolute mt-2 w-full z-20 rounded bg-white shadow-lg">
                                    {buttonText.map((text, index) => (
                                        <button
                                            type="button"
                                            key={index}
                                            onClick={() => handleButtonClick(text)}
                                            className="block w-full text-left px-4 py-2 hover:bg-gradient-to-br from-[#ff7e5f] to-[#d73e0f] hover:text-white transition duration-300"
                                        >
                                            {text}
                                        </button>
                                    ))}
                                </div>
                            )}
                        </div>
                    ) : (
                        <div className="flex flex-wrap justify-center mx-2 gap-4">
                            {buttonText.map((text, index) => (
                                <button
                                    type="button"
                                    key={index}
                                    onClick={() => handleButtonClick(text)}
                                    className={`flex items-center justify-center font-bold text-xl px-4 py-3 rounded-full border transition-all duration-300 hover:bg-gradient-to-br from-[#ff7e5f] to-[#d73e0f] hover:text-white hover:border-none
                                        ${activeButton === text ? 'bg-gradient-to-br from-[#ff7e5f] to-[#d73e0f] text-white' : 'border-[#d73e0f] text-black'}`}
                                >
                                    {text}
                                </button>
                            ))}
                        </div>
                    )}
                </div>

                {/* PowerPoint Addin Items */}
                <section className="py-16 z-50 px-4">
                    <div className="container mx-auto">
                        {powerpoint_addins.length === 0 ? (
                            <div className="text-center">
                                <p className="text-lg font-semibold text-gray-500">{UIText.projects.not_found}</p>
                            </div>
                        ) : (
                            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10">
                                {powerpoint_addins.map((item, index) => (
                                    <div
                                        key={index}
                                        className="group bg-white relative hover:shadow-lg shadow-md rounded-lg overflow-hidden"
                                        data-aos="fade-up"
                                    >
                                        {/* Image */}
                                        <Image className="w-full h-60 object-cover" src={item.img[0]} alt={item.addin_type} />

                                        {/* Overlay */}
                                        <div className="absolute top-0 left-0 right-0 bottom-0 bg-gradient-to-br from-[#ff7e5f] to-[#d73e0f] rounded opacity-0 transition duration-300 ease-in-out group-hover:opacity-60"></div>

                                        {/* Buttons (Appear on Hover) */}
                                        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 flex space-x-3 opacity-0 group-hover:opacity-100 transition duration-300">
                                            <button
                                                type="button"
                                                onClick={() => handlePreviewClick(item)}
                                                className="bg-white text-[#d73e0f] px-4 py-2 rounded-lg font-bold hover:bg-[#d73e0f] hover:text-white"
                                            >
                                                {UIText.projects.preview_button}
                                            </button>
                                            <button
                                                type="button"
                                                onClick={() => handleDemoClick(item)}
                                                className="bg-white text-[#d73e0f] px-4 py-2 rounded-lg font-bold hover:bg-[#d73e0f] hover:text-white"
                                            >
                                                {UIText.projects.demo_button}
                                            </button>
                                        </div>

                                        {/* Text Content */}
                                        <div className="p-4 flex flex-col items-center justify-between relative">
                                            <h3 className="text-lg font-medium group-hover:text-white">{item.addin_name}</h3>
                                            <span className="text-sm font-bold text-[#d73e0f] group-hover:text-white">{item.addin_type}</span>
                                        </div>
                                    </div>
                                ))}
                            </div>
                        )}
                    </div>
                </section>
            </section>

            {/* Dialog for selected card */}
            {selectedCard && (
                <PortfolioDialog
                    addin_name={selectedCard.addin_name}
                    addin_images={selectedCard.img}
                    addin_title={selectedCard.addin_purpose}
                    addin_description_1={selectedCard.addin_description_1}
                    addin_description_2={selectedCard.addin_description_2}
                    skills_and_deliverables={selectedCard.skills_and_deliverables}
                    tags={selectedCard.tags}
                    closeDialog={closeDialog}
                />
            )}

            {/* show toast info message */}
            {infoMessage && (
                <Toast
                    infoMessage={infoMessage}
                    errorMessage={""}
                    successMessage={""}
                />
            )}
        </>
    );
};

export default PowerpointAddins;