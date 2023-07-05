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
    <div className="fixed left-0 w-full bg-blue-900 rounded-md shadow-md xl:max-w-sm xl:absolute bottom-20 xl:left-auto xl:top-auto xl:right-14">
      <div className="flex items-center justify-between px-4 py-3 text-white border-b">
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
            <ul className="overflow-y-scroll bg-white border border-t-0 h-96">
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
