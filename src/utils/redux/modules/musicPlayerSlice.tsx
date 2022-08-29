import { createSlice } from '@reduxjs/toolkit';
import type { PayloadAction } from '@reduxjs/toolkit';

interface MusicPlayerState {
  isLoading: boolean;
  isPlaying: boolean;
  isReady: boolean;
  isEnded: boolean;
  duration: number;
  error: string;
}

const initialState: MusicPlayerState = {
  isLoading: true,
  isPlaying: false,
  isReady: false,
  isEnded: false,
  duration: 0,
  error: '',
};

interface LoadAction {
  duration: number;
}
interface ErrorAction {
  error: string;
}

export const musicPlayerSlice = createSlice({
  name: 'musicPlayer',
  initialState,
  reducers: {
    startLoad: (state) => {
      state.isReady = false;
      state.isPlaying = false;
      state.isLoading = true;
      state.isEnded = false;
      state.duration = 0;
      state.error = '';
    },
    onLoad: (state, action: PayloadAction<LoadAction>) => {
      state.isReady = true;
      state.isLoading = false;
      state.isEnded = false;
      state.duration = action.payload.duration;
      state.error = '';
    },
    onPlay: (state) => {
      state.isPlaying = true;
      state.isEnded = false;
      state.error = '';
    },
    onPause: (state) => {
      state.isPlaying = false;
      state.error = '';
    },
    onEnd: (state) => {
      state.isPlaying = false;
      state.isEnded = true;
      state.error = '';
    },
    onPlayError: (state, action: PayloadAction<ErrorAction>) => {
      state.isPlaying = false;
      state.error = action.payload.error;
    },
    onLoadError: (state, action: PayloadAction<ErrorAction>) => {
      state.isPlaying = false;
      state.isLoading = false;
      state.error = action.payload.error;
    },
  },
});

export const {
  startLoad,
  onLoad,
  onPlay,
  onPause,
  onEnd,
  onPlayError,
  onLoadError,
} = musicPlayerSlice.actions;

export const musicPlayerReducer = musicPlayerSlice.reducer;
