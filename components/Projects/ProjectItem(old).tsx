"use client";
import Link from "next/link";
import { useRef } from "react";

interface ProjectItemProps {
    title: string;
    color: string;
    images: string[];
    href: string;
    setImages: (images: string[]) => void;
    onMouseEnter: () => void;
    onMouseLeave: () => void;
};

const defaultImages = ['/images/middlebrook1.jpeg',
'/images/wyoming1.jpeg', '/images/wyoming2.jpeg', '/images/upnorth1.jpeg'];

const ProjectItem: React.FC<ProjectItemProps> = ({ title, color, images, href, setImages, onMouseEnter, onMouseLeave }) => {
    const bgRef = useRef<HTMLAnchorElement>(null);

    const _onMouseEnter = () => {
        if (!bgRef.current) return;
        onMouseEnter(); // Calling passed down func (cursor trail)

        bgRef.current.style.backgroundColor = color;
        setImages(images);
    };

    const _onMouseLeave = () => {
        if (!bgRef.current) return;
        onMouseLeave();

        bgRef.current.style.backgroundColor = "#faf9f6";
        setImages(defaultImages);
    };

    return (
        <Link href={href} ref={bgRef} onMouseEnter={_onMouseEnter} onMouseLeave={_onMouseLeave}
        className="border-t border-black -mb-[2vw] relative cursor-pointer hover:-translate-y-[2vw] 
        transition duration-300 p-1 group" style={{ backgroundColor: "#faf9f6" }}>
            <p className="text-8xl m-0">{title}</p>
        </Link>
    );
}

export default ProjectItem;