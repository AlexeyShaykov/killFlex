import { HTMLMotionProps } from 'framer-motion';

type Props = {
	isActive: boolean;
	isNewPageAnimation: boolean;
};

const FILTER_OFF = 'grayscale(0%) contrast(100%)';
const FILTER_ON = 'grayscale(100%) contrast(75%)';

const carouselItemAnimation = ({
	isActive,
	isNewPageAnimation,
}: Props): HTMLMotionProps<'button'> => {
	const isActiveNewPageAnimation = isNewPageAnimation && isActive;
	const isNotActiveNewPageAnimation = isNewPageAnimation && !isActive;

	return {
		initial: {
			zIndex: 0,
			scale: isActive ? 1.2 : 1,
			filter: isActive ? FILTER_OFF : FILTER_ON,
		},
		animate: isActiveNewPageAnimation
			? {
					scale: 1.3,
					translateY: -300,
					rotateX: -98,
					filter: FILTER_OFF,
				}
			: isNotActiveNewPageAnimation
				? {
						scale: 0.4,
						opacity: 0,
					}
				: {
						scale: isActive ? 1.2 : 1,
						zIndex: isActive ? 1 : 0,
						filter: isActive ? FILTER_OFF : FILTER_ON,
					},
		transition: {
			type: 'keyframes',
			duration: isActiveNewPageAnimation || isNotActiveNewPageAnimation ? 1.5 : 0.4,
			ease: isActiveNewPageAnimation || isNotActiveNewPageAnimation ? 'easeInOut' : 'easeIn',
		},
	};
};

export default carouselItemAnimation;
