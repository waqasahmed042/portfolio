'use client';
import React, { useEffect } from 'react';
import { ToastContainer, Bounce, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { ToastProps } from '@/utilities/type';

const Page: React.FC<ToastProps> = ({ errorMessage, successMessage, infoMessage }) => {
    useEffect(() => {
        if (successMessage) {
            toast.success(successMessage);
        } else if (errorMessage) {
            toast.error(errorMessage);
        } else if (infoMessage) {
            toast.info(infoMessage);
        }
    }, [successMessage, errorMessage, infoMessage]);

    return (
        <>
            <ToastContainer
                position="bottom-right"
                autoClose={5000}
                hideProgressBar={false}
                newestOnTop={false}
                closeOnClick={false}
                rtl={false}
                pauseOnFocusLoss
                draggable
                pauseOnHover
                theme="light"
                transition={Bounce}
            />
        </>
    );
};

export default Page;