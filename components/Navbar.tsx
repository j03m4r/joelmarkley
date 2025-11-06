"use client";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { MutableRefObject, useEffect, useRef } from "react";

const Navbar = () => {
    const borderRef = useRef<null|HTMLDivElement>(null);
    const aboutLink = useRef<null|HTMLAnchorElement>(null);    
    const researchLink = useRef<null|HTMLAnchorElement>(null);
    const cvLink = useRef<null|HTMLAnchorElement>(null);
    const pathname = usePathname();
    
    useEffect(() => {
        if (!borderRef.current || !aboutLink.current || !researchLink.current || !cvLink.current) return;

        let ref: MutableRefObject<HTMLAnchorElement|null>|null = null;
        if (pathname==="/") {
            ref = aboutLink;
            researchLink.current.style.backgroundColor = "transparent";
            cvLink.current.style.backgroundColor = "transparent";
            researchLink.current.style.color = "#000"
            cvLink.current.style.color = "#000"
        } else if (pathname==="/research") {
            ref = researchLink;
            aboutLink.current.style.backgroundColor = "transparent";
            cvLink.current.style.backgroundColor = "transparent";
            aboutLink.current.style.color = "#000"
            cvLink.current.style.color = "#000"
        } else if (pathname==="/cv") {
            ref = cvLink;
            aboutLink.current.style.backgroundColor = "transparent";
            researchLink.current.style.backgroundColor = "transparent";
            aboutLink.current.style.color = "#000"
            researchLink.current.style.color = "#000"
        }

        if (!ref?.current) return;
        const linkRect = ref.current.getBoundingClientRect();
        const parentRect = ref.current.offsetParent?.getBoundingClientRect();
        
        if (parentRect) {
            borderRef.current.style.left = `${linkRect.left - parentRect.left}px`;
            borderRef.current.style.top = `${linkRect.top - parentRect.top}px`;
        }
        borderRef.current.style.width = `${linkRect.width}px`;
        borderRef.current.style.height = `${linkRect.height}px`;
        ref.current.style.color = "#faf9f6"
        ref.current.style.backgroundColor = "#000"
    }, [pathname])

    const moveBorder = (ref: MutableRefObject<null|HTMLAnchorElement>) => {
        if (!borderRef.current || !ref.current) return;
        const linkRect = ref.current.getBoundingClientRect();
        const parentRect = ref.current.offsetParent?.getBoundingClientRect();
        
        if (parentRect) {
            borderRef.current.style.left = `${linkRect.left - parentRect.left}px`;
            borderRef.current.style.top = `${linkRect.top - parentRect.top}px`;
        }
        borderRef.current.style.width = `${linkRect.width}px`;
        borderRef.current.style.height = `${linkRect.height}px`;
    }

    const moveBorderToCurr = () => {
        if (!borderRef.current || !aboutLink.current || !researchLink.current || !cvLink.current) return;
        
        let ref: MutableRefObject<HTMLAnchorElement|null>|null = null;
        if (pathname==="/") {
            ref = aboutLink;
        } else if (pathname==="/research") {
            ref = researchLink;
        } else if (pathname==="/cv") {
            ref = cvLink;
        }

        if (!ref?.current) return;
        const linkRect = ref.current.getBoundingClientRect();
        const parentRect = ref.current.offsetParent?.getBoundingClientRect();
        
        if (parentRect) {
            borderRef.current.style.left = `${linkRect.left - parentRect.left}px`;
            borderRef.current.style.top = `${linkRect.top - parentRect.top}px`;
        }
        borderRef.current.style.width = `${linkRect.width}px`;
        borderRef.current.style.height = `${linkRect.height}px`;
        ref.current.style.color = "#faf9f6"
        ref.current.style.backgroundColor = "#000"
    }

    return (
        <div className="fixed w-full h-[8rem] justify-center items-center flex">
            <div className="bg-[#faf9f6] -z-20 border border-black rounded-2xl p-1 w-fit h-fit flex">
                <div onMouseLeave={() => moveBorderToCurr()} className="text-lg flex gap-x-[.5rem] relative">
                    <div ref={borderRef} className="pointer-events-none absolute border border-black rounded-xl transition-all duration-300 ease-out -z-10"></div>
                    <Link onMouseEnter={()=>moveBorder(aboutLink)} ref={aboutLink} href={"/"} className="px-[1rem] py-[.5rem] flex transition-all duration-300 ease-out rounded-xl">About</Link>
                    <Link onMouseEnter={()=>moveBorder(researchLink)} ref={researchLink} href={"/research"} className="px-[1rem] py-[.5rem] flex transition-all duration-300 ease-out rounded-xl">Research</Link>
                    <Link onMouseEnter={()=>moveBorder(cvLink)} ref={cvLink} href={"/cv"} className="px-[1rem] py-[.5rem] flex transition-all duration-300 ease-out rounded-xl">CV</Link>
                </div>
            </div>
        </div>
    );
};

export default Navbar;
