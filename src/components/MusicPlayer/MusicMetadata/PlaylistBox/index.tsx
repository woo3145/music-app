import { useAppSelector } from '../../../../utils/redux/store';

const PlaylistBox = () => {
  const playlist = useAppSelector((state) => state.playlist.playlist);

  return (
    <div className="absolute bottom-14 right-14 w-full max-w-sm h-auto bg-red-300">
      <ul>
        {playlist &&
          playlist.tracks.map((track, idx) => {
            return <PlaylistTrackCard key={idx} track={track} />;
          })}
      </ul>
    </div>
  );
};

interface PlaylistTrackCardProps {
  track: ITrack;
}
const PlaylistTrackCard = ({ track }: PlaylistTrackCardProps) => {
  return <li>{track.name}</li>;
};

export default PlaylistBox;
