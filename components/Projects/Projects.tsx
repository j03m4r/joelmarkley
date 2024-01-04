"use client";
import { useEffect, useRef, useState } from "react";
import ProjectItem from "./ProjectItem";
import Image from "next/image";

const projects = [
    { 
      title: "Seventh Sky",
      color: "#A6F04D",
      images: ["/images/seventh1.jpeg", "/images/seventh2.jpeg", "/images/seventh3.jpeg", "/images/seventh4.jpeg", 
      "/images/seventh5.jpeg", "/images/seventh6.jpeg", "/images/seventh7.jpeg"],
      href: "https://github.com/j03m4r/7thSky"
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
]

const Projects = () => {
    const headerRef = useRef<HTMLDivElement>(null);
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
    
    return (
        <div className="h-[100vh] mt-[20vh] relative">
            <div className="ml-[10vw] relative">
                <div ref={headerRef} className="text-8xl font-bold">Projects</div>
                <div className="relative flex flex-col mt-[10vh]">
                    {projects.map((project, idx) => (
                        <ProjectItem {...project} key={`proj_${idx}`} 
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
                    <Image ref={imageRef} src={imageSrc ? imageSrc : '/images/upnorth1.jpeg'} width={600} height={400} alt='Movie' className='w-[40vw] h-[26vw] bg-black rounded-lg' onMouseMove={(e) => e.stopPropagation} />
                </div>
            </div>
        </div>
    );
}

export default Projects;