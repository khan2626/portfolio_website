import React from "react";
import { Link } from "react-router-dom";

export default function Sider(){
    return(
        <div className="fixed left-0 bottom-0 px-5 sm:static">
            <div className="flex flex-col items-center sm:justify-center gap-7 sm:flex-row">
                <Link to="https://www.google.com/chrome/next-steps.html?installdataindex=empty&statcb=0&defaultbrowser=0"><i class="ri-facebook-circle-line text-gray-600 text-2xl"></i></Link>
                
                <i class="ri-linkedin-box-fill text-gray-600 text-2xl"></i>
                <i class="ri-github-fill text-gray-600 text-2xl"></i>
                <p className="w-[1px] h-[150px] bg-tertiary sm:hidden"></p>
            </div>
            
        </div>
    )
}