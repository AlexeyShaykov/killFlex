'use client'

import { m } from 'framer-motion'
import { useState } from 'react'

import { IMediaItem } from '@/media/media.types'

import { episodesAnimation } from '../animation'

import EpisodeItem  from './EpisodeItem'

interface Props {
	mediaItem: IMediaItem
}

const Episodes = ({ mediaItem }: Props) => {
	const [currentSeason] = useState(mediaItem.seasons[0])

	return (
		<div className="px-8 py-6">
			<div
				className="flex items-center"
			>
				<h2 className="border-r border-r-slate-400/5 pr-2 text-lg font-medium">
					Episodes
				</h2>
				<div className="ml-2 text-sm opacity-20">{currentSeason.title}</div>
			</div>

			<div
				className="mt-3.5 grid grid-cols-6 gap-6"
			>
				{currentSeason.episodes.map(episode => (
					<EpisodeItem
						key={episode.id}
						episode={episode}
					/>
				))}
			</div>
		</div>
	)
};

export default Episodes;
