"use client"
import Link from 'next/link';
import { useState } from 'react';
import { FaBars, FaTimes } from 'react-icons/fa';
import { Roboto } from 'next/font/google';
import UIText from '@/utilities/testResource';
import ScrollProgress from './scrollProgress';

const roboto = Roboto({
    subsets: ['latin'],
    weight: ['400', '500'],
});

const Navbar: React.FC = () => {
    const [isMenuOpen, setIsMenuOpen] = useState(false);

    const toggleMenu = () => {
        setIsMenuOpen(!isMenuOpen);
    };

    const closeMenu = () => {
        setIsMenuOpen(false);
    };

    return (
        <>
            <ScrollProgress />
            <header className={`${roboto.className}`}>
                <nav
                    className="navbar flex items-center justify-between shadow-md fixed w-full z-20 px-8 py-2 top-0 bg-white"
                    id="ftco-navbar"
                >
                    <div className="container mx-auto px-4 flex items-center justify-between">
                        <Link href="/" onClick={closeMenu}>
                            <div className="logo-container">
                                {/* <Image src={logo} alt='logo' className='logo-img'/> */}
                            </div>
                        </Link>
                        <button
                            type="button"
                            className="text-black focus:outline-none md:hidden"
                            aria-controls="ftco-nav"
                            aria-expanded={isMenuOpen}
                            aria-label="Toggle navigation"
                            onClick={toggleMenu}
                        >
                            {isMenuOpen ? <FaTimes className="text-2xl" /> : <FaBars className="text-2xl" />}
                        </button>

                        <div
                            className={`${isMenuOpen ? "block" : "hidden"
                                } md:flex flex-col md:flex-row md:space-x-6 py-4 absolute md:static bg-white w-full md:w-auto top-16 left-0 shadow-md md:shadow-none z-40 lg:pe-6`}
                            id="ftco-nav"
                        >
                            <ul className="flex flex-col md:flex-row space-y-4 md:space-y-0 md:space-x-6 px-4 md:px-0">
                                {[
                                    { href: "/", label: UIText.navbar.home },
                                    { href: "/about", label: UIText.navbar.about },
                                    { href: "/services", label: UIText.navbar.services },
                                    { href: "/portfolio", label: UIText.navbar.portfolio },
                                    { href: "/faqs", label: UIText.navbar.faqs },
                                    { href: "/contact", label: UIText.navbar.contact },
                                ].map(({ href, label }) => (
                                    <li key={href} className="nav-item">
                                        <Link href={href} className="nav-link hover:text-gray-500" onClick={closeMenu}>
                                            <span>{label}</span>
                                        </Link>
                                    </li>
                                ))}
                                <li className="nav-item">
                                    <Link
                                        href="https://www.upwork.com/freelancers/~01da48bf334d633c83"
                                        target="_blank"
                                        className="header_btn"
                                        onClick={closeMenu}
                                    >
                                        {UIText.navbar.hire_me}
                                        <div className="header_container__6am1c">
                                            <div className="header-dot1"></div>
                                            <div className="header-dot2"></div>
                                            <div className="header-dot3"></div>
                                        </div>
                                    </Link>
                                </li>
                            </ul>
                        </div>
                    </div>
                </nav>
            </header>
        </>
    );
}

export default Navbar;