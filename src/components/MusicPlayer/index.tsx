import { useEffect } from 'react';
import useMusicPlayer from '../../utils/audio/useMusicPlayer';
import { useAppSelector } from '../../utils/redux/store';
import MusicMetadata from './MusicMetadata';
import MusicPlayerController from './MusicPlayerController';
import MusicPlayerSeekBar from './MusicPlayerSeekBar';
import MusicVolume from './MusicVolume';

const MusicPlayer = () => {
  const currentMusic = useAppSelector((state) => state.playlist.currentTrack);
  const tracks = useAppSelector((state) => state.playlist.playlist?.tracks);
  const { setArgs } = useMusicPlayer();
  useEffect(() => {
    if (!currentMusic) return;
    setArgs({
      src: currentMusic.audioUrl,
      format: ['mp3'],
      html5: true,
      autoplay: true,
    });
  }, [currentMusic, setArgs, tracks]);

  if (!currentMusic) return null;
  return (
    <div
      className="fixed left-0 right-0 bottom-0 h-14 bg-slate-200 border border-t-slate-300 
    flex justify-between items-center px-16"
    >
      <MusicPlayerController />
      <MusicPlayerSeekBar />
      <MusicVolume />
      <MusicMetadata />
    </div>
  );
};

export default MusicPlayer;
