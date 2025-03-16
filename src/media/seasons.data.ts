import { ISeason, IVideo } from './media.types'

export const episodes: IVideo[] = [
	{
		id: 1,
		title: 'Episode 1',
		slug: 'episode-1',
		poster: '/episodes/ep1.jpeg',
		duration: 45,
		videoUrl: '/video.mp4'
	},
	{
		id: 2,
		title: 'Episode 2',
		slug: 'episode-2',
		poster: '/episodes/ep2.jpeg',
		duration: 46,
		videoUrl: '/video.mp4'
	},
	{
		id: 3,
		title: 'Episode 3',
		slug: 'episode-3',
		poster: '/episodes/ep3.jpeg',
		duration: 48,
		videoUrl: '/video.mp4'
	},
	{
		id: 4,
		title: 'Episode 4',
		slug: 'episode-4',
		poster: '/episodes/ep4.jpeg',
		duration: 42,
		videoUrl: '/video.mp4'
	},
	{
		id: 5,
		title: 'Episode 5',
		slug: 'episode-5',
		poster: '/episodes/ep5.jpeg',
		duration: 45,
		videoUrl: '/video.mp4'
	},
	{
		id: 6,
		title: 'Episode 6',
		slug: 'episode-6',
		poster: '/episodes/ep6.jpeg',
		duration: 46,
		videoUrl: '/video.mp4'
	}
]

export const seasons: ISeason[] = [
	{
		id: 1,
		episodes,
		slug: 'season-1',
		title: 'Season 1'
	},
	{
		id: 2,
		episodes,
		slug: 'season-2',
		title: 'Season 2'
	},
	{
		id: 3,
		episodes,
		slug: 'season-3',
		title: 'Season 3'
	},
	{
		id: 4,
		episodes,
		slug: 'season-4',
		title: 'Season 4'
	}
]
