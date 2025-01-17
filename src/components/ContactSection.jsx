import React, { useState } from 'react';
import { MdConnectWithoutContact } from "react-icons/md";
import { FaFacebookSquare, FaInstagramSquare, FaLinkedin } from "react-icons/fa";
import { FaSquareXTwitter } from "react-icons/fa6";
import { IoPersonCircle } from "react-icons/io5";
import { MdAlternateEmail, MdOutlineMessage } from "react-icons/md";
import { IoIosSend } from "react-icons/io";
import Link from 'next/link';

const ContactSection = () => {
    const [formData, setFormData] = useState({ name: '', email: '', message: '' });
    const [status, setStatus] = useState('');

    const handleChange = (e) => {
        const { id, value } = e.target;
        setFormData((prevData) => ({
            ...prevData,
            [id]: value,
        }));
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        setStatus("Sending...");
    
        try {
            const response = await fetch("/api/send-email", {
                method: "POST",
                headers: {
                    "Content-Type": "application/json",
                },
                body: JSON.stringify(formData),
            });
    
            if (!response.ok) {
                throw new Error(`HTTP error! status: ${response.status}`);
            }
    
            const result = await response.json();
            if (result.success) {
                setStatus("Message sent successfully!");
                setFormData({ name: "", email: "", message: "" });
            } else {
                setStatus("Failed to send message. Please try again.");
            }
        } catch (error) {
            console.error("Error sending message:", error);
            setStatus("An error occurred. Please try again later.");
        }
    };
    

    return (
        <div className="flex flex-col lg:flex-row items-center justify-between px-8">
            <div className="lg:w-1/2 w-full md:pr-8 mb-8 md:mb-0  bg-white flex flex-col justify-center text-center lg:text-left">

                <div className="flex justify-center lg:justify-start items-center mb-4">
                    <div className="flex justify-center items-center text-4xl p-2 rounded-full bg-blue-600 text-white">
                        <MdConnectWithoutContact />
                    </div>
                    <div>
                        <h2 className="px-2 mb-4 font-sans text-3xl font-bold tracking-tight text-blue-600 sm:text-2xl sm:leading-none lg:text-4xl">Get in Touch</h2>
                    </div>
                </div>
                <p className="text-base text-gray-700 md:text-lg lg:text-xl mb-6">
                    We&apos;d love to hear from you! Whether you're running a global enterprise or a small home business, ICEL TECH has the right solution for you. If you have a question, feedback, or just want to say hi, feel free to reach out.
                </p>
                <div className="flex justify-center lg:justify-start space-x-4 mb-6">
                    <Link href="https://www.facebook.com/people/ICEL-Technology-and-Entertainment/100090846309695/" target="_blank" rel="noopener noreferrer" className="text-blue-500 hover:text-blue-600 shadow">
                        <FaFacebookSquare className="text-2xl" />
                    </Link>
                    {/* <Link href="#" className="text-black hover:text-gray-800 shadow">
                        <FaSquareXTwitter className="text-2xl" />
                    </Link>
                    <Link href="#" className="text-pink-500 hover:text-pink-600 shadow">
                        <FaInstagramSquare className="text-2xl" />
                    </Link> */}
                    <Link href="https://www.linkedin.com/company/iceltech" target="_blank" rel="noopener noreferrer" className="text-blue-600 hover:text-blue-600 shadow">
                        <FaLinkedin className="text-2xl" />
                    </Link>
                </div>
            </div>
            <div className="lg:w-1/2 w-full bg-gray-50 shadow-lg rounded-lg p-6 md:p-8">
                <form onSubmit={handleSubmit}>
                    <div className="mb-4">
                        <div className="flex items-center">
                            <div className="pe-1 text-blue-600">
                                <IoPersonCircle className="text-xl" />
                            </div>
                            <div>
                                <label htmlFor="name" className="block text-sm font-medium text-gray-700">Name</label>
                            </div>
                        </div>
                        <input
                            type="text"
                            id="name"
                            value={formData.name}
                            onChange={handleChange}
                            className="mt-1 block w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-blue-500 focus:border-blue-500"
                            placeholder="Your Name"
                            required
                        />
                    </div>
                    <div className="mb-4">
                        <div className="flex items-center">
                            <div className="pe-1 text-blue-600">
                                <MdAlternateEmail className="text-xl" />
                            </div>
                            <div>
                                <label htmlFor="email" className="block text-sm font-medium text-gray-700">Email</label>
                            </div>
                        </div>
                        <input
                            type="email"
                            id="email"
                            value={formData.email}
                            onChange={handleChange}
                            className="mt-1 block w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-blue-500 focus:border-blue-500"
                            placeholder="Your Email"
                            required
                        />
                    </div>
                    <div className="mb-4">
                        <div className="flex items-center">
                            <div className="pe-1 text-blue-600">
                                <MdOutlineMessage className="text-xl" />
                            </div>
                            <div>
                                <label htmlFor="message" className="block text-sm font-medium text-gray-700">Message</label>
                            </div>
                        </div>
                        <textarea
                            id="message"
                            value={formData.message}
                            onChange={handleChange}
                            rows="4"
                            className="mt-1 block w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-blue-500 focus:border-blue-500"
                            placeholder="Your Message"
                            required
                        ></textarea>
                    </div>
                    <button
                        type="submit"
                        className="inline-flex items-center justify-center w-full bg-blue-600 text-white py-2 px-4 font-semibold rounded-md hover:bg-blue-700"
                    >
                        Send Message
                        <div className="px-2 text-2xl">
                            <IoIosSend />
                        </div>
                    </button>
                    {status && <p className="mt-4 text-center">{status}</p>}
                </form>
            </div>
        </div>
    )
}

export default ContactSection