import { IMediaItem } from '@/media/media.types';
import Image from 'next/image';

import Products from './products/Products';

interface IMediaPage {
  mediaItem: IMediaItem
}

const MediaPage = ({ mediaItem }: IMediaPage) => {
  const { title, backdrop, genres, rating } = mediaItem;
  
  return (
      <div>
        <Image 
          width={1920}
          height={1080}
          alt={title}
          src={backdrop}
          className='w-full h-full object-cover absolute top-0 left-0 -z-1'
        />
        <div className='relative z-1 p-5 flex items-end justify-between'>
            <div>
              <div className='flex gap-5 items-center'>
                  {genres.map((genre) => (
                    <div key={genre} className='text-white bg-white/10 p-2 rounded text-xs px-2 py-1'>
                      {genre}
                    </div>
                  ))}
                </div>
                <h1 className='text-5xl font-bold text-white mb-1'>{title}</h1>
                <div className='flex gap-2 items-center'>
                  <div className='text-red-500 font-semibold'>KillFlex</div>
                  <div className='flex items-center gap-1'>
                    <div className='bg-secondary text-black text-sm px-2 py-1 rounded-full'>
                      HD
                    </div>
                    <div className='text-white'>
                      {(parseFloat(rating.toFixed(1)) / 10).toFixed(1)}
                    </div>
                  </div>
                </div>
            </div>
          <Products />
        </div>
      </div>
  );
};

export default MediaPage;