import Link from "next/link";
import { RefObject, useRef } from "react";
import { motion, useInView } from "framer-motion";
import { opacity } from "../Animations/TextAnims";

const colors = ["#F0654D", "#A14DF0", "#F04DBD"];

const Footer = () => {
    const footerRef = useRef<HTMLDivElement>(null);
    const githubRef = useRef<HTMLAnchorElement>(null);
    const linkedInRef = useRef<HTMLAnchorElement>(null);
    const isInView = useInView(footerRef);

    const onMouseEnter = (ref: RefObject<HTMLAnchorElement>) => {
        if (!ref.current) return;
        const color = colors[(Math.floor(Math.random() * 100) % 3)];
        ref.current.style.color = color;
        ref.current.style.textDecorationColor = color;
    };

    return (
        <div ref={footerRef} className="p-[5vw] flex justify-between text-lg mt-[5vh] md:mt-0">
            <div className="flex gap-5 underline">
                <motion.p variants={opacity} initial="initial" animate={isInView ? "inView" : "outView"} custom={0}>
                    <Link ref={githubRef} href="https://github.com/j03m4r" onMouseEnter={() => onMouseEnter(githubRef)} onMouseLeave={() => onMouseEnter(githubRef)}>Github</Link>
                </motion.p>
                <motion.p variants={opacity} initial="initial" animate={isInView ? "inView" : "outView"} custom={1}>
                    <Link ref={linkedInRef} href="https://www.linkedin.com/in/joelmarkley" onMouseEnter={() => onMouseEnter(linkedInRef)} onMouseLeave={() => onMouseEnter(linkedInRef)}>LinkedIn</Link>
                </motion.p>
            </div>
            <motion.p variants={opacity} initial="initial" animate={isInView ? "inView" : "outView"} custom={2}>
                markl087@umn.edu
            </motion.p>
        </div>
    );
}

export default Footer;