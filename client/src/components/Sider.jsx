import React from "react";

export default function Sider() {
    const socialLinks = [
        { href: "https://web.facebook.com/agi.israel", icon: "ri-facebook-circle-line", label: "Facebook" },
        { href: "https://www.linkedin.com/in/israel-agi-a02167267/", icon: "ri-linkedin-box-fill", label: "LinkedIn" },
        { href: "https://github.com/khan2626", icon: "ri-github-fill", label: "GitHub" },
    ];

    return (
        <div className="fixed left-4 bottom-0 z-40 sm:hidden">
            <div className="flex flex-col items-center gap-4">
                {socialLinks.map((link) => (
                    <a
                        key={link.label}
                        href={link.href}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-muted hover:text-tertiary transition-colors"
                        aria-label={link.label}
                    >
                        <i className={`${link.icon} text-xl`}></i>
                    </a>
                ))}
                <div className="w-px h-20 bg-gradient-to-b from-tertiary/50 to-transparent"></div>
            </div>
        </div>
    );
}