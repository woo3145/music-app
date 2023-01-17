import { useMockTracks } from './useMockTracks';

export const useMockPlaylists = () => {
  const tracks = useMockTracks();

  const bluesPlayList = tracks.filter((track) => track.genre.includes('Blues'));
  const jazzPlayList = tracks.filter((track) => track.genre.includes('Jazz'));
  const LouisPlayList = tracks.filter(
    (track) => track.artistName === 'Louis Adrien'
  );
  const playlists: IPlaylist[] = [
    {
      id: 1,
      name: 'Blues !',
      artworkUrl: bluesPlayList[0].artworkUrl,
      description: 'Test',
      tracks: bluesPlayList,
      creatorName: 'woo3145',
    },
    {
      id: 2,
      name: 'Jazz !',
      artworkUrl: jazzPlayList[0].artworkUrl,
      description: 'Test',
      tracks: jazzPlayList,
      creatorName: 'jazzman',
    },
    {
      id: 3,
      name: 'Happy Go Lucky',
      artworkUrl: LouisPlayList[0].artworkUrl,
      description: 'Test',
      tracks: LouisPlayList,
      creatorName: 'woo3145',
    },
  ];

  return playlists;
};
