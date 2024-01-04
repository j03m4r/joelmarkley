"use client";

import AnimatedDesc from "./AnimatedDesc";

interface classedText {
    text: string;
    cln: string;
};

const Description = () => {
    const descPhrases = [{text: "I'm Joel", cln: "my-name"}, {text: "A student at University of Minnesota", cln: ""}, {text: "I make cool websites and software", cln: ""}];

    return (
        <div className="relative min-h-screen flex flex-col justify-center ml-[10vw] space-y-3">
            {descPhrases.map((desc: classedText, idx) => (
                <AnimatedDesc key={idx} className={desc.cln}>{desc.text}</AnimatedDesc>
            ))}
        </div>
    );
};

export default Description;