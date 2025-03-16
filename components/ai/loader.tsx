import React from 'react';
import { DotLottieReact } from '@lottiefiles/dotlottie-react';

const Loader = () => {
    return (
        <>
            <div className="w-20 h-20">
                <DotLottieReact
                    src="https://lottie.host/abe71d95-07a7-4ed9-b6ae-59ae82e07d9a/Tyyf5P9lO7.lottie"
                    loop
                    autoplay
                />
            </div>
        </>
    );
};

export default Loader;