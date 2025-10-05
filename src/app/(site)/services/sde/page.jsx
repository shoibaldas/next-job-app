'use client';

import Banner from "@/components/Banner";
import BreadCrumbs from "@/components/BreadCrumbs";
import usePageTitle from "@/components/hooks/usePageTitle";
import { FiCheck, FiArrowRight, FiPhone, FiMail, FiCode, FiSmartphone, FiDatabase, FiLayers, FiStar, FiGrid } from "react-icons/fi";
import Link from "next/link";
import Button from "@/components/ui/button";

export default function SoftwareDevelopmentPage() {
    usePageTitle('Software Development');

    return (
        <div className="min-h-screen">
            <div className='relative'>
                <Banner customTitle="Software Development"></Banner>
                <div className="absolute top-32 md:top-36 lg:top-36 xl:top-48 2xl:top-52 px-6 lg:px-10 xl:px-10 2xl:px-20 md:px-6">
                    <BreadCrumbs></BreadCrumbs>
                </div>
            </div>

            {/* Hero Section */}
            <section className="relative overflow-hidden bg-white py-16">
                <div className="mx-auto max-w-7xl px-6 grid md:grid-cols-2 gap-10 items-center">
                    <div>
                        <h1 className="text-4xl md:text-5xl font-bold leading-tight text-gray-900">Software Development</h1>
                        <p className="mt-4 text-lg text-gray-600">Designing and building secure, scalable products—fast. From quick marketing sites to enterprise-grade platforms, our team ships reliable software that grows with your business.</p>
                        <ul className="mt-6 space-y-2 text-gray-600">
                            {[
                                "End‑to‑end delivery: strategy → UX → build → launch",
                                "Cloud‑native, secure by design (DevSecOps)",
                                "Clear timelines, transparent pricing, hands‑on support",
                            ].map((text) => (
                                <li key={text} className="flex items-start gap-3">
                                    <FiCheck className="mt-0.5 h-5 w-5 text-green-500" />
                                    <span>{text}</span>
                                </li>
                            ))}
                        </ul>
                        <div className="mt-8 flex flex-wrap gap-3">
                            <Link href="/contact">

                                <Button
                                    variant="primary"
                                    size="md"
                                    icon={<FiArrowRight />}
                                    iconPosition="right"
                                >
                                    Talk to an engineer
                                </Button>
                            </Link>
                        </div>
                    </div>
                    {/* <div className="grid grid-cols-2 gap-4">
                        <div className="rounded-2xl bg-gray-50 p-6 border border-gray-200">
                            <FiCode className="h-8 w-8 text-blue-600" />
                            <p className="mt-3 text-gray-600">TypeScript • Node.js • Python • .NET</p>
                        </div>
                        <div className="rounded-2xl bg-gray-50 p-6 border border-gray-200">
                            <FiSmartphone className="h-8 w-8 text-blue-600" />
                            <p className="mt-3 text-gray-600">iOS/Android • Flutter • React Native</p>
                        </div>
                        <div className="rounded-2xl bg-gray-50 p-6 border border-gray-200">
                            <FiDatabase className="h-8 w-8 text-blue-600" />
                            <p className="mt-3 text-gray-600">Postgres • MySQL • MongoDB • Redis</p>
                        </div>
                        <div className="rounded-2xl bg-gray-50 p-6 border border-gray-200">
                            <FiLayers className="h-8 w-8 text-blue-600" />
                            <p className="mt-3 text-gray-600">Azure • AWS • CI/CD • Containers</p>
                        </div>
                    </div> */}
                </div>
            </section>

            {/* How We Work */}
            <section className="bg-gray-50 py-16">
                <div className="mx-auto max-w-7xl px-6">
                    <h2 className="text-2xl md:text-3xl font-bold text-gray-900">How We Work</h2>
                    <div className="mt-10 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
                        {[
                            { n: "01", t1: "Discovery &", t2: "Planning", d: "Workshops, requirements, and a clear delivery plan with milestones." },
                            { n: "02", t1: "Design &", t2: "Architecture", d: "Wireframes, UX/UI, and a scalable cloud architecture blueprint." },
                            { n: "03", t1: "Build &", t2: "Integrate", d: "Agile sprints, CI/CD, test automation, and 3rd‑party/API integrations." },
                            { n: "04", t1: "QA, Launch &", t2: "Support", d: "Performance/security checks, go‑live, and post‑launch support." },
                        ].map((step) => (
                            <div key={step.n} className="relative rounded-2xl bg-white p-6 shadow-sm border border-gray-200">
                                <span className="absolute -top-3 left-6 inline-flex h-10 w-10 items-center justify-center rounded-full bg-blue-600 text-sm font-bold text-white">{step.n}</span>
                                <h3 className="mt-4 text-xl font-semibold text-gray-900">{step.t1} <br /> {step.t2}</h3>
                                <p className="mt-2 text-sm text-gray-600">{step.d}</p>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* Core Services */}
            <section className="bg-white py-16">
                <div className="mx-auto max-w-7xl px-6">
                    <h2 className="text-2xl md:text-3xl font-bold text-gray-900">Core Services</h2>
                    <p className="mt-2 text-gray-600">Pick a starting point below. We can tailor every package for your brand, scale, and compliance needs.</p>

                    <div className="mt-10 grid gap-6 md:grid-cols-2 xl:grid-cols-3">
                        <ServiceCard number={1} title="Started Sites" bullets={[
                            "1‑Page website",
                            "Custom design / readymade theme",
                            "Blog option with CMS & Login",
                            "Hosting + Domain + SSL",
                            "1–5 GB storage",
                            "7‑day support",
                        ]} />

                        <ServiceCard number={2} title="Small business site" bullets={[
                            "5–10 pages (Home, services, contacts)",
                            "Mobile & tablet responsive",
                            "Contact form with email alerts",
                            "Hosting + Domain + SSL",
                            "5–10 GB storage",
                            "14‑day support",
                        ]} />

                        <ServiceCard number={3} title="Web or mobile app" bullets={[
                            "Custom design (Front & Backend)",
                            "User login & email notifications",
                            "Payment gateway & API integration",
                            "Hosting + Domain + SSL",
                            "10–25 GB storage",
                            "30‑day support",
                        ]} />

                        <ServiceCard number={4} title="E‑commerce site" star bullets={[
                            "Product pages, cart & checkout",
                            "Admin dashboard + CMS",
                            "Payment integration",
                            "Basic analytics + login + order emails",
                            "Emails • Hosting (Shared/VPS)",
                            "Domain + SSL • 25–50 GB Storage",
                            "30‑day support",
                        ]} />

                        <ServiceCard number={5} title="Custom full stack app" star bullets={[
                            "Full custom front & back end",
                            "Real‑time features (chat, live & data)",
                            "Admin panel, analytics & APIs",
                            "Login, email & SMS integration",
                            "Dedicated server + custom domain",
                            "60‑day support or monthly plan",
                        ]} />

                        <ServiceCard number={6} title="Product UI" bullets={[
                            "Convert Figma to responsive UI",
                            "Clean, scalable components",
                            "Mobile, tablet & desktop friendly",
                            "Accessibility & performance optimized",
                            "Adjusted for better UX",
                            "14‑day support after delivery",
                        ]} />
                    </div>

                    <div className="mt-10 flex flex-wrap items-center gap-3">
                        <Link href="/contact" className="inline-flex items-center gap-2 rounded-2xl bg-green-500 hover:bg-green-400 px-5 py-3 font-semibold text-white transition">
                            Get a tailored quote <FiArrowRight className="h-4 w-4" />
                        </Link>
                    </div>
                </div>
            </section>

            {/* FAQs */}
            <section className="bg-white py-16">
                <div className="mx-auto max-w-7xl px-6">
                    <h2 className="text-2xl md:text-3xl font-bold text-gray-900">FAQs</h2>
                    <div className="mt-8 grid gap-6 md:grid-cols-2">
                        <FaqItem q="How fast can you launch a 1‑page site?" a="Typically 10–15 business days including content and DNS/SSL setup." />
                        <FaqItem q="Do you provide ongoing maintenance?" a="Yes—monthly plans include updates, security patches, backups, monitoring, and minor enhancements." />
                        <FaqItem q="Can you integrate with our existing systems?" a="Absolutely. We routinely connect CRMs, ERPs, payment gateways, SMS/email providers, analytics, and custom APIs." />
                        <FaqItem q="How do you ensure security & quality?" a="Secure SDLC, code reviews, SAST/DAST (when required), environment isolation, and staging approvals." />
                    </div>
                </div>
            </section>

            {/* CTA footer */}
            <section className="bg-gray-50 py-16">
                <div className="mx-auto max-w-7xl px-6 grid gap-8 md:grid-cols-3 items-center">
                    <div className="md:col-span-2">
                        <h3 className="text-2xl font-bold text-gray-900">Ready to build?</h3>
                        <p className="mt-2 text-gray-600">Tell us about your product and we'll propose the fastest path to value—no fluff.</p>
                    </div>
                    <div className="flex gap-3 md:justify-end">
                        <Link href="/contact" className="inline-flex items-center gap-2 rounded-2xl bg-blue-600 hover:bg-blue-500 px-5 py-3 font-semibold text-white transition">
                            Book a free consult <FiArrowRight className="h-4 w-4" />
                        </Link>
                    </div>
                </div>
            </section>
        </div>
    );
}

// Components
function ServiceCard({ number, title, bullets, star = false }) {
    return (
        <div className="relative rounded-2xl bg-white p-6 shadow-sm border border-gray-200 hover:shadow-md transition">
            <div className="flex items-center justify-between">
                <span className="inline-flex h-10 w-10 items-center justify-center rounded-full bg-blue-600 text-sm font-bold text-white">{number}</span>
                {star && (
                    <span className="inline-flex items-center gap-1 rounded-full bg-amber-100 px-3 py-1 text-xs font-semibold text-amber-800">
                        <FiStar className="h-3.5 w-3.5" /> Popular
                    </span>
                )}
            </div>
            <h3 className="mt-3 text-xl font-semibold text-gray-900">{title}</h3>
            <ul className="mt-3 space-y-2 text-sm text-gray-600">
                {bullets.map((bullet) => (
                    <li key={bullet} className="flex gap-2">
                        <FiCheck className="mt-0.5 h-4 w-4 text-green-500" />
                        <span>{bullet}</span>
                    </li>
                ))}
            </ul>
        </div>
    );
}

function FaqItem({ q, a }) {
    return (
        <details className="group rounded-2xl bg-gray-50 p-5 border border-gray-200">
            <summary className="cursor-pointer list-none font-semibold flex items-center justify-between text-gray-900">
                {q}
                <FiArrowRight className="h-4 w-4 transition group-open:rotate-90" />
            </summary>
            <p className="mt-3 text-gray-600">{a}</p>
        </details>
    );
}
