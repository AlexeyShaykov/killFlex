'use client'

import * as m from 'motion/react-m'
import { useEffect, useLayoutEffect, useState } from 'react'
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
	const { changeState, resetState, isHideOtherCards } = useMainAnimationStore();

	const router = useRouter();

	useLayoutEffect(() => {
		resetState();
		setActiveCardId(4);
	}, []);

	useEffect(() => {
		mediaData.forEach(media => {
			router.prefetch(`/media/${media.slug}`)
		})
	}, []);


	const updateActiveCard = (id: number) => {
		const newIndex = getCardIndex(id)

		if (id === activeCardId) {
			const slug = mediaData[newIndex].slug
			// router.prefetch(`/media/${slug}`)
			changeState('isNewPageAnimation', true)
			changeState('isHideOtherCards', true)
			setTimeout(() => {
				changeState('isHideHeading', true)
			}, 600);

			setTimeout(() => {
				router.push(`/media/${slug}`)
			}, 650);
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
				translateY: isHideOtherCards ? 200 : 0,
			}}
			transition={{
				type: 'keyframes',
				duration: isHideOtherCards ? 1 : 0.5,
				ease: 'easeInOut'
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

