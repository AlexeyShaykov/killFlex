'use client'

import { AnimatePresence, m } from 'motion/react'

import { IMediaItem } from '@/media/media.types';

import { backdropAnimation } from './animation';
import MediaDetails from './details/MediaDetails';
import Episodes from './episodes/Episodes';
import Products from './products/Products';
import useMediaBackdrop from './useMediaBackdrop';

interface IMediaPage {
	mediaItem: IMediaItem;
}

const MediaPage = ({ mediaItem }: IMediaPage) => {
	const style = useMediaBackdrop(mediaItem);

	return (
		<div style={{ perspective: '1500px' }}>
			<m.div
				{...backdropAnimation}
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
