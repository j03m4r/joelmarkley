"use client";

import Image from 'next/image';
import { useEffect, useRef, useState } from 'react';

interface point {
    x: number;
    y: number;
};

const Movie = () => {
    const easing = 0.15;
	let easedScrollProgress = 0;

	const initialMaskSize = .8;
	const targetMaskSize = 80;
	const initialMovieWidth = 100;
	const initialMovieHeight = 100;
	const targetMovieWidth = 60;
	const targetMovieHeight = 40;

	const words = ["Creative", "Passionate", "Web Developer", "Software Developer", "Student"];
	const images = ['/images/middlebrook1.jpeg',
	'/images/wyoming1.jpeg', '/images/wyoming2.jpeg', '/images/upnorth1.jpeg'];

	const [prevPos, setPrevPos] = useState<point>({x: 0, y: 0});
	const [imageIdx, setImageIdx] = useState(0);
	const [imageSrc, setImageSrc] = useState('/images/middlebrook1.jpeg');

	const container = useRef<HTMLDivElement>(null);
	const stickyMask = useRef<HTMLDivElement>(null);
	const imageRef = useRef<HTMLImageElement>(null);

	const onMouseMove = (x: number, y: number) => {
		const dist = Math.sqrt(Math.pow((x - prevPos.x), 2) + Math.pow((y - prevPos.y), 2));
		if (dist > 75) {
			setPrevPos({x, y});
			const text = words[Math.floor(Math.random() * words.length)];
			let word = document.createElement('span');
			let body = document.querySelector('main');
			word.innerText = text;
			word.style.fontSize = "40px";
			word.style.left = x + "px";
			word.style.top = y + "px";
			word.className = "popWord";
			body?.appendChild(word);

			setTimeout(() => {
				word.remove();
			}, 1000);
		}
	};

	useEffect( () => {
		requestAnimationFrame(animate)	
	}, [])
	
	const animate = () => {
		if (stickyMask.current == null || !imageRef.current) return;
		// @ts-ignore
		const maskSizeProgress = targetMaskSize * getScrollProgress();
		stickyMask.current.style.webkitMaskSize = (initialMaskSize + maskSizeProgress) * 100 + "%";

		if (parseFloat(stickyMask.current.style.webkitMaskSize) > 4500) {
			// @ts-ignore
			const movieWidthProgress = targetMovieWidth * getScrollProgress();
			// @ts-ignore
			const movieHeightProgress = targetMovieHeight * getScrollProgress();
			imageRef.current.style.width = (initialMovieWidth - movieHeightProgress) + "vw";
			imageRef.current.style.height = (initialMovieHeight - movieWidthProgress) + "vw";
			// imageRef.current.style.width = "60vw";
			// imageRef.current.style.height = "40vw";
		} else {
			imageRef.current.style.width = "100vw";
			imageRef.current.style.height = "100vw"
		}
		requestAnimationFrame(animate);
	}
	
	const getScrollProgress = () => {
		if (stickyMask.current == null || container.current == null) return;
		const scrollProgress = stickyMask.current.offsetTop / (container.current.getBoundingClientRect().height - window.innerHeight)
		const delta = scrollProgress - easedScrollProgress;
		easedScrollProgress += delta * easing;
		return easedScrollProgress
	}

	useEffect(() => {
		const interval = setInterval(() => {
			if (imageIdx===images.length-1) {
			setImageIdx(0);
			} else {
			setImageIdx(imageIdx+1);
			}
			setImageSrc(images[imageIdx]);
		}, 800)

		return () => clearInterval(interval);
	}, [imageSrc, imageIdx,])

    return (
        <div ref={container} className='relative h-[300vh]'>
            <div ref={stickyMask} className='flex overflow-hidden sticky top-0 min-h-[50vh] md:h-screen items-center justify-center' style={{ maskImage: "url('/images/JoelMarkley.svg')", maskPosition: '48.65% center', maskRepeat: 'no-repeat', maskSize: "80%"}}>
                <div onMouseMove={(e) => onMouseMove(e.clientX, e.clientY)} className="flex min-h-screen min-w-screen flex-col items-center justify-center">
                    <Image ref={imageRef} src={imageSrc} width={800} height={650} alt='Movie' className='w-[100vw] h-[100vw] bg-black' onMouseMove={(e) => e.stopPropagation} />
                </div>
            </div>
        </div>
    );
}

export default Movie;