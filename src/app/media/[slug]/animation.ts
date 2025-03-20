import { HTMLMotionProps, Variants } from 'framer-motion'

export const episodesAnimation: Variants = {
	hidden: { opacity: 0.5 },
	visible: {
		opacity: 1,
		transition: {
			staggerChildren: 0.25,
			duration: 1,
			ease: 'linear',
			delayChildren: 0.8
		}
	}
}

export const episodeAnimation: Variants = {
	hidden: { opacity: 0, x: 200 },
	visible: {
		opacity: 1,
		x: 0
	}
}

export const backdropAnimation: HTMLMotionProps<'div'> = {
	initial: {
		clipPath: 'inset(6.5% 40.5% round 20px)',
		rotateX: 89,
		opacity: 0.3,
		translateY: 92
	},
	animate: {
		clipPath: 'inset(0% 0% 0% 0%)',
		rotateX: 0,
		opacity: 1,
		translateY: 0
	},
	transition: {
		type: 'keyframes',
		duration: 1.5,
		ease: 'easeInOut'
	}
}
