import Link from "next/link";
import React from "react";
import { MdNavigateNext } from "react-icons/md";
import { FaPeopleGroup } from "react-icons/fa6";

const ConsultantSection = () => {
    const teamMembers = [
        {
            id: 1,
            avatar: "/avatar.png",
            name: "Alice Johnson",
            designation: "Product Manager",
        },
        {
            id: 2,
            avatar: "/avatar.png",
            name: "Michael Smith",
            designation: "Software Engineer",
        },
        {
            id: 3,
            avatar: "/avatar.png",
            name: "Sophia Lee",
            designation: "UX Designer",
        },
        {
            id: 4,
            avatar: "/avatar.png",
            name: "David Brown",
            designation: "Marketing Specialist",
        },
    ];

    return (
        <div className="bg-gray-50 rounded-lg py-16 px-4 sm:px-6 lg:px-8">
            <div className="max-w-screen-xl mx-auto text-center">
                {/* Title and Intro */}
                <div className="flex justify-center">
                    <div className="flex justify-center items-center text-4xl w-16 h-16 rounded-full bg-blue-600 text-gray-100 mb-4">
                        <FaPeopleGroup />
                    </div>
                    <div>
                        <h2 className="max-w-lg mt-2 px-2 font-sans text-3xl font-bold tracking-tight text-blue-600 sm:text-2xl sm:leading-none lg:text-4xl">
                            Meet Our Consultants
                        </h2>
                    </div>

                </div>
                <div className="mb-6">
                    <p className="text-base text-center text-gray-700 md:text-lg lg:text-xl">
                        Meet our global experts ready to assist you in achieving your goals.
                    </p>
                </div>
                <div>
                    <Link href="/services" className="inline-flex items-center rounded-lg font-semibold px-6 py-3 duration-200 text-white bg-blue-600 hover:bg-blue-700 transition"
                    >
                        <span className="mx-2">Browse Profiles</span>
                        <div
                            className="text-2xl"
                        >
                            <MdNavigateNext />
                        </div>

                    </Link>

                </div>
            </div>

            {/* Team Members Grid */}
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 mt-10 max-w-screen-xl mx-auto">
                {teamMembers.map((member) => (
                    <div
                        key={member.id}
                        className="bg-white shadow-lg rounded-lg overflow-hidden text-center"
                    >
                        <div className="relative w-full h-40">
                            <img
                                src={member.avatar}
                                alt={member.name}
                                className="w-full h-full object-cover"
                            />
                        </div>
                        <div className="p-6">
                            <h3 className="text-lg font-semibold text-gray-800">{member.name}</h3>
                            <p className="text-gray-500 mt-2">{member.designation}</p>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default ConsultantSection;
