import { IMediaItem } from '@/media/media.types';

interface IMediaPage {
  mediaItem: IMediaItem
}

const MediaPage = ({ mediaItem }: IMediaPage) => {
  const { title } = mediaItem;
  
  return (
    <div>{title}</div>
  );
};

export default MediaPage;