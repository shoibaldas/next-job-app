'use client';
import { useEffect } from "react";

const Modal = ({ isOpen, onClose, headerContent, bodyContent, footerContent }) => {
    useEffect(() => {
        // Close modal when pressing Escape
        const handleEscape = (event) => {
            if (event.key === "Escape") onClose();
        };
        document.addEventListener("keydown", handleEscape);
        return () => document.removeEventListener("keydown", handleEscape);
    }, [onClose]);

    if (!isOpen) return null;

    return (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex justify-center items-center z-50">
            <div className="bg-white rounded-lg shadow-lg max-w-lg w-full">
                {/* Header */}
                <div className="p-4 border-b flex justify-between items-center">
                    <h2 className="text-xl font-semibold text-gray-800">{headerContent}</h2>
                    <button onClick={onClose} className="text-gray-500 hover:text-gray-700 text-xl">&times;</button>
                </div>

                {/* Body */}
                <div className="p-4">{bodyContent}</div>

                {/* Footer */}
                <div className="p-4 border-t flex justify-end space-x-2">
                    {footerContent}
                </div>
            </div>
        </div>
    );
};

export default Modal;
