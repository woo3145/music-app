import React, { useEffect } from 'react';
import Router from './Router';
import { useAppDispatch } from './utils/redux/store';
import { onAuthStateChanged } from 'firebase/auth';
import { auth } from './services/firebase';
import { login } from './utils/redux/modules/userSlice';
import MusicPlayerBar from './components/MusicPlayerBar';
import useMusicPlayer from './utils/audio/useMusicPlayer';

const App = () => {
  const dispatch = useAppDispatch();
  const { load, playtoggle } = useMusicPlayer();
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

  useEffect(() => {
    load({ src: '/static/sample1.mp3', format: ['mp3'] });
  }, [load]);

  return (
    <div>
      <Router />
      <MusicPlayerBar />
      <button
        className="fixed top-40 left-40 w-40 h-40 bg-red-300"
        onClick={() => playtoggle()}
      >
        임시 플레이버튼
      </button>
    </div>
  );
};

export default App;
