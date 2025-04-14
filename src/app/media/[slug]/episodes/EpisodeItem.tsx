'use client';

import { AnimatePresence, motion as m } from 'motion/react';
import Image from 'next/image';
import { useState } from 'react';

import { IVideo } from '@/media/media.types';

import { episodeAnimation } from '../animation';
import { useVideoPlayerStore } from '@/store/video-player.store';

interface Props {
	episode: IVideo;
	index: number;
}

const EpisodeItem = ({ episode, index }: Props) => {
	const { setVideoURL } = useVideoPlayerStore()
		const [isWhiteOverlay, setIsWhiteOverlay] = useState(false)
	
		const clickHandler = (videoUrl: string) => {
			setIsWhiteOverlay(true)
			setVideoURL(videoUrl)
	
			setTimeout(() => {
				setIsWhiteOverlay(false)
			}, 250)
		}

	return (
		<m.button
			variants={episodeAnimation}
			transition={{
				duration: 1.5,
				type: 'spring',
				bounce: 0.27,
			}}
			custom={index}
			onClick={clickHandler.bind(null, episode.videoUrl)}
			className="relative"
		>
			<AnimatePresence>
				{isWhiteOverlay && (
					<m.div
						className="absolute inset-0 z-10 bg-white/70 opacity-50 h-[136] w-[243] rounded-lg overflow-hidden"
						initial={{ opacity: 0 }}
						animate={{ opacity: 1 }}
						exit={{ opacity: 0 }}
					/>
				)}
			</AnimatePresence>
			<Image
				src={episode.poster}
				alt={episode.title}
				width={243}
				height={136}
				className="rounded-lg"
				draggable={false}
			/>
			<div className="mt-2 flex items-center gap-2 text-xs">
				<div>{episode.title}</div>
				<div className="opacity-50">• {episode.duration}m</div>
			</div>
		</m.button>
	);
};

export default EpisodeItem;
