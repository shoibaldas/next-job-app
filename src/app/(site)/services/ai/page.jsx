'use client';

import Banner from "@/components/Banner";
import BreadCrumbs from "@/components/BreadCrumbs";
import usePageTitle from "@/components/hooks/usePageTitle";
import { FiCheck, FiArrowRight, FiPhone, FiMail, FiCpu, FiZap, FiShield, FiTrendingUp, FiDatabase, FiSettings } from "react-icons/fi";
import { HiOutlineCog } from "react-icons/hi";
import { RiRobot2Line } from "react-icons/ri";
import Link from "next/link";
import { Heading } from "@/components/ui/Typography";
import Button from "@/components/ui/button";
import { MdKeyboardArrowRight } from "react-icons/md";
import Image from "next/image";

function getTechItems() {
    return [
        {
            name: "Azure OpenAI",
            icon: "/svgs/open.png"
        },
        {
            name: "Amazon Bedrock",
            icon: "/svgs/bed.png"
        },
        {
            name: "Google Gemini",
            icon: "/svgs/gem.png"
        },
        {
            name: "n8n",
            icon: "/svgs/n8n.png"
        },
        {
            name: "LangChain",
            icon: "/svgs/lang.png"
        },
        {
            name: "Azure ML",
            icon: "/svgs/ml.png"
        },
        {
            name: "TensorFlow",
            icon: "/svgs/tensor.png"
        },
        {
            name: "MLflow / Weights & Biases",
            icon: "/svgs/flow.png"
        },
        {
            name: "Databricks / Snowflake",
            icon: "/svgs/snow.png"
        },
        {
            name: "PyTorch",
            icon: "/svgs/torch.png"
        }
    ];
}

