import React from "react"

import Intro from './Intro'
import About from "./About"

function Home() {
    return (
        <div className="sm:h-auto bg-primary px-10 sm:px-3 md:px-5">
            
            <Intro/>
            <About/>
        </div>
    )
}

export default Home