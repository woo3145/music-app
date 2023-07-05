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

  const error = useAppSelector((state) => state.musicPlayer.error);

  if (error) {
    return (
      <div className="flex items-center w-full px-8">
        <p>{error}</p>
      </div>
    );
  }
  return (
    <div className="absolute left-0 flex items-center w-full xl:px-8 -top-2 xl:static">
      <p className="hidden w-10 text-sm text-center xl:block">
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
      <p className="hidden w-10 text-sm text-center xl:block">
        {secondsToMinutesAndSeconds(duration)}
      </p>
    </div>
  );
};

export default MusicPlayerSeekBar;
