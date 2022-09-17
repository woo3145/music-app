import { Draggable } from 'react-beautiful-dnd';
import { BsPlayFill } from 'react-icons/bs';
import { IoClose } from 'react-icons/io5';
import { Link } from 'react-router-dom';
import {
  deleteTrack,
  selectTrackInPlaylist,
} from '../../../../utils/redux/modules/playlistSlice';
import { useAppDispatch } from '../../../../utils/redux/store';

interface Props {
  track: ITrack;
  idx: number;
  selected: boolean;
}
const PlaylistItem = ({ track, idx, selected }: Props) => {
  const dispatch = useAppDispatch();

  const onDeleteTrack = () => {
    dispatch(deleteTrack(idx));
  };

  const onPlayTrack = () => {
    dispatch(selectTrackInPlaylist(idx));
  };

  return (
    <Draggable
      draggableId={`draggableid-${track.id}`}
      index={idx}
      key={track.id}
    >
      {(provided) => (
        <li
          ref={provided.innerRef}
          {...provided.draggableProps}
          {...provided.dragHandleProps}
          className={`px-4 py-2 ${
            selected ? 'bg-slate-200' : 'hover:bg-slate-200'
          }`}
        >
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
              <BsPlayFill
                className={`text-white absolute ${
                  selected ? '' : 'invisible group-hover:visible'
                }`}
              />
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
      )}
    </Draggable>
  );
};

export default PlaylistItem;
