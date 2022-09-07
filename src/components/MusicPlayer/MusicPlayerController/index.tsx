import {
  IoPlaySkipForward,
  IoPlay,
  IoPlaySkipBack,
  IoPause,
} from 'react-icons/io5';
import useMusicPlayer from '../../../utils/audio/useMusicPlayer';
import {
  nextTrack,
  prevTrack,
} from '../../../utils/redux/modules/playlistSlice';
import { useAppDispatch, useAppSelector } from '../../../utils/redux/store';

const MusicPlayerController = () => {
  const isPlaying = useAppSelector((state) => state.musicPlayer.isPlaying);
  const { play, pause } = useMusicPlayer();
  const dispatch = useAppDispatch();

  return (
    <div className="shrink-0 flex items-center gap-6">
      <IoPlaySkipBack
        className="text-lg cursor-pointer"
        onClick={() => dispatch(prevTrack())}
      />
      {isPlaying ? (
        <IoPause className="text-xl cursor-pointer" onClick={pause} />
      ) : (
        <IoPlay className="text-xl cursor-pointer" onClick={play} />
      )}

      <IoPlaySkipForward
        className="text-lg cursor-pointer"
        onClick={() => dispatch(nextTrack())}
      />
    </div>
  );
};

export default MusicPlayerController;
