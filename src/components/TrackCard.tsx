import { BsPlayFill } from 'react-icons/bs';
import { Link } from 'react-router-dom';
import {
  addNext,
  nextTrack,
  setPlaylist,
} from '../utils/redux/modules/playlistSlice';
import { useAppDispatch, useAppSelector } from '../utils/redux/store';

interface Props {
  track: ITrack;
}

const TrackCard = ({ track }: Props) => {
  const dispatch = useAppDispatch();
  const isEmpty = useAppSelector((state) => state.playlist.isEmpty);
  const playMusic = () => {
    if (!track) return;
    // 현재 플레이 리스트가 없을경우 새로추가
    if (isEmpty) {
      const newPlaylist = {
        id: 1,
        name: 'Local Playlist',
        artworkUrl: track.artworkUrl,
        description: 'Test',
        tracks: [track],
        creatorName: 'user',
      };
      dispatch(setPlaylist({ playlist: newPlaylist, currentIdx: 0 }));
    } else {
      // 플레이 리스트가 있다면 곡 추가 후 다음곡 재생
      dispatch(addNext({ track }));
      dispatch(nextTrack());
    }
  };
  return (
    <li key={track.id} className="w-full h-auto">
      <div className="flex items-center cursor-pointer group">
        <div className="relative shrink-0">
          <img
            src={track.artworkUrl}
            alt="avator"
            className="w-20 h-20 duration-200 rounded-md cursor-pointer md:h-24 md:w-24 lg:h-28 lg:w-28 group-hover:brightness-75"
          />
          <div
            onClick={playMusic}
            className="absolute flex items-center justify-center invisible w-8 h-8 rounded-full cursor-pointer bottom-2 left-2 bg-neutral-600 hover:bg-blue-900 group-hover:visible"
          >
            <BsPlayFill className="text-white" />
          </div>
        </div>
        <div className="px-4">
          <Link
            to=""
            className="block text-md hover:underline line-clamp-1 md:line-clamp-2"
          >
            {track.name}
          </Link>
          <Link
            to=""
            className="block text-sm opacity-60 hover:underline line-clamp-1 md:line-clamp-2"
          >
            {track.artistName}
          </Link>
        </div>
      </div>
    </li>
  );
};

export default TrackCard;
