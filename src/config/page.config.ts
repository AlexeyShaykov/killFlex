class PageConfig {
	HOME = '/'

	MEDIA(slug?: string) {
		return `/media${slug ? '/' + slug : ''}`
	}

	MOVIES = '/movies'
	TV_SHOWS = '/tv-shows'
	WATCHLIST = '/watchlist'
}

export default new PageConfig()
