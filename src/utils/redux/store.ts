import { configureStore } from '@reduxjs/toolkit';
import { useDispatch, useSelector } from 'react-redux';
import type { TypedUseSelectorHook } from 'react-redux';
import { userReducer } from './modules/userSlice';
import { musicPlayerReducer } from './modules/musicPlayerSlice';

export const store = configureStore({
  reducer: {
    user: userReducer,
    musicPlayer: musicPlayerReducer,
  },
});

type RootState = ReturnType<typeof store.getState>;
type AppDispatch = typeof store.dispatch;

export const useAppDispatch: () => AppDispatch = useDispatch;
export const useAppSelector: TypedUseSelectorHook<RootState> = useSelector;
