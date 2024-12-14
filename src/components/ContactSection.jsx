import React from 'react';
import { MdConnectWithoutContact } from "react-icons/md";
import { FaFacebookSquare, FaInstagramSquare, FaLinkedin } from "react-icons/fa";
import { FaSquareXTwitter } from "react-icons/fa6";
import Link from 'next/link';

const ContactSection = () => {
    return (
        <div className="flex flex-col md:flex-row items-center justify-between px-6">
            <div className="md:w-1/2 w-full md:pr-8 mb-8 md:mb-0">

                <div className="flex">
                    <div className="flex justify-center items-center text-4xl w-16 h-16 rounded-full bg-blue-800 text-white mb-4">
                        <MdConnectWithoutContact />
                    </div>
                    <div>
                        <h2 className="max-w-lg mt-2 px-2 mb-4 font-sans text-3xl font-bold tracking-tight text-blue-800 sm:text-2xl sm:leading-none lg:text-4xl">Get in Touch</h2>
                    </div>
                </div>
                <p className="text-gray-700 text-lg mb-6">
                    We'd love to hear from you! Whether you have a question, feedback, or just want to say hi, feel free to reach out.
                </p>
                <div className="flex space-x-4">
                    <Link href="#" className="text-blue-500 hover:text-blue-600 shadow">
                        <FaFacebookSquare className="text-2xl" />
                    </Link>
                    <Link href="#" className="text-black- hover:text-gray-800 shadow">
                        <FaSquareXTwitter className="text-2xl" />
                    </Link>
                    <Link href="#" className="text-pink-500 hover:text-pink-600 shadow">
                        <FaInstagramSquare className="text-2xl"/>
                    </Link>
                    <Link href="#" className="text-blue-500 hover:text-blue-600 shadow">
                        <FaLinkedin className="text-2xl"/>
                    </Link>
                </div>
            </div>
            <div className="md:w-1/2 w-full bg-gray-50 shadow-lg rounded-lg p-6 md:p-8">
                <form>
                    <div className="mb-4">
                        <label for="name" className="block text-sm font-medium text-gray-700">Name</label>
                        <input type="text" id="name" className="mt-1 block w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-blue-500 focus:border-blue-500" placeholder="Your Name" />
                    </div>
                    <div className="mb-4">
                        <label for="email" className="block text-sm font-medium text-gray-700">Email</label>
                        <input type="email" id="email" className="mt-1 block w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-blue-500 focus:border-blue-500" placeholder="Your Email" />
                    </div>
                    <div className="mb-4">
                        <label for="message" className="block text-sm font-medium text-gray-700">Message</label>
                        <textarea id="message" rows="4" className="mt-1 block w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-blue-500 focus:border-blue-500" placeholder="Your Message"></textarea>
                    </div>
                    <button type="submit" className="w-full bg-blue-800 text-white py-2 px-4 rounded-md hover:bg-blue-700">
                        Send Message
                    </button>
                </form>
            </div>
        </div>
    )
}

export default ContactSection