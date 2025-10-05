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
        <div className="absolute top-32 md:top-36 lg:top-36 xl:top-48 2xl:top-52 px-6 lg:px-10 xl:px-10 2xl:px-20 md:px-6">
          <BreadCrumbs></BreadCrumbs>
        </div>
      </div>
      <div className="max-w-7xl flex-1 mx-auto flex-col md:px-6 lg:px-10 px-4 xs:px-6 sm:px-8 xl:px-10 2xl:px-0 my-10 xs:my-12 sm:my-16 md:my-20">
        <div className="text-center">
          <Heading
            level={1}
            color="text-[#2563EB]"
            fontFamily="akira"
            className="text-lg xs:text-xl sm:text-2xl md:text-2xl lg:text-3xl xl:text-4xl"
          >
            Have Any Question?
          </Heading>
        </div>
        <div className="py-6 xs:py-8 sm:py-10 md:py-4 lg:py-6 px-4 xs:px-6 sm:px-8 md:px-2 lg:px-6 bg-white shadow-2xl rounded-2xl">
          <div className="flex flex-col-reverse xs:flex-col-reverse sm:flex-col-reverse md:flex-col-reverse lg:flex-col-reverse xl:flex-row gap-5 xs:gap-6 sm:gap-8 md:gap-10 lg:gap-x-4">
            {/* Info Section */}
            <div className="flex-1">
              <div className="relative bg-[url('/contactbg.png')] bg-cover bg-center rounded-xl shadow-lg text-white p-4 xs:p-6 sm:p-8 md:p-10 min-h-[400px] xs:min-h-[450px] sm:min-h-[500px] md:min-h-[520px] lg:min-h-[580px] flex flex-col justify-center">
                {/* Optional overlay for better text readability */}
                <div className="absolute inset-0 bg-black/10 rounded-xl"></div>

                {/* Content */}
                <div className="relative z-10 space-y-12 xs:space-y-14 sm:space-y-16 md:space-y-20 lg:space-y-24">
                  {/* Contact Information */}
                  <div>
                    <h2 className="text-base xs:text-lg sm:text-xl md:text-lg lg:text-xl mb-1 xs:mb-2 sm:mb-3 md:mb-2 lg:mb-2 text-gray-200">Contact Information</h2>
                    <p className="text-xs xs:text-sm sm:text-base md:text-sm lg:text-sm mb-2 xs:mb-3 sm:mb-4 md:mb-4 lg:mb-4 text-gray-200">Get in touch with us to get the best service</p>

                    <div className="space-y-1 xs:space-y-2 sm:space-y-3">
                      <div className="flex items-center gap-2 xs:gap-3">
                        <svg className="w-18 xs:w-20 sm:w-22" viewBox="0 0 22 22" fill="none" xmlns="http://www.w3.org/2000/svg">
                          <path d="M2.77762 10.9424C1.8296 9.28931 1.37185 7.93948 1.09584 6.57121C0.687622 4.54758 1.62181 2.57081 3.16938 1.30947C3.82345 0.776383 4.57323 0.958518 4.96 1.6524L5.83318 3.21891C6.52529 4.46057 6.87134 5.08139 6.8027 5.73959C6.73407 6.39779 6.26737 6.93386 5.33397 8.00601L2.77762 10.9424ZM2.77762 10.9424C4.69651 14.2883 7.70784 17.3013 11.0576 19.2224M11.0576 19.2224C12.7107 20.1704 14.0605 20.6282 15.4288 20.9042C17.4524 21.3124 19.4292 20.3782 20.6905 18.8306C21.2236 18.1766 21.0415 17.4268 20.3476 17.04L18.7811 16.1668C17.5394 15.4747 16.9186 15.1287 16.2604 15.1973C15.6022 15.2659 15.0661 15.7326 13.994 16.666L11.0576 19.2224Z" stroke="#EAF9FA" strokeWidth="1.5" strokeLinejoin="round" />
                          <path d="M13 5.83185C14.4232 6.43624 15.5638 7.57677 16.1682 9M13.654 1C17.1912 2.02076 19.9791 4.80852 21 8.34563" stroke="#EAF9FA" strokeWidth="1.5" strokeLinecap="round" />
                        </svg>
                        <span className="text-xs xs:text-sm sm:text-base md:text-sm lg:text-sm">+18135632612 (Americas and Canada)</span>
                      </div>

                      <div className="flex items-center gap-2 xs:gap-3 pl-[22px] xs:pl-[24px] sm:pl-[26px]">
                        <span className="text-xs xs:text-sm sm:text-base md:text-sm lg:text-sm mx-2">+8801811131664 (Asia and Pacific)</span>
                      </div>

                      <div className="flex items-center gap-2 xs:gap-3 pl-[22px] xs:pl-[24px] sm:pl-[26px]">
                        <span className="text-xs xs:text-sm sm:text-base md:text-sm lg:text-sm mx-2">+971582210358 (Middle East and Africa)</span>
                      </div>

                      <div className="flex items-center gap-2 xs:gap-3">
                        <svg className="w-18 xs:w-20 sm:w-22" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                          <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.890-5.335 11.893-11.893A11.821 11.821 0 0020.465 3.488" fill="#EAF9FA"/>
                        </svg>
                        <span className="text-xs xs:text-sm sm:text-base md:text-sm lg:text-sm">+971503709082 (Global)</span>
                      </div>

                      <div className="flex items-center gap-2 xs:gap-3">
                        <svg className="w-18 xs:w-20 sm:w-22" viewBox="0 0 22 20" fill="none" xmlns="http://www.w3.org/2000/svg">
                          <path d="M1 4L7.91302 7.91697C10.4616 9.36101 11.5384 9.36101 14.087 7.91697L21 4" stroke="#EAF9FA" strokeWidth="1.5" strokeLinejoin="round" />
                          <path d="M1.01577 11.4756C1.08114 14.5412 1.11383 16.0739 2.24496 17.2094C3.37608 18.3448 4.95033 18.3843 8.09883 18.4634C10.0393 18.5122 11.9607 18.5122 13.9012 18.4634C17.0497 18.3843 18.6239 18.3448 19.7551 17.2094C20.8862 16.0739 20.9189 14.5412 20.9842 11.4756C21.0053 10.4899 21.0053 9.51008 20.9842 8.52439C20.9189 5.45886 20.8862 3.92609 19.7551 2.79066C18.6239 1.65523 17.0497 1.61568 13.9012 1.53657C11.9607 1.48781 10.0393 1.48781 8.09882 1.53656C4.95033 1.61566 3.37608 1.65521 2.24495 2.79065C1.11382 3.92608 1.08114 5.45885 1.01576 8.52438C0.994745 9.51007 0.994745 10.4899 1.01577 11.4756Z" stroke="#EAF9FA" strokeWidth="1.5" strokeLinejoin="round" />
                        </svg>
                        <span className="text-xs xs:text-sm sm:text-base md:text-sm lg:text-sm">contactus@icetech.com</span>
                      </div>
                    </div>
                  </div>

                  {/* Location */}
                  <div>
                    <h2 className="text-base xs:text-lg sm:text-xl md:text-lg lg:text-xl font-semibold mb-1 xs:mb-2 sm:mb-3 md:mb-2 lg:mb-2 text-gray-200">Location<span className="text-red-600">*</span></h2>
                    
                    {/* Head Office */}
                    <div className="mb-3 xs:mb-4 sm:mb-5">
                      <h3 className="text-sm xs:text-base sm:text-lg md:text-base lg:text-base font-medium mb-1 xs:mb-2 text-gray-300">Head Office:</h3>
                      <div className="flex items-start gap-2 xs:gap-3">
                        <svg className="w-16 xs:w-18 sm:w-20 mt-1 flex-shrink-0" viewBox="0 0 20 22" fill="none" xmlns="http://www.w3.org/2000/svg">
                          <path d="M13.5 10C13.5 11.933 11.933 13.5 10 13.5C8.067 13.5 6.5 11.933 6.5 10C6.5 8.067 8.067 6.5 10 6.5C11.933 6.5 13.5 8.067 13.5 10Z" stroke="#EAF9FA" strokeWidth="1.5" />
                          <path d="M10 1C14.8706 1 19 5.03298 19 9.92577C19 14.8965 14.8033 18.3847 10.927 20.7567C10.6445 20.9162 10.325 21 10 21C9.67495 21 9.35549 20.9162 9.073 20.7567C5.2039 18.3616 1 14.9137 1 9.92577C1 5.03298 5.12944 1 10 1Z" stroke="#EAF9FA" strokeWidth="1.5" />
                        </svg>
                        <span className="text-xs xs:text-sm sm:text-base md:text-sm lg:text-sm">
                          7901 4th St N STE 300, St. Petersburg, FL 33702, USA
                        </span>
                      </div>
                    </div>

                    {/* Local Branches */}
                    <div>
                      <h3 className="text-sm xs:text-base sm:text-lg md:text-base lg:text-base font-medium mb-1 xs:mb-2 text-gray-300">Local Branches:</h3>
                      <div className="flex items-start gap-2 xs:gap-3">
                        <svg className="w-16 xs:w-18 sm:w-20 mt-1 flex-shrink-0" viewBox="0 0 20 22" fill="none" xmlns="http://www.w3.org/2000/svg">
                          <path d="M13.5 10C13.5 11.933 11.933 13.5 10 13.5C8.067 13.5 6.5 11.933 6.5 10C6.5 8.067 8.067 6.5 10 6.5C11.933 6.5 13.5 8.067 13.5 10Z" stroke="#EAF9FA" strokeWidth="1.5" />
                          <path d="M10 1C14.8706 1 19 5.03298 19 9.92577C19 14.8965 14.8033 18.3847 10.927 20.7567C10.6445 20.9162 10.325 21 10 21C9.67495 21 9.35549 20.9162 9.073 20.7567C5.2039 18.3616 1 14.9137 1 9.92577C1 5.03298 5.12944 1 10 1Z" stroke="#EAF9FA" strokeWidth="1.5" />
                        </svg>
                        <span className="text-xs xs:text-sm sm:text-base md:text-sm lg:text-sm">
                          Meydan Grandstand, 6th Floor, Meydan Road, Nad Al Sheba, Dubai, United Arab Emirates
                        </span>
                      </div>
                    </div>
                  </div>

                  {/* Chat with us */}
                  <div>
                    <h2 className="text-base xs:text-lg sm:text-xl md:text-lg lg:text-xl font-semibold mb-1 xs:mb-2 sm:mb-3 md:mb-2 lg:mb-2 text-gray-200">Chat with us<span className="text-red-600">*</span></h2>
                    <p className="text-xs xs:text-sm sm:text-base md:text-sm lg:text-sm mb-2 xs:mb-3 sm:mb-4 md:mb-2 lg:mb-2 text-gray-200">Speak to our friendly team 24/7</p>
                    {/* <div className="flex items-center gap-2 xs:gap-3">
                      <svg className="w-16 xs:w-18 sm:w-20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M20 10C20 4.48 15.52 0 10 0C4.48 0 0 4.48 0 10C0 14.84 3.44 18.87 8 19.8V13H6V10H8V7.5C8 5.57 9.57 4 11.5 4H14V7H12C11.45 7 11 7.45 11 8V10H14V13H11V19.95C16.05 19.45 20 15.19 20 10Z" fill="white" />
                      </svg>
                      <svg className="w-18 xs:w-20 sm:w-22" viewBox="0 0 22 17" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M2.2 17C1.595 17 1.07727 16.7921 0.6468 16.3763C0.216333 15.9605 0.000733333 15.4601 0 14.875V2.125C0 1.54062 0.2156 1.04054 0.6468 0.62475C1.078 0.208958 1.59573 0.000708333 2.2 0H19.8C20.405 0 20.9231 0.20825 21.3543 0.62475C21.7855 1.04125 22.0007 1.54133 22 2.125V14.875C22 15.4594 21.7848 15.9598 21.3543 16.3763C20.9238 16.7928 20.4057 17.0007 19.8 17H2.2ZM11 9.37656C11.0917 9.37656 11.1881 9.3631 11.2893 9.33619C11.3905 9.30927 11.4866 9.2696 11.5775 9.21719L19.36 4.51562C19.5067 4.42708 19.6167 4.31658 19.69 4.18412C19.7633 4.05167 19.8 3.9054 19.8 3.74531C19.8 3.39115 19.6442 3.12552 19.3325 2.94844C19.0208 2.77135 18.7 2.78021 18.37 2.975L11 7.4375L3.63 2.975C3.3 2.78021 2.97917 2.77596 2.6675 2.96225C2.35583 3.14854 2.2 3.40956 2.2 3.74531C2.2 3.9224 2.23667 4.07752 2.31 4.21069C2.38333 4.34385 2.49333 4.4455 2.64 4.51562L10.4225 9.21719C10.5142 9.27031 10.6106 9.31033 10.7118 9.33725C10.813 9.36417 10.9091 9.37727 11 9.37656Z" fill="white" />
                      </svg>
                    </div> */}
                  </div>
                </div>
              </div>
            </div>
            {/* Form Section */}
            <div className="flex-1 px-0 md:px-4 flex items-center">
              <form onSubmit={handleSubmit} className="w-full">
                <div className="mb-2 xs:mb-3 sm:mb-4">
                  <div className="flex items-center">
                    <div className="pe-1 text-blue-600">
                      <IoPersonCircle className="text-lg xs:text-xl sm:text-2xl" />
                    </div>
                    <label htmlFor="name" className="block text-xs xs:text-sm sm:text-base font-medium text-gray-700">Your Name<span className="text-red-600">*</span></label>
                  </div>
                  <input
                    type="text"
                    id="name"
                    value={formData.name}
                    onChange={handleChange}
                    className="mt-1 block w-full px-2 xs:px-3 sm:px-4 py-1 xs:py-2 border border-gray-300 rounded-md focus:ring-blue-500 focus:border-blue-500 text-xs xs:text-sm sm:text-base"
                    placeholder="Your Name"
                    required
                  />
                </div>
                <div className="mb-2 xs:mb-3 sm:mb-4">
                  <div className="flex items-center">
                    <div className="pe-1 text-blue-600">
                      <MdAlternateEmail className="text-lg xs:text-xl sm:text-2xl" />
                    </div>
                    <label htmlFor="email" className="block text-xs xs:text-sm sm:text-base font-medium text-gray-700">Your Email<span className="text-red-600">*</span></label>
                  </div>
                  <input
                    type="email"
                    id="email"
                    value={formData.email}
                    onChange={handleChange}
                    className="mt-1 block w-full px-2 xs:px-3 sm:px-4 py-1 xs:py-2 border border-gray-300 rounded-md focus:ring-blue-500 focus:border-blue-500 text-xs xs:text-sm sm:text-base"
                    placeholder="Your Email"
                    required
                  />
                </div>
                <div className="mb-2 xs:mb-3 sm:mb-4">
                  <div className="flex items-center">
                    <div className="pe-1 text-blue-600">
                      <MdLocalPhone className="text-lg xs:text-xl sm:text-2xl" />
                    </div>
                    <label htmlFor="phone" className="block text-xs xs:text-sm sm:text-base font-medium text-gray-700">Your Phone Number<span className="text-red-600">*</span></label>
                  </div>
                  <input
                    type="tel"
                    id="phone"
                    value={formData.phone}
                    onChange={handleChange}
                    className="mt-1 block w-full px-2 xs:px-3 sm:px-4 py-1 xs:py-2 border border-gray-300 rounded-md focus:ring-blue-500 focus:border-blue-500 text-xs xs:text-sm sm:text-base"
                    placeholder="+1 (xxx) xxx-xxxx"
                    required
                  />
                </div>
                <div className="mb-2 xs:mb-3 sm:mb-4">
                  <div className="flex items-center">
                    <div className="pe-1 text-blue-600">
                      <MdOutlineMessage className="text-lg xs:text-xl sm:text-2xl" />
                    </div>
                    <label htmlFor="message" className="block text-xs xs:text-sm sm:text-base font-medium text-gray-700">Message<span className="text-red-600">*</span></label>
                  </div>
                  <textarea
                    id="message"
                    value={formData.message}
                    onChange={handleChange}
                    rows="3"
                    className="mt-1 block w-full px-2 xs:px-3 sm:px-4 py-1 xs:py-2 border border-gray-300 rounded-md focus:ring-blue-500 focus:border-blue-500 text-xs xs:text-sm sm:text-base"
                    placeholder="Your Message"
                    required
                  ></textarea>
                </div>
                <button
                  type="submit"
                  className="w-full bg-blue-600 text-white py-1 xs:py-2 rounded-md hover:bg-blue-700 transition-colors text-sm xs:text-base sm:text-lg"
                >
                  Send Message <IoIosSend className="inline ml-2 text-sm xs:text-base sm:text-lg" />
                </button>
                {status && <p className="mt-2 xs:mt-3 sm:mt-4 text-center text-xs xs:text-sm sm:text-base">{status}</p>}
              </form>
            </div>
          </div>
        </div>
      </div>

    </div>
  )
}

export default Contact;