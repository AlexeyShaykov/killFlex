import { CSSProperties } from "react";
import Image, { getImageProps } from "next/image";

import { IMediaItem } from "@/media/media.types";

import { getBackgroundImage } from "@/utils/get-background-image";

import Episodes from "./episodes/Episodes";
import Products from "./products/Products";
import MediaDetails from "./details/MediaDetails";

interface IMediaPage {
  mediaItem: IMediaItem;
}

const MediaPage = ({ mediaItem }: IMediaPage) => {
  const { title, backdrop } = mediaItem;

  const {
    props: { srcSet },
  } = getImageProps({
    alt: "",
    width: 1643,
    height: 692,
    src: backdrop,
    priority: true,
    quality: 100,
  });

  const backgroundImage = getBackgroundImage(srcSet);

  const style: CSSProperties = {
    height: 560,
    width: "100%",
    backgroundImage,
    transformStyle: "preserve-3d",
  };

  return (
    <div>
      <div
        style={style}
        className="relative left-0 z-0 -mt-25 bg-cover bg-no-repeat"
      >
        <div className="absolute bottom-0 left-0 z-1 flex w-full items-end justify-between p-8">
          <MediaDetails mediaItem={mediaItem} />
          <Products />
        </div>
      </div>
      <Episodes mediaItem={mediaItem} />
    </div>
  );
};

export default MediaPage;
