import { useState } from 'react';
import { RiPlayListLine } from 'react-icons/ri';
import { useAppSelector } from '../../../utils/redux/store';
import PlaylistBox from './PlaylistBox';

const MusicMetadata = () => {
  const currentTrack = useAppSelector((state) => state.playlist.currentTrack);

  const [playlistVisible, setPlaylistVisible] = useState(false);
  const playlistToggle = () => {
    setPlaylistVisible(!playlistVisible);
  };
  if (!currentTrack) {
    return null;
  }
  return (
    <div className="shrink-0 w-60 flex items-center justify-between">
      <div className="flex items-center">
        {/* artwork */}
        <div className="w-9 shrink-0">
          <img src={currentTrack.artworkUrl} alt="" className="rounded-md" />
        </div>
        {/* title & artistName */}
        <div className="px-3">
          <p className="text-xs leading-4 opacity-60 cursor-pointer hover:opacity-100 duration-200 break-all line-clamp-1">
            {currentTrack.artistName}
          </p>
          <p className="text-sm leading-4 opacity-70 cursor-pointer hover:opacity-100 duration-200 break-all line-clamp-1">
            {currentTrack.name}
          </p>
        </div>
      </div>
      {/* menu */}
      <div className="flex">
        <RiPlayListLine
          onClick={playlistToggle}
          className="text-lg opacity-70 cursor-pointer hover:opacity-100 duration-200"
        />
      </div>

      <>{playlistVisible && <PlaylistBox />}</>
    </div>
  );
};

export default MusicMetadata;
