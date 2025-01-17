'use client';
import Banner from "@/components/Banner";
import { IoPersonCircle } from "react-icons/io5";
import { MdAlternateEmail, MdOutlineMessage } from "react-icons/md";
import { IoIosSend } from "react-icons/io";
import { MdConnectWithoutContact } from "react-icons/md";
import { FaFacebookSquare, FaInstagramSquare, FaLinkedin } from "react-icons/fa";
import { FaSquareXTwitter } from "react-icons/fa6";
import Link from "next/link";
import BreadCrumbs from "@/components/BreadCrumbs";
import usePageTitle from "@/components/hooks/usePageTitle";
import { useState } from "react";

const Contact = () => {
  usePageTitle("Contact Us");

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
    <div>
      <div className='relative'>
        <Banner customTitle="Contact Us"></Banner>
        <div className="absolute top-40 xl:top-52 px-24 md:px-32">
          <BreadCrumbs></BreadCrumbs>
        </div>
      </div>
      <div className="
    flex flex-col items-center justify-center bg-lightBackground text-lightText">
        <section>
          <div className="mx-auto max-w-7xl px-4 py-16 sm:px-6 lg:px-8 lg:py-20">

            <div className="flex items-stretch justify-center">
              <div className="grid md:grid-cols-2">
                <div className="h-full pr-0 md:pr-6 mb-6 md:mb-0">
                  <div className="mb-6 max-w-3xl text-center sm:text-start md:mb-6">
                    <p className="text-base font-semibold uppercase tracking-wide text-blue-600 dark:text-blue-200">
                      Contact Form
                    </p>
                    <h2
                      className="font-heading font-bold tracking-tight text-gray-900 dark:text-white text-3xl sm:text-5xl">
                      Get in Touch
                    </h2>
                    <p className="mt-3 text-lg text-gray-600 dark:text-slate-400">
                      This is your gateway to contact with us directly. Whether you have inquires, feedback, or simply want to say hello.
                    </p>
                    <div className="pe-0 md:pe-4">
                      <div className="border-t border-gray-300 my-4"></div>
                    </div>
                  </div>
                  <ul className="mb-6 md:mb-0">
                    <li className="flex">
                      <div className="flex h-10 w-10 items-center justify-center rounded bg-blue-600 text-gray-50">
                        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"
                          fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round"
                          strokeLinejoin="round" className="h-6 w-6">
                          <path d="M9 11a3 3 0 1 0 6 0a3 3 0 0 0 -6 0"></path>
                          <path
                            d="M17.657 16.657l-4.243 4.243a2 2 0 0 1 -2.827 0l-4.244 -4.243a8 8 0 1 1 11.314 0z">
                          </path>
                        </svg>
                      </div>
                      <div className="ml-4 mb-4">
                        <h3 className="mb-2 text-lg font-medium leading-6 text-gray-900 dark:text-white">Our Address</h3>
                        <p className="text-gray-600 dark:text-slate-400">
                          <strong>Head Office:</strong> 7901 4th St N STE 300, St. Petersburg, FL 33702, USA
                        </p>
                        <p className="text-gray-600 dark:text-slate-400">
                          <strong>Local Branches:</strong>
                        </p>
                        <ul className="list-disc pl-5 text-gray-600 dark:text-slate-400">
                          <li>Meydan Grandstand, 6th Floor, Meydan Road, Nad Al Sheba, Dubai, United Arab Emirates</li>
                          <li>Four Seasons Building, Near Intileka building, Beb Bhar, Sfax, Tunisia</li>
                        </ul>
                      </div>

                    </li>
                    <li className="flex">
                      <div className="flex h-10 w-10 items-center justify-center rounded bg-blue-600 text-gray-50">
                        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"
                          fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round"
                          strokeLinejoin="round" className="h-6 w-6">
                          <path
                            d="M5 4h4l2 5l-2.5 1.5a11 11 0 0 0 5 5l1.5 -2.5l5 2v4a2 2 0 0 1 -2 2a16 16 0 0 1 -15 -15a2 2 0 0 1 2 -2">
                          </path>
                          <path d="M15 7a2 2 0 0 1 2 2"></path>
                          <path d="M15 3a6 6 0 0 1 6 6"></path>
                        </svg>
                      </div>
                      <div className="ml-4 mb-4">
                        <h3 className="mb-2 text-lg font-medium leading-6 text-gray-900 dark:text-white">Contact</h3>
                        <p className="text-gray-600 dark:text-slate-400">Phone: +1-813-563-2612 (Americas and Canada)</p>
                        <p className="text-gray-600 dark:text-slate-400">Phone: +216-23-189-129 (Africa)</p>
                        <p className="text-gray-600 dark:text-slate-400">Whatsapp: +971-58-221-0358 (Middle East and Asia Pacific)</p>
                        <p className="text-gray-600 dark:text-slate-400">Mail: contactus@iceltech.com</p>
                      </div>
                    </li>
                    <li className="flex">
                      <div className="flex h-10 w-10 items-center justify-center rounded bg-blue-600 text-gray-50">
                        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"
                          fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round"
                          strokeLinejoin="round" className="h-6 w-6">
                          <path d="M3 12a9 9 0 1 0 18 0a9 9 0 0 0 -18 0"></path>
                          <path d="M12 7v5l3 3"></path>
                        </svg>
                      </div>
                      <div className="ml-4 mb-4">
                        <h3 className="mb-2 text-lg font-medium leading-6 text-gray-900 dark:text-white">Working
                          hours</h3>
                        <p className="text-gray-600 dark:text-slate-400">Monday - Friday: 08:00 - 17:00</p>
                      </div>
                    </li>
                  </ul>
                </div>
                <div className="bg-blue-50 rounded-lg max-w-6xl h-full p-5 md:p-12" id="form">
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
                      className="inline-flex items-center justify-center w-full bg-blue-600 text-white mt-6 py-2 px-4 font-semibold rounded-md hover:bg-blue-700"
                    >
                      Send Message
                      <div className="px-2 text-2xl">
                        <IoIosSend />
                      </div>
                    </button>
                    {status && <p className="mt-4 text-center">{status}</p>}
                    <div className="mt-10 mb-4 md:mt-12 md:mb-0">
                    <div className="">
                      <div className="border-t border-gray-300 my-2"></div>
                    </div>
                    <div><h3 className="text-center my-2">Find us here</h3></div>
                    <div className="flex justify-center space-x-4">
                      <Link href="https://www.facebook.com/people/ICEL-Technology-and-Entertainment/100090846309695/" target="_blank" rel="noopener noreferrer" className="text-blue-500 hover:text-blue-600 shadow">
                        <FaFacebookSquare className="text-2xl" />
                      </Link>
                      {/* <Link href="#" className="text-black hover:text-gray-800 shadow">
                      <FaSquareXTwitter className="text-2xl" />
                    </Link> */}
                      <Link href="https://www.linkedin.com/company/iceltech" target="_blank" rel="noopener noreferrer" className="text-blue-600 hover:text-blue-600 shadow">
                        <FaLinkedin className="text-2xl" />
                      </Link>
                    </div>
                    </div>
                  </form>
                </div>
              </div>
            </div>
          </div>
        </section>
      </div>

    </div>
  )
}

export default Contact;