import { HowlOptions } from 'howler';
import { useCallback, useContext, useEffect, useMemo, useState } from 'react';
import { MusicPlayerContext } from './MusicPlayerProvider';

const useMusicPlayer = () => {
  const [args, setArgs] = useState<HowlOptions | null>(null);
  const { player, load } = useContext(MusicPlayerContext)!;
  useEffect(() => {
    const { src, ...rest } = args || {};
    if (!src) return;
    console.log(src);
    load({ src, ...rest });
  }, [args, load]);

  const controller = useMemo(() => {
    return {
      play: player
        ? () => {
            player.play();
            console.log(player);
          }
        : () => {},
      pause: player ? () => player.pause() : () => {},
    };
  }, [player]);

  const playToggle = useCallback(() => {
    if (!player) return;

    if (player.playing()) {
      player.pause();
    } else {
      player.play();
    }
  }, [player]);

  return useMemo(() => {
    return {
      ...controller,
      setArgs,
      player,
      playToggle,
    };
  }, [controller, player, playToggle]);
};

export default useMusicPlayer;
