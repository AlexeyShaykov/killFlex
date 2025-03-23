import * as m from "motion/react-m";

import { IMediaItem } from "@/media/media.types";

type TMediaDetails = {
  mediaItem: IMediaItem;
};

const MediaDetails = ({ mediaItem }: TMediaDetails) => {
  const { title, backdrop, genres, rating } = mediaItem;
  return (
    <div>
      <m.div
        initial={{ opacity: 0, y: 10 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, delay: 0.8 }}
        className="flex gap-5 items-center"
      >
        {genres.map((genre) => (
          <div
            key={genre}
            className="text-white bg-neutral-900/50 p-2 rounded text-xs px-2 py-1"
          >
            {genre}
          </div>
        ))}
      </m.div>
      <m.h1
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, delay: 0.8 }}
        className="text-6xl font-bold text-white mb-5"
        style={{ textShadow: "1px 1px 3px rgba(0, 0, 0, 0.3)" }}
      >
        {title}
      </m.h1>
      <m.div 
        initial={{ opacity: 0, y: 25 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, delay: 1 }}
        className="flex gap-5 items-center">
        <div
          className="text-2xl font-semibold text-white"
          style={{ textShadow: "2px 2px 4px rgba(0, 0, 0, 0.5)" }}
        >
          KillFlex
        </div>
        <div className="flex items-center gap-2">
          <div className="bg-secondary rounded text-black text-sm px-2 py-1">
            iMDb
          </div>
          <div className="text-white">
            {(parseFloat(rating.toFixed(1)) / 10).toFixed(1)}
          </div>
        </div>
      </m.div>
    </div>
  );
};

export default MediaDetails;
