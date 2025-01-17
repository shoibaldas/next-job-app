'use client';

import Banner from '@/components/Banner';
import BreadCrumbs from '@/components/BreadCrumbs';
import usePageTitle from '@/components/hooks/usePageTitle';
import React from 'react'

const PrivacyPolicy = () => {
    usePageTitle('Privacy Policy')
    return (
        <div>
            <div className='relative'>
                <Banner customTitle="Privacy Policy"></Banner>
                <div className="absolute top-40 xl:top-52 px-24 md:px-32">
                    <BreadCrumbs></BreadCrumbs>
                </div>
            </div>
            <div className="
    min-h-screen flex flex-col items-center justify-center bg-lightBackground text-lightText">
                <main className="container mx-auto px-4 py-8 my-16">
                    <section className="bg-white rounded shadow p-6">
                        <div className="mb-4">
                            <h1 className="text-4xl font-bold">Privacy Policy</h1>
                            <p className="text-sm mt-1">Effective Date: Jan-01-2025</p>
                        </div>
                        <p className="text-gray-600 mb-4">
                            ICEL TECH (&quot;we,&quot; &quot;us,&quot; &quot;our&quot;) is committed to protecting your privacy. This Privacy Policy explains how we collect, use, disclose, and safeguard your information when you visit our website <a href="https://www.iceltech.com" className="text-blue-500 underline">https://www.iceltech.com</a> (the &quot;Site&quot;). Please read this policy carefully. By using the Site, you agree to the terms of this Privacy Policy.
                        </p>

                        <div className="space-y-6">
                            <div>
                                <h2 className="text-xl font-semibold mb-2">1. Information We Collect</h2>
                                <p className="text-gray-700 font-medium">We may collect the following types of information:</p>
                                <ul className="list-disc ml-5 text-gray-700">
                                    <li className="mb-1"><span className="font-semibold">Personal Information:</span>
                                        <ul className="list-disc ml-5 mt-1 text-gray-600">
                                            <li>Name</li>
                                            <li>Email address</li>
                                            <li>Phone number</li>
                                            <li>Company name (if applicable)</li>
                                            <li>Any other information you voluntarily provide to us through forms, surveys, or other interactions on our Site.</li>
                                        </ul>
                                    </li>
                                    <li className="mt-2"><span className="font-semibold">Non-Personal Information:</span>
                                        <ul className="list-disc ml-5 mt-1 text-gray-600">
                                            <li>IP address</li>
                                            <li>Browser type and version</li>
                                            <li>Device type and operating system</li>
                                            <li>Pages viewed, time spent on pages, and other usage statistics.</li>
                                        </ul>
                                    </li>
                                </ul>
                            </div>

                            <div>
                                <h2 className="text-xl font-semibold mb-2">2. How We Use Your Information</h2>
                                <p className="text-gray-700">
                                    We use the information we collect for the following purposes:
                                </p>
                                <ul className="list-disc ml-5 text-gray-700">
                                    <li>To provide, operate, and improve our Site and services.</li>
                                    <li>To respond to your inquiries and provide customer support.</li>
                                    <li>To send you promotional communications (with your consent).</li>
                                    <li>To analyze usage trends and improve user experience.</li>
                                    <li>To ensure compliance with our Terms of Use and other legal requirements.</li>
                                </ul>
                            </div>

                            <div>
                                <h2 className="text-xl font-semibold mb-2">3. How We Share Your Information</h2>
                                <p className="text-gray-700">
                                    We do not sell your personal information. However, we may share your information:
                                </p>
                                <ul className="list-disc ml-5 text-gray-700">
                                    <li>With service providers who assist us in operating our Site and delivering services.</li>
                                    <li>To comply with legal obligations or enforce our legal rights.</li>
                                    <li>In the event of a merger, acquisition, or sale of assets.</li>
                                </ul>
                            </div>

                            <div>
                                <h2 className="text-xl font-semibold mb-2">4. Cookies and Tracking Technologies</h2>
                                <p className="text-gray-700">
                                    We use cookies and similar technologies to enhance your experience on our Site. These cookies may be essential, functional, or analytical. You can manage your cookie preferences through your browser settings.
                                </p>
                            </div>

                            <div>
                                <h2 className="text-xl font-semibold mb-2">5. Your Rights and Choices</h2>
                                <p className="text-gray-700">
                                    Depending on your location, you may have the following rights:
                                </p>
                                <ul className="list-disc ml-5 text-gray-700">
                                    <li>The right to access, correct, or delete your personal information.</li>
                                    <li>The right to object to certain data processing activities.</li>
                                    <li>The right to withdraw consent for marketing communications.</li>
                                </ul>
                            </div>

                            <div>
                                <h2 className="text-xl font-semibold mb-2">6. Data Security</h2>
                                <p className="text-gray-700">
                                    We implement reasonable technical and organizational measures to protect your information from unauthorized access, disclosure, alteration, or destruction. However, no method of transmission over the internet or electronic storage is 100% secure.
                                </p>
                            </div>

                            <div>
                                <h2 className="text-xl font-semibold mb-2">7. Third-Party Links</h2>
                                <p className="text-gray-700">
                                    Our Site may contain links to third-party websites. We are not responsible for the privacy practices or content of those websites.
                                </p>
                            </div>

                            <div>
                                <h2 className="text-xl font-semibold mb-2">8. Updates to This Privacy Policy</h2>
                                <p className="text-gray-700">
                                    We may update this Privacy Policy periodically. Changes will be posted on this page with a revised &quot;Effective Date&quot;.
                                </p>
                            </div>

                            <div>
                                <h2 className="text-xl font-semibold mb-2">9. Contact Us</h2>
                                <p className="text-gray-700">
                                    If you have any questions or concerns about this Privacy Policy, please contact us at: <a href="mailto:contactus@iceltech.com" className="text-blue-500 underline">contactus@iceltech.com</a>.
                                </p>
                            </div>
                        </div>
                    </section>
                </main>
            </div>
        </div>
    )
}

export default PrivacyPolicy;