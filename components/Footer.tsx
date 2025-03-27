import React from 'react';
import Link from 'next/link';
import logo from '../public/assets/images/signature.png';
import Image from 'next/image';
import { FaLinkedin, FaGithub } from 'react-icons/fa';
import { FaStackOverflow } from "react-icons/fa";
import UIText from '@/utilities/testResource';

const Footer: React.FC = () => {
    return (
        <>
            <footer className="footer bg-light z-50">
                <div className="container mx-auto px-4 lg:px-24 py-0">
                    <div className='flex justify-center md:justify-between lg:justify-between xl:justify-between flex-wrap mt-4'>
                        <Link href='/' className='my-4 md:my-0 lg:my-0 xl:my-0'>
                            <Image src={logo} alt="logo" width={250} />
                        </Link>
                        <div className="flex justify-center items-center social-icons-container">
                            <ul className="example-2 ps-4 ">
                                {/* LinkedIn */}
                                <li className="icon-content">
                                    <Link
                                        href="https://www.linkedin.com/in/waqas-ahmed-815b87265/"
                                        target='_blank'
                                        aria-label="linkedin"
                                        data-social="linkedin"
                                    >
                                        <div className="filled"></div>
                                        <FaLinkedin className="icon" />
                                    </Link>
                                </li>

                                {/* Stack Overfolw */}
                                <li className="icon-content">
                                    <a
                                        href="https://stackoverflow.com/users/23460956/waqas-ahmed"
                                        target='_blank'
                                        aria-label="stackoverflow"
                                        data-social="stackoverflow"
                                    >
                                        <div className="filled"></div>
                                        <FaStackOverflow className="icon" />
                                    </a>
                                </li>

                                {/* GitHub */}
                                <li className="icon-content">
                                    <a
                                        href="https://github.com/waqasahmed042"
                                        target='_blank'
                                        aria-label="github"
                                        data-social="github"
                                    >
                                        <div className="filled"></div>
                                        <FaGithub className="icon" />
                                    </a>
                                </li>

                            </ul>
                        </div>
                    </div>

                    <hr className='footer-line' />
                    <p className='text-center py-4'>{UIText.footer.all_rights_reserved}</p>
                </div>
            </footer>
        </>
    )
}

export default Footer;