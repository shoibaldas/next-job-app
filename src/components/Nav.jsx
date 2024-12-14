'user client';
import Link from "next/link";
import { usePathname } from "next/navigation";

const links = [
    {
        name: "home",
        path: "/"
    },
    {
        name: "who we are",
        path: "/about"
    },
    { 
        name: "consultants", 
        path: "/consultants" 
    },
    {
        name: "products",
        path: "/products"
    },
    {
        name: "services",
        path: "/services"
    },
    {
        name: "contact us",
        path: "/contact-us"
    }
]

const Nav = ({ isScrolled }) => {
    const pathname = usePathname();
    return (
        <nav className="flex gap-8">
            {links.map((link, index) => (
                <Link
                    href={link.path}
                    key={index}
                    className={`
            ${link.path === pathname
                            ? isScrolled
                                ? 'text-blue-800 border-b-2 border-blue-400'
                                : 'text-white border-b-2 border-white'
                            : isScrolled
                                ? 'text-blue-800'
                                : 'text-white'
                        }
            capitalize font-medium transition-all
          `}
                >
                    {link.name}
                </Link>
            ))}
        </nav>
    )
}

export default Nav;