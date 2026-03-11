import React from "react";

export default function Loader() {
    return (
        <div className="fixed inset-0 z-[100] bg-primary flex items-center justify-center">
            <div className="flex font-bold text-5xl gap-2">
                <span className="text-secondary i">I</span>
                <span className="text-white u">U</span>
                <span className="text-tertiary a">A</span>
            </div>
        </div>
    );
}