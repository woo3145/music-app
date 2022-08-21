import { useState } from 'react';
import CategoryCard from '../../components/CategoryCard';
import TrackCard from '../../components/TrackCard';
import { useMockCategories } from '../../mockData/useMockCategories';
import { useMockTracks } from '../../mockData/useMockTracks';

const Explore = () => {
  const [genre, setGenre] = useState('All');
  const mockTracks = useMockTracks();
  const mockCategories = useMockCategories();

  console.log(genre);

  return (
    <div className="pt-4 pb-20">
      <div>
        <p className="text-2xl py-8">Explore - {genre}</p>
        <div className="flex flex-wrap gap-4 pb-12">
          {mockCategories.map((category: ICategory, idx) => (
            <CategoryCard
              key={idx}
              category={category}
              onClick={() => setGenre(category.name)}
            />
          ))}
        </div>
        <ul className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-x-5 gap-y-3 md:gap-4">
          {mockTracks.map((track: ITrack, idx) => (
            <TrackCard key={idx} track={track} />
          ))}
        </ul>
      </div>
    </div>
  );
};

export default Explore;
