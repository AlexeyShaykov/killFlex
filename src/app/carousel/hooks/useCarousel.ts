import { useRouter } from 'next/navigation';
import { Dispatch, SetStateAction, useEffect, useLayoutEffect, useRef } from 'react';

import { mediaData } from '@/media/media.data';
import { IMediaItem } from '@/media/media.types';

import { useCarouselStore } from '@/store/carousel.store';
import { useMainAnimationStore } from '@/store/main-animation.store';
import { useFiltersStore } from '@/store/store';

import PageConfig from '@/config/page.config';

const getCardIndex = (cardId: number) => mediaData.findIndex(media => media.id === cardId);

type TProps = {
	setRotateAngle: Dispatch<SetStateAction<number>>;
};

const useCarousel = ({ setRotateAngle }: TProps) => {
	const { activeCardId, setActiveCardId } = useCarouselStore();
	const { changeState, resetState } = useMainAnimationStore();
	const { currentFilter } = useFiltersStore();

	const initialRender = useRef(false);

	const router = useRouter();

	const updateActiveCard = (id: number) => {
		const newIndex = getCardIndex(id);

		if (id === activeCardId) {
			const slug = mediaData[newIndex].slug;
			changeState('isNewPageAnimation', true);
			changeState('isHideOtherCards', true);

			setTimeout(() => {
				changeState('isHideHeading', true);
			}, 600);

			setTimeout(() => {
				router.push(PageConfig.MEDIA(slug));
			}, 1700);
			return;
		}

		const totalCards = mediaData.length;
		const oldIndex = getCardIndex(activeCardId);

		let diff = newIndex - oldIndex;

		if (diff > totalCards / 2) {
			diff -= totalCards;
		} else if (diff < -totalCards / 2) {
			diff += totalCards;
		}

		let newRotateAngle = -(diff * 30);

		setRotateAngle((__prevValue: number) => __prevValue + newRotateAngle);
		setActiveCardId(id);
	};

	useEffect(() => {
		if (!currentFilter) return;

		if (initialRender.current) {
			initialRender.current = false;
			return;
		}

		const mediaCopy = mediaData.reduce((prev, next) => {
			if (next.id === activeCardId) return prev;

			prev.push(next);

			return prev;
		}, [] as IMediaItem[]);
		const randomIndex = Math.floor(Math.random() * mediaCopy.length);

		updateActiveCard(mediaCopy[randomIndex].id);
	}, [currentFilter]);

	useLayoutEffect(() => {
		resetState();
		setActiveCardId(4);
		initialRender.current = true;
	}, []);

	useEffect(() => {
		mediaData.forEach(media => {
			router.prefetch(PageConfig.MEDIA(media.slug));
		});
	}, []);

	return {
		updateActiveCard,
		activeCardId,
	};
};

export default useCarousel;
