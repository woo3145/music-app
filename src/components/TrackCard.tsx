import { BsPlayFill } from 'react-icons/bs';
import { Link } from 'react-router-dom';
import {
  addPlaylist,
  nextTrack,
  setPlaylist,
} from '../utils/redux/modules/playlistSlice';
import { useAppDispatch, useAppSelector } from '../utils/redux/store';

interface Props {
  track: ITrack;
}

const TrackCard = ({ track }: Props) => {
  const dispatch = useAppDispatch();
  const me = useAppSelector((state) => state.user.user);
  const playlist = useAppSelector((state) => state.playlist.playlist);
  const playMusic = () => {
    if (!track) return;
    // 현재 플레이 리스트가 없을경우 새로추가
    if (!playlist) {
      const newPlaylist = {
        id: 1,
        name: 'Local Playlist',
        artworkUrl: track.artworkUrl,
        description: 'Test',
        tracks: [track],
        creatorName: me?.displayName || 'user',
      };
      dispatch(setPlaylist({ playlist: newPlaylist, currentIdx: 0 }));
    } else {
      // 플레이 리스트가 있다면 곡 추가 후 다음곡 재생
      dispatch(addPlaylist({ track }));
      dispatch(nextTrack());
    }

    console.log(playlist);
  };
  return (
    <li key={track.id} className="w-full h-auto">
      <div className="group flex items-center cursor-pointer">
        <div className="relative shrink-0">
          <img
            src={track.artworkUrl}
            alt="avator"
            className="w-14 md:w-16 lg:w-20 h-auto cursor-pointer group-hover:brightness-75 duration-200 rounded-md"
          />
          <div className="absolute bottom-2 left-2 w-8 h-8 bg-neutral-600 hover:bg-blue-900 rounded-full flex justify-center items-center cursor-pointer invisible group-hover:visible">
            <BsPlayFill className="text-white" onClick={playMusic} />
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
