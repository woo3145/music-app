import React from 'react';
import PlayListCard from '../../components/PlayListCard';
import TrackCard from '../../components/TrackCard';
import { useMockPlayLists } from '../../mockData/useMockPlayLists';
import { useMockTracks } from '../../mockData/useMockTracks';

const Home = () => {
  const mockTracks = useMockTracks();
  const mockPlayLists = useMockPlayLists();
  return (
    <div className="pt-4 pb-20">
      <div>
        <p className="text-2xl py-8">New Songs</p>
        <ul className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-x-5 gap-y-3 md:gap-4">
          {mockTracks.map((track: ITrack, idx) => (
            <TrackCard key={idx} track={track} />
          ))}
        </ul>
      </div>
      <div>
        <p className="text-2xl py-8">New PlayList</p>
        <ul className="grid grid-cols-3 md:grid-cols-4 lg:grid-cols-5 xl:grid-cols-8 gap-2 md:gap-6">
          {mockPlayLists.map((playList: IPlayList, idx) => (
            <PlayListCard key={idx} playList={playList} />
          ))}
        </ul>
      </div>
    </div>
  );
};

export default Home;