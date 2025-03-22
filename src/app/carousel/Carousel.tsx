'use client'

import * as m from 'motion/react-m'
import { useLayoutEffect, useState } from 'react'
import { useRouter } from 'next/navigation'

import { useCarouselStore } from '@/store/carousel.store'
import { mediaData } from '@/media/media.data'

import CarouselItem from './CarouselItem'
import { useMainAnimationStore } from '@/store/main-animation.store'

const getCardIndex = (cardId: number) =>
	mediaData.findIndex(media => media.id === cardId)

const Carousel = () => {
	const { activeCardId, setActiveCardId } = useCarouselStore()
	const [rotateAngle, setRotateAngle] = useState(0)
	const { changeState, resetState } = useMainAnimationStore();

	const router = useRouter();

	useLayoutEffect(() => {
		resetState();
	}, []);


	const updateActiveCard = (id: number) => {
		const newIndex = getCardIndex(id)

		if (id === activeCardId) {
			changeState('isNewPageAnimation', true)
			setTimeout(() => {
				changeState('isHideHeading', true)
			}, 600);

			setTimeout(() => {
				const slug = mediaData[newIndex].slug
				router.push(`/media/${slug}`)
			}, 1000);
			return
		}
	
		const totalCards = mediaData.length
		const oldIndex = getCardIndex(activeCardId)

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
					updateActiveCard={updateActiveCard.bind(null, media.id)}
				/>
			))}
		</m.div>
	)
};

export default Carousel;

