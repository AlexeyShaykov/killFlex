import { HTMLMotionProps } from 'motion/react';

export const parentProductAnimation: HTMLMotionProps<'div'> = {
	initial: { opacity: 0, y: 10 },
	animate: { opacity: 1, y: 0 },
	transition: { duration: 0.5, delay: 0.8 },
};

export const firstChildProductAnimation: HTMLMotionProps<'div'> = {
	initial: { top: 0 },
	animate: { top: [-25, -20] },
	transition: {
		duration: 0.5,
		delay: 0.2,
		type: 'spring',
		stiffness: 100,
		damping: 20,
	},
};

export const secondChildProductAnimation: HTMLMotionProps<'div'> = {
  initial: { top: 0 },
  animate: { top: [-45, -38] },
  transition: {
    duration: 0.7,
    delay: 0.2,
    type: 'spring',
    stiffness: 100,
    damping: 20,
  },
};
