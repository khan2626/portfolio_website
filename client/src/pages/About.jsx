import React from "react";
import { useSelector } from "react-redux";
import developer from "../Assets/developer.jpg"
import SectionTitle from "../components/SectionTitle";
function About(){

    const {portfolioData} = useSelector((state)=> state.root)
    const {about} = portfolioData
    const {description1, description2, description3, skills} = about

    
    return (
        <div className="">
            <SectionTitle title="About me"></SectionTitle>
            <div className="sm:flex-col flex gap-4 justify-between items-center">
            
                <div>
                    <img className="sm:h-[25vh] h-[40vh] rounded-full object-contain" src={developer} alt="" />
                </div>
                <div className="sm:w-full w-3/4 justify-center sm:py-3 py-7  text-gray-600"> 
                    <p> 
                       {description1}
                    </p>
                    <p>
                        {description2}
                    </p>
                    <p>{description3}</p>
                </div>
                
            </div>
            <div className="items-center">
                <h3 className="text-tertiary text-2xl text-center py-6">Here are some technologies I have worked with over time:</h3>
                <div className="flex flex-wrap sm:gap-4 gap-10 justify-between">
                    {skills.map((skill, index)=>{
                        return(
                            <div key={index} className="border-2  border-tertiary px-2 py-2">
                                <p className="text-tertiary">{skill}</p>
                            </div>
                            
                        )
                        
                    })}
                </div>
            </div>
        </div>
        
    )
}
export default About