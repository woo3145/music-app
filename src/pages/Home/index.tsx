import React from 'react';
import PlaylistCard from '../../components/PlaylistCard';
import TrackCard from '../../components/TrackCard';
import { useMockPlaylists } from '../../mockData/useMockPlaylists';
import { useMockTracks } from '../../mockData/useMockTracks';

const Home = () => {
  const mockTracks = useMockTracks();
  const mockPlayLists = useMockPlaylists();
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
        <p className="text-2xl py-8">New Playlist</p>
        <ul className="grid grid-cols-3 md:grid-cols-4 lg:grid-cols-5 xl:grid-cols-8 gap-2 md:gap-6">
          {mockPlayLists.map((playlist: IPlaylist, idx) => (
            <PlaylistCard key={idx} playlist={playlist} />
          ))}
        </ul>
      </div>
    </div>
  );
};

export default Home;
