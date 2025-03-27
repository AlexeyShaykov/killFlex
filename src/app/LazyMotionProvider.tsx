import { LazyMotion, domAnimation } from 'motion/react';
import type { PropsWithChildren } from 'react';

const LazyMotionProvider = ({ children }: PropsWithChildren) => {
	return <LazyMotion features={domAnimation}>{children}</LazyMotion>;
};

export default LazyMotionProvider;
