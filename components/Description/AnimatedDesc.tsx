"use client";
import { twMerge } from "tailwind-merge";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useLayoutEffect, useRef } from "react";

interface AnimatedDescProps {
    children: React.ReactNode;
    className?: string;
};

const AnimatedDesc: React.FC<AnimatedDescProps> = ({children, className}) => {
    const text = useRef(null);
    const underline = useRef(null);

    useLayoutEffect(() => {
        let ctx = gsap.context(() => {
            gsap.registerPlugin(ScrollTrigger);

            gsap.from(text.current, {
                scrollTrigger: {
                    trigger: text.current,
                    start: "0px bottom",
                    end: "bottom+=300px bottom",
                    scrub: true,
                },
                left: "-300px",
                opacity: 0,
            });

            gsap.from(underline.current, {
                scrollTrigger: {
                    trigger: text.current,
                    start: "0px bottom",
                    end: "bottom+=800px bottom",
                    scrub: true,
                },
                width: 0,
                opacity: 0,
            });

            const nameText = document.querySelector(".my-name");
            gsap.to(nameText, {
                scrollTrigger: {
                    trigger: nameText,
                    start: "top+=300px bottom",
                    end: "bottom+=550px bottom",
                    scrub: true
                },
                color: "#A14DF0"
            });
        });
        return () => ctx.revert(); // <- cleanup!
    }, [])

    return (
        <div className="relative w-full">
            <p ref={text} className={twMerge(`relative text-6xl font-semibold`, className)}>{children}</p>
            {/* <div ref={underline} className="relative w-full border-b border-black mt-1"/> */}
        </div>
    )
}

export default AnimatedDesc;