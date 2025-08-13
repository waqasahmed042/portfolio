'use client';
import React, { useRef, useState } from "react";
import Slider from "react-slick";
import Image from "next/image";
import UIText from "@/utilities/testResource";
import { testimonials } from "@/utilities/home/testimonials";
import { FaStar } from "react-icons/fa";
import { IoIosArrowBack, IoIosArrowForward } from "react-icons/io";
import { countWords } from "@/utilities/hook/countWords";
import { colorGenerator } from "@/utilities/hook/colorGenerator";
import { raleway } from "@/utilities/hook/useFonts";

const Testimonials: React.FC = () => {
    const sliderRef = useRef<Slider | null>(null);
    const [expandedIndex, setExpandedIndex] = useState<number | null>(null);

    const settings = {
        dots: false,
        arrows: false,
        infinite: true,
        slidesToShow: 3,
        slidesToScroll: 1,
        autoplay: true,
        autoplaySpeed: 2000,
        centerMode: true,
        pauseOnHover: true,
        responsive: [
            {
                breakpoint: 1170,
                settings: {
                    slidesToShow: 2,
                },
            },
            {
                breakpoint: 768,
                settings: {
                    slidesToShow: 1,
                },
            },
        ],
    };

    // Function to move to the previous slide immediately
    const handlePrevClick = (e: React.MouseEvent) => {
        e.stopPropagation();
        if (sliderRef.current) {
            sliderRef.current.slickPause();
            sliderRef.current.slickPrev();
            setTimeout(() => {
                sliderRef.current?.slickPlay();
            }, 500);
        }
    };

    // Function to move to the next slide immediately
    const handleNextClick = (e: React.MouseEvent) => {
        e.stopPropagation();
        if (sliderRef.current) {
            sliderRef.current.slickPause();
            sliderRef.current.slickNext();
            setTimeout(() => {
                sliderRef.current?.slickPlay();
            }, 500);
        }
    };

    return (
        <>
            <section className="bg-gray-100 py-10 overflow-x-hidden">
                <div data-aos="fade-up" className="container mx-auto px-4 lg:px-8">
                    {/* Title */}
                    <h2 className={`text-3xl font-bold mb-10 inline-block relative group ${raleway.className}`}>
                        {UIText.home.testimonials.title}
                        <span className="text-underline ms-2 absolute left-0 bottom-[-4px] rounded h-1 w-12 transition-all duration-500 group-hover:w-44"></span>
                    </h2>

                    <div className="container cursor-grab customers-testimonials relative">
                        <Slider ref={sliderRef} {...settings}>
                            {testimonials.map((testimonial, index) => {
                                const isExpanded = expandedIndex === index;
                                const wordCount = countWords(testimonial.text);
                                const shouldShowReadMore = wordCount > 30;

                                return (
                                    <div
                                        key={index}
                                        className={`item ${isExpanded ? '' : 'h-96 lg:h-80'} max-w-md mt-16 w-full bg-gradient-to-br from-[#6ebbf7] to-[#006DC1] rounded-2xl shadow-2xl overflow-hidden transform transition-transform duration-300`}
                                    >
                                        <div
                                            id={`testimonial-${index}`}
                                            className={`p-6 sm:p-8 overflow-hidden transition-all duration-300 ${isExpanded ? 'h-auto' : 'h-96 lg:h-80'}`}
                                        >
                                            <div className="flex items-center z-20">
                                                <div className="flex-shrink-0">
                                                    {testimonial.type === "image" ? (
                                                        <Image
                                                            src={testimonial.client_img}
                                                            className="h-12 w-12 rounded-full"
                                                            alt="client image"
                                                            width={48}
                                                            height={48}
                                                        />
                                                    ) : (
                                                        <div
                                                            className="h-12 w-12 rounded-full bg-blue-600 flex items-center justify-center text-white font-bold"
                                                            style={{ backgroundColor: colorGenerator() }}
                                                        >
                                                            {testimonial.client_avatar}
                                                        </div>
                                                    )}
                                                </div>
                                                <div className="mx-3">
                                                    <p className="text-sm leading-5 font-medium text-white">{testimonial.name}</p>
                                                    <div className="text-sm leading-5 text-white">{testimonial.title}</div>
                                                </div>
                                            </div>
                                            <div className="flex justify-between items-center my-4">
                                                <div className="flex text-yellow-400 space-x-2">
                                                    {[...Array(5)].map((_, starIndex) => (
                                                        <FaStar key={starIndex} />
                                                    ))}
                                                </div>
                                            </div>
                                            <blockquote className="text-white text-xl font-medium">
                                                <div className={`testimonial-text duration-500 ease-in-out overflow-hidden ${isExpanded ? 'max-h-full' : 'max-h-84'}`}>
                                                    {!isExpanded && (
                                                        <span>
                                                            {testimonial.text.split(" ").slice(0, 26).join(" ")}.{" "}
                                                            {shouldShowReadMore && (
                                                                <button
                                                                    onClick={() => setExpandedIndex(index)}
                                                                    className="text-white text-sm md:text-md underline font-semibold inline"
                                                                >
                                                                    {UIText.home.testimonials.read_more}
                                                                </button>
                                                            )}
                                                        </span>
                                                    )}
                                                    {isExpanded && (
                                                        <>
                                                            <span>{testimonial.text}</span>
                                                            <button
                                                                onClick={() => setExpandedIndex(null)}
                                                                className="text-white text-sm md:text-md underline font-semibold inline"
                                                            >
                                                                {UIText.home.testimonials.show_less}
                                                            </button>
                                                        </>
                                                    )}
                                                </div>
                                            </blockquote>
                                        </div>
                                    </div>
                                );
                            })}
                        </Slider>

                        {/* Navigation Buttons */}
                        <div className="absolute inset-0 flex justify-between items-center pointer-events-none">
                            <button
                                aria-label="Previous slide"
                                onClick={handlePrevClick}
                                className="nav-btn p-2 bg-gradient-to-br from-[#6ebbf7] to-[#006DC1] rounded-full sm:block pointer-events-auto hidden md:block"
                            >
                                <IoIosArrowBack className="text-white text-3xl" />
                            </button>
                            <button
                                aria-label="Next slide"
                                onClick={handleNextClick}
                                className="nav-btn p-2 mx-8 bg-gradient-to-br from-[#6ebbf7] to-[#006DC1] rounded-full sm:block pointer-events-auto hidden md:block"
                            >
                                <IoIosArrowForward className="text-white text-3xl" />
                            </button>
                        </div>
                    </div>
                </div>
            </section>
        </>
    );
};

export default Testimonials;