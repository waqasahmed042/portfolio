'use client';
import React from 'react';
import { FaSearch, FaFolderOpen, FaLightbulb } from 'react-icons/fa';
import Link from 'next/link';
import { NoDataFoundProps } from '@/utilities/type';

const NoDataFound: React.FC<NoDataFoundProps> = ({
    category = "projects",
    showContactButton = true
}) => {
    return (
        <div className="flex flex-col items-center justify-center py-16 px-4" data-aos="zoom-in">
            {/* Main Icon */}
            <div className="relative mb-8">
                <div className="w-32 h-32 bg-gradient-to-br from-orange-100 to-red-100 rounded-full flex items-center justify-center shadow-lg">
                    <FaSearch className="text-4xl text-orange-500" />
                </div>
                <div className="absolute -top-2 -right-2 w-8 h-8 bg-gradient-to-br from-orange-400 to-red-500 rounded-full flex items-center justify-center">
                    <FaLightbulb className="text-sm text-white" />
                </div>
            </div>

            {/* Title */}
            <h3 className="text-2xl md:text-3xl font-bold text-gray-800 mb-4 text-center font-raleway">
                No {category} Found
            </h3>

            {/* Description */}
            <div className="max-w-md text-center mb-8">
                <p className="text-gray-600 mb-4 font-roboto">
                    Currently, there are no {category} available in this category.
                    I&apos;m constantly working on new projects and updates.
                </p>

                {/* Alternative suggestions */}
                <div className="bg-gradient-to-r from-orange-50 to-red-50 rounded-lg p-4 border border-orange-200">
                    <div className="flex items-start space-x-3">
                        <FaFolderOpen className="text-orange-500 mt-1 flex-shrink-0" />
                        <div className="text-left">
                            <p className="text-sm font-medium text-gray-700 font-roboto">
                                Explore other categories:
                            </p>
                            <ul className="text-sm text-gray-600 mt-2 space-y-1">
                                <li>• Check out my other portfolio sections</li>
                                <li>• View completed projects in different categories</li>
                                <li>• Contact me for custom solutions</li>
                            </ul>
                        </div>
                    </div>
                </div>
            </div>

            {/* Action Buttons */}
            <div className="flex flex-col sm:flex-row gap-4">
                <Link href="/portfolio" passHref>
                    <button className="px-6 py-3 bg-gradient-to-r from-orange-500 to-red-500 text-white font-semibold rounded-lg hover:from-orange-600 hover:to-red-600 transition-all duration-300 shadow-lg hover:shadow-xl transform hover:-translate-y-1">
                        View All Projects
                    </button>
                </Link>

                {showContactButton && (
                    <Link href="/contact" passHref>
                        <button className="px-6 py-[10px] border-2 border-orange-500 text-orange-500 font-semibold rounded-lg hover:bg-gradient-to-r hover:from-orange-500 hover:to-red-500 hover:text-white transition-all duration-300 shadow-lg hover:shadow-xl transform hover:-translate-y-1">
                            Get Custom Quote
                        </button>
                    </Link>
                )}
            </div>

            {/* Decorative elements */}
            <div className="absolute top-1/4 left-1/4 w-2 h-2 bg-orange-300 rounded-full opacity-60 animate-pulse"></div>
            <div className="absolute top-1/3 right-1/4 w-1 h-1 bg-red-300 rounded-full opacity-60 animate-pulse delay-1000"></div>
            <div className="absolute bottom-1/4 left-1/3 w-1.5 h-1.5 bg-orange-400 rounded-full opacity-60 animate-pulse delay-500"></div>
        </div>
    );
};

export default NoDataFound; 