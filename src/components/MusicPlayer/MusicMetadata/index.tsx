import { RiPlayListLine } from 'react-icons/ri';
import { useAppSelector } from '../../../utils/redux/store';

interface Props {
  playlistToggle: () => void;
}

const MusicMetadata = ({ playlistToggle }: Props) => {
  const currentTrack = useAppSelector((state) => state.playlist.currentTrack);

  if (!currentTrack) {
    return null;
  }
  return (
    <div className="flex items-center justify-between w-48 shrink-0 xl:w-60">
      <div className="flex items-center">
        {/* artwork */}
        <div className="bg-center w-9 h-9">
          <img
            src={currentTrack.artworkUrl}
            alt=""
            className="rounded-md w-9 h-9"
          />
        </div>
        {/* title & artistName */}
        <div className="px-3">
          <p className="text-xs leading-4 break-all duration-200 cursor-pointer opacity-60 hover:opacity-100 line-clamp-1">
            {currentTrack.artistName}
          </p>
          <p className="text-sm leading-4 break-all duration-200 cursor-pointer opacity-70 hover:opacity-100 line-clamp-1">
            {currentTrack.name}
          </p>
        </div>
      </div>
      {/* menu */}
      <div className="flex">
        <RiPlayListLine
          onClick={playlistToggle}
          className="text-lg duration-200 cursor-pointer opacity-70 hover:opacity-100"
        />
      </div>
    </div>
  );
};

export default MusicMetadata;
