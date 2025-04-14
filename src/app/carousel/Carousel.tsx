'use client';

import { motion as m } from 'motion/react';
import { useState } from 'react';

import { mediaData } from '@/media/media.data';

import { useMainAnimationStore } from '@/store/main-animation.store';

import CarouselItem from './CarouselItem';
import useCarousel from './hooks/useCarousel';

const Carousel = () => {
	const [rotateAngle, setRotateAngle] = useState(0);

	const { isHideOtherCards } = useMainAnimationStore();
	const { updateActiveCard } = useCarousel({ setRotateAngle });

	return (
		<m.div
			className="relative mx-auto mt-60 h-[952px] w-[952px] will-change-transform"
			initial={{
				rotate: 0,
			}}
			animate={{
				rotate: rotateAngle,
				translateY: isHideOtherCards ? 200 : 0,
			}}
			transition={{
				type: 'keyframes',
				duration: 1,
				ease: 'easeInOut',
			}}
		>
			{mediaData.map((media, index) => (
				<CarouselItem
					key={media.id}
					item={media}
					index={index}
					updateActiveCard={updateActiveCard.bind(null, media.id)}
				/>
			))}
		</m.div>
	);
};

export default Carousel;
