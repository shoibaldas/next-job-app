'use client';

import Banner from "@/components/Banner";
import BreadCrumbs from "@/components/BreadCrumbs";
import usePageTitle from "@/components/hooks/usePageTitle";
import { FiCheck, FiArrowRight, FiPhone, FiMail, FiCpu, FiZap, FiShield, FiTrendingUp, FiDatabase, FiSettings } from "react-icons/fi";
import { HiOutlineCog } from "react-icons/hi";
import { RiRobot2Line } from "react-icons/ri";
import Link from "next/link";

export default function ArtificialIntelligencePage() {
    usePageTitle('Artificial Intelligence & Machine Learning');

    return (
        <div className="min-h-screen">
            <div className='relative'>
                <Banner customTitle="Artificial Intelligence & Machine Learning"></Banner>
                <div className="absolute top-32 md:top-36 lg:top-36 xl:top-48 2xl:top-52 px-6 lg:px-10 xl:px-10 2xl:px-20 md:px-6">
                    <BreadCrumbs></BreadCrumbs>
                </div>
            </div>

            {/* Hero Section */}
            <section className="relative overflow-hidden bg-white py-16">
                <div className="mx-auto max-w-7xl px-6 grid md:grid-cols-2 gap-10 items-center">
                    <div>
                        <h1 className="text-4xl md:text-5xl font-bold leading-tight text-gray-900">Artificial Intelligence & Machine Learning</h1>
                        <p className="mt-4 text-lg text-gray-600">We build practical AI—LLM apps, automations, and custom models—on <span className="font-semibold">Azure OpenAI</span>, <span className="font-semibold">Amazon Bedrock</span>, <span className="font-semibold">Google Gemini</span> and <span className="font-semibold">n8n</span>. Our R&D engineers also design raw algorithms across supervised, unsupervised, reinforcement and deep learning.</p>
                        <ul className="mt-6 space-y-2 text-gray-600">
                            {[
                                "Use‑case discovery and rapid prototyping",
                                "RAG, agents & workflow automations",
                                "MLOps with evaluation, guardrails & observability",
                            ].map((text) => (
                                <li key={text} className="flex items-start gap-3">
                                    <FiCheck className="mt-0.5 h-5 w-5 text-green-500" />
                                    <span>{text}</span>
                                </li>
                            ))}
                        </ul>
                        <div className="mt-8 flex flex-wrap gap-3">
                            <Link href="/contact" className="inline-flex items-center gap-2 rounded-2xl bg-blue-600 hover:bg-blue-500 px-5 py-3 font-semibold text-white shadow-lg transition">
                                Talk to an AI engineer <FiArrowRight className="h-4 w-4" />
                            </Link>
                        </div>
                    </div>
                    <div className="grid grid-cols-2 gap-4">
                        <InfoTile icon={<RiRobot2Line className="h-8 w-8 text-blue-600" />} text="LLM apps • chatbots • copilots" />
                        <InfoTile icon={<HiOutlineCog className="h-8 w-8 text-blue-600" />} text="n8n automations & agents" />
                        <InfoTile icon={<FiCpu className="h-8 w-8 text-blue-600" />} text="Custom ML • SL/UL/RL/DL" />
                        <InfoTile icon={<FiShield className="h-8 w-8 text-blue-600" />} text="Responsible AI • governance" />
                    </div>
                </div>
            </section>

            {/* How We Work */}
            <section className="bg-gray-50 py-16">
                <div className="mx-auto max-w-7xl px-6">
                    <h2 className="text-2xl md:text-3xl font-bold text-gray-900">How We Work</h2>
                    <div className="mt-10 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
                        {[
                            { n: "01", t1: "Discover &", t2: "Plan", d: "Workshops, ROI analysis, data/readiness assessment and model selection options." },
                            { n: "02", t1: "Prototype &", t2: "Validate", d: "Rapid PoCs: RAG/agent flows, prompts, evaluation harness and success metrics." },
                            { n: "03", t1: "Build &", t2: "Integrate", d: "APIs, UI, n8n workflows, vector search, analytics and security controls." },
                            { n: "04", t1: "Deploy &", t2: "Operate", d: "MLOps, observability, human‑in‑the‑loop, A/B tests and cost optimization." },
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
                    <p className="mt-2 text-gray-600">From LLM usage to ground‑up algorithms, we deliver production‑ready AI with strong security and governance.</p>

                    <div className="mt-10 grid gap-6 md:grid-cols-2 xl:grid-cols-3">
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

                    <div className="mt-10 flex flex-wrap items-center gap-3">
                        <Link href="/contact" className="inline-flex items-center gap-2 rounded-2xl bg-green-500 hover:bg-green-400 px-5 py-3 font-semibold text-white transition">
                            Get an AI plan <FiArrowRight className="h-4 w-4" />
                        </Link>
                    </div>
                </div>
            </section>

            {/* Platforms & Tools */}
            <section className="bg-gray-50 py-16">
                <div className="mx-auto max-w-7xl px-6">
                    <h2 className="text-2xl md:text-3xl font-bold text-gray-900">Platforms & Tools</h2>
                    <div className="mt-8 grid grid-cols-2 gap-4 md:grid-cols-3 lg:grid-cols-6">
                        {[
                            "Azure OpenAI",
                            "Amazon Bedrock",
                            "Google Gemini",
                            "n8n",
                            "LangChain",
                            "Azure ML",
                            "PyTorch / TensorFlow",
                            "MLflow / Weights & Biases",
                            "Databricks / Snowflake",
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
                        <FaqItem q="Which platform should we start with—Azure OpenAI, Bedrock or Gemini?" a="We pick based on data residency, governance, security/compliance, model fit, cost and integration needs. Many clients go multi‑cloud with a primary and a backup." />
                        <FaqItem q="Can you fine‑tune or customize models?" a="Yes. We support prompt tuning, LoRA/parameter‑efficient methods, embeddings, and classic supervised training—paired with evaluation harnesses and safety checks." />
                        <FaqItem q="How do you keep costs under control?" a="We design caching, truncation, batching, model routing and observability dashboards. We also test cheaper/compact models for suitable tasks." />
                        <FaqItem q="What about data privacy and security?" a="We implement encryption, identity controls, redaction, data minimization, network isolation and tenancy boundaries with audit logging." />
                    </div>
                </div>
            </section>

            {/* CTA Footer */}
            <section className="bg-gray-50 py-16">
                <div className="mx-auto max-w-7xl px-6 grid gap-8 md:grid-cols-3 items-center">
                    <div className="md:col-span-2">
                        <h3 className="text-2xl font-bold text-gray-900">Let&apos;s turn ideas into intelligent products.</h3>
                        <p className="mt-2 text-gray-600">From prototype to production, we&apos;ll help you ship AI that&apos;s reliable, responsible and fast.</p>
                    </div>
                    <div className="flex gap-3 md:justify-end">
                        <Link href="/contact" className="inline-flex items-center gap-2 rounded-2xl bg-blue-600 hover:bg-blue-500 px-5 py-3 font-semibold text-white transition">
                            Book a free consultation <FiArrowRight className="h-4 w-4" />
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
                        <FiShield className="h-3.5 w-3.5" /> Featured
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
