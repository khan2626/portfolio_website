import React from "react"

import Intro from './Intro'
import About from "./About"
import Projects from "./Projects"
import Contact from "./Contact"

function Home() {
    return (
        <div className=" bg-primary px-10 sm:px-3">
            
            <Intro/>
            <About/>
            <Projects/>
            <Contact/>
        </div>
    )
}

export default Home