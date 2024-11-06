import React from "react";
import developer from "../Assets/developer.jpg"
import SectionTitle from "../components/SectionTitle";

function About(){
    const skills = ['python',
        'Nodejs',
        'Express',
        'MySql',
        'MongoDB',
        'React',
        'Pandas',
        'Matplotlib'
    ]
    return (
        <div className="py-10">
            <SectionTitle title="About me"></SectionTitle>
            <div className="sm:flex-col flex justify-between items-center">
            
                <div>
                    <img className="sm:h-[30vh] h-[50vh] rounded-full object-contain" src={developer} alt="" />
                </div>
                <div className="sm:w-full w-3/4 justify-center py-7 text-gray-600"> 
                    <p> 
                        I'm a dedicated <strong>backend developer</strong> and <strong>data analyst</strong> with a passion for crafting efficient systems 
                        and transforming data into actionable insights. Over the past years, I've honed my skills in various 
                        programming languages and database management systems, ensuring seamless and robust back-end operations 
                        for a range of projects. My analytical prowess allows me to delve deep into data, uncovering patterns 
                        and trends that drive informed decision-making.
                    </p>
                    <p>
                        Proficient in SQL, Python, and data visualization tools, I thrive on challenges that require innovative 
                        solutions. My approach is grounded in a combination of technical excellence and a keen understanding of 
                        business needs, making me a versatile asset in any team.
                    </p>
                    <p>Let's create something impactful together!</p>
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