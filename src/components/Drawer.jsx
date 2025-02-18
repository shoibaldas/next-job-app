'use client';
import React, { useState } from "react";
import { useRouter, usePathname } from "next/navigation";
import { AiOutlineMenu, AiOutlineClose } from "react-icons/ai";
import { RiDashboardHorizontalLine } from "react-icons/ri";

const Drawer = ({ children, currentPath = "/" }) => {
    const [isOpen, setIsOpen] = useState(false);
    const router = useRouter();
    const pathname = usePathname();

    const menuItems = [
        { name: "Requests", path: "/dashboard/requests" },
        { name: "Hire Message", path: "/dashboard/messages" },
    ];

    const toggleDrawer = () => {
        setIsOpen(!isOpen);
    };

    const handleNavigation = (path) => {
        router.push(path);
        setIsOpen(false);
    };

    return (
        <div className="min-h-screen flex">
            {/* Overlay for mobile */}
            {isOpen && (
                <div
                    className="fixed inset-0 bg-black bg-opacity-50 z-20 lg:hidden"
                    onClick={toggleDrawer}
                />
            )}

            {/* Drawer */}
            <div
                className={`
          fixed lg:static inset-y-0 left-0 z-30
          w-64 bg-white shadow-lg transform
          ${isOpen ? "translate-x-0" : "-translate-x-full lg:translate-x-0"}
          transition-transform duration-300 ease-in-out
        `}
            >
                {/* Drawer Header */}
                <div className="h-16 flex items-center justify-between px-4 border-b">
                    <div className="flex items-center">
                    <div><RiDashboardHorizontalLine size={24} /></div>
                    <div className="mx-2">
                        <h2 className="text-xl font-semibold text-gray-800">Dashboard</h2>
                    </div>
                    </div>
                    <button onClick={toggleDrawer} className="lg:hidden p-2 rounded-md hover:bg-gray-800">
                        <AiOutlineClose size={24} />
                    </button>
                </div>

                {/* Navigation Menu */}
                <nav className="p-4">
                    <ul className="space-y-2">
                        {menuItems.map((item) => (
                            <li key={item.path}>
                                <button
                                    onClick={() => handleNavigation(item.path)}
                                    className={`
                    w-full text-left px-4 py-2 rounded-md transition-colors text-gray-800
                    ${pathname === item.path ? "bg-blue-100" : "hover:bg-gray-800 hover:text-white"}
                  `}
                                >
                                    {item.name}
                                </button>
                            </li>
                        ))}
                    </ul>
                </nav>
            </div>

            {/* Toggle Button - visible only on mobile */}
            <button
                onClick={toggleDrawer}
                className="lg:hidden fixed bottom-4 left-4 z-40 p-3 bg-blue-600 text-white rounded-full shadow-lg hover:bg-blue-700"
            >
                <AiOutlineMenu size={24} />
            </button>

            {/* Main Content */}
            <div className="flex-1 p-8">{children}</div>
        </div>
    );
};

export default Drawer;
