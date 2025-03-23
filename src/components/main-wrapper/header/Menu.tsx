import Link from 'next/link';
import { menuData } from './menu.data';

const Menu = () => {
  return (
    <nav>
      <ul className="flex items-center gap-10 flex-wrap">
        {menuData.map((item, index) => (
          <li key={index}>
            <Link
              href={item.url}
              className="transition-colors group hover:text-primary relative"
            > 
              {item.name}
              <span 
                className="group-hover:bg-primary bg-transparent 
                transition-colors absolute left-0 w-full h-0.5 top-8" />
            </Link>
          </li>
        ))}
      </ul>
    </nav>
  );
};

export default Menu;
