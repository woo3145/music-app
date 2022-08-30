import { useEffect, useState } from 'react';
import useMusicPlayer from '../utils/audio/useMusicPlayer';

const MusicPlayerBar = () => {
  const [src, setSrc] = useState('');
  const { setArgs, playToggle, play, pause } = useMusicPlayer();

  useEffect(() => {
    if (src) {
      setArgs({ src: src, format: ['mp3'], html5: true });
    }
  }, [src, setArgs]);

  return (
    <>
      <div
        className="fixed bottom-40 left-0 right-0 h-10 bg-slate-400"
        onClick={() => setSrc('/static/sample2.mp3')}
      ></div>
      <div
        className="fixed bottom-0 left-0 right-0 h-10 bg-slate-400"
        onClick={() => setSrc('/static/sample1.mp3')}
      ></div>
      <button
        className="fixed top-20 left-20 w-40 h-40 bg-blue-700"
        onClick={() => play()}
      >
        Play
      </button>
      <button
        className="fixed top-20 left-80 w-40 h-40 bg-red-700"
        onClick={() => pause()}
      >
        Pause
      </button>
      <button
        className="fixed top-80 left-80 w-40 h-40 bg-green-700"
        onClick={() => playToggle()}
      >
        Toggle
      </button>
    </>
  );
};

export default MusicPlayerBar;
