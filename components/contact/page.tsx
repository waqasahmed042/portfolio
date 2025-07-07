"use client";
import React, { useEffect, useState } from 'react'
import { raleway, roboto } from '@/utilities/hook/useFonts';
import { FaLocationDot } from 'react-icons/fa6'
import { IoIosMail } from 'react-icons/io'
import { IoCall } from 'react-icons/io5';
import { collection, doc, serverTimestamp, setDoc } from 'firebase/firestore';
import { firestore } from '@/config/firebase';
import Toast from '@/components/Toast';
import "react-toastify/dist/ReactToastify.css";
import AOS from 'aos';
import Image from 'next/image';
import Loader from '@/components/Loader';
import emailjs from 'emailjs-com';
import { ContactPageProps } from '@/utilities/type';
import { contact, projectTypeDropdown } from '@/utilities/contact';
import aboutImg from '@/public/assets/images/contactPic.jpg';
import UIText from '@/utilities/testResource';
import AskAI from '../ai/page';

const initialState: ContactPageProps = { name: '', email: '', subject: '', project_type: '', message: '' };

const Contact: React.FC = () => {
    const [state, setState] = useState(initialState);
    const [loading, setLoading] = useState(false);
    const [errorMessage, setErrorMessage] = useState('');
    const [successMessage, setSuccessMessage] = useState('');

    useEffect(() => {
        AOS.init();
    }, []);

    const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
        setState({ ...state, [e.target.name]: e.target.value });
    };

    // Email validation function
    const isValidEmail = (email: string) => {
        return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);
    };

    const handleSubmit = async (e: React.MouseEvent<HTMLButtonElement>) => {
        e.preventDefault();
        setErrorMessage("");
        setSuccessMessage("");

        let { name, email, subject, project_type, message } = state;
        name = name.trim();
        email = email.trim();
        subject = subject.trim();
        project_type = project_type.trim();
        message = message.trim();

        // Check for missing fields
        const missingFields = [];
        if (!name) missingFields.push("Name");
        if (!email) missingFields.push("Email");
        if (!subject) missingFields.push("Subject");
        if (!project_type) missingFields.push("Project Type");
        if (!message) missingFields.push("Message");

        // If more than one field is missing, show a general message
        if (missingFields.length > 1) {
            return setErrorMessage("All fields are required");
        }

        // If only one field is missing, show specific message
        if (missingFields.length === 1) {
            return setErrorMessage(`${missingFields[0]} is required`);
        }

        // Validate email format
        if (!isValidEmail(email)) {
            return setErrorMessage("Invalid email format");
        }

        setLoading(true);
        const emailTemplateData = {
            full_name: name,
            subject,
            project_type,
            message,
            email,
            reply_to: email,
        };

        try {
            // Initialize EmailJS
            emailjs.init("Y_Q1WG1a5A0AoYpnD");

            // Send email using EmailJS
            await emailjs.send("service_w7t0wjc", "template_9r77dcr", emailTemplateData);

            // Save message in Firestore
            const newDocRef = doc(collection(firestore, "messages"));
            const documentId = newDocRef.id;

            setDoc(newDocRef, {
                ...emailTemplateData,
                id: documentId,
                createdAt: serverTimestamp(),
            });

            // ✅ Show success message after successful email send
            setSuccessMessage("Message Sent Successfully!");
            setState(initialState); // Reset input fields
        } catch (error) {
            console.error("Error sending email or adding document:", error);
            setErrorMessage("Error sending message");
        } finally {
            setLoading(false);
        }
    };

    return (
        <>
            {/* hero section */}
            <section className='bg-gray-100'>
                <div data-aos="fade-up" className="flex items-center justify-center bg-gray-100 hero-section">
                    <div className="container mx-auto flex flex-col md:flex-row items-center justify-center px-4 space-y-6 md:space-y-0">
                        {/* Left section (text + buttons) */}
                        <div className="w-full md:w-1/2 mt-4 flex flex-col items-center md:items-start justify-center space-y-6 lg:px-20">
                            <h2 className={`text-3xl font-bold mb-2 relative group ${raleway.className}`}>
                                {UIText.contact.title}
                                <span className="text-underline ms-2 absolute left-0 bottom-[-4px] rounded h-1 w-12 transition-all duration-500 group-hover:w-40"></span>
                            </h2>
                            <p className={`text-lg text-left md:text-left ${roboto.className}`}>{UIText.contact.description}</p>
                            <ul className="text-lg text-left md:text-left list-disc pl-5 space-y-2">
                                {contact.map((item, index) => (
                                    <li key={index}>{item}</li>
                                ))}
                            </ul>
                            <p className={`text-lg text-left md:text-left ${roboto.className}`}>{UIText.contact.collaborate}</p>
                        </div>

                        {/* Right section (image with SVG background) */}
                        <div className="w-full md:w-1/2 flex justify-center items-center relative">
                            <Image src={aboutImg.src} className='rounded-3xl' alt='about-hero' width={350} height={350} />
                        </div>
                    </div>
                </div>

                <section className='bg-gray-100 hero-section'>
                    <div className='container mx-auto px-4 lg:px-24'>
                        <h2 className={` text-3xl mt-20 font-bold mb-2 relative group ${raleway.className}`}>
                            {UIText.contact.title}
                            <span className="text-underline ms-1 absolute left-0 bottom-[-4px] rounded  h-1  w-12 transition-all duration-500 group-hover:w-40"></span>
                        </h2>
                        <div data-aos="fade-up" className="flex flex-wrap justify-around lg:justify-around sm:justify-start items-center sm:content-start mt-10 gap-y-2 mb-10">
                            <div className="flex w-full sm:w-auto me-3">
                                <div className="contact-icon-container">
                                    <IoIosMail size={60} color="#d73e0f" />
                                </div>
                                <div className='ms-3'>
                                    <p className='font-semibold'>{UIText.contact.email}:</p>
                                    <a href="mailto:hamzamashooq492@gmail.com" className="text-lg mt-1 hover:text-custommain">{UIText.contact.contact_email}</a>
                                </div>
                            </div>
                            <div className="flex w-full sm:w-auto me-3">
                                <div className="contact-icon-container">
                                    <IoCall size={52} color="#d73e0f" />
                                </div>
                                <div className='ms-3'>
                                    <p className='font-semibold'>{UIText.contact.phone}:</p>
                                    <a href="tel:+923037740991" className="text-lg hover:text-custommain">{UIText.contact.contact_no}</a>
                                </div>
                            </div>
                            <div className="flex w-full sm:w-auto me-3">
                                <div className="contact-icon-container">
                                    <FaLocationDot size={50} color="#d73e0f" />
                                </div>
                                <div className='ms-3'>
                                    <p className='font-semibold'>{UIText.contact.address}:</p>
                                    <a href="https://www.google.com/maps/place/Sargodha/@32.05496,72.697033,19187m/data=!3m2!1e3!4b1!4m6!3m5!1s0x39217439502694e3:0x55e1bad6edcbbc70!8m2!3d32.0739787!4d72.6860696!16zL20vMDVzNzlr?entry=ttu&g_ep=EgoyMDI1MDMwOC4wIKXMDSoASAFQAw%3D%3D"
                                        target="_blank"
                                        rel="noopener noreferrer"
                                        className="text-lg hover:text-custommain">{UIText.contact.address_details}</a>
                                </div>
                            </div>
                        </div>

                        {/* map and form section */}
                        <div data-aos="fade-up" className='container flex flex-wrap flex-col md:flex-row align-center justify-center '>
                            {/* google map */}
                            <div className='w-full md:w-1/2'>
                                <iframe
                                    src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d108208.7613301713!2d72.61463039841445!3d32.055078894508505!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x39217439502694e3%3A0x55e1bad6edcbbc70!2sSargodha%2C%20Pakistan!5e0!3m2!1sen!2s!4v1740571509760!5m2!1sen!2s"
                                    width="100%"
                                    height="580"
                                    style={{ border: 0 }}
                                    loading="lazy"
                                ></iframe>
                            </div>
                            <div className='w-full md:w-1/2'>
                                <form className='bg-white shadow-md  px-8 pt-6 pb-8 mb-20'>
                                    <h2 className='text-4xl mb-10'>{UIText.contact.interested_work_together} <br /> {UIText.contact.let}&apos;{UIText.contact.talk}</h2>
                                    <div className="flex gap-5 mb-4 flex-row inputs-container">
                                        <div className="form__group field w-full" >
                                            <input type="input" className="form__field" placeholder="Name" name='name' value={state.name} onChange={handleChange} />
                                            <label htmlFor="name" className="form__label">{UIText.contact.name}</label>
                                        </div>
                                        <div className="form__group field w-full"   >
                                            <input type="input" className="form__field" placeholder="Email" name='email' value={state.email} onChange={handleChange} />
                                            <label htmlFor="email" className="form__label">{UIText.contact.email}</label>
                                        </div>
                                    </div>

                                    <div className="form__group field w-full mb-4">
                                        <input type="input" className="form__field" placeholder="Subject" name='subject' value={state.subject} onChange={handleChange} />
                                        <label htmlFor="subject" className="form__label">{UIText.contact.subject}</label>
                                    </div>

                                    <div className="form__group field w-full mb-4">
                                        <label htmlFor="project_type" className="block form__label">{UIText.contact.project_type}</label>
                                        <select id="project_type" name="project_type" className="form__field" value={state.project_type} onChange={handleChange}>
                                            <option value="" disabled>{UIText.contact.selected_project_type}</option>
                                            {projectTypeDropdown.map((type, index) => (
                                                <option key={index} value={type}>{type}</option>
                                            ))}
                                        </select>
                                    </div>

                                    <div className="form__group field w-full mb-4">
                                        <textarea className="form__field" placeholder="Message" rows={2} name='message' value={state.message} onChange={handleChange}></textarea>
                                        <label htmlFor="message" className="form__label">{UIText.contact.message}</label>
                                    </div>

                                    <div className='flex items-center justify-end'>
                                        <button
                                            className='bg-custommain text-white font-bold py-2 px-2 rounded hero-btn-resume h-10 w-32 flex items-center justify-center'
                                            type='button' onClick={handleSubmit}
                                        >
                                            {loading ? <Loader /> : 'Send Message'}
                                        </button>
                                    </div>
                                </form>
                            </div>
                        </div>
                    </div>
                </section>
            </section>

            {/* floating ask ai component */}
            <AskAI />

            {/* show toast info message */}
            {errorMessage && (
                <Toast
                    infoMessage={""}
                    errorMessage={errorMessage}
                    successMessage={successMessage}
                />
            )}
        </>
    )
}

export default Contact;