import { ChangeEvent } from 'react';
import useMusicPosition from '../../../utils/audio/useMusicPosition';
import { useAppSelector } from '../../../utils/redux/store';
import { secondsToMinutesAndSeconds } from '../../../utils/utils';

const MusicPlayerSeekBar = () => {
  const { seek, percentage, position } = useMusicPosition();
  const duration = useAppSelector((state) => state.musicPlayer.duration);
  const onChangeHandler = (e: ChangeEvent<HTMLInputElement>) => {
    const pos = parseInt(e.target.value);
    seek((duration / 100) * pos);
  };
  return (
    <div className="w-full px-8 flex items-center">
      <p className="w-10 text-sm text-center">
        {secondsToMinutesAndSeconds(position)}
      </p>
      <input
        type="range"
        className="w-full"
        min={0}
        max={100}
        value={percentage}
        step={0.1}
        onChange={onChangeHandler}
      />
      <p className="w-10 text-sm text-center">
        {secondsToMinutesAndSeconds(duration)}
      </p>
    </div>
  );
};

export default MusicPlayerSeekBar;
