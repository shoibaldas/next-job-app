'use client';
import Banner from '@/components/Banner';
import BreadCrumbs from '@/components/BreadCrumbs';
import React from 'react';
import { FiTrash2, FiPlus } from "react-icons/fi";
import { useForm, useFieldArray } from "react-hook-form";

const HireMe = () => {
    const {
        register,
        control,
        handleSubmit,
        formState: { errors },
    } = useForm({
        defaultValues: {
            firstName: "",
            lastName: "",
            email: "",
            address: "",
            designation: "",
            employer: "",
            skills: "",
            bio: "",
            projects: [{ title: "", description: "", url: "" }],
        },
    });

    const { fields, append, remove } = useFieldArray({
        control,
        name: "projects",
    });

    const onSubmit = (data) => {
        console.log("Form Data:", data);
        alert(JSON.stringify(data, null, 2));
    };

    return (
        <div className="min-h-screen">
            <div className='relative'>
                <Banner customTitle="Become a Consultant"></Banner>
                <div className="absolute top-40 xl:top-52 px-24 md:px-32">
                    <BreadCrumbs></BreadCrumbs>
                </div>
                <div className="px-6">
                <div className="max-w-7xl mx-auto bg-lightBackground text-lightText p-6 rounded-lg shadow-lg border border-blue-800 my-10">
                    <form onSubmit={handleSubmit(onSubmit)} className="space-y-4">
                        {/* First Name & Last Name */}
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                            <div>
                                <label className="block font-medium">First Name</label>
                                <input
                                    {...register("firstName", { required: "First name is required" })}
                                    className="w-full p-3 border border-gray-300 rounded-lg focus:ring focus:ring-blue-300"
                                />
                                {errors.firstName && <p className="text-red-500 text-sm">{errors.firstName.message}</p>}
                            </div>

                            <div>
                                <label className="block font-medium">Last Name</label>
                                <input
                                    {...register("lastName", { required: "Last name is required" })}
                                    className="w-full p-3 border border-gray-300 rounded-lg focus:ring focus:ring-blue-300"
                                />
                                {errors.lastName && <p className="text-red-500 text-sm">{errors.lastName.message}</p>}
                            </div>
                        </div>

                        {/* Email & Address */}
                        <div>
                            <label className="block font-medium">Email</label>
                            <input
                                type="email"
                                {...register("email", { required: "Email is required" })}
                                className="w-full p-3 border border-gray-300 rounded-lg focus:ring focus:ring-blue-300"
                            />
                            {errors.email && <p className="text-red-500 text-sm">{errors.email.message}</p>}
                        </div>

                        <div>
                            <label className="block font-medium text-white">Address</label>
                            <textarea
                                {...register("address")}
                                className="w-full p-3 border border-gray-300 rounded-lg focus:ring focus:ring-blue-300"
                            ></textarea>
                        </div>

                        {/* Designation & Employer */}
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                            <div>
                                <label className="block font-medium">Designation / Job Title</label>
                                <input
                                    {...register("designation")}
                                    className="w-full p-3 border border-gray-300 rounded-lg focus:ring focus:ring-blue-300"
                                />
                            </div>

                            <div>
                                <label className="block font-medium">Current Employer</label>
                                <input
                                    {...register("employer")}
                                    className="w-full p-3 border border-gray-300 rounded-lg focus:ring focus:ring-blue-300"
                                />
                            </div>
                        </div>

                        {/* Skills & Bio */}
                        <div>
                            <label className="block font-medium">Skills</label>
                            <input
                                {...register("skills")}
                                className="w-full p-3 border border-gray-300 rounded-lg focus:ring focus:ring-blue-300"
                                placeholder="E.g. JavaScript, React, Next.js"
                            />
                        </div>

                        <div>
                            <label className="block font-medium">Bio</label>
                            <textarea
                                {...register("bio")}
                                className="w-full p-3 border border-gray-300 rounded-lg focus:ring focus:ring-blue-300"
                                placeholder="Short description about yourself..."
                            ></textarea>
                        </div>

                        {/* Resume Upload */}
                        <div>
                            <label className="block font-medium">Upload Resume</label>
                            <input
                                type="file"
                                accept=".pdf,.doc,.docx"
                                onChange={(e) => setResume(e.target.files[0])}
                                className="w-full p-3 border border-gray-300 rounded-lg focus:ring focus:ring-blue-300 text-white"
                            />
                        </div>

                        {/* Profile Picture Upload */}
                        <div>
                            <label className="block font-medium">Upload Profile Picture</label>
                            <input
                                type="file"
                                accept="image/*"
                                onChange={(e) => setProfilePic(e.target.files[0])}
                                className="w-full p-3 border border-gray-300 rounded-lg focus:ring focus:ring-blue-300 text-white"
                            />
                        </div>

                        {/* Projects (Repeater Field) */}
                        <div>
                            <label className="block font-medium">Projects</label>
                            {fields.map((item, index) => (
                                <div key={item.id} className="border p-4 rounded-lg bg-gray-100 mb-4">
                                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                                        <input
                                            {...register(`projects.${index}.title`, { required: "Project title is required" })}
                                            className="w-full p-3 border border-gray-300 rounded-lg focus:ring focus:ring-blue-300"
                                            placeholder="Project Title"
                                        />
                                        <input
                                            {...register(`projects.${index}.url`)}
                                            className="w-full p-3 border border-gray-300 rounded-lg focus:ring focus:ring-blue-300"
                                            placeholder="Project URL"
                                        />
                                    </div>
                                    <textarea
                                        {...register(`projects.${index}.description`)}
                                        className="w-full mt-2 p-3 border border-gray-300 rounded-lg focus:ring focus:ring-blue-300"
                                        placeholder="Project Description"
                                    ></textarea>
                                    <button
                                        type="button"
                                        onClick={() => remove(index)}
                                        className="mt-2 bg-red-500 text-white px-3 py-2 rounded-lg flex items-center"
                                    >
                                        <FiTrash2 className="mr-2" /> Remove
                                    </button>
                                </div>
                            ))}
                            <button
                                type="button"
                                onClick={() => append({ title: "", description: "", url: "" })}
                                className="bg-blue-600 text-white px-4 py-2 rounded-lg flex items-center mt-2"
                            >
                                <FiPlus className="mr-2" /> Add Project
                            </button>
                        </div>

                        {/* Submit Button */}
                        <button
                            type="submit"
                            className="w-full bg-blue-600 text-white font-bold py-3 rounded-lg hover:bg-blue-700 transition"
                        >
                            Submit
                        </button>
                    </form>
                </div>
                </div>
                
            </div>
        </div>
    )
}

export default HireMe;
