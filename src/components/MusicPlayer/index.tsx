import MusicMetadata from './MusicMetadata';
import MusicPlayerController from './MusicPlayerController';
import MusicPlayerSeekBar from './MusicPlayerSeekBar';

const MusicPlayer = () => {
  return (
    <div
      className="fixed left-0 right-0 bottom-0 h-14 bg-slate-200 border border-t-slate-300 
    flex justify-between items-center px-16"
    >
      <MusicPlayerController />
      <MusicPlayerSeekBar />
      <MusicMetadata />
    </div>
  );
};

export default MusicPlayer;
