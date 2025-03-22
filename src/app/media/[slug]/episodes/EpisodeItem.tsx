'use client'

import * as m from "motion/react-m";

import Image from 'next/image'
import { useState } from 'react'

import { IVideo } from '@/media/media.types'

import { episodeAnimation } from '../animation'

interface Props {
	episode: IVideo;
	index: number;
}

const EpisodeItem = ({ episode, index }: Props) => {
	const [isWhiteOverlay, setIsWhiteOverlay] = useState(false)

	return (
		<m.button
			variants={episodeAnimation}
			transition={{
				duration: 1.5,
				type: 'spring',
				bounce: 0.27
			}}
			custom={index}
		>
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
	)
};

export default EpisodeItem;
