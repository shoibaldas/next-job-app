'use client';
import Banner from "@/components/Banner";
import { IoPersonCircle } from "react-icons/io5";
import { MdAlternateEmail, MdLocalPhone, MdOutlineMessage } from "react-icons/md";
import { IoIosSend } from "react-icons/io";
import BreadCrumbs from "@/components/BreadCrumbs";
import usePageTitle from "@/components/hooks/usePageTitle";
import { useState } from "react";
import { Heading } from "@/components/ui/Typography";

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
    <div className="min-h-screen">
      <div className='relative'>
        <Banner customTitle="Contact Us"></Banner>
        <div className="absolute top-40 xl:top-52 px-24 md:px-32">
          <BreadCrumbs></BreadCrumbs>
        </div>
      </div>
      <div className="max-w-7xl flex-1 mx-auto flex-col md:px-0 px-10 my-20">
        <div>
          <Heading
            level={1}
            color="text-[#2563EB]"
            fontFamily="akira"
            className="text-xl md:text-3xl lg:text-4xl"
          >
            Have Any Question?
          </Heading>
        </div>
        <div className="py-16 px-6 md:px-10 bg-white shadow-2xl rounded-2xl">
          <div className="flex flex-col-reverse md:flex-row gap-10">
            {/* Info Section */}
            <div className="flex-1">
              <div className="relative bg-[url('/contactbg.png')] bg-cover bg-center rounded-xl shadow-lg text-white p-6 md:p-8 min-h-[580px] flex flex-col justify-center">
                {/* Optional overlay for better text readability */}
                <div className="absolute inset-0 bg-black/10 rounded-xl"></div>

                {/* Content */}
                <div className="relative z-10 space-y-24">
                  {/* Contact Information */}
                  <div>
                    <h2 className="text-lg md:text-xl mb-2 text-gray-200">Contact Information</h2>
                    <p className="text-sm mb-4 text-gray-200">Get in touch with us to get the best service</p>

                    <div className="space-y-2">
                      <div className="flex items-center gap-3">
                        <svg width="22" height="22" viewBox="0 0 22 22" fill="none" xmlns="http://www.w3.org/2000/svg">
                          <path d="M2.77762 10.9424C1.8296 9.28931 1.37185 7.93948 1.09584 6.57121C0.687622 4.54758 1.62181 2.57081 3.16938 1.30947C3.82345 0.776383 4.57323 0.958518 4.96 1.6524L5.83318 3.21891C6.52529 4.46057 6.87134 5.08139 6.8027 5.73959C6.73407 6.39779 6.26737 6.93386 5.33397 8.00601L2.77762 10.9424ZM2.77762 10.9424C4.69651 14.2883 7.70784 17.3013 11.0576 19.2224M11.0576 19.2224C12.7107 20.1704 14.0605 20.6282 15.4288 20.9042C17.4524 21.3124 19.4292 20.3782 20.6905 18.8306C21.2236 18.1766 21.0415 17.4268 20.3476 17.04L18.7811 16.1668C17.5394 15.4747 16.9186 15.1287 16.2604 15.1973C15.6022 15.2659 15.0661 15.7326 13.994 16.666L11.0576 19.2224Z" stroke="#EAF9FA" strokeWidth="1.5" strokeLinejoin="round" />
                          <path d="M13 5.83185C14.4232 6.43624 15.5638 7.57677 16.1682 9M13.654 1C17.1912 2.02076 19.9791 4.80852 21 8.34563" stroke="#EAF9FA" strokeWidth="1.5" strokeLinecap="round" />
                        </svg>

                        <span className="text-sm">+1-813-563-2129 (America and Canada)</span>
                      </div>

                      <div className="flex items-center mx-8">
                        <span className="text-sm">+216-23-189-129 (Africa)</span>
                      </div>

                      <div className="flex items-center gap-2">
                        <svg width="22" height="20" viewBox="0 0 22 20" fill="none" xmlns="http://www.w3.org/2000/svg">
                          <path d="M1 4L7.91302 7.91697C10.4616 9.36101 11.5384 9.36101 14.087 7.91697L21 4" stroke="#EAF9FA" strokeWidth="1.5" strokeLinejoin="round" />
                          <path d="M1.01577 11.4756C1.08114 14.5412 1.11383 16.0739 2.24496 17.2094C3.37608 18.3448 4.95033 18.3843 8.09883 18.4634C10.0393 18.5122 11.9607 18.5122 13.9012 18.4634C17.0497 18.3843 18.6239 18.3448 19.7551 17.2094C20.8862 16.0739 20.9189 14.5412 20.9842 11.4756C21.0053 10.4899 21.0053 9.51008 20.9842 8.52439C20.9189 5.45886 20.8862 3.92609 19.7551 2.79066C18.6239 1.65523 17.0497 1.61568 13.9012 1.53657C11.9607 1.48781 10.0393 1.48781 8.09882 1.53656C4.95033 1.61566 3.37608 1.65521 2.24495 2.79065C1.11382 3.92608 1.08114 5.45885 1.01576 8.52438C0.994745 9.51007 0.994745 10.4899 1.01577 11.4756Z" stroke="#EAF9FA" strokeWidth="1.5" strokeLinejoin="round" />
                        </svg>

                        <span className="text-sm">contactus@icetech.com</span>
                      </div>
                    </div>
                  </div>

                  {/* Location */}
                  <div>
                    <h2 className="text-lg md:text-xl font-semibold mb-2 text-gray-200">Location<span className="text-red-600">*</span></h2>
                    <div className="flex items-center gap-2">
                      <svg width="20" height="22" viewBox="0 0 20 22" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M13.5 10C13.5 11.933 11.933 13.5 10 13.5C8.067 13.5 6.5 11.933 6.5 10C6.5 8.067 8.067 6.5 10 6.5C11.933 6.5 13.5 8.067 13.5 10Z" stroke="#EAF9FA" strokeWidth="1.5" />
                        <path d="M10 1C14.8706 1 19 5.03298 19 9.92577C19 14.8965 14.8033 18.3847 10.927 20.7567C10.6445 20.9162 10.325 21 10 21C9.67495 21 9.35549 20.9162 9.073 20.7567C5.2039 18.3616 1 14.9137 1 9.92577C1 5.03298 5.12944 1 10 1Z" stroke="#EAF9FA" strokeWidth="1.5" />
                      </svg>
                      <span className="text-sm">
                        7901 4th St N STE 300, St. Petersburg, FL 33702, USA
                      </span>
                    </div>
                  </div>

                  {/* Chat with us */}
                  <div>
                    <h2 className="text-lg md:text-xl font-semibold mb-2 text-gray-200">Chat with us<span className="text-red-600">*</span></h2>
                    <p className="text-sm mb-2 text-gray-200">Speak to our friendly team 24/7</p>
                    <div className="flex items-center gap-2">
                      <svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M20 10C20 4.48 15.52 0 10 0C4.48 0 0 4.48 0 10C0 14.84 3.44 18.87 8 19.8V13H6V10H8V7.5C8 5.57 9.57 4 11.5 4H14V7H12C11.45 7 11 7.45 11 8V10H14V13H11V19.95C16.05 19.45 20 15.19 20 10Z" fill="white" />
                      </svg>

                      <svg width="22" height="17" viewBox="0 0 22 17" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M2.2 17C1.595 17 1.07727 16.7921 0.6468 16.3763C0.216333 15.9605 0.000733333 15.4601 0 14.875V2.125C0 1.54062 0.2156 1.04054 0.6468 0.62475C1.078 0.208958 1.59573 0.000708333 2.2 0H19.8C20.405 0 20.9231 0.20825 21.3543 0.62475C21.7855 1.04125 22.0007 1.54133 22 2.125V14.875C22 15.4594 21.7848 15.9598 21.3543 16.3763C20.9238 16.7928 20.4057 17.0007 19.8 17H2.2ZM11 9.37656C11.0917 9.37656 11.1881 9.3631 11.2893 9.33619C11.3905 9.30927 11.4866 9.2696 11.5775 9.21719L19.36 4.51562C19.5067 4.42708 19.6167 4.31658 19.69 4.18412C19.7633 4.05167 19.8 3.9054 19.8 3.74531C19.8 3.39115 19.6442 3.12552 19.3325 2.94844C19.0208 2.77135 18.7 2.78021 18.37 2.975L11 7.4375L3.63 2.975C3.3 2.78021 2.97917 2.77596 2.6675 2.96225C2.35583 3.14854 2.2 3.40956 2.2 3.74531C2.2 3.9224 2.23667 4.07752 2.31 4.21069C2.38333 4.34385 2.49333 4.4455 2.64 4.51562L10.4225 9.21719C10.5142 9.27031 10.6106 9.31033 10.7118 9.33725C10.813 9.36417 10.9091 9.37727 11 9.37656Z" fill="white" />
                      </svg>

                      <svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M10 0C15.523 0 20 4.477 20 10C20 15.523 15.523 20 10 20C8.23277 20.003 6.4966 19.5353 4.97002 18.645L0.00401546 20L1.35602 15.032C0.464974 13.5049 -0.00308163 11.768 1.52687e-05 10C1.52687e-05 4.477 4.47702 0 10 0ZM6.59202 5.3L6.39201 5.308C6.26271 5.31691 6.13636 5.35087 6.02002 5.408C5.91159 5.46951 5.81258 5.5463 5.72602 5.636C5.60602 5.749 5.53802 5.847 5.46502 5.942C5.09514 6.4229 4.89599 7.01331 4.89902 7.62C4.90102 8.11 5.02902 8.587 5.22902 9.033C5.63802 9.935 6.31102 10.89 7.19902 11.775C7.41302 11.988 7.62302 12.202 7.84902 12.401C8.95245 13.3724 10.2673 14.073 11.689 14.447L12.257 14.534C12.442 14.544 12.627 14.53 12.813 14.521C13.1042 14.5056 13.3885 14.4268 13.646 14.29C13.7769 14.2223 13.9047 14.1489 14.029 14.07C14.029 14.07 14.0714 14.0413 14.154 13.98C14.289 13.88 14.372 13.809 14.484 13.692C14.568 13.6053 14.638 13.5047 14.694 13.39C14.772 13.227 14.85 12.916 14.882 12.657C14.906 12.459 14.899 12.351 14.896 12.284C14.892 12.177 14.803 12.066 14.706 12.019L14.124 11.758C14.124 11.758 13.254 11.379 12.722 11.137C12.6663 11.1128 12.6067 11.0989 12.546 11.096C12.4776 11.0888 12.4084 11.0965 12.3432 11.1184C12.278 11.1403 12.2182 11.176 12.168 11.223C12.163 11.221 12.096 11.278 11.373 12.154C11.3315 12.2098 11.2744 12.2519 11.2088 12.2751C11.1433 12.2982 11.0723 12.3013 11.005 12.284C10.9398 12.2666 10.876 12.2446 10.814 12.218C10.69 12.166 10.647 12.146 10.562 12.11C9.98789 11.8599 9.45646 11.5215 8.98702 11.107C8.86102 10.997 8.74402 10.877 8.62402 10.761C8.23063 10.3842 7.88777 9.95799 7.60401 9.493L7.54501 9.398C7.50328 9.3338 7.46905 9.26501 7.44302 9.193C7.40502 9.046 7.50402 8.928 7.50402 8.928C7.50402 8.928 7.74702 8.662 7.86002 8.518C7.97002 8.378 8.06301 8.242 8.12302 8.145C8.24102 7.955 8.27802 7.76 8.21602 7.609C7.93602 6.925 7.64668 6.24467 7.34802 5.568C7.28902 5.434 7.11402 5.338 6.95502 5.319C6.90102 5.31233 6.84701 5.307 6.79302 5.303C6.65874 5.2953 6.52411 5.29664 6.39002 5.307L6.59202 5.3Z" fill="white" />
                      </svg>

                    </div>
                  </div>
                </div>
              </div>
            </div>
            {/* Form Section */}
            <div className="flex-1 px-4">
              <form onSubmit={handleSubmit}>
                <div className="mb-4">
                  <div className="flex items-center">
                    <div className="pe-1 text-blue-600">
                      <IoPersonCircle className="text-xl" />
                    </div>
                    <label htmlFor="name" className="block text-sm font-medium text-gray-700">Your Name<span className="text-red-600">*</span></label>
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
                    <label htmlFor="email" className="block text-sm font-medium text-gray-700">Your Email<span className="text-red-600">*</span></label>
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
                      <MdLocalPhone className="text-xl" />
                    </div>
                    <label htmlFor="phone" className="block text-sm font-medium text-gray-700">Your Phone Number<span className="text-red-600">*</span></label>
                  </div>
                  <input
                    type="tel"
                    id="phone"
                    value={formData.phone}
                    onChange={handleChange}
                    className="mt-1 block w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-blue-500 focus:border-blue-500"
                    placeholder="+1 (xxx) xxx-xxxx"
                    required
                  />
                </div>
                <div className="mb-4">
                  <div className="flex items-center">
                    <div className="pe-1 text-blue-600">
                      <MdOutlineMessage className="text-xl" />
                    </div>
                    <label htmlFor="message" className="block text-sm font-medium text-gray-700">Message<span className="text-red-600">*</span></label>
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
                  className="w-full bg-blue-600 text-white py-2 rounded-md hover:bg-blue-700 transition-colors"
                >
                  Send Message <IoIosSend className="inline ml-2" />
                </button>
                {status && <p className="mt-4 text-center">{status}</p>}
              </form>
            </div>
          </div>
        </div>
      </div>

    </div>
  )
}

export default Contact;