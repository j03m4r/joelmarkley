"use client";

import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import { slideUp } from "../Animations/TextAnims";

const Testing = () => {
    const wordsRef = useRef<HTMLParagraphElement>(null);
    const words = "Google Fonts makes it easy to bring personality and performance to your websites and products. Our robust catalog of open-source fonts and icons makes it easy to integrate expressive type and icons seamlessly — no matter where you are in the world."
	const isInView = useInView(wordsRef);

    return (
        <div className="h-[150vh] flex justify-center items-center relative">
            <p ref={wordsRef} className="max-w-[60vw] text-6xl" style={{ lineHeight: 1.2 }}>
                {words.split(" ").map((word, idx) => {
                    return (
                        <span key={idx} className="relative inline-flex overflow-hidden mr-5">
                            <motion.span key={idx} 
                            variants={slideUp} initial="initial" custom={idx} 
                            animate={isInView ? "open" : "close"}>{word}</motion.span>
                        </span>
                    );
                })}
            </p>
        </div>
    );
}

export default Testing;