import { mediaData } from '@/media/media.data';

const useCarouselItemAngle = ({ index }: { index: number }) => {
	const angleStep = 360 / mediaData.length;
	const angle = -90 + index * angleStep;
	const radius = 430;

	return {
		angle,
		radius,
	};
};

export default useCarouselItemAngle;
