import React from "react";

export default function Footer() {
    const year = new Date().getFullYear();

    return (
        <footer className="py-6 sm:py-8 mt-4 sm:mt-6 border-t border-white/5">
            <div className="max-w-6xl mx-auto px-4 sm:px-6 flex flex-col sm:flex-row items-center justify-between gap-3">
                <p className="text-muted text-sm">
                    Designed & built by <span className="text-tertiary font-medium">Israel Ukanyohe Agi</span>
                </p>
                <p className="text-muted text-sm">© {year}</p>
            </div>
        </footer>
    );
}