'use client';
import React from 'react';
import Link from 'next/link';
import useBreadcrumbs from './hooks/useBreadcrumbs';
import { RiGalleryView2 } from "react-icons/ri";

const BreadCrumbs = ({ className }) => {
    const breadcrumbs = useBreadcrumbs();

    return (
        <nav aria-label="breadcrumb" className={`text-sm text-white ${className}`}>
            <div className='flex items-center'>
                <RiGalleryView2 className="text-lg text-white mr-2" />
                <ol className="flex space-x-2">
                    <li>
                        <Link href="/" className="hover:underline">
                            Home
                        </Link>
                    </li>
                    {breadcrumbs.map((crumb, index) => (
                        <li key={crumb.href} className="flex items-center space-x-2">
                            <span>/</span>
                            <Link
                                href={crumb.href}
                                className={`hover:underline ${index === breadcrumbs.length - 1 ? 'text-white font-bold' : ''
                                    }`}
                            >
                                {crumb.label}
                            </Link>
                        </li>
                    ))}
                </ol>
            </div>
        </nav>
    );
};

export default BreadCrumbs;
