import { useCallback, useContext, useEffect, useMemo, useRef } from 'react';
import { useAppSelector } from '../redux/store';
import {
  MusicPlayerContext,
  MusicPlayerPositionContext,
} from './MusicPlayerProvider';

const useMusicPosition = () => {
  const { player } = useContext(MusicPlayerContext)!;
  const { isPlaying, duration } = useAppSelector((state) => state.musicPlayer);
  const { position, setPosition } = useContext(MusicPlayerPositionContext)!;
  const animationFrameRef = useRef<number>(); //requestAnimationFrame의 id

  const currentTrack = useAppSelector((state) => state.playlist.currentTrack);

  useEffect(() => {
    if (player) {
      setPosition(player.seek() as number);
    }
  }, [player, isPlaying, setPosition]);

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
  }, [isPlaying, player, setPosition]);

  const seek = useCallback(
    (pos: number) => {
      if (!player) return;
      setPosition(pos);
      player.seek(pos);
    },
    [player, setPosition]
  );

  useEffect(() => {
    seek(0);
  }, [seek, currentTrack]);

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
