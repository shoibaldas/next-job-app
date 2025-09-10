import React, { useState } from 'react';
import { IoPersonCircle } from "react-icons/io5";
import { MdAlternateEmail, MdOutlineMessage } from "react-icons/md";
import { IoIosSend } from "react-icons/io";
import { Heading } from '../ui/Typography';
import Button from '../ui/button';
import subtract from '../../../public/contact/subtract.png'
import Image from 'next/image';

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
        <div className="flex flex-col xl:flex-row items-center justify-center gap-10 px-8 md:px-12">
            <div className="w-full xl:w-7/12 mb-16 lg:mb-0 hidden xl:block">
                <Image
                    src={subtract}
                    alt="Future technology"
                    className=""
                />
            </div>
            <div className="w-full xl:w-5/12">
                <Heading
                    level={1}
                    color="text-[#2563EB]"
                    fontFamily="akira"
                    className="text-sm sm:text-lg lg:text-4xl text-left"
                >
                    Get in Touch
                </Heading>
                <div className="2xl:w-7/12 w-full mb-16 lg:mb-0 block xl:hidden">
                    <Image
                        src={subtract}
                        alt="Future technology"
                        className=""
                    />
                </div>
                <div className='mt-10'>
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
                        <Button
                            variant="primary"
                            size="md"
                            icon={<IoIosSend />}
                            iconPosition="right"
                            className="w-full mt-4"
                        // asChild
                        >
                            Send Message

                        </Button>
                        {status && <p className="mt-4 text-center">{status}</p>}
                    </form>
                </div>
            </div>
        </div>
    )
}

export default ContactSection