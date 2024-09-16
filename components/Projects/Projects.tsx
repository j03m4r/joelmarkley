"use client";
import { useRef } from "react";
import ProjectItem from "./ProjectItem";
import { Project } from "@/app/page";

interface ProjectsProps {
    projects: Project[];
    onMouseEnter: (idx: any) => void;
    onMouseLeave: () => void;
}

const Projects: React.FC<ProjectsProps> = ({
    onMouseEnter,
    onMouseLeave,
    projects
}) => {
    const headerRef = useRef<HTMLDivElement>(null);

    return (
        <div className="mx-[10vw] relative">
            <div ref={headerRef} className="text-7xl">Projects</div>
            <div className="relative flex flex-col mt-[5vh] lg:mt-[10vh]">
                {projects.map((project, idx) => (
                    <ProjectItem key={idx} onMouseEnter={() => onMouseEnter(idx)} onMouseLeave={() => onMouseLeave()} {...project} />
                ))}
            </div>
        </div>
    );
}

export default Projects;
