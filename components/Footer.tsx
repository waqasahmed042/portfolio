import React from 'react';
import Link from 'next/link';
import logo from '../public/assets/images/signature.png';
import Image from 'next/image';
import { FaLinkedin, FaInstagram, FaGithub } from 'react-icons/fa';
import { FaStackOverflow } from "react-icons/fa";
import UIText from '@/utilities/testResource';

const Footer: React.FC = () => {
    return (
        <footer className="footer bg-light">
            <div className="container mx-auto px-4 lg:px-24 py-0">
                <div className='flex justify-between flex-wrap mt-4'>
                    <Link href='/'>
                        <Image src={logo} alt="logo" width={250} />
                    </Link>
                    <div className="flex justify-center items-center social-icons-container">
                        <ul className="example-2 ps-4 ">
                            {/* LinkedIn */}
                            <li className="icon-content">
                                <Link
                                    href="https://www.linkedin.com/in/ali-hamza-software-engineer/"
                                    target='_blank'
                                    aria-label="linkedin"
                                    data-social="linkedin"
                                >
                                    <div className="filled"></div>
                                    <FaLinkedin className="icon" />
                                </Link>
                                {/* <div className="tooltip">linkedIn</div> */}
                            </li>

                            {/* Facebook */}
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
                                {/* <div className="tooltip">Facebook</div> */}
                            </li>

                            {/* instagram */}
                            <li className="icon-content">
                                <a
                                    href="https://www.instagram.com/itz_mehar_hamza/"
                                    target='_blank'
                                    aria-label="instagram"
                                    data-social="instagram"
                                >
                                    <div className="filled"></div>
                                    <FaInstagram className="icon" />
                                </a>
                                {/* <div className="tooltip">Instagram</div> */}
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
                                {/* <div className="tooltip">Github</div> */}
                            </li>

                        </ul>
                    </div>
                </div>

                <hr className='footer-line' />
                <p className='text-center py-4'>{UIText.footer.all_rights_reserved}</p>
            </div>
        </footer>
    )
}

export default Footer;