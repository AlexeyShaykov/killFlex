'use client'

import * as m from "motion/react-m";
import { useState } from 'react'

import { IMediaItem, IVideo } from '@/media/media.types'

import { episodesAnimation } from '../animation'

import EpisodeItem  from './EpisodeItem'

interface Props {
	mediaItem: IMediaItem
}

const Episodes = ({ mediaItem }: Props) => {
	const [currentSeason] = useState(mediaItem.seasons[0])

	return (
		<div className="px-8 py-6">
			<m.div
				initial={{
					opacity: 0,
					y: 15,
				}}
				animate={{
					opacity: 1,
					y: 0,
				}}
				transition={{
					duration: 0.6,
				}}
				className="flex items-center"
			>
				<h2 className="border-r border-r-slate-400/5 pr-2 text-lg font-medium">
					Episodes
				</h2>
				<div className="ml-2 text-sm opacity-20">{currentSeason.title}</div>
			</m.div>

			<m.div
				variants={episodesAnimation}
				initial="hidden"
				animate="visible"
				className="mt-3.5 grid grid-cols-6 gap-6"
			>
				{currentSeason.episodes.map((episode: IVideo, index: number) => (
					<EpisodeItem
						key={episode.id}
						episode={episode}
						index={index}
					/>
				))}
			</m.div>
		</div>
	)
};

export default Episodes;
