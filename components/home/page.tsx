"use client"
import { useState, useEffect } from "react";
import AOS from 'aos';
import 'aos/dist/aos.css';
import Image from "next/image";
import { raleway, rubik, roboto } from '@/utilities/hook/useFonts';
import { Typewriter } from 'react-simple-typewriter'
import profilePic from "@/public/assets/images/waqas-ahmed.png";
import Contact from "@/components/Contact";
import UIText from "@/utilities/testResource";
import { highlights } from "@/utilities/home/highlights";
import ArchivedProjects from "./archivedProjects";
import QuoteModel from "./quoteModel";
import AskAI from "../ai/page";
import TrustedCompanies from "./trustedCompanies";
import Packages from "./packages";

const Home: React.FC = () => {
    const [isModalOpen, setIsModalOpen] = useState<boolean>(false);

    useEffect(() => {
        AOS.init();
    }, []);

    return (
        <>
            {/* hero section */}
            <section>
                <div data-aos="fade-up" className="flex  items-center justify-center bg-gray-100 hero-section">
                    <div className="container mx-auto flex flex-col md:flex-row items-center justify-center px-4  md:space-y-0">
                        {/* Left section (text + buttons) */}
                        <div className="w-full md:w-1/2 flex flex-col items-center md:items-start justify-center space-y-8 lg:px-20">
                            <p className={`text-xl hellow-text ${rubik.className}`}>{UIText.home.hello}</p>
                            <h1 className={`text-3xl md:text-4xl lg:text-4xl xl:text-5xl font-semibold text-center md:text-left ${rubik.className}`}>
                                {UIText.home.i}
                                &apos;
                                {UIText.home.name}
                            </h1>
                            <p className="type-writer-text text-md md:text-xl lg:text-xl xl:text-xl">
                                <i>
                                    <Typewriter
                                        words={[
                                            'MERN Stack Developer',
                                            'Web Developer & Designer',
                                            'Full Stack Developer',
                                            'Office Add-in Developer (Word, Outlook, Excel, PowerPoint)',
                                            'Google Add-on Developer (Google Sheets, Google Docs, Gmail)'
                                        ]}
                                        loop={Infinity}
                                        cursor
                                        typeSpeed={90}
                                        deleteSpeed={80}
                                        delaySpeed={3000}
                                        cursorColor="#d73e0f"
                                    />
                                </i>
                            </p>

                            <p className={`text-lg text-center md:text-left ${roboto.className}`}>{UIText.home.description}</p>
                            <div className="flex flex-col md:flex-row space-y-4 md:space-y-0 md:space-x-4 justify-center md:justify-start ">
                                <a href="/resume.pdf" target="_blank" rel="noopener noreferrer">
                                    <button type="button" className="hero-btn-resume text-white font-bold py-2 px-4 rounded">
                                        {UIText.about.download_resume}
                                    </button>
                                </a>
                                <button type="button" className="hero-btn-quote text-white font-bold py-2 px-4 rounded"
                                    onClick={() => {
                                        setIsModalOpen(true);
                                    }}>
                                    {UIText.home.get_a_free_quote}
                                </button>
                            </div>
                        </div>

                        {/* Right section (image with SVG background) */}
                        <div className="w-full md:w-1/2 flex justify-center items-center relative">
                            {/* SVG background */}
                            <svg
                                viewBox="0 0 500 500"
                                xmlns="http://www.w3.org/2000/svg"
                                xmlnsXlink="http://www.w3.org/1999/xlink"
                                width="100%"
                                height="100%"
                                id="blobSvg"
                                className="absolute inset-0 z-0"
                            >
                                <path
                                    id="blob"
                                    d="M385.5,299.5Q349,349,299.5,380Q250,411,172.5,408Q95,405,82,327.5Q69,250,82.5,173Q96,96,173,64Q250,32,304,87Q358,142,390,196Q422,250,385.5,299.5Z"
                                    fill="#219ebc"
                                ></path>
                            </svg>

                            {/* Image on top of SVG */}
                            <div className="relative z-10 mt-16">
                                <div className="">
                                    <Image
                                        src={profilePic}
                                        alt="Picture of the author"
                                        width={350}
                                        height={350}
                                        className="rounded-full"
                                    />
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* highlight section */}
            <section className="bg-gray-100 py-10">
                <div data-aos="fade-up" className="container mx-auto px-4 lg:px-24">
                    {/* Title */}
                    <h2 className={`text-3xl font-bold mb-10 inline-block relative group ${raleway.className}`}>
                        {UIText.home.what_i_do_best}
                        <span className="text-underline ms-2 absolute left-0 bottom-[-4px] rounded  h-1  w-12 transition-all duration-500 group-hover:w-52"></span>
                    </h2>

                    {/* Highlights List */}
                    <div className={`grid grid-cols-1 md:grid-cols-3 gap-6 ${roboto.className}`}>
                        {highlights.map((highlight, index) => {
                            const { Icon, title, description, color } = highlight;

                            return (
                                <div key={index} className="bg-white shadow-lg rounded-lg p-7 flex flex-col items-center text-center">
                                    <Icon
                                        className={`text-5xl mb-4 ${color === "blue"
                                            ? "text-blue-500"
                                            : color === "green"
                                                ? "text-green-500"
                                                : color === "yellow"
                                                    ? "text-yellow-500"
                                                    : ""
                                            }`}
                                    />
                                    <h3 className="text-xl font-medium mb-2">{title}</h3>
                                    <p className="text-gray-600">{description}</p>
                                </div>
                            );
                        })}
                    </div>
                </div>
            </section>

            {/* project section */}
            <ArchivedProjects />
            <TrustedCompanies />
            <Packages />

            {/* contact section */}
            <Contact titlePre={"Let's "} highlight={"Build"} titlePost={" Something Amazing Together."} />

            {/* modal */}
            <QuoteModel isModalOpen={isModalOpen} setIsModalOpen={setIsModalOpen} />

            {/* floating ask ai component */}
            <AskAI />
        </>
    );
}

export default Home;