import React from 'react';
import TrackCard from '../../components/TrackCard';
import { useMockTracks } from '../../mockData/useMockTracks';

const Home = () => {
  const mockTracks = useMockTracks();
  return (
    <div className="pt-4 pb-20">
      <div>
        <p className="text-3xl py-8">New Music</p>
        <ul className="grid grid-cols-5 grid-rows-2 gap-2 md:gap-6">
          {mockTracks.map((track: ITrack, idx) => (
            <TrackCard key={idx} track={track} />
          ))}
        </ul>
      </div>
      <div>
        <p className="text-3xl py-8">New Music</p>
        <ul className="grid grid-cols-5 grid-rows-2 gap-2 md:gap-6">
          {mockTracks.map((track: ITrack, idx) => (
            <TrackCard key={idx} track={track} />
          ))}
        </ul>
      </div>
    </div>
  );
};

export default Home;
