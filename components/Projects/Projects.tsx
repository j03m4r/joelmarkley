"use client";
import { useEffect, useRef, useState } from "react";
import ProjectItem from "./ProjectItem";
import Image from "next/image";
import gsap from "gsap";

const projects = [
    { 
      title: "Seventh Sky",
      color: "#A6F04D",
      images: ["/images/seventh1.jpeg", "/images/seventh2.jpeg", "/images/seventh3.jpeg", "/images/seventh4.jpeg", 
      "/images/seventh5.jpeg", "/images/seventh6.jpeg", "/images/seventh7.jpeg"],
      href: "https://github.com/j03m4r/7thSky"
    },
    {
        title: "Sound Scout",
        color: "#F0654D",
        images: ['/images/middlebrook1.jpeg', '/images/wyoming1.jpeg', '/images/wyoming2.jpeg', '/images/upnorth1.jpeg'],
        href: "https://github.com/j03m4r/Sound-Scout"
    },
    {
      title: "Syllabase",
      color: "#A14DF0",
      images: ["/images/syllabase1.jpeg", "/images/syllabase2.jpeg", "/images/syllabase3.jpeg", "/images/syllabase4.jpeg"],
      href: "https://github.com/j03m4r/syllabase"
    },
    {
      title: "Rate & Relate",
      color: "#F04DBD",
      images: ["/images/raterelate1.jpeg", "/images/raterelate2.jpeg", "/images/raterelate3.jpeg"],
      href: "https://github.com/j03m4r/Raterelate.com"
    },
];

const Projects = () => {
    const mainContainer = useRef<HTMLDivElement>(null);
    const headerRef = useRef<HTMLDivElement>(null);
    const cursorTrail = useRef<HTMLDivElement>(null);
    const viewText = useRef<HTMLParagraphElement>(null);

    const imageRef = useRef<HTMLImageElement>(null);
    const [imageSrc, setImageSrc] = useState('/images/middlebrook1.jpeg');
    const [imageIdx, setImageIdx] = useState(0);
    const [images, setImages] = useState(['/images/middlebrook1.jpeg',
    '/images/wyoming1.jpeg', '/images/wyoming2.jpeg', '/images/upnorth1.jpeg']);

    useEffect(() => {
		const interval = setInterval(() => {
            if (imageIdx>=images.length-1) {
			    setImageIdx(0);
			} else {
			    setImageIdx(imageIdx+1);
			}
			setImageSrc(images[imageIdx]);
		}, 800)
		return () => clearInterval(interval);
	}, [imageSrc, imageIdx,]);

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
        <div ref={mainContainer} onMouseMove={(e) => onMouseMove(e.clientX, e.clientY)} onMouseLeave={() => onMouseLeaveContainer()} onMouseEnter={() => onMouseEnterContainer()} className="h-[100vh] mt-[20vh] relative">
            <div ref={cursorTrail} className="absolute w-[0px] h-[0px] bg-black rounded-full z-10 pointer-events-none flex justify-center items-center">
                <p ref={viewText} className="text-[0px]">VISIT</p>
            </div>
            <div className="ml-[10vw] relative">
                <div ref={headerRef} className="text-7xl">Projects</div>
                <div className="relative flex flex-col mt-[10vh]">
                    {projects.map((project, idx) => (
                        <ProjectItem onMouseEnter={() => onMouseEnter(idx)} onMouseLeave={() => onMouseLeave()} {...project} key={`proj_${idx}`} 
                        setImages={(images: string[]) => setImages(images)} />
                    ))}
                </div>
            </div>
            <div className="absolute z-10 right-10 bottom-10">
                <div className="rounded-lg p-1 flex flex-col gap-y-1 border shadow-sm" style={{ backgroundColor: '#faf9f6'}}>
                    <div className="flex gap-x-1 h-2 pl-1">
                        <div className="rounded-full bg-red-600 w-2" />
                        <div className="rounded-full bg-yellow-400 w-2" />
                        <div className="rounded-full bg-green-600 w-2" />
                    </div>
                    <Image ref={imageRef} src={imageSrc ? imageSrc : '/images/upnorth1.jpeg'} width={600} height={400} alt='Movie' className='w-[40vw] h-[26.25vw] bg-black rounded-lg' onMouseMove={(e) => e.stopPropagation} />
                </div>
            </div>
        </div>
    );
}

export default Projects;