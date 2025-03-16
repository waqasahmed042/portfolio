"use client";
import { useState, useEffect, useRef } from 'react';
import AOS from 'aos';
import { FaBookOpen } from 'react-icons/fa';
import { Roboto, Raleway } from 'next/font/google';
import aboutImg from '@/public/assets/images/aboutPic.png';
import missionImg from '@/public/assets/images/mission.png';
import Contact from '@/components/Contact';
import Image from 'next/image';
import CountUp from 'react-countup';
import UIText from '@/utilities/testResource';
import AskAI from '../ai/page';

const roboto = Roboto({
    subsets: ['latin'],
    weight: ['400', '500'],
});

const raleway = Raleway({
    subsets: ['latin'],
});

const About: React.FC = () => {
    const [startCount, setStartCount] = useState(false);
    const countUpSectionRef = useRef<HTMLDivElement>(null);

    useEffect(() => {
        const observer = new IntersectionObserver(
            ([entry]) => {
                if (entry.isIntersecting) {
                    setStartCount(true);
                }
            },
            { threshold: 0.5 } // Trigger when 30% of the section is visible
        );

        // Store the current ref value in a local variable
        const currentRef = countUpSectionRef.current;

        if (currentRef) {
            observer.observe(currentRef);
        }

        return () => {
            if (currentRef) {
                observer.unobserve(currentRef);
            }
        };
    }, []);

    useEffect(() => {
        AOS.init();
    }, []);

    return (
        <>
            {/* hero section */}
            <section>
                <div data-aos="fade-up" className="flex  items-center justify-center  bg-gray-100 hero-section">
                    <div className="container mx-auto flex flex-col md:flex-row items-center justify-center px-4 space-y-6 md:space-y-0">
                        {/* Left section (text + buttons) */}
                        <div className="w-full md:w-1/2 mt-4 flex flex-col items-center md:items-start justify-center space-y-6 lg:px-20">
                            <h2 className={`text-3xl font-bold mb-2 relative group ${raleway.className}`}>
                                {UIText.about.title}
                                <span className="text-underline ms-1 absolute left-0 bottom-[-4px] rounded  h-1  w-12 transition-all duration-500 group-hover:w-36"></span>
                            </h2>
                            <p className={`text-lg text-center md:text-left ${roboto.className}`}>
                                {UIText.about.introduction}<br /><br />
                                {UIText.about.specialty}
                            </p>
                            <div className="">
                                <a href="/resume.pdf" target="_blank" rel="noreferrer">
                                    <button type='button' className="hero-btn-resume text-white font-bold py-2 px-4 rounded">
                                        {UIText.about.download_resume}
                                    </button>
                                </a>
                            </div>
                        </div>

                        {/* Right section (image with SVG background) */}
                        <div className="w-full md:w-1/2 flex justify-center items-center relative">
                            <Image src={aboutImg.src} className='rounded-3xl' alt='about-hero' width={350} height={350} />
                        </div>
                    </div>
                </div>
            </section>

            <section className="bg-gray-100 py-10">
                <div data-aos="fade-up" className="container mx-auto px-4 lg:px-24">
                    {/* Title */}
                    <h2 className={`text-3xl font-bold mb-6 inline-block relative group ${raleway.className}`}>
                        {UIText.about.resume}
                        <span className="text-underline ms-1 absolute left-0 bottom-[-4px] rounded  h-1  w-12 transition-all duration-500 group-hover:w-28"></span>
                    </h2>

                    <article className={`resume bg-gray-50 p-6 rounded-lg shadow-lg ${raleway.className}`}>
                        <section className="timeline">
                            <div className="title-wrapper flex items-center gap-2 ">
                                <div className="icon-box bg-customprimary text-white p-2 rounded-full">
                                    <FaBookOpen size={25} />
                                </div>
                                <h3 className="text-xl font-semibold text-gray-700">{UIText.about.education}</h3>
                            </div>

                            <ol className="timeline-list ml-12">
                                <li className="timeline-item relative mb-6 ">
                                    <h4 className="text-lg font-semibold text-gray-700 mb-2">{UIText.about.course_title}</h4>
                                    <span className="text-custommain font-medium">{UIText.about.course_title_completion_year}</span>
                                    <p className="text-gray-500 mt-2">{UIText.about.course_description}</p>
                                </li>

                                <li className="timeline-item relative mb-6">
                                    <h4 className="text-lg font-semibold text-gray-700 mb-2">{UIText.about.graduation_university}</h4>
                                    <span className="text-custommain font-medium">{UIText.about.graduation_year}</span>
                                    <p className="text-gray-500 mt-2">{UIText.about.graduation_description}</p>
                                </li>

                                <li className="timeline-item relative">
                                    <h4 className="text-lg font-semibold text-gray-700 mb-2">{UIText.about.inter_college}</h4>
                                    <span className="text-custommain font-medium">{UIText.about.inter_completion_year}</span>
                                    <p className="text-gray-500 mt-2">{UIText.about.inter_description}</p>
                                </li>
                            </ol>
                        </section>
                    </article>
                </div>
            </section>

            {/* Vision & Mission section */}
            <section className="bg-gray-100">
                <div data-aos="fade-up" className="bg-gray-100 py-16">
                    <div className="container mx-auto flex flex-col md:flex-row items-center justify-center px-4 space-y-6 md:space-y-0">
                        {/* Right section (image with SVG background) */}
                        <div className="w-full md:w-1/2 flex justify-center items-center relative">
                            <Image src={missionImg.src} className='rounded-3xl' alt='about-hero' width={360} height={360} />
                        </div>

                        {/* Left section (text + buttons) */}
                        <div className="w-full md:w-1/2 mt-4 flex flex-col items-center md:items-start justify-center space-y-6 lg:px-20">
                            <h2 className={`text-3xl font-bold mb-2 relative group ${raleway.className}`}>
                                {UIText.about.vision_and_mission.title}
                                <span className="text-underline ms-1 absolute left-0 bottom-[-4px] rounded h-1 w-12 transition-all duration-500 group-hover:w-56"></span>
                            </h2>
                            <p className={`text-lg text-center md:text-left ${roboto.className}`}>{UIText.about.vision_and_mission.mission}</p>
                            <p className={`text-lg text-center md:text-left ${roboto.className}`}>{UIText.about.vision_and_mission.vision}</p>
                        </div>
                    </div>
                </div>
            </section>

            {/* Stats Metrics */}
            <section className="bg-gray-100 py-10" ref={countUpSectionRef}>
                <div data-aos="zoom-in" className="container mx-auto px-4 lg:px-24">
                    <div className="flex flex-wrap items-center justify-center">
                        <div className="metrics m-5">
                            {startCount && <CountUp end={24} className="metric-text" />}
                            <p className="text-xl font-semibold">{UIText.about.stats_metrics.projects}</p>
                        </div>
                        <div className="metrics m-5">
                            {startCount && <div className="flex items-baseline justify-center"><CountUp end={96} className="metric-text" /></div>}
                            <p className="text-xl font-semibold">{UIText.about.stats_metrics.feedback}</p>
                        </div>
                        <div className="metrics m-5">
                            {startCount && <CountUp end={10} className="metric-text" />}
                            <p className="text-xl font-semibold">{UIText.about.stats_metrics.client}</p>
                        </div>
                    </div>
                </div>
            </section>

            {/* contact section */}
            <Contact titlePre="Want to " highlight="Collaborate " titlePost="or just say hi?" />

            {/* floating ask ai component */}
            <AskAI />
        </>
    )
}

export default About;