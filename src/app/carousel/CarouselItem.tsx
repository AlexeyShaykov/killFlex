'use client'

import * as m from 'motion/react-m'
import Image from 'next/image'
import { twMerge } from 'tailwind-merge'

import { IMediaItem } from '@/media/media.types'

import { useCarouselStore } from '@/store/carousel.store'
import CarouselItemDetail from './CarouselItemDetail'

interface Props {
	index: number
	item: IMediaItem
	length: number
	updateActiveCard: () => void
}

const CarouselItem = ({ item, index, length, updateActiveCard }: Props) => {
	const { activeCardId } = useCarouselStore()
	const isActive = activeCardId === item.id

	const angleStep = 360 / length
	const angle = -90 + index * angleStep
	const radius = 430
	
	return (
		<div
			className="absolute top-1/2 left-1/2"
			style={{
				transform: `translate(-50%, -50%) rotate(${angle}deg) translate(0, -${radius}px)`,
				zIndex: isActive ? 1 : 0,
			}}
		>
			<m.button
				className={twMerge(
					'overflow-hidden rounded-xl transition will-change-transform',
					!isActive && 'grayscale-100 contrast-75',
					isActive && 'shadow-lg',
				)}
				initial={{
					zIndex: 0,
					scale: 1,
				}}
				animate={{
					scale: isActive ? 1.2 : 1,
					zIndex: isActive ? 1 : 0,
				}}
				transition={{ 
					type: 'keyframes',
					stiffness: 200,
					damping: 20,
					duration: 0.6,
				}}
				onClick={updateActiveCard}
			>
				<CarouselItemDetail item={item} />
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
	)
};

export default CarouselItem;
