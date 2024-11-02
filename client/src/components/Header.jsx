import React from "react";

function Header(){
    return (
        <div className="text-xl flex justify-between bg-slate-600 px-5 py-5">
            <ion-icon name="home"></ion-icon>
            <p>Projects</p>
            <p>About</p>
        </div>
    )
}

export default Header