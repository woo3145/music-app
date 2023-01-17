import { configureStore } from '@reduxjs/toolkit';
import { useDispatch, useSelector } from 'react-redux';
import type { TypedUseSelectorHook } from 'react-redux';
import { musicPlayerReducer } from './modules/musicPlayerSlice';
import { playlistReducer } from './modules/playlistSlice';

export const store = configureStore({
  reducer: {
    musicPlayer: musicPlayerReducer,
    playlist: playlistReducer,
  },
});

type RootState = ReturnType<typeof store.getState>;
type AppDispatch = typeof store.dispatch;

export const useAppDispatch: () => AppDispatch = useDispatch;
export const useAppSelector: TypedUseSelectorHook<RootState> = useSelector;
