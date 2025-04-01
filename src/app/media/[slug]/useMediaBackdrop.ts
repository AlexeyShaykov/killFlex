import { getImageProps } from 'next/image';
import { CSSProperties } from 'react';

import { IMediaItem } from '@/media/media.types';

import { getBackgroundImage } from '@/utils/get-background-image';

const useMediaBackdrop = (mediaItem: IMediaItem): CSSProperties => {
	const { backdrop } = mediaItem;

	const {
		props: { srcSet },
	} = getImageProps({
		alt: '',
		width: 1643,
		height: 692,
		src: backdrop,
		priority: true,
		quality: 100,
	});

	const backgroundImage = getBackgroundImage(srcSet);

	const style: CSSProperties = {
		height: 540,
		width: '100%',
		backgroundImage,
		transformStyle: 'preserve-3d',
	};

	return style;
};

export default useMediaBackdrop;
