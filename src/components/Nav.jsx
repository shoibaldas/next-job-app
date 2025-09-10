'use client';
import Link from "next/link";
import { usePathname } from "next/navigation";

const links = [
    { name: "home", path: "/", sectionName: "home" },
    { name: "who we are", path: "/about", sectionName: "about" },
    { name: "services", path: "/services", sectionName: "services" },
    { name: "products", path: "/products", sectionName: "products" },
    { name: "consultants", path: "/consultants", sectionName: "consultants" },
    { name: "contact", path: "/contact", sectionName: "contact" }
];

const Nav = ({ activeSection }) => {
    const pathname = usePathname();
    
    return (
        <nav className="flex gap-6 lg:gap-8">
            {links.map((link, index) => {
                const isActive = link.path === pathname || (pathname === '/' && link.sectionName.toLowerCase() === activeSection);

                return (
                    <Link
                        href={link.path}
                        key={index}
                        scroll={false}
                        className={`
                            relative
                            text-text-primary
                            font-family-primary
                            font-weight-bold
                            text-base
                            capitalize
                            transition-all
                            duration-200
                            hover:text-brand-primary
                            ${isActive 
                                ? 'text-brand-primary after:absolute after:bottom-0 after:left-0 after:w-full after:h-0.5 after:bg-brand-primary after:transform after:scale-x-100' 
                                : 'after:absolute after:bottom-0 after:left-0 after:w-full after:h-0.5 after:bg-brand-primary after:transform after:scale-x-0 hover:after:scale-x-100 after:transition-transform after:duration-200'
                            }
                        `}
                    >
                        {link.name}
                    </Link>
                );
            })}
        </nav>
    );
};

export default Nav;