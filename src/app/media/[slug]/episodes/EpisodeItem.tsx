'use client'

import { AnimatePresence, m } from 'framer-motion'
import Image from 'next/image'
import { useState } from 'react'

import { IVideo } from '@/media/media.types'

import { episodeAnimation } from '../animation'

interface Props {
	episode: IVideo
}

const EpisodeItem = ({ episode }: Props) => {
	const [isWhiteOverlay, setIsWhiteOverlay] = useState(false)

	return (
		<button
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
		</button>
	)
};

export default EpisodeItem;
