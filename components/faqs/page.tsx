'use client';
import React, { useState, useEffect } from 'react';
import AOS from 'aos';
import 'aos/dist/aos.css';
import Image from 'next/image';
import Link from 'next/link';
import UIText from '@/utilities/testResource';
import { Raleway, Roboto } from 'next/font/google';
import aboutImg from '@/public/assets/images/faqsPic.jpg';
import { IoIosArrowDown, IoIosArrowUp } from 'react-icons/io';
import { wordAddinFAQs, excelAddinFAQs, powerpointAddinFAQs, outlookAddinFAQs, gmailAddinFAQs, googleSheetAddinFAQs, googleDocsAddinFAQs, googleFormsAddinFAQs, fullStackDevelopmentFAQs } from '@/utilities/faqs';
import AskAI from '../ai/page';

const raleway = Raleway({
    subsets: ['latin'],
});

const roboto = Roboto({
    subsets: ['latin'],
    weight: ['400', '500'],
});

const FAQs: React.FC = () => {
    const [fullStackDevelopment, setFullStackDevelopment] = useState(true);
    const [openOffice, setOpenOffice] = useState(false);
    const [openGoogle, setOpenGoogle] = useState(false);
    const [selectedCategory, setSelectedCategory] = useState('fullStack');
    const [openFAQ, setOpenFAQ] = useState<number | null>(0);
    const [faqList, setFaqList] = useState(fullStackDevelopmentFAQs);

    useEffect(() => {
        AOS.init({ duration: 1200 });
    }, []);

    const toggleFullStackDevelopment = () => {
        if (fullStackDevelopment) {
            // If already open, close it
            setFullStackDevelopment(false);
        } else {
            // Open and close other sections
            setFullStackDevelopment(true);
            setOpenOffice(false);
            setOpenGoogle(false);
            setSelectedCategory('fullStack');
            setFaqList(fullStackDevelopmentFAQs);
        }
    };

    const toggleOffice = () => {
        setOpenOffice(!openOffice);
        if (openGoogle) setOpenGoogle(false);
    };

    const toggleGoogle = () => {
        setOpenGoogle(!openGoogle);
        if (openOffice) setOpenOffice(false);
    };

    const handleCategoryClick = (category: string) => {
        setOpenFAQ(0);
        setSelectedCategory(category);
        setFullStackDevelopment(false);

        // Update the FAQ list based on the selected category
        switch (category) {
            case 'word':
                setFaqList(wordAddinFAQs);
                break;
            case 'excel':
                setFaqList(excelAddinFAQs);
                break;
            case 'powerpoint':
                setFaqList(powerpointAddinFAQs);
                break;
            case 'outlook':
                setFaqList(outlookAddinFAQs);
                break;
            case 'gmail':
                setFaqList(gmailAddinFAQs);
                break;
            case 'sheet':
                setFaqList(googleSheetAddinFAQs);
                break;
            case 'docs':
                setFaqList(googleDocsAddinFAQs);
                break;
            case 'forms':
                setFaqList(googleFormsAddinFAQs);
                break;
            default:
                setFaqList(wordAddinFAQs);
        }
    };

    const toggleFAQ = (index: number) => {
        setOpenFAQ(openFAQ === index ? null : index);
    };

    return (
        <>
            {/* hero section */}
            <section className='bg-gray-100'>
                <div data-aos="fade-up" className="flex items-center justify-center bg-gray-100 hero-section">
                    <div className="container mx-auto flex flex-col md:flex-row items-center justify-center px-4 space-y-6 md:space-y-0">
                        {/* Left section (text + buttons) */}
                        <div className="w-full md:w-1/2 mt-4 flex flex-col items-center md:items-start justify-center space-y-6 lg:px-20">
                            <h2 className={`text-xl md:text-2xl lg:text-3xl xl:text-3xl font-bold mb-2 relative group ${raleway.className}`}>
                                {UIText.faqs.title}
                                <span className="text-underline ms-2 absolute left-0 bottom-[-4px] rounded h-1 w-20 transition-all duration-500 group-hover:w-96"></span>
                            </h2>
                            <p className={`text-lg text-center md:text-left ${roboto.className}`}>{UIText.faqs.description}</p>
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
                            <Image src={aboutImg.src} className='rounded-3xl my-12' alt='about-hero' width={350} height={350} />
                        </div>
                    </div>
                </div>
            </section>

            <div className='bg-gray-100 mb-8'>
                <div className="p-2 md:p-4 lg:p-6 xl:p-8">
                    <div className="flex flex-col lg:flex-row mx-auto max-w-[84em] gap-4">
                        {/* Categories Section */}
                        <div className="w-full lg:w-1/3 bg-gradient-to-br from-[#ff7e5f] to-[#d73e0f] p-6 rounded-lg animate-slide-bottom">
                            <h2 className="text-lg font-semibold text-white mb-4">{UIText.faqs.categories}</h2>

                            {/* Full Stack Development Dropdown */}
                            <button
                                type='button'
                                onClick={toggleFullStackDevelopment}
                                className={`w-full text-left px-4 py-3 my-2 ${fullStackDevelopment ? 'bg-gradient-to-br from-[#d73e0f] to-[#ff7e5f]' : 'bg-[#d73e0f]'} text-white rounded-lg font-medium flex items-center justify-between`}
                            >
                                {UIText.faqs.full_stack_development.title}
                            </button>
                            <div
                                className={`overflow-hidden transition-all duration-300 ease-in-out ${fullStackDevelopment ? 'max-h-[300px]' : 'max-h-0'}`}
                            ></div>

                            {/* Office Add-ins Dropdown */}
                            <button
                                type='button'
                                onClick={toggleOffice}
                                className={`w-full text-left px-4 py-3 my-2 ${openOffice ? 'bg-gradient-to-br from-[#d73e0f] to-[#ff7e5f]' : 'bg-[#d73e0f]'} text-white rounded-lg font-medium flex items-center justify-between`}
                            >
                                {UIText.faqs.office_addins.title}
                                {openOffice ? <IoIosArrowUp /> : <IoIosArrowDown />}
                            </button>
                            <div
                                className={`overflow-hidden transition-all duration-300 ease-in-out ${openOffice ? 'max-h-[300px]' : 'max-h-0'}`}
                            >
                                <ul className="space-y-2">
                                    <li><button type='button' onClick={() => handleCategoryClick('word')} className={`w-full text-left px-4 py-3 ${selectedCategory === 'word' ? 'bg-gradient-to-br from-[#d73e0f] to-[#ff7e5f]' : 'bg-gray-700'} text-gray-300 rounded-lg font-medium hover:bg-[#d73e0f]`}>{UIText.faqs.office_addins.word_Addin}</button></li>
                                    <li><button type='button' onClick={() => handleCategoryClick('excel')} className={`w-full text-left px-4 py-3 ${selectedCategory === 'excel' ? 'bg-gradient-to-br from-[#d73e0f] to-[#ff7e5f]' : 'bg-gray-700'} text-gray-300 rounded-lg font-medium hover:bg-[#d73e0f]`}>{UIText.faqs.office_addins.excel_Addin}</button></li>
                                    <li><button type='button' onClick={() => handleCategoryClick('powerpoint')} className={`w-full text-left px-4 py-3 ${selectedCategory === 'powerpoint' ? 'bg-gradient-to-br from-[#d73e0f] to-[#ff7e5f]' : 'bg-gray-700'} text-gray-300 rounded-lg font-medium hover:bg-[#d73e0f]`}>{UIText.faqs.office_addins.powerpoint_Addin}</button></li>
                                    <li><button type='button' onClick={() => handleCategoryClick('outlook')} className={`w-full text-left px-4 py-3 ${selectedCategory === 'outlook' ? 'bg-gradient-to-br from-[#d73e0f] to-[#ff7e5f]' : 'bg-gray-700'} text-gray-300 rounded-lg font-medium hover:bg-[#d73e0f]`}>{UIText.faqs.office_addins.outlook_Addin}</button></li>
                                </ul>
                            </div>

                            {/* Google Add-ons Dropdown */}
                            <button
                                type='button'
                                onClick={toggleGoogle}
                                className={`w-full text-left px-4 py-3 my-2 ${openGoogle ? 'bg-gradient-to-br from-[#d73e0f] to-[#ff7e5f]' : 'bg-[#d73e0f]'} text-white rounded-lg font-medium flex items-center justify-between`}
                            >
                                {UIText.faqs.google_Addons.title}
                                {openGoogle ? <IoIosArrowUp /> : <IoIosArrowDown />}
                            </button>
                            <div
                                className={`overflow-hidden transition-all duration-300 ease-in-out ${openGoogle ? 'max-h-[300px]' : 'max-h-0'}`}
                            >
                                <ul className="space-y-2">
                                    <li><button type='button' onClick={() => handleCategoryClick('gmail')} className={`w-full text-left px-4 py-3 ${selectedCategory === 'gmail' ? 'bg-gradient-to-br from-[#d73e0f] to-[#ff7e5f]' : 'bg-gray-700'} text-gray-300 rounded-lg font-medium hover:bg-[#d73e0f]`}>{UIText.faqs.google_Addons.gmail_addon}</button></li>
                                    <li><button type='button' onClick={() => handleCategoryClick('sheet')} className={`w-full text-left px-4 py-3 ${selectedCategory === 'sheet' ? 'bg-gradient-to-br from-[#d73e0f] to-[#ff7e5f]' : 'bg-gray-700'} text-gray-300 rounded-lg font-medium hover:bg-[#d73e0f]`}>{UIText.faqs.google_Addons.google_sheet_addon}</button></li>
                                    <li><button type='button' onClick={() => handleCategoryClick('docs')} className={`w-full text-left px-4 py-3 ${selectedCategory === 'docs' ? 'bg-gradient-to-br from-[#d73e0f] to-[#ff7e5f]' : 'bg-gray-700'} text-gray-300 rounded-lg font-medium hover:bg-[#d73e0f]`}>{UIText.faqs.google_Addons.google_docs_addon}</button></li>
                                    <li><button type='button' onClick={() => handleCategoryClick('forms')} className={`w-full text-left px-4 py-3 ${selectedCategory === 'forms' ? 'bg-gradient-to-br from-[#d73e0f] to-[#ff7e5f]' : 'bg-gray-700'} text-gray-300 rounded-lg font-medium hover:bg-[#d73e0f]`}>{UIText.faqs.google_Addons.google_forms_addon}</button></li>
                                </ul>
                            </div>
                        </div>

                        {/* <!-- FAQs Section --> */}
                        <div className="w-full lg:w-2/3 bg-gray-800 p-6 rounded-lg animate-slide-bottom">
                            <h2 className="text-lg font-semibold text-white mb-4">FAQs</h2>
                            <div className="space-y-4">
                                {faqList.map((faq, index) => (
                                    <div key={index} className="overflow-hidden">
                                        <button
                                            type='button'
                                            onClick={() => toggleFAQ(index)}
                                            className="w-full text-left text-sm md:text-md lg:text-md xl:text-lg text-white font-semibold bg-gray-700 px-4 py-3 rounded-lg flex justify-between items-center"
                                        >
                                            <span>{faq.question}</span>
                                            {openFAQ === index ? <IoIosArrowUp /> : <IoIosArrowDown />}
                                        </button>
                                        <div
                                            className={`transition-all duration-300 ease-in-out overflow-hidden ${openFAQ === index ? 'max-h-[500px] opacity-100' : 'max-h-0 opacity-0'
                                                }`}
                                            style={{ transition: 'max-height 0.3s ease, opacity 0.3s ease' }}
                                        >
                                            <div className="py-2 px-4 text-gray-400">
                                                {faq.answer}
                                            </div>
                                        </div>
                                    </div>
                                ))}
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            {/* floating ask ai component */}
            <AskAI />
        </>
    );
};

export default FAQs;