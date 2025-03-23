"use client";

import { Bell, Grip, Search } from "lucide-react";
import Image from "next/image";
import Menu from "./Menu";
import { usePathname } from "next/navigation";
import Link from 'next/link';

const Header = () => {
  const pathname = usePathname();

  const isOnMediaPage = pathname.includes("/media/");

  const iconColor = isOnMediaPage ? "#fff" : "#000";

  return (
    <header className="px-6 py-7 flex justify-between items-center relative z-1">
      <div className="flex space-x-4 items-center">
        <Link href={"/"}>
          <Grip
            color={iconColor}
            className="transition-colors hover:text-primary cursor-pointer"
          />
        </Link>
        {!isOnMediaPage && <Menu />}
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
