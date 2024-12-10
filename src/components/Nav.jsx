'user client';
import Link from "next/link";
import { usePathname } from "next/navigation";

const links = [
    {
        name: "home",
        path: "/"
    },
    {
        name: "services",
        path: "/services"
    },
    { name: "about", path: "/about" },
    {
        name: "contact",
        path: "/contact"
    }
]

const Nav = () => {
    const pathname = usePathname();
    return (
        <nav className="flex gap-8">
            {links.map((link, index) => {
                return (
                    <Link href={link.path} key={index}
                        className={`${link.path === pathname ? 'text-primary border-b-2 border-primary' : ''} capitalize font-medium transition-all
                        `}>
                        {link.name}
                    </Link>
                )
            })}
        </nav>
    )
}

export default Nav