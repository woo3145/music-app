import { BsPlayFill } from 'react-icons/bs';
import { Link } from 'react-router-dom';

interface Props {
  playList: IPlayList;
}

const PlayListCard = ({ playList }: Props) => {
  const playMusic = () => {
    // 플레이 리스트에 추가 후 음악 재생
  };
  return (
    <li key={playList.id} className="w-full h-auto">
      <div className="group">
        <div className="relative">
          <img
            src={playList.artworkUrl}
            alt="avator"
            className="w-full h-auto cursor-pointer group-hover:brightness-75 duration-200 rounded-md"
          />
          <div className="absolute bottom-2 left-2 w-10 h-10 bg-neutral-600 hover:bg-blue-900 rounded-full flex justify-center items-center cursor-pointer invisible group-hover:visible">
            <BsPlayFill className="text-white" onClick={playMusic} />
          </div>
        </div>
        <div className="pt-2">
          <Link
            to=""
            className="block text-md hover:underline line-clamp-1 md:line-clamp-none"
          >
            {playList.name}
          </Link>
          <Link
            to=""
            className="block text-sm opacity-60 hover:underline line-clamp-1 md:line-clamp-none"
          >
            {playList.creatorName}
          </Link>
        </div>
      </div>
    </li>
  );
};

export default PlayListCard;
