import { ChangeEvent, useCallback, useEffect, useState } from 'react';
import { IoVolumeHigh, IoVolumeMute } from 'react-icons/io5';
import useMusicPlayer from '../../../utils/audio/useMusicPlayer';

const MusicVolume = () => {
  const { mute, player, volume } = useMusicPlayer();
  const [curVolume, setCurVolume] = useState(100);
  const [muted, setMuted] = useState(false);

  useEffect(() => {
    // 곡이 변경되면 뮤트 해제
    setMuted(false);
  }, [player]);

  const muteToggle = () => {
    if (!player) return;

    if (muted) {
      setMuted(false);
      mute(false);
    } else {
      setMuted(true);
      mute(true);
    }
  };

  const onChangeVolume = useCallback((e: ChangeEvent<HTMLInputElement>) => {
    const volumeValue = parseInt(e.target.value);
    setCurVolume(volumeValue);
  }, []);

  // volume 조절
  // musicPlyer hook에서 volume메소드가 player의 변화를 감지하여 곡이 변경되어도 볼륨상태 유지
  useEffect(() => {
    volume(curVolume / 100);
  }, [curVolume, volume]);

  return (
    <div className="shrink-0 mr-8 cursor-pointer flex">
      {muted ? (
        <IoVolumeMute className="text-xl" onClick={muteToggle} />
      ) : (
        <IoVolumeHigh className="text-xl" onClick={muteToggle} />
      )}
      <input
        type="range"
        aria-orientation="vertical"
        className="w-20 ml-2"
        min={0}
        max={100}
        defaultValue={100}
        disabled={muted}
        onChange={onChangeVolume}
      />
    </div>
  );
};

export default MusicVolume;
