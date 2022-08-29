import React, { useEffect } from 'react';
import Router from './Router';
import { useAppDispatch } from './utils/redux/store';
import { onAuthStateChanged } from 'firebase/auth';
import { auth } from './services/firebase';
import { login } from './utils/redux/modules/userSlice';
import MusicPlayerBar from './components/MusicPlayerBar';
import MusicPlayerProvider from './utils/audio/MusicPlayerProvider';

const App = () => {
  const dispatch = useAppDispatch();

  useEffect(() => {
    onAuthStateChanged(auth, (userAuth) => {
      if (userAuth) {
        dispatch(
          login({
            email: userAuth.email,
            uid: userAuth.uid,
            displayName: userAuth.displayName,
            photoUrl: userAuth.photoURL,
          })
        );
      }
    });
  }, [dispatch]);

  return (
    <MusicPlayerProvider>
      <Router />
      <MusicPlayerBar />
    </MusicPlayerProvider>
  );
};

export default App;
