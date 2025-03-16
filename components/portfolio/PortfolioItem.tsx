import React, { useEffect, useRef } from 'react';
import { PortfolioDialogProps } from '@/utilities/type';
import Image from 'next/image';
import AOS from 'aos';
import 'aos/dist/aos.css';
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { IoClose } from 'react-icons/io5';
import Slider, { CustomArrowProps } from 'react-slick';
import { IoChevronBack, IoChevronForward } from 'react-icons/io5';

// Custom Previous Arrow Component
const CustomPrevArrow: React.FC<CustomArrowProps> = ({ onClick }) => (
    <div
        className="h-8 w-8 md:h-12 md:w-12 bg-gradient-to-br from-[#ff7e5f] to-[#d73e0f] text-white flex justify-center items-center p-2 rounded-full cursor-pointer"
        onClick={onClick}
        style={{ position: "absolute", left: "0px", top: "44%", zIndex: 1 }}
    >
        <IoChevronBack />
    </div>
);

// Custom Next Arrow Component
const CustomNextArrow: React.FC<CustomArrowProps> = ({ onClick }) => (
    <div
        className="h-8 w-8 md:h-12 md:w-12 bg-gradient-to-br from-[#ff7e5f] to-[#d73e0f] text-white flex justify-center items-center p-2 rounded-full cursor-pointer"
        onClick={onClick}
        style={{ position: 'absolute', right: '0px', top: "44%", zIndex: 1 }}
    >
        <IoChevronForward />
    </div>
);

const PortfolioDialog: React.FC<PortfolioDialogProps> = ({
    addin_name,
    addin_images,
    addin_title,
    addin_description_1,
    addin_description_2,
    skills_and_deliverables,
    tags,
    closeDialog
}) => {
    const dialogRef = useRef<HTMLDivElement | null>(null);

    useEffect(() => {
        AOS.init({ duration: 1200 });
    }, []);

    // Slider settings with custom arrows
    const sliderSettings = {
        dots: false,
        infinite: true,
        speed: 500,
        slidesToShow: 1,
        slidesToScroll: 1,
        prevArrow: <CustomPrevArrow />,
        nextArrow: <CustomNextArrow />,
    };

    useEffect(() => {
        const handleClickOutside = (event: MouseEvent) => {
            if (dialogRef.current && !dialogRef.current.contains(event.target as Node)) {
                closeDialog();
            }
        };

        document.addEventListener('mousedown', handleClickOutside);
        return () => {
            document.removeEventListener('mousedown', handleClickOutside);
        };
    }, [closeDialog]);

    return (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex justify-center items-center z-50">
            <div ref={dialogRef} className="bg-white dark:bg-gray-900 dark:text-white overflow-x-hidden mx-4 rounded-lg shadow-lg p-6 max-h-[90vh] overflow-y-auto" data-aos="zoom-in-up">
                <div className="flex z-10 flex-row justify-between items-center mb-4">
                    <h3 className="text-xl md:text-2xl lg:text-4xl font-semibold mb-4">{addin_name}</h3>
                    <button
                        type='button'
                        onClick={closeDialog}
                        className="text-gray-400 text-xl md:text-2xl lg:text-4xl mb-3 hover:bg-[#F1F1F1] hover:text-[#2e2e2e] flex justify-center items-center h-12 w-12 rounded-full font-bold hover:opacity-90 transition"
                    >
                        <IoClose />
                    </button>
                </div>

                <div className="mx-auto flex flex-col mb-4 md:flex-row lg:flex-row items-center w-full">
                    <div className="container mx-auto">
                        <div className="card mx-md-0">
                            <div className="flex flex-wrap justify-center">
                                <div className="flex flex-col lg:flex-row w-full h-auto bg-[#F2F2F2] dark:bg-gray-900">
                                    {/* Text Section */}
                                    <div className="px-4 py-4 lg:w-5/12 flex flex-col">
                                        <h1 className="text-xl md:text-3xl lg:text-3xl font-semibold">{addin_title}</h1>
                                        <p className="py-4 text-md">{addin_description_1}</p>
                                        <p className="py-2 text-md">{addin_description_2}</p>
                                        <p className="py-4 text-md">{skills_and_deliverables}</p>
                                        <div className="flex flex-wrap gap-2">
                                            {tags.map((tag, index) => (
                                                <span key={index} className="relative px-3 py-1 rounded-full shadow-sm bg-gray-200 dark:bg-gray-400 dark:text-gray-200">
                                                    {tag}
                                                </span>
                                            ))}
                                        </div>
                                    </div>

                                    {/* Image Carousel Section */}
                                    <div className="lg:w-7/12 mt-4 lg:mt-0 relative w-full">
                                        <Slider {...sliderSettings}>
                                            {addin_images.map((image, index) => (
                                                <div key={index}>
                                                    <Image src={image} alt={`Slide ${index + 1}`} className="w-full h-auto object-cover rounded-lg" />
                                                </div>
                                            ))}
                                        </Slider>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default PortfolioDialog;