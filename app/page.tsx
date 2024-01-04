import Description from "@/components/Description/Description";
import Movie from "@/components/Movie/Movie";
import Projects from "@/components/Projects/Projects";

export default function Home() {
	return (
		<main className="mb-[100vh] relative">
			<Movie />
			<Description />
			<Projects />
		</main>
	)
}
