"use client";

import Link from "next/link";
import { useEffect, useRef, useState } from "react";
import Image from "next/image";
import { twMerge } from "tailwind-merge";

interface ProjectItemProps {
    title: string;
    color: string;
    images: string[];
    href: string;
    mobile: boolean;
    onMouseEnter: () => void;
    onMouseLeave: () => void;
};

const ProjectItem: React.FC<ProjectItemProps> = ({ title, images, href, mobile, onMouseEnter, onMouseLeave }) => {
    const bgRef = useRef<HTMLAnchorElement>(null);
    const titleRef = useRef<HTMLParagraphElement>(null);
    const imageRef = useRef<HTMLDivElement>(null);
    const [imageSrc, setImageSrc] = useState('/images/middlebrook1.jpeg');
    const [imageIdx, setImageIdx] = useState(0);

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

    const _onMouseEnter = () => {
        if (!bgRef.current) return;
        onMouseEnter(); // Calling passed down func (cursor trail)

        // gsap.to(bgRef.current, { backgroundColor: color });
        // bgRef.current.style.backgroundColor = color;
    };

    const _onMouseLeave = () => {
        if (!bgRef.current) return;
        onMouseLeave();

        // gsap.to(bgRef.current, { backgroundColor: "#faf9f6" })
        // bgRef.current.style.backgroundColor = "#faf9f6";
    };
    
    return (
        <Link ref={bgRef} href={href} onMouseEnter={_onMouseEnter} onMouseLeave={_onMouseLeave} 
        className={twMerge(`group flex justify-between items-center h-[15vw] border-t border-black`)}>
            <p ref={titleRef} className="relative text-5xl lg:text-8xl">
                {title}
            </p>
            <div className="lg:flex justify-center lg:w-1/2 hidden pointer-events-none">
                {mobile ? (
                    <div ref={imageRef} className="relative opacity-0 group-hover:opacity-100">
                        <div className="relative rounded-2xl p-1 flex flex-col gap-y-1 border shadow-sm" style={{ backgroundColor: '#faf9f6'}}>
                            <div className="absolute flex left-1/3 top-0 rounded-b-lg min-h-[1vw] w-[5vw]" style={{ backgroundColor: "#faf9f6"}} />
                            <Image src={imageSrc ? imageSrc : '/images/upnorth1.jpeg'} width={250} height={400} alt='Movie' className='w-[14.75vw] h-[26.25vw] bg-black rounded-lg' onMouseMove={(e) => e.stopPropagation} />
                        </div>
                    </div>
                ) : (
                    <div ref={imageRef} className="relative opacity-0 group-hover:opacity-100">
                        <div className="rounded-lg p-1 flex flex-col gap-y-1 border shadow-sm" style={{ backgroundColor: '#faf9f6'}}>
                            <div className="flex gap-x-1 h-2 pl-1">
                                <div className="rounded-full bg-red-600 w-2" />
                                <div className="rounded-full bg-yellow-400 w-2" />
                                <div className="rounded-full bg-green-600 w-2" />
                            </div>
                            <Image src={imageSrc ? imageSrc : '/images/upnorth1.jpeg'} width={600} height={400} alt='Movie' className='w-[40vw] h-[26.25vw] bg-black rounded-lg' onMouseMove={(e) => e.stopPropagation} />
                        </div>
                    </div>
                )}
            </div>
        </Link>
    );
}

export default ProjectItem;
