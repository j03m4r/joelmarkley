"use client";
import Link from "next/link";
import { useRef } from "react";

interface ProjectItemProps {
    title: string;
    color: string;
    images: string[];
    href: string;
    setImages: (images: string[]) => void;
};

const defaultImages = ['/images/middlebrook1.jpeg',
'/images/wyoming1.jpeg', '/images/wyoming2.jpeg', '/images/upnorth1.jpeg'];

const ProjectItem: React.FC<ProjectItemProps> = ({ title, color, images, href, setImages }) => {
    const bgRef = useRef<HTMLAnchorElement>(null);

    const onMouseEnter = () => {
        if (!bgRef.current) return;
        bgRef.current.style.backgroundColor = color;
        setImages(images);
    };

    const onMouseLeave = () => {
        if (!bgRef.current) return;
        bgRef.current.style.backgroundColor = "#faf9f6";
        setImages(defaultImages);
    };

    return (
        <Link href={href} ref={bgRef} onMouseEnter={onMouseEnter} onMouseLeave={onMouseLeave}
        className="border-t border-black -mb-[2vw] relative cursor-pointer hover:-translate-y-[2vw] 
        transition duration-300 p-1 group" style={{ backgroundColor: "#faf9f6" }}>
            <p className="text-8xl m-0">{title}</p>
        </Link>
    );
}

export default ProjectItem;