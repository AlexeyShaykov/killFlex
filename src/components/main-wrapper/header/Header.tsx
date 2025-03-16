import { Bell, Grip, Search } from 'lucide-react';
import Image from 'next/image';
import Menu from './Menu';

const Header = () => {

  return (
    <header className="px-6 py-7 flex justify-between items-center">
      <div className="flex space-x-4 items-center">
        <Grip className="transition-colors hover:text-primary cursor-pointer" />
        <Menu className="transition-colors hover:text-primary cursor-pointer" />
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