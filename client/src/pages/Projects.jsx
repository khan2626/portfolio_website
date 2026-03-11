import React, { useState } from "react";
import SectionTitle from "../components/SectionTitle";
import { useSelector } from "react-redux";

function Projects() {
    const { portfolioData } = useSelector((state) => state.root);
    const projects = portfolioData?.projects || [];
    const [projectIndex, setProjectIndex] = useState(0);

    if (projects.length === 0) return null;

    const currentProject = projects[projectIndex];
    const projectImage = currentProject?.image || currentProject?.Image;

    return (
        <section id="projects" className="py-6 sm:py-4">
            <SectionTitle title="Projects" />
            <div className="flex gap-8 sm:gap-4 sm:flex-col">
                <div className="flex flex-col sm:flex-row sm:overflow-x-auto sm:overflow-y-hidden sm:gap-2 sm:pb-2 gap-2 min-w-[180px] sm:min-w-0 border-l-2 border-tertiary/30 pl-4 sm:pl-3 shrink-0">
                    {projects.map((project, i) => (
                        <button
                            key={i}
                            onClick={() => setProjectIndex(i)}
                            className={`text-left transition-all whitespace-nowrap ${
                                projectIndex === i
                                    ? "text-tertiary border-l-2 border-tertiary -ml-[10px] pl-2 bg-tertiary/10 py-2"
                                    : "text-muted hover:text-white pl-2 py-2"
                            }`}
                        >
                            <span className="font-mono text-sm">{String(i + 1).padStart(2, "0")}.</span>{" "}
                            {project.title}
                        </button>
                    ))}
                </div>
                <div className="flex-1 flex sm:flex-col gap-6 sm:gap-4">
                    <div className="overflow-hidden rounded-xl border border-white/10 shadow-card hover:shadow-card-hover transition-shadow">
                        <img
                            src={projectImage}
                            alt={currentProject.title}
                            className="h-[200px] sm:h-[220px] w-full object-cover"
                        />
                    </div>
                    <div className="flex-1 space-y-4">
                        <p className="text-muted leading-relaxed">{currentProject.description}</p>
                        {currentProject.technologies && (
                            <div className="flex flex-wrap gap-2">
                                {currentProject.technologies.map((tech, i) => (
                                    <span
                                        key={i}
                                        className="px-3 py-1 bg-secondary/20 text-secondary text-xs font-mono rounded"
                                    >
                                        {tech}
                                    </span>
                                ))}
                            </div>
                        )}
                        <a
                            href={currentProject.url}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="inline-flex items-center gap-2 text-tertiary font-medium hover:underline"
                        >
                            View repository <i className="ri-external-link-line"></i>
                        </a>
                    </div>
                </div>
            </div>
        </section>
    );
}

export default Projects;