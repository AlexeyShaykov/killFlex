'use client';

import { m } from 'framer-motion';

import { useMainAnimationStore } from '@/store/main-animation.store';

import Carousel from './carousel/Carousel';
import Filters from './filters/Filters';

const Home = () => {
	const { isHideHeading } = useMainAnimationStore();

	return (
		<div className="mt-14">
			<m.div
				initial={{ opacity: 1, y: 0 }}
				animate={{
					opacity: isHideHeading ? 0 : 1,
					y: isHideHeading ? -100 : 0,
				}}
				transition={isHideHeading ? { duration: 0.6, type: 'keyframes', ease: 'easeInOut' } : {}}
			>
				<h1 className="text-center text-4xl font-bold">Discover Unlimited Content</h1>
				<Filters />
			</m.div>
			<Carousel />
		</div>
	);
};

export default Home;
