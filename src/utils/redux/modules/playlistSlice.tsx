import { createSlice } from '@reduxjs/toolkit';
import type { PayloadAction } from '@reduxjs/toolkit';
import { defaultPhotoUrl } from '../../../services/auth/useCreateUserWithEmailAndPassword';

interface PlaylistState {
  currentTrack: ITrack | null;
  playlist: IPlaylist | null;
  currentIdx: number | null;
}

const initialState: PlaylistState = {
  currentTrack: null,
  playlist: null,
  currentIdx: null,
};

interface SetPlaylistAction {
  playlist: IPlaylist;
  currentIdx: number;
}
interface AddMusicAction {
  track: ITrack;
}
interface NewPlaylistAction {
  track?: ITrack;
  creatorName: string;
}

export const playlistSlice = createSlice({
  name: 'playlistSlice',
  initialState,
  reducers: {
    // 새 플레이리스트 재생
    setPlaylist(state, action: PayloadAction<SetPlaylistAction>) {
      const { playlist, currentIdx } = action.payload;
      state.playlist = playlist;
      state.currentIdx = currentIdx;
      state.currentTrack =
        playlist.tracks[playlist.tracks.length > currentIdx ? currentIdx : 0];
    },
    // 현재 플레이리스트에 곡 추가
    addPlaylist(state, action: PayloadAction<AddMusicAction>) {
      if (state.playlist) {
        state.playlist.tracks = [
          ...state.playlist.tracks,
          action.payload.track,
        ];
      }
    },
    // 새 플레이 리스트 생성 (현재 플레이리스트가 없으면서 곡을 추가 할 경우, 새 플레이 리스트를 생성 할 경우)
    newPlaylist(state, action: PayloadAction<NewPlaylistAction>) {
      const defaultPlaylist: IPlaylist = {
        id: 0,
        name: 'New playlist',
        artworkUrl: defaultPhotoUrl,
        description: '',
        tracks: action.payload.track ? [action.payload.track] : [],
        creatorName: action.payload.creatorName,
      };
      state.playlist = defaultPlaylist;
      state.currentIdx = action.payload.track ? 0 : null;
    },
    // 다음곡으로 이동
    nextTrack(state) {
      if (!state.playlist || !state.currentIdx) return;
      let changedIdx = 0;
      if (state.currentIdx < state.playlist.tracks.length - 1) {
        changedIdx = state.currentIdx + 1;
      }
      state.currentIdx = changedIdx;
      state.currentTrack = state.playlist.tracks[changedIdx];
    },
    // 이전곡으로 이동
    prevTrack(state) {
      if (!state.playlist || !state.currentIdx) return;
      let changedIdx = state.playlist.tracks.length - 1;
      if (state.currentIdx > 0) {
        changedIdx = state.currentIdx - 1;
      }
      state.currentIdx = changedIdx;
      state.currentTrack = state.playlist.tracks[changedIdx];
    },

    // 현재 플레이리스트 내에서 곡변경
    selectTrackInPlaylist(state, action: PayloadAction<number>) {
      const idx = action.payload;
      if (!state.playlist) return;
      if (state.playlist.tracks.length <= idx) return;
      state.currentIdx = idx;
      state.currentTrack = state.playlist.tracks[idx];
    },
  },
});

export const {
  setPlaylist,
  addPlaylist,
  newPlaylist,
  nextTrack,
  prevTrack,
  selectTrackInPlaylist,
} = playlistSlice.actions;

export const playlistReducer = playlistSlice.reducer;
