import Filters from './filters/Filters';
import Carousel from './carousel/Carousel';

export default function Home() {
  return (
    <div className="mt-14">
      <h1 className="text-center text-4xl font-bold">Discover Unlimited Content</h1>
      <Filters />
      <Carousel />
    </div>
  );
}
