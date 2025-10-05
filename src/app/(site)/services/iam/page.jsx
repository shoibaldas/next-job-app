'use client';

import Banner from "@/components/Banner";
import BreadCrumbs from "@/components/BreadCrumbs";
import usePageTitle from "@/components/hooks/usePageTitle";
import { FiCheck, FiArrowRight, FiPhone, FiMail, FiShield, FiKey, FiUsers, FiAward, FiGlobe, FiTool } from "react-icons/fi";
import Link from "next/link";

export default function IdentityAccessManagementPage() {
    usePageTitle('Identity and Access Management');

    return (
        <div className="min-h-screen">
            <div className='relative'>
                <Banner customTitle="Identity and Access Management"></Banner>
                <div className="absolute top-32 md:top-36 lg:top-36 xl:top-48 2xl:top-52 px-6 lg:px-10 xl:px-10 2xl:px-20 md:px-6">
                    <BreadCrumbs></BreadCrumbs>
                </div>
            </div>

            {/* Hero Section */}
            <section className="relative overflow-hidden bg-white py-16">
                <div className="mx-auto max-w-7xl px-6 grid md:grid-cols-2 gap-10 items-center">
                    <div>
                        <h1 className="text-4xl md:text-5xl font-bold leading-tight text-gray-900">Identity & Access Management</h1>
                        <p className="mt-4 text-lg text-gray-600">We design and implement <span className="font-semibold">cloud identity</span> on Azure Entra™ — secure SSO, MFA & Conditional Access for your workforce, and modern CIAM with Entra External ID for your customers and partners.</p>
                        <ul className="mt-6 space-y-2 text-gray-600">
                            {[
                                "Zero‑Trust baseline with MFA, device & risk signals",
                                "SSO (OIDC/SAML) to SaaS and custom apps",
                                "Identity Governance with PIM, access reviews & least privilege",
                            ].map((text) => (
                                <li key={text} className="flex items-start gap-3">
                                    <FiCheck className="mt-0.5 h-5 w-5 text-green-500" />
                                    <span>{text}</span>
                                </li>
                            ))}
                        </ul>
                        <div className="mt-8 flex flex-wrap gap-3">
                            <Link href="/contact" className="inline-flex items-center gap-2 rounded-2xl bg-blue-600 hover:bg-blue-500 px-5 py-3 font-semibold text-white shadow-lg transition">
                                Talk to an identity architect <FiArrowRight className="h-4 w-4" />
                            </Link>
                        </div>
                    </div>
                    <div className="grid grid-cols-2 gap-4">
                        <InfoTile icon={<FiShield className="h-8 w-8 text-blue-600" />} text="Conditional Access • Risk‑based policies" />
                        <InfoTile icon={<FiKey className="h-8 w-8 text-blue-600" />} text="Passwordless (FIDO2, Passkeys, Authenticator)" />
                        <InfoTile icon={<FiUsers className="h-8 w-8 text-blue-600" />} text="B2B collaboration & External ID (CIAM)" />
                        <InfoTile icon={<FiAward className="h-8 w-8 text-blue-600" />} text="Governance • PIM • Access Reviews" />
                    </div>
                </div>
            </section>

            {/* How We Work */}
            <section className="bg-gray-50 py-16">
                <div className="mx-auto max-w-7xl px-6">
                    <h2 className="text-2xl md:text-3xl font-bold text-gray-900">How We Work</h2>
                    <div className="mt-10 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
                        {[
                            { n: "01", t1: "Assess &", t2: "Plan", d: "Tenant review, licensing, risk posture, identity sources and app inventory." },
                            { n: "02", t1: "Design &", t2: "Pilot", d: "Conditional Access, MFA/passwordless, CIAM flows, PIM model. Prove with a pilot." },
                            { n: "03", t1: "Implement &", t2: "Integrate", d: "SSO to apps (OIDC/SAML), SCIM/HR provisioning, automation via Graph." },
                            { n: "04", t1: "Govern &", t2: "Operate", d: "Access reviews, entitlement management, runbooks, monitoring & tuning." },
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
                    <p className="mt-2 text-gray-600">Azure Entra ID for workforce identity and Entra External ID for CIAM. Choose a package and we'll tailor it to your environment.</p>

                    <div className="mt-10 grid gap-6 md:grid-cols-2 xl:grid-cols-3">
                        <ServiceCard
                            number={1}
                            title="Entra ID Foundation Quickstart"
                            bullets={[
                                "Tenant hardening, break‑glass admin",
                                "MFA + SSPR baseline, password policies",
                                "Starter Conditional Access (location/device/risk)",
                                "Audit/monitoring & incident runbook",
                                "Knowledge transfer & documentation",
                            ]}
                            icon={<FiShield className="h-5 w-5" />}
                        />

                        <ServiceCard
                            number={2}
                            title="Secure Workforce Access"
                            bullets={[
                                "SSO to SaaS & custom apps (OIDC/SAML)",
                                "Conditional Access with device compliance",
                                "Passwordless (FIDO2/Passkeys/Authenticator)",
                                "Risk‑based sign‑in & step‑up verification",
                                "Sign‑in logs, Workbooks & alerting",
                            ]}
                            icon={<FiUsers className="h-5 w-5" />}
                        />

                        <ServiceCard
                            number={3}
                            title="CIAM with Entra External ID"
                            bullets={[
                                "Customer sign‑up/sign‑in UX & branding",
                                "Social/enterprise IdPs, email/SMS verification",
                                "Progressive profiling & custom attributes",
                                "Token lifetimes, custom claims & API protection",
                                "SSO across portals & mobile apps",
                            ]}
                            icon={<FiGlobe className="h-5 w-5" />}
                            star
                        />

                        <ServiceCard
                            number={4}
                            title="Identity Governance & PIM"
                            bullets={[
                                "Entitlement Management (access packages)",
                                "Access Reviews & lifecycle workflows",
                                "PIM for Entra roles & Azure resources",
                                "Just‑in‑time access, approval & auditing",
                                "SoD checks & role separation",
                            ]}
                            icon={<FiAward className="h-5 w-5" />}
                            star
                        />

                        <ServiceCard
                            number={5}
                            title="App & API Integration"
                            bullets={[
                                "App registrations & enterprise apps",
                                "Custom scopes/roles, Graph & OAuth flows",
                                "SCIM/HR‑driven provisioning (Workday, SAP)",
                                "B2B collaboration & external partners",
                                "Secrets & cert lifecycle automation",
                            ]}
                            icon={<FiKey className="h-5 w-5" />}
                        />

                        <ServiceCard
                            number={6}
                            title="Migrations & Modernization"
                            bullets={[
                                "Azure AD B2C → Entra External ID",
                                "Hybrid join & cloud sync strategy",
                                "Policy consolidation & cleanup",
                                "Adoption plan, training & change mgmt",
                            ]}
                            icon={<FiTool className="h-5 w-5" />}
                        />
                    </div>

                    <div className="mt-10 flex flex-wrap items-center gap-3">
                        <Link href="/contact" className="inline-flex items-center gap-2 rounded-2xl bg-green-500 hover:bg-green-400 px-5 py-3 font-semibold text-white transition">
                            Get an IAM roadmap <FiArrowRight className="h-4 w-4" />
                        </Link>
                    </div>
                </div>
            </section>

            {/* Tools & Platforms */}
            <section className="bg-gray-50 py-16">
                <div className="mx-auto max-w-7xl px-6">
                    <h2 className="text-2xl md:text-3xl font-bold text-gray-900">Platforms & Tools</h2>
                    <div className="mt-8 grid grid-cols-2 gap-4 md:grid-cols-3 lg:grid-cols-5">
                        {[
                            "Azure Entra ID (P1/P2)",
                            "Entra External ID (CIAM)",
                            "Conditional Access",
                            "Identity Governance",
                            "Privileged Identity Management (PIM)",
                            "Microsoft Graph API",
                        ].map((tech) => (
                            <div key={tech} className="rounded-xl border border-gray-200 bg-white px-4 py-3 text-sm text-gray-600">{tech}</div>
                        ))}
                    </div>
                </div>
            </section>

            {/* FAQs */}
            <section className="bg-white py-16">
                <div className="mx-auto max-w-7xl px-6">
                    <h2 className="text-2xl md:text-3xl font-bold text-gray-900">FAQs</h2>
                    <div className="mt-8 grid gap-6 md:grid-cols-2">
                        <FaqItem q="Entra ID vs. Entra External ID — what's the difference?" a="Entra ID secures your employees/partners (workforce identity). Entra External ID is CIAM for customers and external users with tailored sign‑up/sign‑in, branding and data controls." />
                        <FaqItem q="Can we enable passwordless across the company?" a="Yes. We deploy FIDO2 keys, Passkeys and Microsoft Authenticator with Conditional Access for step‑up verification where required." />
                        <FaqItem q="How do you enforce least privilege?" a="We combine PIM, access packages and access reviews to grant just‑in‑time permissions with approvals, auditing and automatic expiry." />
                    </div>
                </div>
            </section>

            {/* CTA Footer */}
            <section className="bg-gray-50 py-16">
                <div className="mx-auto max-w-7xl px-6 grid gap-8 md:grid-cols-3 items-center">
                    <div className="md:col-span-2">
                        <h3 className="text-2xl font-bold text-gray-900">Make identity your new perimeter.</h3>
                        <p className="mt-2 text-gray-600">We'll align policies, apps and governance to a Zero‑Trust model—without slowing your teams down.</p>
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
function InfoTile({ icon, text }) {
    return (
        <div className="rounded-2xl bg-gray-50 p-6 border border-gray-200">
            {icon}
            <p className="mt-3 text-gray-600">{text}</p>
        </div>
    );
}

function ServiceCard({ number, title, bullets, star = false, icon }) {
    return (
        <div className="relative rounded-2xl bg-white p-6 shadow-sm border border-gray-200 hover:shadow-md transition">
            <div className="flex items-center justify-between">
                <span className="inline-flex h-10 w-10 items-center justify-center rounded-full bg-blue-600 text-sm font-bold text-white">{number}</span>
                {star && (
                    <span className="inline-flex items-center gap-1 rounded-full bg-amber-100 px-3 py-1 text-xs font-semibold text-amber-800">
                        <FiAward className="h-3.5 w-3.5" /> Featured
                    </span>
                )}
            </div>
            <h3 className="mt-3 text-xl font-semibold text-gray-900 flex items-center gap-2">{icon}{title}</h3>
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