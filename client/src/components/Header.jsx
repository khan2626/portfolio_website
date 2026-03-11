import React, { useState } from "react";
import { Link } from "react-router-dom";

function Header() {
    const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

    const navLinks = [
        { label: "Home", href: "/", section: "intro" },
        { label: "About", href: "/", section: "about" },
        { label: "Projects", href: "/", section: "projects" },
        { label: "Contact", href: "/", section: "contact" },
    ];

    const scrollToSection = (sectionId) => {
        const element = document.getElementById(sectionId);
        if (element) {
            element.scrollIntoView({ behavior: "smooth" });
        }
        setMobileMenuOpen(false);
    };

    return (
        <header className="sticky top-0 z-50 backdrop-blur-md bg-primary/80 border-b border-white/5">
            <nav className="max-w-6xl mx-auto px-4 sm:px-6 py-2 sm:py-3 flex justify-between items-center">
                <Link to="/" className="flex items-center gap-1 group">
                    <span className="text-xl font-bold tracking-tight">
                        <span className="text-secondary">I</span>
                        <span className="text-white group-hover:text-tertiary transition-colors">U</span>
                        <span className="text-tertiary">A</span>
                    </span>
                </Link>

                <div className="flex sm:hidden items-center gap-4 sm:gap-6">
                    {navLinks.map((link) => (
                        <button
                            key={link.section}
                            onClick={() => scrollToSection(link.section)}
                            className="text-muted hover:text-tertiary font-medium transition-colors text-sm"
                        >
                            {link.label}
                        </button>
                    ))}
                </div>

                <button
                    onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
                    className="hidden sm:flex p-2 text-white items-center justify-center"
                    aria-label="Toggle menu"
                >
                    <i className={`ri-${mobileMenuOpen ? "close" : "donut-chart"}-line text-2xl`}></i>
                </button>
            </nav>

            {mobileMenuOpen && (
                <div className="sm:block border-t border-white/5 py-3 px-4 sm:px-6">
                    <div className="flex flex-col gap-4">
                        {navLinks.map((link) => (
                            <button
                                key={link.section}
                                onClick={() => scrollToSection(link.section)}
                                className="text-left text-muted hover:text-tertiary font-medium transition-colors py-2"
                            >
                                {link.label}
                            </button>
                        ))}
                    </div>
                </div>
            )}
        </header>
    );
}

export default Header;