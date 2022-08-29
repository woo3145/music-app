import { useCallback, useMemo, useState } from 'react';
import { Howl, HowlOptions } from 'howler';
import { useAppDispatch } from '../redux/store';
import {
  onEnd,
  onLoad,
  onLoadError,
  onPause,
  onPlay,
  onPlayError,
  startLoad,
} from '../redux/modules/musicPlayerSlice';
import { getErrorMessage } from '../utils';

const useMusicPlayer = () => {
  const [player, setPlayer] = useState<Howl | null>(null);
  const dispatch = useAppDispatch();

  const createHowl = useCallback((howlOptions: HowlOptions): Howl => {
    return new Howl(howlOptions);
  }, []);

  const load = useCallback(
    (howlOption: HowlOptions) => {
      const { src, autoplay = false, html5 = false, ...rest } = howlOption;
      dispatch(startLoad);

      const howl = createHowl({
        src: src,
        autoplay: autoplay,
        html5: html5,
        ...rest,
      });

      if (howl.state() === 'loaded') {
        dispatch(onLoad({ duration: howl.duration() }));
      }

      howl.on('load', () => dispatch(onLoad({ duration: howl.duration() })));
      howl.on('play', () => void dispatch(onPlay()));
      howl.on('pause', () => dispatch(onPause()));
      howl.on('end', () => dispatch(onEnd()));
      howl.on('playerror', (id, error) =>
        dispatch(onPlayError({ error: getErrorMessage(error) }))
      );
      howl.on('loaderror', (id, error) =>
        dispatch(onLoadError({ error: getErrorMessage(error) }))
      );

      setPlayer(howl);
    },
    [dispatch, createHowl]
  );

  const playtoggle = useCallback(() => {
    if (!player) return;

    if (player.playing()) {
      player.pause();
    } else {
      player.play();
    }
  }, [player]);

  return useMemo(() => {
    return { load, playtoggle };
  }, [load, playtoggle]);
};

export default useMusicPlayer;
