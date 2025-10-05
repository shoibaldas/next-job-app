'use client';

import Banner from "@/components/Banner";
import BreadCrumbs from "@/components/BreadCrumbs";
import usePageTitle from "@/components/hooks/usePageTitle";
import { FiCheck, FiArrowRight } from 'react-icons/fi';
import { Heading, Text } from "@/components/ui/Typography";
import Image from "next/image";
import security from "../../../../../public/service/security.png";
import feature from "../../../../../public/service/feature.png";

const SvgIcon = ({ svg }) => (
    <div dangerouslySetInnerHTML={{ __html: svg }} />
);

export default function AzureSolution() {
    const steps = [
        {
            number: "01",
            title: "Assessment &",
            subtitle: "Planning",
        },
        {
            number: "02",
            title: "Solution",
            subtitle: "Deployment",
        },
        {
            number: "03",
            title: "Monitoring &",
            subtitle: "Optimization",
        },
        {
            number: "04",
            title: "Ongoing",
            subtitle: "Support",
        },
    ]

    const featureData = [
        {
            title: "Endpoint Protection",
            description: "Secure all devices from malware and unauthorized access to protect you.",
            icon: `<svg width="34" height="28" viewBox="0 0 34 28" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M9.63352 27.4347C7.61364 27.4261 5.88778 26.8935 4.45597 25.8366C3.02415 24.7798 1.92898 23.2415 1.17045 21.2216C0.411932 19.2017 0.0326705 16.7685 0.0326705 13.9219C0.0326705 11.0838 0.411932 8.65909 1.17045 6.64773C1.9375 4.63636 3.03693 3.10227 4.46875 2.04545C5.90909 0.988636 7.63068 0.460226 9.63352 0.460226C11.6364 0.460226 13.3537 0.992897 14.7855 2.05824C16.2173 3.11506 17.3125 4.64915 18.071 6.66051C18.8381 8.66335 19.2216 11.0838 19.2216 13.9219C19.2216 16.777 18.8423 19.2145 18.0838 21.2344C17.3253 23.2457 16.2301 24.7841 14.7983 25.8494C13.3665 26.9063 11.6449 27.4347 9.63352 27.4347ZM9.63352 24.0213C11.4063 24.0213 12.7912 23.1562 13.7884 21.4261C14.794 19.696 15.2969 17.1946 15.2969 13.9219C15.2969 11.7486 15.0668 9.91193 14.6065 8.41193C14.1548 6.90341 13.5028 5.76136 12.6506 4.9858C11.8068 4.2017 10.8011 3.80966 9.63352 3.80966C7.86932 3.80966 6.48438 4.67898 5.47869 6.41761C4.47301 8.15625 3.96591 10.6577 3.95739 13.9219C3.95739 16.1037 4.18324 17.9489 4.63494 19.4574C5.09517 20.9574 5.74716 22.0952 6.59091 22.8707C7.43466 23.6378 8.44886 24.0213 9.63352 24.0213ZM33.69 0.818181V27H29.7269V4.78125H29.5735L23.3093 8.87216V5.08807L29.842 0.818181H33.69Z" fill="url(#paint0_linear_258_1422)"/>
            <defs>
            <linearGradient id="paint0_linear_258_1422" x1="50" y1="35" x2="50" y2="-8" gradientUnits="userSpaceOnUse">
            <stop stop-color="#512C7D"/>
            <stop offset="1" stop-color="#2563EB"/>
            </linearGradient>
            </defs>
            </svg>
            `,
        },
        {
            title: "Cloud Security",
            description: "Protect your data across cloud platforms with advanced security.",
            icon: `<svg width="41" height="28" viewBox="0 0 41 28" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M9.63352 27.4347C7.61364 27.4261 5.88778 26.8935 4.45597 25.8366C3.02415 24.7798 1.92898 23.2415 1.17045 21.2216C0.411932 19.2017 0.0326705 16.7685 0.0326705 13.9219C0.0326705 11.0838 0.411932 8.65909 1.17045 6.64773C1.9375 4.63636 3.03693 3.10227 4.46875 2.04545C5.90909 0.988636 7.63068 0.460226 9.63352 0.460226C11.6364 0.460226 13.3537 0.992897 14.7855 2.05824C16.2173 3.11506 17.3125 4.64915 18.071 6.66051C18.8381 8.66335 19.2216 11.0838 19.2216 13.9219C19.2216 16.777 18.8423 19.2145 18.0838 21.2344C17.3253 23.2457 16.2301 24.7841 14.7983 25.8494C13.3665 26.9063 11.6449 27.4347 9.63352 27.4347ZM9.63352 24.0213C11.4063 24.0213 12.7912 23.1562 13.7884 21.4261C14.794 19.696 15.2969 17.1946 15.2969 13.9219C15.2969 11.7486 15.0668 9.91193 14.6065 8.41193C14.1548 6.90341 13.5028 5.76136 12.6506 4.9858C11.8068 4.2017 10.8011 3.80966 9.63352 3.80966C7.86932 3.80966 6.48438 4.67898 5.47869 6.41761C4.47301 8.15625 3.96591 10.6577 3.95739 13.9219C3.95739 16.1037 4.18324 17.9489 4.63494 19.4574C5.09517 20.9574 5.74716 22.0952 6.59091 22.8707C7.43466 23.6378 8.44886 24.0213 9.63352 24.0213ZM23.7567 27V24.1364L32.6161 14.9574C33.5621 13.9602 34.342 13.0866 34.9556 12.3366C35.5778 11.5781 36.0423 10.858 36.3491 10.1761C36.6559 9.49432 36.8093 8.76989 36.8093 8.00284C36.8093 7.13352 36.6048 6.38352 36.1957 5.75284C35.7866 5.11364 35.2283 4.62358 34.521 4.28267C33.8136 3.93324 33.0167 3.75852 32.1303 3.75852C31.1928 3.75852 30.3746 3.95028 29.6758 4.33381C28.9769 4.71733 28.44 5.25852 28.065 5.95739C27.69 6.65625 27.5025 7.47443 27.5025 8.41193H23.7312C23.7312 6.81818 24.0977 5.42472 24.8306 4.23153C25.5636 3.03835 26.5692 2.11364 27.8477 1.45739C29.1261 0.792613 30.5792 0.460226 32.207 0.460226C33.8519 0.460226 35.3008 0.788351 36.5536 1.4446C37.815 2.09233 38.7994 2.97869 39.5067 4.10369C40.2141 5.22017 40.5678 6.48153 40.5678 7.88778C40.5678 8.85938 40.3846 9.80966 40.0181 10.7386C39.6602 11.6676 39.0337 12.7031 38.1389 13.8452C37.244 14.9787 35.9996 16.3551 34.4059 17.9744L29.2028 23.4205V23.6122H40.9897V27H23.7567Z" fill="url(#paint0_linear_258_1427)"/>
            <defs>
            <linearGradient id="paint0_linear_258_1427" x1="48" y1="35" x2="48" y2="-8" gradientUnits="userSpaceOnUse">
            <stop stop-color="#512C7D"/>
            <stop offset="1" stop-color="#2563EB"/>
            </linearGradient>
            </defs>
            </svg>
            `,
        },
        {
            title: "Network Penetration Testing",
            description: "Identify and fix vulnerabilities through ethical hacking to give the best security",
            icon: `<svg width="43" height="28" viewBox="0 0 43 28" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M9.63352 27.4347C7.61364 27.4261 5.88778 26.8935 4.45597 25.8366C3.02415 24.7798 1.92898 23.2415 1.17045 21.2216C0.411932 19.2017 0.0326705 16.7685 0.0326705 13.9219C0.0326705 11.0838 0.411932 8.65909 1.17045 6.64773C1.9375 4.63636 3.03693 3.10227 4.46875 2.04545C5.90909 0.988636 7.63068 0.460226 9.63352 0.460226C11.6364 0.460226 13.3537 0.992897 14.7855 2.05824C16.2173 3.11506 17.3125 4.64915 18.071 6.66051C18.8381 8.66335 19.2216 11.0838 19.2216 13.9219C19.2216 16.777 18.8423 19.2145 18.0838 21.2344C17.3253 23.2457 16.2301 24.7841 14.7983 25.8494C13.3665 26.9063 11.6449 27.4347 9.63352 27.4347ZM9.63352 24.0213C11.4063 24.0213 12.7912 23.1562 13.7884 21.4261C14.794 19.696 15.2969 17.1946 15.2969 13.9219C15.2969 11.7486 15.0668 9.91193 14.6065 8.41193C14.1548 6.90341 13.5028 5.76136 12.6506 4.9858C11.8068 4.2017 10.8011 3.80966 9.63352 3.80966C7.86932 3.80966 6.48438 4.67898 5.47869 6.41761C4.47301 8.15625 3.96591 10.6577 3.95739 13.9219C3.95739 16.1037 4.18324 17.9489 4.63494 19.4574C5.09517 20.9574 5.74716 22.0952 6.59091 22.8707C7.43466 23.6378 8.44886 24.0213 9.63352 24.0213ZM32.8718 27.358C31.1161 27.358 29.5479 27.0554 28.1673 26.4503C26.7951 25.8452 25.7085 25.0057 24.9073 23.9318C24.1147 22.8494 23.6886 21.5966 23.6289 20.1733H27.6431C27.6942 20.9489 27.9542 21.6222 28.4229 22.1932C28.9002 22.7557 29.5224 23.1903 30.2894 23.4972C31.0565 23.804 31.9087 23.9574 32.8462 23.9574C33.8775 23.9574 34.7894 23.7784 35.582 23.4205C36.3832 23.0625 37.0096 22.5639 37.4613 21.9247C37.913 21.277 38.1389 20.5312 38.1389 19.6875C38.1389 18.8097 37.913 18.0384 37.4613 17.3736C37.0181 16.7003 36.3661 16.1719 35.5053 15.7884C34.6531 15.4048 33.6218 15.2131 32.4116 15.2131H30.1999V11.9915H32.4116C33.3832 11.9915 34.2354 11.8168 34.9684 11.4673C35.7099 11.1179 36.2894 10.6321 36.707 10.0099C37.1246 9.37926 37.3335 8.64205 37.3335 7.7983C37.3335 6.98864 37.1502 6.28551 36.7837 5.68892C36.4258 5.08381 35.9144 4.6108 35.2496 4.26989C34.5934 3.92898 33.8178 3.75852 32.9229 3.75852C32.0707 3.75852 31.2738 3.91619 30.5323 4.23153C29.7994 4.53835 29.2028 4.98153 28.7425 5.56108C28.2823 6.1321 28.0352 6.81818 28.0011 7.61932H24.1786C24.2212 6.20455 24.6388 4.96023 25.4315 3.88636C26.2326 2.8125 27.2894 1.97301 28.6019 1.3679C29.9144 0.762783 31.3718 0.460226 32.9741 0.460226C34.6531 0.460226 36.1019 0.788351 37.3207 1.4446C38.5479 2.09233 39.494 2.95739 40.1587 4.03977C40.832 5.12216 41.1644 6.30682 41.1559 7.59375C41.1644 9.05966 40.7553 10.304 39.9286 11.3267C39.1104 12.3494 38.0195 13.0355 36.6559 13.3849V13.5895C38.3945 13.8537 39.7411 14.544 40.6957 15.6605C41.6587 16.777 42.136 18.1619 42.1275 19.8153C42.136 21.2557 41.7354 22.5469 40.9258 23.6889C40.1246 24.831 39.0295 25.7301 37.6403 26.3864C36.2511 27.0341 34.6616 27.358 32.8718 27.358Z" fill="url(#paint0_linear_258_1432)"/>
            <defs>
            <linearGradient id="paint0_linear_258_1432" x1="45" y1="35" x2="45" y2="-8" gradientUnits="userSpaceOnUse">
            <stop stop-color="#512C7D"/>
            <stop offset="1" stop-color="#2563EB"/>
            </linearGradient>
            </defs>
            </svg>
            `,
        },
        {
            title: "Compliance Audits",
            description: "Ensure your systems meet industry regulations and standards.",
            icon: `<svg width="43" height="28" viewBox="0 0 43 28" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M9.63352 27.4347C7.61364 27.4261 5.88778 26.8935 4.45597 25.8366C3.02415 24.7798 1.92898 23.2415 1.17045 21.2216C0.411932 19.2017 0.0326705 16.7685 0.0326705 13.9219C0.0326705 11.0838 0.411932 8.65909 1.17045 6.64773C1.9375 4.63636 3.03693 3.10227 4.46875 2.04545C5.90909 0.988636 7.63068 0.460226 9.63352 0.460226C11.6364 0.460226 13.3537 0.992897 14.7855 2.05824C16.2173 3.11506 17.3125 4.64915 18.071 6.66051C18.8381 8.66335 19.2216 11.0838 19.2216 13.9219C19.2216 16.777 18.8423 19.2145 18.0838 21.2344C17.3253 23.2457 16.2301 24.7841 14.7983 25.8494C13.3665 26.9063 11.6449 27.4347 9.63352 27.4347ZM9.63352 24.0213C11.4063 24.0213 12.7912 23.1562 13.7884 21.4261C14.794 19.696 15.2969 17.1946 15.2969 13.9219C15.2969 11.7486 15.0668 9.91193 14.6065 8.41193C14.1548 6.90341 13.5028 5.76136 12.6506 4.9858C11.8068 4.2017 10.8011 3.80966 9.63352 3.80966C7.86932 3.80966 6.48438 4.67898 5.47869 6.41761C4.47301 8.15625 3.96591 10.6577 3.95739 13.9219C3.95739 16.1037 4.18324 17.9489 4.63494 19.4574C5.09517 20.9574 5.74716 22.0952 6.59091 22.8707C7.43466 23.6378 8.44886 24.0213 9.63352 24.0213ZM23.207 21.8864V18.6903L34.521 0.818181H37.0394V5.52273H35.4414L27.3491 18.3324V18.5369H42.8562V21.8864H23.207ZM35.6204 27V20.9148L35.646 19.4574V0.818181H39.3917V27H35.6204Z" fill="url(#paint0_linear_258_1437)"/>
            <defs>
            <linearGradient id="paint0_linear_258_1437" x1="47" y1="35" x2="47" y2="-8" gradientUnits="userSpaceOnUse">
            <stop stop-color="#512C7D"/>
            <stop offset="1" stop-color="#2563EB"/>
            </linearGradient>
            </defs>
            </svg>

            `,
        }
    ];

    usePageTitle('Cyber Security');

    return (
        <div className="min-h-screen">
            <div className='relative'>
                <Banner customTitle="Cyber Security"></Banner>
                <div className="absolute top-32 md:top-36 lg:top-36 xl:top-48 2xl:top-52 px-6 lg:px-10 xl:px-10 2xl:px-20 md:px-6">
                    <BreadCrumbs></BreadCrumbs>
                </div>
            </div>
            {/* TOP Section */}
            <section className="py-8 xs:py-10 sm:py-12 md:py-14 lg:py-16">
                <div className="px-4 xs:px-6 sm:px-8 md:px-10 lg:px-12 xl:px-10 2xl:px-20">
                    <div className="flex flex-col xs:flex-col sm:flex-col md:flex-col lg:flex-col xl:flex-row gap-6 xs:gap-8 sm:gap-10 md:gap-12 lg:gap-10 justify-center">
                        {/* Text content */}
                        <div className="space-y-3 xs:space-y-4 sm:space-y-5 md:space-y-6 lg:space-y-4 w-full">
                            <Heading
                                level={2}
                                color="text-[#2563EB]"
                                fontFamily="akira"
                                className="text-xl xs:text-2xl sm:text-2xl md:text-3xl lg:text-4xl"
                            >
                                Protecting yourn <br /> business in a connected world
                            </Heading>

                            <div className="max-w-3xl">
                                <Text size="lg" color="text-gray-600" className="text-base xs:text-base sm:text-base md:text-base lg:text-base">
                                    At ICEL TECH LLC, our cybersecurity solutions are designed to defend your digital infrastructure against evolving threats. We focus on prevention, detection, and response—ensuring your data, systems, and people stay protected around the clock.
                                </Text>
                            </div>
                            <ul className="space-y-2 xs:space-y-3 sm:space-y-4 w-full">
                                {['24/7 Threat Monitoring', 'Risk Assessment & Compliance', 'Incident Response & Recovery'].map((item, i) => (
                                    <li key={i} className="flex items-center w-full">
                                        <svg className="w-5 xs:w-6 sm:w-7 md:w-8 lg:w-8" height="16" viewBox="0 0 22 16" fill="none" xmlns="http://www.w3.org/2000/svg">
                                            <path d="M14 15.875C13.7775 15.875 13.56 15.8091 13.375 15.6854C13.19 15.5618 13.0458 15.3861 12.9606 15.1806C12.8755 14.975 12.8532 14.7488 12.8966 14.5305C12.94 14.3123 13.0472 14.1118 13.2045 13.9545L19.1591 8.00003L13.2045 2.04554C12.9935 1.83456 12.875 1.54841 12.875 1.25003C12.875 0.951653 12.9935 0.665497 13.2045 0.454513C13.4155 0.243529 13.7017 0.125 14 0.125C14.2984 0.125 14.5846 0.243529 14.7956 0.454513L21.5456 7.20451C21.65 7.30898 21.7329 7.433 21.7894 7.5695C21.846 7.70599 21.8751 7.85229 21.8751 8.00003C21.8751 8.14777 21.846 8.29407 21.7894 8.43056C21.7329 8.69108 21.5456 8.79554L14.7956 15.5455C14.6912 15.6502 14.5672 15.7331 14.4307 15.7897C14.2942 15.8462 14.1478 15.8752 14 15.875Z" fill="url(#paint0_linear_258_1255)" />
                                            <path d="M7.62504 15.875C7.40253 15.875 7.18502 15.8091 7 15.6854C6.81499 15.5618 6.67079 15.3861 6.58564 15.1806C6.50049 14.975 6.47821 14.7488 6.52162 14.5305C6.56503 14.3123 6.67218 14.1118 6.82953 13.9545L12.7841 8.00003L6.82953 2.04554C6.61854 1.83456 6.50001 1.54841 6.50001 1.25003C6.50001 0.951653 6.61854 0.665497 6.82953 0.454513C7.04051 0.243529 7.32667 0.125 7.62504 0.125C7.92342 0.125 8.20957 0.243529 8.42056 0.454513L15.1706 7.20451C15.275 7.30898 15.3579 7.433 15.4144 7.5695C15.471 7.70599 15.5001 7.85229 15.5001 8.00003C15.5001 8.14777 15.471 8.29407 15.4144 8.43056C15.3579 8.69108 15.1706 8.79554L8.42056 15.5455C8.3162 15.6502 8.1922 15.7331 8.05568 15.7897C7.91916 15.8462 7.77281 15.8752 7.62504 15.875Z" fill="url(#paint1_linear_258_1255)" />
                                            <path d="M1.25004 15.875C1.02753 15.875 0.810016 15.8091 0.625003 15.6854C0.439991 15.5618 0.29579 15.3861 0.210638 15.1806C0.125486 14.975 0.103208 14.7488 0.146619 14.5305C0.190031 14.3123 0.297183 14.1118 0.454526 13.9545L6.40906 8.00003L0.454526 2.04554C0.243542 1.83456 0.125013 1.54841 0.125013 1.25003C0.125013 0.951653 0.243542 0.665497 0.454526 0.454513C0.66551 0.243529 0.951665 0.125 1.25004 0.125C1.54842 0.125 1.83457 0.243529 2.04556 0.454513L8.79556 7.20451C8.90003 7.30898 8.9829 7.433 9.03944 7.5695C9.09598 7.70599 9.12508 7.85229 9.12508 8.00003C9.12508 8.14777 9.09598 8.29407 9.03944 8.43056C8.9829 8.69108 8.79556 8.79554L2.04556 15.5455C1.9412 15.6502 1.8172 15.7331 1.68068 15.7897C1.54416 15.8462 1.39781 15.8752 1.25004 15.875Z" fill="url(#paint2_linear_258_1255)" />
                                            <defs>
                                                <linearGradient id="paint0_linear_258_1255" x1="17.375" y1="0.125" x2="17.375" y2="15.875" gradientUnits="userSpaceOnUse">
                                                    <stop stopColor="#6E9EF8" />
                                                    <stop offset="1" stopColor="#13157B" />
                                                </linearGradient>
                                                <linearGradient id="paint1_linear_258_1255" x1="11" y1="0.125" x2="11" y2="15.875" gradientUnits="userSpaceOnUse">
                                                    <stop stopColor="#6E9EF8" />
                                                    <stop offset="1" stopColor="#13157B" />
                                                </linearGradient>
                                                <linearGradient id="paint2_linear_258_1255" x1="4.62504" y1="0.125" x2="4.62504" y2="15.875" gradientUnits="userSpaceOnUse">
                                                    <stop stopColor="#6E9EF8" />
                                                    <stop offset="1" stopColor="#13157B" />
                                                </linearGradient>
                                            </defs>
                                        </svg>
                                        <Text size="base" color="text-gray-700" className="text-sm xs:text-base sm:text-base md:text-base lg:text-base mx-2">
                                            {item}
                                        </Text>
                                    </li>
                                ))}
                            </ul>
                        </div>
                        {/* Images with gradient backgrounds */}
                        <div className="w-full mt-6 xs:mt-8 sm:mt-10 md:mt-12 lg:mt-0">
                            <Image
                                src={security}
                                alt="Future technology"
                                className="w-full h-48 xs:h-56 sm:h-64 md:h-72 lg:h-80 xl:h-[600px]"
                            />
                        </div>
                    </div>
                </div>
            </section>
            {/* Middle Section */}
            <section className="py-8 xs:py-10 sm:py-12 md:py-14 lg:py-16 px-4 xs:px-6 sm:px-8 md:px-10 lg:px-12 xl:px-10 2xl:px-20">
                <Heading
                    level={2}
                    color="text-[#2563EB]"
                    fontFamily="akira"
                    className="text-xl xs:text-2xl sm:text-2xl md:text-3xl lg:text-4xl"
                >
                    How We Work
                </Heading>
                {/* Process flow */}
                <div className="relative w-full mx-auto">
                    {/* Desktop layout - horizontal */}
                    <div className="hidden lg:block mt-14">
                        {/* Connecting lines */}
                        <div className="absolute top-12 lg:top-16 lg:left-10 lg:right-10 xl:left-12 xl:right-12 flex justify-between items-center px-4 xs:px-6 sm:px-8 md:px-10 lg:px-16">
                            {[1, 2, 3].map((i) => (
                                <div key={i} className="flex-1 h-0.5 bg-blue-400 mx-2 xs:mx-4 sm:mx-6 md:mx-8 lg:mx-8" />
                            ))}
                        </div>

                        {/* Steps container */}
                        <div className="grid grid-cols-1 lg:grid-cols-4 gap-4 xs:gap-6 sm:gap-8 md:gap-10 lg:gap-8">
                            {steps.map((step, index) => (
                                <div key={index} className="flex flex-col items-center text-center">
                                    {/* Circle with number */}
                                    <div className="w-20 xs:w-24 sm:w-28 md:w-32 lg:w-32 h-20 xs:h-24 sm:h-28 md:h-32 lg:h-32 rounded-full bg-gradient-to-br from-blue-500 to-purple-600 flex items-center justify-center mb-4 xs:mb-6 sm:mb-8 md:mb-8 lg:mb-8 relative z-10">
                                        <span className="text-white text-2xl xs:text-3xl sm:text-4xl md:text-5xl lg:text-5xl font-bold opacity-50">
                                            {step.number}
                                        </span>
                                    </div>

                                    {/* Step title */}
                                    <div className="space-y-1">
                                        <Heading
                                            level={4}
                                            color="text-text-secondary"
                                            fontFamily="roboto"
                                            className="text-lg text-center"
                                        >
                                            {step.title}
                                        </Heading>
                                        <Heading
                                            level={4}
                                            color="text-text-secondary"
                                            fontFamily="roboto"
                                            className="text-lg text-center"
                                        >
                                            {step.subtitle}
                                        </Heading>
                                    </div>
                                </div>
                            ))}
                        </div>
                    </div>

                    {/* Mobile layout - vertical */}
                    <div className="lg:hidden space-y-6 xs:space-y-8 sm:space-y-10 mt-10">
                        {steps.map((step, index) => (
                            <div key={index} className="flex flex-col items-center text-center space-y-4 xs:space-y-6 sm:space-y-8">
                                {/* Circle with number */}
                                <div className="w-16 xs:w-18 sm:w-20 h-16 xs:h-18 sm:h-20 rounded-full p-10 bg-gradient-to-br from-blue-500 to-purple-600 flex items-center justify-center flex-shrink-0">
                                    <span className="text-white text-lg xs:text-xl sm:text-2xl font-bold opacity-50">
                                        {step.number}
                                    </span>
                                </div>

                                {/* Step title and subtitle */}
                                <div className="space-y-1">
                                    <h3 className="text-base xs:text-lg sm:text-lg font-bold text-gray-900">
                                        {step.title}
                                    </h3>
                                    <h3 className="text-base xs:text-lg sm:text-lg font-bold text-gray-900">
                                        {step.subtitle}
                                    </h3>
                                </div>

                                {/* Connecting line for mobile (except last item) */}
                                {index < steps.length - 1 && (
                                    <div className="w-0.5 h-6 xs:h-8 sm:h-10 bg-blue-400 self-center" />
                                )}
                            </div>
                        ))}
                    </div>
                </div>
            </section>
            {/* Feature Section */}
            <section className="py-8 xs:py-10 sm:py-12 md:py-14 lg:py-16 px-4 xs:px-6 sm:px-8 md:px-10 lg:px-12 xl:px-10 2xl:px-20">
                <Heading
                    level={1}
                    color="text-[#2563EB]"
                    fontFamily="akira"
                    className="text-xl xs:text-2xl sm:text-2xl md:text-3xl lg:text-4xl"
                >
                    Service Features
                </Heading>
                <div className="flex xs:flex-col sm:flex-col md:flex-col lg:flex-col xl:flex-row items-center justify-between mt-16">
                    <div className="xl:w-6/12 w-full mb-16 lg:mb-0">
                        <Image
                            src={feature}
                            alt="Future technology"
                            className=""
                        />
                    </div>
                    <div className="xl:w-6/12 w-full pe-0 md:pe-16">

                        <div className='mt-10 space-y-16'>
                            {featureData.map((feature, index) => (
                                <div
                                    key={index}
                                    className="w-full"
                                >
                                    {/* Title and Description */}
                                    <div className="flex-grow text-left">
                                        <div className="flex items-start">
                                            <div className="w-12 h-12 flex items-center justify-center rounded-lg -translate-y-2 xs:-translate-y-2.5 sm:-translate-y-3 md:-translate-y-3.5 lg:-translate-y-4">
                                                <SvgIcon svg={feature.icon} />
                                            </div>
                                            <div className="mx-4">
                                                <h3 className="text-xl font-semibold text-gray-800">{feature.title}</h3>
                                            </div>
                                        </div>
                                        <div className="ms-16 mt-2">
                                            <p className="text-gray-600">{feature.description}</p>
                                        </div>
                                    </div>
                                </div>

                            ))}
                        </div>
                    </div>
                </div>
            </section>
            {/* Choose */}
        </div>
    );
}
