'use client';

import Banner from "@/components/Banner";
import BreadCrumbs from "@/components/BreadCrumbs";
import usePageTitle from "@/components/hooks/usePageTitle";
import Button from "@/components/ui/button";
import { Heading } from "@/components/ui/Typography";
import Link from "next/link";
import { useState } from "react";
import { FiArrowRight } from 'react-icons/fi';
import subtract from '../../../../public/contact/subtract.png';
import { IoPersonCircle } from "react-icons/io5";
import { MdAlternateEmail, MdOutlineMessage } from "react-icons/md";
import { IoIosSend } from "react-icons/io";
import Image from 'next/image';

const Products = () => {
  usePageTitle('Products');

  const productData = [
    {
      title: "iConnect",
      image: "/products/connect.jpg",
      description: "Lorem ipsum dolor sit amet consectetur adipiscing elit Ut et massa mi.Pellentesque sit amet sapien."
    },
    {
      title: "iShop",
      image: "/products/ishop.jpg",
      description: "Lorem ipsum dolor sit amet consectetur adipiscing elit Ut et massa mi.Pellentesque sit amet sapien."
    },
    {
      title: "iCareBot",
      image: "/products/carebot.jpg",
      description: "Lorem ipsum dolor sit amet consectetur adipiscing elit Ut et massa mi.Pellentesque sit amet sapien."
    }
  ];

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
    <div className="min-h-screen">
      <div className='relative'>
        <Banner customTitle="Products"></Banner>
        <div className="absolute top-32 md:top-36 lg:top-36 xl:top-52 px-6 md:px-10 lg:px-10 xl:px-20">
          <BreadCrumbs></BreadCrumbs>
        </div>
      </div>
      <div className="max-w-full mx-auto px-6 md:px-12 lg:px-32 py-16">
        <Heading
          level={1}
          color="text-[#2563EB]"
          fontFamily="akira"
          className="text-xl md:text-3xl lg:text-4xl text-left"
        >
          Browse Our Products
        </Heading>
        {/*Product Cards section*/}
        <div className="mt-0 lg:mt-16 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-10 xl:gap-18 mb-28 lg:mb-48">
          {productData.map((product, index) => {
            return (
              <div key={index} className="max-w-lg overflow-hidden shadow-lg bg-white">
                <img className="w-full h-64 object-cover p-2" src={product.image} alt={product.title} />
                <div className="px-6 py-4">
                  <div className="font-bold text-xl mb-2">{product.title}</div>
                  <p className="text-gray-700 text-base">
                    {product.description}
                  </p>
                  <div className="my-6">
                    <Link href="#">
                      <Button
                        variant="primary"
                        size="md"
                        icon={<FiArrowRight />}
                        iconPosition="right"
                      // asChild
                      >
                        View Details

                      </Button>
                    </Link>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
        {/*Contact Section*/}
        <Heading
          level={1}
          color="text-[#2563EB]"
          fontFamily="akira"
          className="text-xl md:text-3xl lg:text-4xl text-left"
        >
          Get in Touch
        </Heading>
        <div className="flex flex-col lg:flex-row items-center justify-between px-4 md:px-8">
          <div className="lg:w-7/12 w-full mb-16 lg:mb-0">

            <Image
              src={subtract}
              alt="Future technology"
              className=""
            />
          </div>
          {/*Form Section*/}
          <div className="lg:w-5/12 w-full p-0 md:p-8">

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
      </div>

    </div>
  );
};

export default Products;
