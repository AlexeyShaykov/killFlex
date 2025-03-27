'use client';

import { AnimatePresence } from 'motion/react';
import * as m from 'motion/react-m';
import Image from 'next/image';
import { twMerge } from 'tailwind-merge';

import { IMediaItem } from '@/media/media.types';

import { useCarouselStore } from '@/store/carousel.store';
import { useMainAnimationStore } from '@/store/main-animation.store';

import CarouselItemDetail from './CarouselItemDetail';
import useCarouselItemAngle from './hooks/useCarouselItemAngle';
import useCarouselItemZIndex from './hooks/useCarouselItemZIndex';

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

	const isActiveNewPageAnimation = isNewPageAnimation && isActive;
	const isNotActiveNewPageAnimation = isNewPageAnimation && !isActive;

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
				className={twMerge(
					'overflow-hidden rounded-xl transition will-change-transform',
					isActive && 'shadow-lg',
				)}
				style={{
					transformStyle: 'preserve-3d',
				}}
				initial={{
					zIndex: 0,
					scale: isActive ? 1.2 : 1,
					filter: isActive ? 'grayscale(0%) contrast(100%)' : 'grayscale(100%) contrast(75%)',
				}}
				animate={
					isActiveNewPageAnimation
						? {
								scale: 1.3,
								translateY: -300,
								rotateX: -98,
								filter: 'grayscale(0%) contrast(100%)',
							}
						: isNotActiveNewPageAnimation
							? {
									scale: 0.4,
									opacity: 0,
								}
							: {
									scale: isActive ? 1.2 : 1,
									zIndex: isActive ? 1 : 0,
									filter: isActive
										? 'grayscale(0%) contrast(100%)'
										: 'grayscale(100%) contrast(75%)',
								}
				}
				transition={{
					type: 'keyframes',
					duration: isActiveNewPageAnimation || isNotActiveNewPageAnimation ? 1.5 : 0.4,
					ease: isActiveNewPageAnimation || isNotActiveNewPageAnimation ? 'easeInOut' : 'easeIn',
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
