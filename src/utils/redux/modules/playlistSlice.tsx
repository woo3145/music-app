import { createSlice } from '@reduxjs/toolkit';
import type { PayloadAction } from '@reduxjs/toolkit';

interface PlaylistState {
  currentTrack: ITrack | null; // 현재 재생중인 곡
  playlist: IPlaylist | null; // 플레이 리스트
  currentIdx: number | null; // 플레이 리스트에서 재생중인 곡 인덱스
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
interface MoveTrackAction {
  sourceIdx: number;
  destinationIdx: number;
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
    // 현재 플레이리스트 다음에 곡 추가
    addNext(state, action: PayloadAction<AddMusicAction>) {
      const { track } = action.payload;
      if (state.playlist) {
        const newTracks = [...state.playlist.tracks];
        // 중복 된 트랙 제거
        let existIdx = null;
        newTracks.forEach((t, idx) => {
          if (t.id === track.id) {
            existIdx = idx;
            return true;
          }
        });
        if (existIdx !== null) {
          newTracks.splice(existIdx, 1);
          if (state.currentIdx !== null && state.currentIdx < existIdx) {
            state.currentIdx = state.currentIdx - 1;
          }
        }
        // 현재 재생중인 트랙 다음곡에 추가
        newTracks.splice(
          state.currentIdx !== null ? state.currentIdx + 1 : 0,
          0,
          track
        );
        state.playlist.tracks = [...newTracks];
      }
    },
    // 마지막에 추가
    addLast(state, action: PayloadAction<AddMusicAction>) {
      const { track } = action.payload;
      if (state.playlist === null) return;

      const newTracks = [...state.playlist.tracks];
      // 중복 된 트랙 제거
      let existIdx = null;
      newTracks.forEach((t, idx) => {
        if (t.id === track.id) {
          existIdx = idx;
          return true;
        }
      });
      if (existIdx !== null) {
        newTracks.splice(existIdx, 1);
      }
      state.playlist.tracks = [...newTracks, track];
    },
    // 다음곡으로 이동
    nextTrack(state) {
      if (!state.playlist || state.currentIdx === null) return;
      let changedIdx = 0;
      if (state.currentIdx < state.playlist.tracks.length - 1) {
        changedIdx = state.currentIdx + 1;
      }
      state.currentIdx = changedIdx;
      state.currentTrack = state.playlist.tracks[changedIdx];
    },
    // 이전곡으로 이동
    prevTrack(state) {
      if (!state.playlist || state.currentIdx === null) return;
      let changedIdx = state.playlist.tracks.length - 1;
      if (state.currentIdx > 0) {
        changedIdx = state.currentIdx - 1;
      }
      state.currentIdx = changedIdx;
      state.currentTrack = state.playlist.tracks[changedIdx];
    },

    // 현재 플레이리스트 내에서 곡변경
    selectTrackInPlaylist(state, action: PayloadAction<number>) {
      const selectedIdx = action.payload;
      if (!state.playlist) return;
      if (state.playlist.tracks.length <= selectedIdx) return;
      state.currentIdx = selectedIdx;
      state.currentTrack = state.playlist.tracks[selectedIdx];
    },

    // 플레이리스트에서 선택한 곡 삭제
    deleteTrack(state, action: PayloadAction<number>) {
      const selectedIdx = action.payload;
      if (state.playlist === null || state.currentIdx === null) return;

      // 현재 재생중인 곡이면 무시
      if (selectedIdx === state.currentIdx) return;

      state.playlist.tracks = state.playlist.tracks.filter(
        (track, idx) => idx !== selectedIdx
      );
      if (selectedIdx < state.currentIdx) {
        state.currentIdx = state.currentIdx - 1;
      }
    },

    // 플레이리스트 현재 곡 제외하고 삭제
    clearPlaylist(state) {
      if (!state.playlist) return;
      state.playlist.tracks = state.playlist.tracks.filter(
        (track, idx) => idx === state.currentIdx
      );
      state.currentIdx = 0;
    },

    moveTrack(state, action: PayloadAction<MoveTrackAction>) {
      const { sourceIdx, destinationIdx } = action.payload;
      if (!state.playlist || state.currentIdx === null) return;

      const track = state.playlist.tracks[sourceIdx];
      state.playlist.tracks.splice(sourceIdx, 1);
      state.playlist.tracks.splice(destinationIdx, 0, track);

      if (state.currentIdx === sourceIdx) {
        state.currentIdx = destinationIdx;
        return;
      }
      if (state.currentIdx < sourceIdx && state.currentIdx >= destinationIdx) {
        state.currentIdx = state.currentIdx + 1;
        return;
      }
      if (state.currentIdx > sourceIdx && state.currentIdx <= destinationIdx) {
        state.currentIdx = state.currentIdx - 1;
        return;
      }
    },
  },
});

export const {
  setPlaylist,
  addNext,
  nextTrack,
  prevTrack,
  deleteTrack,
  selectTrackInPlaylist,
  clearPlaylist,
  moveTrack,
} = playlistSlice.actions;

export const playlistReducer = playlistSlice.reducer;
