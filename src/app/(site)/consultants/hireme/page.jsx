'use client';
import Banner from '@/components/Banner';
import BreadCrumbs from '@/components/BreadCrumbs';
import React, { useState } from 'react';
import { FiTrash2, FiPlus } from "react-icons/fi";
import { useForm, useFieldArray } from "react-hook-form";
import axios from 'axios';

const HireMe = () => {
    const {
        register,
        control,
        handleSubmit,
        formState: { errors },
        reset
    } = useForm({
        defaultValues: {
            firstName: "",
            lastName: "",
            email: "",
            contact: "",
            address: "",
            designation: "",
            employer: "",
            skills: [{ name: "" }],
            bio: "",
            projects: [{ title: "", description: "", url: "" }],
            availability: "Immediate",
            workHours: "As_Per_Customer_Requirement",
        },
    });

    const { fields, append, remove } = useFieldArray({
        control,
        name: "projects",
    });

    const { fields: skillFields, append: appendSkill, remove: removeSkill } = useFieldArray({
        control,
        name: "skills",
    });

    const [resume, setResume] = useState(null);
    const [profilePic, setProfilePic] = useState(null);

    const uploadFileToS3 = async (file, folder) => {
        const formData = new FormData();
        formData.append("file", file);
        formData.append("folder", folder);

        const response = await axios.post("https://next-job-backend.vercel.app/api/upload", formData, {
            headers: { "Content-Type": "multipart/form-data" },
        });

        return response.data.fileUrl;
    };

    const onSubmit = async (data) => {
        try {
            let resumeUrl = null, profilePicUrl = null;

            // Upload Resume if available
            if (resume) {
                resumeUrl = await uploadFileToS3(resume, "consultants");
            }

            // Upload Profile Picture if available
            if (profilePic) {
                profilePicUrl = await uploadFileToS3(profilePic, "consultants");
            }

            // Now send consultant data in JSON format
            const consultantData = {
                firstName: data.firstName,
                lastName: data.lastName,
                email: data.email,
                contact: data.phone,
                address: data.address,
                designation: data.designation,
                employer: data.employer,
                skills: data.skills.map(skill => skill.name),
                bio: data.bio,
                resumeUrl,
                profilePicUrl,
                projects: data.projects,
                availability: data.availability,
                workHours: data.workHours,
                isPending: true,
                isApproved: false
            };

            const response = await axios.post("https://next-job-backend.vercel.app/api/consultants", consultantData, {
                headers: { "Content-Type": "application/json" },
            });

            console.log("Response:", response.data);
            alert("Consultant profile submitted successfully!");
            reset();
            // window.location.reload();
        } catch (error) {
            console.error("Error submitting form:", error);
            alert("Submission failed. Please try again.");
        }
    };

    return (
        <div className="min-h-screen">
            <div className='relative'>
                <Banner customTitle="Become a Consultant"></Banner>
                <div className="absolute top-40 xl:top-52 px-24 md:px-32">
                    <BreadCrumbs></BreadCrumbs>
                </div>
                {/* Top Section */}
                <section className="px-6 md:px-12 lg:px-24 py-16">
                    <div className="text-center md:text-left mb-12">
                        <h2 className="text-blue-600 text-sm font-semibold uppercase">Advirtise Yourself With Us</h2>
                        <div className="flex flex-col lg:flex-row">
                            <div className="w-full lg:w-1/2">
                                <div className="max-w-lg">
                                    <h1 className="text-4xl md:text-5xl font-bold text-gray-800 mb-4">
                                        You&apos;re one step away from unlocking endless opportunities!
                                    </h1>
                                </div>
                            </div>
                            <div className="w-full lg:w-1/2 px-5">
                                <p className="text-gray-600 text-lg">
                                    Showcase your talents to the right audience and unlock endless opportunities! Our platform connects skilled professionals like you with businesses and individuals actively seeking your expertise. Gain visibility, grow your network, and land exciting projects—all in one place. Don&apos;t just wait for opportunities—create them! 🚀
                                </p>
                            </div>
                        </div>

                    </div>
                    <div className="px-6">
                        <div className="max-w-7xl mx-auto bg-gradient-to-r from-purple-800/70 via-purple-800/100 to-blue-800/70 p-10 rounded-lg shadow-lgs mt-16">
                            <div className="bg-lightBackground text-lightText p-10 rounded-lg">
                                {/* onSubmit={handleSubmit(onSubmit)} */}
                                <form onSubmit={handleSubmit(onSubmit)} encType="multipart/form-data" className="space-y-4">
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

                                    {/* Email, Contact & Address */}
                                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
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
                                            <label className="block font-medium">Contact</label>
                                            <input
                                                type="tel"
                                                {...register("phone", {
                                                    required: "Contact is required",
                                                    pattern: {
                                                        value: /^\+?[1-9]\d{1,14}$/,
                                                        message: "Invalid phone number"
                                                    }
                                                })}
                                                className="w-full p-3 border border-gray-300 rounded-lg focus:ring focus:ring-blue-300"
                                                placeholder="+1 (555) 123-4567"
                                            />
                                            {errors.phone && <p className="text-red-500 text-sm">{errors.phone.message}</p>}
                                        </div>
                                    </div>
                                    <div>
                                        <label className="block font-medium">Address</label>
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

                                    {/* Skills (Repeater Field) */}
                                    <div>
                                        <label className="block font-medium">Skills</label>
                                        {skillFields.map((item, index) => (
                                            <div key={item.id} className="flex items-center gap-2 mb-2">
                                                <input
                                                    {...register(`skills.${index}.name`, { required: "Skill is required" })}
                                                    className="w-3/4 p-2 border border-gray-300 rounded-lg focus:ring focus:ring-blue-300"
                                                    placeholder="Skill Name"
                                                />
                                                {skillFields.length > 1 && ( // Prevent removal if it's the last skill
                                                    <button type="button" onClick={() => removeSkill(index)} className="text-red-500">
                                                        <FiTrash2 />
                                                    </button>
                                                )}
                                            </div>
                                        ))}
                                        <button
                                            type="button"
                                            onClick={() => appendSkill({ name: "" })}
                                            className="bg-blue-600 text-white px-3 py-2 rounded-lg flex items-center mt-2 text-sm"
                                        >
                                            <FiPlus className="mr-2" /> Add Skill
                                        </button>
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
                                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                                        {/* Profile Picture Upload */}
                                        <div>
                                            <label className="block font-medium">Upload Profile Picture</label>
                                            <input
                                                type="file"
                                                accept="image/*"
                                                onChange={(e) => setProfilePic(e.target.files[0])}
                                                className="w-full p-3 border border-gray-300 rounded-lg focus:ring focus:ring-blue-300"
                                            />
                                        </div>
                                        <div>
                                            <label className="block font-medium">Upload Resume</label>
                                            <input
                                                type="file"
                                                accept=".pdf,.doc,.docx"
                                                onChange={(e) => setResume(e.target.files[0])}
                                                className="w-full p-3 border border-gray-300 rounded-lg focus:ring focus:ring-blue-300"
                                            />
                                        </div>
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

                                    {/* Availability (Radio Buttons) */}
                                    <div>
                                        <label className="block font-medium">Availability</label>
                                        {["Immediate", "Two_Weeks", "One_Month", "After_One_Month"].map(value => (
                                            <label key={value} className="block">
                                                <input type="radio" value={value} {...register("availability")} className="mr-2" />
                                                {value.replace(/_/g, " ")}
                                            </label>
                                        ))}
                                    </div>

                                    {/* Work Hours (Radio Buttons) */}
                                    <div>
                                        <label className="block font-medium">Work Hours</label>
                                        {["As_Per_Customer_Requirement", "Mon_-_Fri", "Sat_-_Sun"].map(value => (
                                            <label key={value} className="block">
                                                <input type="radio" value={value} {...register("workHours")} className="mr-2" />
                                                {value.replace(/_/g, " ")}
                                            </label>
                                        ))}
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
                </section>
            </div>
        </div>
    )
}

export default HireMe;
