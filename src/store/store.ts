import { TFilter } from '@/app/filters/filters.data';
import { create } from 'zustand';

export interface IStore {
  currentFilter: TFilter;
  setCurrentFilter: (filter: TFilter) => void;
}

export const useFiltersStore = create<IStore>((set) => ({
  currentFilter: "Popular",
  setCurrentFilter: (filter) => set({ currentFilter: filter })
}))