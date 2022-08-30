import React, {
  createContext,
  useCallback,
  useMemo,
  useRef,
  useState,
} from 'react';
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
  const [player, setPlayer] = useState<Howl | null>(null); // 바깥에 내보내는 캡쳐된 player의 값
  const playerRef = useRef<Howl>(); // 해당 컴포넌트에서 player의 실시간 상태를 조작하기 위한 참조값
  const dispatch = useAppDispatch();

  const createHowl = useCallback((howlOptions: HowlOptions): Howl => {
    return new Howl(howlOptions);
  }, []);

  const load = useCallback(
    (howlOption: HowlOptions) => {
      const { src, autoplay = false, html5 = false, ...rest } = howlOption;

      let isPlaying = false;
      if (playerRef.current) {
        // @ts-ignore
        const { _src: prevSrc } = playerRef.current;

        if (prevSrc === src) return; // 같은 음악을 로드한경우 무시

        // 현재 음악이 재생중일경우 멈추고 삭제
        isPlaying = playerRef.current.playing();
        if (isPlaying) {
          playerRef.current.stop();
          playerRef.current.off();
          playerRef.current = undefined;
        }
      }

      dispatch(startLoad);

      const howl = createHowl({
        src: src,
        autoplay: isPlaying || autoplay,
        html5: html5,
        ...rest,
      });

      if (howl.state() === 'loaded') {
        dispatch(onLoad({ duration: howl.duration() }));
      }

      howl.on('load', () => dispatch(onLoad({ duration: howl.duration() })));
      howl.on('play', () => dispatch(onPlay()));
      howl.on('pause', () => dispatch(onPause()));
      howl.on('stop', () => dispatch(onPause()));
      howl.on('end', () => dispatch(onEnd()));
      howl.on('playerror', (id, error) =>
        dispatch(onPlayError({ error: getErrorMessage(error) }))
      );
      howl.on('loaderror', (id, error) =>
        dispatch(onLoadError({ error: getErrorMessage(error) }))
      );

      setPlayer(howl);
      playerRef.current = howl;
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
