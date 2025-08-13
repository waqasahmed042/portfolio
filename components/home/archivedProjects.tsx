import React, { useState } from 'react';
import { archived_projects } from '@/utilities/home/archivedProject';
import UIText from '@/utilities/testResource';
import Toast from '../Toast';
import { FaEye } from 'react-icons/fa';
import { raleway } from '@/utilities/hook/useFonts';
import { RiCodeSSlashLine } from 'react-icons/ri';

const ArchivedProjects: React.FC = () => {
    const [infoMessage, setInfoMessage] = useState("");

    const handleGithubClick = (github_link: string) => {
        setInfoMessage("");

        setTimeout(() => {
            if (!github_link) {
                setInfoMessage("Due to security considerations, the GitHub repository for this project is kept private.");
                return;
            } else {
                window.open(github_link, "_blank");
            }
        }, 100)
    };

    return (
        <>
            <section className="bg-gray-100 py-10">
                <div data-aos="fade-up" className="container mx-auto px-4 lg:px-8">
                    {/* Title */}
                    <h2 className={`text-3xl font-bold mb-10 inline-block relative group ${raleway.className}`}>
                        {UIText.home.archived_projects}
                        <span className="text-underline ms-2 absolute left-0 bottom-[-4px] rounded h-1 w-12 transition-all duration-500 group-hover:w-60"></span>
                    </h2>

                    {/* Projects Grid */}
                    <div className="flex flex-wrap">
                        {archived_projects.map((project, index) => (
                            <div key={index} className={`w-full ${project.widthClass} p-2`}>
                                <div className="relative project-img bg-cover bg-center h-72 flex justify-center items-center group overflow-hidden">
                                    {/* Background Image */}
                                    <div
                                        className="absolute inset-0 bg-cover bg-center transform scale-100 transition-transform duration-500 ease-in-out group-hover-image"
                                        style={{ backgroundImage: `url(${project.image})` }}
                                    ></div>

                                    {/* Overlay */}
                                    <div className="absolute bottom-0 left-0 right-0 bg-black h-full overlay"></div>

                                    {/* Eye Icon (Link) */}
                                    <div className="text text-center p-4 z-10 text-content">
                                        <div className="text text-center p-4 z-10 text-content flex justify-center gap-4">
                                            <h3 className="text-white text-lg font-semibold flex items-center gap-2">
                                                <a href={project.live_link} target="_blank" rel="noreferrer">
                                                    <FaEye size={30} />
                                                </a>
                                                <a href="#" onClick={(e) => { e.preventDefault(); handleGithubClick(project.github_link); }}>
                                                    <RiCodeSSlashLine size={30} />
                                                </a>
                                            </h3>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

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

export default ArchivedProjects;