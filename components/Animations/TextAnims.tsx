export const slideUp = {
	initial: {
		y: "100%"
	},
	open: (i: number) => ({
		y: 0,
		transition: { duration: 0.5, delay: 0.02 * i}
	}),
	closed: {
		y: "100%"
	}
};

export const opacity = {
	initial: {
		opacity: 0
	},
	inView: (i: number) => ({
		opacity: 1,
		transition: { duration: .5, delay: 0.1 * i }
	}),
	outView: {
		opacity: 0
	}
}