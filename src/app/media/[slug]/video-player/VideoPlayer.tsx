'use client';

import ReactPlayer from 'react-player';

import { useVideoPlayerStore } from '@/store/video-player.store';

const VideoPlayer = () => {
	const { videoURL } = useVideoPlayerStore();

	return (
		<ReactPlayer
			url={videoURL || ''}
      playing={true}
			controls={true}
			width="100%"
			height="100%"
		/>
	);
};

export default VideoPlayer;
