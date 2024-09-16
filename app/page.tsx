"use client";
import Description from "@/components/Description/Description";
import Footer from "@/components/Footer/Footer";
import Movie from "@/components/Movie/Movie";
import Projects from "@/components/Projects/Projects";
import { useRef, useState } from "react";
import gsap from "gsap";

export type Project = {
    title: string;
    color: string;
    images: string[];
    href: string;
    mobile: boolean;
}

const projects: Project[] = [
    {
        title: "Dream Nails",
        color: "#E02131",
        images: ["/images/dream-nails-1.png", "/images/dream-nails-2.png", "/images/dream-nails-3.png", "/images/dream-nails-4.png"],
        href: "https://github.com/j03m4r/dream-nails",
        mobile: false
    },
    {
      title: "Rate & Relate",
      color: "#F04DBD",
      images: ["/images/raterelate1.jpeg", "/images/raterelate2.jpeg", "/images/raterelate3.jpeg"],
      href: "https://github.com/j03m4r/Raterelate.com",
      mobile: false
    },
    { 
      title: "Seventh Sky",
      color: "#A6F04D",
      images: ["/images/seventh1.jpeg", "/images/seventh2.jpeg", "/images/seventh3.jpeg", "/images/seventh4.jpeg", 
      "/images/seventh5.jpeg", "/images/seventh6.jpeg", "/images/seventh7.jpeg"],
      href: "https://github.com/j03m4r/7thSky",
      mobile: false
    },
    {
        title: "Sound Scout",
        color: "#F0654D",
        images: ['/images/soundScout1.png', '/images/soundScout2.png', '/images/soundScout3.jpeg', '/images/soundScout5.png',
        '/images/soundScout6.png'],
        href: "https://github.com/j03m4r/Sound-Scout",
        mobile: true
    },
    {
      title: "Syllabase",
      color: "#A14DF0",
      images: ["/images/syllabase1.jpeg", "/images/syllabase2.jpeg", "/images/syllabase3.jpeg", "/images/syllabase4.jpeg"],
      href: "https://github.com/j03m4r/syllabase",
      mobile: false
    },
];

export default function Home() {
    const viewText = useRef<HTMLParagraphElement>(null);
    const cursorTrail = useRef<HTMLDivElement>(null);
    const mainContainer = useRef<HTMLDivElement>(null);
    // const [selectedProject, setSelectedProject] = useState<Project|null>(null);

    const onMouseMove = (x: number, y: number) => {
		if (!cursorTrail.current || !mainContainer.current) return;
		const mainContainerRect = mainContainer.current.getBoundingClientRect();
		const cursorTrailRect = cursorTrail.current.getBoundingClientRect();
		gsap.to(cursorTrail.current, {
			left: x - mainContainerRect.left - cursorTrailRect.width / 2 + "px",
			top: y - mainContainerRect.top - cursorTrailRect.height / 2 + "px"
		})
	};

	const onMouseEnter = (idx: number) => {
		if (!cursorTrail.current || !viewText.current) return;
		gsap.to(cursorTrail.current, {
			width: "200px",
			height: "200px",
            backgroundColor: projects[idx].color
		});

        gsap.to(viewText.current, {
            fontSize: "2.25rem"
        });
	};

	const onMouseLeave = () => {
		if (!cursorTrail.current || !viewText.current) return;
		gsap.to(cursorTrail.current, {
			width: "50px",
			height: "50px",
            backgroundColor: "#000"
		});

        gsap.to(viewText.current, {
            fontSize: "0"
        });
	};

    const onMouseEnterContainer = () => {
        if (!cursorTrail.current) return;
        gsap.to(cursorTrail.current, {
            width: "50px",
            height: "50px"
        });
    };
    
    const onMouseLeaveContainer = () => {
        if (!cursorTrail.current) return;
        gsap.to(cursorTrail.current, {
            width: "0px",
            height: "0px"
        });
    };
    
    // const onProjectClick = (projIdx: number) => {
    //     setSelectedProject(projects[projIdx]);
    // }

    return (
        <main className="relative">
            <Movie />
            <Description />
            <div ref={mainContainer} onMouseMove={(e) => onMouseMove(e.clientX, e.clientY)} onMouseLeave={() => onMouseLeaveContainer()} onMouseEnter={() => onMouseEnterContainer()} className="h-fit mt-[20vh] relative">
                <div ref={cursorTrail} className="absolute w-[0px] h-[0px] bg-black rounded-full z-10 pointer-events-none flex justify-center items-center">
                    <p ref={viewText} className="text-[0px]">VISIT</p>
                </div>
                <Projects projects={projects} onMouseEnter={onMouseEnter} onMouseLeave={onMouseLeave} />
            </div>
            <Footer />
            {/*<div className="fixed bottom-10 flex justify-center items-center gap-x-1 p-1 border border-black rounded-xl" style={{ left: "50%", transform: "translate(-50%, 0)" }}>
                <button className="w-[200px] h-[100px] rounded-xl text-2xl" style={{ backgroundColor: "#E02131" }}>
                    SITE
                </button>
                <button className="w-[200px] h-[100px] rounded-xl text-2xl border bg-transparent" style={{ borderColor: projects[0].color }}>
                    GITHUB
                </button>
            </div>*/}
        </main>
    )
};
