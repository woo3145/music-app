import {
  useCallback,
  useContext,
  useEffect,
  useMemo,
  useRef,
  useState,
} from 'react';
import { useAppSelector } from '../redux/store';
import { MusicPlayerContext } from './MusicPlayerProvider';

const useMusicPosition = () => {
  const { player } = useContext(MusicPlayerContext)!;
  const { isPlaying, duration } = useAppSelector((state) => state.musicPlayer);
  const [position, setPosition] = useState(0);
  const animationFrameRef = useRef<number>(); //requestAnimationFrame의 id

  const currentIdx = useAppSelector((state) => state.playlist.currentIdx);

  useEffect(() => {
    if (player) {
      setPosition(player.seek() as number);
    }
  }, [player, isPlaying]);

  // progress bar 구현 시 dom조작으로 구현한다면 useLayoutEffect를 사용(깜빡임 방지)
  // input으로 구현 시 useEffect 사용
  useEffect(() => {
    const animation = () => {
      setPosition(player?.seek() as number);
      animationFrameRef.current = requestAnimationFrame(animation);
    };

    if (player && isPlaying) {
      animationFrameRef.current = requestAnimationFrame(animation);
    }

    return () => {
      if (!animationFrameRef.current) return;
      cancelAnimationFrame(animationFrameRef.current);
    };
  }, [isPlaying, player]);

  const seek = useCallback(
    (pos: number) => {
      if (!player) return;
      setPosition(pos);
      player.seek(pos);
    },
    [player]
  );

  useEffect(() => {
    seek(0);
  }, [currentIdx, seek]);

  const percentage = useMemo(() => {
    if (!player) return 0;

    return (position / duration) * 100 || 0;
  }, [duration, position, player]);

  return {
    percentage, // 곡의 진행률 (단위: %)
    position, // 곡의 진행률 (단위: 초)
    seek,
  };
};

export default useMusicPosition;
