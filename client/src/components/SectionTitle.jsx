import React from "react";

function SectionTitle({ title }) {
    return (
        <div className="flex gap-3 sm:gap-4 items-center justify-center mb-6 sm:mb-5">
            <div className="h-px w-12 bg-gradient-to-r from-transparent to-tertiary"></div>
            <h2 className="text-2xl font-bold text-white">{title}</h2>
            <div className="h-px w-12 bg-gradient-to-l from-transparent to-tertiary"></div>
        </div>
    );
}

export default SectionTitle;