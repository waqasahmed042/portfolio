'use client';
import React, { useState, useEffect, useRef } from 'react';
import AOS from 'aos';
import 'aos/dist/aos.css';
import { useRouter } from 'next/navigation';
import { buttonText, powerpoint_addins } from '@/utilities/portfolio';
import { IoIosArrowDown } from "react-icons/io";
import Navbar from '@/components/Navbar';
import HeroSection from '@/components/portfolio/HeroSection';
import { PortfolioItem } from '@/utilities/type';
import PortfolioDialog from '../PortfolioItem';
import NoDataFound from '@/components/portfolio/NoDataFound';
import useScrollToSection from '@/utilities/hook/useScrollToSection';

const PowerpointAddins: React.FC = () => {
    const router = useRouter();
    const dashboardSectionRef = useRef(null);
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

    // scroll to powerpoint add-in items
    useScrollToSection(dashboardSectionRef, '/portfolio/powerpoint-addins');

    const handleButtonClick = (text: string) => {
        setActiveButton(text);
        setIsDropdownOpen(false);

        // Define the route based on the button text
        const routes: { [key: string]: string } = {
            'All Portfolio': '/portfolio',
            'Dashboards': '/portfolio/dashboards',
            'Web Applications': '/portfolio/web-applications',
            'Browser Extensions': '/portfolio/browser-extensions',
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
            <HeroSection />

            <section className="bg-gray-100" ref={dashboardSectionRef}>
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
                        {powerpoint_addins.length === 0 && (
                            <div className="text-center" data-aos="zoom-in">
                                <NoDataFound category="Outlook Add-ins" />
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
        </>
    );
};

export default PowerpointAddins;