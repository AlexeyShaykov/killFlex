'use client'

import * as m from 'motion/react-m'
import { useState } from 'react'

import { useCarouselStore } from '@/store/carousel.store'
import { mediaData } from '@/media/media.data'

import CarouselItem from './CarouselItem'

const getCardIndex = (cardId: number) =>
	mediaData.findIndex(media => media.id === cardId)

const Carousel = () => {
	const { activeCardId, setActiveCardId } = useCarouselStore()
	const [rotateAngle, setRotateAngle] = useState(0)


	const updateActiveCard = (id: number) => {
		if (id === activeCardId) return;
	
		const totalCards = mediaData.length
		const oldIndex = getCardIndex(activeCardId)
		const newIndex = getCardIndex(id)

		let diff = newIndex - oldIndex

		if (diff > totalCards / 2) {
			diff -= totalCards
		} else if (diff < -totalCards / 2) {
			diff += totalCards
		}

		let newRotateAngle = -(diff * 30)

		setRotateAngle((__prevValue: number) => __prevValue + newRotateAngle)
		setActiveCardId(id);
	}

	return (
		<m.div
			className="relative mx-auto mt-60 h-[952px] w-[952px]"
			initial={{
				rotate: 0
			}}
			animate={{
				rotate: rotateAngle,
			}}
			transition={{
				type: 'keyframes',
				duration: 0.5,
			}}
		>
			{mediaData.map((media, index) => (
				<CarouselItem
					key={media.id}
					item={media}
					index={index}
					length={mediaData.length}
					updateActiveCard={updateActiveCard.bind(null, media.id)}
				/>
			))}
		</m.div>
	)
};

export default Carousel;

