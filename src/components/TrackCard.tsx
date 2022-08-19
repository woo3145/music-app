import { BsPlayFill } from 'react-icons/bs';
import { Link } from 'react-router-dom';

interface Props {
  track: ITrack;
}

const TrackCard = ({ track }: Props) => {
  const playMusic = () => {
    // 플레이 리스트에 추가 후 음악 재생
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
