'use client';

import { AnimatePresence } from 'motion/react';
import { m } from 'framer-motion';
import Image from 'next/image';
import { twMerge } from 'tailwind-merge';

import { IMediaItem } from '@/media/media.types';

import { useCarouselStore } from '@/store/carousel.store';
import { useMainAnimationStore } from '@/store/main-animation.store';

import CarouselItemDetail from './CarouselItemDetail';
import useCarouselItemAngle from './hooks/useCarouselItemAngle';
import useCarouselItemZIndex from './hooks/useCarouselItemZIndex';

import carouselItemAnimation from './animations/carousel-item.animation';

interface Props {
	index: number;
	item: IMediaItem;
	updateActiveCard: () => void;
}

const CarouselItem = ({ item, index, updateActiveCard }: Props) => {
	const { activeCardId } = useCarouselStore();
	const { isNewPageAnimation } = useMainAnimationStore();
	const { radius, angle } = useCarouselItemAngle({ index });

	const isActive = activeCardId === item.id;

	const { zIndex } = useCarouselItemZIndex({ isActive, index });

	return (
		<div
			className="absolute top-1/2 left-1/2"
			style={{
				transform: `translate(-50%, -50%) rotate(${angle}deg) translate(0, -${radius}px)`,
				zIndex,
				perspective: '1000px',
			}}
		>
			<m.button
				{...carouselItemAnimation({ isActive, isNewPageAnimation })}
				className={twMerge(
					'overflow-hidden rounded-xl transition will-change-transform',
					isActive && 'shadow-lg',
				)}
				style={{
					transformStyle: 'preserve-3d',
				}}
				onClick={updateActiveCard}
			>
				<AnimatePresence>{isActive && <CarouselItemDetail item={item} />}</AnimatePresence>
				<Image
					width={252}
					height={378}
					src={item.poster}
					alt={item.title}
					draggable="false"
					className="will-change-transform"
					priority={index > 6 ? false : true}
				/>
			</m.button>
		</div>
	);
};

export default CarouselItem;
