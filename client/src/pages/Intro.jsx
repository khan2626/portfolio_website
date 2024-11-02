import React from "react";

function Intro(){
    return (
        <div className=" flex flex-col items-start">
            <div className="px-5 py-5 w-3/4 md:w-auto">
                <p className="text-white py-3">Hi there!</p>
                <p className="text-5xl md:text-3xl sm:text-3xl py-3 text-secondary ">
                    I'm <strong>Israel Ukanyohe Agi</strong> but you can call me <strong>khan</strong>. 
                </p>
                <p className="text-4xl md:text-2xl sm:text-2xl text-white font-semibold">
                    I solve problems with python and javascript
                </p>
                <p className="text-white">
                    I'm a dedicated <strong>backend developer,</strong> <strong>data analyst</strong> and an instructor
                </p>
            </div>
            
        </div>
    )
}

export default Intro
