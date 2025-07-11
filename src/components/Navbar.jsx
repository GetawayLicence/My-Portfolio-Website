import { cn } from "@/lib/utils";
import { useState, useEffect } from "react";
import { Menu, X } from "lucide-react";


const navItems = [
    {name: "Home", href: "#hero"},
    {name: "About", href: "#about"},
    {name: "Experience", href: "#experience"},
    {name: "Skills", href: "#skills"},
    {name: "Certifications", href: "#certifications"},
    {name: "Projects", href: "#projects"},
    {name: "Blog", href: "https://getawaylicence.github.io/TheEncryptedChronicles/"},
    {name: "Contact", href: "#contact"},
];

export const Navbar = () => {
    const [isScrolled, setIsScrolled] = useState(false);
    const [isMenuOpen, setIsMenuOpen] = useState(true);

useEffect(() => {
    const handleScroll = () => {
        setIsScrolled(window.scrollY > 10)
    }

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);

    }, [])

    return <nav className={cn("fixed w-full z-40 transition-all duration-300", 
    isScrolled ? "py-3 bg-background/80 backdrop-blur-md shadow-xs": "py5")}>
    
        <div className="container flex items-center justify-between">
            <a className="text-xl font-bold text-primary flex items-center" 
            href="#hero">
                <span className="relative z-10">
                    <span className="text-glow text-[#4E6E6E]">Sruthi's </span> Portfolio
                </span>
            </a>

            {/* desktop version */}
            <div className="hidden md:flex space-x-8">
                {navItems.map((item, index) => (
                    <a 
                        key={index}
                        href={item.href}
                        target={item.href.startsWith('http') ? '_blank' : undefined}      
                        rel={item.href.startsWith('http') ? 'noopener noreferrer' : undefined}  
                        className="nav-link"
                    >
                        {item.name}</a>
                ))}
            </div>

            {/* mobile version */}

        <button
          onClick={() => setIsMenuOpen((prev) => !prev)}
          className="md:hidden p-2 text-foreground z-50"
          aria-label={isMenuOpen ? "Close Menu" : "Open Menu"}
        >
          {isMenuOpen ? <X size={24} /> : <Menu size={24} />}{" "}
        </button>

            <div className={cn("fixed inset-0 bg-background/95 backdrop-blur-md z-40 flex flex-col items-center justify-center",
            "transition-all duration-300 md:hidden",
            isMenuOpen ? "opacity-100 pointer-events-auto" : "opacity-0 pointer-events-none"
            )}
            >
                <div className="flex flex-col space-y-8 text-xl">
                {navItems.map((item, key) => (
                    <a key={key} 
                    href={item.href} 
                    className="text-foreground/80 hover:text-primary transition-colors duration-300"
                    onClick={() => setIsMenuOpen(false)}
                    >
                        {item.name}</a>
                ))}
            </div> 
        </div>
    </div>
    </nav>;
}