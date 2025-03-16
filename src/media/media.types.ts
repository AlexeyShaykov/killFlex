export interface IMediaItem {
	id: number
	slug: string

	title: string
	rating: number

	poster: string
	backdrop: string

	year: number

	seasons: ISeason[]

	genres: string[]
}

export interface ISeason {
	id: number
	slug: string
	title: string
	episodes: IVideo[]
}

export interface IVideo {
	id: number
	slug: string

	title: string
	poster: string

	duration: number
	videoUrl: string
}
