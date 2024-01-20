"use client";
import { useRef } from "react";
import gsap from "gsap";
import ProjectItem from "./ProjectItem";

const projects = [
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
    {
      title: "Rate & Relate",
      color: "#F04DBD",
      images: ["/images/raterelate1.jpeg", "/images/raterelate2.jpeg", "/images/raterelate3.jpeg"],
      href: "https://github.com/j03m4r/Raterelate.com",
      mobile: false
    },
];

const Projects = () => {
    const mainContainer = useRef<HTMLDivElement>(null);
    const headerRef = useRef<HTMLDivElement>(null);
    const cursorTrail = useRef<HTMLDivElement>(null);
    const viewText = useRef<HTMLParagraphElement>(null);

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
    
    return (
        <div ref={mainContainer} onMouseMove={(e) => onMouseMove(e.clientX, e.clientY)} onMouseLeave={() => onMouseLeaveContainer()} onMouseEnter={() => onMouseEnterContainer()} className="h-fit mt-[20vh] relative">
            <div ref={cursorTrail} className="absolute w-[0px] h-[0px] bg-black rounded-full z-10 pointer-events-none flex justify-center items-center">
                <p ref={viewText} className="text-[0px]">VISIT</p>
            </div>
            <div className="mx-[10vw] relative">
                <div ref={headerRef} className="text-7xl">Projects</div>
                <div className="relative flex flex-col mt-[5vh] lg:mt-[10vh]">
                    {projects.map((project, idx) => (
                        <ProjectItem key={idx} onMouseEnter={() => onMouseEnter(idx)} onMouseLeave={() => onMouseLeave()} {...project} />
                    ))}
                </div>
            </div>
        </div>
    );
}

export default Projects;