"use client";
import React from "react";
import { useForm } from "react-hook-form";
import axios from "axios";
import { useRouter } from "next/navigation";
import Banner from "@/components/Banner";
import BreadCrumbs from "@/components/BreadCrumbs";

export default function LoginPage() {
    const { register, handleSubmit, formState: { errors }, setError } = useForm();
    const router = useRouter();

    const onSubmit = async (data) => {
        try {
            const response = await axios.post("https://next-job-backend.vercel.app/api/auth/login", {
                email: data.email,
                password: data.password,
            });

            // Save token in local storage
            localStorage.setItem("token", response.data.token);

            // Redirect to protected page
            router.push("/dashboard");
        } catch (err) {
            setError("email", {
                type: "manual",
                message: err.response?.data?.message || "Login failed",
            });
        }
    };

    return (
        <div className="min-h-screen">
            <div className='relative'>
                <Banner customTitle="Login"></Banner>
                {/* <div className="absolute top-40 xl:top-52 px-24 md:px-32">
                    <BreadCrumbs></BreadCrumbs>
                </div> */}
            </div>
            <div className="flex items-center justify-center">
            <div className="p-6 rounded-lg shadow-lg mt-24 w-96">
                <h2 className="text-2xl font-semibold text-center">Login</h2>

                {errors.email && <p className="text-red-500 text-sm mt-2">{errors.email.message}</p>}

                <form onSubmit={handleSubmit(onSubmit)} className="mt-4">
                    <div>
                        <input
                            type="email"
                            placeholder="Email"
                            className="w-full p-2 border border-gray-300 rounded mt-2"
                            {...register("email", {
                                required: "Email is required",
                                pattern: {
                                    value: /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,6}$/,
                                    message: "Invalid email address"
                                },
                            })}
                        />
                        {errors.email && <p className="text-red-500 text-sm">{errors.email.message}</p>}
                    </div>

                    <div>
                        <input
                            type="password"
                            placeholder="Password"
                            className="w-full p-2 border border-gray-300 rounded mt-2"
                            {...register("password", {
                                required: "Password is required",
                            })}
                        />
                        {errors.password && <p className="text-red-500 text-sm">{errors.password.message}</p>}
                    </div>

                    <button
                        type="submit"
                        className="w-full bg-blue-600 text-white p-2 rounded mt-4 hover:bg-blue-700"
                    >
                        Login
                    </button>
                </form>
            </div>
        </div>
        </div>

    );
}
