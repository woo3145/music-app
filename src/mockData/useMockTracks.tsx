// id: 2 ~ 10 출처
// artlist.io  저작권x

export const useMockTracks = () => {
  const tracks: ITrack[] = [
    {
      id: 1,
      name: "Woo's Blues",
      artworkUrl:
        'https://images.unsplash.com/photo-1579797990768-555ac3a4c7e5?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8NHx8Ymx1ZXN8ZW58MHx8MHx8&auto=format&fit=crop&w=500&q=60',
      artistName: 'woo3145',
      audioUrl: '/static/woo3145 - blues.mp3',
      genre: ['Blues'],
    },
    {
      id: 2,
      name: 'Goodnight Everybody',
      artworkUrl:
        'https://images.unsplash.com/photo-1468276311594-df7cb65d8df6?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MTR8fG5pZ2h0fGVufDB8fDB8fA%3D%3D&auto=format&fit=crop&w=500&q=60',
      artistName: 'Sémø',
      audioUrl: '/static/Sémø - Goodnight Everybody.mp3',
      genre: ['Blues', 'Jazz'],
    },
    {
      id: 3,
      name: 'Goodness Gracious',
      artworkUrl:
        'https://images.unsplash.com/photo-1614464160728-b3011bbf40c4?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1470&q=80',
      artistName: 'Louis Adrien',
      audioUrl: '/static/Louis Adrien - Goodness Gracious.mp3',
      genre: ['Jazz'],
    },
    {
      id: 4,
      name: 'Christmas Day (inst.)',
      artworkUrl:
        'https://images.unsplash.com/photo-1529973625058-a665431328fb?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=687&q=80',
      artistName: 'Foster',
      audioUrl: '/static/Foster - Christmas Day - Instrumental Version.mp3',
      genre: ['Jazz'],
    },
    {
      id: 5,
      name: 'The Beat Detector',
      artworkUrl:
        'https://images.unsplash.com/photo-1546528377-9049abbac32f?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8NHx8aGlwJTIwaG9wfGVufDB8fDB8fA%3D%3D&auto=format&fit=crop&w=500&q=60',
      artistName: 'Novembers',
      audioUrl: '/static/Novembers - The Beat Detector.mp3',
      genre: ['Jazz', 'Hip Hop'],
    },

    {
      id: 6,
      name: 'Just One More Thing',
      artworkUrl:
        'https://images.unsplash.com/photo-1619983081593-e2ba5b543168?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MTF8fGFsYnVtfGVufDB8fDB8fA%3D%3D&auto=format&fit=crop&w=500&q=60',
      artistName: 'Bob Hart',
      audioUrl: '/static/Bob Hart - Just One More Thing.mp3',
      genre: ['Jazz'],
    },
    {
      id: 7,
      name: 'On the Run',
      artworkUrl:
        'https://images.unsplash.com/photo-1614464160728-b3011bbf40c4?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1470&q=80',
      artistName: 'Louis Adrien',
      audioUrl: '/static/Louis Adrien - On the Run.mp3',
      genre: ['Jazz'],
    },
    {
      id: 8,
      name: 'Happy Go Lucky',
      artworkUrl:
        'https://images.unsplash.com/photo-1614464160728-b3011bbf40c4?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1470&q=80',
      artistName: 'Louis Adrien',
      audioUrl: '/static/Louis Adrien - Happy Go Lucky.mp3',
      genre: ['Jazz'],
    },
    {
      id: 9,
      name: 'Nice and Easy',
      artworkUrl:
        'https://images.unsplash.com/photo-1614464160728-b3011bbf40c4?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1470&q=80',
      artistName: 'Louis Adrien',
      audioUrl: '/static/Louis Adrien - Nice and Easy.mp3',
      genre: ['Jazz'],
    },
    {
      id: 10,
      name: 'Escape to Sicily',
      artworkUrl:
        'https://images.unsplash.com/photo-1614464160728-b3011bbf40c4?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1470&q=80',
      artistName: 'Louis Adrien',
      audioUrl: '/static/Louis Adrien - Escape to Sicily.mp3',
      genre: ['Jazz'],
    },
    {
      id: 11,
      name: 'Error Music',
      artworkUrl:
        'https://images.unsplash.com/photo-1594322436404-5a0526db4d13?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8OXx8ZXJyb3J8ZW58MHx8MHx8&auto=format&fit=crop&w=500&q=60',
      artistName: 'Error',
      audioUrl: '/static/error',
      genre: ['Error'],
    },
  ];
  return tracks;
};
