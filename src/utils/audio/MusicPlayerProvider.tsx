import React, { createContext, useCallback, useMemo, useState } from 'react';
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

interface IMusicPlayerContext {
  player: Howl | null;
  load: (options: HowlOptions) => void;
}

export const MusicPlayerContext = createContext<IMusicPlayerContext | null>(
  null
);

interface Props {
  children: React.ReactNode;
}

const MusicPlayerProvider = ({ children }: Props) => {
  const [player, setPlayer] = useState<Howl | null>(null);
  const dispatch = useAppDispatch();

  const createHowl = useCallback((howlOptions: HowlOptions): Howl => {
    return new Howl(howlOptions);
  }, []);

  const load = useCallback(
    (howlOption: HowlOptions) => {
      console.log('Load', howlOption);
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
      howl.on('play', () => dispatch(onPlay()));
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
    [createHowl, dispatch]
  );

  const musicPlayerContextValue = useMemo(() => {
    return {
      load,
      player,
    };
  }, [load, player]);

  return (
    <MusicPlayerContext.Provider value={musicPlayerContextValue}>
      {children}
    </MusicPlayerContext.Provider>
  );
};

export default MusicPlayerProvider;
