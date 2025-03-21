'use client';

import { Bell, Grip, Search } from 'lucide-react';
import Image from 'next/image';
import Menu from './Menu';
import { usePathname } from 'next/navigation';

const Header = () => {
  const pathname = usePathname()

  return (
    <header className="px-6 py-7 flex justify-between items-center relative z-1">
      <div className="flex space-x-4 items-center">
        <Grip className="transition-colors hover:text-primary cursor-pointer" />
        {!pathname.includes('/media/') && <Menu className="transition-colors hover:text-primary cursor-pointer" />}
      </div>
      <div className="flex space-x-4 items-center">
        <Search className="transition-colors hover:text-primary cursor-pointer" />
        <Bell className="transition-colors hover:text-primary cursor-pointer" />
        <Image 
          src="/avatar.jpeg"
          alt="Avatar"
          width={30}
          height={30}
          className="rounded-full"
        />
      </div>
    </header>
  )
};

export default Header;