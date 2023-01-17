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
import { nextTrack } from '../redux/modules/playlistSlice';

interface IMusicPlayerContext {
  player: Howl | null;
  load: (options: HowlOptions) => void;
}
export const MusicPlayerContext = createContext<IMusicPlayerContext | null>(
  null
);

interface IMusicPlayerPositionContext {
  position: number;
  setPosition: React.Dispatch<React.SetStateAction<number>>;
}
export const MusicPlayerPositionContext =
  createContext<IMusicPlayerPositionContext | null>(null);

interface Props {
  children: React.ReactNode;
}

const MusicPlayerProvider = ({ children }: Props) => {
  const [player, setPlayer] = useState<Howl | null>(null); // 바깥에 내보내는 캡쳐된 player의 값
  const [position, setPosition] = useState(0); // 바깥에 내보내는 position 값 (곡 변경 시 0으로 가기위함)

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
        // 이전 트랙 삭제
        playerRef.current.unload();
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
      howl.on('end', () => {
        dispatch(onEnd());
        // 다음곡이 있다면 자동 재생
        dispatch(nextTrack());
      });
      howl.on('playerror', (id, error) => {
        dispatch(
          onPlayError({
            error: '플레이 중 에러가 발생하였습니다.',
          })
        );
      });
      howl.on('loaderror', (id, error: any) => {
        dispatch(
          onLoadError({
            error: '로드 중 에러가 발생하였습니다.',
          })
        );
      });

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
  const musicPlayerPositionContextValue = useMemo(() => {
    return {
      position,
      setPosition,
    };
  }, [position, setPosition]);

  return (
    <MusicPlayerContext.Provider value={musicPlayerContextValue}>
      <MusicPlayerPositionContext.Provider
        value={musicPlayerPositionContextValue}
      >
        {children}
      </MusicPlayerPositionContext.Provider>
    </MusicPlayerContext.Provider>
  );
};

export default MusicPlayerProvider;
