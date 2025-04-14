import { create } from 'zustand';

export interface IVideoPlayer {
  videoURL: string | null;
  setVideoURL: (videoURL: string | null) => void;
}

export const useVideoPlayerStore = create<IVideoPlayer>(set => ({
  videoURL: null,
  setVideoURL: videoURL => set({ videoURL }),
}))
