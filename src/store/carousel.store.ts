import { create } from 'zustand';

export interface ICarousel {
	activeCardId: number
	setActiveCardId: (id: number) => void
}

export const useCarouselStore = create<ICarousel>(set => ({
	activeCardId: 4,
	setActiveCardId: id => set({ activeCardId: id })
}))
