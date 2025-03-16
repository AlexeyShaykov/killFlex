import { IMediaItem } from '@/media/media.types';
import { Star, TvMinimal } from 'lucide-react';

type TCarouselItemDetail = {
  item: IMediaItem
}

const CarouselItemDetail = ({ item }: TCarouselItemDetail) => {

  return (
    <div className="absolute top-0 left-0 flex flex-col w-full h-full justify-between z-2">
      <div className="flex items-center justify-between">
        <div className="bg-secondary text-black rounded p-0.5 flex gap-2">
          <Star />{item.rating.toFixed(1)}
        </div>
        <div className="bg-black/55 text-white rounded p-0.5 flex gap-2">
          <TvMinimal />TV show
        </div>
      </div>
      <div></div>
    </div>
  )
};

export default CarouselItemDetail;
