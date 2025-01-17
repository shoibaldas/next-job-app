'use client';
import Banner from '@/components/Banner';
import BreadCrumbs from '@/components/BreadCrumbs';
import usePageTitle from '@/components/hooks/usePageTitle';
import React from 'react';

const TermsOfUse = () => {

    usePageTitle('Terms of Use');
    return (
        <div>
            <div className='relative'>
                <Banner customTitle="Terms of Use"></Banner>
                <div className="absolute top-40 xl:top-52 px-24 md:px-32">
                    <BreadCrumbs></BreadCrumbs>
                </div>
            </div>
            <div className="
    min-h-screen flex flex-col items-center justify-center bg-lightBackground text-lightText">

                <main className="container mx-auto px-4 py-8 my-16">
                    <section className="bg-white rounded shadow p-6">
                        <div className="mb-4">
                            <h1 className="text-4xl font-bold">Terms of Use</h1>
                            <p className="text-sm mt-1">Effective Date: Jan-01-2025</p>
                        </div>
                        <p className="text-gray-600 mb-4">
                            Welcome to ICEL TECH! By accessing or using our website <a href="https://www.iceltech.com" className="text-blue-500 underline">https://www.iceltech.com</a> (the &quot;Site&quot;), you agree to comply with and be bound by these Terms of Use (&quot;Terms&quot;). If you do not agree to these Terms, please do not use the Site.
                        </p>

                        <div className="space-y-6">
                            <div>
                                <h2 className="text-xl font-semibold mb-2">1. Use of the Site</h2>
                                <ul className="list-disc ml-5 text-gray-700">
                                    <li>Engage in any unauthorized access or disruption of the Site.</li>
                                    <li>Upload or transmit harmful or malicious code.</li>
                                    <li>Use the Site to harass, defame, or violate the rights of others.</li>
                                </ul>
                            </div>

                            <div>
                                <h2 className="text-xl font-semibold mb-2">2. Intellectual Property</h2>
                                <p className="text-gray-700">
                                    All content on the Site, including text, images, logos, and software, is the property of ICEL TECH or its licensors and is protected by copyright and other intellectual property laws. You may not reproduce, distribute, or create derivative works without our explicit consent.
                                </p>
                            </div>

                            <div>
                                <h2 className="text-xl font-semibold mb-2">3. User Content</h2>
                                <p className="text-gray-700">
                                    If you submit any content to the Site, you grant us a non-exclusive, worldwide, royalty-free license to use, reproduce, and display such content in connection with the Site. You are responsible for ensuring that your content does not infringe on any third-party rights.
                                </p>
                            </div>

                            <div>
                                <h2 className="text-xl font-semibold mb-2">4. Disclaimer of Warranties</h2>
                                <p className="text-gray-700">
                                    The Site is provided &quot;as is&quot; and &quot;as available.&quot; We disclaim all warranties, express or implied, including but not limited to warranties of merchantability, fitness for a particular purpose, and non-infringement.
                                </p>
                            </div>

                            <div>
                                <h2 className="text-xl font-semibold mb-2">5. Limitation of Liability</h2>
                                <p className="text-gray-700">
                                    To the fullest extent permitted by law, ICEL TECH shall not be liable for any indirect, incidental, or consequential damages arising out of your use of the Site.
                                </p>
                            </div>

                            <div>
                                <h2 className="text-xl font-semibold mb-2">6. Indemnification</h2>
                                <p className="text-gray-700">
                                    You agree to indemnify and hold ICEL TECH harmless from any claims, liabilities, damages, or expenses arising out of your violation of these Terms.
                                </p>
                            </div>

                            <div>
                                <h2 className="text-xl font-semibold mb-2">7. Governing Law</h2>
                                <p className="text-gray-700">
                                    These Terms are governed by and construed in accordance with the laws of the country where the person or system is accessing this website, without regard to its conflict of law principles.
                                </p>
                            </div>

                            <div>
                                <h2 className="text-xl font-semibold mb-2">8. Changes to These Terms</h2>
                                <p className="text-gray-700">
                                    We reserve the right to modify these Terms at any time. Changes will be effective immediately upon posting on the Site. Continued use of the Site constitutes your acceptance of the revised Terms.
                                </p>
                            </div>

                            <div>
                                <h2 className="text-xl font-semibold mb-2">9. Contact Us</h2>
                                <p className="text-gray-700">
                                    If you have any questions about these Terms, please contact us at: <a href="mailto:contactus@iceltech.com" className="text-blue-500 underline">contactus@iceltech.com</a>.
                                </p>
                            </div>
                        </div>
                    </section>
                </main>
            </div>
        </div>
    )
}

export default TermsOfUse;