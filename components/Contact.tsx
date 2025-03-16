import React from 'react';
import { Raleway } from 'next/font/google';
import Link from 'next/link';
import { FaArrowRight } from "react-icons/fa";
import { ContactProps } from '@/utilities/type';
import UIText from '@/utilities/testResource';

const raleway = Raleway({
    subsets: ['latin'],
});

const Contact: React.FC<ContactProps> = ({ titlePre, highlight, titlePost }) => {
    return (
        <section className="bg-gray-100 py-10">
            <div data-aos="zoom-in-up" className="container mx-auto px-4 lg:px-24">
                {/* Title */}
                <h2 className={`text-3xl font-bold mb-6 relative inline-block group ${raleway.className}`}>
                    {UIText.contact.title}
                    <span className="text-underline ms-2 absolute left-0 bottom-[-4px] rounded  h-1  w-12 transition-all duration-500 group-hover:w-40"></span>
                </h2>

                <div className="home-contact-section">
                    <div className="contact-overlay flex items-center justify-center flex-col space-y-6 lg:px-16 px-4">
                        {/* Title and Call to Action */}
                        <h2 className={`text-5xl font-extrabold mb-6 text-center text-white ${raleway.className}`}>
                            {/* Let's <span className="font-extrabold build-text">Build</span> Something Amazing Together. */}
                            {titlePre} <span className="font-extrabold text-customprimary">{highlight}</span> {titlePost}
                        </h2>

                        <div className="mt-6">
                            <Link href='contact' className="relative text-xl font-semibold btn-default flex items-center justify-center overflow-hidden group">
                                <span className="absolute inset-0 bg-gray-100 transform -translate-x-full group-hover:translate-x-0 transition-transform duration-500 ease-in-out"></span>
                                <span className="relative z-10 group-hover:text-customprimary transition-colors duration-500 ease-in-out">
                                    {UIText.contact.title}
                                </span>
                                <FaArrowRight className="ms-2 mt-1 transform -rotate-45 transition-transform duration-500 ease-in-out group-hover:rotate-0 group-hover:text-customprimary relative z-10" />
                            </Link>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default Contact;