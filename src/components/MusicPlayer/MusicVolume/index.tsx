import { useEffect, useState } from 'react';
import { IoVolumeHigh, IoVolumeMute } from 'react-icons/io5';
import useMusicPlayer from '../../../utils/audio/useMusicPlayer';

const MusicVolume = () => {
  const { mute, player } = useMusicPlayer();
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

  return (
    <div className="shrink-0 mr-8 cursor-pointer">
      {muted ? (
        <IoVolumeMute className="text-xl" onClick={muteToggle} />
      ) : (
        <IoVolumeHigh className="text-xl" onClick={muteToggle} />
      )}
    </div>
  );
};

export default MusicVolume;
