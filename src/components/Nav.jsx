'user client';
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

const Nav = ({ isScrolled, activeSection }) => {
    const pathname = usePathname();
    return (
        <nav className="flex gap-8">
            {links.map((link, index) => {
                const isActive = link.path === pathname || (pathname === '/' && link.sectionName.toLowerCase() === activeSection);

                return (
                    <Link
                        href={link.path}
                        key={index}
                        scroll={false}
                        className={`
                            ${isActive 
                                ? (isScrolled ? 'text-blue-600 border-b-2 border-blue-400' : 'text-white border-b-2 border-white') 
                                : (isScrolled ? 'text-blue-600' : 'text-white')}
                            capitalize font-medium transition-all
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