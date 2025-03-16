"use client";
import React, { useEffect } from 'react';
import { ModalProps } from '@/utilities/type';
import AOS from 'aos';
import 'aos/dist/aos.css';

const Modal: React.FC<ModalProps> = ({ isOpen, onClose, title, children }) => {
  useEffect(() => {
    AOS.init({ duration: 1200 });
  }, []);

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-black bg-opacity-50">
      <div className="bg-white rounded-lg shadow-lg lg:w-8/12 md:w-8/12 sm:w-10/12 w-10/12  p-6" style={{ maxHeight: '80vh', overflowY: 'auto' }} data-aos="zoom-in-down">
        {/* Modal Header */}
        <div className="flex justify-between items-center border-b pb-3">
          <h3 className="text-lg font-semibold">{title}</h3>
          <button
            type='button'
            className="text-gray-400 hover:text-gray-600 text-3xl"
            onClick={onClose}
          >
            &times;
          </button>
        </div>

        {/* Modal Body */}
        <div className="mt-4">
          {children}
        </div>
      </div>
    </div>
  );
};

export default Modal;