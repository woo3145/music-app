import { Howl } from 'howler';
import { useContext, useEffect, useState } from 'react';
import { useAppSelector } from '../redux/store';
import { MusicPlayerContext } from './MusicPlayerProvider';

const useMusicPosition = () => {
  const { player } = useContext(MusicPlayerContext)!;
  const { isPlaying, duration } = useAppSelector((state) => state.musicPlayer);
  const [position, setPosition] = useState(0);

  useEffect(() => {
    if (player) {
      setPosition(player.seek() as number);
    }
  }, [player]);

  useEffect(() => {
    let updateTime: number;
    if (player && isPlaying) {
      updateTime = window.setInterval(() => {
        setPosition((player.seek() / duration) * 100);
      }, 1000);
    }
    return () => {
      window.clearInterval(updateTime);
    };
  }, [isPlaying, player, duration]);

  const seek = (pos: number) => {
    if (!player) return;
    const result = player.seek((pos * duration) / 100) as unknown;
    if (result instanceof Howl) {
      console.log(result.seek());
      const updatedPos = result.seek() as number;
      setPosition((updatedPos / duration) * 100);
    }
  };

  return {
    position,
    seek,
  };
};

export default useMusicPosition;
