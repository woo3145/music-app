import { Droppable } from 'react-beautiful-dnd';
import { IoClose } from 'react-icons/io5';
import { clearPlaylist } from '../../../utils/redux/modules/playlistSlice';
import { useAppDispatch, useAppSelector } from '../../../utils/redux/store';
import PlaylistItem from './PlaylistItem';

interface PlaylistPopupProps {
  playlistToggle: () => void;
}

const PlaylistPopup = ({ playlistToggle }: PlaylistPopupProps) => {
  const dispatch = useAppDispatch();
  const playlist = useAppSelector((state) => state.playlist.playlist);
  const currentIdx = useAppSelector((state) => state.playlist.currentIdx);

  const onClearPlaylist = () => {
    dispatch(clearPlaylist());
  };
  return (
    <div className="absolute bottom-16 right-14 w-full max-w-sm h-auto bg-blue-900 rounded-md shadow-md">
      <div className="flex items-center justify-between px-4 py-3 border-b text-white">
        <p className="tracking-widest">Up Next</p>
        <div className="flex items-center">
          <div
            className="mr-4 cursor-pointer hover:text-blue-100"
            onClick={onClearPlaylist}
          >
            Clear
          </div>
          <IoClose
            className="text-xl cursor-pointer"
            onClick={playlistToggle}
          />
        </div>
      </div>
      <Droppable droppableId="playlist-column">
        {(provided) => (
          <div ref={provided.innerRef} {...provided.droppableProps}>
            <ul className="bg-white h-96 overflow-y-scroll">
              {playlist &&
                playlist.tracks.map((track, idx) => {
                  return (
                    <PlaylistItem
                      idx={idx}
                      key={idx}
                      track={track}
                      selected={currentIdx === idx}
                    />
                  );
                })}
              {provided.placeholder}
            </ul>
          </div>
        )}
      </Droppable>
    </div>
  );
};

export default PlaylistPopup;
