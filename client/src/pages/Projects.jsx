import React, { useState } from "react";
import { projects } from "../resources/projects_data";
import SectionTitle from "../components/SectionTitle";


function Projects(){
    const [projectIndex, setProjectIndex] = useState(0)
    return (
        <div className="">
            <SectionTitle title="Projects"></SectionTitle>
            <div className="flex gap-20 sm:gap-7 py-7 sm:flex-col">
                <div  className="cursor-pointer flex flex-col sm:flex-row sm:overflow-x-scroll sm:gap-10 gap-5 border-l-2 border-[#4acaac82]">
                    {projects.map((project, i)=>{
                        return(
                            <div onClick={()=>setProjectIndex(i)} className="">
                                <h1  className={`text-xl px-5 ${projectIndex === i ? "text-tertiary border-tertiary border-l-4 -ml-[2px] bg-[#4acaac82]" : "text-white"}`}>{project.title}</h1>
                            </div>
                            
                        )
                    })}
                </div>
                <div className="flex sm:flex-col items-center gap-10 sm:gap-5">
                    <div className="">
                        <img src={projects[projectIndex].Image} alt="" className="h-[20vh]" />
                    </div>
                    <div className="">
                        <p className="text-secondary text-lg">{projects[projectIndex].description}</p>
                    </div>
                </div>
                
            </div>
        </div>
    )
}

export default Projects