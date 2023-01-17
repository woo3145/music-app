import { useMockTracks } from './useMockTracks';

export const useMockPlaylists = () => {
  const tracks = useMockTracks();

  const playlists: IPlaylist[] = [
    {
      id: 1,
      name: 'Test PlayList',
      artworkUrl: tracks[0].artworkUrl,
      description: 'Test',
      tracks,
      creatorName: 'woo3145',
    },
    {
      id: 2,
      name: 'Test PlayList2',
      artworkUrl: tracks[1].artworkUrl,
      description: 'Test',
      tracks,
      creatorName: 'woo3145',
    },
    {
      id: 3,
      name: 'Test PlayList3',
      artworkUrl: tracks[2].artworkUrl,
      description: 'Test',
      tracks,
      creatorName: 'woo3145',
    },
  ];

  return playlists;
};
