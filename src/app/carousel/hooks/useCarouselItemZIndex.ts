import { mediaData } from '@/media/media.data';

import { useCarouselStore } from '@/store/carousel.store';

const useCarouselItemZIndex = ({ index, isActive }: { index: number; isActive: boolean }) => {
	const { activeCardId } = useCarouselStore();
	const activeIndex = mediaData.findIndex(media => media.id === activeCardId);
	const distanceFromActive = index - activeIndex;
	const zIndex = isActive ? 20 : 12 - Math.abs(distanceFromActive);

	return {
		zIndex,
	};
};

export default useCarouselItemZIndex;
