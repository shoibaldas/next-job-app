'use client';
import React from 'react';
import Link from 'next/link';
import useBreadcrumbs from './hooks/useBreadcrumbs';
import { RiGalleryView2 } from "react-icons/ri";
import { Heading } from './ui/Typography';

const BreadCrumbs = ({ className, customLabels = {} }) => {
    const breadcrumbs = useBreadcrumbs();

    return (
        <nav aria-label="breadcrumb" className={`text-sm text-white ${className}`}>
            <div className="flex items-center">
                <RiGalleryView2 className="text-lg text-gray-400 mr-2" />
                <div>
                    <ol className="flex space-x-2">
                        {/* Home Link */}
                        <li>
                            <Link href="/">
                                <Heading
                                    level={3}
                                    color="text-gray-400"
                                    fontFamily="roboto"
                                    className="text-sm mt-4"
                                >
                                    Home

                                </Heading>
                            </Link>
                        </li>

                        {/* Dynamic Breadcrumbs */}
                        {breadcrumbs.map((crumb, index) => {
                            const label = customLabels[crumb.href] || crumb.label;

                            return (
                                <li key={crumb.href} className="flex items-center space-x-2">
                                    <span className='text-gray-400'>{'>'}</span>
                                    <Link href={crumb.href}>
                                        <Heading
                                            level={3}
                                            color="text-gray-200"
                                            fontFamily="roboto"
                                            className="text-sm mt-4"
                                        >
                                            {label}

                                        </Heading>
                                    </Link>
                                </li>
                            );
                        })}
                    </ol>
                </div>
            </div>
        </nav>
    );
};

export default BreadCrumbs;
