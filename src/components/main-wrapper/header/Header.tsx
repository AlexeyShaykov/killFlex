"use client";

import { useEffect, useState } from 'react';
import { Bell, Grip, Search } from "lucide-react";
import Image from "next/image";
import { usePathname } from "next/navigation";
import Link from 'next/link';

import Menu from "./Menu";
import { useVideoPlayerStore } from '@/store/video-player.store';

const checkMediaPath = (pathname: string | null) => {
	return !pathname?.includes('/media/')
}

const Header = ({ pathname }: { pathname: string | null }) => {
  const [isShowMenu, setIsShowMenu] = useState(checkMediaPath(pathname));
  const { videoURL } = useVideoPlayerStore();

	const clientPathName = usePathname()

	useEffect(() => {
		setIsShowMenu(checkMediaPath(clientPathName))
	}, [clientPathName])

  const iconColor = isShowMenu ? "#000" : "#fff";

  if (videoURL) return null;

  return (
    <header className="px-6 py-7 flex justify-between items-center relative z-1">
      <div className="flex space-x-4 items-center">
        <Link href={"/"}>
          <Grip
            color={iconColor}
            className="transition-colors hover:text-primary cursor-pointer"
          />
        </Link>
        {isShowMenu && <Menu />}
      </div>
      <div className="flex space-x-4 items-center">
        <Search color={iconColor} className="transition-colors hover:text-primary cursor-pointer" />
        <Bell color={iconColor} className="transition-colors hover:text-primary cursor-pointer" />
        <Image
          src="/avatar.jpeg"
          alt="Avatar"
          width={30}
          height={30}
          className="rounded-full"
        />
      </div>
    </header>
  );
};

export default Header;
