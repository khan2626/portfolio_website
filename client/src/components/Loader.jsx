import React from "react";

export default function Loader(){
    return(
        <div className="">
            <div className="flex font-bold text-6xl gap-3 fixed bg-primary items-center justify-center inset-0">
                <p className="text-white i">I</p>
                <p className="text-secondary u">U</p>
                <p className="text-tertiary a">A</p>
            </div>
        </div>
    )
}