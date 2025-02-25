'use client';
import { useEffect } from "react";

const Modal = ({ isOpen, onClose, headerContent, bodyContent, footerContent, maxWidth = "max-w-lg" }) => {
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
            <div className={`bg-white rounded-lg shadow-lg w-full ${maxWidth} max-h-[90vh] flex flex-col overflow-hidden`}>
                {/* Header - Stays Fixed */}
                <div className="p-4 border-b flex justify-between items-center bg-white sticky top-0 z-10">
                    <h2 className="text-xl font-semibold text-gray-800">{headerContent}</h2>
                    <button onClick={onClose} className="text-gray-500 hover:text-gray-700 text-xl">&times;</button>
                </div>

                {/* Scrollable Body */}
                <div className="p-4 overflow-y-auto flex-1">
                    {bodyContent}
                </div>

                {/* Footer - Stays Fixed */}
                <div className="p-4 border-t flex justify-end space-x-2 bg-white sticky bottom-0 z-10">
                    {footerContent}
                </div>
            </div>
        </div>
    );
};

export default Modal;