export default function ArtificialIntelligencePage() {
    usePageTitle('Artificial Intelligence');

    return (
        <div className="min-h-screen">
            <div className='relative'>
                <Banner customTitle="Artificial Intelligence"></Banner>
                <div className="absolute top-32 md:top-36 lg:top-36 xl:top-48 2xl:top-52 px-6 lg:px-10 xl:px-10 2xl:px-20 md:px-6">
                    <BreadCrumbs></BreadCrumbs>
                </div>
            </div>

            {/* Hero Section */}
            <section className="relative overflow-hidden bg-white py-8 sm:py-12 md:py-16">
                <div className="mx-auto max-w-7xl px-4 sm:px-6 grid lg:grid-cols-2 gap-6 sm:gap-8 lg:gap-10 items-center">
                    <div>
                        <Heading
                            level={2}
                            color="text-[#2563EB]"
                            fontFamily="akira"
                            className="text-xl xs:text-2xl sm:text-2xl md:text-3xl lg:text-4xl leading-tight"
                        >
                            Artificial Intelligence & <br className="hidden sm:block" /> Machine Learning
                        </Heading>
                        <p className="mt-3 sm:mt-4 text-base sm:text-lg text-gray-600 leading-relaxed">We build practical AI—LLM apps, automations, and custom models—on <span className="font-semibold">Azure OpenAI</span>, <span className="font-semibold">Amazon Bedrock</span>, <span className="font-semibold">Google Gemini</span> and <span className="font-semibold">n8n</span>. Our R&D engineers also design raw algorithms across supervised, unsupervised, reinforcement and deep learning.</p>
                        <ul className="mt-4 sm:mt-6 space-y-3 sm:space-y-2 text-gray-600">
                            {[
                                "Use‑case discovery and rapid prototyping",
                                "RAG, agents & workflow automations",
                                "MLOps with evaluation, guardrails & observability",
                            ].map((text) => (
                                <li key={text} className="flex items-start gap-2 sm:gap-3">
                                    <svg className="mt-1 sm:mt-2 flex-shrink-0" height="16" viewBox="0 0 22 16" fill="none" xmlns="http://www.w3.org/2000/svg">
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
                                    <span className="text-sm sm:text-base">{text}</span>
                                </li>
                            ))}
                        </ul>
                        <div className="mt-6 sm:mt-8 flex flex-wrap gap-3">
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
                    <div className="grid grid-cols-2 gap-3 sm:gap-4 mt-6 lg:mt-0">
                        <InfoTile icon={<RiRobot2Line className="h-6 w-6 sm:h-8 sm:w-8 text-blue-600" />} text="LLM apps • chatbots • copilots" />
                        <InfoTile icon={<HiOutlineCog className="h-6 w-6 sm:h-8 sm:w-8 text-blue-600" />} text="n8n automations & agents" />
                        <InfoTile icon={<FiCpu className="h-6 w-6 sm:h-8 sm:w-8 text-blue-600" />} text="Custom ML • SL/UL/RL/DL" />
                        <InfoTile icon={<FiShield className="h-6 w-6 sm:h-8 sm:w-8 text-blue-600" />} text="Responsible AI • governance" />
                    </div>
                </div>
            </section>

            {/* How We Work */}
            <section className="bg-gray-50 py-8 sm:py-12 md:py-16">
                <div className="mx-auto max-w-7xl px-4 sm:px-6">
                    <Heading
                        level={2}
                        color="text-[#2563EB]"
                        fontFamily="akira"
                        className="text-xl xs:text-2xl sm:text-2xl md:text-3xl lg:text-4xl text-center sm:text-left"
                    >
                        How We Work
                    </Heading>
                    <div className="mt-6 sm:mt-8 md:mt-10 grid gap-4 grid-cols-1 md:grid-cols-1 lg:grid-cols-2 xl:grid-cols-4">
                        {[
                            { n: "01", t1: "Discover &", t2: "Plan", d: "Workshops, ROI analysis, data/readiness assessment and model selection options." },
                            { n: "02", t1: "Prototype &", t2: "Validate", d: "Rapid PoCs: RAG/agent flows, prompts, evaluation harness and success metrics." },
                            { n: "03", t1: "Build &", t2: "Integrate", d: "APIs, UI, n8n workflows, vector search, analytics and security controls." },
                            { n: "04", t1: "Deploy &", t2: "Operate", d: "MLOps, observability, human‑in‑the‑loop, A/B tests and cost optimization." },
                        ].map((step) => (
                            <div key={step.n} className="relative rounded-xl sm:rounded-2xl bg-white p-4 sm:p-6 shadow-sm border border-gray-200">
                                <span className="absolute -top-2 sm:-top-3 left-4 sm:left-6 inline-flex h-8 w-8 sm:h-10 sm:w-10 items-center justify-center rounded-full bg-blue-600 text-xs sm:text-sm font-bold text-white">{step.n}</span>
                                <h3 className="mt-3 sm:mt-4 text-lg sm:text-xl font-semibold text-gray-900">{step.t1} <br /> {step.t2}</h3>
                                <p className="mt-2 text-xs sm:text-sm text-gray-600">{step.d}</p>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* Core Services */}
            <section className="bg-white py-8 sm:py-12 md:py-16">
                <div className="mx-auto max-w-7xl px-4 sm:px-6">
                    <Heading
                        level={2}
                        color="text-[#2563EB]"
                        fontFamily="akira"
                        className="text-xl xs:text-2xl sm:text-2xl md:text-3xl lg:text-4xl text-center sm:text-left"
                    >
                        Core Services
                    </Heading>
                    <p className="mt-2 text-sm sm:text-base text-gray-600">From LLM usage to ground‑up algorithms, we deliver production‑ready AI with strong security and governance.</p>

                    <div className="mt-6 sm:mt-8 md:mt-10 grid gap-4 grid-cols-1 md:grid-cols-1 lg:grid-cols-2 xl:grid-cols-3">
                        <ServiceCard
                            number={1}
                            title="AI Strategy & Discovery"
                            bullets={[
                                "Use‑case mapping & feasibility",
                                "Data audit, risk & compliance review",
                                "Platform fit: Azure OpenAI, Bedrock, Gemini",
                                "Cost model & roadmap",
                                "Pilot backlog & KPIs",
                            ]}
                            icon={<FiTrendingUp className="h-5 w-5" />}
                        />

                        <ServiceCard
                            number={2}
                            title="LLM Apps, RAG & Agents"
                            star
                            bullets={[
                                "Chatbots/copilots with grounding",
                                "RAG with vector DBs (pgvector, Pinecone, Redis)",
                                "Guardrails, safety & red‑teaming",
                                "Agentic workflows & function calling",
                                "Multi‑cloud: Azure OpenAI • Bedrock • Gemini",
                            ]}
                            icon={<RiRobot2Line className="h-5 w-5" />}
                        />

                        <ServiceCard
                            number={3}
                            title="Automations with n8n"
                            bullets={[
                                "Human‑in‑the‑loop pipelines",
                                "LLM tools/actions & webhooks",
                                "CRM/ERP/email/invoice automations",
                                "Data enrichment & notifications",
                                "CI/CD for flows & secrets mgmt",
                            ]}
                            icon={<HiOutlineCog className="h-5 w-5" />}
                        />

                        <ServiceCard
                            number={4}
                            title="Custom ML & R&D (SL/UL/RL/DL)"
                            star
                            bullets={[
                                "Raw algorithm design & prototyping",
                                "Classical ML, deep learning & policy gradients",
                                "Time series, CV, NLP & recommender systems",
                                "Experiment tracking (MLflow/W&B)",
                                "ONNX/TensorRT for edge & inference",
                            ]}
                            icon={<FiCpu className="h-5 w-5" />}
                        />

                        <ServiceCard
                            number={5}
                            title="MLOps & Productionization"
                            bullets={[
                                "Model registry, CI/CD & feature stores",
                                "Offline/online evals, telemetry & drift",
                                "Prompt/version management & rollout",
                                "Security: identity, secrets, data loss prevention",
                                "Cost & performance optimization",
                            ]}
                            icon={<FiZap className="h-5 w-5" />}
                        />

                        <ServiceCard
                            number={6}
                            title="Data & Platforms for AI"
                            bullets={[
                                "ETL/ELT pipelines & data quality",
                                "Vector DBs: pgvector, Pinecone, Redis",
                                "Databricks/Snowflake integration",
                                "Batch/stream: Airflow/Kafka",
                                "APIs & dashboards for insights",
                            ]}
                            icon={<FiDatabase className="h-5 w-5" />}
                        />
                    </div>

                    <div className="mt-6 sm:mt-8 md:mt-10 flex flex-wrap items-center justify-center sm:justify-start gap-3">
                        <Link href="/contact">
                            <Button
                                variant="primary"
                                size="md"
                                icon={<FiArrowRight />}
                                iconPosition="right"
                            >
                                Get an AI plan
                            </Button>
                        </Link>
                    </div>
                </div>
            </section>

            {/* Tools & Platforms */}
            <section className="bg-gray-50 py-8 sm:py-12 md:py-16">
                <div className="mx-auto max-w-7xl px-4 sm:px-6">
                    <Heading
                        level={2}
                        color="text-[#2563EB]"
                        fontFamily="akira"
                        className="text-xl xs:text-2xl sm:text-2xl md:text-3xl lg:text-4xl text-center sm:text-left"
                    >
                        Platforms & Tools
                    </Heading>
                    <div className="mt-6 sm:mt-8 grid grid-cols-1 gap-3 sm:gap-4 md:grid-cols-2 lg:grid-cols-4 xl:grid-cols-5">
                        {getTechItems().map((tech) => (
                            <div key={tech.name} className="rounded-lg sm:rounded-xl border border-gray-200 bg-white p-3 sm:p-4 text-center hover:border-blue-300 hover:shadow-sm transition-all duration-200 flex flex-col items-center gap-2">
                                <div className="w-full h-16 flex items-center justify-center">
                                    <img
                                        src={tech.icon}
                                        alt={`${tech.name} logo`}

                                        className="w-full h-full object-contain"
                                    />
                                </div>
                                <span className="text-xs sm:text-sm text-gray-600 font-medium mt-4">{tech.name}</span>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* FAQs */}
            <section className="bg-white py-8 sm:py-12 md:py-16">
                <div className="mx-auto max-w-7xl px-4 sm:px-6">
                    <Heading
                        level={2}
                        color="text-[#2563EB]"
                        fontFamily="akira"
                        className="text-xl xs:text-2xl sm:text-2xl md:text-3xl lg:text-4xl text-center lg:text-left"
                    >
                        Frequently <br /> Asked Questions
                    </Heading>

                    <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12 items-start">
                        {/* Left side - Image */}
                        <div className="order-2 lg:order-1">
                            <div className="relative rounded-2xl overflow-hidden bg-gradient-to-br from-blue-50 to-indigo-100 p-8 lg:p-12">
                                <div className="absolute inset-0 bg-gradient-to-br from-blue-600/10 to-purple-600/10"></div>
                                <div className="relative z-10">
                                    <Image
                                        src="/service/ai.png"
                                        alt="Software Development FAQ"
                                        width={400}
                                        height={320}
                                        className="w-full h-auto max-w-md mx-auto"
                                        priority={false}
                                    />
                                </div>

                                {/* Decorative elements */}
                                <div className="absolute top-4 right-4 w-20 h-20 bg-blue-200/30 rounded-full blur-xl"></div>
                                <div className="absolute bottom-4 left-4 w-16 h-16 bg-purple-200/30 rounded-full blur-lg"></div>
                            </div>
                        </div>

                        {/* Right side - FAQ Content */}
                        <div className="order-1 lg:order-2">

                            <div className="mt-6 sm:mt-8 grid gap-4 sm:gap-6 grid-cols-1">
                                <FaqItem q="Which platform should we start with—Azure OpenAI, Bedrock or Gemini?" a="We pick based on data residency, governance, security/compliance, model fit, cost and integration needs. Many clients go multi‑cloud with a primary and a backup." />
                                <FaqItem q="Can you fine‑tune or customize models?" a="Yes. We support prompt tuning, LoRA/parameter‑efficient methods, embeddings, and classic supervised training—paired with evaluation harnesses and safety checks." />
                                <FaqItem q="How do you keep costs under control?" a="We design caching, truncation, batching, model routing and observability dashboards. We also test cheaper/compact models for suitable tasks." />
                                <FaqItem q="What about data privacy and security?" a="We implement encryption, identity controls, redaction, data minimization, network isolation and tenancy boundaries with audit logging." />
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* CTA Footer */}
            <section className="bg-gray-50 py-8 sm:py-12 md:py-16">
                <div className="mx-auto max-w-7xl px-4 sm:px-6 grid gap-6 sm:gap-8 md:grid-cols-3 items-center">
                    <div className="md:col-span-2 text-center md:text-left">
                        <h3 className="text-lg sm:text-xl md:text-2xl font-bold text-gray-900">Let&apos;s turn ideas into intelligent products.</h3>
                        <p className="mt-2 text-sm sm:text-base text-gray-600">From prototype to production, we&apos;ll help you ship AI that&apos;s reliable, responsible and fast.</p>
                    </div>
                    <div className="flex gap-3 justify-center md:justify-end">
                        <Link href="/contact">
                            <Button
                                variant="primary"
                                size="md"
                                icon={<FiArrowRight />}
                                iconPosition="right"
                            >
                                Book a free consultation
                            </Button>
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
        <div className="rounded-xl sm:rounded-2xl bg-gray-50 p-3 sm:p-4 md:p-6 border border-gray-200">
            {icon}
            <p className="mt-2 sm:mt-3 text-xs sm:text-sm text-gray-600">{text}</p>
        </div>
    );
}

function ServiceCard({ number, title, bullets, star = false, icon }) {
    return (
        <div className="relative rounded-xl sm:rounded-2xl bg-white p-4 sm:p-6 shadow-sm border border-gray-200 hover:shadow-md transition">
            <div className="flex items-center justify-between">
                <span className="inline-flex h-8 w-8 sm:h-10 sm:w-10 items-center justify-center rounded-full bg-blue-600 text-xs sm:text-sm font-bold text-white">{number}</span>
                {star && (
                    <span className="inline-flex items-center gap-1 rounded-full bg-amber-100 px-2 sm:px-3 py-1 text-xs font-semibold text-amber-800">
                        <FiShield className="h-3 w-3 sm:h-3.5 sm:w-3.5" /> <span className="hidden xs:inline">Featured</span>
                    </span>
                )}
            </div>
            <h3 className="mt-3 text-lg sm:text-xl font-semibold text-gray-900 flex items-center gap-2">{icon}{title}</h3>
            <ul className="mt-3 space-y-2 text-xs sm:text-sm text-gray-600">
                {bullets.map((bullet) => (
                    <li key={bullet} className="flex gap-2">
                        <FiCheck className="mt-0.5 h-3 w-3 sm:h-4 sm:w-4 text-green-500 flex-shrink-0" />
                        <span>{bullet}</span>
                    </li>
                ))}
            </ul>
        </div>
    );
}

function FaqItem({ q, a }) {
    return (
        <details className="group rounded-xl sm:rounded-2xl bg-gray-50 p-4 sm:p-5 border border-gray-200">
            <summary className="cursor-pointer list-none text-sm sm:text-base font-semibold flex items-center justify-between text-gray-900">
                {q}
                <MdKeyboardArrowRight className="h-8 w-8 text-blue-800 transition group-open:rotate-90 flex-shrink-0 ml-2" />
            </summary>
            <p className="mt-3 text-xs sm:text-sm text-gray-600">{a}</p>
        </details>
    );
}