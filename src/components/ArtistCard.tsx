import { BsPlayFill } from 'react-icons/bs';
import { Link } from 'react-router-dom';

interface Props {
  artist: IArtist;
}

const ArtistCard = ({ artist }: Props) => {
  const playMusic = () => {
    // 플레이 리스트에 추가 후 음악 재생
  };
  return (
    <li className="flex flex-col items-center shrink-0 group cursor-pointer">
      <div className="relative flex justify-center items-center">
        <img
          src={artist.avatarUrl}
          alt="avatar"
          className="w-52 h-52 rounded-full group-hover:brightness-75 duration-200"
        />
        <div className="absolute w-10 h-10 bg-neutral-600 hover:bg-blue-900 rounded-full flex justify-center items-center cursor-pointer invisible group-hover:visible">
          <BsPlayFill className="text-white" onClick={playMusic} />
        </div>
      </div>

      <Link to="" className="block text-md hover:underline pt-2">
        {artist.name}
      </Link>
    </li>
  );
};

export default ArtistCard;
