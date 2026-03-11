import React from "react";
import { useSelector } from "react-redux";
import SectionTitle from "../components/SectionTitle";
import passport from "../Assets/passport.jpeg";

function About() {
    const { portfolioData } = useSelector((state) => state.root);
    const about = portfolioData?.about || {};
    const { description1, description2, description3, skills = [], image } = about;

    return (
        <section id="about" className="py-4 sm:py-2">
            <SectionTitle title="About me" />
            <div className="animate-fade-in-up sm:flex-col flex gap-6 sm:gap-4 justify-between items-center">
                <div className="relative group flex-shrink-0">
                    <div className="absolute -inset-1 bg-gradient-to-r from-tertiary/30 to-secondary/30 rounded-full blur opacity-50 group-hover:opacity-75 transition-opacity"></div>
                    <img
                        className="relative h-[220px] w-[220px] sm:h-[180px] sm:w-[180px] rounded-full object-cover border-2 border-tertiary/30"
                        src={image || passport}
                        alt="Israel Agi"
                    />
                </div>
                <div className="sm:w-full flex-1 space-y-3 sm:space-y-2 text-muted leading-relaxed text-center text-sm sm:text-base">
                    <p>{description1}</p>
                    <p>{description2}</p>
                    <p className="text-tertiary font-medium">{description3}</p>
                </div>
            </div>
            <div className="mt-6 sm:mt-4">
                <h3 className="text-white font-semibold text-base sm:text-lg mb-4 sm:mb-3 text-center">
                    Technologies I work with
                </h3>
                <div className="flex flex-wrap gap-2 sm:gap-2 justify-between sm:justify-center">
                    {skills.map((skill, index) => (
                        <span
                            key={index}
                            className="px-3 py-1.5 sm:px-4 sm:py-2 bg-white/5 border border-tertiary/30 rounded-lg text-tertiary font-mono text-xs sm:text-sm hover:bg-tertiary/10 hover:border-tertiary/50 transition-all cursor-default"
                        >
                            {skill}
                        </span>
                    ))}
                </div>
            </div>
        </section>
    );
}

export default About;