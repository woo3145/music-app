import { ChangeEvent } from 'react';
import useMusicPosition from '../../../utils/audio/useMusicPosition';

const MusicPlayerSeekBar = () => {
  const { position, seek } = useMusicPosition();

  const onChangeHandler = (e: ChangeEvent<HTMLInputElement>) => {
    const pos = parseInt(e.target.value);
    seek(pos);
  };
  return (
    <div className="w-full px-8 flex items-center">
      <input
        type="range"
        className="w-full"
        min={0}
        max={100}
        step={1}
        value={position}
        onChange={onChangeHandler}
      />
    </div>
  );
};

export default MusicPlayerSeekBar;
