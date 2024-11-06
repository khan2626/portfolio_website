import React from "react";
import SectionTitle from "../components/SectionTitle";

export default function Contact(){
    const user = {
        'Name': 'Israel Ukanyohe Agi',
        'Email': 'israelkhan217@gmail.com',
        'Gender': 'Male',
        'Phone No.': "+2348100361511",
        'Country': 'Nigeria'
    }
    return (
        <div className="">
            <SectionTitle title="Say Hello"></SectionTitle>
            <div className="flex sm:flex-col gap-32 sm:gap-11 items-center justify-center">
                <div className="text-white">
                    <p>
                        {"{"}
                    </p>
                    
                    {Object.keys(user).map((key)=>{
                        return(
                            <p className="ml-5"><span>{key}:</span> <span>{user[key]}</span></p>
                        )
                        
                    })}
                    <p>{"}"}</p> 
                </div>
                <div className="">
                    <img src="https://cdn.pixabay.com/photo/2019/02/13/09/59/contact-3994013_1280.jpg" alt="" className="h-[30vh]" />
                </div>
            </div>
        </div>
           
    )
}