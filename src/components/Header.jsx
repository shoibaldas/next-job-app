'use client';

import Link from 'next/link';
import Nav from './Nav';
import MobileNav from './MobileNav';

const Header = () => {
    return (
        <header className="py-8 xl-py-12 text-white bg-lightBackground">
            <div className="container  mx-auto flex justify-between items-center text-lightText">
                <Link href="/">
                    <h1 className='text-4xl font-semibold'>
                        ICEL TECH
                        <span className="text-lightText">.</span>
                    </h1>
                </Link>
                <div className='hidden xl:flex items-center gap-8'>
                    <Nav />
                </div>
                <div className="xl:hidden flex items-center gap-6">
                    <MobileNav />
                </div>
            </div>
        </header>
    )
}

export default Header;