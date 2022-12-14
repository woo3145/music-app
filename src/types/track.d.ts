interface ITrack {
  id: number;
  name: string;
  artistName: string;
  artworkUrl: string;
  audioUrl: string;
  genre: string[];
}

interface IPlaylist {
  id: number;
  name: string;
  artworkUrl: string;
  description: string;
  tracks: ITrack[];
  creatorName: string;
}
