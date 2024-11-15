import React from "react"

import Intro from './Intro'
import About from "./About"
import Projects from "./Projects"
import Contact from "./Contact"
import { useSelector } from "react-redux"

function Home() {
    const {portfolioData} = useSelector((state)=>state.root)
    return (
        <>
        {portfolioData && (
        <div className=" bg-primary px-10 sm:px-3">
            <Intro/>
            <About/>
            <Projects/>
            <Contact/>
        </div>
        )}
        
        </>
        
    )
}

export default Home