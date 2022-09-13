import { BsPlayFill } from 'react-icons/bs';
import { IoClose } from 'react-icons/io5';
import { Link } from 'react-router-dom';
import {
  deleteTrack,
  selectTrackInPlaylist,
} from '../../../utils/redux/modules/playlistSlice';
import { useAppDispatch, useAppSelector } from '../../../utils/redux/store';

interface PlaylistPopupProps {
  playlistToggle: () => void;
}

const PlaylistPopup = ({ playlistToggle }: PlaylistPopupProps) => {
  const playlist = useAppSelector((state) => state.playlist.playlist);

  return (
    <div className="absolute bottom-16 right-14 w-full max-w-sm h-auto bg-blue-900 rounded-md shadow-md">
      <div className="flex items-center justify-between px-4 py-3 border-b text-white">
        <p className="tracking-widest">Up Next</p>
        <IoClose className="text-xl cursor-pointer" onClick={playlistToggle} />
      </div>
      <ul className="bg-white h-96">
        {playlist &&
          playlist.tracks.map((track, idx) => {
            return <PlaylistTrackCard idx={idx} key={idx} track={track} />;
          })}
      </ul>
    </div>
  );
};

interface PlaylistTrackCardProps {
  track: ITrack;
  idx: number;
}
const PlaylistTrackCard = ({ track, idx }: PlaylistTrackCardProps) => {
  const dispatch = useAppDispatch();

  const onDeleteTrack = () => {
    dispatch(deleteTrack(idx));
  };

  const onPlayTrack = () => {
    dispatch(selectTrackInPlaylist(idx));
  };

  return (
    <li className="px-4 py-2 hover:bg-slate-200">
      <div className="group flex items-center cursor-pointer">
        <div
          className="relative shrink-0 flex items-center justify-center"
          onClick={onPlayTrack}
        >
          <img
            src={track.artworkUrl}
            alt="avator"
            className="w-10 h-auto cursor-pointer group-hover:brightness-75 duration-200 rounded-md"
          />
          <BsPlayFill className="text-white invisible group-hover:visible absolute" />
        </div>
        <div className="px-4 w-full">
          <Link
            to=""
            className="block text-sm hover:underline line-clamp-1 md:line-clamp-2"
          >
            {track.name}
          </Link>
          <Link
            to=""
            className="block text-xs opacity-60 hover:underline line-clamp-1 md:line-clamp-2"
          >
            {track.artistName}
          </Link>
        </div>
        <IoClose
          onClick={onDeleteTrack}
          className="text-2xl text-blue-900 cursor-pointer shrink-0 invisible group-hover:visible opacity-70 hover:opacity-100"
        />
      </div>
    </li>
  );
};

export default PlaylistPopup;
