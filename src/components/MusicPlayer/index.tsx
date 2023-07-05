import { useEffect, useState } from 'react';
import useMusicPlayer from '../../utils/audio/useMusicPlayer';
import { useAppSelector } from '../../utils/redux/store';
import MusicMetadata from './MusicMetadata';
import MusicPlayerController from './MusicPlayerController';
import MusicPlayerSeekBar from './MusicPlayerSeekBar';
import MusicVolume from './MusicVolume';
import PlaylistPopup from './PlaylistPopup';

const MusicPlayer = () => {
  const currentMusic = useAppSelector((state) => state.playlist.currentTrack);
  const { setArgs } = useMusicPlayer();

  const [playlistVisible, setPlaylistVisible] = useState(false);
  const playlistToggle = () => {
    setPlaylistVisible(!playlistVisible);
  };

  useEffect(() => {
    if (!currentMusic) return;
    setArgs({
      src: currentMusic.audioUrl,
      format: ['mp3'],
      html5: true,
      autoplay: true,
    });
  }, [currentMusic, setArgs]);

  if (!currentMusic) return null;
  return (
    <div className="fixed bottom-0 left-0 right-0 flex items-center justify-between px-4 border h-14 bg-slate-200 border-t-slate-300 xl:px-16">
      <MusicPlayerController />
      <MusicPlayerSeekBar />
      <MusicVolume />
      <MusicMetadata playlistToggle={playlistToggle} />
      <>
        {playlistVisible && <PlaylistPopup playlistToggle={playlistToggle} />}
      </>
    </div>
  );
};

export default MusicPlayer;
