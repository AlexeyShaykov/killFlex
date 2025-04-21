'use client';

import { ChevronLeft } from 'lucide-react';
import { m } from 'motion/react';
import ReactPlayer from 'react-player';

import { useVideoPlayerStore } from '@/store/video-player.store';

const VideoPlayer = () => {
	const { videoURL, setVideoURL } = useVideoPlayerStore();

	return (
		<m.div
			initial={{ opacity: 0, scale: 0.8 }}
			animate={{ opacity: 1, scale: 1 }}
			exit={{ opacity: 0 }}
			transition={{ duration: 0.4 }}
			className="absolute top-20 left-0 z-10 flex h-screen w-screen items-center justify-center bg-[#222436]/70 backdrop-blur-lg"
		>
			<div className="relative aspect-video h-[85%] w-max overflow-hidden rounded-xl">
				<m.button
					initial={{
						y: -15,
						opacity: 0,
					}}
					animate={{
						y: 0,
						opacity: 1,
					}}
					transition={{ duration: 0.2, delay: 0.4 }}
					className="absolute top-4 left-4 z-20 text-white cursor-pointer"
					onClick={() => {
						setVideoURL('');
					}}
				>
					<ChevronLeft />
				</m.button>
				<ReactPlayer
					url={videoURL || ''}
					controls
					width="100%"
					height="100%"
				/>
			</div>
		</m.div>
	);
};

export default VideoPlayer;
