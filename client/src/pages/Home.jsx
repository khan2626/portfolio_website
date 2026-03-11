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
        <main className="max-w-6xl mx-auto px-4 sm:px-6 pl-14 sm:pl-4">
            <Intro/>
            <About/>
            <Projects/>
            <Contact/>
        </main>
        )}
        </>
        
    )
}

export default Home