import React from "react";

function SectionTitle({title}){
    return (
        <div className="flex gap-5 items-center">
            <p className="text-white">{title}</p>
            <p className="w-60 h-[1px]  bg-tertiary"></p>
        </div>
    )
}

export default SectionTitle