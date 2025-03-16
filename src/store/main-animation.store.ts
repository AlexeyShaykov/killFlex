import { create } from 'zustand';

export interface IMainAnimationStates {
	isNewPageAnimation: boolean
	isHideOtherCards: boolean
	isHideHeading: boolean
}

export type TMainAnimationStates = keyof IMainAnimationStates

export interface IMainAnimation extends IMainAnimationStates {
	changeState: (stateName: TMainAnimationStates, value: boolean) => void
	resetState: () => void
}

const initialState: IMainAnimationStates = {
	isHideHeading: false,
	isHideOtherCards: false,
	isNewPageAnimation: false
}

export const useMainAnimationStore = create<IMainAnimation>(set => ({
	...initialState,
	changeState: (stateName, value) => set({ [stateName]: value }),
	resetState: () => set(initialState)
}))