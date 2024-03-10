"use client";
import Description from "@/components/Description/Description";
import Footer from "@/components/Footer/Footer";
import Movie from "@/components/Movie/Movie";
import Projects from "@/components/Projects/Projects";
import Testing from "@/components/Testing/Testing";

export default function Home() {
	return (
		<main className="mb-[100vh] relative">
			<Movie />
			<Description />
			<Projects />
			<Footer />
		</main>
	)
};