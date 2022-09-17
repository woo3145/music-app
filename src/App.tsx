import React, { useEffect } from 'react';
import Router from './Router';
import { useAppDispatch } from './utils/redux/store';
import { onAuthStateChanged } from 'firebase/auth';
import { auth } from './services/firebase';
import { login } from './utils/redux/modules/userSlice';
import MusicPlayer from './components/MusicPlayer';
import MusicPlayerProvider from './utils/audio/MusicPlayerProvider';
import { BrowserRouter } from 'react-router-dom';
import { DragDropContext, DropResult } from 'react-beautiful-dnd';
import { moveTrack } from './utils/redux/modules/playlistSlice';

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

  const onDargEndHandler = (result: DropResult) => {
    const { source, destination } = result;

    if (!destination) return;
    if (
      source.droppableId === destination.droppableId &&
      source.index === destination.index
    )
      return;

    dispatch(
      moveTrack({
        sourceIdx: source.index,
        destinationIdx: destination.index,
      })
    );
  };

  return (
    <DragDropContext onDragEnd={onDargEndHandler}>
      <MusicPlayerProvider>
        <BrowserRouter>
          <Router />
          <MusicPlayer />
        </BrowserRouter>
      </MusicPlayerProvider>
    </DragDropContext>
  );
};

export default App;
