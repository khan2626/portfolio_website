import React from "react";
import { useSelector } from "react-redux";

function Intro() {
    const { portfolioData } = useSelector((state) => state.root);
    const { intro } = portfolioData || {};
    const { welcomeText, name, nickname, caption, description } = intro || {};

    return (
        <section id="intro" className="min-h-[60vh] sm:min-h-[70vh] flex flex-col justify-center items-center pb-6 sm:pt-2 sm:pb-2 px-2">
            <div className="animate-fade-in-up text-center max-w-2xl mx-auto w-full">
                <p className="text-tertiary font-mono text-sm mb-4 tracking-widest uppercase">
                    {welcomeText || "Hi there"}
                </p>
                <h1 className="text-4xl sm:text-3xl font-bold text-white leading-tight mb-4 sm:mb-6">
                    I'm <span className="text-secondary">{name || ""}</span>
                    <br />
                    <span className="text-muted font-normal text-xl sm:text-lg">
                        but you can call me <span className="text-tertiary font-semibold">{nickname || ""}</span>
                    </span>
                </h1>
                <p className="text-xl sm:text-lg text-white font-semibold mb-3 sm:mb-4">
                    {caption || ""}
                </p>
                <p className="text-muted text-base sm:text-lg mb-6 sm:mb-6">
                    {description || ""}
                </p>
                <div className="flex flex-wrap gap-3 sm:gap-4 justify-center">
                    <a
                        href="#projects"
                        className="inline-flex items-center gap-2 px-4 py-2 sm:px-6 sm:py-3 text-sm sm:text-base bg-tertiary/20 text-tertiary border border-tertiary/50 rounded-lg font-medium hover:bg-tertiary/30 transition-all hover:shadow-glow-sm"
                    >
                        View Projects <i className="ri-arrow-right-line"></i>
                    </a>
                    <a
                        href="#contact"
                        className="inline-flex items-center gap-2 px-4 py-2 sm:px-6 sm:py-3 text-sm sm:text-base text-muted border border-white/10 rounded-lg font-medium hover:text-tertiary hover:border-tertiary/50 transition-all"
                    >
                        Get in Touch
                    </a>
                </div>
            </div>
        </section>
    );
}

export default Intro;
