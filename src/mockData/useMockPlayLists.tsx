import { useMockTracks } from './useMockTracks';

export const useMockPlayLists = () => {
  const tracks = useMockTracks();

  const playLists: IPlaylist[] = [
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
    {
      id: 4,
      name: 'Test PlayList',
      artworkUrl: tracks[0].artworkUrl,
      description: 'Test',
      tracks,
      creatorName: 'woo3145',
    },
    {
      id: 5,
      name: 'Test PlayList2',
      artworkUrl: tracks[1].artworkUrl,
      description: 'Test',
      tracks,
      creatorName: 'woo3145',
    },
    {
      id: 6,
      name: 'Test PlayList3',
      artworkUrl: tracks[2].artworkUrl,
      description: 'Test',
      tracks,
      creatorName: 'woo3145',
    },
    {
      id: 7,
      name: 'Test PlayList',
      artworkUrl: tracks[0].artworkUrl,
      description: 'Test',
      tracks,
      creatorName: 'woo3145',
    },
    {
      id: 8,
      name: 'Test PlayList2',
      artworkUrl: tracks[1].artworkUrl,
      description: 'Test',
      tracks,
      creatorName: 'woo3145',
    },
    {
      id: 9,
      name: 'Test PlayList3',
      artworkUrl: tracks[2].artworkUrl,
      description: 'Test',
      tracks,
      creatorName: 'woo3145',
    },
  ];

  return playLists;
};
