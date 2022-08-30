import {
  IoPlaySkipForward,
  IoPlay,
  IoPlaySkipBack,
  IoPause,
} from 'react-icons/io5';
import useMusicPlayer from '../../../utils/audio/useMusicPlayer';
import { useAppSelector } from '../../../utils/redux/store';

const MusicPlayerController = () => {
  const isPlaying = useAppSelector((state) => state.musicPlayer.isPlaying);
  const { play, pause, setArgs } = useMusicPlayer();

  const setMusic = (id: number) => {
    setArgs({
      src: `/static/sample${id}.mp3`,
      format: ['mp3'],
      html5: true,
    });
  };
  return (
    <div className="shrink-0 flex items-center gap-6">
      <IoPlaySkipBack
        className="text-lg cursor-pointer"
        onClick={() => setMusic(1)}
      />
      {isPlaying ? (
        <IoPause className="text-xl cursor-pointer" onClick={pause} />
      ) : (
        <IoPlay className="text-xl cursor-pointer" onClick={play} />
      )}

      <IoPlaySkipForward
        className="text-lg cursor-pointer"
        onClick={() => setMusic(2)}
      />
    </div>
  );
};

export default MusicPlayerController;
