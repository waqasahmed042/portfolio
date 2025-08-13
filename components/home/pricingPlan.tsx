import React from 'react';
import { raleway } from '@/utilities/hook/useFonts';
import UIText from '@/utilities/testResource';
import { pricingPlans } from '@/utilities/home/pricingPlan';
import { TiTickOutline } from "react-icons/ti";
import { IoClose } from "react-icons/io5";

const PricingPlans: React.FC = () => {
    return (
        <>
            <section className="bg-gray-100 py-10">
                <div className="container mx-auto px-4 lg:px-8">
                    {/* Title */}
                    <h2 className={`text-3xl font-bold mb-10 inline-block relative group ${raleway.className}`}>
                        {UIText.home.pricing.most_popular}
                        <span className="text-underline ms-2 absolute left-0 bottom-[-4px] rounded h-1 w-16 transition-all duration-500 group-hover:w-full"></span>
                    </h2>

                    {/* Cards */}
                    <div className="grid lg:grid-cols-3 gap-12 md:gap-12 lg-gap-8 xl:gap-8 mx-auto">
                        {pricingPlans.map((plan, index) => (
                            <div
                                key={index}
                                className={`bg-white rounded-lg shadow-lg p-6 relative border transition-transform duration-300 hover:scale-105 ${plan.popular
                                    ? "border-2 border-[#219ebc] transition-transform scale-105 duration-300 hover:scale-100"
                                    : "border-gray-200"
                                    }`}
                            >
                                {plan.popular && (
                                    <span className="absolute -top-3 left-1/2 transform -translate-x-1/2 bg-[#219ebc] text-white text-sm px-4 py-1 rounded-full">
                                        {UIText.home.pricing.most_popular}
                                    </span>
                                )}

                                <h3 className="text-2xl font-semibold text-center mb-2">
                                    {plan.name}
                                </h3>
                                <div className="text-4xl font-bold text-[#219ebc] text-center mb-2">
                                    {plan.price}
                                    <span className="text-sm font-normal text-gray-500">
                                        /{plan.period}
                                    </span>
                                </div>
                                <p className="text-gray-600 text-center mb-6">{plan.description}</p>
                                <ul className="space-y-2 mb-6">
                                    {plan.features.map((feature, fIndex) => (
                                        <li key={fIndex} className="flex items-center text-sm text-gray-700">
                                            <span className="text-[#219ebc] mr-2">
                                                <TiTickOutline />
                                            </span> {feature}
                                        </li>
                                    ))}
                                    {plan.notIncluded.map((feature, fIndex) => (
                                        <li
                                            key={fIndex}
                                            className="flex items-center text-sm text-gray-500 opacity-50 line-through"
                                        >
                                            <span className="mr-2">
                                                <IoClose />
                                            </span> {feature}
                                        </li>
                                    ))}
                                </ul>
                                <button
                                    className={`w-full font-semibold py-2 rounded transition ${plan.popular
                                        ? "bg-[#219ebc] text-white hover:text-black border-2 hover:border-[#219ebc] hover:bg-white"
                                        : "border-2 border-[#219ebc] text-black hover:bg-[#219ebc] hover:text-white"
                                        }`}
                                >
                                    {UIText.home.pricing.btn}
                                </button>
                            </div>
                        ))}
                    </div>
                </div>
            </section>
        </>
    );
};

export default PricingPlans;