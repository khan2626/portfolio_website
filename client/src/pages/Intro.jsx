import React from "react";
import { useSelector } from "react-redux";

function Intro(){
    const {portfolioData} = useSelector((state)=> state.root)
    const {intro} = portfolioData
    const {welcomeText, name, nickname, caption, description} = intro

    return (
        <div className=" flex flex-col items-start">
            <div className="px-5 py-5 w-3/4 sm:w-full">
                <p className="text-white py-3">{welcomeText || ""}</p>
                <p className="text-5xl md:text-3xl sm:text-3xl py-3 text-secondary ">
                    I'm <strong>{name || ""}</strong> but you can call me <strong>{nickname || ""}</strong>. 
                </p>
                <p className="py-5 text-4xl md:text-2xl sm:text-2xl text-white font-semibold">
                    {caption || ""}
                </p>
                <p className="text-white font-semibold">
                    {description || ""}
                </p>
            </div>
            
        </div>
    )
}

export default Intro
