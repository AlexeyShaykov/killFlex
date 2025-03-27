import * as m from 'motion/react-m';
import Image, { getImageProps } from 'next/image';
import { CSSProperties } from 'react';

import { IMediaItem } from '@/media/media.types';

import { getBackgroundImage } from '@/utils/get-background-image';

import MediaDetails from './details/MediaDetails';
import Episodes from './episodes/Episodes';
import Products from './products/Products';

interface IMediaPage {
	mediaItem: IMediaItem;
}

const MediaPage = ({ mediaItem }: IMediaPage) => {
	const { title, backdrop } = mediaItem;

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

	return (
		<div style={{ perspective: '1500px' }}>
			<m.div
				initial={{
					clipPath: 'inset(6.5% 40.5% round 20px)',
					rotateX: 89,
					opacity: 0.3,
					translateY: 92,
				}}
				animate={{
					clipPath: 'inset(0% 0% 0% 0%)',
					rotateX: 0,
					opacity: 1,
					translateY: 0,
				}}
				transition={{
					type: 'keyframes',
					duration: 1.5,
					ease: 'easeIn',
				}}
				style={style}
				className="relative left-0 z-0 -mt-25 bg-cover bg-no-repeat"
			>
				<div className="absolute bottom-0 left-0 z-1 flex w-full items-end justify-between p-8">
					<MediaDetails mediaItem={mediaItem} />
					<Products />
				</div>
			</m.div>
			<Episodes mediaItem={mediaItem} />
		</div>
	);
};

export default MediaPage;
