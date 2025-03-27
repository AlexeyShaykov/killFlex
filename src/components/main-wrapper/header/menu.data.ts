import PageConfig from '@/config/page.config';

export interface IMenuItem {
  name: string;
  url: string;
}

export const menuData: IMenuItem[] = [
  {
    name: "Home",
    url: PageConfig.HOME,
  },
  {
    name: "Movies",
    url: PageConfig.MOVIES
  },
  {
    name: "TV shows",
    url: PageConfig.TV_SHOWS 
  },
  {
    name: "Watchlist",
    url: PageConfig.WATCHLIST,
  }
]